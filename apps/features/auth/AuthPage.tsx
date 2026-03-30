import React, { useState } from 'react';
import { mockData } from '../../../shared'; // Importing mock data from the shared folder

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // MOCK LOGIC: In a real app, this calls your Python API
    // For now, we just check if they typed "password"
    if (password === 'password123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', mockData.auth.currentUser.name);
      
      // Refresh to show logged-in state or redirect
      window.location.href = '/dashboard'; 
    } else {
      setError('Invalid email or password. (Try: password123)');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>AI Platform Login</h2>
        <p style={styles.subtitle}>Sign in to access your Active Learning dashboard</p>
        
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="student@university.edu"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••"
              style={styles.input}
              required
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>
        
        <p style={styles.footer}>
          Demo Hint: Use any email and <b>password123</b>
        </p>
      </div>
    </div>
  );
}

// Simple styles to make it look professional immediately
const styles: { [key: string]: React.CSSProperties } = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0f172a' },
  card: { backgroundColor: '#1e293b', padding: '40px', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', textAlign: 'center' },
  title: { color: 'white', marginBottom: '10px' },
  subtitle: { color: '#94a3b8', fontSize: '0.9rem', marginBottom: '30px' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px', color: '#cbd5e1' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: 'white' },
  button: { padding: '12px', borderRadius: '6px', border: 'none', backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  error: { color: '#ef4444', fontSize: '0.8rem', marginTop: '5px' },
  footer: { color: '#64748b', fontSize: '0.8rem', marginTop: '20px' }
};