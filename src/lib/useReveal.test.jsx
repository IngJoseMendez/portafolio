import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Reveal from '../components/ui/Reveal'

// El mock de IntersectionObserver (setup.js) dispara isIntersecting=true al observar
describe('Reveal', () => {
  it('marca is-in cuando entra al viewport', () => {
    render(<Reveal><span>hola</span></Reveal>)
    const el = screen.getByText('hola').parentElement
    expect(el.className).toMatch(/is-in/)
  })
})
