cppParser=@cppParser
delete @cppParser
#stolen from Prototype.JS:
gsub=(source,pattern,replacement)->
	result=""
	while source.length>0
		match=source.match(pattern)
		if match
			result+= source.slice 0,match.index
			result+= replacement(match) ? ''
			source= source.slice match.index+match[0].length
		else
			result+= source
			source=""
	return result


PREPROCESS_STATES=
	DEFAULT:		0
	IF_ACCEPTED:	1
	IF_REJECTED:	2
	IF_FINISHED:	3

evaluate_macros=(macros,code,__LINE__)->
	word=""
	parts=[]
	begin=0
	macros["__LINE__"]=""+__LINE__
	maybe_found_word=->
		if word of macros
			parts.push(code.substring(begin,i-word.length))
			if (typeof macros[word])=='string'
				parts.push(macros[word])
			else
				null#TODO: implement macro functions
			begin=i
	for ch,i in code
		if ch.match(/^[A-Za-z0-9_]$/)
			word+=ch
		else
			maybe_found_word()
			word=""
	maybe_found_word()
	parts.push(code.substring(begin,code.length))
	parts.join('')

evaluate_condition=(macros,code,__LINE__)->
	cppParser.yy._macros=macros
	cppParser.parse(code)==1

elif_regex=/#elif[ \t]+(.+)$/

@cpp=(code,macros)->
	block_comment=false
	lines=code.replace(/\r/g,"").split("\n").map (line)->
		if block_comment
			idx=line.indexOf("*/")
			if idx<0
				return ""
			else
				block_comment=off
				return line.substr(idx+2)#the two is for ("*/").length
		else
			idx=line.indexOf('/*')
			if idx<0
				return line
			else
				block_comment=on
				return line.substr(0,idx)
	lines=lines.map (line)->
		return line.replace(/\/\/.*$/,"")
	states=[]
	state=PREPROCESS_STATES.DEFAULT
	for line_orig,i in lines
		lines[i]=line_orig.replace(/\/\/.*$/,"")
		line_orig=lines[i]
		line=line_orig.trim()
		if state==PREPROCESS_STATES.IF_REJECTED
			lines[i]=""
			if line=='#endif'
				state=states.pop()
			else if line=='#else'
				state=PREPROCESS_STATES.IF_ACCEPTED
			else
				match=line.match(elif_regex)
				state=PREPROCESS_STATES.IF_ACCEPTED if match and evaluate_condition(macros,match[1],i+1)
		else if state==PREPROCESS_STATES.IF_FINISHED
			lines[i]=""
			if line=='#endif'
				state=states.pop()
		else
			match=line.match(/#define[ \t]+([A-Za-z_][A-Za-z_0-9]*)[ \t]+(.+)$/)
			if match
				macros[match[1]]=evaluate_macros(macros,match[2],i+1)
				lines[i]=""
				continue
			match=line.match(/#error[ \t]+(.+)$/)
			if match
				throw new Error("Custom Error at line #{i+1}: #{match[1]}")
			match=line.match(/#undef[ \t]+([A-Za-z_][A-Za-z_0-9]*)$/)
			if match
				delete macros[match[1]]
				lines[i]=""
				continue
			if line=='#endif'
				throw new Error("Line #{i+1}, expected to be in an accepted if") unless state== PREPROCESS_STATES.IF_ACCEPTED
				lines[i]=""
				state=states.pop()
				continue
			if line=="#else" or line.match(elif_regex)
				if state!=PREPROCESS_STATES.IF_ACCEPTED
					throw new Error("Line #{i+1}, expected to be in an accepted if by this point")
				state=PREPROCESS_STATES.IF_FINISHED
				lines[i]=""
				continue
			match=line.match(/#ifdef[ \t]+([A-Za-z_][A-Za-z_0-9]*)$/)
			if match
				states.push state
				if match[1] of macros then state=PREPROCESS_STATES.IF_ACCEPTED else state=PREPROCESS_STATES.IF_REJECTED
				lines[i]=""
				continue
			match=line.match(/#if[ \t]+(.+)$/)
			if match
				states.push state
				if evaluate_condition(macros,match[1],i+1) then state=PREPROCESS_STATES.IF_ACCEPTED else state=PREPROCESS_STATES.IF_REJECTED
				lines[i]=""
				continue
			lines[i]=evaluate_macros(macros,line_orig,i+1)
				
	lines.join("\n")