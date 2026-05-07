import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Wanmeng Liu — AI Engineer'
  }, [])

  return (
    <div className="home">
      <div className="home-grid">
        <div className="home-photo-col">
          <img src="/headshot.JPG" alt="Wanmeng Liu" className="home-photo" />
        </div>

        <div className="home-about-col">
          <h1 className="home-display-name">Wanmeng<br />Liu</h1>

          <p className="home-role-tag">AI Engineer — Multi-agent Systems · Text-to-SQL · Healthcare AI</p>

          <div className="home-about-body">
            <p>
              [ Placeholder ] — add your about text here. Describe your background,
              what drives you, and the kind of work you do best.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus metus, blandit sed volutpat vitae, varius eget dolor. Vestibulum tempor magna massa. Praesent porttitor nibh id ante volutpat, et porttitor nibh rhoncus. Nullam massa leo, rutrum ac lobortis vel, porta id orci.
            </p>
            <p>
              [ Placeholder ] — a second paragraph about your approach, values,
              or what you're currently focused on. Mauris molestie dignissim est ut bibendum. Donec varius dui sit amet arcu varius congue. Suspendisse nec dui faucibus arcu pharetra sollicitudin. Pellentesque pharetra maximus suscipit. Mauris sit amet congue ipsum. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>

          <div className="home-contact">
            <a href="mailto:wanmeng.m.liu@gmail.com" className="home-contact-link">
              <svg className="home-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 5L2 7" />
              </svg>
              <span>wanmeng.m.liu@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/wanmengliu/" target="_blank" rel="noopener noreferrer" className="home-contact-link">
              <svg className="home-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>linkedin.com/in/wanmengliu</span>
            </a>
            <a href="https://substack.com/@wanmengliu" target="_blank" rel="noopener noreferrer" className="home-contact-link">
              <svg className="home-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16" />
                <path d="M4 8h16" />
                <path d="M4 12l8 6 8-6" />
              </svg>
              <span>substack.com/@wanmengliu</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
