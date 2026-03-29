import React from 'react';

interface Props {
  featureName: string;
  children: React.ReactNode;
  aiStatus?: 'idle' | 'thinking' | 'suggesting';
}

export const FeatureShell: React.FC<Props> = ({ featureName, children, aiStatus = 'idle' }) => {
  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      {/* Sidebar - Constant across all friends' apps */}
      <aside className="w-64 border-r border-gray-700 p-4">
        <h2 className="text-xl font-bold text-blue-400">AI Learner</h2>
        <nav className="mt-8 space-y-2">
          <div className="p-2 bg-gray-800 rounded">Current: {featureName}</div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <header className="h-14 border-b border-gray-700 flex items-center px-6 justify-between">
          <span className="font-medium">{featureName} View</span>
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${aiStatus === 'thinking' ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
            <span className="text-xs uppercase">AI {aiStatus}</span>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-6">
          {children} 
        </div>
      </main>
    </div>
  );
};