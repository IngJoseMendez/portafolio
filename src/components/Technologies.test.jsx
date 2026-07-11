import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Technologies from './Technologies'
import { techCategories } from '../data/techData'

describe('Technologies', () => {
  it('muestra cada categoría y todos los items', () => {
    render(<Technologies />)
    techCategories.forEach(cat => {
      expect(screen.getByText(cat.title)).toBeInTheDocument()
      cat.items.forEach(it => expect(screen.getByText(it.name)).toBeInTheDocument())
    })
  })
})
