
import { expect } from 'chai'
import ceil from '../../src/ceil.js'

describe('ceil() - Unit Tests', function () {
  describe('Default precision', function () {
    it('should round a decimal number up to the nearest integer', function () {
      expect(ceil(4.006)).to.equal(5)
    })

    it('should return an integer unchanged', function () {
      expect(ceil(5)).to.equal(5)
    })

    it('should round negative numbers towards positive infinity', function () {
      expect(ceil(-4.2)).to.equal(-4)
    })
  })

  describe('Positive precision', function () {
    it('should round up to two decimal places', function () {
      expect(ceil(6.004, 2)).to.equal(6.01)
    })

    it('should round up to one decimal place', function () {
      expect(ceil(4.21, 1)).to.equal(4.3)
    })

    it('should handle negative numbers with positive precision', function () {
      expect(ceil(-6.004, 2)).to.equal(-6)
    })
  })

  describe('Negative precision', function () {
    it('should round up to the nearest hundred', function () {
      expect(ceil(6040, -2)).to.equal(6100)
    })

    it('should round up to the nearest ten', function () {
      expect(ceil(123, -1)).to.equal(130)
    })
  })

  describe('Precision defaults', function () {
    it('should use zero precision when null is provided', function () {
      expect(ceil(4.2, null)).to.equal(5)
    })
  })
})
