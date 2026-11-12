import { expect } from 'chai'
import clamp from '../../src/clamp.js'

describe('Additional branch coverage tests for clamp()', function () {

  it('CV-CL-01: should handle equal number and bounds', function () {
    expect(clamp(3, 3, 3)).to.equal(3)
  })

  it('CV-CL-02: should handle NaN as the lower bound', function () {
    expect(clamp(5, NaN, 10)).to.equal(5)
  })

  it('CV-CL-03: should handle NaN as the upper bound', function () {
    expect(clamp(-5, -10, NaN)).to.equal(-5)
  })

})
