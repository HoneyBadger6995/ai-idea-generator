import './App.css'

function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "40px",
        textAlign: "center"
      }}
    >
      <h1>AI Idea Generator</h1>

      <p>
        Enter a topic and let AI generate creative ideas for you.
      </p>

      <div style={{ marginTop: "30px" }}>
        <input
          placeholder="Enter a topic..."
          style={{
            padding: "10px",
            width: "250px",
            marginRight: "10px"
          }}
        />

        <button
          style={{
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >
          Generate
        </button>
      </div>
    </div>
  )
}

export default App