import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Projects from './projects'
import { projectsData } from '../data/projectsData'

describe('Projects', () => {
  it('renderiza cada proyecto con enlace a su detalle', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>)
    projectsData.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument()
    })
    const links = screen.getAllByRole('link', { name: /ver_detalles/i })
    expect(links).toHaveLength(projectsData.length)
  })
})
