import { render } from '@redwoodjs/testing'

import TestLayout from './TestLayout'

describe('TestLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TestLayout />)
    }).not.toThrow()
  })
})
