
import { expect } from 'chai'
import chunk from '../../src/chunk.js'

describe('chunk()', function () {
  describe('Normal chunking', function () {
    it('should split an array into chunks of the specified size', function () {
      const result = chunk([1, 2, 3, 4], 2)

      expect(result).to.deep.equal([[1, 2], [3, 4]])
    })

    it('should place remaining elements in the final chunk', function () {
      const result = chunk([1, 2, 3, 4, 5], 2)

      expect(result).to.deep.equal([[1, 2], [3, 4], [5]])
    })

    it('should use a default chunk size of one', function () {
      const result = chunk([1, 2, 3])

      expect(result).to.deep.equal([[1], [2], [3]])
    })

    it('should return the entire array as one chunk when size is larger than the array length', function () {
      const result = chunk([1, 2, 3], 5)

      expect(result).to.deep.equal([[1, 2, 3]])
    })

    it('should return one chunk when the chunk size is one', function () {
      const result = chunk([1, 2, 3], 1)

      expect(result).to.deep.equal([[1], [2], [3]])
    })

    it('should handle an empty array', function () {
      const result = chunk([], 2)

      expect(result).to.deep.equal([])
    })
  })

  describe('Chunk size handling', function () {
    it('should convert a decimal chunk size to an integer', function () {
      const result = chunk([1, 2, 3, 4, 5], 2.8)

      expect(result).to.deep.equal([[1, 2], [3, 4], [5]])
    })

    it('should return an empty array when chunk size is zero', function () {
      const result = chunk([1, 2, 3], 0)

      expect(result).to.deep.equal([])
    })

    it('should return an empty array when chunk size is negative', function () {
      const result = chunk([1, 2, 3], -2)

      expect(result).to.deep.equal([])
    })

    it('should return an empty array when chunk size is negative but greater than zero in absolute value', function () {
      const result = chunk([1, 2, 3], -0.5)

      expect(result).to.deep.equal([])
    })

    it('should handle a numeric string as chunk size', function () {
      const result = chunk([1, 2, 3, 4], '2')

      expect(result).to.deep.equal([[1, 2], [3, 4]])
    })
  })

  describe('Nullish input', function () {
    it('should return an empty array when input is null', function () {
      const result = chunk(null, 2)

      expect(result).to.deep.equal([])
    })

    it('should return an empty array when input is undefined', function () {
      const result = chunk(undefined, 2)

      expect(result).to.deep.equal([])
    })
  })

  describe('Original array handling', function () {
    it('should not modify the original array', function () {
      const original = [1, 2, 3, 4]
      const result = chunk(original, 2)

      expect(result).to.deep.equal([[1, 2], [3, 4]])
      expect(original).to.deep.equal([1, 2, 3, 4])
    })
  })
})
