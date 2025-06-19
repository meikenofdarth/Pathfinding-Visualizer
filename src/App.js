import React, { useState } from 'react';
import PathfindingVisualizer from './visualizer/visualizer';
import './App.css';

function App() {
  const [algorithm, setAlgorithm] = useState('dijkstra');
  const [startRow, setStartRow] = useState(10);
  const [startCol, setStartCol] = useState(5);
  const [endRow, setEndRow] = useState(10);
  const [endCol, setEndCol] = useState(45);

  return (
    <div className="App">
      <div className="container">
        <div className="select-container">
          <label htmlFor="algorithm-select">Select Algorithm:</label>
          <select id="algorithm-select" value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
            <option value="dijkstra">Dijkstra</option>
            <option value="aStar">A*</option>
            <option value="bfs">BFS</option>
            <option value="greedy">Greedy Best-First</option>
            <option value="dfs">DFS (Recursive)</option>
            <option value="bidirectional">Bidirectional BFS</option>
          </select>
        </div>
        <div className="coordinates-container">
          <label htmlFor="start-row">Start Row:</label>
          <input type="number" id="start-row" value={startRow} onChange={(e) => setStartRow(parseInt(e.target.value))} placeholder="Start Row" />
          <label htmlFor="start-col">Start Col:</label>
          <input type="number" id="start-col" value={startCol} onChange={(e) => setStartCol(parseInt(e.target.value))} placeholder="Start Col" />
          <label htmlFor="end-row">End Row:</label>
          <input type="number" id="end-row" value={endRow} onChange={(e) => setEndRow(parseInt(e.target.value))} placeholder="End Row" />
          <label htmlFor="end-col">End Col:</label>
          <input type="number" id="end-col" value={endCol} onChange={(e) => setEndCol(parseInt(e.target.value))} placeholder="End Col" />
        </div>
      </div>
      <PathfindingVisualizer
        algorithm={algorithm}
        startRow={startRow}
        startCol={startCol}
        endRow={endRow}
        endCol={endCol}
      />
    </div>
  );
}

export default App;