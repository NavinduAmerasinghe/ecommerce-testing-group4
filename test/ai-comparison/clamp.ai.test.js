
import { expect } from 'chai'
import clamp from '../../src/clamp.js'

describe('clamp() - AI-Generated Test Cases', function () {

  it('AI-CL-01: should preserve a negative number inside a negative range', function () {
    expect(clamp(-3, -5, -1)).to.equal(-3)
  })

  it('AI-CL-02: should preserve zero inside a range', function () {
    expect(clamp(0, -5, 5)).to.equal(0)
  })

  it('AI-CL-03: should return a decimal lower bound when the number is below it', function () {
    expect(clamp(1.2, 1.5, 3)).to.equal(1.5)
  })

  it('AI-CL-04: should return a decimal upper bound when the number is above it', function () {
    expect(clamp(3.8, 1.5, 3.5)).to.equal(3.5)
  })

  it('AI-CL-05: should preserve a decimal number inside decimal bounds', function () {
    expect(clamp(2.25, 1.5, 3.5)).to.equal(2.25)
  })

  it('AI-CL-06: should preserve a large number inside a large range', function () {
    expect(clamp(1000000000000, -1000000000000, 2000000000000))
      .to.equal(1000000000000)
  })

})
