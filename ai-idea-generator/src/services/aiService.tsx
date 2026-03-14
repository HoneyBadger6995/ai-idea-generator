export async function generateIdeas(topic: string): Promise<string[]> {

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Generate 5 startup ideas about ${topic}. Return them as a simple list.`
        }
      ]
    })
  })

  const data = await response.json()

  const text = data.choices[0].message.content

  const ideas = text
    .split("\n")
    .map((line: string) => line.trim())
    .filter((line: string) => line.length > 0)

  return ideas
}