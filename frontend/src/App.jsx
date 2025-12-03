import React, { useRef, useState } from 'react';
import SVGRenderer from './SVGRenderer';

const MODES = [
  { value: 'inline', label: 'Direct Inline SVG' },
  { value: 'optimized', label: 'Optimized SVG (SVGO)' },
  { value: 'lazy', label: 'Lazy Loaded SVG' },
];

export default function App() {
  const [mode, setMode] = useState('inline');
  const [renderTime, setRenderTime] = useState(null);
  const [svgName, setSvgName] = useState('sample.svg');
  const rendererRef = useRef();

  const handleRender = async () => {
    const start = performance.now();
    await rendererRef.current?.render();
    setRenderTime((performance.now() - start).toFixed(2));
  };

  return (
    <div
      style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'sans-serif' }}
    >
      <h2>SVG Render Performance POC</h2>
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        {MODES.map((m) => (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        ))}
      </select>
      <button style={{ marginLeft: 8 }} onClick={handleRender}>
        Render SVG
      </button>
      <div style={{ margin: '1rem 0' }}>
        <SVGRenderer ref={rendererRef} mode={mode} name={svgName} />
      </div>
      <div style={{ fontSize: 14, color: '#555' }}>
        {renderTime && (
          <>
            Render time: <b>{renderTime} ms</b>
          </>
        )}
      </div>
    </div>
  );
}
