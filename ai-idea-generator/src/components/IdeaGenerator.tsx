import { useState } from "react"

function IdeaGenerator() {
    const [topic, setTopic] = useState<string>("")
    const [ideas, setIdeas] = useState<string[]>([])

    const handleGenerate = () => {
        console.log("Generating ideas for:", topic);

        const mockIdeas = [
            `${topic} AI assistant`,
            `${topic} mobile app`,
            `${topic} analytics platform`,
            `${topic} marketplace`,
            `${topic} automation tool`,
        ]

        setIdeas(mockIdeas)
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

            <ul style={{ marginTop: "30px", textAlign: "left", display: "inline-block" }}>
                {ideas.map((idea, index) => (
                    <li key={index}>{idea}</li>
                ))}
            </ul>
        </div>
    )
}

export default IdeaGenerator