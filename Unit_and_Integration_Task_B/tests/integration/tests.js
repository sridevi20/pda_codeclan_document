var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });
  it('can do arithmetical operations 22 + 22 = 44 on display', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('44');
  });
  it('can multiple numbers chained together',function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('40');
 });
 it('it should output as expected for a range of numbers',function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#number2')).click();
   element(by.css('#number3')).click();
   element(by.css('#number4')).click();
   element(by.css('#number5')).click();
   element(by.css('#number6')).click();
   element(by.css('#number7')).click();
   element(by.css('#number8')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number1')).click();
   element(by.css('#number2')).click();
   element(by.css('#number3')).click();
   element(by.css('#number4')).click();
   element(by.css('#number5')).click();
   element(by.css('#number6')).click();
   element(by.css('#number7')).click();
   element(by.css('#number8')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('24691356');


 });
 it('it should  output Not a number and number is divided by zero', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number6')).click();
   element(by.css('#number1')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('Not a number');
 })





});
