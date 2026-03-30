import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>AI Learning Platform</h1>
        <p style={styles.subtitle}>
          Master Deep Learning with our Interactive Editor and Real-time Feedback.
        </p>
        
        {/* This button directs them to the Authentication Feature */}
        <Link to="/login" style={styles.button}>
          Get Started / Login
        </Link>
      </header>

      <section style={styles.featureGrid}>
        <div style={styles.card}>
          <h3>Interactive Editor</h3>
          <p>Write Python code with AI-powered suggestions.</p>
        </div>
        <div style={styles.card}>
          <h3>Active Learning</h3>
          <p>Test your knowledge with dynamic quizzes.</p>
        </div>
      </section>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: { 
    height: '100vh', 
    backgroundColor: '#0f172a', 
    color: 'white', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    fontFamily: 'sans-serif'
  },
  header: { textAlign: 'center', marginBottom: '50px' },
  title: { fontSize: '3rem', marginBottom: '10px', color: '#3b82f6' },
  subtitle: { fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px' },
  button: { 
    display: 'inline-block',
    marginTop: '30px', 
    padding: '15px 40px', 
    backgroundColor: '#3b82f6', 
    color: 'white', 
    textDecoration: 'none', 
    borderRadius: '8px', 
    fontWeight: 'bold',
    transition: '0.3s'
  },
  featureGrid: { display: 'flex', gap: '20px', marginTop: '20px' },
  card: { 
    backgroundColor: '#1e293b', 
    padding: '20px', 
    borderRadius: '12px', 
    width: '250px', 
    border: '1px solid #334155' 
  }
};