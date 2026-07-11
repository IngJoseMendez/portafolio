import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Typewriter from './Typewriter'

describe('Typewriter', () => {
  it('el texto completo es accesible (fallback sr-only)', () => {
    render(<Typewriter text="const stack = []" />)
    expect(screen.getByText('const stack = []')).toBeInTheDocument()
  })
})
