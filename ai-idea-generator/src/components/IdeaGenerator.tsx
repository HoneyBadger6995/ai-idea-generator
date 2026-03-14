import { useState } from "react";
import { generateIdeas } from "../services/aiService";

function IdeaGenerator() {
    const [topic, setTopic] = useState<string>("")
    const [ideas, setIdeas] = useState<string[]>([])

    const handleGenerate = async() => {
        const result = await generateIdeas(topic);
        setIdeas(result);
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