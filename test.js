const FizzBuzz = require('./fizzbuzz.js');

describe('fizzbuzz function', () => {
    let fizzbuzz = FizzBuzz.fizzBuzz;

    test('should return "FizzBuzz" if input is a multiple of 3 only', () => {
        expect(fizzbuzz(9)).toEqual("Fizz");
    })
    
    test('should return "Buzz" if input is a multiple of 5 only', () => {
        expect(fizzbuzz(10)).toEqual("Buzz");
    })

    test('should return "FizzBuzz" if input is a multiple of 3 or 5', () => {
        expect(fizzbuzz(15)).toEqual("FizzBuzz");
    })

    test('should return the input if it is not a multiple of 3 or 5', () => {
        expect(fizzbuzz(8)).toEqual(8);
    })

    test('should return "input is not a  number" if input is not a number', () => {
        expect(fizzbuzz("string")).toEqual("input is not a number");
    })
})