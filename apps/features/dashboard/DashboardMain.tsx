import React from 'react';
import { mockData } from '../../../shared';

export default function DashboardMain() {
  const { stats } = mockData.dashboard;
  const user = mockData.auth.currentUser;

  return (
    <div style={styles.layout}>
      {/* --- SIDEBAR --- */}
      <aside style={styles.sidebar}>
        <div style={styles.logoSection}>
          <div style={styles.logoIcon}>🧠</div>
          <div>
            <h2 style={styles.logoText}>AI Coding Tutor</h2>
            <p style={styles.logoSubtext}>Deep Learning Powered</p>
          </div>
        </div>

        <nav style={styles.nav}>
          <div style={{ ...styles.navItem, ...styles.navActive }}>
            <span>⊞</span> Dashboard
          </div>
          <div style={styles.navItem}><span>📖</span> Problems</div>
          <div style={styles.navItem}><span>{`</>`}</span> Practice</div>
        </nav>

        <div style={styles.sidebarFooter}>
          <div style={styles.userInfo}>
            <p style={styles.userEmail}>{user.id}@vitstudent.ac.in</p>
            <p style={styles.userRole}>Student</p>
          </div>
          <button 
            style={styles.signOutBtn}
            onClick={() => {
              localStorage.removeItem('isAuthenticated');
              window.location.href = '/login';
            }}
          >
            <span>↳</span> Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <div>
            <h1 style={styles.title}>Dashboard</h1>
            <p style={styles.subtitle}>Track your learning progress</p>
          </div>
          <button style={styles.practiceBtn}>
             Practice Now
          </button>
        </header>

        {/* Stats Row */}
        <div style={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} style={styles.statCard}>
              <div style={styles.statIcon}>{i === 0 ? '🎯' : i === 1 ? '📈' : '⚠️'}</div>
              <div>
                <p style={styles.statLabel}>{stat.label}</p>
                <h3 style={styles.statValue}>{stat.value}</h3>
              </div>
            </div>
          ))}
          <div style={styles.statCard}>
             <div style={styles.statIcon}>🏅</div>
             <div>
                <p style={styles.statLabel}>Submissions</p>
                <h3 style={styles.statValue}>0</h3>
             </div>
          </div>
        </div>

        {/* Charts Row */}
        <div style={styles.contentGrid}>
          <div style={styles.chartCard}>
            <h4 style={styles.cardTitle}>Quality & Accuracy Trend</h4>
            <div style={styles.emptyState}>Submit solutions to see trends</div>
          </div>

          <div style={styles.chartCard}>
            <h4 style={styles.cardTitle}>Skill Heatmap by Topic</h4>
            <div style={styles.heatmap}>
              {['Arrays', 'Strings', 'Loops', 'Recursion', 'Sorting', 'Dynamic Programming'].map(topic => (
                <div key={topic} style={styles.heatmapRow}>
                  <span style={styles.topicLabel}>{topic}</span>
                  <div style={styles.graphLine}></div>
                </div>
              ))}
              <div style={styles.graphAxis}>
                <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Manual Theme Styles
const styles: { [key: string]: React.CSSProperties } = {
  layout: { display: 'flex', height: '100vh', backgroundColor: '#0b0e14', color: 'white', fontFamily: 'Inter, system-ui' },
  sidebar: { width: '260px', backgroundColor: '#11141d', borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column', padding: '24px' },
  logoSection: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' },
  logoIcon: { fontSize: '24px', background: '#1e293b', padding: '8px', borderRadius: '8px' },
  logoText: { fontSize: '16px', margin: 0, fontWeight: 'bold' },
  logoSubtext: { fontSize: '11px', color: '#64748b', margin: 0 },
  nav: { flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' },
  navItem: { padding: '12px', borderRadius: '8px', color: '#94a3b8', cursor: 'pointer', display: 'flex', gap: '12px', transition: '0.2s' },
  navActive: { backgroundColor: '#1e1b4b', color: '#818cf8' },
  sidebarFooter: { borderTop: '1px solid #1e293b', paddingTop: '20px' },
  userInfo: { marginBottom: '15px' },
  userEmail: { fontSize: '12px', margin: 0, color: '#cbd5e1' },
  userRole: { fontSize: '11px', color: '#64748b', margin: 0 },
  signOutBtn: { background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', gap: '8px', padding: 0 },
  
  mainContent: { flex: 1, padding: '40px', overflowY: 'auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' },
  title: { fontSize: '28px', margin: 0 },
  subtitle: { color: '#64748b', margin: '4px 0 0 0' },
  practiceBtn: { backgroundColor: '#6366f1', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' },
  
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' },
  statCard: { backgroundColor: '#161a23', padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #1e293b' },
  statIcon: { fontSize: '20px', background: '#0b0e14', padding: '8px', borderRadius: '8px' },
  statLabel: { fontSize: '12px', color: '#64748b', margin: 0 },
  statValue: { fontSize: '20px', fontWeight: 'bold', margin: '4px 0 0 0' },
  
  contentGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  chartCard: { backgroundColor: '#161a23', padding: '24px', borderRadius: '16px', border: '1px solid #1e293b', minHeight: '350px' },
  cardTitle: { margin: '0 0 24px 0', fontSize: '16px', color: '#cbd5e1' },
  emptyState: { height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontSize: '14px' },
  heatmapRow: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' },
  topicLabel: { width: '100px', fontSize: '12px', color: '#64748b', textAlign: 'right' },
  graphLine: { flex: 1, height: '1px', backgroundColor: '#1e293b' },
  graphAxis: { display: 'flex', justifyContent: 'space-between', paddingLeft: '112px', color: '#475569', fontSize: '12px', marginTop: '8px' }
};