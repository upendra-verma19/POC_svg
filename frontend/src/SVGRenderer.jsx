import React, {
  useImperativeHandle,
  forwardRef,
  useRef,
  useEffect,
  useState,
} from 'react';

const SVGRenderer = forwardRef(({ mode, name }, ref) => {
  const borderColors = {
    inline: '#4f8cff',
    optimized: '#2ecc40',
    lazy: '#ff9800',
  };
  const [svg, setSvg] = useState('');
  const containerRef = useRef();

  useImperativeHandle(ref, () => ({
    async render() {
      if (mode === 'inline') {
        const res = await fetch(`/api/optimized/${name}`); // Use backend for consistency
        setSvg(await res.text());
      } else if (mode === 'optimized') {
        const res = await fetch(`/api/optimized/${name}`);
        setSvg(await res.text());
      } else if (mode === 'lazy') {
        setSvg('');
        observer.observe(containerRef.current);
      }
    },
  }));

  // Lazy loading logic
  useEffect(() => {
    if (mode !== 'lazy') return;
    return () => observer.disconnect();
  }, [mode]);

  const observer = new window.IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
      const res = await fetch(`/api/optimized/${name}`);
      setSvg(await res.text());
      observer.disconnect();
    }
  });

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: 200,
        border: `3px solid ${borderColors[mode]}`,
        borderRadius: 8,
        transition: 'border-color 0.2s',
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: svg }} />
      <div style={{ fontSize: 12, color: borderColors[mode], marginTop: 4 }}>
        {mode === 'inline' && 'Direct Inline SVG'}
        {mode === 'optimized' && 'Optimized SVG (SVGO)'}
        {mode === 'lazy' && 'Lazy Loaded SVG'}
      </div>
    </div>
  );
});

export default SVGRenderer;
