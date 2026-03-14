import { useState } from "react"

function IdeaGenerator() {
  const [topic, setTopic] = useState<string>("")

  const handleGenerate = () => {
    console.log("Generating ideas for:", topic);
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic..."
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px"
        }}
      />

      <button
        onClick={handleGenerate}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Generate
      </button>
    </div>
  )
}

export default IdeaGenerator