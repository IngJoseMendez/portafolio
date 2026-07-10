import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

function Hello() { return <p>hola consola</p> }

describe('arnés', () => {
  it('renderiza', () => {
    render(<Hello />)
    expect(screen.getByText('hola consola')).toBeInTheDocument()
  })
})
