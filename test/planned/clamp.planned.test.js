
import { expect } from 'chai'
import clamp from '../../src/clamp.js'

describe('clamp() - Planned Test Cases (Part 1)', function () {

  it('CL-01: should return the lower limit when number is below range', function () {
    expect(clamp(-10, -5, 5)).to.equal(-5)
  })

  it('CL-02: should return the upper limit when number is above range', function () {
    expect(clamp(10, -5, 5)).to.equal(5)
  })

  it('CL-03: should return the number when it is inside the range', function () {
    expect(clamp(50, 1, 99)).to.equal(50)
  })

  it('CL-04: should return the lower limit when number is 0', function () {
    expect(clamp(0, 1, 99)).to.equal(1)
  })

  it('CL-05: should return 1 when number is on the lower limit', function () {
    expect(clamp(1, 1, 99)).to.equal(1)
  })

  it('CL-06: should return 99 when number is on the upper limit', function () {
    expect(clamp(99, 1, 99)).to.equal(99)
  })

  it('CL-07: should return the upper limit when number is 100', function () {
    expect(clamp(100, 1, 99)).to.equal(99)
  })

  it('CL-08: should return the lower limit for a negative quantity', function () {
    expect(clamp(-3, 1, 99)).to.equal(1)
  })

  it('CL-09: should preserve a decimal number inside the range', function () {
    expect(clamp(2.5, 1, 99)).to.equal(2.5)
  })

  it('CL-10: should return the same value when both limits are equal', function () {
    expect(clamp(5, 3, 3)).to.equal(3)
  })

  it('CL-11: should convert a numeric string to a number', function () {
    expect(clamp('7', 1, 99)).to.equal(7)
  })

  it('CL-12: should return NaN for a non-numeric string', function () {
    expect(Number.isNaN(clamp('abc', 1, 99))).to.equal(true)
  })

})
