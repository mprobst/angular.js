{
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
}

start = _ s:statements _ {
    return new Function('context', 'locals',
        'var self = context; var current;\n' +
        'return ' + s);
  }

statements
  = f1:filterChain fs:(_ ';' _ f2:filterChain { return f2; })* {
      if (fs.length > 0) {
        return f1 + fs.join(';\n');
      }
      return f1;
    }

filterChain
  = e:expression fs:(_ '|' _ f:filter { return f; })* {
      if (fs.length > 0) throw 'TODO';
      return e;
    }

filter
  = 'TODO'

expression
  = assignment

expressionList
  = e1:expression es:(_ ',' _ e:expression { return e; }) {
      return (es.length > 0) ? e1 + ',\n' + es.join(',\n') : e1;
    }

assignment
  = left:logicalOr _ '=' _ right:logicalOr { return '(context.' + left + '=' + right + ')'; }
  / logicalOr

logicalOr
  = left:logicalAnd _ '||' _ right:logicalAnd { return '(' + left + '||' + right + ')'; }
  / logicalAnd

logicalAnd
  = left:equality _ '&&' _ right:equality
      { return '(' + left + '&&' + right + ')'; }
  / equality

equality
  = left:relational _ op:('==' / '!=') _ right:relational
      { return '(' + left + op + right + ')'; }
  / relational

relational
  = left:primary _ op:('<' / '>' / '<=' / '>=') _ right:primary
      { return '(' + left + op + right + ')'; }
  / primary

primary
  = p:(
      literal
    / i:identifier { return firstStep(i); }
    )

    steps:( '.' i:identifier { return identifierStep(i); }
    / '(' args:expressionList ')' { return fnCall(args); }
    / '[' ']'
    )* {
      return steps.length > 0 ? p + ',\n' + steps.join(',\n') : p;
    }

literal
  = stringLiteral
  / numberLiteral

stringLiteral
  = $("'" ([^'] / "\\'")* "'")
  / $('"' ([^"] / "\\\"")* '"')

numberLiteral
  = $([0-9]+)

identifier
  = $([A-Za-z_$-][A-Za-z$0-9-]*)
_
  = [ \t\n\r]*
