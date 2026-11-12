
import { expect } from 'chai'
import map from '../../src/map.js'

describe('map()', function () {
  describe('Array mapping', function () {
    it('should transform every element using the iteratee', function () {
      const result = map([1, 2, 3], value => value * 2)

      expect(result).to.deep.equal([2, 4, 6])
    })

    it('should return an empty array for an empty input array', function () {
      const result = map([], value => value * 2)

      expect(result).to.deep.equal([])
    })

    it('should preserve the array length', function () {
      const result = map([1, 2, 3, 4], value => value + 1)

      expect(result).to.have.lengthOf(4)
    })

    it('should return a new array without modifying the original array', function () {
      const original = [1, 2, 3]
      const result = map(original, value => value * 2)

      expect(result).to.deep.equal([2, 4, 6])
      expect(result).to.not.equal(original)
      expect(original).to.deep.equal([1, 2, 3])
    })

    it('should preserve undefined values returned by the iteratee', function () {
      const result = map([1, 2, 3], value => {
        return value === 2 ? undefined : value
      })

      expect(result).to.deep.equal([1, undefined, 3])
    })
  })

  describe('Iteratee behaviour', function () {
    it('should pass the value, index, and original array to the iteratee', function () {
      const original = [10, 20, 30]
      const received = []

      map(original, (value, index, array) => {
        received.push({ value, index, array })
        return value
      })

      expect(received).to.have.lengthOf(3)
      expect(received[0]).to.deep.equal({
        value: 10,
        index: 0,
        array: original
      })
      expect(received[1]).to.deep.equal({
        value: 20,
        index: 1,
        array: original
      })
      expect(received[2]).to.deep.equal({
        value: 30,
        index: 2,
        array: original
      })
    })

    it('should support mapping objects inside an array', function () {
      const users = [
        { name: 'Barney', age: 30 },
        { name: 'Fred', age: 35 }
      ]

      const result = map(users, user => user.name)

      expect(result).to.deep.equal(['Barney', 'Fred'])
    })

    it('should return an array of undefined values when the iteratee returns undefined', function () {
      const result = map([1, 2, 3], () => undefined)

      expect(result).to.deep.equal([undefined, undefined, undefined])
    })
  })

  describe('Nullish input', function () {
    it('should return an empty array when input is null', function () {
      const result = map(null, value => value)

      expect(result).to.deep.equal([])
    })

    it('should return an empty array when input is undefined', function () {
      const result = map(undefined, value => value)

      expect(result).to.deep.equal([])
    })
  })
})
