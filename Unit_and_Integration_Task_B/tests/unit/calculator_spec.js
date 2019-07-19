var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add two numbers together', function(){
    calculator.previousTotal = 2;
    calculator.add(3);
    assert.equal(calculator.runningTotal, 5);
  })
  it('it can subtract two numbers together', function(){
    calculator.previousTotal = 5;
    calculator.subtract(1);
    assert.equal(calculator.runningTotal, 4);
  })

  it('it can multiply two numbers together', function(){
    calculator.previousTotal = 2;
    calculator.multiply(1);
    assert.equal(calculator.runningTotal, 2);
  })

  it('it can divide two numbers together', function(){
    calculator.previousTotal = 2;
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 1);
  })
  it('it can concatenate multiple numbers button clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(123, calculator.runningTotal);

  })
  it('it can chain multiple operations together', function(){
    calculator.previousTotal = 3;
    calculator.previousOperator = ('+');
    calculator.add(1);
    calculator.previousOperator =("-");
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 2 );

  })
  it('it should clear the running total without clearning the running total', function(){
    calculator.previousTotal = 10;
    calculator.add(1)
    // calculator.previousOperator =("=");
    calculator.operatorClick('=')
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
    assert.equal(calculator.previousTotal, 11);
  })




});
