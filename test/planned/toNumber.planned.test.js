
import { expect } from 'chai'
import toNumber from '../../src/toNumber.js'

describe('toNumber() - Planned Test Cases (Part 1)', function () {

  it('TN-01: should convert a number', function () {
    expect(toNumber(3.2)).to.equal(3.2)
  })

  it('TN-02: should preserve Infinity', function () {
    expect(toNumber(Infinity)).to.equal(Infinity)
  })

  it('TN-03: should convert a numeric string', function () {
    expect(toNumber('3.2')).to.equal(3.2)
  })

  it('TN-04: should convert a price string', function () {
    expect(toNumber('12.50')).to.equal(12.5)
  })

  it('TN-05: should convert a number with surrounding spaces', function () {
    expect(toNumber(' 12.50 ')).to.equal(12.5)
  })

  it('TN-06: should convert a negative numeric string', function () {
    expect(toNumber('-5')).to.equal(-5)
  })

  it('TN-07: should convert empty and whitespace strings to zero', function () {
    expect(toNumber('')).to.equal(0)
    expect(toNumber(' ')).to.equal(0)
  })

  it('TN-08: should return NaN for non-numeric text', function () {
    expect(Number.isNaN(toNumber('abc'))).to.equal(true)
  })

  it('TN-09: should return NaN for a decimal comma', function () {
    expect(Number.isNaN(toNumber('12,50'))).to.equal(true)
  })

  it('TN-10: should return NaN when the string contains a currency sign', function () {
    expect(Number.isNaN(toNumber('12.50€'))).to.equal(true)
  })

  it('TN-11: should handle null and undefined', function () {
    expect(toNumber(null)).to.equal(0)
    expect(Number.isNaN(toNumber(undefined))).to.equal(true)
  })

  it('TN-12: should convert boolean values to numbers', function () {
    expect(toNumber(true)).to.equal(1)
    expect(toNumber(false)).to.equal(0)
  })

  it('TN-13: should handle arrays and objects', function () {
    expect(toNumber([])).to.equal(0)
    expect(toNumber(['5'])).to.equal(5)
    expect(Number.isNaN(toNumber([1, 2]))).to.equal(true)
    expect(Number.isNaN(toNumber({}))).to.equal(true)
  })

  it('TN-14: should handle NaN and zero', function () {
    expect(Number.isNaN(toNumber(NaN))).to.equal(true)
    expect(toNumber(0)).to.equal(0)
  })

})
