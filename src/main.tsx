import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './styles.css';

const tasks = [
  { title: 'Prepare class slides', category: 'Teaching' },
  { title: 'Review Figma design', category: 'Design' },
  { title: 'Send workshop reminder', category: 'Admin' },
  { title: 'Plan the next lesson', category: 'Teaching' },
] as const;
const initial = [false, true, true, false];

function App() {
  const [completed, setCompleted] = useState(initial);
  const [changed, setChanged] = useState(false);
  const count = completed.filter(Boolean).length;
  function toggle(index: number) {
    setCompleted(previous => previous.map((value, i) => i === index ? !value : value));
    setChanged(true);
  }
  return <main className="screen">
    <header>
      <span className="pill state">{changed ? 'STATE B • after tapping a task' : 'STATE A • starting screen'}</span>
      <h1>Good morning, &nbsp;Bhavina</h1>
      <p className="date">Thursday, 8 October</p>
    </header>
    <section className="progress-card" aria-label="Today’s progress">
      <div className="progress-label"><span>Today’s progress</span><strong aria-live="polite">{count} of 4</strong></div>
      <div className="progress-track" role="progressbar" aria-label="Completed priorities" aria-valuemin={0} aria-valuemax={4} aria-valuenow={count}><div className="progress-fill" style={{width: `${count / 4 * 100}%`}} /></div>
    </section>
    <section className="priorities" aria-labelledby="priorities-title">
      <h2 id="priorities-title">Your priorities</h2>
      <div className="task-list">{tasks.map((task, index) => <button key={task.title} className={`task ${completed[index] ? 'completed' : ''}`} aria-pressed={completed[index]} onClick={() => toggle(index)}>
        <span className="checkbox" aria-hidden="true">{completed[index] ? '✓' : ''}</span>
        <span className="task-content"><span className="task-title">{task.title}</span><span className={`pill category ${task.category.toLowerCase()}`}>{task.category}</span></span>
      </button>)}</div>
    </section>
    <button className="reset" onClick={() => {setCompleted([...initial]); setChanged(false);}}>Reset demo</button>
  </main>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
