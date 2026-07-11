import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WindowFrame from './WindowFrame'
import CommandButton from './CommandButton'
import SectionHeader from './SectionHeader'
import { ArrowIcon } from './icons'

describe('WindowFrame', () => {
  it('muestra el título y los hijos', () => {
    render(<WindowFrame title="portrait.jpg"><p>contenido</p></WindowFrame>)
    expect(screen.getByText('portrait.jpg')).toBeInTheDocument()
    expect(screen.getByText('contenido')).toBeInTheDocument()
  })
})

describe('CommandButton', () => {
  it('renderiza como enlace con href e icono', () => {
    render(<CommandButton as="a" href="#x" icon={ArrowIcon}>Ver</CommandButton>)
    const a = screen.getByRole('link', { name: /ver/i })
    expect(a).toHaveAttribute('href', '#x')
  })
})

describe('SectionHeader', () => {
  it('muestra comando y título', () => {
    render(<SectionHeader command="$ cat stack.json" title="Tecnologías" />)
    expect(screen.getByText('$ cat stack.json')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tecnologías' })).toBeInTheDocument()
  })
})
