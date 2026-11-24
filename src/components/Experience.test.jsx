import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Experience from './Experience'
import { siteData } from '../data/siteData'

describe('Experience', () => {
  it('muestra cada cargo con sus fechas y el CV descargable', () => {
    render(<MemoryRouter><Experience /></MemoryRouter>)
    siteData.timeline.forEach(e => {
      expect(screen.getByText(e.role)).toBeInTheDocument()
      expect(screen.getByText(e.dates)).toBeInTheDocument()
    })
    const cv = screen.getByRole('link', { name: /descargar cv/i })
    expect(cv).toHaveAttribute('href', siteData.cvUrl)
    expect(cv).toHaveAttribute('download')
  })

  it('enlaza los cargos a proyectos que existen', () => {
    render(<MemoryRouter><Experience /></MemoryRouter>)
    const enlaces = screen.getAllByRole('link', { name: /ver el proyecto/i })
    expect(enlaces).toHaveLength(siteData.timeline.filter(e => e.projectSlug).length)
    enlaces.forEach(a => expect(a.getAttribute('href')).toMatch(/^\/project\/\d+$/))
  })
})
