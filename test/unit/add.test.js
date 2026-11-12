
import { expect } from 'chai'
import add from '../../src/add.js'

describe('add() - Unit Tests', function () {
  describe('Normal numeric addition', function () {
    it('should add two positive numbers', function () {
      expect(add(6, 4)).to.equal(10)
    })

    it('should add negative numbers', function () {
      expect(add(-6, -4)).to.equal(-10)
    })

    it('should add a positive and a negative number', function () {
      expect(add(10, -4)).to.equal(6)
    })

    it('should add decimal numbers', function () {
      expect(add(2.5, 1.5)).to.equal(4)
    })
  })

  describe('Missing arguments', function () {
    it('should return zero when both arguments are missing', function () {
      expect(add()).to.equal(0)
    })

    it('should return the first argument when the second is missing', function () {
      expect(add(6)).to.equal(6)
    })

    it('should return the second argument when the first is missing', function () {
      expect(add(undefined, 4)).to.equal(4)
    })
  })

  describe('String inputs', function () {
    it('should concatenate two strings', function () {
      expect(add('6', '4')).to.equal('64')
    })

    it('should concatenate a string and a number', function () {
      expect(add('6', 4)).to.equal('64')
    })
  })


  describe('Other input types', function () {
    it('should treat null as zero', function () {
      expect(add(null, 4)).to.equal(4)
    })

    it('should treat two null values as zero', function () {
      expect(add(null, null)).to.equal(0)
    })

    it('should convert boolean values to numbers', function () {
      expect(add(true, false)).to.equal(1)
    })

    it('should return NaN when given a Symbol', function () {
      expect(Number.isNaN(add(Symbol(), 4))).to.equal(true)
    })
  })

})
