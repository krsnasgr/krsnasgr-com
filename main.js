/* ========================================
   KRSNASGR.COM — Minimal interactions
   ======================================== */

// Subtle parallax on the background image
const bg = document.querySelector('.bg img');
if (bg && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    bg.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// --- Source code matrix background ---
(function() {
  const container = document.getElementById('codeMatrix');
  if (!container) return;

  // The actual source of this page, CSS, and JS — one big code block
  const source = [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '  <meta charset="UTF-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '  <title>Krishna Sagar</title>',
    '  <link rel="stylesheet" href="style.css">',
    '</head>',
    '<body>',
    '  <div class="page">',
    '    <div class="bg">',
    '      <img src="assets/header.png">',
    '      <div class="bg__code"></div>',
    '      <div class="bg__overlay"></div>',
    '    </div>',
    '    <div class="content">',
    '      <div class="profile">',
    '        <img src="assets/profile.jpeg">',
    '        <h1>Krishna Sagar</h1>',
    '        <p>Developer</p>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</body>',
    '',
    '*, *::before, *::after {',
    '  margin: 0; padding: 0;',
    '  box-sizing: border-box;',
    '}',
    ':root {',
    '  --bg: #0a0a0f;',
    '  --accent: #00e5a0;',
    '  --gradient: linear-gradient(',
    '    135deg, #00e5a0, #00b4d8',
    '  );',
    '}',
    'body {',
    '  font-family: var(--font);',
    '  background: var(--bg);',
    '  color: var(--text);',
    '  overflow: hidden;',
    '}',
    '.page {',
    '  position: fixed;',
    '  inset: 0;',
    '  display: flex;',
    '  align-items: center;',
    '}',
    '.profile__img {',
    '  border-radius: 50%;',
    '  border: 2px solid var(--border);',
    '}',
    '.profile__glow {',
    '  background: var(--gradient);',
    '  opacity: .2;',
    '  filter: blur(16px);',
    '  animation: pulse 4s infinite;',
    '}',
    '.intro__line {',
    '  font-family: var(--mono);',
    '  font-weight: 500;',
    '  color: var(--text-dim);',
    '}',
    '.gradient-text {',
    '  background: var(--gradient);',
    '  -webkit-background-clip: text;',
    '  -webkit-text-fill-color:',
    '    transparent;',
    '}',
    '',
    'const bg = document.querySelector',
    '  (".bg img");',
    'document.addEventListener(',
    '  "mousemove", e => {',
    '  const x = e.clientX / w - 0.5;',
    '  const y = e.clientY / h - 0.5;',
    '  bg.style.transform =',
    '    `translate(${x}px, ${y}px)`;',
    '});',
    '',
    'function spawnParticle(x, y) {',
    '  const el = document.createElement',
    '    ("span");',
    '  el.className = "particle";',
    '  el.textContent = chars[',
    '    Math.floor(Math.random()',
    '      * chars.length)',
    '  ];',
    '  document.body.appendChild(el);',
    '}',
    '',
    '@keyframes fadeIn {',
    '  from { opacity: 0; }',
    '  to   { opacity: 1; }',
    '}',
    '@keyframes pulse {',
    '  0%, 100% { opacity: .2; }',
    '  50% { opacity: .35; }',
    '}',
    '',
    'const observer = new',
    '  IntersectionObserver(entries => {',
    '  entries.forEach(entry => {',
    '    if (entry.isIntersecting) {',
    '      entry.target.classList',
    '        .add("visible");',
    '    }',
    '  });',
    '});',
    '',
    'async function init() {',
    '  const res = await fetch(url);',
    '  const data = await res.json();',
    '  return data;',
    '}',
    '',
    'struct App {',
    '  var body: some View {',
    '    NavigationStack {',
    '      ContentView()',
    '    }',
    '  }',
    '}',
    '',
    'class MainActivity : Activity() {',
    '  override fun onCreate() {',
    '    setContent {',
    '      AppTheme {',
    '        MainScreen()',
    '      }',
    '    }',
    '  }',
    '}',
  ];

  // Calculate columns based on viewport width
  const colWidth = 140;
  const numCols = Math.ceil(window.innerWidth / colWidth);

  for (let i = 0; i < numCols; i++) {
    const col = document.createElement('div');
    col.className = 'bg__code-col';

    const pre = document.createElement('pre');

    // Vary speed per column for organic feel
    const speed = 25 + Math.random() * 35;
    pre.style.setProperty('--speed', speed + 's');

    // Start at a random offset in the source
    const offset = Math.floor(Math.random() * source.length);
    const shuffled = [...source.slice(offset), ...source.slice(0, offset)];

    // Double the content so the loop is seamless
    pre.textContent = shuffled.join('\n') + '\n' + shuffled.join('\n');

    col.appendChild(pre);
    container.appendChild(col);
  }
})();
