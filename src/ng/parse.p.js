pegParser = (function() {
  /*
   * Generated by PEG.js 0.7.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(expected, found, offset, line, column) {
    function buildMessage(expected, found) {
      function stringEscape(s) {
        function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

        return s
          .replace(/\\/g,   '\\\\')
          .replace(/"/g,    '\\"')
          .replace(/\x08/g, '\\b')
          .replace(/\t/g,   '\\t')
          .replace(/\n/g,   '\\n')
          .replace(/\f/g,   '\\f')
          .replace(/\r/g,   '\\r')
          .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
          .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
          .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
          .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
      }

      var expectedDesc, foundDesc;

      switch (expected.length) {
        case 0:
          expectedDesc = "end of input";
          break;

        case 1:
          expectedDesc = expected[0];
          break;

        default:
          expectedDesc = expected.slice(0, -1).join(", ")
            + " or "
            + expected[expected.length - 1];
      }

      foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

      return "Expected " + expectedDesc + " but " + foundDesc + " found.";
    }

    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
    this.message  = buildMessage(expected, found);
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = null,
        peg$c1 = function(s) {
            return new Function('context', 'locals',
                'var self = context; var current;\n' +
                'return ' + s);
          },
        peg$c2 = [],
        peg$c3 = ";",
        peg$c4 = "\";\"",
        peg$c5 = function(f2) { return f2; },
        peg$c6 = function(f1, fs) {
              if (fs.length > 0) {
                return f1 + fs.join(';\n');
              }
              return f1;
            },
        peg$c7 = "|",
        peg$c8 = "\"|\"",
        peg$c9 = function(f) { return f; },
        peg$c10 = function(e, fs) {
              if (fs.length > 0) throw 'TODO';
              return e;
            },
        peg$c11 = "TODO",
        peg$c12 = "\"TODO\"",
        peg$c13 = ",",
        peg$c14 = "\",\"",
        peg$c15 = function(e) { return e; },
        peg$c16 = function(e1, es) {
              return (es.length > 0) ? e1 + ',\n' + es.join(',\n') : e1;
            },
        peg$c17 = "=",
        peg$c18 = "\"=\"",
        peg$c19 = function(left, right) { return '(context.' + left + '=' + right + ')'; },
        peg$c20 = "||",
        peg$c21 = "\"||\"",
        peg$c22 = function(left, right) { return '(' + left + '||' + right + ')'; },
        peg$c23 = "&&",
        peg$c24 = "\"&&\"",
        peg$c25 = function(left, right) { return '(' + left + '&&' + right + ')'; },
        peg$c26 = "==",
        peg$c27 = "\"==\"",
        peg$c28 = "!=",
        peg$c29 = "\"!=\"",
        peg$c30 = function(left, op, right) { return '(' + left + op + right + ')'; },
        peg$c31 = "<",
        peg$c32 = "\"<\"",
        peg$c33 = ">",
        peg$c34 = "\">\"",
        peg$c35 = "<=",
        peg$c36 = "\"<=\"",
        peg$c37 = ">=",
        peg$c38 = "\">=\"",
        peg$c39 = function(i) { return firstStep(i); },
        peg$c40 = ".",
        peg$c41 = "\".\"",
        peg$c42 = function(i) { return identifierStep(i); },
        peg$c43 = "(",
        peg$c44 = "\"(\"",
        peg$c45 = ")",
        peg$c46 = "\")\"",
        peg$c47 = function(args) { return fnCall(args); },
        peg$c48 = "[",
        peg$c49 = "\"[\"",
        peg$c50 = "]",
        peg$c51 = "\"]\"",
        peg$c52 = function(p, steps) {
              return steps.length > 0 ? p + ',\n' + steps.join(',\n') : p;
            },
        peg$c53 = "'",
        peg$c54 = "\"'\"",
        peg$c55 = /^[^']/,
        peg$c56 = "[^']",
        peg$c57 = "\\'",
        peg$c58 = "\"\\\\'\"",
        peg$c59 = "\"",
        peg$c60 = "\"\\\"\"",
        peg$c61 = /^[^"]/,
        peg$c62 = "[^\"]",
        peg$c63 = "\\\"",
        peg$c64 = "\"\\\\\\\"\"",
        peg$c65 = /^[0-9]/,
        peg$c66 = "[0-9]",
        peg$c67 = /^[A-Za-z_$\-]/,
        peg$c68 = "[A-Za-z_$\\-]",
        peg$c69 = /^[A-Za-z$0-9\-]/,
        peg$c70 = "[A-Za-z$0-9\\-]",
        peg$c71 = /^[ \t\n\r]/,
        peg$c72 = "[ \\t\\n\\r]",

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$cleanupExpected(expected) {
      var i = 0;

      expected.sort();

      while (i < expected.length) {
        if (expected[i - 1] === expected[i]) {
          expected.splice(i, 1);
        } else {
          i++;
        }
      }
    }

    function peg$parsestart() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== null) {
        s2 = peg$parsestatements();
        if (s2 !== null) {
          s3 = peg$parse_();
          if (s3 !== null) {
            peg$reportedPos = s0;
            s1 = peg$c1(s2);
            if (s1 === null) {
              peg$currPos = s0;
              s0 = s1;
            } else {
              s0 = s1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsestatements() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parsefilterChain();
      if (s1 !== null) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== null) {
          if (input.charCodeAt(peg$currPos) === 59) {
            s5 = peg$c3;
            peg$currPos++;
          } else {
            s5 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s5 !== null) {
            s6 = peg$parse_();
            if (s6 !== null) {
              s7 = peg$parsefilterChain();
              if (s7 !== null) {
                peg$reportedPos = s3;
                s4 = peg$c5(s7);
                if (s4 === null) {
                  peg$currPos = s3;
                  s3 = s4;
                } else {
                  s3 = s4;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== null) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== null) {
            if (input.charCodeAt(peg$currPos) === 59) {
              s5 = peg$c3;
              peg$currPos++;
            } else {
              s5 = null;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s5 !== null) {
              s6 = peg$parse_();
              if (s6 !== null) {
                s7 = peg$parsefilterChain();
                if (s7 !== null) {
                  peg$reportedPos = s3;
                  s4 = peg$c5(s7);
                  if (s4 === null) {
                    peg$currPos = s3;
                    s3 = s4;
                  } else {
                    s3 = s4;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== null) {
          peg$reportedPos = s0;
          s1 = peg$c6(s1, s2);
          if (s1 === null) {
            peg$currPos = s0;
            s0 = s1;
          } else {
            s0 = s1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsefilterChain() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseassignment();
      if (s1 !== null) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== null) {
          if (input.charCodeAt(peg$currPos) === 124) {
            s5 = peg$c7;
            peg$currPos++;
          } else {
            s5 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s5 !== null) {
            s6 = peg$parse_();
            if (s6 !== null) {
              s7 = peg$parsefilter();
              if (s7 !== null) {
                peg$reportedPos = s3;
                s4 = peg$c9(s7);
                if (s4 === null) {
                  peg$currPos = s3;
                  s3 = s4;
                } else {
                  s3 = s4;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== null) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== null) {
            if (input.charCodeAt(peg$currPos) === 124) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = null;
              if (peg$silentFails === 0) { peg$fail(peg$c8); }
            }
            if (s5 !== null) {
              s6 = peg$parse_();
              if (s6 !== null) {
                s7 = peg$parsefilter();
                if (s7 !== null) {
                  peg$reportedPos = s3;
                  s4 = peg$c9(s7);
                  if (s4 === null) {
                    peg$currPos = s3;
                    s3 = s4;
                  } else {
                    s3 = s4;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== null) {
          peg$reportedPos = s0;
          s1 = peg$c10(s1, s2);
          if (s1 === null) {
            peg$currPos = s0;
            s0 = s1;
          } else {
            s0 = s1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsefilter() {
      var s0;

      if (input.substr(peg$currPos, 4) === peg$c11) {
        s0 = peg$c11;
        peg$currPos += 4;
      } else {
        s0 = null;
        if (peg$silentFails === 0) { peg$fail(peg$c12); }
      }

      return s0;
    }

    function peg$parseexpressionList() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseassignment();
      if (s1 !== null) {
        s2 = peg$currPos;
        s3 = peg$parse_();
        if (s3 !== null) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c13;
            peg$currPos++;
          } else {
            s4 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s4 !== null) {
            s5 = peg$parse_();
            if (s5 !== null) {
              s6 = peg$parseassignment();
              if (s6 !== null) {
                peg$reportedPos = s2;
                s3 = peg$c15(s6);
                if (s3 === null) {
                  peg$currPos = s2;
                  s2 = s3;
                } else {
                  s2 = s3;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$c0;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$c0;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
        }
        if (s2 !== null) {
          peg$reportedPos = s0;
          s1 = peg$c16(s1, s2);
          if (s1 === null) {
            peg$currPos = s0;
            s0 = s1;
          } else {
            s0 = s1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseassignment() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parselogicalOr();
      if (s1 !== null) {
        s2 = peg$parse_();
        if (s2 !== null) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c17;
            peg$currPos++;
          } else {
            s3 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c18); }
          }
          if (s3 !== null) {
            s4 = peg$parse_();
            if (s4 !== null) {
              s5 = peg$parselogicalOr();
              if (s5 !== null) {
                peg$reportedPos = s0;
                s1 = peg$c19(s1, s5);
                if (s1 === null) {
                  peg$currPos = s0;
                  s0 = s1;
                } else {
                  s0 = s1;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === null) {
        s0 = peg$parselogicalOr();
      }

      return s0;
    }

    function peg$parselogicalOr() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parselogicalAnd();
      if (s1 !== null) {
        s2 = peg$parse_();
        if (s2 !== null) {
          if (input.substr(peg$currPos, 2) === peg$c20) {
            s3 = peg$c20;
            peg$currPos += 2;
          } else {
            s3 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c21); }
          }
          if (s3 !== null) {
            s4 = peg$parse_();
            if (s4 !== null) {
              s5 = peg$parselogicalAnd();
              if (s5 !== null) {
                peg$reportedPos = s0;
                s1 = peg$c22(s1, s5);
                if (s1 === null) {
                  peg$currPos = s0;
                  s0 = s1;
                } else {
                  s0 = s1;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === null) {
        s0 = peg$parselogicalAnd();
      }

      return s0;
    }

    function peg$parselogicalAnd() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseequality();
      if (s1 !== null) {
        s2 = peg$parse_();
        if (s2 !== null) {
          if (input.substr(peg$currPos, 2) === peg$c23) {
            s3 = peg$c23;
            peg$currPos += 2;
          } else {
            s3 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c24); }
          }
          if (s3 !== null) {
            s4 = peg$parse_();
            if (s4 !== null) {
              s5 = peg$parseequality();
              if (s5 !== null) {
                peg$reportedPos = s0;
                s1 = peg$c25(s1, s5);
                if (s1 === null) {
                  peg$currPos = s0;
                  s0 = s1;
                } else {
                  s0 = s1;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === null) {
        s0 = peg$parseequality();
      }

      return s0;
    }

    function peg$parseequality() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parserelational();
      if (s1 !== null) {
        s2 = peg$parse_();
        if (s2 !== null) {
          if (input.substr(peg$currPos, 2) === peg$c26) {
            s3 = peg$c26;
            peg$currPos += 2;
          } else {
            s3 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c27); }
          }
          if (s3 === null) {
            if (input.substr(peg$currPos, 2) === peg$c28) {
              s3 = peg$c28;
              peg$currPos += 2;
            } else {
              s3 = null;
              if (peg$silentFails === 0) { peg$fail(peg$c29); }
            }
          }
          if (s3 !== null) {
            s4 = peg$parse_();
            if (s4 !== null) {
              s5 = peg$parserelational();
              if (s5 !== null) {
                peg$reportedPos = s0;
                s1 = peg$c30(s1, s3, s5);
                if (s1 === null) {
                  peg$currPos = s0;
                  s0 = s1;
                } else {
                  s0 = s1;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === null) {
        s0 = peg$parserelational();
      }

      return s0;
    }

    function peg$parserelational() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseprimary();
      if (s1 !== null) {
        s2 = peg$parse_();
        if (s2 !== null) {
          if (input.charCodeAt(peg$currPos) === 60) {
            s3 = peg$c31;
            peg$currPos++;
          } else {
            s3 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c32); }
          }
          if (s3 === null) {
            if (input.charCodeAt(peg$currPos) === 62) {
              s3 = peg$c33;
              peg$currPos++;
            } else {
              s3 = null;
              if (peg$silentFails === 0) { peg$fail(peg$c34); }
            }
            if (s3 === null) {
              if (input.substr(peg$currPos, 2) === peg$c35) {
                s3 = peg$c35;
                peg$currPos += 2;
              } else {
                s3 = null;
                if (peg$silentFails === 0) { peg$fail(peg$c36); }
              }
              if (s3 === null) {
                if (input.substr(peg$currPos, 2) === peg$c37) {
                  s3 = peg$c37;
                  peg$currPos += 2;
                } else {
                  s3 = null;
                  if (peg$silentFails === 0) { peg$fail(peg$c38); }
                }
              }
            }
          }
          if (s3 !== null) {
            s4 = peg$parse_();
            if (s4 !== null) {
              s5 = peg$parseprimary();
              if (s5 !== null) {
                peg$reportedPos = s0;
                s1 = peg$c30(s1, s3, s5);
                if (s1 === null) {
                  peg$currPos = s0;
                  s0 = s1;
                } else {
                  s0 = s1;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === null) {
        s0 = peg$parseprimary();
      }

      return s0;
    }

    function peg$parseprimary() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseliteral();
      if (s1 === null) {
        s1 = peg$currPos;
        s2 = peg$parseidentifier();
        if (s2 !== null) {
          peg$reportedPos = s1;
          s2 = peg$c39(s2);
        }
        if (s2 === null) {
          peg$currPos = s1;
          s1 = s2;
        } else {
          s1 = s2;
        }
      }
      if (s1 !== null) {
        s2 = [];
        s3 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 46) {
          s4 = peg$c40;
          peg$currPos++;
        } else {
          s4 = null;
          if (peg$silentFails === 0) { peg$fail(peg$c41); }
        }
        if (s4 !== null) {
          s5 = peg$parseidentifier();
          if (s5 !== null) {
            peg$reportedPos = s3;
            s4 = peg$c42(s5);
            if (s4 === null) {
              peg$currPos = s3;
              s3 = s4;
            } else {
              s3 = s4;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        if (s3 === null) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 40) {
            s4 = peg$c43;
            peg$currPos++;
          } else {
            s4 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c44); }
          }
          if (s4 !== null) {
            s5 = peg$parseexpressionList();
            if (s5 !== null) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s6 = peg$c45;
                peg$currPos++;
              } else {
                s6 = null;
                if (peg$silentFails === 0) { peg$fail(peg$c46); }
              }
              if (s6 !== null) {
                peg$reportedPos = s3;
                s4 = peg$c47(s5);
                if (s4 === null) {
                  peg$currPos = s3;
                  s3 = s4;
                } else {
                  s3 = s4;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
          if (s3 === null) {
            s3 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 91) {
              s4 = peg$c48;
              peg$currPos++;
            } else {
              s4 = null;
              if (peg$silentFails === 0) { peg$fail(peg$c49); }
            }
            if (s4 !== null) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c50;
                peg$currPos++;
              } else {
                s5 = null;
                if (peg$silentFails === 0) { peg$fail(peg$c51); }
              }
              if (s5 !== null) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          }
        }
        while (s3 !== null) {
          s2.push(s3);
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 46) {
            s4 = peg$c40;
            peg$currPos++;
          } else {
            s4 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c41); }
          }
          if (s4 !== null) {
            s5 = peg$parseidentifier();
            if (s5 !== null) {
              peg$reportedPos = s3;
              s4 = peg$c42(s5);
              if (s4 === null) {
                peg$currPos = s3;
                s3 = s4;
              } else {
                s3 = s4;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
          if (s3 === null) {
            s3 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 40) {
              s4 = peg$c43;
              peg$currPos++;
            } else {
              s4 = null;
              if (peg$silentFails === 0) { peg$fail(peg$c44); }
            }
            if (s4 !== null) {
              s5 = peg$parseexpressionList();
              if (s5 !== null) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s6 = peg$c45;
                  peg$currPos++;
                } else {
                  s6 = null;
                  if (peg$silentFails === 0) { peg$fail(peg$c46); }
                }
                if (s6 !== null) {
                  peg$reportedPos = s3;
                  s4 = peg$c47(s5);
                  if (s4 === null) {
                    peg$currPos = s3;
                    s3 = s4;
                  } else {
                    s3 = s4;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
            if (s3 === null) {
              s3 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 91) {
                s4 = peg$c48;
                peg$currPos++;
              } else {
                s4 = null;
                if (peg$silentFails === 0) { peg$fail(peg$c49); }
              }
              if (s4 !== null) {
                if (input.charCodeAt(peg$currPos) === 93) {
                  s5 = peg$c50;
                  peg$currPos++;
                } else {
                  s5 = null;
                  if (peg$silentFails === 0) { peg$fail(peg$c51); }
                }
                if (s5 !== null) {
                  s4 = [s4, s5];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            }
          }
        }
        if (s2 !== null) {
          peg$reportedPos = s0;
          s1 = peg$c52(s1, s2);
          if (s1 === null) {
            peg$currPos = s0;
            s0 = s1;
          } else {
            s0 = s1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseliteral() {
      var s0;

      s0 = peg$parsestringLiteral();
      if (s0 === null) {
        s0 = peg$parsenumberLiteral();
      }

      return s0;
    }

    function peg$parsestringLiteral() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 39) {
        s2 = peg$c53;
        peg$currPos++;
      } else {
        s2 = null;
        if (peg$silentFails === 0) { peg$fail(peg$c54); }
      }
      if (s2 !== null) {
        s3 = [];
        if (peg$c55.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = null;
          if (peg$silentFails === 0) { peg$fail(peg$c56); }
        }
        if (s4 === null) {
          if (input.substr(peg$currPos, 2) === peg$c57) {
            s4 = peg$c57;
            peg$currPos += 2;
          } else {
            s4 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c58); }
          }
        }
        while (s4 !== null) {
          s3.push(s4);
          if (peg$c55.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c56); }
          }
          if (s4 === null) {
            if (input.substr(peg$currPos, 2) === peg$c57) {
              s4 = peg$c57;
              peg$currPos += 2;
            } else {
              s4 = null;
              if (peg$silentFails === 0) { peg$fail(peg$c58); }
            }
          }
        }
        if (s3 !== null) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s4 = peg$c53;
            peg$currPos++;
          } else {
            s4 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c54); }
          }
          if (s4 !== null) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== null) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;
      if (s0 === null) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 34) {
          s2 = peg$c59;
          peg$currPos++;
        } else {
          s2 = null;
          if (peg$silentFails === 0) { peg$fail(peg$c60); }
        }
        if (s2 !== null) {
          s3 = [];
          if (peg$c61.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c62); }
          }
          if (s4 === null) {
            if (input.substr(peg$currPos, 2) === peg$c63) {
              s4 = peg$c63;
              peg$currPos += 2;
            } else {
              s4 = null;
              if (peg$silentFails === 0) { peg$fail(peg$c64); }
            }
          }
          while (s4 !== null) {
            s3.push(s4);
            if (peg$c61.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = null;
              if (peg$silentFails === 0) { peg$fail(peg$c62); }
            }
            if (s4 === null) {
              if (input.substr(peg$currPos, 2) === peg$c63) {
                s4 = peg$c63;
                peg$currPos += 2;
              } else {
                s4 = null;
                if (peg$silentFails === 0) { peg$fail(peg$c64); }
              }
            }
          }
          if (s3 !== null) {
            if (input.charCodeAt(peg$currPos) === 34) {
              s4 = peg$c59;
              peg$currPos++;
            } else {
              s4 = null;
              if (peg$silentFails === 0) { peg$fail(peg$c60); }
            }
            if (s4 !== null) {
              s2 = [s2, s3, s4];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$c0;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
        if (s1 !== null) {
          s1 = input.substring(s0, peg$currPos);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parsenumberLiteral() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c65.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = null;
        if (peg$silentFails === 0) { peg$fail(peg$c66); }
      }
      if (s2 !== null) {
        while (s2 !== null) {
          s1.push(s2);
          if (peg$c65.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c66); }
          }
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== null) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseidentifier() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c67.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = null;
        if (peg$silentFails === 0) { peg$fail(peg$c68); }
      }
      if (s2 !== null) {
        s3 = [];
        if (peg$c69.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = null;
          if (peg$silentFails === 0) { peg$fail(peg$c70); }
        }
        while (s4 !== null) {
          s3.push(s4);
          if (peg$c69.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = null;
            if (peg$silentFails === 0) { peg$fail(peg$c70); }
          }
        }
        if (s3 !== null) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== null) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_() {
      var s0, s1;

      s0 = [];
      if (peg$c71.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = null;
        if (peg$silentFails === 0) { peg$fail(peg$c72); }
      }
      while (s1 !== null) {
        s0.push(s1);
        if (peg$c71.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = null;
          if (peg$silentFails === 0) { peg$fail(peg$c72); }
        }
      }

      return s0;
    }


      function firstStep(ident) {
        return 'current = (locals && locals.' + ident + ' !== undefined) ? ' +
            'locals.' + ident + ' : context.' + ident;
      }
      function identifierStep(ident) {
        return 'self = current,\n' +
            'current = current && (current.then ? /* promise */ (\n' +
              '("$$v" in current) ? \n' +
                '/* resolved */ current.$$v : \n' +
                '/* chain */ (current.then(function(v) { current.$$v = v; return null; }), null)\n' +
            ') : current), current && current.' + ident;
      }


    peg$result = peg$startRuleFunction();

    if (peg$result !== null && peg$currPos === input.length) {
      return peg$result;
    } else {
      peg$cleanupExpected(peg$maxFailExpected);
      peg$reportedPos = Math.max(peg$currPos, peg$maxFailPos);

      throw new SyntaxError(
        peg$maxFailExpected,
        peg$reportedPos < input.length ? input.charAt(peg$reportedPos) : null,
        peg$reportedPos,
        peg$computePosDetails(peg$reportedPos).line,
        peg$computePosDetails(peg$reportedPos).column
      );
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
