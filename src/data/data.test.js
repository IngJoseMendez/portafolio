import { describe, it, expect } from 'vitest'
import { siteData } from './siteData'
import { techCategories } from './techData'
import { projectsData } from './projectsData'

describe('siteData', () => {
  it('tiene email válido y bio en 3 líneas', () => {
    expect(siteData.email).toMatch(/@/)
    expect(siteData.bioLines).toHaveLength(3)
    expect(siteData.focus).toContain('automatización')
  })
})

describe('techCategories', () => {
  it('tiene 4 categorías con items', () => {
    expect(techCategories).toHaveLength(4)
    techCategories.forEach(c => {
      expect(c.title).toBeTruthy()
      expect(c.items.length).toBeGreaterThan(0)
      c.items.forEach(i => expect(typeof i.icon).toBe('function'))
    })
  })
})

describe('projectsData', () => {
  it('cada proyecto tiene slug único e id', () => {
    const slugs = projectsData.map(p => p.slug)
    expect(new Set(slugs).size).toBe(projectsData.length)
    projectsData.forEach(p => { expect(p.id).toBeDefined(); expect(p.slug).toBeTruthy() })
  })
})
