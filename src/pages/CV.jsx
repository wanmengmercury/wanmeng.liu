import { useEffect } from 'react'

export default function CV() {
  useEffect(() => {
    document.title = 'CV — Wanmeng Liu'
  }, [])

  return (
    <div className="cv-page">
      <div className="cv-top">
        <h1 className="cv-top-name">Wanmeng<br />Liu</h1>
        <div className="cv-top-contact">
          <span>Cincinnati, OH</span>
          <a href="mailto:wanmeng.m.liu@gmail.com">wanmeng.m.liu@gmail.com</a>
          <a href="https://www.linkedin.com/in/wanmengliu/" target="_blank" rel="noopener noreferrer">linkedin.com/in/wanmengliu</a>
          <a href="https://substack.com/@wanmengliu" target="_blank" rel="noopener noreferrer">substack.com/@wanmengliu</a>
        </div>
      </div>

      <hr className="cv-divider" />

      <div className="cv-body">

        {/* Column 1: Work Experience + Selected Projects + Technical Writing */}
        <div className="cv-col">
          <h2 className="cv-col-title">Work Experience</h2>

          <div className="cv-entry">
            <div className="cv-entry-title-row">
              <div className="cv-bullet" />
              <h3 className="cv-entry-title">Blue Cross Blue Shield Association</h3>
            </div>
            <p className="cv-entry-subtitle">via Blue Health Intelligence · Chicago, IL (Hybrid)</p>

            <div style={{ marginBottom: 'var(--s-6)' }}>
              <div className="cv-entry-header">
                <p className="cv-entry-role">Senior Data Scientist</p>
                <span className="cv-entry-date">April 2026 – Present</span>
              </div>
              <div className="cv-entry-header">
                <p className="cv-entry-role">Data Scientist</p>
                <span className="cv-entry-date">Nov 2024 – March 2026</span>
              </div>
              <div className="cv-entry-header">
                <p className="cv-entry-role">Associate Data Scientist</p>
                <span className="cv-entry-date">July 2022 – Oct 2024</span>
              </div>

              <p className="cv-project-label">Provider Performance Agent</p>
              <ul className="cv-entry-list">
                <li>Built an agentic workflow with an orchestration agent and two subagents for document search and text-to-SQL tasks.</li>
                <li>Built a text-to-SQL subagent that accepts natural language questions, invokes tools for different SQL clauses, and returns SQL compliant with business and database logic — including a data visualization tool for geographic queries.</li>
                <li>Built a GEPA-based prompt tuning pipeline for the text-to-SQL subagent with a composite scoring metric based on cosine similarity between LLM-generated and gold SQL snippets; grew training data from 20 seed examples using a human-in-the-loop expansion process.</li>
                <li>Enhanced the automated evaluation framework with a composite metric scoring the LLM judge on grade correctness and semantic similarity, then optimized the judge's prompt with GEPA.</li>
                <li>Removed all AWS Bedrock and S3 dependencies, replacing them with Snowflake Cortex and Container Services to meet client environment requirements.</li>
              </ul>

              <p className="cv-project-label">Sepsis Billing Fraud Analysis</p>
              <ul className="cv-entry-list">
                <li>Built a data processing pipeline to create an event table capturing daily clinical events during sepsis admissions for thousands of patients.</li>
                <li>Created vector embeddings and applied K-Means clustering to identify distinct types of sepsis admissions; summarized each cluster with an LLM using few-shot prompting and iterative physician feedback.</li>
                <li>Results independently validated by insurers, who recovered $1.8 million in claim payments.</li>
              </ul>

              <p className="cv-project-label">Leadership & Team Development</p>
              <ul className="cv-entry-list">
                <li>Designed platform-agnostic agent architecture with abstraction layers for LLM providers, data sources, and deployment targets — adopted as baseline for two subsequent production systems without re-architecture.</li>
                <li>Own all technical hiring for the GenAI team: designed Python and SQL coding challenges, screened 10+ candidates, and set team coding standards.</li>
              </ul>

              <p className="cv-project-label">Health Insurance Claims Database Agent</p>
              <ul className="cv-entry-list">
                <li>Built a text-to-SQL agent accepting natural language questions across a 15-table claims database, with query corrector and data analyzer subagents; achieved 85% accuracy and 90% consistency in evaluation.</li>
                <li>Deployed on EC2 via FastAPI; built a Streamlit frontend for auth, prompt input, and result display. Supported DevOps to higher environments including production.</li>
              </ul>
            </div>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-title-row">
              <div className="cv-bullet" />
              <h3 className="cv-entry-title">Georgia Institute of Technology</h3>
            </div>
            <p className="cv-entry-subtitle">Atlanta, GA</p>
            <div className="cv-entry-header">
              <p className="cv-entry-role">Graduate Research Assistant</p>
              <span className="cv-entry-date">Aug 2021 – July 2022</span>
            </div>
            <p className="cv-project-label">Pediatric Mental Health Treatment</p>
            <ul className="cv-entry-list">
              <li>Developed a data-processing algorithm that reduced big clinical data processing runtime from 31 days to 4 hours.</li>
              <li>Extracted 500 million rows of Medicaid claims data with SQL for 50 U.S. states to discover patterns in psychotherapy utilization for Medicaid-insured children.</li>
              <li>Applied regression analysis and two-sample statistical tests to study costs and variations in mental health treatment across socioeconomic backgrounds.</li>
            </ul>

            <div className="cv-entry-header" style={{ marginTop: 'var(--s-4)' }}>
              <p className="cv-entry-role">Graduate Research Assistant</p>
              <span className="cv-entry-date">July 2021 – Aug 2021</span>
            </div>
            <ul className="cv-entry-list">
              <li>Conducted regression analysis on Georgia Covid-19 data to study associations between socioeconomic factors and case/death/vaccination rates across 159 counties.</li>
              <li>Developed 30+ interactive maps and 50+ temporal plots with Seaborn, Matplotlib, and Plotly.</li>
            </ul>
          </div>

          <h2 className="cv-col-title">Selected Projects</h2>

          <div className="cv-entry">
            <div className="cv-entry-title-row">
              <div className="cv-bullet" />
              <h3 className="cv-entry-title">DICOM Series Preparation Tool for 3D Cardiac Modeling</h3>
            </div>
            <p className="cv-entry-subtitle">Python · March 2025 – Present</p>
            <ul className="cv-entry-list">
              <li>Partnered with physicians at Cincinnati Children's Hospital Heart Institute to eliminate a manual DICOM preparation bottleneck — reduced per-case processing from 1–2 hours to under 5 seconds across batches of 200–600 files.</li>
              <li>Built a Streamlit app with DCM processing modules that copy metadata from a reference DICOM, assign new UIDs, and support JPG and video conversion. Deployed to physicians' local machines; used daily.</li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-title-row">
              <div className="cv-bullet" />
              <h3 className="cv-entry-title">CDC Cruise Ship Covid-19 Spread Simulation</h3>
            </div>
            <p className="cv-entry-subtitle">Python, R · Jan 2022 – April 2022</p>
            <ul className="cv-entry-list">
              <li>Collaborated with CDC Quarantine and Border Health Services to simulate Covid-19 spread on cruise ships using an SIR model.</li>
              <li>Launched an interactive R Shiny dashboard visualizing Covid-19 predictions for K-12 schools in Georgia to support DPH and school policy decisions.</li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-title-row">
              <div className="cv-bullet" />
              <h3 className="cv-entry-title">NBA Game Outcome Prediction</h3>
            </div>
            <p className="cv-entry-subtitle">Python · Feb 2021 – May 2021</p>
            <ul className="cv-entry-list">
              <li>Employed random forest, logistic regression, and SVM models to study home court effects across pre- and post-pandemic games; tuned with grid search cross-validation for 85% accuracy.</li>
            </ul>
          </div>

          <h2 className="cv-col-title">Technical Writing</h2>
          <ul className="cv-entry-list">
            <li>The LLM Isn't the Assembly Line (Dec 2025)</li>
            <li>There Are No Shortcuts to Production AI Systems (Sep 2025)</li>
            <li>From "Vibe Checking" to Systematic Agent Evaluation (Jun 2025)</li>
          </ul>
        </div>

        {/* Column 2: Education + Technical Skills + Publications */}
        <div className="cv-col">
          <h2 className="cv-col-title">Education</h2>

          <div className="cv-entry">
            <h3 className="cv-entry-title">Georgia Institute of Technology</h3>
            <p className="cv-entry-subtitle">M.S. Health Systems</p>
            <p className="cv-entry-subtitle">GPA 3.8/4.0 · Jan 2021 – May 2022</p>
          </div>

          <div className="cv-entry">
            <h3 className="cv-entry-title">George Washington University</h3>
            <p className="cv-entry-subtitle">B.A. International Affairs</p>
            <p className="cv-entry-subtitle">GPA 3.56/4.0 · Cum Laude · Sep 2017 – Dec 2019</p>
          </div>

          <h2 className="cv-col-title">Technical Skills</h2>

          <div className="cv-entry">
            <p className="cv-skill-category">Programming</p>
            <p className="cv-skill-list">Python · PySpark · SQL · Langchain · DSPy</p>
          </div>

          <div className="cv-entry">
            <p className="cv-skill-category">Agent Orchestration</p>
            <p className="cv-skill-list">Multi-agent Architecture · RAG · LLM Judge · Session & Memory Management · Tool Design · Prompt Optimization (GEPA)</p>
          </div>

          <div className="cv-entry">
            <p className="cv-skill-category">Engineering</p>
            <p className="cv-skill-list">Snowflake Vector Databases · Bedrock Knowledge Base · ETL Pipelines · FastAPI · Snowflake Cortex (LLM, Search, Embeddings)</p>
          </div>

          <h2 className="cv-col-title">Publications</h2>
          <div className="cv-entry">
            <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              <strong>Liu, W.</strong>, Xie, Y., Vinson, S. et al. Prevalence of diagnosed mental health conditions among US children with public and commercial insurance. <em>BMC Public Health</em> 25, 4050 (2025).{' '}
              <a href="https://doi.org/10.1186/s12889-025-25422-0" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>
                doi.org/10.1186/s12889-025-25422-0
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
