'use strict';

ddescribe('PEG parser', function() {
  function parse(expr) {
    var args = Array.prototype.slice.call(arguments, 1);
    return pegParser.parse(expr);
  }

  function $eval(expr, context, locals) {
    return parse(expr)(context, locals);
  }

  function anonymous(context,locals) {
    var self = context; var current;
    return (context.current = (locals && locals.foo !== undefined) ? locals.foo : context.foo,
      self = current,
      current = current && (current.then ? /* promise */ (
        ("$$v" in current) ?
          /* resolved */ current.$$v :
          /* chain */ current.then(function(v) { current.$$v = v; return null; }), null
        ) : current).bar=12)
  }

  it('parses string literals', function() {
    var fn = parse(' \'hello\'');
    expect(fn({})).toBe('hello');
  });

  it('parses expression steps', function() {
    var fn = parse('foo.bar');
    // console.log(fn.toString());
    expect(fn({foo: {bar: 12}})).toBe(12);
  });

  it('assignments', function() {
    var context = {};
    expect($eval('foo = 12', context)).toBe(12);
    expect(context.foo).toBe(12);
    context = {};
    console.log(parse('foo.bar = 12').toString());
    expect($eval('foo.bar = 12', context)).toBe(12);
    expect(context.foo).toBe(12);
  });
});
