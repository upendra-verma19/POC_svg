const express = require('express');
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

const app = express();
const PORT = 8003;

app.get('/api/optimized/:name', async (req, res) => {
  // Prevent path traversal by using basename
  const svgName = path.basename(req.params.name);

  const svgPath = path.join(__dirname, '../svg', svgName);
  if (!fs.existsSync(svgPath)) return res.status(404).send('SVG not found');

  const optimizedDir = path.join(__dirname, '../optimized');
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  const optimizedPath = path.join(optimizedDir, svgName);

  // serve the cached optimized version
  if (fs.existsSync(optimizedPath)) {
    return res.sendFile(optimizedPath);
  }

  try {
    const rawSVG = fs.readFileSync(svgPath, 'utf8');
    const result = optimize(rawSVG, { multipass: true });

    fs.writeFileSync(optimizedPath, result.data, 'utf8');

    res.type('image/svg+xml').send(result.data);
  } catch (err) {
    console.error('Error optimizing SVG:', err);
    res.status(500).send('Optimization failed');
  }
});

app.use('/optimized', express.static(path.join(__dirname, '../optimized')));

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
