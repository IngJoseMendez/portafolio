import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'
import { siteData } from '../data/siteData'

describe('Contact', () => {
  it('tiene enlace mailto y a redes', () => {
    render(<Contact />)
    const mail = screen.getByRole('link', { name: /escríbeme|correo|email|hablemos/i })
    expect(mail).toHaveAttribute('href', `mailto:${siteData.email}`)
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', siteData.socials.github)
  })
})
