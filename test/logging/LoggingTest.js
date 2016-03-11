/**
The tests in this class file will be logging stuff on console and not much of asserting sort of activities will be taking place here so please bear with it
**/

describe("Logging -- Please Check Console for Output ", function() {

  it("Console Trace Logging", function() {

    var foo = function foo() {
        console.trace();
      },
      bar = function bar() {
        foo();
      };

    bar();

  });

  it("Time for an operation Logging", function() {
    console.time('time label');

    var foo = [];
    // Warning: Avoid large set iterations blocking the event loop like this one does.
    for (var i = 0, end = 1000000; i < end; i++)
      foo[foo.lenght] = i;

    console.time('time label');
  });

});