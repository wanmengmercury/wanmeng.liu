import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Wanmeng Liu'
  }, [])

  return (
    <div className="home">
      <div className="home-grid">
        <div className="home-photo-col">
          <img src="/headshot.jpg" alt="Wanmeng Liu" className="home-photo" />
        </div>

        <div className="home-about-col">
          <h1 className="home-display-name">About <br />Me</h1>

          <div className="home-about-body">
            <p>
              Hi, I'm Wanmeng. I'm a Senior Data Scientist on the GenAI team at the Blue Cross Blue Shield Association, where I build multi-agent systems for insurance network optimization.
            </p>
            <p>
              I also collaborate with <a href="https://www.cincinnatichildrens.org/bio/h/sassan-hashemi" target="_blank" rel="noopener noreferrer">Dr. Sassan Hashemi</a> at Cincinnati Children's Hospital Medical Center on a clinical software tool that integrates unstructured surgical planning outputs (DICOM image series and videos) into the hospital's PACS system.
            </p>

            <p>
              I hold an MS in Health Systems from the Georgia Institute of Technology, where I spent a year in <a href="https://www.isye.gatech.edu/users/nicoleta-serban" target="_blank" rel="noopener noreferrer">Dr. Nicoleta Serban</a>'s lab researching mental health service utilization in pediatric Medicaid populations. My focus throughout has been applied: bridging the gap between modeling and real-world deployment.
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
