import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

describe('landing page', () => {
  it('renders the header, introduction, and recent activity in order', () => {
    const { container } = render(<App />)
    const regions = container.querySelectorAll(
      'header, main > .landing-sections > section',
    )

    expect(Array.from(regions, (region) => region.tagName)).toEqual([
      'HEADER',
      'SECTION',
      'SECTION',
    ])
    expect(screen.getByText('Benjamin Frodsham')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: "Hello, I'm Benjamin", level: 1 }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'What am I up to?', level: 2 }),
    ).toBeInTheDocument()
  })

  it('provides one main heading and a skip link to the main landmark', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
  })
})
