
import { expect } from 'chai'
import reduce from '../../src/reduce.js'

describe('reduce() - Unit Tests', function () {
  describe('Array reduction', function () {
    it('should reduce an array using an initial accumulator', function () {
      const result = reduce([1, 2, 3, 4], (sum, value) => {
        return sum + value
      }, 0)

      expect(result).to.equal(10)
    })

    it('should use the first element as the accumulator when none is provided', function () {
      const result = reduce([1, 2, 3, 4], (sum, value) => {
        return sum + value
      })

      expect(result).to.equal(10)
    })

    it('should return the initial accumulator for an empty array', function () {
      const result = reduce([], (sum, value) => sum + value, 10)

      expect(result).to.equal(10)
    })

    it('should return undefined for an empty array without an initial accumulator', function () {
      const result = reduce([], (sum, value) => sum + value)

      expect(result).to.equal(undefined)
    })
  })

  describe('Object reduction', function () {
    it('should reduce an object using an initial accumulator', function () {
      const result = reduce({ a: 1, b: 2, c: 3 }, (sum, value) => {
        return sum + value
      }, 0)

      expect(result).to.equal(6)
    })

    it('should use the first object value when no initial accumulator is provided', function () {
      const result = reduce({ a: 1, b: 2, c: 3 }, (sum, value) => {
        return sum + value
      })

      expect(result).to.equal(6)
    })
  })

  describe('Callback arguments', function () {
    it('should provide the value, index and collection to the callback', function () {
      const callbackArguments = []

      reduce([10, 20], (accumulator, value, index, collection) => {
        callbackArguments.push({ value, index, collection })
        return accumulator + value
      }, 0)

      expect(callbackArguments).to.have.lengthOf(2)
      expect(callbackArguments[0].value).to.equal(10)
      expect(callbackArguments[0].index).to.equal(0)
      expect(callbackArguments[0].collection).to.deep.equal([10, 20])
    })

    it('should provide object keys to the callback', function () {
      const keys = []

      reduce({ a: 1, b: 2 }, (accumulator, value, key) => {
        keys.push(key)
        return accumulator + value
      }, 0)

      expect(keys).to.have.members(['a', 'b'])
    })
  })
})
