import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'
import { siteData } from '../data/siteData'

describe('Contact', () => {
  it('tiene enlace mailto, WhatsApp y redes', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /correo/i })).toHaveAttribute('href', `mailto:${siteData.email}`)
    expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute('href', `https://wa.me/${siteData.whatsapp}`)
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', siteData.socials.github)
  })
})
