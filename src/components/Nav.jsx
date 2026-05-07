import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/writing', label: 'Writing' },
  { to: '/cv', label: 'CV' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Wanmeng Liu</Link>
        <button
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${open ? ' active' : ''}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
