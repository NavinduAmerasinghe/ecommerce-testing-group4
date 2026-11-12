
import { expect } from 'chai'
import toNumber from '../../src/toNumber.js'

describe('AI-generated test cases for toNumber()', function () {
  it('AI-TN-01: should convert a binary string to a number', function () {
    expect(toNumber('0b1010')).to.equal(10)
  })

  it('AI-TN-02: should convert an octal string to a number', function () {
    expect(toNumber('0o17')).to.equal(15)
  })

  it('AI-TN-03: should convert a hexadecimal string to a number', function () {
    expect(toNumber('0xFF')).to.equal(255)
  })

  it('AI-TN-04: should return NaN for signed hexadecimal strings', function () {
    expect(Number.isNaN(toNumber('-0x1'))).to.equal(true)
    expect(Number.isNaN(toNumber('+0x1'))).to.equal(true)
  })

  it('AI-TN-05: should handle tabs and newlines as whitespace', function () {
    expect(toNumber('\t\n  42  \n')).to.equal(42)
  })

  it('AI-TN-06: should return zero for a whitespace-only string', function () {
    expect(toNumber('\t \n')).to.equal(0)
  })

  it('AI-TN-07: should return NaN when converting a Symbol', function () {
    expect(Number.isNaN(toNumber(Symbol('test')))).to.equal(true)
  })

  it('AI-TN-08: should convert a Number object to a primitive number', function () {
    expect(toNumber(new Number(42))).to.equal(42)
  })

  it('AI-TN-09: should use valueOf() when converting an object', function () {
    const value = {
      valueOf() {
        return 25
      }
    }

    expect(toNumber(value)).to.equal(25)
  })

  it('AI-TN-10: should return NaN when an object converts to a non-numeric string', function () {
    const value = {
      valueOf() {
        return {}
      },
      toString() {
        return 'not-a-number'
      }
    }

    expect(Number.isNaN(toNumber(value))).to.equal(true)
  })
})
