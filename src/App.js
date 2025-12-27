function App() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <header style={{ marginBottom: "24px" }}>
        <h1>Amin Alaie</h1>
        <p>Front-end developer in progress</p>
        <a href="https://github.com/aminalaie">My GitHub</a>
      </header>

      <section>
        <h2>About Me</h2>
        <p>I am learning front-end development and building projects with React.</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (basic)</li>
          <li>React (basic)</li>
        </ul>
      </section>

      <footer style={{ marginTop: "40px", opacity: 0.7 }}>
        © 2025 Amin
      </footer>
    </main>
  );
}

export default App;
