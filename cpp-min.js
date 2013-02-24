var cppParser=function(){var parser={trace:function trace(){},yy:{},symbols_:{error:2,expressions:3,e:4,EOF:5,DEFINED:6,"(":7,IDENTIFIER:8,")":9,"~":10,"!":11,"%":12,"<<":13,">>":14,"==":15,"!=":16,">=":17,"<=":18,"<":19,">":20,"&":21,"^":22,"|":23,"&&":24,"||":25,"+":26,"-":27,"*":28,"/":29,NUMBER:30,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",6:"DEFINED",7:"(",8:"IDENTIFIER",9:")",10:"~",11:"!",12:"%",13:"<<",14:">>",15:"==",16:"!=",17:">=",18:"<=",19:"<",20:">",21:"&",22:"^",23:"|",24:"&&",25:"||",26:"+",27:"-",28:"*",29:"/",30:"NUMBER"},productions_:[0,[3,2],[4,4],[4,1],[4,2],[4,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,3],[4,1]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 1:return $$[$0-1];break;case 2:this.$=$$[$0-1]in yy._macros?1:0;break;case 3:this.$=Number(yy._macros[$$[$0]]);break;case 4:this.$=~$$[$0-1];break;case 5:this.$=$$[$0-1]===0?1:0;break;case 6:this.$=$$[$0-2]%$$[$0];break;case 7:this.$=$$[$0-2]<<$$[$0];break;case 8:this.$=$$[$0-2]>>$$[$0];break;case 9:this.$=$$[$0-2]==$$[$0]?1:0;break;case 10:this.$=$$[$0-2]==$$[$0]?0:1;break;case 11:this.$=$$[$0-2]>=$$[$0]?1:0;break;case 12:this.$=$$[$0-2]<=$$[$0]?1:0;break;case 13:this.$=$$[$0-2]<$$[$0]?1:0;break;case 14:this.$=$$[$0-2]>$$[$0]?1:0;break;case 15:this.$=$$[$0-2]&$$[$0];break;case 16:this.$=$$[$0-2]^$$[$0];break;case 17:this.$=$$[$0-2]|$$[$0];break;case 18:this.$=$$[$0-2]!=0&&$$[$0]!=0?1:0;break;case 19:this.$=$$[$0-2]!=0||$$[$0]!=0?1:0;break;case 20:this.$=$$[$0-2]+$$[$0];break;case 21:this.$=$$[$0-2]-$$[$0];break;case 22:this.$=$$[$0-2]*$$[$0];break;case 23:this.$=$$[$0-2]/$$[$0];break;case 24:this.$=-$$[$0];break;case 25:this.$=$$[$0-1];break;case 26:this.$=Number(yytext);break}},table:[{3:1,4:2,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{1:[3]},{5:[1,10],12:[1,11],13:[1,12],14:[1,13],15:[1,14],16:[1,15],17:[1,16],18:[1,17],19:[1,18],20:[1,19],21:[1,20],22:[1,21],23:[1,22],24:[1,23],25:[1,24],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{7:[1,29]},{5:[2,3],9:[2,3],12:[2,3],13:[2,3],14:[2,3],15:[2,3],16:[2,3],17:[2,3],18:[2,3],19:[2,3],20:[2,3],21:[2,3],22:[2,3],23:[2,3],24:[2,3],25:[2,3],26:[2,3],27:[2,3],28:[2,3],29:[2,3]},{4:30,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:31,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:32,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:33,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{5:[2,26],9:[2,26],12:[2,26],13:[2,26],14:[2,26],15:[2,26],16:[2,26],17:[2,26],18:[2,26],19:[2,26],20:[2,26],21:[2,26],22:[2,26],23:[2,26],24:[2,26],25:[2,26],26:[2,26],27:[2,26],28:[2,26],29:[2,26]},{1:[2,1]},{4:34,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:35,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:36,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:37,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:38,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:39,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:40,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:41,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:42,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:43,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:44,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:45,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:46,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:47,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:48,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:49,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:50,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{4:51,6:[1,3],7:[1,8],8:[1,4],10:[1,5],11:[1,6],27:[1,7],30:[1,9]},{8:[1,52]},{5:[2,4],9:[2,4],12:[2,4],13:[2,4],14:[2,4],15:[2,4],16:[2,4],17:[2,4],18:[2,4],19:[2,4],20:[2,4],21:[2,4],22:[2,4],23:[2,4],24:[2,4],25:[2,4],26:[2,4],27:[2,4],28:[2,4],29:[2,4]},{5:[2,5],9:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[2,5],17:[2,5],18:[2,5],19:[2,5],20:[2,5],21:[2,5],22:[2,5],23:[2,5],24:[2,5],25:[2,5],26:[2,5],27:[2,5],28:[2,5],29:[2,5]},{5:[2,24],9:[2,24],12:[2,24],13:[2,24],14:[2,24],15:[2,24],16:[2,24],17:[2,24],18:[2,24],19:[2,24],20:[2,24],21:[2,24],22:[2,24],23:[2,24],24:[2,24],25:[2,24],26:[2,24],27:[2,24],28:[2,24],29:[2,24]},{9:[1,53],12:[1,11],13:[1,12],14:[1,13],15:[1,14],16:[1,15],17:[1,16],18:[1,17],19:[1,18],20:[1,19],21:[1,20],22:[1,21],23:[1,22],24:[1,23],25:[1,24],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,6],9:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[2,6],17:[2,6],18:[2,6],19:[2,6],20:[2,6],21:[2,6],22:[2,6],23:[2,6],24:[2,6],25:[2,6],26:[2,6],27:[2,6],28:[2,6],29:[2,6]},{5:[2,7],9:[2,7],12:[1,11],13:[2,7],14:[2,7],15:[2,7],16:[2,7],17:[2,7],18:[2,7],19:[2,7],20:[2,7],21:[2,7],22:[2,7],23:[2,7],24:[2,7],25:[2,7],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,8],9:[2,8],12:[1,11],13:[2,8],14:[2,8],15:[2,8],16:[2,8],17:[2,8],18:[2,8],19:[2,8],20:[2,8],21:[2,8],22:[2,8],23:[2,8],24:[2,8],25:[2,8],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,9],9:[2,9],12:[1,11],13:[1,12],14:[1,13],15:[2,9],16:[2,9],17:[1,16],18:[1,17],19:[1,18],20:[1,19],21:[2,9],22:[2,9],23:[2,9],24:[2,9],25:[2,9],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,10],9:[2,10],12:[1,11],13:[1,12],14:[1,13],15:[2,10],16:[2,10],17:[1,16],18:[1,17],19:[1,18],20:[1,19],21:[2,10],22:[2,10],23:[2,10],24:[2,10],25:[2,10],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,11],9:[2,11],12:[1,11],13:[1,12],14:[1,13],15:[2,11],16:[2,11],17:[2,11],18:[2,11],19:[2,11],20:[2,11],21:[2,11],22:[2,11],23:[2,11],24:[2,11],25:[2,11],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,12],9:[2,12],12:[1,11],13:[1,12],14:[1,13],15:[2,12],16:[2,12],17:[2,12],18:[2,12],19:[2,12],20:[2,12],21:[2,12],22:[2,12],23:[2,12],24:[2,12],25:[2,12],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,13],9:[2,13],12:[1,11],13:[1,12],14:[1,13],15:[2,13],16:[2,13],17:[2,13],18:[2,13],19:[2,13],20:[2,13],21:[2,13],22:[2,13],23:[2,13],24:[2,13],25:[2,13],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,14],9:[2,14],12:[1,11],13:[1,12],14:[1,13],15:[2,14],16:[2,14],17:[2,14],18:[2,14],19:[2,14],20:[2,14],21:[2,14],22:[2,14],23:[2,14],24:[2,14],25:[2,14],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,15],9:[2,15],12:[1,11],13:[1,12],14:[1,13],15:[1,14],16:[1,15],17:[1,16],18:[1,17],19:[1,18],20:[1,19],21:[2,15],22:[2,15],23:[2,15],24:[2,15],25:[2,15],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,16],9:[2,16],12:[1,11],13:[1,12],14:[1,13],15:[1,14],16:[1,15],17:[1,16],18:[1,17],19:[1,18],20:[1,19],21:[1,20],22:[2,16],23:[2,16],24:[2,16],25:[2,16],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,17],9:[2,17],12:[1,11],13:[1,12],14:[1,13],15:[1,14],16:[1,15],17:[1,16],18:[1,17],19:[1,18],20:[1,19],21:[1,20],22:[1,21],23:[2,17],24:[2,17],25:[2,17],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,18],9:[2,18],12:[1,11],13:[1,12],14:[1,13],15:[1,14],16:[1,15],17:[1,16],18:[1,17],19:[1,18],20:[1,19],21:[1,20],22:[1,21],23:[1,22],24:[2,18],25:[2,18],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,19],9:[2,19],12:[1,11],13:[1,12],14:[1,13],15:[1,14],16:[1,15],17:[1,16],18:[1,17],19:[1,18],20:[1,19],21:[1,20],22:[1,21],23:[1,22],24:[1,23],25:[2,19],26:[1,25],27:[1,26],28:[1,27],29:[1,28]},{5:[2,20],9:[2,20],12:[1,11],13:[2,20],14:[2,20],15:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],20:[2,20],21:[2,20],22:[2,20],23:[2,20],24:[2,20],25:[2,20],26:[2,20],27:[2,20],28:[1,27],29:[1,28]},{5:[2,21],9:[2,21],12:[1,11],13:[2,21],14:[2,21],15:[2,21],16:[2,21],17:[2,21],18:[2,21],19:[2,21],20:[2,21],21:[2,21],22:[2,21],23:[2,21],24:[2,21],25:[2,21],26:[2,21],27:[2,21],28:[1,27],29:[1,28]},{5:[2,22],9:[2,22],12:[2,22],13:[2,22],14:[2,22],15:[2,22],16:[2,22],17:[2,22],18:[2,22],19:[2,22],20:[2,22],21:[2,22],22:[2,22],23:[2,22],24:[2,22],25:[2,22],26:[2,22],27:[2,22],28:[2,22],29:[2,22]},{5:[2,23],9:[2,23],12:[2,23],13:[2,23],14:[2,23],15:[2,23],16:[2,23],17:[2,23],18:[2,23],19:[2,23],20:[2,23],21:[2,23],22:[2,23],23:[2,23],24:[2,23],25:[2,23],26:[2,23],27:[2,23],28:[2,23],29:[2,23]},{9:[1,54]},{5:[2,25],9:[2,25],12:[2,25],13:[2,25],14:[2,25],15:[2,25],16:[2,25],17:[2,25],18:[2,25],19:[2,25],20:[2,25],21:[2,25],22:[2,25],23:[2,25],24:[2,25],25:[2,25],26:[2,25],27:[2,25],28:[2,25],29:[2,25]},{5:[2,2],9:[2,2],12:[2,2],13:[2,2],14:[2,2],15:[2,2],16:[2,2],17:[2,2],18:[2,2],19:[2,2],20:[2,2],21:[2,2],22:[2,2],23:[2,2],24:[2,2],25:[2,2],26:[2,2],27:[2,2],28:[2,2],29:[2,2]}],defaultActions:{10:[2,1]},parseError:function parseError(str,hash){throw new Error(str)},parse:function parse(input){var self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;this.lexer.setInput(input);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};var yyloc=this.lexer.yylloc;lstack.push(yyloc);var ranges=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;function popStack(n){stack.length=stack.length-2*n;vstack.length=vstack.length-n;lstack.length=lstack.length-n}function lex(){var token;token=self.lexer.lex()||1;if(typeof token!=="number"){token=self.symbols_[token]||token}return token}var symbol,preErrorSymbol,state,action,a,r,yyval={},p,len,newState,expected;while(true){state=stack[stack.length-1];if(this.defaultActions[state]){action=this.defaultActions[state]}else{if(symbol===null||typeof symbol=="undefined"){symbol=lex()}action=table[state]&&table[state][symbol]}if(typeof action==="undefined"||!action.length||!action[0]){var errStr="";if(!recovering){expected=[];for(p in table[state])if(this.terminals_[p]&&p>2){expected.push("'"+this.terminals_[p]+"'")}if(this.lexer.showPosition){errStr="Parse error on line "+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'"}else{errStr="Parse error on line "+(yylineno+1)+": Unexpected "+(symbol==1?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'")}this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected})}}if(action[0]instanceof Array&&action.length>1){throw new Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol)}switch(action[0]){case 1:stack.push(symbol);vstack.push(this.lexer.yytext);lstack.push(this.lexer.yylloc);stack.push(action[1]);symbol=null;if(!preErrorSymbol){yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.yylineno;yyloc=this.lexer.yylloc;if(recovering>0)recovering--}else{symbol=preErrorSymbol;preErrorSymbol=null}break;case 2:len=this.productions_[action[1]][1];yyval.$=vstack[vstack.length-len];yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column};if(ranges){yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]}r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack);if(typeof r!=="undefined"){return r}if(len){stack=stack.slice(0,-1*len*2);vstack=vstack.slice(0,-1*len);lstack=lstack.slice(0,-1*len)}stack.push(this.productions_[action[1]][0]);vstack.push(yyval.$);lstack.push(yyval._$);newState=table[stack[stack.length-2]][stack[stack.length-1]];stack.push(newState);break;case 3:return true}}return true}};var lexer=function(){var lexer={EOF:1,parseError:function parseError(str,hash){if(this.yy.parser){this.yy.parser.parseError(str,hash)}else{throw new Error(str)}},setInput:function(input){this._input=input;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges)this.yylloc.range=[0,0];this.offset=0;return this},input:function(){var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.offset++;this.match+=ch;this.matched+=ch;var lines=ch.match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.yylloc.range[1]++;this._input=this._input.slice(1);return ch},unput:function(ch){var len=ch.length;var lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-len-1);this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(lines.length-1)this.yylineno-=lines.length-1;var r=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len};if(this.options.ranges){this.yylloc.range=[r[0],r[0]+this.yyleng-len]}return this},more:function(){this._more=true;return this},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length)}return(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var pre=this.pastInput();var c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},next:function(){if(this.done){return this.EOF}if(!this._input)this.done=true;var token,match,tempMatch,index,col,lines;if(!this._more){this.yytext="";this.match=""}var rules=this._currentRules();for(var i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;index=i;if(!this.options.flex)break}}if(match){lines=match[0].match(/(?:\r\n?|\n).*/g);if(lines)this.yylineno+=lines.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,rules[index],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(token)return token;else return}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function lex(){var r=this.next();if(typeof r!=="undefined"){return r}else{return this.lex()}},begin:function begin(condition){this.conditionStack.push(condition)},popState:function popState(){return this.conditionStack.pop()},_currentRules:function _currentRules(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function begin(condition){this.begin(condition)},options:{},performAction:function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){var YYSTATE=YY_START;switch($avoiding_name_collisions){case 0:break;case 1:return 6;break;case 2:return 30;break;case 3:return 8;break;case 4:return 12;break;case 5:return 28;break;case 6:return 29;break;case 7:return 27;break;case 8:return 26;break;case 9:return 13;break;case 10:return 14;break;case 11:return 19;break;case 12:return 20;break;case 13:return 11;break;case 14:return 15;break;case 15:return 16;break;case 16:return 24;break;case 17:return 25;break;case 18:return 23;break;case 19:return 22;break;case 20:return 10;break;case 21:return 21;break;case 22:return 7;break;case 23:return 9;break;case 24:return 5;break;case 25:return"INVALID";break}},rules:[/^(?:\s+)/,/^(?:defined\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:([0-9a-zA-z_\.]+)\b)/,/^(?:%)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:<<)/,/^(?:>>)/,/^(?:<)/,/^(?:>)/,/^(?:!)/,/^(?:==)/,/^(?:!=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:\|)/,/^(?:\^)/,/^(?:~)/,/^(?:&)/,/^(?:\()/,/^(?:\))/,/^(?:$)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],inclusive:true}}};return lexer}();parser.lexer=lexer;function Parser(){this.yy={}}Parser.prototype=parser;parser.Parser=Parser;return new Parser}();if(typeof require!=="undefined"&&typeof exports!=="undefined"){exports.parser=cppParser;exports.Parser=cppParser.Parser;exports.parse=function(){return cppParser.parse.apply(cppParser,arguments)};exports.main=function commonjsMain(args){if(!args[1]){console.log("Usage: "+args[0]+" FILE");process.exit(1)}var source=require("fs").readFileSync(require("path").normalize(args[1]),"utf8");return exports.parser.parse(source)};if(typeof module!=="undefined"&&require.main===module){exports.main(process.argv.slice(1))}}(function(){var PREPROCESS_STATES,cppParser,elif_regex,evaluate_condition,evaluate_macros,gsub;cppParser=this.cppParser;delete this.cppParser;gsub=function(source,pattern,replacement){var match,result,_ref;result="";while(source.length>0){match=source.match(pattern);if(match){result+=source.slice(0,match.index);result+=(_ref=replacement(match))!=null?_ref:"";source=source.slice(match.index+match[0].length)}else{result+=source;source=""}}return result};PREPROCESS_STATES={DEFAULT:0,IF_ACCEPTED:1,IF_REJECTED:2,IF_FINISHED:3};evaluate_macros=function(macros,code,__LINE__){var begin,ch,i,maybe_found_word,parts,word,_i,_len;word="";parts=[];begin=0;macros["__LINE__"]=""+__LINE__;maybe_found_word=function(){if(word in macros){parts.push(code.substring(begin,i-word.length));if(typeof macros[word]==="string"){parts.push(macros[word])}else{null}return begin=i}};for(i=_i=0,_len=code.length;_i<_len;i=++_i){ch=code[i];if(ch.match(/^[A-Za-z0-9_]$/)){word+=ch}else{maybe_found_word();word=""}}maybe_found_word();parts.push(code.substring(begin,code.length));return parts.join("")};evaluate_condition=function(macros,code,__LINE__){cppParser.yy._macros=macros;return cppParser.parse(code)===1};elif_regex=/#elif[ \t]+(.+)$/;this.cpp=function(code,macros){var block_comment,i,line,line_orig,lines,match,state,states,_i,_len;block_comment=false;lines=code.replace(/\r/g,"").split("\n").map(function(line){var idx;if(block_comment){idx=line.indexOf("*/");if(idx<0){return""}else{block_comment=false;return line.substr(idx+2)}}else{idx=line.indexOf("/*");if(idx<0){return line}else{block_comment=true;return line.substr(0,idx)}}});states=[];state=PREPROCESS_STATES.DEFAULT;for(i=_i=0,_len=lines.length;_i<_len;i=++_i){line_orig=lines[i];lines[i]=line_orig.replace(/\/\/.*$/,"");line_orig=lines[i];line=line_orig.trim();if(state===PREPROCESS_STATES.IF_REJECTED){lines[i]="";if(line==="#endif"){state=states.pop()}else if(line==="#else"){state=PREPROCESS_STATES.IF_ACCEPTED}else{match=line.match(elif_regex);if(match&&evaluate_condition(macros,match[1],i+1)){state=PREPROCESS_STATES.IF_ACCEPTED}}}else if(state===PREPROCESS_STATES.IF_FINISHED){lines[i]="";if(line==="#endif"){state=states.pop()}}else{match=line.match(/#define[ \t]+([A-Za-z_][A-Za-z_0-9]*)[ \t]+(.+)$/);if(match){macros[match[1]]=evaluate_macros(macros,match[2],i+1);lines[i]="";continue}match=line.match(/#error[ \t]+(.+)$/);if(match){throw new Error("Custom Error at line "+(i+1)+": "+match[1])}match=line.match(/#undef[ \t]+([A-Za-z_][A-Za-z_0-9]*)$/);if(match){delete macros[match[1]];lines[i]="";continue}if(line==="#endif"){if(state!==PREPROCESS_STATES.IF_ACCEPTED){throw new Error("Line "+(i+1)+", expected to be in an accepted if")}lines[i]="";state=states.pop();continue}if(line==="#else"||line.match(elif_regex)){if(state!==PREPROCESS_STATES.IF_ACCEPTED){throw new Error("Line "+(i+1)+", expected to be in an accepted if by this point")}state=PREPROCESS_STATES.IF_FINISHED;lines[i]="";continue}match=line.match(/#ifdef[ \t]+([A-Za-z_][A-Za-z_0-9]*)$/);if(match){states.push(state);if(match[1]in macros){state=PREPROCESS_STATES.IF_ACCEPTED}else{state=PREPROCESS_STATES.IF_REJECTED}lines[i]="";continue}match=line.match(/#if[ \t]+(.+)$/);if(match){states.push(state);if(evaluate_condition(macros,match[1],i+1)){state=PREPROCESS_STATES.IF_ACCEPTED}else{state=PREPROCESS_STATES.IF_REJECTED}lines[i]="";continue}lines[i]=evaluate_macros(macros,line_orig,i+1)}}return lines.join("\n")}}).call(this);