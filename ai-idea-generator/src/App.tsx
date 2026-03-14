import IdeaGenerator from "./components/IdeaGenerator"

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

      <IdeaGenerator />
    </div>
  )
}

export default App