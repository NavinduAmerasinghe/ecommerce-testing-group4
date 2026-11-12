
import { expect } from 'chai'
import filter from '../../src/filter.js'

describe('filter()', function () {
  describe('Array filtering', function () {
    it('should return elements that satisfy the predicate', function () {
      const result = filter([1, 2, 3, 4, 5], value => value > 3)

      expect(result).to.deep.equal([4, 5])
    })

    it('should return an empty array when no elements satisfy the predicate', function () {
      const result = filter([1, 2, 3], value => value > 5)

      expect(result).to.deep.equal([])
    })

    it('should return all elements when every element satisfies the predicate', function () {
      const result = filter([2, 4, 6], value => value % 2 === 0)

      expect(result).to.deep.equal([2, 4, 6])
    })

    it('should return an empty array for an empty input array', function () {
      const result = filter([], value => value > 0)

      expect(result).to.deep.equal([])
    })

    it('should return a new array without modifying the original array', function () {
      const original = [1, 2, 3]
      const result = filter(original, value => value > 1)

      expect(result).to.deep.equal([2, 3])
      expect(result).to.not.equal(original)
      expect(original).to.deep.equal([1, 2, 3])
    })
  })

  describe('Predicate behaviour', function () {
    it('should pass the value, index, and original array to the predicate', function () {
      const original = [10, 20, 30]
      const received = []

      filter(original, (value, index, array) => {
        received.push({ value, index, array })
        return true
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

    it('should support predicates returning truthy values', function () {
      const result = filter([0, 1, 2, 3], value => value)

      expect(result).to.deep.equal([1, 2, 3])
    })

    it('should support predicates returning falsy values', function () {
      const result = filter([0, 1, 2, 3], value => value === 0)

      expect(result).to.deep.equal([0])
    })

    it('should filter objects using a property condition', function () {
      const users = [
        { user: 'Barney', active: true },
        { user: 'Fred', active: false },
        { user: 'Wilma', active: true }
      ]

      const result = filter(users, user => user.active)

      expect(result).to.deep.equal([
        { user: 'Barney', active: true },
        { user: 'Wilma', active: true }
      ])
    })
  })

  describe('Nullish input', function () {
    it('should return an empty array when input is null', function () {
      const result = filter(null, () => true)

      expect(result).to.deep.equal([])
    })

    it('should return an empty array when input is undefined', function () {
      const result = filter(undefined, () => true)

      expect(result).to.deep.equal([])
    })
  })
})
