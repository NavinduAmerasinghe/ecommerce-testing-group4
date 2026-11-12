
import { expect } from 'chai'
import isEmpty from '../../src/isEmpty.js'

describe('isEmpty() - Unit Tests', function () {
  describe('Arrays', function () {
    it('should return true for an empty array', function () {
      expect(isEmpty([])).to.equal(true)
    })

    it('should return false for a non-empty array', function () {
      expect(isEmpty([1, 2, 3])).to.equal(false)
    })
  })

  describe('Strings', function () {
    it('should return true for an empty string', function () {
      expect(isEmpty('')).to.equal(true)
    })

    it('should return false for a non-empty string', function () {
      expect(isEmpty('hello')).to.equal(false)
    })
  })

  describe('Objects', function () {
    it('should return true for an empty object', function () {
      expect(isEmpty({})).to.equal(true)
    })

    it('should return false for an object with properties', function () {
      expect(isEmpty({ a: 1 })).to.equal(false)
    })
  })

  describe('Null and undefined', function () {
    it('should return true for null', function () {
      expect(isEmpty(null)).to.equal(true)
    })

    it('should return true for undefined', function () {
      expect(isEmpty(undefined)).to.equal(true)
    })
  })

  describe('Other types', function () {
    it('should return true for a number', function () {
      expect(isEmpty(123)).to.equal(true)
    })

    it('should return true for a boolean', function () {
      expect(isEmpty(true)).to.equal(true)
    })

    it('should return true for an empty Map', function () {
      expect(isEmpty(new Map())).to.equal(true)
    })

    it('should return false for a non-empty Map', function () {
      expect(isEmpty(new Map([['a', 1]]))).to.equal(false)
    })

    it('should return true for an empty Set', function () {
      expect(isEmpty(new Set())).to.equal(true)
    })

    it('should return false for a non-empty Set', function () {
      expect(isEmpty(new Set([1]))).to.equal(false)
    })
  })
})
