
import { expect } from 'chai'
import toInteger from '../../src/toInteger.js'

describe('toInteger() - Unit Tests', function () {
  describe('Integer conversion', function () {
    it('should remove the decimal part of a positive number', function () {
      expect(toInteger(3.8)).to.equal(3)
    })

    it('should remove the decimal part of a negative number', function () {
      expect(toInteger(-3.8)).to.equal(-3)
    })

    it('should return an integer unchanged', function () {
      expect(toInteger(5)).to.equal(5)
    })

    it('should convert a numeric string to an integer', function () {
      expect(toInteger('3.2')).to.equal(3)
    })
  })

  describe('Special values', function () {
    it('should return zero for null', function () {
      expect(toInteger(null)).to.equal(0)
    })

    it('should return zero for undefined', function () {
      expect(toInteger(undefined)).to.equal(0)
    })

    it('should convert true to one', function () {
      expect(toInteger(true)).to.equal(1)
    })

    it('should convert false to zero', function () {
      expect(toInteger(false)).to.equal(0)
    })

    it('should return zero for NaN', function () {
      expect(toInteger(NaN)).to.equal(0)
    })

    it('should convert positive Infinity to the maximum finite number', function () {
      expect(toInteger(Infinity)).to.equal(Number.MAX_VALUE)
    })

    it('should convert negative Infinity to the minimum finite number', function () {
      expect(toInteger(-Infinity)).to.equal(-Number.MAX_VALUE)
    })
  })
})
