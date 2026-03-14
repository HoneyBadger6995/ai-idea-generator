function IdeaGenerator() {
  return (
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
  )
}

export default IdeaGenerator