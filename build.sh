#!/bin/bash
jison cpp-parser.jison && coffee cpp.coffee && \
	cat cpp-parser.js cpp.js>>combined.js && \
		#for some reason, piping it in doesn't work
	uglifyjs -o cpp-min.js combined.js && \
	rm combined.js
exit $?