import { useEffect } from 'react'

const posts = [
  {
    href: 'https://open.substack.com/pub/wanmengliu/p/the-llm-isnt-the-assembly-line?utm_campaign=post-expanded-share&utm_medium=web',
    title: 'The LLM Isn\'t the Assembly Line',
    description: 'Why treating AI systems like software factories misses the point. The real value isn\'t in the model — it\'s in the orchestration layer that makes decisions explicit, traceable, and correctable.',
    date: 'December',
    year: '2025',
  },
  {
    href: 'https://open.substack.com/pub/wanmengliu/p/there-are-no-shortcuts-to-production?utm_campaign=post-expanded-share&utm_medium=web',
    title: 'There Are No Shortcuts to Production AI Systems',
    description: 'Enterprise AI platforms promise quick wins but consistently fail on proprietary data. What I learned building systems that had to work in the real world.',
    date: 'September',
    year: '2025',
  },
  {
    href: 'https://open.substack.com/pub/wanmengliu/p/from-vibe-checking-to-systematic?utm_campaign=post-expanded-share&utm_medium=post%20viewer',
    title: 'From "Vibe Checking" to Systematic Agent Evaluation',
    description: 'Most teams evaluate LLM agents by running a few examples and checking if the outputs "feel right." Here\'s how to build evaluation infrastructure that actually tells you whether your system is improving.',
    date: 'June',
    year: '2025',
  },
]

const postsByYear = posts.reduce((acc, post) => {
  if (!acc[post.year]) acc[post.year] = []
  acc[post.year].push(post)
  return acc
}, {})

const years = Object.keys(postsByYear).sort((a, b) => b - a)

export default function Writing() {
  useEffect(() => {
    document.title = 'Writing — Wanmeng Liu'
  }, [])

  return (
    <div className="writing-page">
      <div className="page-header">
        <h1 className="page-title">Writing</h1>
        <p className="page-description">
          On the realities of building production AI systems — the gaps between demos and deployment, and the systematic approaches that make complex systems work reliably.
        </p>
      </div>

      {years.map(year => (
        <div key={year} className="writing-year-group">
          <p className="writing-year-label">{year}</p>
          <div className="writing-list">
            {postsByYear[year].map(({ href, title, description, date }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="writing-item">
                <div className="writing-bullet" />
                <div className="writing-item-content">
                  <h2 className="writing-item-title">{title}</h2>
                  <p className="writing-item-description">{description}</p>
                </div>
                <span className="writing-item-date">{date}</span>
              </a>
            ))}
          </div>
        </div>
      ))}

      
    </div>
  )
}
