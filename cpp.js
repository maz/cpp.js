// Generated by CoffeeScript 1.4.0
(function() {
  var PREPROCESS_STATES, cppParser, elif_regex, evaluate_condition, evaluate_macros, gsub;

  cppParser = this.cppParser;

  delete this.cppParser;

  gsub = function(source, pattern, replacement) {
    var match, result, _ref;
    result = "";
    while (source.length > 0) {
      match = source.match(pattern);
      if (match) {
        result += source.slice(0, match.index);
        result += (_ref = replacement(match)) != null ? _ref : '';
        source = source.slice(match.index + match[0].length);
      } else {
        result += source;
        source = "";
      }
    }
    return result;
  };

  PREPROCESS_STATES = {
    DEFAULT: 0,
    IF_ACCEPTED: 1,
    IF_REJECTED: 2,
    IF_FINISHED: 3
  };

  evaluate_macros = function(macros, code, __LINE__) {
    var begin, ch, i, maybe_found_word, parts, word, _i, _len;
    word = "";
    parts = [];
    begin = 0;
    macros["__LINE__"] = "" + __LINE__;
    maybe_found_word = function() {
      if (word in macros) {
        parts.push(code.substring(begin, i - word.length));
        parts.push(macros[word]);
        return begin = i;
      }
    };
    for (i = _i = 0, _len = code.length; _i < _len; i = ++_i) {
      ch = code[i];
      if (ch.match(/^[A-Za-z0-9_]$/)) {
        word += ch;
      } else {
        maybe_found_word();
        word = "";
      }
    }
    maybe_found_word();
    parts.push(code.substring(begin, code.length));
    return parts.join('');
  };

  evaluate_condition = function(macros, code, __LINE__) {
    cppParser.yy._macros = macros;
    return cppParser.parse(code) === 1;
  };

  elif_regex = /#elif[ \t]+(.+)$/;

  this.cpp = function(code, macros) {
    var block_comment, i, line, line_orig, lines, match, state, states, _i, _len;
    block_comment = false;
    lines = code.replace(/\r/g, "").split("\n").map(function(line) {
      var idx;
      if (block_comment) {
        idx = line.indexOf("*/");
        if (idx < 0) {
          return "";
        } else {
          block_comment = false;
          return line.substr(idx + 2);
        }
      } else {
        idx = line.indexOf('/*');
        if (idx < 0) {
          return line;
        } else {
          block_comment = true;
          return line.substr(0, idx);
        }
      }
    });
    states = [];
    state = PREPROCESS_STATES.DEFAULT;
    for (i = _i = 0, _len = lines.length; _i < _len; i = ++_i) {
      line_orig = lines[i];
      lines[i] = line_orig.replace(/\/\/.*$/, "");
      line_orig = lines[i];
      line = line_orig.trim();
      if (state === PREPROCESS_STATES.IF_REJECTED) {
        lines[i] = "";
        if (line === '#endif') {
          state = states.pop();
        } else if (line === '#else') {
          state = PREPROCESS_STATES.IF_ACCEPTED;
        } else {
          match = line.match(elif_regex);
          if (match && evaluate_condition(macros, match[1], i + 1)) {
            state = PREPROCESS_STATES.IF_ACCEPTED;
          }
        }
      } else if (state === PREPROCESS_STATES.IF_FINISHED) {
        lines[i] = "";
        if (line === '#endif') {
          state = states.pop();
        }
      } else {
        match = line.match(/#define[ \t]+([A-Za-z_][A-Za-z_0-9]*)[ \t]+(.+)$/);
        if (match) {
          macros[match[1]] = evaluate_macros(macros, match[2], i + 1);
          lines[i] = "";
          continue;
        }
        match = line.match(/#error[ \t]+(.+)$/);
        if (match) {
          throw new Error("Custom Error at line " + (i + 1) + ": " + match[1]);
        }
        match = line.match(/#undef[ \t]+([A-Za-z_][A-Za-z_0-9]*)$/);
        if (match) {
          delete macros[match[1]];
          lines[i] = "";
          continue;
        }
        if (line === '#endif') {
          if (state !== PREPROCESS_STATES.IF_ACCEPTED) {
            throw new Error("Line " + (i + 1) + ", expected to be in an accepted if");
          }
          lines[i] = "";
          state = states.pop();
          continue;
        }
        if (line === "#else" || line.match(elif_regex)) {
          if (state !== PREPROCESS_STATES.IF_ACCEPTED) {
            throw new Error("Line " + (i + 1) + ", expected to be in an accepted if by this point");
          }
          state = PREPROCESS_STATES.IF_FINISHED;
          lines[i] = "";
          continue;
        }
        match = line.match(/#ifdef[ \t]+([A-Za-z_][A-Za-z_0-9]*)$/);
        if (match) {
          states.push(state);
          if (match[1] in macros) {
            state = PREPROCESS_STATES.IF_ACCEPTED;
          } else {
            state = PREPROCESS_STATES.IF_REJECTED;
          }
          lines[i] = "";
          continue;
        }
        match = line.match(/#if[ \t]+(.+)$/);
        if (match) {
          states.push(state);
          if (evaluate_condition(macros, match[1], i + 1)) {
            state = PREPROCESS_STATES.IF_ACCEPTED;
          } else {
            state = PREPROCESS_STATES.IF_REJECTED;
          }
          lines[i] = "";
          continue;
        }
        lines[i] = evaluate_macros(macros, line_orig, i + 1);
      }
    }
    return lines.join("\n");
  };

}).call(this);
