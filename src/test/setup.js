import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom no implementa IntersectionObserver ni matchMedia
class IO {
  constructor(cb) { this.cb = cb }
  observe(el) { this.cb([{ isIntersecting: true, target: el }]) }
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal('IntersectionObserver', IO)

window.matchMedia = window.matchMedia || function () {
  return { matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }
}
