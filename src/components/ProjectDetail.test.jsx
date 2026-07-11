import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import ProjectDetail from './ProjectDetail'
import { projectsData } from '../data/projectsData'

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes><Route path="/project/:id" element={<ProjectDetail />} /></Routes>
    </MemoryRouter>
  )
}

describe('ProjectDetail', () => {
  it('muestra el proyecto existente', () => {
    renderAt(`/project/${projectsData[0].id}`)
    expect(screen.getByRole('heading', { name: projectsData[0].title })).toBeInTheDocument()
  })
  it('muestra 404 para id inexistente', () => {
    renderAt('/project/9999')
    expect(screen.getByText(/no encontrado/i)).toBeInTheDocument()
  })
})
