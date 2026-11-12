
import { expect } from 'chai'
import isEmpty from '../../src/isEmpty.js'

describe('Additional branch coverage tests for isEmpty()', function () {

  it('CV-IE-01: should handle Object.prototype', function () {
    expect(isEmpty(Object.prototype)).to.equal(true)
  })

  it('CV-IE-02: should handle a prototype object', function () {
    function Example() {}

    expect(isEmpty(Example.prototype)).to.equal(true)
  })

  it('CV-IE-03: should handle an empty array-like object with splice()', function () {
    const collection = {
      length: 0,
      splice() {}
    }

    expect(isEmpty(collection)).to.equal(true)
  })

  it('CV-IE-04: should handle an array-like object without splice()', function () {
  const collection = {
    0: 'item',
    length: 1
  }

  expect(isEmpty(collection)).to.equal(false)
})

})
