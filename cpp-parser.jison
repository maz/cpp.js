/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+					  	/* skip whitespace */
"defined"\b				return 'DEFINED'
[0-9]+("."[0-9]+)?\b	return 'NUMBER'
([0-9a-zA-z_\.]+)\b		return 'IDENTIFIER'
"%"						return '%'
"*"						return '*'
"/"						return '/'
"-"						return '-'
"+"						return '+'
"<<"					return '<<'
">>"					return '>>'
"<"						return '<'
">"						return '>'
"!"						return '!'
"=="					return '=='
"!="					return '!='
"&&"					return '&&'
"||"					return '||'
"|"						return '|'
"^"						return '^'
"~"						return '~'
"&"						return '&'
"("						return '('
")"						return ')'
<<EOF>>				  	return 'EOF'
.					  	return 'INVALID'

/lex

/* operator associations and precedence */

%left '||'
%left '&&'
%left '|'
%left '^'
%left '&'
%left '==' '!='
%left '<' '>' '<=' '>='
%left '<<' '>>'
%left  '+' '-'
%left  '*' '/' '%'
%right UMINUS '~' '!'

%start expressions

%% /* language grammar */

expressions
	: e EOF
		{return $1;}
	;

e
	: 'DEFINED' '(' 'IDENTIFIER' ')'
		{$$ = ($3 in yy._macros)?1:0}
	| 'IDENTIFIER'
		{$$ = Number(yy._macros[$1]);}
	| '~' e
		{$$ = ~($1);}
	| '!' e
		{$$ = ($1===0)?1:0;}
	| e '%' e
		{$$ = ($1%$3);}
	| e '<<' e
		{$$ = ($1<<$3);}
	| e '>>' e
		{$$ = ($1>>$3);}
	| e '==' e
		{$$ = ($1==$3)?1:0;}
	| e '!=' e
		{$$ = ($1==$3)?0:1;}
	| e '>=' e
		{$$ = ($1>=$3)?1:0;}
	| e '<=' e
		{$$ = ($1<=$3)?1:0;}
	| e '<' e
		{$$ = ($1<$3)?1:0;}
	| e '>' e
		{$$ = ($1>$3)?1:0;}
	| e '&' e
		{$$ = ($1&$3);}
	| e '^' e
		{$$ = ($1^$3);}
	| e '|' e
		{$$ = ($1|$3);}
	| e '&&' e
		{$$ = (($1!=0)&&($3!=0))?1:0;}
	| e '||' e
		{$$ = (($1!=0)||($3!=0))?1:0;}
	| e '+' e
		{$$ = $1+$3;}
	| e '-' e
		{$$ = $1-$3;}
	| e '*' e
		{$$ = $1*$3;}
	| e '/' e
		{$$ = $1/$3;}
	| '-' e %prec UMINUS
		{$$ = -$2;}
	| '(' e ')'
		{$$ = $2;}
	| NUMBER
		{$$ = Number(yytext);}
	;
