function Header() {
  return (
    <header className="border-bottom">
      <div className="container py-3">
        <p className="mb-0 fw-semibold">Benjamin Frodsham</p>
      </div>
    </header>
  )
}

function Introduction() {
  return (
    <section aria-labelledby="introduction-heading">
      <h1 id="introduction-heading" className="display-4 fw-semibold">
        Hello, I&apos;m Benjamin
      </h1>
      <p className="lead mb-0">
        I&apos;m a software engineer. This portfolio is a work in progress.
      </p>
    </section>
  )
}

function RecentCommits() {
  return (
    <section aria-labelledby="recent-commits-heading">
      <h2 id="recent-commits-heading" className="h3">
        What am I up to?
      </h2>
      <p className="mb-0">Recent public work will appear here.</p>
    </section>
  )
}

function App() {
  return (
    <>
      <a className="skip-link visually-hidden-focusable" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="container py-5">
        <div className="landing-sections">
          <Introduction />
          <RecentCommits />
        </div>
      </main>
    </>
  )
}

export default App
