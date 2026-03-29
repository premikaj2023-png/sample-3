export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the AI Coding Platform</h1>
      <p>Select a module below to start building.</p>
      
      <div style={{ display: 'flex', gap: '1px', justifyContent: 'center', marginTop: '2rem' }}>
        <a href="/challenges" style={cardStyle}>Coding Challenges</a>
        <a href="/editor" style={cardStyle}>AI Code Editor</a>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: '1.5rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  textDecoration: 'none',
  color: 'inherit'
};