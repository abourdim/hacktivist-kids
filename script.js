/**
 * HACKTIVIST KIDS v0.1
 * Pure Anonymous Hacker Experience
 * Masks · Slogans · Boot Sequence · Glitch
 */

const $ = id => document.getElementById(id);

/* ═══════════════════════════════════════════════════════════════
   GUY FAWKES MASK — BASE PATH (shared across all variants)
   ═══════════════════════════════════════════════════════════════ */

// A stylized Guy Fawkes mask SVG path — iconic Anonymous look
const MASK_BASE_PATH = `
  M 50 5
  C 30 5, 10 25, 10 50
  C 10 65, 15 80, 20 88
  C 22 92, 28 98, 35 102
  C 40 105, 45 108, 50 110
  C 55 108, 60 105, 65 102
  C 72 98, 78 92, 80 88
  C 85 80, 90 65, 90 50
  C 90 25, 70 5, 50 5 Z
`;

// Eyes
const EYE_LEFT = `M 30 45 C 30 40, 38 36, 42 40 C 42 44, 38 48, 30 45 Z`;
const EYE_RIGHT = `M 70 45 C 70 40, 62 36, 58 40 C 58 44, 62 48, 70 45 Z`;
// Eyebrows
const BROW_LEFT = `M 26 35 Q 34 28, 44 34`;
const BROW_RIGHT = `M 74 35 Q 66 28, 56 34`;
// Nose
const NOSE = `M 48 52 L 50 62 L 52 52`;
// Mustache
const MUSTACHE = `M 30 72 Q 35 66, 42 68 Q 46 69, 50 67 Q 54 69, 58 68 Q 65 66, 70 72`;
// Smile
const SMILE = `M 34 76 Q 42 84, 50 82 Q 58 84, 66 76`;
// Goatee/Beard
const GOATEE = `M 44 86 Q 46 94, 50 98 Q 54 94, 56 86`;
// Cheek lines
const CHEEK_L = `M 22 60 Q 26 65, 28 72`;
const CHEEK_R = `M 78 60 Q 74 65, 72 72`;

function buildMaskSVG(faceColor, strokeColor, fillOpacity, extras = '') {
  return `<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="glow_${Math.random().toString(36).slice(2,6)}">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    ${extras}
    <path d="${MASK_BASE_PATH}" fill="${faceColor}" fill-opacity="${fillOpacity}" stroke="${strokeColor}" stroke-width="1.5"/>
    <path d="${EYE_LEFT}" fill="${strokeColor}" opacity=".9"/>
    <path d="${EYE_RIGHT}" fill="${strokeColor}" opacity=".9"/>
    <path d="${BROW_LEFT}" fill="none" stroke="${strokeColor}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="${BROW_RIGHT}" fill="none" stroke="${strokeColor}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="${NOSE}" fill="none" stroke="${strokeColor}" stroke-width="1" opacity=".5"/>
    <path d="${MUSTACHE}" fill="none" stroke="${strokeColor}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="${SMILE}" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round"/>
    <path d="${GOATEE}" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round"/>
    <path d="${CHEEK_L}" fill="none" stroke="${strokeColor}" stroke-width=".8" opacity=".3"/>
    <path d="${CHEEK_R}" fill="none" stroke="${strokeColor}" stroke-width=".8" opacity=".3"/>
  </svg>`;
}

/* ═══════════════════════════════════════════════════════════════
   15 MASK VARIANTS — All Guy Fawkes, different treatments
   ═══════════════════════════════════════════════════════════════ */

const MASKS = [
  {
    id: 'classic',
    name: 'CLASSIC',
    svg: () => buildMaskSVG('#e8e8e8', '#1a1a1a', '1')
  },
  {
    id: 'inverted',
    name: 'INVERTED',
    svg: () => buildMaskSVG('#111111', '#00ff41', '.9')
  },
  {
    id: 'outline',
    name: 'OUTLINE',
    svg: () => buildMaskSVG('transparent', '#00ff41', '0')
  },
  {
    id: 'matrix',
    name: 'MATRIX',
    svg: () => {
      const lines = Array.from({length: 20}, (_, i) =>
        `<text x="${10 + (i%10)*9}" y="${10 + Math.floor(i/10)*50}" fill="#00ff41" font-size="6" opacity=".2" font-family="monospace">${Math.random().toString(2).slice(2,8)}</text>`
      ).join('');
      return buildMaskSVG('#001100', '#00ff41', '.85', lines);
    }
  },
  {
    id: 'neon_green',
    name: 'NEON GRN',
    svg: () => buildMaskSVG('#002200', '#00ff41', '.7')
  },
  {
    id: 'neon_cyan',
    name: 'NEON CYAN',
    svg: () => buildMaskSVG('#001a22', '#00ffff', '.7')
  },
  {
    id: 'blood',
    name: 'BLOOD',
    svg: () => buildMaskSVG('#1a0000', '#ff0033', '.8')
  },
  {
    id: 'gold',
    name: 'GOLD',
    svg: () => buildMaskSVG('#1a1500', '#ffd700', '.8')
  },
  {
    id: 'chrome',
    name: 'CHROME',
    svg: () => buildMaskSVG('#1a1a1a', '#c0c0c0', '.7')
  },
  {
    id: 'glitch',
    name: 'GLITCH',
    svg: () => {
      // RGB split effect using three overlapping masks
      return `<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
        <g opacity=".5" transform="translate(-2, 0)">
          <path d="${MASK_BASE_PATH}" fill="none" stroke="#ff0033" stroke-width="1.5"/>
          <path d="${EYE_LEFT}" fill="#ff0033"/><path d="${EYE_RIGHT}" fill="#ff0033"/>
        </g>
        <g opacity=".5" transform="translate(2, 0)">
          <path d="${MASK_BASE_PATH}" fill="none" stroke="#00ffff" stroke-width="1.5"/>
          <path d="${EYE_LEFT}" fill="#00ffff"/><path d="${EYE_RIGHT}" fill="#00ffff"/>
        </g>
        <path d="${MASK_BASE_PATH}" fill="#0a0a0a" fill-opacity=".6" stroke="#00ff41" stroke-width="1"/>
        <path d="${EYE_LEFT}" fill="#00ff41" opacity=".9"/>
        <path d="${EYE_RIGHT}" fill="#00ff41" opacity=".9"/>
        <path d="${BROW_LEFT}" fill="none" stroke="#00ff41" stroke-width="1.8" stroke-linecap="round"/>
        <path d="${BROW_RIGHT}" fill="none" stroke="#00ff41" stroke-width="1.8" stroke-linecap="round"/>
        <path d="${MUSTACHE}" fill="none" stroke="#00ff41" stroke-width="1.8" stroke-linecap="round"/>
        <path d="${SMILE}" fill="none" stroke="#00ff41" stroke-width="1.5" stroke-linecap="round"/>
        <path d="${GOATEE}" fill="none" stroke="#00ff41" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`;
    }
  },
  {
    id: 'scanline',
    name: 'SCANLINE',
    svg: () => {
      const lines = Array.from({length: 25}, (_, i) =>
        `<line x1="0" y1="${i*4.6}" x2="100" y2="${i*4.6}" stroke="#00ff41" stroke-width=".3" opacity=".3"/>`
      ).join('');
      return buildMaskSVG('#0a0f0a', '#00ff41', '.75', lines);
    }
  },
  {
    id: 'binary',
    name: 'BINARY',
    svg: () => {
      const bits = Array.from({length: 30}, (_, i) =>
        `<text x="${5 + (i%10)*10}" y="${15 + Math.floor(i/10)*35}" fill="#00ff41" font-size="5" opacity=".15" font-family="monospace">${Math.random() > .5 ? '1' : '0'}</text>`
      ).join('');
      return buildMaskSVG('#050a05', '#00ff41', '.8', bits);
    }
  },
  {
    id: 'circuit',
    name: 'CIRCUIT',
    svg: () => {
      const circuits = `
        <line x1="20" y1="30" x2="20" y2="80" stroke="#00ff41" stroke-width=".3" opacity=".2"/>
        <line x1="40" y1="20" x2="40" y2="90" stroke="#00ff41" stroke-width=".3" opacity=".2"/>
        <line x1="60" y1="20" x2="60" y2="90" stroke="#00ff41" stroke-width=".3" opacity=".2"/>
        <line x1="80" y1="30" x2="80" y2="80" stroke="#00ff41" stroke-width=".3" opacity=".2"/>
        <line x1="15" y1="50" x2="85" y2="50" stroke="#00ff41" stroke-width=".3" opacity=".15"/>
        <line x1="15" y1="70" x2="85" y2="70" stroke="#00ff41" stroke-width=".3" opacity=".15"/>
        <circle cx="40" cy="50" r="2" fill="#00ff41" opacity=".2"/>
        <circle cx="60" cy="50" r="2" fill="#00ff41" opacity=".2"/>
        <circle cx="40" cy="70" r="2" fill="#00ff41" opacity=".2"/>
        <circle cx="60" cy="70" r="2" fill="#00ff41" opacity=".2"/>
      `;
      return buildMaskSVG('#050f05', '#00ff41', '.8', circuits);
    }
  },
  {
    id: 'xray',
    name: 'X-RAY',
    svg: () => buildMaskSVG('transparent', '#4488ff', '0')
  },
  {
    id: 'corrupted',
    name: 'CORRUPT',
    svg: () => {
      const corruption = `
        <rect x="25" y="55" width="50" height="4" fill="#0a0a0a"/>
        <rect x="15" y="75" width="30" height="3" fill="#0a0a0a"/>
        <rect x="55" y="40" width="25" height="3" fill="#0a0a0a"/>
      `;
      return buildMaskSVG('#0a0a0a', '#00ff41', '.5', corruption);
    }
  },
  {
    id: 'pixel',
    name: 'PIXEL',
    svg: () => {
      const pixels = Array.from({length: 40}, () => {
        const x = 15 + Math.random() * 70;
        const y = 10 + Math.random() * 90;
        return `<rect x="${x}" y="${y}" width="4" height="4" fill="#00ff41" opacity=".2"/>`;
      }).join('');
      return buildMaskSVG('#080808', '#00ff41', '.6', pixels);
    }
  },
  {
    id: 'infrared',
    name: 'INFRARED',
    svg: () => buildMaskSVG('#1a0a00', '#ff4400', '.7')
  },
  {
    id: 'half_left',
    name: 'HALF L',
    svg: () => {
      return `<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
        <defs><clipPath id="halfL"><rect x="0" y="0" width="50" height="115"/></clipPath></defs>
        <g clip-path="url(#halfL)">
          <path d="${MASK_BASE_PATH}" fill="#e8e8e8" stroke="#1a1a1a" stroke-width="1.5"/>
          <path d="${EYE_LEFT}" fill="#1a1a1a"/><path d="${EYE_RIGHT}" fill="#1a1a1a"/>
          <path d="${BROW_LEFT}" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
          <path d="${MUSTACHE}" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
          <path d="${SMILE}" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
        </g>
        <g>
          <path d="${MASK_BASE_PATH}" fill="none" stroke="#00ff41" stroke-width="1" stroke-dasharray="2,3"/>
        </g>
      </svg>`;
    }
  },
  {
    id: 'half_right',
    name: 'HALF R',
    svg: () => {
      return `<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
        <defs><clipPath id="halfR"><rect x="50" y="0" width="50" height="115"/></clipPath></defs>
        <g clip-path="url(#halfR)">
          <path d="${MASK_BASE_PATH}" fill="#e8e8e8" stroke="#1a1a1a" stroke-width="1.5"/>
          <path d="${EYE_LEFT}" fill="#1a1a1a"/><path d="${EYE_RIGHT}" fill="#1a1a1a"/>
          <path d="${BROW_RIGHT}" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
          <path d="${MUSTACHE}" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
          <path d="${SMILE}" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
        </g>
        <g>
          <path d="${MASK_BASE_PATH}" fill="none" stroke="#00ff41" stroke-width="1" stroke-dasharray="2,3"/>
        </g>
      </svg>`;
    }
  },
  {
    id: 'cracked',
    name: 'CRACKED',
    svg: () => {
      const crack = `<path d="M50 5 L48 25 L52 40 L47 55 L53 70 L49 85 L50 110" fill="none" stroke="#00ff41" stroke-width=".8" opacity=".6"/>`;
      return buildMaskSVG('#111', '#00ff41', '.7', crack);
    }
  }
];

/* ═══════════════════════════════════════════════════════════════
   SLOGANS DATABASE — Real originals + Anonymous prank versions
   ═══════════════════════════════════════════════════════════════ */

const SLOGANS = [
  {
    prank: 'We are Anony. We are Legion. We do not forgive. We do not forget... to prank. Expect us.',
    original: 'We are Anonymous. We are Legion. We do not forgive. We do not forget. Expect us.',
    source: 'Anonymous — Hacktivist collective, 2008'
  },
  {
    prank: 'Hack Different.',
    original: 'Think Different.',
    source: 'Apple — 1997 campaign by Steve Jobs'
  },
  {
    prank: 'Just Hack It.',
    original: 'Just Do It.',
    source: 'Nike — 1988, created by Wieden+Kennedy'
  },
  {
    prank: 'I hack, therefore I prank.',
    original: 'I think, therefore I am.',
    source: 'René Descartes — French philosopher, 1637'
  },
  {
    prank: 'Veni, Vidi, Hacki.',
    original: 'Veni, Vidi, Vici. (I came, I saw, I conquered.)',
    source: 'Julius Caesar — Roman general, 47 BC'
  },
  {
    prank: '404: Seriousness Not Found.',
    original: '404: Page Not Found.',
    source: 'HTTP Protocol — Standard error code, invented at CERN'
  },
  {
    prank: 'The exploit is out there.',
    original: 'The truth is out there.',
    source: 'The X-Files — TV series, 1993'
  },
  {
    prank: 'Knowledge is Access.',
    original: 'Knowledge is Power.',
    source: 'Francis Bacon — English philosopher, 1597'
  },
  {
    prank: 'Move Fast and Prank Things.',
    original: 'Move Fast and Break Things.',
    source: 'Mark Zuckerberg — Facebook motto, 2004'
  },
  {
    prank: "Don't Be Boring.",
    original: "Don't Be Evil.",
    source: "Google — Original company motto, 2000"
  },
  {
    prank: 'May the Source Code be with you.',
    original: 'May the Force be with you.',
    source: 'Star Wars — Obi-Wan Kenobi, 1977'
  },
  {
    prank: 'With great access comes great pranks.',
    original: 'With great power comes great responsibility.',
    source: 'Spider-Man — Uncle Ben, Marvel Comics 1962'
  },
  {
    prank: 'One small hack for kid, one giant prank for mankind.',
    original: 'One small step for man, one giant leap for mankind.',
    source: 'Neil Armstrong — First Moon landing, July 20, 1969'
  },
  {
    prank: 'In Code We Trust.',
    original: 'In God We Trust.',
    source: 'United States — Official national motto, 1956'
  },
  {
    prank: 'To prank or not to prank... always prank.',
    original: 'To be or not to be, that is the question.',
    source: 'William Shakespeare — Hamlet, 1600'
  },
  {
    prank: 'Why so unprankable?',
    original: 'Why so serious?',
    source: 'The Joker — The Dark Knight, 2008'
  },
  {
    prank: 'I am the one who pranks.',
    original: 'I am the one who knocks.',
    source: 'Walter White — Breaking Bad, 2008'
  },
  {
    prank: "I'll prank back.",
    original: "I'll be back.",
    source: 'The Terminator — Arnold Schwarzenegger, 1984'
  },
  {
    prank: 'Eu-HACK-a!',
    original: 'Eureka! (I found it!)',
    source: 'Archimedes — Greek mathematician, ~250 BC'
  },
  {
    prank: 'The only thing we have to fear is... no pranks.',
    original: 'The only thing we have to fear is fear itself.',
    source: 'Franklin D. Roosevelt — Inaugural address, 1933'
  },
  {
    prank: 'Give me root access or give me boredom.',
    original: 'Give me liberty or give me death.',
    source: 'Patrick Henry — American revolutionary, 1775'
  },
  {
    prank: "The name is Prank. Agent Prank.",
    original: "The name is Bond. James Bond.",
    source: 'James Bond — Ian Fleming, 1953'
  },
  {
    prank: 'I am silliness. I am the prank.',
    original: 'I am vengeance. I am the night.',
    source: 'Batman — DC Comics'
  },
  {
    prank: 'We are Anony... expect pranks.',
    original: 'We are Anonymous... expect us.',
    source: 'Anonymous — Closing statement of communiqués'
  },
  {
    prank: 'ACCESS GRANTED... to maximum fun.',
    original: 'ACCESS GRANTED',
    source: 'Computer security — Authentication success message'
  },
  {
    prank: 'sudo prank --all --no-mercy',
    original: 'sudo rm -rf / --no-preserve-root',
    source: 'Linux — The most dangerous terminal command'
  },
  {
    prank: 'Decrypting... fun.exe loaded.',
    original: 'Decrypting... file loaded.',
    source: 'Encryption — Process of decoding protected data'
  },
  {
    prank: 'We are Anony... resistance is futile.',
    original: 'Resistance is futile.',
    source: 'The Borg — Star Trek: The Next Generation, 1989'
  },
  {
    prank: 'Hack the planet!',
    original: 'Hack the planet!',
    source: 'Hackers — Cult film, 1995 (this one is already perfect)'
  },
  {
    prank: 'There is no spoon... only pranks.',
    original: 'There is no spoon.',
    source: 'The Matrix — Wachowskis, 1999'
  }
];

/* ═══════════════════════════════════════════════════════════════
   SPLASH SCREEN — Workshop DIY branding
   ═══════════════════════════════════════════════════════════════ */

async function runSplashScreen() {
  // Inject big logo into splash
  $('splashLogo').innerHTML = WORKSHOP_LOGO_SVG;

  // Hold splash for dramatic effect
  await sleep(3500);

  // Fade out splash
  const splash = $('splashOverlay');
  splash.style.transition = 'opacity .8s ease';
  splash.style.opacity = '0';
  await sleep(800);
  splash.style.display = 'none';

  // Now run password screen
  await runPasswordScreen();
}

/* ═══════════════════════════════════════════════════════════════
   PASSWORD UNLOCK SCREEN — Anonymous guards the entrance
   ═══════════════════════════════════════════════════════════════ */

const PASSWORD = 'anony';
const PASSWORD_LINES = [
  () => t('pw_line1'),
  () => t('pw_line2'),
  () => '',
  () => t('pw_line3'),
  () => t('pw_line4'),
];

let passwordAttempts = 0;

async function runPasswordScreen() {
  const overlay = $('passwordOverlay');
  const maskEl = $('passwordMask');
  const textEl = $('passwordText');
  const input = $('passwordInput');
  const hint = $('passwordHint');

  overlay.style.display = 'flex';

  // Inject mask
  maskEl.innerHTML = MASKS[0].svg();

  // Type out the Anonymous message line by line
  for (const lineFn of PASSWORD_LINES) {
    const line = typeof lineFn === 'function' ? lineFn() : lineFn;
    if (!line) {
      await sleep(300);
      textEl.innerHTML += '<br>';
      continue;
    }
    for (let i = 0; i <= line.length; i++) {
      textEl.innerHTML = textEl.innerHTML.replace(/<span class="cursor"><\/span>/, '');
      const currentLines = textEl.innerHTML;
      const upToNow = currentLines + line.slice(0, i) + '<span class="cursor"></span>';
      textEl.innerHTML = upToNow;
      await sleep(30 + Math.random() * 20);
    }
    textEl.innerHTML = textEl.innerHTML.replace(/<span class="cursor"><\/span>/, '') + '<br>';
    await sleep(400);
  }

  // Show hint
  hint.textContent = t('pw_hint');

  // Focus input
  input.style.display = '';
  input.focus();

  // Listen for enter
  input.addEventListener('keydown', handlePasswordKey);
}

async function handlePasswordKey(e) {
  if (e.key !== 'Enter') return;

  const input = $('passwordInput');
  const attempts = $('passwordAttempts');
  const overlay = $('passwordOverlay');
  const val = input.value.trim().toLowerCase();

  if (val === PASSWORD) {
    // SUCCESS
    input.removeEventListener('keydown', handlePasswordKey);
    input.disabled = true;

    const textEl = $('passwordText');
    textEl.innerHTML = '';
    
    const successLines = [
      t('pw_granted'),
      '',
      t('pw_welcome'),
      t('pw_closing'),
    ];

    for (const line of successLines) {
      if (!line) { textEl.innerHTML += '<br>'; await sleep(200); continue; }
      for (let i = 0; i <= line.length; i++) {
        textEl.innerHTML = textEl.innerHTML.replace(/<span class="cursor"><\/span>/, '');
        textEl.innerHTML = textEl.innerHTML + line.slice(0, i) + '<span class="cursor"></span>';
        await sleep(25);
      }
      textEl.innerHTML = textEl.innerHTML.replace(/<span class="cursor"><\/span>/, '') + '<br>';
      await sleep(300);
    }

    attempts.textContent = '';
    $('passwordHint').textContent = '';
    await sleep(1200);

    // Fade out
    overlay.style.transition = 'opacity .8s ease';
    overlay.style.opacity = '0';
    await sleep(800);
    overlay.style.display = 'none';

    // Continue to boot
    await runBootSequence();

  } else {
    // WRONG PASSWORD
    passwordAttempts++;
    input.value = '';

    // Shake effect
    const inputArea = input.parentElement;
    inputArea.classList.add('password-shake');
    setTimeout(() => inputArea.classList.remove('password-shake'), 500);

    const messages = t('pw_denied');

    attempts.textContent = `> ${messages[Math.min(passwordAttempts - 1, messages.length - 1)]}`;

    if (passwordAttempts >= 3) {
      $('passwordHint').innerHTML = t('pw_hint2');
    }
  }
}

const BOOT_LINES = [
  { text: '> BIOS v3.14 initializing...', cls: 'dim', delay: 100 },
  { text: '> Memory check: 1337 MB OK', cls: 'dim', delay: 200 },
  { text: '> Loading kernel... hacktivist-os-0.1', cls: '', delay: 300 },
  { text: '> Mounting /dev/prank0...', cls: '', delay: 150 },
  { text: '> Scanning network...', cls: '', delay: 400 },
  { text: '> WARNING: Unauthorized access detected', cls: 'error', delay: 600 },
  { text: '> Bypassing firewall... ████████░░ 82%', cls: 'cyan', delay: 300 },
  { text: '> Bypassing firewall... ██████████ 100%', cls: 'success', delay: 200 },
  { text: '> Firewall bypassed.', cls: 'success', delay: 100 },
  { text: '> Establishing encrypted connection...', cls: '', delay: 500 },
  { text: '> Connection secured. AES-256.', cls: 'success', delay: 200 },
  { text: '> Loading agent database...', cls: '', delay: 300 },
  { text: '> 30 slogans decrypted.', cls: 'dim', delay: 100 },
  { text: '> 20 masks loaded.', cls: 'dim', delay: 100 },
  { text: '> ', cls: '', delay: 300 },
  { text: '  ██╗  ██╗ █████╗  ██████╗██╗  ██╗', cls: 'success', delay: 50 },
  { text: '  ██║  ██║██╔══██╗██╔════╝██║ ██╔╝', cls: 'success', delay: 50 },
  { text: '  ███████║███████║██║     █████╔╝ ', cls: 'success', delay: 50 },
  { text: '  ██╔══██║██╔══██║██║     ██╔═██╗ ', cls: 'success', delay: 50 },
  { text: '  ██║  ██║██║  ██║╚██████╗██║  ██╗', cls: 'success', delay: 50 },
  { text: '  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝', cls: 'success', delay: 50 },
  { text: '> ', cls: '', delay: 200 },
  { text: '> We are Anony...', cls: 'cyan', delay: 800 },
  { text: '> We do not forget... to prank.', cls: 'cyan', delay: 600 },
  { text: '> Expect us.', cls: 'cyan', delay: 400 },
  { text: '> ', cls: '', delay: 300 },
  { text: '> SYSTEM READY. Welcome, Agent.', cls: 'success', delay: 200 },
];

async function runBootSequence() {
  const container = $('bootLines');
  const maskReveal = $('bootMask');

  // Inject mask into boot reveal
  maskReveal.innerHTML = MASKS[0].svg(); // classic mask

  for (const line of BOOT_LINES) {
    const div = document.createElement('div');
    div.className = `boot-line ${line.cls}`;
    div.textContent = line.text;
    container.appendChild(div);
    await sleep(line.delay);
    div.classList.add('visible');
    container.scrollTop = container.scrollHeight;
  }

  // Show mask
  await sleep(300);
  maskReveal.classList.add('visible');
  await sleep(1800);

  // Fade out boot
  const overlay = $('bootOverlay');
  overlay.style.transition = 'opacity .8s ease';
  overlay.style.opacity = '0';
  await sleep(800);
  overlay.style.display = 'none';

  // Show app
  $('app').style.display = 'block';
  $('app').style.animation = 'fadeIn .6s ease';

  initApp();
}

/* ═══════════════════════════════════════════════════════════════
   SLOGAN DISPLAY MODES
   ═══════════════════════════════════════════════════════════════ */

let currentMode = 'rotate';
let rotateInterval = null;
let currentSloganIdx = 0;

// MODE 1: ROTATE — typewriter auto-cycle
async function typeSlogan(text) {
  const display = $('sloganDisplay');
  display.innerHTML = '';

  const prefix = '> ';
  let fullText = prefix + text;

  for (let i = 0; i <= fullText.length; i++) {
    if (currentMode !== 'rotate') return;
    display.innerHTML = fullText.slice(0, i) + '<span class="cursor"></span>';
    await sleep(25 + Math.random() * 20);
  }

  // Hold for a few seconds then move on
  await sleep(4000);
  if (currentMode !== 'rotate') return;

  // Scramble out
  await scrambleOut(display, fullText);
}

async function scrambleOut(display, text) {
  const chars = '!@#$%^&*()_+-=[]{}|;:<>?/~`01';
  let arr = text.split('');
  for (let round = 0; round < 8; round++) {
    if (currentMode !== 'rotate') return;
    for (let i = 0; i < arr.length; i++) {
      if (Math.random() > 0.5) arr[i] = chars[Math.floor(Math.random() * chars.length)];
    }
    display.innerHTML = arr.join('') + '<span class="cursor"></span>';
    await sleep(40);
  }
  display.innerHTML = '<span class="cursor"></span>';
}

function startRotation() {
  stopAllModes();
  currentMode = 'rotate';
  $('sloganWall').style.display = 'none';
  $('sloganDisplay').parentElement.style.display = '';

  async function cycle() {
    while (currentMode === 'rotate') {
      await typeSlogan(SLOGANS[currentSloganIdx].prank);
      currentSloganIdx = (currentSloganIdx + 1) % SLOGANS.length;
      await sleep(300);
    }
  }
  cycle();
}

// MODE 2: GLITCH SHUFFLE — click to scramble & reveal
function startShuffle() {
  stopAllModes();
  currentMode = 'shuffle';
  $('sloganWall').style.display = 'none';
  $('sloganDisplay').parentElement.style.display = '';

  const display = $('sloganDisplay');
  display.innerHTML = `<span style="color:var(--muted)">> [CLICK ANYWHERE TO DECRYPT SLOGAN]</span><span class="cursor"></span>`;

  document.addEventListener('click', shuffleClick);
}

async function shuffleClick(e) {
  if (currentMode !== 'shuffle') {
    document.removeEventListener('click', shuffleClick);
    return;
  }
  // Don't trigger on mode buttons
  if (e.target.classList.contains('mode-btn') || e.target.closest('.mask-card')) return;

  const display = $('sloganDisplay');
  const slogan = SLOGANS[Math.floor(Math.random() * SLOGANS.length)];
  const chars = '!@#$%^&*()_+-=[]{}|;:<>?/~`01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const target = '> ' + slogan.prank;

  // Scramble phase
  for (let round = 0; round < 12; round++) {
    let scrambled = '';
    for (let i = 0; i < target.length; i++) {
      if (round > 8 && i < (round - 8) * (target.length / 4)) {
        scrambled += target[i];
      } else if (target[i] === ' ') {
        scrambled += ' ';
      } else {
        scrambled += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    display.innerHTML = scrambled + '<span class="cursor"></span>';
    await sleep(50);
  }

  // Reveal character by character quickly
  for (let i = 0; i <= target.length; i++) {
    display.innerHTML = target.slice(0, i) + '<span class="cursor"></span>';
    await sleep(8);
  }
}

// MODE 3: WALL — all slogans visible
function startWall() {
  stopAllModes();
  currentMode = 'wall';
  $('sloganDisplay').parentElement.style.display = 'none';

  const wall = $('sloganWall');
  wall.style.display = 'block';
  wall.innerHTML = '';

  SLOGANS.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'wall-line';
    div.style.animationDelay = `${i * 0.06}s`;
    div.innerHTML = `<span class="wall-index">[${String(i).padStart(2,'0')}]</span>${s.prank}`;
    wall.appendChild(div);
  });
}

function stopAllModes() {
  currentMode = null;
  document.removeEventListener('click', shuffleClick);
  if (rotateInterval) { clearInterval(rotateInterval); rotateInterval = null; }
}

/* ═══════════════════════════════════════════════════════════════
   SIDEBAR
   ═══════════════════════════════════════════════════════════════ */

function setupSidebar() {
  const toggle = $('sidebarToggle');
  const close = $('sidebarClose');
  const sidebar = $('sidebar');
  const overlay = $('sidebarOverlay');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  if (toggle) toggle.addEventListener('click', openSidebar);
  if (close) close.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  // ESC key closes sidebar
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSidebar();
  });
}

/* ═══════════════════════════════════════════════════════════════
   MASK GRID
   ═══════════════════════════════════════════════════════════════ */

let selectedMask = null;

function renderMaskGrid() {
  const grid = $('maskGrid');
  grid.innerHTML = '';

  MASKS.forEach((mask, i) => {
    const card = document.createElement('div');
    card.className = 'mask-card';
    card.dataset.idx = i;
    card.innerHTML = `
      ${mask.svg()}
      <div class="mask-name">${mask.name}</div>
    `;
    card.addEventListener('click', () => selectMask(i));
    grid.appendChild(card);
  });
}

function selectMask(idx) {
  const cards = document.querySelectorAll('.mask-card');
  cards.forEach(c => c.classList.remove('selected'));
  cards[idx].classList.add('selected');

  selectedMask = MASKS[idx];

  // Update main mask
  $('mainMask').innerHTML = selectedMask.svg();

  // Update watermark
  $('watermarkMask').innerHTML = selectedMask.svg();

  // Update footer mask
  $('footerMask').innerHTML = selectedMask.svg();

  // Update info
  const info = $('maskInfoText');
  info.innerHTML = `Identity selected: <span style="color:var(--green)">${selectedMask.name}</span> — Mask deployed across all systems.`;

  // Save to localStorage
  try { localStorage.setItem('hacktivist_mask', selectedMask.id); } catch(e) {}
}

function loadSavedMask() {
  try {
    const savedId = localStorage.getItem('hacktivist_mask');
    if (savedId) {
      const idx = MASKS.findIndex(m => m.id === savedId);
      if (idx !== -1) {
        selectMask(idx);
        return;
      }
    }
  } catch(e) {}
  // Default: no selection, show classic
  $('mainMask').innerHTML = MASKS[0].svg();
  $('watermarkMask').innerHTML = MASKS[0].svg();
  $('footerMask').innerHTML = MASKS[0].svg();
}

/* ═══════════════════════════════════════════════════════════════
   SLOGAN ARCHIVE
   ═══════════════════════════════════════════════════════════════ */

function renderSloganArchive() {
  const container = $('sloganArchive');
  container.innerHTML = '';

  SLOGANS.forEach((s, i) => {
    const entry = document.createElement('div');
    entry.className = 'archive-entry';
    entry.innerHTML = `
      <div class="archive-prank">[${String(i).padStart(2,'0')}] ${s.prank}</div>
      <div class="archive-original">Original: "${s.original}"</div>
      <div class="archive-source">— ${s.source}</div>
    `;
    container.appendChild(entry);
  });
}

/* ═══════════════════════════════════════════════════════════════
   MODE BUTTONS
   ═══════════════════════════════════════════════════════════════ */

function setupModeButtons() {
  const btns = document.querySelectorAll('.mode-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      if (mode === 'rotate') startRotation();
      else if (mode === 'shuffle') startShuffle();
      else if (mode === 'wall') startWall();
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   SLOGAN FORGE
   ═══════════════════════════════════════════════════════════════ */

let currentForgeSlogan = null;

function setupForge() {
  const hackBtn = $('forgeHack');
  const freeBtn = $('forgeFree');
  const existing = $('forgeExisting');
  const input = $('forgeInput');
  const preview = $('forgePreview');
  const randomBtn = $('forgeRandomBtn');
  const deployBtn = $('forgeDeploy');
  const copyBtn = $('forgeCopy');

  // Load random slogan on start
  loadRandomForgeSlogan();

  // Mode toggle
  hackBtn.addEventListener('click', () => {
    hackBtn.classList.add('active'); freeBtn.classList.remove('active');
    existing.style.display = '';
    input.placeholder = 'type your hack';
    loadRandomForgeSlogan();
  });
  freeBtn.addEventListener('click', () => {
    freeBtn.classList.add('active'); hackBtn.classList.remove('active');
    existing.style.display = 'none';
    input.placeholder = 'type anything...';
    currentForgeSlogan = null;
    preview.textContent = '';
  });

  // Random button
  randomBtn.addEventListener('click', loadRandomForgeSlogan);

  // Live preview
  input.addEventListener('input', () => {
    const val = input.value.trim();
    if (val) {
      preview.textContent = `> "We are Anony... ${val}"`;
    } else {
      preview.textContent = '';
    }
  });

  // Deploy — set as current slogan display
  deployBtn.addEventListener('click', () => {
    const val = input.value.trim();
    if (!val) return;
    const fullSlogan = `We are Anony... ${val}`;
    // Stop current mode and show the custom slogan
    stopAllModes();
    currentMode = 'custom';
    $('sloganWall').style.display = 'none';
    const display = $('sloganDisplay');
    display.innerHTML = `> ${fullSlogan}<span class="cursor"></span>`;
  });

  // Copy
  copyBtn.addEventListener('click', async () => {
    const val = input.value.trim();
    if (!val) return;
    const fullSlogan = `"We are Anony... ${val}"`;
    try {
      await navigator.clipboard.writeText(fullSlogan);
      copyBtn.textContent = '✓ COPIED';
      setTimeout(() => copyBtn.textContent = '📋 COPY', 1500);
    } catch(e) {}
  });
}

function loadRandomForgeSlogan() {
  const s = SLOGANS[Math.floor(Math.random() * SLOGANS.length)];
  currentForgeSlogan = s;
  const origEl = $('forgeOriginal');
  if (origEl) {
    origEl.innerHTML = `<span class="forge-orig-label">ORIGINAL:</span>"${s.original}"<br><span style="font-size:9px;color:var(--muted)">— ${s.source}</span>`;
  }
}

/* ═══════════════════════════════════════════════════════════════
   THEME TOGGLE
   ═══════════════════════════════════════════════════════════════ */

function setupTheme() {
  const themeBtns = document.querySelectorAll('[data-theme]');

  // Load saved theme
  try {
    const saved = localStorage.getItem('hacktivist_theme');
    if (saved) {
      document.documentElement.dataset.theme = saved;
      themeBtns.forEach(b => {
        b.classList.toggle('active', b.dataset.theme === saved);
      });
    }
  } catch(e) {}

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      document.documentElement.dataset.theme = theme;
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      try { localStorage.setItem('hacktivist_theme', theme); } catch(e) {}
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   i18n — INTERNATIONALIZATION (EN / FR / AR)
   ═══════════════════════════════════════════════════════════════ */

let currentLang = 'en';

const I18N = {
  en: {
    connected:'CONNECTED', config:'CONFIG', sys_config:'SYS_CONFIG',
    terminal_tag:'root@hacktivist-kids:~$',
    ops_briefing:'OPS_BRIEFING', ops_tag:'// classified prank missions',
    exploit_lab:'EXPLOIT_LAB', exploit_tag:'// deploy screen exploits',
    payload_roulette:'PAYLOAD_ROULETTE', payload_tag:'// encrypted prank spinner',
    signal_jam:'SIGNAL_JAM', signal_tag:'// distraction soundboard',
    crypto_room:'CRYPTO_ROOM', crypto_tag:'// encode & decode messages',
    footer_text:'We are Anony... we never log off.',
    generate_mission:'> GENERATE_MISSION', spin_roulette:'> SPIN_ROULETTE',
    copy_encoded:'> COPY_ENCODED', slogan_mode:'> SLOGAN_MODE',
    mask_vault:'> MASK_VAULT', slogan_archive:'> SLOGAN_ARCHIVE',
    agent_profile:'> AGENT_PROFILE', select_identity:'// select identity',
    classified:'// classified', your_identity:'// your identity',
    codename:'CODENAME:', rank_label:'RANK:', enter_codename:'Enter codename',
    missions:'Missions', exploits:'Exploits', encrypts:'Encrypts',
    reset_agent:'> RESET_AGENT', reset_confirm:'Reset all agent data? XP, rank, and stats will be lost.',
    no_mask:'No mask selected.', identity_selected:'Identity selected:',
    mask_deployed:'— Mask deployed across all systems.',
    mission_status:'MISSION STATUS: STANDBY',
    spin_label:'SPIN TO DECRYPT A PRANK', decrypting:'DECRYPTING...',
    sounds_info:'Sounds use Web Audio API — no files needed',
    secret_msg:'Type a secret message...',
    click_decrypt:'> [CLICK ANYWHERE TO DECRYPT SLOGAN]',
    press_esc:'PRESS ESC OR TAP TO EXIT',
    // Password screen
    pw_line1:'We are Anony...', pw_line2:'We have been expecting you.',
    pw_line3:'This system is protected.', pw_line4:'Prove you are one of us.',
    pw_hint:'> hint: who are we? (5 letters, lowercase)',
    pw_hint2:'> hint: we are a _ _ _ _ _ (starts with "a", rhymes with "baloney")',
    pw_granted:'ACCESS GRANTED.', pw_welcome:'Welcome, Agent.',
    pw_closing:'We are Anony... and so are you.',
    pw_denied:['ACCESS DENIED. You are not one of us... yet.','INCORRECT. The mask sees through your deception.','WRONG PASSKEY. Anonymous does not forget, but you seem to.','DENIED. Try harder, wannabe agent.','ERROR. The system laughs at your attempt.'],
    // Forge
    slogan_forge:'> SLOGAN_FORGE', hack_slogan:'// hack a slogan',
    hack_existing:'HACK EXISTING', free_hack:'FREE HACK',
    random_slogan:'🔄 RANDOM SLOGAN', deploy:'⚡ DEPLOY', copy:'📋 COPY',
    type_hack:'type your hack', type_anything:'type anything...',
    forge_prefix:'We are Anony...',
    // Theme & Language
    theme:'> THEME', language:'> LANGUAGE',
  },
  fr: {
    connected:'CONNECTÉ', config:'CONFIG', sys_config:'CONFIG_SYS',
    terminal_tag:'root@hacktivist-kids:~$',
    ops_briefing:'BRIEFING_OPS', ops_tag:'// missions de farces classifiées',
    exploit_lab:'LABO_EXPLOIT', exploit_tag:'// déployer des exploits écran',
    payload_roulette:'ROULETTE_PAYLOAD', payload_tag:'// roulette de farces cryptées',
    signal_jam:'BROUILLAGE_SIGNAL', signal_tag:'// tableau de sons de distraction',
    crypto_room:'SALLE_CRYPTO', crypto_tag:'// encoder & décoder des messages',
    footer_text:'Nous sommes Anony... on ne se déconnecte jamais.',
    generate_mission:'> GÉNÉRER_MISSION', spin_roulette:'> TOURNER_ROULETTE',
    copy_encoded:'> COPIER_ENCODÉ', slogan_mode:'> MODE_SLOGAN',
    mask_vault:'> COFFRE_MASQUES', slogan_archive:'> ARCHIVE_SLOGANS',
    agent_profile:'> PROFIL_AGENT', select_identity:'// choisir identité',
    classified:'// classifié', your_identity:'// ton identité',
    codename:'NOM DE CODE:', rank_label:'RANG:', enter_codename:'Entrer nom de code',
    missions:'Missions', exploits:'Exploits', encrypts:'Chiffrements',
    reset_agent:'> RÉINITIALISER', reset_confirm:'Réinitialiser toutes les données agent ? XP, rang et stats seront perdus.',
    no_mask:'Aucun masque sélectionné.', identity_selected:'Identité choisie:',
    mask_deployed:'— Masque déployé sur tous les systèmes.',
    mission_status:'STATUT MISSION: EN ATTENTE',
    spin_label:'TOURNER POUR DÉCRYPTER UNE FARCE', decrypting:'DÉCRYPTAGE...',
    sounds_info:'Sons via Web Audio API — aucun fichier requis',
    secret_msg:'Tape un message secret...',
    click_decrypt:'> [CLIQUER N\'IMPORTE OÙ POUR DÉCRYPTER]',
    press_esc:'APPUYER SUR ÉCHAP OU TOUCHER POUR QUITTER',
    pw_line1:'Nous sommes Anony...', pw_line2:'Nous vous attendions.',
    pw_line3:'Ce système est protégé.', pw_line4:'Prouvez que vous êtes des nôtres.',
    pw_hint:'> indice: qui sommes-nous ? (5 lettres, minuscules)',
    pw_hint2:'> indice: nous sommes a _ _ _ _ (commence par "a", rime avec "baloney")',
    pw_granted:'ACCÈS ACCORDÉ.', pw_welcome:'Bienvenue, Agent.',
    pw_closing:'Nous sommes Anony... et toi aussi.',
    pw_denied:['ACCÈS REFUSÉ. Tu n\'es pas des nôtres... pas encore.','INCORRECT. Le masque voit à travers ta tromperie.','MAUVAIS MOT DE PASSE. Anonymous n\'oublie pas, mais toi si.','REFUSÉ. Essaie encore, apprenti agent.','ERREUR. Le système rit de ta tentative.'],
    slogan_forge:'> FORGE_SLOGANS', hack_slogan:'// pirater un slogan',
    hack_existing:'PIRATER EXISTANT', free_hack:'LIBRE',
    random_slogan:'🔄 SLOGAN ALÉATOIRE', deploy:'⚡ DÉPLOYER', copy:'📋 COPIER',
    type_hack:'tape ton hack', type_anything:'tape ce que tu veux...',
    forge_prefix:'Nous sommes Anony...',
    theme:'> THÈME', language:'> LANGUE',
  },
  ar: {
    connected:'متصل', config:'إعداد', sys_config:'إعداد_النظام',
    terminal_tag:'$~:root@hacktivist-kids',
    ops_briefing:'إحاطة_العمليات', ops_tag:'// مهمات مزح سرية',
    exploit_lab:'مختبر_الاستغلال', exploit_tag:'// نشر استغلالات الشاشة',
    payload_roulette:'روليت_الحمولة', payload_tag:'// دوّارة مزح مشفرة',
    signal_jam:'تشويش_الإشارة', signal_tag:'// لوحة أصوات تشتيت',
    crypto_room:'غرفة_التشفير', crypto_tag:'// تشفير وفك تشفير الرسائل',
    footer_text:'نحن أنوني... لا نقطع الاتصال أبداً.',
    generate_mission:'> توليد_مهمة', spin_roulette:'> تدوير_الروليت',
    copy_encoded:'> نسخ_المشفر', slogan_mode:'> وضع_الشعار',
    mask_vault:'> خزنة_الأقنعة', slogan_archive:'> أرشيف_الشعارات',
    agent_profile:'> ملف_العميل', select_identity:'// اختر هويتك',
    classified:'// سري', your_identity:'// هويتك',
    codename:'الاسم الحركي:', rank_label:'الرتبة:', enter_codename:'أدخل الاسم الحركي',
    missions:'مهمات', exploits:'استغلالات', encrypts:'تشفيرات',
    reset_agent:'> إعادة_ضبط', reset_confirm:'إعادة ضبط كل بيانات العميل؟ سيتم فقدان XP والرتبة والإحصائيات.',
    no_mask:'لم يتم اختيار قناع.', identity_selected:'تم اختيار الهوية:',
    mask_deployed:'— تم نشر القناع على جميع الأنظمة.',
    mission_status:'حالة المهمة: استعداد',
    spin_label:'أدِر لفك تشفير مزحة', decrypting:'جاري فك التشفير...',
    sounds_info:'الأصوات عبر Web Audio API — لا حاجة لملفات',
    secret_msg:'اكتب رسالة سرية...',
    click_decrypt:'> [انقر في أي مكان لفك تشفير الشعار]',
    press_esc:'اضغط ESC أو انقر للخروج',
    pw_line1:'نحن أنوني...', pw_line2:'كنا في انتظارك.',
    pw_line3:'هذا النظام محمي.', pw_line4:'أثبت أنك واحد منا.',
    pw_hint:'> تلميح: من نحن؟ (5 أحرف، حروف صغيرة)',
    pw_hint2:'> تلميح: نحن a _ _ _ _ (تبدأ بـ "a")',
    pw_granted:'تم منح الوصول.', pw_welcome:'مرحباً، عميل.',
    pw_closing:'نحن أنوني... وأنت أيضاً.',
    pw_denied:['تم رفض الوصول. لست واحداً منا... بعد.','خطأ. القناع يرى من خلال خداعك.','كلمة مرور خاطئة. أنونيموس لا ينسى، لكنك تبدو كذلك.','مرفوض. حاول أكثر، أيها المتدرب.','خطأ. النظام يضحك على محاولتك.'],
    slogan_forge:'> مصنع_الشعارات', hack_slogan:'// اخترق شعاراً',
    hack_existing:'اختراق موجود', free_hack:'حر',
    random_slogan:'🔄 شعار عشوائي', deploy:'⚡ نشر', copy:'📋 نسخ',
    type_hack:'اكتب اختراقك', type_anything:'اكتب أي شيء...',
    forge_prefix:'نحن أنوني...',
    theme:'> السمة', language:'> اللغة',
  }
};

// Slogan translations
const SLOGAN_TRANSLATIONS = {
  fr: [
    'Nous sommes Anony. Nous sommes Légion. Nous ne pardonnons pas. Nous n\'oublions pas... de faire des farces. Attendez-vous à nous.',
    'Hack Différemment.', 'Juste Hacke.', 'Je hacke, donc je fais des farces.',
    'Veni, Vidi, Hacki.', '404: Sérieux Non Trouvé.', 'L\'exploit est là-bas.',
    'La Connaissance c\'est l\'Accès.', 'Bouger Vite et Farcer les Choses.',
    'Ne Sois Pas Ennuyeux.', 'Que le Code Source soit avec toi.',
    'Avec un grand accès viennent de grandes farces.',
    'Un petit hack pour un enfant, une farce géante pour l\'humanité.',
    'En Code Nous Croyons.', 'Farcer ou ne pas farcer... toujours farcer.',
    'Pourquoi si non-farcable ?', 'Je suis celui qui farce.',
    'Je reviendrai farcer.', 'EU-HACK-A !',
    'La seule chose à craindre... c\'est pas de farces.',
    'Donnez-moi l\'accès root ou donnez-moi l\'ennui.',
    'Le nom est Farce. Agent Farce.',
    'Je suis la rigolade. Je suis la farce.',
    'Nous sommes Anony... attendez-vous à des farces.',
    'ACCÈS ACCORDÉ... au maximum de fun.',
    'sudo farce --all --no-mercy',
    'Décryptage... fun.exe chargé.',
    'Nous sommes Anony... la résistance est futile.',
    'Hacke la planète !',
    'Il n\'y a pas de cuillère... seulement des farces.',
  ],
  ar: [
    'نحن أنوني. نحن فيلق. لا نسامح. لا ننسى... أن نمزح. توقعونا.',
    'اخترق بشكل مختلف.', 'فقط اخترق.', 'أخترق، إذن أمزح.',
    'أتيت، رأيت، اخترقت.', '404: الجدية غير موجودة.', 'الاستغلال هناك.',
    'المعرفة هي الوصول.', 'تحرك بسرعة وامزح بالأشياء.',
    'لا تكن مملاً.', 'ليكن الكود المصدري معك.',
    'مع الوصول الكبير تأتي مقالب عظيمة.',
    'اختراق صغير لطفل، مقلب عملاق للبشرية.',
    'بالكود نؤمن.', 'أن تمزح أو لا تمزح... امزح دائماً.',
    'لماذا أنت غير قابل للمزح؟', 'أنا من يمزح.',
    'سأعود للمزح.', 'يو-هاك-ا!',
    'الشيء الوحيد الذي نخافه... هو عدم وجود مقالب.',
    'أعطني صلاحية الروت أو أعطني الملل.',
    'الاسم مقلب. العميل مقلب.',
    'أنا المرح. أنا المقلب.',
    'نحن أنوني... توقعوا المقالب.',
    'تم منح الوصول... للمتعة القصوى.',
    'sudo مقلب --الكل --بلا-رحمة',
    'فك التشفير... fun.exe تم تحميله.',
    'نحن أنوني... المقاومة عديمة الجدوى.',
    'اخترق الكوكب!',
    'لا توجد ملعقة... فقط مقالب.',
  ]
};

function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key; }

function applyLanguage(lang) {
  currentLang = lang;
  const isRtl = lang === 'ar';
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.textContent = val;
  });

  // Update sidebar labels
  const labels = {
    'SLOGAN_MODE': t('slogan_mode'),
    'MASK_VAULT': t('mask_vault'),
    'SLOGAN_ARCHIVE': t('slogan_archive'),
    'AGENT_PROFILE': t('agent_profile'),
    'SLOGAN_FORGE': t('slogan_forge'),
    'THEME': t('theme'),
    'LANGUAGE': t('language'),
  };

  document.querySelectorAll('.sidebar-label').forEach(el => {
    const text = el.textContent.replace(/^>\s*/, '').split(' //')[0].split(' <')[0].trim();
    if (text === 'SLOGAN_MODE' || text.includes('SLOGAN_MODE') || text.includes('MODE_SLOGAN') || text.includes('وضع')) {
      el.innerHTML = t('slogan_mode');
    }
  });

  // Update buttons text
  const genBtn = $('opsGenerate');
  if (genBtn) genBtn.textContent = t('generate_mission');
  const spinBtn = $('payloadSpin');
  if (spinBtn) spinBtn.textContent = t('spin_roulette');
  const cryptoCopy = $('cryptoCopy');
  if (cryptoCopy) cryptoCopy.textContent = t('copy_encoded');

  // Update placeholders
  const cryptoInput = $('cryptoInput');
  if (cryptoInput) cryptoInput.placeholder = t('secret_msg');
  const agentName = $('agentCodename');
  if (agentName) agentName.placeholder = t('enter_codename');

  // Save
  try { localStorage.setItem('hacktivist_lang', lang); } catch(e) {}
}

function setupLanguage() {
  const langBtns = document.querySelectorAll('[data-lang]');

  // Load saved
  try {
    const saved = localStorage.getItem('hacktivist_lang');
    if (saved && I18N[saved]) {
      langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === saved));
      applyLanguage(saved);
    }
  } catch(e) {}

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyLanguage(btn.dataset.lang);
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   AGENT PROFILE — Gamification system
   ═══════════════════════════════════════════════════════════════ */

const RANKS = [
  { name:'RECRUIT', minXp:0 },
  { name:'OPERATIVE', minXp:100 },
  { name:'AGENT', minXp:300 },
  { name:'SPECIALIST', minXp:600 },
  { name:'ELITE', minXp:1000 },
  { name:'SHADOW', minXp:1500 },
  { name:'ANONY', minXp:2500 },
];

let agentData = { codename:'', xp:0, missions:0, exploits:0, encrypts:0 };

function loadAgent() {
  try {
    const saved = localStorage.getItem('hacktivist_agent');
    if (saved) agentData = JSON.parse(saved);
  } catch(e) {}
}

function saveAgent() {
  try { localStorage.setItem('hacktivist_agent', JSON.stringify(agentData)); } catch(e) {}
}

function addXp(amount, type) {
  agentData.xp += amount;
  if (type === 'mission') agentData.missions++;
  if (type === 'exploit') agentData.exploits++;
  if (type === 'encrypt') agentData.encrypts++;
  saveAgent();
  updateAgentUI();
}

function getRank() {
  let rank = RANKS[0];
  for (const r of RANKS) {
    if (agentData.xp >= r.minXp) rank = r;
  }
  return rank;
}

function getNextRank() {
  const current = getRank();
  const idx = RANKS.indexOf(current);
  return idx < RANKS.length - 1 ? RANKS[idx + 1] : null;
}

function updateAgentUI() {
  const rank = getRank();
  const next = getNextRank();

  $('agentRank').textContent = `RANK: ${rank.name}`;

  const xpForCurrent = rank.minXp;
  const xpForNext = next ? next.minXp : rank.minXp;
  const progress = next ? ((agentData.xp - xpForCurrent) / (xpForNext - xpForCurrent)) * 100 : 100;
  $('agentXpFill').style.width = Math.min(progress, 100) + '%';
  $('agentXpText').textContent = next ? `${agentData.xp} / ${xpForNext} XP` : `${agentData.xp} XP — MAX RANK`;

  $('agentStats').innerHTML = `<span>Missions: ${agentData.missions}</span><span>Exploits: ${agentData.exploits}</span><span>Encrypts: ${agentData.encrypts}</span>`;

  // Update mask in profile
  if (selectedMask) {
    $('agentMaskDisplay').innerHTML = selectedMask.svg();
  } else {
    $('agentMaskDisplay').innerHTML = MASKS[0].svg();
  }
}

function setupAgent() {
  loadAgent();

  const nameInput = $('agentCodename');
  nameInput.value = agentData.codename || '';
  nameInput.addEventListener('input', () => {
    agentData.codename = nameInput.value.trim();
    saveAgent();
  });

  $('agentReset').addEventListener('click', () => {
    if (confirm('Reset all agent data? XP, rank, and stats will be lost.')) {
      agentData = { codename:'', xp:0, missions:0, exploits:0, encrypts:0 };
      nameInput.value = '';
      saveAgent();
      updateAgentUI();
    }
  });

  updateAgentUI();
}

// Hook XP into existing actions
function hookXpGains() {
  // Mission generate = +10 XP
  const origGen = $('opsGenerate');
  if (origGen) {
    const origClick = origGen.onclick;
    origGen.addEventListener('click', () => addXp(10, 'mission'));
  }

  // Exploit launch = +15 XP
  const exploitCards = document.querySelectorAll('.exploit-card');
  exploitCards.forEach(card => {
    card.addEventListener('click', () => addXp(15, 'exploit'));
  });

  // Payload spin = +5 XP
  const spinBtn = $('payloadSpin');
  if (spinBtn) spinBtn.addEventListener('click', () => addXp(5, 'mission'));

  // Crypto encode = +5 XP (debounced)
  let cryptoXpTimer = null;
  const cryptoInput = $('cryptoInput');
  if (cryptoInput) {
    cryptoInput.addEventListener('input', () => {
      if (cryptoXpTimer) clearTimeout(cryptoXpTimer);
      cryptoXpTimer = setTimeout(() => {
        if (cryptoInput.value.trim().length > 3) addXp(5, 'encrypt');
      }, 2000);
    });
  }

  // Signal play = +3 XP
  const signalBtns = document.querySelectorAll('.signal-btn');
  signalBtns.forEach(btn => {
    btn.addEventListener('click', () => addXp(3, 'exploit'));
  });
}

/* ═══════════════════════════════════════════════════════════════
   PAYLOAD ROULETTE — Encrypted prank spinner
   ═══════════════════════════════════════════════════════════════ */

const PAYLOADS = [
  { text:'Tell your friend their shoelace is untied (even if wearing sandals)', type:'SOCIAL_EXPLOIT' },
  { text:'Speak only in a robot voice for 10 minutes', type:'VOICE_MOD' },
  { text:'Hide a sticky note saying "I\'m watching you — Anony" somewhere public', type:'PHYSICAL_PAYLOAD' },
  { text:'Change your friend\'s contact name on your phone to "Agent Anonymous"', type:'IDENTITY_SWAP' },
  { text:'Walk up to someone and say "The eagle has landed" then walk away', type:'SIGNAL_DROP' },
  { text:'Leave a mysterious note in binary code on someone\'s desk', type:'CRYPTO_DROP' },
  { text:'Set an alarm on a family member\'s phone for 3:33 AM labeled "We are Anony"', type:'TIME_BOMB' },
  { text:'Talk backwards for the next 5 sentences', type:'REVERSE_PROTOCOL' },
  { text:'Pretend your phone is hacked and show the BSOD exploit to a friend', type:'SCREEN_EXPLOIT' },
  { text:'Send a message entirely in Morse code to a friend', type:'CRYPTO_MSG' },
  { text:'Wear sunglasses indoors and tell people you\'re protecting your identity', type:'IDENTITY_MASK' },
  { text:'Replace a family photo with a printout of the Anonymous mask for 1 hour', type:'PHYSICAL_SWAP' },
  { text:'Answer every question with "That\'s classified" for 15 minutes', type:'INFO_LOCKDOWN' },
  { text:'Leave a USB drive labeled "TOP SECRET" in a visible spot (with a joke file inside)', type:'BAIT_DROP' },
  { text:'Draw an Anonymous mask on a sticky note and hide it in someone\'s lunch', type:'STEALTH_TAG' },
];

function setupPayload() {
  const toggle = $('payloadToggle');
  const body = $('payloadBody');
  const arrow = $('payloadArrow');
  const spinBtn = $('payloadSpin');

  toggle.addEventListener('click', () => {
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    arrow.classList.toggle('open', !open);
  });

  spinBtn.addEventListener('click', spinPayload);
}

async function spinPayload() {
  const display = $('payloadDisplay');
  const p = PAYLOADS[Math.floor(Math.random() * PAYLOADS.length)];
  const chars = '!@#$%^&*()_+-=[]{}|;:<>?01ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Scramble animation
  for (let round = 0; round < 15; round++) {
    let scrambled = '';
    for (let i = 0; i < p.text.length; i++) {
      scrambled += p.text[i] === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
    }
    display.innerHTML = `<div class="payload-result"><div class="payload-encrypted">${scrambled}</div><div class="payload-label">DECRYPTING...</div></div>`;
    await sleep(80);
  }

  // Reveal
  display.innerHTML = `<div class="payload-result">
    <div class="payload-decrypted">${p.text}</div>
    <div class="payload-type">[${p.type}]</div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════
   SIGNAL JAM — Web Audio API soundboard
   ═══════════════════════════════════════════════════════════════ */

const SIGNALS = [
  { id:'alarm', icon:'🚨', name:'ALARM', freq:800, type:'square', dur:2 },
  { id:'sonar', icon:'📡', name:'SONAR', freq:400, type:'sine', dur:1.5 },
  { id:'laser', icon:'⚡', name:'LASER', freq:2000, type:'sawtooth', dur:0.5 },
  { id:'drone', icon:'🐝', name:'DRONE', freq:150, type:'sawtooth', dur:3 },
  { id:'beep', icon:'📟', name:'BEEP', freq:1000, type:'square', dur:0.3 },
  { id:'ghost', icon:'👻', name:'GHOST', freq:200, type:'sine', dur:2.5 },
  { id:'static', icon:'📺', name:'STATIC', freq:0, type:'noise', dur:2 },
  { id:'siren', icon:'🚔', name:'SIREN', freq:600, type:'siren', dur:3 },
  { id:'ufo', icon:'🛸', name:'UFO', freq:300, type:'triangle', dur:2 },
];

let audioCtx = null;

function setupSignals() {
  const toggle = $('signalToggle');
  const body = $('signalBody');
  const arrow = $('signalArrow');
  const grid = $('signalGrid');

  toggle.addEventListener('click', () => {
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    arrow.classList.toggle('open', !open);
  });

  grid.innerHTML = '';
  SIGNALS.forEach(sig => {
    const btn = document.createElement('div');
    btn.className = 'signal-btn';
    btn.innerHTML = `<div class="signal-icon">${sig.icon}</div><div class="signal-name">${sig.name}</div>`;
    btn.addEventListener('click', () => playSignal(sig, btn));
    grid.appendChild(btn);
  });
}

function playSignal(sig, btn) {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  btn.classList.add('playing');
  setTimeout(() => btn.classList.remove('playing'), sig.dur * 1000);

  if (sig.type === 'noise') {
    // White noise
    const bufSize = audioCtx.sampleRate * sig.dur;
    const buf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
    const src = audioCtx.createBufferSource();
    src.buffer = buf;
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + sig.dur);
    src.connect(gain).connect(audioCtx.destination);
    src.start();
    return;
  }

  if (sig.type === 'siren') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(800, audioCtx.currentTime + sig.dur/2);
    osc.frequency.linearRampToValueAtTime(400, audioCtx.currentTime + sig.dur);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + sig.dur);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + sig.dur);
    return;
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = sig.type;
  osc.frequency.setValueAtTime(sig.freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + sig.dur);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + sig.dur);
}

/* ═══════════════════════════════════════════════════════════════
   CRYPTO ROOM — Encode/decode messages
   ═══════════════════════════════════════════════════════════════ */

let currentCipher = 'caesar';

const MORSE_MAP = {'A':'.-','B':'-...','C':'-.-.','D':'-..','E':'.','F':'..-.','G':'--.','H':'....','I':'..','J':'.---','K':'-.-','L':'.-..','M':'--','N':'-.','O':'---','P':'.--.','Q':'--.-','R':'.-.','S':'...','T':'-','U':'..-','V':'...-','W':'.--','X':'-..-','Y':'-.--','Z':'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.','?':'..--..','!':'-.-.--','.':'.-.-.-',',':'--..--',' ':'/'};

function setupCrypto() {
  const toggle = $('cryptoToggle');
  const body = $('cryptoBody');
  const arrow = $('cryptoArrow');
  const input = $('cryptoInput');
  const copyBtn = $('cryptoCopy');
  const cipherBtns = document.querySelectorAll('[data-cipher]');

  toggle.addEventListener('click', () => {
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    arrow.classList.toggle('open', !open);
  });

  cipherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cipherBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCipher = btn.dataset.cipher;
      encodeMessage();
    });
  });

  input.addEventListener('input', encodeMessage);

  copyBtn.addEventListener('click', async () => {
    const output = $('cryptoOutput');
    const text = output.innerText.replace('ENCODED:', '').trim();
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = '> COPIED ✓';
      setTimeout(() => copyBtn.textContent = '> COPY_ENCODED', 1500);
    } catch(e) {}
  });
}

function encodeMessage() {
  const input = $('cryptoInput').value;
  const output = $('cryptoOutput');
  if (!input.trim()) { output.innerHTML = '<span class="crypto-label">ENCODED:</span>...'; return; }

  let encoded = '';
  switch(currentCipher) {
    case 'caesar':
      encoded = input.split('').map(c => {
        if (c.match(/[a-z]/)) return String.fromCharCode(((c.charCodeAt(0) - 97 + 13) % 26) + 97);
        if (c.match(/[A-Z]/)) return String.fromCharCode(((c.charCodeAt(0) - 65 + 13) % 26) + 65);
        return c;
      }).join('');
      break;
    case 'binary':
      encoded = input.split('').map(c => c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ');
      break;
    case 'morse':
      encoded = input.toUpperCase().split('').map(c => MORSE_MAP[c] || c).join(' ');
      break;
    case 'reverse':
      encoded = input.split('').reverse().join('');
      break;
  }

  output.innerHTML = `<span class="crypto-label">ENCODED [${currentCipher.toUpperCase()}]:</span>${encoded}`;
}

/* ═══════════════════════════════════════════════════════════════
   OPS BRIEFING — Classified prank missions
   ═══════════════════════════════════════════════════════════════ */

const MISSIONS = [
  { code:'OP-001', title:'THE SCREEN FLIP', target:'Family Computer', difficulty:'easy',
    desc:'Rotate the screen 180° when target leaves the room.',
    steps:['Wait for target to leave','Ctrl+Alt+Down Arrow (Windows)','Act innocent when they return','Reveal after 2 minutes of confusion'] },
  { code:'OP-002', title:'PHANTOM CURSOR', target:'School/Home Computer', difficulty:'easy',
    desc:'Plug in a wireless mouse and move their cursor randomly.',
    steps:['Acquire wireless mouse','Plug receiver into target PC USB','Hide nearby with mouse','Move cursor during important moments'] },
  { code:'OP-003', title:'THE AUTOCORRECT', target:'Target Phone', difficulty:'medium',
    desc:'Set up text replacement to change common words.',
    steps:['Access target phone Settings > Keyboard','Add text replacements','Change "the" → "HACK THE PLANET"','Change "hello" → "We are Anony..."'] },
  { code:'OP-004', title:'DESKTOP DECOY', target:'Family Computer', difficulty:'medium',
    desc:'Screenshot the desktop, set as wallpaper, hide all real icons.',
    steps:['Take screenshot of desktop','Set screenshot as wallpaper','Right-click desktop > View > uncheck "Show icons"','Watch target click invisible icons'] },
  { code:'OP-005', title:'THE VOICE CHANGER', target:'Family Member', difficulty:'easy',
    desc:'Use a voice changer app during a phone call with family.',
    steps:['Download a voice changer app','Call family member','Use robot/alien voice','Deliver Anonymous message: "Expect us"'] },
  { code:'OP-006', title:'GHOST BLUETOOTH', target:'Home Speaker', difficulty:'medium',
    desc:'Connect to a Bluetooth speaker and play mysterious sounds.',
    steps:['Find target Bluetooth speaker','Pair your phone secretly','Wait for quiet moment','Play spooky sounds or Anonymous quotes'] },
  { code:'OP-007', title:'THE FAKE UPDATE', target:'Family Computer', difficulty:'hard',
    desc:'Open a fake update screen in fullscreen browser mode.',
    steps:['Open fakeupdate.net in browser','Press F11 for fullscreen','Walk away from computer','Target thinks PC is updating for hours'] },
  { code:'OP-008', title:'POST-IT SENSOR', target:'Mouse/Trackpad', difficulty:'easy',
    desc:'Place a small Post-it note over the mouse optical sensor.',
    steps:['Cut a tiny piece of Post-it note','Write "We are Anony" on it','Stick over mouse sensor','Watch target struggle'] },
  { code:'OP-009', title:'MYSTERY CHROME TAB', target:'Shared Computer', difficulty:'medium',
    desc:'Pin a tab with a mysterious message they can\'t easily close.',
    steps:['Open a tab with anonymous message','Right-click tab > Pin Tab','Pinned tabs are tiny and hard to notice','They\'ll wonder where the sound comes from'] },
  { code:'OP-010', title:'THE WALLPAPER SWAP', target:'Target Phone', difficulty:'easy',
    desc:'Change their wallpaper to a Guy Fawkes mask.',
    steps:['Find the best Anonymous wallpaper','Access target phone when unlocked','Change lock screen AND home wallpaper','Add text: "We do not forget... to prank"'] },
];

function setupOps() {
  const toggle = $('opsToggle');
  const body = $('opsBody');
  const arrow = $('opsArrow');
  const genBtn = $('opsGenerate');

  toggle.addEventListener('click', () => {
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    arrow.classList.toggle('open', !open);
  });

  genBtn.addEventListener('click', generateMission);
  generateMission();
}

function generateMission() {
  const m = MISSIONS[Math.floor(Math.random() * MISSIONS.length)];
  const screen = $('opsScreen');
  screen.innerHTML = `
    <div class="ops-mission-code">${m.code} // CLASSIFIED</div>
    <div class="ops-mission-title">${m.title}</div>
    <div class="ops-mission-target">TARGET: ${m.target}</div>
    <div class="ops-mission-desc">${m.desc}</div>
    <ul class="ops-mission-steps">
      ${m.steps.map(s => `<li>${s}</li>`).join('')}
    </ul>
    <span class="ops-difficulty ${m.difficulty}">${m.difficulty.toUpperCase()}</span>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   EXPLOIT LAB — Screen exploit pranks
   ═══════════════════════════════════════════════════════════════ */

const EXPLOITS = [
  { id:'bsod', icon:'💀', name:'BSOD', desc:'Fake Blue Screen' },
  { id:'matrix', icon:'🟢', name:'MATRIX', desc:'Matrix rain effect' },
  { id:'hack', icon:'💻', name:'FAKE HACK', desc:'Hacking terminal' },
  { id:'virus', icon:'🦠', name:'VIRUS ALERT', desc:'Fake virus warning' },
  { id:'glitch', icon:'📺', name:'GLITCH TV', desc:'Screen corruption' },
  { id:'anony', icon:'🎭', name:'ANONYMOUS', desc:'Anonymous message' },
];

function setupExploits() {
  const toggle = $('exploitToggle');
  const body = $('exploitBody');
  const arrow = $('exploitArrow');
  const grid = $('exploitGrid');

  toggle.addEventListener('click', () => {
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    arrow.classList.toggle('open', !open);
  });

  grid.innerHTML = '';
  EXPLOITS.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'exploit-card';
    card.innerHTML = `<div class="exploit-icon">${ex.icon}</div><div class="exploit-name">${ex.name}</div><div class="exploit-desc">${ex.desc}</div>`;
    card.addEventListener('click', () => launchExploit(ex.id));
    grid.appendChild(card);
  });

  // Exit exploit on ESC or click
  const overlay = $('exploitOverlay');
  overlay.addEventListener('click', closeExploit);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.style.display !== 'none') closeExploit();
  });
}

function launchExploit(id) {
  const overlay = $('exploitOverlay');
  const content = $('exploitContent');
  overlay.style.display = 'flex';

  switch(id) {
    case 'bsod':
      content.innerHTML = `<div class="bsod"><div class="bsod-sad">:(</div><div class="bsod-title">Your PC ran into a problem</div><div class="bsod-msg">We're just collecting some error info, and then we'll restart for you.<br><br>0% complete<br><br>Stop code: PRANK_DETECTED<br>What failed: anony.sys</div></div>`;
      break;
    case 'matrix':
      content.innerHTML = `<canvas class="matrix-canvas" id="matrixCanvas"></canvas>`;
      startMatrix();
      break;
    case 'hack':
      content.innerHTML = `<div class="fake-hack" id="fakeHack"></div>`;
      startFakeHack();
      break;
    case 'virus':
      content.innerHTML = `<div class="fake-virus"><div class="fake-virus-icon">☠️</div><div class="fake-virus-title">SYSTEM COMPROMISED</div><div class="fake-virus-msg">Anonymous has accessed your system.<br>All files are being encrypted...<br><br>Just kidding 😄 This is a prank!</div></div>`;
      break;
    case 'glitch':
      content.innerHTML = `<div class="fake-hack" id="glitchScreen" style="background:#000;display:flex;align-items:center;justify-content:center;"></div>`;
      startGlitchTV();
      break;
    case 'anony':
      content.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;background:#000;">
        <div style="width:150px;height:185px;margin-bottom:30px;animation:heroFloat 3s ease-in-out infinite;">${MASKS[0].svg()}</div>
        <div style="font-family:var(--font-title);font-size:clamp(1.5rem,4vw,2.5rem);color:#00ff41;text-shadow:0 0 20px rgba(0,255,65,.3);letter-spacing:.1em;text-align:center;">WE ARE ANONYMOUS</div>
        <div style="font-family:var(--font-mono);font-size:14px;color:#00ff41;opacity:.7;margin-top:12px;">We do not forgive. We do not forget.</div>
        <div style="font-family:var(--font-mono);font-size:14px;color:#00ff41;opacity:.7;margin-top:4px;">Expect us.</div>
      </div>`;
      break;
  }
}

function closeExploit() {
  const overlay = $('exploitOverlay');
  overlay.style.display = 'none';
  $('exploitContent').innerHTML = '';
  if (matrixAnim) { cancelAnimationFrame(matrixAnim); matrixAnim = null; }
  if (hackInterval) { clearInterval(hackInterval); hackInterval = null; }
  if (glitchInterval) { clearInterval(glitchInterval); glitchInterval = null; }
}

// Matrix Rain
let matrixAnim = null;
function startMatrix() {
  const canvas = $('matrixCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const cols = Math.floor(canvas.width / 14);
  const drops = Array(cols).fill(1);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()アイウエオカキクケコサシスセソ';

  function draw() {
    ctx.fillStyle = 'rgba(0,0,0,.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = '14px monospace';
    for (let i = 0; i < drops.length; i++) {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(ch, i * 14, drops[i] * 14);
      if (drops[i] * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    matrixAnim = requestAnimationFrame(draw);
  }
  draw();
}

// Fake Hack Terminal
let hackInterval = null;
function startFakeHack() {
  const el = $('fakeHack');
  if (!el) return;
  const lines = [
    'Initializing brute-force attack...',
    'Scanning ports: 21, 22, 80, 443, 8080...',
    'Port 22 OPEN — SSH detected',
    'Attempting password crack: ████████░░ 82%',
    'Password found: ********',
    'Establishing tunnel...',
    'Connected to target: 192.168.1.'+Math.floor(Math.random()*255),
    'Downloading /etc/passwd...',
    'Decrypting files: AES-256...',
    'root@target:~# whoami',
    'anonymous',
    'root@target:~# cat /secret/plans.txt',
    '"We are Anony... we do not forget to prank."',
    'Uploading payload: prank.exe',
    'Payload deployed successfully.',
    'Erasing logs...',
    'Disconnecting...',
    'Mission complete. Expect us.',
  ];
  let idx = 0;
  hackInterval = setInterval(() => {
    if (idx >= lines.length) { clearInterval(hackInterval); hackInterval = null; return; }
    const div = document.createElement('div');
    div.className = 'fake-hack-line';
    div.textContent = '> ' + lines[idx];
    div.style.animationDelay = '0s';
    el.appendChild(div);
    el.scrollTop = el.scrollHeight;
    idx++;
  }, 400);
}

// Glitch TV
let glitchInterval = null;
function startGlitchTV() {
  const el = $('glitchScreen');
  if (!el) return;
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  el.innerHTML = '';
  el.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  glitchInterval = setInterval(() => {
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = Math.random() * 255;
      imgData.data[i] = v * (Math.random() > 0.9 ? 2 : 0.3);
      imgData.data[i+1] = v * (Math.random() > 0.8 ? 1.5 : 0.1);
      imgData.data[i+2] = v * 0.1;
      imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
    // Random glitch bars
    for (let j = 0; j < 5; j++) {
      const y = Math.random() * canvas.height;
      const h = Math.random() * 20;
      ctx.fillStyle = `rgba(0,${Math.floor(Math.random()*255)},0,0.3)`;
      ctx.fillRect(0, y, canvas.width, h);
    }
  }, 50);
}

/* ═══════════════════════════════════════════════════════════════
   BACKGROUND MATRIX RAIN
   ═══════════════════════════════════════════════════════════════ */

function setupBgRain() {
  const canvas = $('bgRainCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  const cols = Math.floor(canvas.width / 16);
  const drops = Array(cols).fill(0).map(() => Math.random() * canvas.height / 16);
  const chars = 'アイウエオカキクケコサシスセソ0123456789ABCDEF';
  function draw() {
    ctx.fillStyle = 'rgba(0,0,0,.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = '14px monospace';
    for (let i = 0; i < drops.length; i++) {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(ch, i * 16, drops[i] * 16);
      if (drops[i] * 16 > canvas.height && Math.random() > 0.98) drops[i] = 0;
      drops[i] += 0.5 + Math.random() * 0.5;
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ═══════════════════════════════════════════════════════════════
   TYPING SOUNDS — Web Audio keyboard clacks
   ═══════════════════════════════════════════════════════════════ */

function setupTypingSounds() {
  document.addEventListener('keydown', e => {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (e.key.length > 1 && e.key !== 'Enter' && e.key !== 'Backspace') return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(800 + Math.random() * 400, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  });
}

/* ═══════════════════════════════════════════════════════════════
   HEARTBEAT — Low bass pulse
   ═══════════════════════════════════════════════════════════════ */

let heartbeatOsc = null, heartbeatGain = null, heartbeatSpeed = 1;

function setupHeartbeat() {
  // Start heartbeat on first user interaction
  document.addEventListener('click', startHeartbeat, { once: true });
}

function startHeartbeat() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (heartbeatOsc) return;
  heartbeatGain = audioCtx.createGain();
  heartbeatGain.gain.setValueAtTime(0, audioCtx.currentTime);
  heartbeatGain.connect(audioCtx.destination);
  pulseHeartbeat();
}

function pulseHeartbeat() {
  if (!audioCtx || !heartbeatGain) return;
  const now = audioCtx.currentTime;
  // Double-pulse like a real heartbeat
  const osc1 = audioCtx.createOscillator();
  osc1.type = 'sine'; osc1.frequency.value = 40;
  const g1 = audioCtx.createGain();
  g1.gain.setValueAtTime(0, now);
  g1.gain.linearRampToValueAtTime(0.06, now + 0.05);
  g1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
  osc1.connect(g1).connect(audioCtx.destination);
  osc1.start(now); osc1.stop(now + 0.2);

  const osc2 = audioCtx.createOscillator();
  osc2.type = 'sine'; osc2.frequency.value = 45;
  const g2 = audioCtx.createGain();
  g2.gain.setValueAtTime(0, now + 0.2);
  g2.gain.linearRampToValueAtTime(0.04, now + 0.25);
  g2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
  osc2.connect(g2).connect(audioCtx.destination);
  osc2.start(now + 0.2); osc2.stop(now + 0.4);

  setTimeout(pulseHeartbeat, 1000 / heartbeatSpeed);
}

function setHeartbeatSpeed(speed) { heartbeatSpeed = speed; }

/* ═══════════════════════════════════════════════════════════════
   GLITCH TRANSITIONS
   ═══════════════════════════════════════════════════════════════ */

function glitchTransition() {
  document.body.classList.add('glitch-flash');
  setTimeout(() => document.body.classList.remove('glitch-flash'), 300);
}

// Hook into all section toggles
function setupGlitchTransitions() {
  document.querySelectorAll('.ops-header').forEach(header => {
    header.addEventListener('click', glitchTransition);
  });
}

/* ═══════════════════════════════════════════════════════════════
   KONAMI CODE — ↑↑↓↓←→←→BA
   ═══════════════════════════════════════════════════════════════ */

function setupKonami() {
  const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let idx = 0;
  document.addEventListener('keydown', e => {
    if (e.key === code[idx]) {
      idx++;
      if (idx === code.length) {
        idx = 0;
        activateKonami();
      }
    } else {
      idx = 0;
    }
  });
}

function activateKonami() {
  // Screen shake
  document.body.classList.add('screen-shake');
  setTimeout(() => document.body.classList.remove('screen-shake'), 500);

  // Flash
  glitchTransition();

  // Unlock secret mask + show message
  const overlay = $('exploitOverlay');
  const content = $('exploitContent');
  overlay.style.display = 'flex';
  content.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;background:#000;">
      <div style="font-size:60px;margin-bottom:20px;">🏆</div>
      <div style="font-family:var(--font-title);font-size:24px;color:#ffd700;text-shadow:0 0 20px rgba(255,215,0,.5);letter-spacing:.1em;margin-bottom:12px;">KONAMI CODE ACTIVATED</div>
      <div style="font-size:16px;color:#00ff41;margin-bottom:8px;">SECRET UNLOCKED: GOLDEN MASK</div>
      <div style="font-size:14px;color:rgba(255,255,255,.5);margin-top:16px;">+500 XP BONUS AWARDED</div>
      <div style="font-size:12px;color:rgba(255,255,255,.3);margin-top:30px;">Click to continue</div>
    </div>
  `;
  addXp(500, 'mission');
}

/* ═══════════════════════════════════════════════════════════════
   SCREEN TAKEOVER — Auto-chain exploits
   ═══════════════════════════════════════════════════════════════ */

async function screenTakeover() {
  setHeartbeatSpeed(2);
  // BSOD
  launchExploit('bsod');
  await sleep(3000);
  closeExploit();
  glitchTransition();
  await sleep(300);
  // Matrix
  launchExploit('matrix');
  setHeartbeatSpeed(2.5);
  await sleep(4000);
  closeExploit();
  glitchTransition();
  await sleep(300);
  // Virus
  launchExploit('virus');
  setHeartbeatSpeed(3);
  await sleep(3000);
  closeExploit();
  glitchTransition();
  await sleep(300);
  // Final: Anonymous message
  launchExploit('anony');
  setHeartbeatSpeed(1);
  addXp(100, 'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   TERMINAL MODE — Fake command line
   ═══════════════════════════════════════════════════════════════ */

const TERMINAL_COMMANDS = {
  help: () => [
    { text:'Available commands:', cls:'' },
    { text:'  help          — Show this help', cls:'dim' },
    { text:'  whoami        — Display identity', cls:'dim' },
    { text:'  ls            — List files', cls:'dim' },
    { text:'  cat <file>    — Read a file', cls:'dim' },
    { text:'  ping <host>   — Ping a server', cls:'dim' },
    { text:'  scan          — Network scan', cls:'dim' },
    { text:'  hack          — Initiate hack', cls:'dim' },
    { text:'  decrypt       — Decrypt message', cls:'dim' },
    { text:'  takeover      — Screen takeover', cls:'dim' },
    { text:'  countdown     — Arm countdown', cls:'dim' },
    { text:'  webcam        — Access camera', cls:'dim' },
    { text:'  clear         — Clear terminal', cls:'dim' },
    { text:'  exit          — Close terminal', cls:'dim' },
  ],
  whoami: () => [{ text: `Agent: ${agentData.codename || 'UNKNOWN'} | Rank: ${getRank().name} | XP: ${agentData.xp}`, cls:'' }],
  ls: () => [
    { text:'drwxr-xr-x  secret_plans/', cls:'cyan' },
    { text:'drwxr-xr-x  exploits/', cls:'cyan' },
    { text:'-rw-r--r--  manifesto.txt', cls:'' },
    { text:'-rw-r--r--  targets.db', cls:'' },
    { text:'-rwx------  prank.exe', cls:'error' },
    { text:'-rw-r--r--  README.md', cls:'dim' },
  ],
  scan: () => {
    setupNetworkScan();
    return [{ text:'Initiating network scan...', cls:'' }];
  },
  hack: () => [
    { text:'[*] Connecting to target...', cls:'' },
    { text:'[*] Bypassing firewall... OK', cls:'' },
    { text:'[*] Injecting payload... OK', cls:'' },
    { text:'[✓] ACCESS GRANTED', cls:'cyan' },
    { text:'[!] Just kidding. This is a prank terminal 😄', cls:'error' },
  ],
  decrypt: () => {
    const msg = SLOGANS[Math.floor(Math.random() * SLOGANS.length)];
    return [
      { text:'Decrypting intercepted message...', cls:'dim' },
      { text:`> "${msg.prank}"`, cls:'' },
      { text:`Original: "${msg.original}" — ${msg.source}`, cls:'dim' },
    ];
  },
  takeover: () => { screenTakeover(); return [{ text:'SCREEN TAKEOVER INITIATED...', cls:'error' }]; },
  countdown: () => { runCountdown(); return [{ text:'COUNTDOWN ARMED...', cls:'error' }]; },
  webcam: () => { launchWebcam(); return [{ text:'ACCESSING CAMERA...', cls:'error' }]; },
};

function setupTerminal() {
  const toggle = $('terminalToggle');
  const body = $('terminalBody');
  const arrow = $('terminalArrow');
  const input = $('terminalInput');
  const output = $('terminalOutput');

  toggle.addEventListener('click', () => {
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    arrow.classList.toggle('open', !open);
    if (!open) input.focus();
  });

  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const cmd = input.value.trim().toLowerCase();
    input.value = '';
    if (!cmd) return;

    // Echo command
    const echo = document.createElement('div');
    echo.className = 'terminal-line dim';
    echo.textContent = `anony@hq:~$ ${cmd}`;
    output.appendChild(echo);

    if (cmd === 'clear') { output.innerHTML = ''; return; }
    if (cmd === 'exit') { body.style.display = 'none'; arrow.classList.remove('open'); return; }

    // Handle cat command
    if (cmd.startsWith('cat ')) {
      const file = cmd.slice(4).trim();
      const files = {
        'manifesto.txt': 'We are Anonymous. We are Legion. We do not forgive. We do not forget. Expect us.',
        'README.md': 'HACKTIVIST KIDS v1.0 — A Workshop DIY Project. Educational prank toolkit for young agents.',
        'targets.db': 'ERROR: Access denied. Nice try, Agent.',
      };
      const content = files[file] || `cat: ${file}: No such file or directory`;
      addLine(output, content, files[file] ? '' : 'error');
      return;
    }

    // Handle ping
    if (cmd.startsWith('ping ')) {
      const host = cmd.slice(5).trim() || 'localhost';
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          addLine(output, `64 bytes from ${host}: seq=${i} ttl=64 time=${(Math.random()*50+5).toFixed(1)}ms`, '');
          $('terminalScreen').scrollTop = $('terminalScreen').scrollHeight;
        }, i * 500);
      }
      return;
    }

    const handler = TERMINAL_COMMANDS[cmd];
    if (handler) {
      const lines = handler();
      lines.forEach((l, i) => {
        setTimeout(() => {
          addLine(output, l.text, l.cls);
          $('terminalScreen').scrollTop = $('terminalScreen').scrollHeight;
        }, i * 100);
      });
    } else {
      addLine(output, `Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
    }

    addXp(3, 'encrypt');
    $('terminalScreen').scrollTop = $('terminalScreen').scrollHeight;
  });
}

function addLine(parent, text, cls) {
  const div = document.createElement('div');
  div.className = `terminal-line ${cls || ''}`;
  div.textContent = text;
  parent.appendChild(div);
}

/* ═══════════════════════════════════════════════════════════════
   NETWORK SCANNER — Fake animated scan
   ═══════════════════════════════════════════════════════════════ */

const FAKE_DEVICES = [
  { ip:'192.168.1.1', name:'Router_Admin', status:'GATEWAY' },
  { ip:'192.168.1.23', name:'Dads-Laptop', status:'ACTIVE' },
  { ip:'192.168.1.45', name:'Smart-TV-Living', status:'ACTIVE' },
  { ip:'192.168.1.67', name:'iPhone-Mom', status:'ACTIVE' },
  { ip:'192.168.1.89', name:'PS5-Console', status:'ACTIVE' },
  { ip:'192.168.1.101', name:'Security-Camera-01', status:'ACTIVE' },
  { ip:'192.168.1.128', name:'Smart-Fridge', status:'IDLE' },
  { ip:'192.168.1.150', name:'UNKNOWN-DEVICE', status:'SUSPICIOUS' },
  { ip:'192.168.1.200', name:'Printer-Office', status:'IDLE' },
  { ip:'192.168.1.254', name:'Anony-Ghost-Node', status:'HIDDEN' },
];

function setupNetworkScan() {
  const toggle = $('networkToggle');
  const body = $('networkBody');
  const arrow = $('networkArrow');
  const scanBtn = $('networkScan');

  toggle.addEventListener('click', () => {
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    arrow.classList.toggle('open', !open);
  });

  scanBtn.addEventListener('click', runNetworkScan);
}

async function runNetworkScan() {
  const display = $('networkDisplay');
  display.innerHTML = '<div class="net-scanning">SCANNING 192.168.1.0/24 ...</div>';

  const shuffled = [...FAKE_DEVICES].sort(() => Math.random() - 0.5);
  const count = 5 + Math.floor(Math.random() * 5);

  for (let i = 0; i < Math.min(count, shuffled.length); i++) {
    await sleep(400 + Math.random() * 600);
    const d = shuffled[i];
    const row = document.createElement('div');
    row.className = 'net-device';
    row.innerHTML = `<span class="net-ip">${d.ip}</span><span class="net-name">${d.name}</span><span class="net-status">${d.status}</span>`;
    display.appendChild(row);
  }

  const done = document.createElement('div');
  done.style.cssText = 'margin-top:8px;font-size:11px;color:var(--cyan);';
  done.textContent = `Scan complete. ${count} devices found on network.`;
  display.appendChild(done);

  addXp(10, 'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   FILE ENCRYPTOR
   ═══════════════════════════════════════════════════════════════ */

function setupEncryptor() {
  const toggle = $('encryptorToggle');
  const body = $('encryptorBody');
  const arrow = $('encryptorArrow');
  const btn = $('encryptorBtn');

  toggle.addEventListener('click', () => {
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    arrow.classList.toggle('open', !open);
  });

  btn.addEventListener('click', encryptFile);
}

function encryptFile() {
  const input = $('encryptorInput').value;
  const output = $('encryptorOutput');
  if (!input.trim()) { output.innerHTML = '<span class="dim">No data to encrypt.</span>'; return; }

  // Generate random key
  const key = Array.from({length: 16}, () => '0123456789ABCDEF'[Math.floor(Math.random()*16)]).join('');

  // Encrypt with XOR-like scramble
  const encrypted = input.split('').map((c, i) => {
    const shift = key.charCodeAt(i % key.length);
    return ((c.charCodeAt(0) ^ shift) % 93 + 33);
  }).map(n => String.fromCharCode(n)).join('');

  // Base64 layer
  const b64 = btoa(encrypted);

  output.innerHTML = `<div class="encrypt-data">${b64}</div><span class="encrypt-key">DECRYPT KEY: ${key}</span>`;
  addXp(10, 'encrypt');
}

/* ═══════════════════════════════════════════════════════════════
   COUNTDOWN BOMB
   ═══════════════════════════════════════════════════════════════ */

async function runCountdown() {
  const overlay = $('countdownOverlay');
  const timer = $('countdownTimer');
  const fill = $('countdownFill');
  overlay.style.display = 'flex';
  setHeartbeatSpeed(2);

  for (let i = 10; i >= 0; i--) {
    timer.textContent = i;
    fill.style.width = ((10 - i) / 10 * 100) + '%';
    setHeartbeatSpeed(1 + (10 - i) * 0.3);

    // Shake increases
    if (i <= 3) {
      document.body.classList.add('screen-shake');
      setTimeout(() => document.body.classList.remove('screen-shake'), 400);
    }
    await sleep(1000);
  }

  // BOOM
  overlay.style.display = 'none';
  setHeartbeatSpeed(1);
  glitchTransition();

  // Launch random exploit as "payload"
  const randomExploits = ['bsod','matrix','virus','anony'];
  launchExploit(randomExploits[Math.floor(Math.random() * randomExploits.length)]);
  addXp(20, 'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   WEBCAM FAKE HACK
   ═══════════════════════════════════════════════════════════════ */

let webcamInterval = null;

function launchWebcam() {
  const overlay = $('webcamOverlay');
  overlay.style.display = '';
  overlay.style.display = 'flex';

  // Static noise canvas
  const staticEl = $('webcamStatic');
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  staticEl.innerHTML = '';
  staticEl.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  webcamInterval = setInterval(() => {
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = Math.random() * 40;
      imgData.data[i] = v * 0.3;
      imgData.data[i+1] = v * 0.8;
      imgData.data[i+2] = v * 0.3;
      imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
  }, 80);

  // Close on click or ESC
  const closeWebcam = () => {
    overlay.style.display = 'none';
    if (webcamInterval) { clearInterval(webcamInterval); webcamInterval = null; }
    overlay.removeEventListener('click', closeWebcam);
  };
  overlay.addEventListener('click', closeWebcam);
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { closeWebcam(); document.removeEventListener('keydown', esc); }
  });

  addXp(15, 'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   MANIFESTO BROADCASTER
   ═══════════════════════════════════════════════════════════════ */

function setupManifesto() {
  const toggle = $('manifestoToggle');
  const body = $('manifestoBody');
  const arrow = $('manifestoArrow');
  const deployBtn = $('manifestoDeploy');

  toggle.addEventListener('click', () => {
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    arrow.classList.toggle('open', !open);
  });

  deployBtn.addEventListener('click', broadcastManifesto);
}

async function broadcastManifesto() {
  const text = $('manifestoInput').value.trim();
  if (!text) return;

  const overlay = $('manifestoOverlay');
  const broadcast = $('manifestoBroadcast');
  overlay.style.display = 'flex';
  broadcast.innerHTML = '';

  // Typewriter effect
  for (let i = 0; i < text.length; i++) {
    broadcast.textContent += text[i];
    if (text[i] === '.' || text[i] === '!' || text[i] === '?') await sleep(200);
    else if (text[i] === ',') await sleep(100);
    else await sleep(40 + Math.random() * 30);
  }

  // Close on click or ESC
  const close = () => {
    overlay.style.display = 'none';
    overlay.removeEventListener('click', close);
  };
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
  });

  addXp(25, 'mission');
}

/* ═══════════════════════════════════════════════════════════════
   ADD TAKEOVER + WEBCAM + COUNTDOWN TO EXPLOIT LAB
   ═══════════════════════════════════════════════════════════════ */

function addExtraExploits() {
  const grid = $('exploitGrid');
  if (!grid) return;

  const extras = [
    { icon:'📷', name:'WEBCAM', desc:'Fake camera access', action: launchWebcam },
    { icon:'💣', name:'COUNTDOWN', desc:'Payload countdown', action: runCountdown },
    { icon:'⚡', name:'TAKEOVER', desc:'Chain all exploits', action: screenTakeover },
  ];

  extras.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'exploit-card';
    card.innerHTML = `<div class="exploit-icon">${ex.icon}</div><div class="exploit-name">${ex.name}</div><div class="exploit-desc">${ex.desc}</div>`;
    card.addEventListener('click', ex.action);
    grid.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════════════
   STEGANOGRAPHY — Zero-width character encoding
   ═══════════════════════════════════════════════════════════════ */

function setupStego() {
  toggleSection('stegoToggle','stegoBody','stegoArrow');
  const encBtn = $('stegoEncode'), decBtn = $('stegoDecode');
  const secretIn = $('stegoSecret'), coverIn = $('stegoCover');
  const output = $('stegoOutput'), copyBtn = $('stegoCopy');
  let mode = 'encode';

  encBtn.addEventListener('click', () => { mode='encode'; encBtn.classList.add('active'); decBtn.classList.remove('active'); secretIn.style.display=''; coverIn.style.display=''; coverIn.placeholder='Cover text (visible text)...'; });
  decBtn.addEventListener('click', () => { mode='decode'; decBtn.classList.add('active'); encBtn.classList.remove('active'); secretIn.style.display='none'; coverIn.placeholder='Paste stego text to decode...'; });

  const ZW = ['\u200B','\u200C','\u200D','\uFEFF']; // zero-width chars for 00,01,10,11
  function stegoEncode(secret, cover) {
    let bits = '';
    for (const c of secret) bits += c.charCodeAt(0).toString(2).padStart(8,'0');
    let zw = '';
    for (let i=0; i<bits.length; i+=2) zw += ZW[parseInt(bits.substr(i,2),2)];
    return cover.slice(0,1) + zw + cover.slice(1);
  }
  function stegoDecode(text) {
    let bits = '';
    for (const c of text) { const idx = ZW.indexOf(c); if (idx>=0) bits += idx.toString(2).padStart(2,'0'); }
    let msg = '';
    for (let i=0; i<bits.length; i+=8) { const byte=bits.substr(i,8); if(byte.length===8) msg += String.fromCharCode(parseInt(byte,2)); }
    return msg;
  }

  coverIn.addEventListener('input', () => {
    if (mode==='encode') { const s=secretIn.value, c=coverIn.value; output.innerHTML = s&&c ? `<span class="crypto-label">STEGO TEXT:</span>${stegoEncode(s,c)}` : ''; }
    else { const d=stegoDecode(coverIn.value); output.innerHTML = d ? `<span class="crypto-label">HIDDEN MESSAGE:</span>${d}` : '<span class="dim">No hidden message found.</span>'; }
  });
  secretIn.addEventListener('input', () => { const s=secretIn.value, c=coverIn.value; if(s&&c) output.innerHTML = `<span class="crypto-label">STEGO TEXT:</span>${stegoEncode(s,c)}`; });
  copyBtn.addEventListener('click', async () => { try { await navigator.clipboard.writeText(output.innerText.replace('STEGO TEXT:','').replace('HIDDEN MESSAGE:','').trim()); copyBtn.textContent='> COPIED ✓'; setTimeout(()=>copyBtn.textContent='> COPY',1500); } catch(e){} });
  addXp(5,'encrypt');
}

/* ═══════════════════════════════════════════════════════════════
   IP FAKER — Fake geo-locate
   ═══════════════════════════════════════════════════════════════ */

const FAKE_LOCATIONS = [
  {city:'Moscow',country:'Russia',lat:'55.7558',lng:'37.6173',isp:'Rostelecom'},
  {city:'Tokyo',country:'Japan',lat:'35.6762',lng:'139.6503',isp:'NTT Communications'},
  {city:'São Paulo',country:'Brazil',lat:'-23.5505',lng:'-46.6333',isp:'Telefonica'},
  {city:'Lagos',country:'Nigeria',lat:'6.5244',lng:'3.3792',isp:'MTN Nigeria'},
  {city:'Seoul',country:'South Korea',lat:'37.5665',lng:'126.9780',isp:'Korea Telecom'},
  {city:'Mumbai',country:'India',lat:'19.0760',lng:'72.8777',isp:'Reliance Jio'},
  {city:'Berlin',country:'Germany',lat:'52.5200',lng:'13.4050',isp:'Deutsche Telekom'},
  {city:'Anonymous Proxy',country:'UNKNOWN',lat:'???.???',lng:'???.???',isp:'TOR EXIT NODE'},
];

function setupIpFaker() {
  toggleSection('ipToggle','ipBody','ipArrow');
  $('ipLookup').addEventListener('click', () => {
    const ip = $('ipInput').value.trim() || '192.168.1.' + Math.floor(Math.random()*255);
    const loc = FAKE_LOCATIONS[Math.floor(Math.random()*FAKE_LOCATIONS.length)];
    $('ipResult').innerHTML = `
      <div style="font-size:11px;"><span style="color:var(--cyan);">TARGET IP:</span> ${ip}</div>
      <div style="margin-top:6px;font-size:11px;">
        <div><span style="color:var(--muted);">City:</span> ${loc.city}</div>
        <div><span style="color:var(--muted);">Country:</span> ${loc.country}</div>
        <div><span style="color:var(--muted);">Lat/Lng:</span> ${loc.lat}, ${loc.lng}</div>
        <div><span style="color:var(--muted);">ISP:</span> ${loc.isp}</div>
        <div><span style="color:var(--muted);">Status:</span> <span style="color:var(--green);">LOCATED</span></div>
      </div>
      <div style="font-size:9px;color:var(--muted);margin-top:8px;">⚠ This is fake data for educational purposes</div>`;
    addXp(5,'exploit');
  });
}

/* ═══════════════════════════════════════════════════════════════
   PASSWORD STRENGTH TESTER
   ═══════════════════════════════════════════════════════════════ */

function setupPwTest() {
  toggleSection('pwTestToggle','pwTestBody','pwTestArrow');
  $('pwTestInput').addEventListener('input', () => {
    const pw = $('pwTestInput').value;
    const result = $('pwResult');
    if (!pw) { result.innerHTML = ''; return; }
    let score=0, tips=[];
    if (pw.length>=8) score+=20; else tips.push('Use 8+ characters');
    if (pw.length>=12) score+=10;
    if (/[a-z]/.test(pw)&&/[A-Z]/.test(pw)) score+=20; else tips.push('Mix upper & lowercase');
    if (/\d/.test(pw)) score+=20; else tips.push('Add numbers');
    if (/[^a-zA-Z0-9]/.test(pw)) score+=20; else tips.push('Add symbols (!@#$%)');
    if (!/(.)\1{2}/.test(pw)) score+=10; else tips.push('Avoid repeated characters');
    const common = ['password','123456','qwerty','admin','letmein','welcome','monkey','dragon'];
    if (common.some(c=>pw.toLowerCase().includes(c))) { score=Math.max(score-30,0); tips.push('Avoid common passwords!'); }
    const label = score>=80?'STRONG':score>=50?'MEDIUM':'WEAK';
    const color = score>=80?'#4ade80':score>=50?'#fbbf24':'#f87171';
    const time = score>=80?'centuries':score>=60?'years':score>=40?'months':score>=20?'hours':'seconds';
    result.innerHTML = `<div class="pw-score" style="color:${color}">${label} — ${score}/100</div>
      <div class="pw-meter"><div class="pw-meter-fill" style="width:${score}%;background:${color}"></div></div>
      <div style="font-size:10px;color:var(--muted);">Estimated crack time: ${time}</div>
      ${tips.length?`<div class="pw-tips" style="margin-top:6px;">${tips.map(t=>'> '+t).join('<br>')}</div>`:''}`;
  });
}

/* ═══════════════════════════════════════════════════════════════
   ASCII ART GENERATOR
   ═══════════════════════════════════════════════════════════════ */

const ASCII_FONT = {
  A:['  █  ','█   █','█████','█   █','█   █'],B:['████ ','█   █','████ ','█   █','████ '],C:[' ████','█    ','█    ','█    ',' ████'],
  D:['████ ','█   █','█   █','█   █','████ '],E:['█████','█    ','████ ','█    ','█████'],F:['█████','█    ','████ ','█    ','█    '],
  G:[' ████','█    ','█  ██','█   █',' ████'],H:['█   █','█   █','█████','█   █','█   █'],I:['█████','  █  ','  █  ','  █  ','█████'],
  J:['█████','    █','    █','█   █',' ███ '],K:['█  █ ','█ █  ','██   ','█ █  ','█  █ '],L:['█    ','█    ','█    ','█    ','█████'],
  M:['█   █','██ ██','█ █ █','█   █','█   █'],N:['█   █','██  █','█ █ █','█  ██','█   █'],O:[' ███ ','█   █','█   █','█   █',' ███ '],
  P:['████ ','█   █','████ ','█    ','█    '],Q:[' ███ ','█   █','█ █ █','█  █ ',' ██ █'],R:['████ ','█   █','████ ','█  █ ','█   █'],
  S:[' ████','█    ',' ███ ','    █','████ '],T:['█████','  █  ','  █  ','  █  ','  █  '],U:['█   █','█   █','█   █','█   █',' ███ '],
  V:['█   █','█   █','█   █',' █ █ ','  █  '],W:['█   █','█   █','█ █ █','██ ██','█   █'],X:['█   █',' █ █ ','  █  ',' █ █ ','█   █'],
  Y:['█   █',' █ █ ','  █  ','  █  ','  █  '],Z:['█████','   █ ','  █  ',' █   ','█████'],
  ' ':['     ','     ','     ','     ','     '],'!':['  █  ','  █  ','  █  ','     ','  █  '],
  '0':[' ███ ','█  ██','█ █ █','██  █',' ███ '],'1':['  █  ',' ██  ','  █  ','  █  ','█████'],
  '2':[' ███ ','█   █','  ██ ',' █   ','█████'],'3':['████ ','    █',' ███ ','    █','████ '],
};

function setupAscii() {
  toggleSection('asciiToggle','asciiBody','asciiArrow');
  $('asciiInput').addEventListener('input', () => {
    const text = $('asciiInput').value.toUpperCase();
    const output = $('asciiOutput');
    if (!text) { output.textContent=''; return; }
    let lines = ['','','','',''];
    for (const ch of text) {
      const glyph = ASCII_FONT[ch] || ASCII_FONT[' '];
      for (let r=0;r<5;r++) lines[r] += glyph[r] + ' ';
    }
    output.textContent = lines.join('\n');
  });
  $('asciiCopy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText($('asciiOutput').textContent); $('asciiCopy').textContent='> COPIED ✓'; setTimeout(()=>$('asciiCopy').textContent='> COPY_ART',1500); } catch(e){}
  });
}

/* ═══════════════════════════════════════════════════════════════
   QR CODE GENERATOR (pure JS, no library)
   ═══════════════════════════════════════════════════════════════ */

function setupQr() {
  toggleSection('qrToggle','qrBody','qrArrow');
  $('qrGenerate').addEventListener('click', () => {
    const text = $('qrInput').value.trim();
    if (!text) return;
    // Simple visual QR-like matrix (not scannable, but looks cool)
    const size = 21;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size * 6;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    // Generate deterministic pattern from text
    let seed = 0;
    for (const c of text) seed = ((seed << 5) - seed + c.charCodeAt(0)) | 0;
    const rng = () => { seed = (seed * 16807 + 0) % 2147483647; return seed / 2147483647; };
    // Finder patterns
    const drawFinder = (x,y) => { for(let r=0;r<7;r++) for(let c=0;c<7;c++) { const border=r===0||r===6||c===0||c===6; const inner=r>=2&&r<=4&&c>=2&&c<=4; if(border||inner) { ctx.fillStyle='#00ff41'; ctx.fillRect((x+c)*6,(y+r)*6,6,6); } } };
    drawFinder(0,0); drawFinder(size-7,0); drawFinder(0,size-7);
    // Data modules
    for (let r=0;r<size;r++) for (let c=0;c<size;c++) {
      if ((r<7&&c<7)||(r<7&&c>=size-7)||(r>=size-7&&c<7)) continue;
      if (rng() > 0.5) { ctx.fillStyle='#00ff41'; ctx.fillRect(c*6,r*6,6,6); }
    }
    $('qrDisplay').innerHTML = '';
    $('qrDisplay').appendChild(canvas);
    const note = document.createElement('div');
    note.style.cssText = 'font-size:9px;color:var(--muted);margin-top:6px;';
    note.textContent = '⚠ Visual QR — for display only (not scannable)';
    $('qrDisplay').appendChild(note);
    addXp(5,'encrypt');
  });
}

/* ═══════════════════════════════════════════════════════════════
   AGENT BADGE — SVG ID card generator
   ═══════════════════════════════════════════════════════════════ */

function setupBadge() {
  toggleSection('badgeToggle','badgeBody','badgeArrow');
  $('badgeGenerate').addEventListener('click', () => {
    const name = agentData.codename || 'UNKNOWN';
    const rank = getRank().name;
    const xp = agentData.xp;
    const id = 'AX-' + Math.random().toString(36).substr(2,6).toUpperCase();
    const maskSvg = selectedMask ? selectedMask.svg() : MASKS[0].svg();
    // Extract just the SVG inner content
    const badge = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" style="max-width:300px;">
      <rect width="300" height="180" fill="#0a0a0a" stroke="#00ff41" stroke-width="2" rx="4"/>
      <rect x="5" y="5" width="290" height="170" fill="none" stroke="#00ff41" stroke-width=".5" stroke-dasharray="4,3" rx="2"/>
      <text x="150" y="22" fill="#00ff41" font-family="monospace" font-size="10" text-anchor="middle" letter-spacing="3">ANONYMOUS NETWORK</text>
      <line x1="20" y1="28" x2="280" y2="28" stroke="#00ff41" stroke-width=".5"/>
      <text x="20" y="50" fill="#3a5a3a" font-family="monospace" font-size="8">AGENT ID: ${id}</text>
      <text x="20" y="75" fill="#00ff41" font-family="monospace" font-size="14" font-weight="bold">${name}</text>
      <text x="20" y="95" fill="#00aa2a" font-family="monospace" font-size="10">RANK: ${rank}</text>
      <text x="20" y="112" fill="#3a5a3a" font-family="monospace" font-size="9">XP: ${xp} | CLEARANCE: LEVEL ${Math.min(7,Math.floor(xp/300)+1)}</text>
      <line x1="20" y1="120" x2="280" y2="120" stroke="#00ff41" stroke-width=".3"/>
      <text x="20" y="138" fill="#3a5a3a" font-family="monospace" font-size="7">MISSIONS: ${agentData.missions} | EXPLOITS: ${agentData.exploits} | ENCRYPTS: ${agentData.encrypts}</text>
      <text x="150" y="165" fill="#3a5a3a" font-family="monospace" font-size="7" text-anchor="middle">WE ARE ANONYMOUS. WE DO NOT FORGET.</text>
    </svg>`;
    $('badgeDisplay').innerHTML = badge;
    addXp(10,'mission');
  });
}

/* ═══════════════════════════════════════════════════════════════
   SHARE EXPLOIT — Copy self-contained prank HTML
   ═══════════════════════════════════════════════════════════════ */

function setupShare() {
  toggleSection('shareToggle','shareBody','shareArrow');
  const grid = $('shareGrid');
  const pranks = [
    { icon:'💀', name:'BSOD', html:`<div style="background:#0078d7;color:#fff;width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe UI,sans-serif;"><div style="font-size:80px">:(</div><div style="font-size:24px;margin:20px">Your PC ran into a problem</div><div style="opacity:.7">Stop code: PRANK_DETECTED</div></div>` },
    { icon:'🦠', name:'VIRUS', html:`<div style="background:#1a0000;color:#ff0033;width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:monospace;"><div style="font-size:80px">☠️</div><div style="font-size:28px;margin:20px">SYSTEM COMPROMISED</div><div style="opacity:.6">Just kidding 😄</div></div>` },
    { icon:'🎭', name:'ANON', html:`<div style="background:#000;color:#00ff41;width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:monospace;"><div style="font-size:40px;letter-spacing:.1em;">WE ARE ANONYMOUS</div><div style="opacity:.6;margin-top:12px">Expect us.</div></div>` },
    { icon:'📷', name:'CAM', html:`<div style="background:#000;color:#00ff41;width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:monospace;"><div style="color:#ff0033;font-size:20px">● REC</div><div style="font-size:30px;margin:20px">CAMERA ACCESSED</div><div style="opacity:.4">TARGET IDENTIFIED</div><div style="opacity:.3;margin-top:30px">😄 Just a prank!</div></div>` },
  ];
  pranks.forEach(p => {
    const card = document.createElement('div');
    card.className = 'share-card';
    card.innerHTML = `<div class="share-icon">${p.icon}</div><div class="share-name">${p.name}</div>`;
    card.addEventListener('click', async () => {
      const full = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>PRANK</title><style>*{margin:0;padding:0}</style></head><body>${p.html}<script>document.body.onclick=()=>document.body.innerHTML='<div style="background:#000;color:#0f0;height:100vh;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:20px">😄 PRANKED by HACKTIVIST KIDS!</div>';<\/script></body></html>`;
      try { await navigator.clipboard.writeText(full); card.querySelector('.share-name').textContent='COPIED!'; setTimeout(()=>card.querySelector('.share-name').textContent=p.name,1500); } catch(e){}
    });
    grid.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════════════
   ACHIEVEMENT SYSTEM — 20 badges
   ═══════════════════════════════════════════════════════════════ */

const ACHIEVEMENTS = [
  { id:'first_hack', icon:'💻', name:'FIRST HACK', desc:'Generate first mission', check:()=>agentData.missions>=1 },
  { id:'5_missions', icon:'🎯', name:'OPERATIVE', desc:'Complete 5 missions', check:()=>agentData.missions>=5 },
  { id:'10_missions', icon:'🎖️', name:'VETERAN', desc:'Complete 10 missions', check:()=>agentData.missions>=10 },
  { id:'first_exploit', icon:'💀', name:'FIRST BLOOD', desc:'Launch first exploit', check:()=>agentData.exploits>=1 },
  { id:'5_exploits', icon:'⚡', name:'EXPLOIT KING', desc:'Launch 5 exploits', check:()=>agentData.exploits>=5 },
  { id:'first_encrypt', icon:'🔐', name:'CIPHER INIT', desc:'First encryption', check:()=>agentData.encrypts>=1 },
  { id:'5_encrypts', icon:'🗝️', name:'CRYPTO MASTER', desc:'5 encryptions', check:()=>agentData.encrypts>=5 },
  { id:'100xp', icon:'⭐', name:'RISING STAR', desc:'Reach 100 XP', check:()=>agentData.xp>=100 },
  { id:'500xp', icon:'🌟', name:'BRIGHT STAR', desc:'Reach 500 XP', check:()=>agentData.xp>=500 },
  { id:'1000xp', icon:'💫', name:'SUPERNOVA', desc:'Reach 1000 XP', check:()=>agentData.xp>=1000 },
  { id:'2500xp', icon:'🏆', name:'LEGENDARY', desc:'Reach 2500 XP', check:()=>agentData.xp>=2500 },
  { id:'codename', icon:'🎭', name:'IDENTITY', desc:'Set a codename', check:()=>agentData.codename.length>0 },
  { id:'agent_rank', icon:'🥇', name:'AGENT RANK', desc:'Reach Agent rank', check:()=>agentData.xp>=300 },
  { id:'elite_rank', icon:'🥈', name:'ELITE STATUS', desc:'Reach Elite rank', check:()=>agentData.xp>=1000 },
  { id:'shadow_rank', icon:'🥉', name:'SHADOW OPS', desc:'Reach Shadow rank', check:()=>agentData.xp>=1500 },
  { id:'anony_rank', icon:'👑', name:'ANONY', desc:'Reach max rank', check:()=>agentData.xp>=2500 },
  { id:'all_missions', icon:'🗺️', name:'STRATEGIST', desc:'25+ missions', check:()=>agentData.missions>=25 },
  { id:'all_exploits', icon:'🔥', name:'CHAOS AGENT', desc:'25+ exploits', check:()=>agentData.exploits>=25 },
  { id:'all_encrypts', icon:'🧠', name:'CRYPTOGRAPHER', desc:'25+ encryptions', check:()=>agentData.encrypts>=25 },
  { id:'total_100', icon:'💎', name:'DIAMOND', desc:'100+ total actions', check:()=>(agentData.missions+agentData.exploits+agentData.encrypts)>=100 },
];

function setupAchievements() {
  toggleSection('achieveToggle','achieveBody','achieveArrow');
  renderAchievements();
}

function renderAchievements() {
  const grid = $('achieveGrid');
  if (!grid) return;
  grid.innerHTML = '';
  ACHIEVEMENTS.forEach(a => {
    const unlocked = a.check();
    const card = document.createElement('div');
    card.className = `achieve-card ${unlocked?'unlocked':'locked'}`;
    card.innerHTML = `<div class="achieve-icon">${a.icon}</div><div class="achieve-name">${a.name}</div><div class="achieve-desc">${unlocked?a.desc:'???'}</div>`;
    grid.appendChild(card);
  });
}

// Update achievements when XP changes
const origAddXp = addXp;
addXp = function(amount, type) {
  origAddXp(amount, type);
  renderAchievements();
};

/* ═══════════════════════════════════════════════════════════════
   CUSTOM THEME BUILDER
   ═══════════════════════════════════════════════════════════════ */

function setupThemeBuilder() {
  $('tbApply').addEventListener('click', () => {
    const main = $('tbMain').value;
    const bg = $('tbBg').value;
    const accent = $('tbAccent').value;
    const r = document.documentElement.style;
    r.setProperty('--green', main);
    r.setProperty('--green-dim', main + 'aa');
    r.setProperty('--green-glow', main.replace('#','rgba(') ? `${hexToRgba(main,.15)}` : main);
    r.setProperty('--bg', bg);
    r.setProperty('--cyan', accent);
    r.setProperty('--border', `${hexToRgba(main,.12)}`);
    document.body.style.background = bg;
    try { localStorage.setItem('hacktivist_custom_theme', JSON.stringify({main,bg,accent})); } catch(e){}
  });
  $('tbReset').addEventListener('click', () => {
    const r = document.documentElement.style;
    ['--green','--green-dim','--green-glow','--bg','--cyan','--border'].forEach(p=>r.removeProperty(p));
    document.body.style.background = '';
    try { localStorage.removeItem('hacktivist_custom_theme'); } catch(e){}
  });
  // Load saved custom theme
  try {
    const saved = localStorage.getItem('hacktivist_custom_theme');
    if (saved) { const t = JSON.parse(saved); $('tbMain').value=t.main; $('tbBg').value=t.bg; $('tbAccent').value=t.accent; }
  } catch(e){}
}

function hexToRgba(hex, alpha) {
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ═══════════════════════════════════════════════════════════════
   AMBIENT MODE — Auto-cycling screensaver
   ═══════════════════════════════════════════════════════════════ */

let ambientRunning = false, ambientTimeout = null;

function setupAmbient() {
  $('ambientStart').addEventListener('click', startAmbient);
  $('ambientStop').addEventListener('click', stopAmbient);
}

async function startAmbient() {
  ambientRunning = true;
  const exploits = ['matrix','anony','hack','glitch'];
  let idx = 0;
  async function cycle() {
    if (!ambientRunning) return;
    launchExploit(exploits[idx % exploits.length]);
    idx++;
    ambientTimeout = setTimeout(async () => {
      closeExploit();
      glitchTransition();
      await sleep(500);
      cycle();
    }, 6000);
  }
  cycle();
}

function stopAmbient() {
  ambientRunning = false;
  if (ambientTimeout) { clearTimeout(ambientTimeout); ambientTimeout = null; }
  closeExploit();
}

/* ═══════════════════════════════════════════════════════════════
   VOICE DISGUISER — Real-time mic pitch shift
   ═══════════════════════════════════════════════════════════════ */

let voiceStream=null, voiceSource=null, voicePitch=null;
const VOICE_PRESETS={robot:{pitch:0.5,detune:-1200},alien:{pitch:1.5,detune:800},deep:{pitch:0.7,detune:-600},chipmunk:{pitch:1.8,detune:1200}};

function setupVoice() {
  toggleSection('voiceToggle','voiceBody','voiceArrow');
  let currentPreset='robot';
  document.querySelectorAll('[data-voice]').forEach(b => b.addEventListener('click',()=>{
    document.querySelectorAll('[data-voice]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active'); currentPreset=b.dataset.voice;
    if(voicePitch) { const p=VOICE_PRESETS[currentPreset]; voicePitch.playbackRate.value=p.pitch; }
  }));
  $('voiceStart').addEventListener('click', async ()=>{
    try {
      if(!audioCtx) audioCtx=new(window.AudioContext||window.webkitAudioContext)();
      voiceStream=await navigator.mediaDevices.getUserMedia({audio:true});
      voiceSource=audioCtx.createMediaStreamSource(voiceStream);
      // Use playback rate trick with script processor
      const processor=audioCtx.createScriptProcessor(4096,1,1);
      const p=VOICE_PRESETS[currentPreset];
      let phase=0;
      processor.onaudioprocess=e=>{
        const input=e.inputBuffer.getChannelData(0);
        const output=e.outputBuffer.getChannelData(0);
        const rate=VOICE_PRESETS[currentPreset].pitch;
        for(let i=0;i<output.length;i++){
          phase+=rate; if(phase>=input.length)phase-=input.length;
          const idx=Math.floor(phase)%input.length;
          output[i]=input[idx]*0.8;
        }
      };
      voiceSource.connect(processor); processor.connect(audioCtx.destination);
      $('voiceStart').style.display='none'; $('voiceStop').style.display='';
      $('voiceStatus').textContent='MIC ACTIVE — DISGUISE ON'; $('voiceStatus').classList.add('voice-active');
      addXp(10,'exploit');
    } catch(e) { $('voiceStatus').textContent='MIC ACCESS DENIED'; }
  });
  $('voiceStop').addEventListener('click',()=>{
    if(voiceStream) voiceStream.getTracks().forEach(t=>t.stop());
    voiceStream=null; voiceSource=null;
    $('voiceStart').style.display=''; $('voiceStop').style.display='none';
    $('voiceStatus').textContent='MIC INACTIVE'; $('voiceStatus').classList.remove('voice-active');
  });
}

/* ═══════════════════════════════════════════════════════════════
   WIFI NAME GENERATOR
   ═══════════════════════════════════════════════════════════════ */

const WIFI_NAMES=[
  'FBI_Surveillance_Van_04','NSA_Field_Unit','CIA_Stakeout','Anonymous_HQ','Definitely_Not_A_Spy',
  'Hack_Me_If_You_Can','Your_WiFi_Is_Mine_Now','Pretty_Fly_For_A_WiFi','Wu_Tang_LAN','LAN_Before_Time',
  'The_Promised_LAN','Bill_Wi_The_Science_Fi','Drop_It_Like_Its_Hotspot','Get_Your_Own_WiFi',
  'Loading...','Virus_Detected_Click_Here','Mom_Use_This_One','Tell_My_WiFi_Love_Her',
  'Nacho_WiFi','It_Hurts_When_IP','404_Network_Unavailable','Hide_Yo_Kids_Hide_Yo_WiFi',
  'Searching...','Anonymous_Proxy_Node','Witness_Protection_WiFi','MI6_Secure_Network',
  'Totally_Not_Hacked','SkyNet_Global_Defense','The_Dark_Web_Portal','Batcave_Network',
];

function setupWifi() {
  toggleSection('wifiToggle','wifiBody','wifiArrow');
  $('wifiGenerate').addEventListener('click',()=>{
    const display=$('wifiDisplay');
    const shuffled=[...WIFI_NAMES].sort(()=>Math.random()-.5).slice(0,8);
    display.innerHTML=shuffled.map(n=>{
      const signal=Math.floor(Math.random()*4)+1;
      const bars='█'.repeat(signal)+'░'.repeat(4-signal);
      const locked=Math.random()>.3?'🔒':'🔓';
      return `<div class="wifi-name"><span>${n}</span><span><span class="wifi-signal">${bars}</span> <span class="wifi-lock">${locked}</span></span></div>`;
    }).join('');
    addXp(3,'exploit');
  });
}

/* ═══════════════════════════════════════════════════════════════
   SOCIAL ENGINEER TRAINER — Phishing quiz
   ═══════════════════════════════════════════════════════════════ */

const PHISH_EMAILS=[
  {from:'support@g00gle.com',subject:'Your account has been compromised!',body:'Click here immediately to reset your password or your account will be deleted in 24 hours. http://g00gle-security.tk/reset',scam:true,explain:'Fake domain (g00gle with zeros), urgency tactics, suspicious .tk link'},
  {from:'hr@yourcompany.com',subject:'Updated holiday schedule',body:'Hi team, please find the updated holiday schedule for Q2 attached. Let me know if you have questions.',scam:false,explain:'Internal domain, no urgency, no suspicious links, normal request'},
  {from:'prize@amazzon-win.com',subject:'🎉 You won a $1000 gift card!',body:'Congratulations! Click below to claim your Amazon gift card. Offer expires in 1 hour! Enter credit card for shipping.',scam:true,explain:'Misspelled domain (amazzon), too-good-to-be-true prize, asks for credit card'},
  {from:'principal@school.edu',subject:'Snow day tomorrow',body:'Due to weather conditions, school will be closed tomorrow. Stay safe everyone!',scam:false,explain:'Legitimate school domain, simple announcement, no links or requests'},
  {from:'security@paypa1.com',subject:'Unusual login detected',body:'We noticed unusual activity. Verify your identity now: http://paypa1-secure.info/verify. Failure to respond will result in account suspension.',scam:true,explain:'Number 1 instead of letter l (paypa1), threatening language, suspicious .info domain'},
  {from:'friend@gmail.com',subject:'Check out these vacation photos!',body:'Hey! I just got back from Hawaii. Here are the photos I promised: https://photos.google.com/share/abc123',scam:false,explain:'Normal Gmail, personal context, legitimate Google Photos link'},
  {from:'admin@microsft.com',subject:'Windows license expired',body:'Your Windows license has expired. Download the renewal tool immediately or lose access to your files: http://win-renew.xyz',scam:true,explain:'Misspelled Microsoft, scare tactic about losing files, suspicious .xyz domain'},
  {from:'boss@company.com',subject:'Need gift cards ASAP',body:'Hey, I need you to buy 5 Google Play gift cards ($100 each) right now. Scratch them and send me the codes. Don\'t tell anyone.',scam:true,explain:'Classic gift card scam — even if the email looks real, the request is suspicious. Always verify in person.'},
];

let phishIdx=0, phishCorrect=0, phishTotal=0, currentPhish=null;

function setupPhish() {
  toggleSection('phishToggle','phishBody','phishArrow');
  loadPhish();
  $('phishLegit').addEventListener('click',()=>answerPhish(false));
  $('phishScam').addEventListener('click',()=>answerPhish(true));
}

function loadPhish() {
  currentPhish=PHISH_EMAILS[phishIdx%PHISH_EMAILS.length];
  $('phishCard').innerHTML=`<div class="phish-from">From: ${currentPhish.from}</div><div class="phish-subject">${currentPhish.subject}</div><div class="phish-body">${currentPhish.body}</div>`;
  $('phishResult').innerHTML=''; $('phishResult').className='phish-result';
}

function answerPhish(saidScam) {
  const correct=saidScam===currentPhish.scam;
  phishTotal++; if(correct)phishCorrect++;
  const r=$('phishResult');
  r.className=`phish-result ${correct?'correct':'wrong'}`;
  r.innerHTML=`${correct?'✓ CORRECT!':'✗ WRONG!'} — ${currentPhish.explain}`;
  $('phishScore').textContent=`Score: ${phishCorrect}/${phishTotal}`;
  addXp(correct?10:2,'encrypt');
  phishIdx++;
  setTimeout(loadPhish,3000);
}

/* ═══════════════════════════════════════════════════════════════
   MULTI-AGENT CHAT — Fake group chat with bot agents
   ═══════════════════════════════════════════════════════════════ */

const CHAT_AGENTS=[
  {name:'GHOST',cls:'agent1',msgs:['Anyone got the intel?','Target located. Moving in.','The firewall is down. Proceed.','Roger that.','Copy. Standing by.','The package is secure.','Going dark.']},
  {name:'CIPHER',cls:'agent2',msgs:['Encrypted comms only.','I\'ve decoded the signal.','New orders from HQ incoming.','Watch your six.','Affirmative.','The channel is secure.','All clear.']},
  {name:'SHADOW',cls:'agent3',msgs:['I\'m in position.','No movement on target.','Initiating phase two.','Understood.','The clock is ticking.','Extraction ready.','Eyes on the prize.']},
];

let chatBotInterval=null;

function setupChat() {
  toggleSection('chatToggle','chatBody','chatArrow');
  const input=$('chatInput'), window_=$('chatWindow');

  input.addEventListener('keydown',e=>{
    if(e.key!=='Enter'||!input.value.trim())return;
    addChatMsg('YOU','you',input.value.trim());
    input.value='';
    // Trigger 1-3 bot responses
    const count=1+Math.floor(Math.random()*2);
    for(let i=0;i<count;i++){
      setTimeout(()=>{
        const agent=CHAT_AGENTS[Math.floor(Math.random()*CHAT_AGENTS.length)];
        const msg=agent.msgs[Math.floor(Math.random()*agent.msgs.length)];
        addChatMsg(agent.name,agent.cls,msg);
      },(i+1)*(800+Math.random()*1500));
    }
    addXp(2,'mission');
  });

  // Random bot chatter
  chatBotInterval=setInterval(()=>{
    if($('chatBody').style.display==='none')return;
    const agent=CHAT_AGENTS[Math.floor(Math.random()*CHAT_AGENTS.length)];
    const msg=agent.msgs[Math.floor(Math.random()*agent.msgs.length)];
    addChatMsg(agent.name,agent.cls,msg);
  },15000);
}

function addChatMsg(name,cls,text) {
  const w=$('chatWindow');
  const div=document.createElement('div');
  div.className='chat-msg';
  div.innerHTML=`<span class="chat-name ${cls}">[${name}]</span><span class="chat-text">${text}</span>`;
  w.appendChild(div);
  w.scrollTop=w.scrollHeight;
}

/* ═══════════════════════════════════════════════════════════════
   DEAD DROP — Self-decoding URL
   ═══════════════════════════════════════════════════════════════ */

function setupDeadDrop() {
  toggleSection('deadDropToggle','deadDropBody','deadDropArrow');
  $('deadDropCreate').addEventListener('click',()=>{
    const msg=$('deadDropInput').value.trim();
    if(!msg)return;
    const encoded=btoa(encodeURIComponent(msg));
    // Create a data URI that decodes the message
    const html=`data:text/html,<body style="background:%230a0a0a;color:%2300ff41;font-family:monospace;display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;"><div><h2>☠ DEAD DROP</h2><p>${encodeURIComponent(msg)}</p><p style="opacity:.3;font-size:10px">This message was sent via HACKTIVIST KIDS</p></div></body>`;
    $('deadDropOutput').innerHTML=`<span class="crypto-label">DEAD DROP URL (copy &amp; share):</span><div class="dead-drop-url" onclick="navigator.clipboard.writeText(this.textContent)">${html}</div><div style="font-size:9px;color:var(--muted);margin-top:6px;">Click the URL to copy. Open in browser to reveal message.</div>`;
    addXp(10,'encrypt');
  });
}

/* ═══════════════════════════════════════════════════════════════
   WANTED POSTER — Generate Anonymous wanted poster
   ═══════════════════════════════════════════════════════════════ */

function setupWanted() {
  toggleSection('wantedToggle','wantedBody','wantedArrow');
  $('wantedGenerate').addEventListener('click',()=>{
    const name=$('wantedName').value.trim()||'UNKNOWN';
    const crime=$('wantedCrime').value.trim()||'Being too boring';
    const reward=Math.floor(Math.random()*9000+1000);
    const maskSvg=selectedMask?selectedMask.svg():MASKS[0].svg();
    $('wantedDisplay').innerHTML=`<div class="wanted-poster">
      <div class="wanted-header">⚠ WANTED ⚠</div>
      <div class="wanted-mask">${maskSvg}</div>
      <div class="wanted-name">${name.toUpperCase()}</div>
      <div class="wanted-crime">CRIME: ${crime}</div>
      <div class="wanted-reward">REWARD: ${reward} CRYPTO-COINS</div>
      <div style="font-size:8px;color:var(--muted);margin-top:10px;">BY ORDER OF ANONYMOUS</div>
    </div>`;
    addXp(10,'mission');
  });
}

/* ═══════════════════════════════════════════════════════════════
   SELF-DESTRUCT MESSAGE
   ═══════════════════════════════════════════════════════════════ */

let sdTimerVal=5;

function setupSelfDestruct() {
  toggleSection('selfDestructToggle','selfDestructBody','selfDestructArrow');
  document.querySelectorAll('[data-timer]').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('[data-timer]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active'); sdTimerVal=parseInt(b.dataset.timer);
  }));
  $('selfDestructLaunch').addEventListener('click',launchSelfDestruct);
}

async function launchSelfDestruct() {
  const msg=$('selfDestructInput').value.trim();
  if(!msg)return;
  const overlay=$('sdOverlay');
  overlay.style.display='flex';
  overlay.innerHTML=`<div class="sd-message" id="sdMsg"></div><div class="sd-timer" id="sdTimer">${sdTimerVal}s</div><div class="sd-smoke" id="sdSmoke"></div>`;

  // Typewriter
  const msgEl=$('sdMsg');
  for(const ch of msg){ msgEl.textContent+=ch; await sleep(50); }

  // Countdown
  const timerEl=$('sdTimer');
  for(let i=sdTimerVal;i>0;i--){ timerEl.textContent=i+'s'; await sleep(1000); }

  // Self-destruct animation
  timerEl.textContent='DESTROYING...';
  // Smoke particles
  const smoke=$('sdSmoke');
  for(let i=0;i<20;i++){
    const p=document.createElement('div');
    p.style.cssText=`position:absolute;width:${20+Math.random()*40}px;height:${20+Math.random()*40}px;border-radius:50%;background:rgba(100,100,100,.4);left:${Math.random()*100}%;bottom:${Math.random()*30}%;animation:smokeUp ${1+Math.random()*2}s ease-out forwards;`;
    smoke.appendChild(p);
  }
  await sleep(500);
  msgEl.style.transition='opacity .5s,filter .5s';
  msgEl.style.opacity='0'; msgEl.style.filter='blur(10px)';
  await sleep(1500);
  overlay.innerHTML=`<div style="font-family:var(--font-title);font-size:20px;color:var(--red);letter-spacing:.15em;">MESSAGE DESTROYED</div><div style="font-size:11px;color:var(--muted);margin-top:12px;">Click to close</div>`;
  overlay.addEventListener('click',()=>{overlay.style.display='none';},{once:true});
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){overlay.style.display='none';document.removeEventListener('keydown',esc);}});
  addXp(15,'mission');
}

/* ═══════════════════════════════════════════════════════════════
   FINGERPRINT SCANNER
   ═══════════════════════════════════════════════════════════════ */

function setupFingerprint() {
  toggleSection('fpToggle','fpBody','fpArrow');
  const pad=$('fpPad'), ring=$('fpRing'), progress=$('fpProgress'), result=$('fpResult');
  let holding=false, holdTime=0, holdInterval=null;

  const start=()=>{
    holding=true; holdTime=0; result.innerHTML='';
    ring.style.cssText='opacity:1;animation:crosshairSpin 2s linear infinite;border-color:var(--green);';
    holdInterval=setInterval(()=>{
      holdTime+=50; const pct=Math.min(holdTime/2000*100,100);
      progress.style.height=pct+'%';
      if(holdTime>=2000){ clearInterval(holdInterval); holding=false; completeScan(); }
    },50);
  };
  const stop=()=>{
    holding=false; if(holdInterval)clearInterval(holdInterval);
    ring.style.opacity='0'; progress.style.height='0';
    if(holdTime<2000&&holdTime>0) result.innerHTML='<span style="color:var(--red);">SCAN INCOMPLETE — Hold longer</span>';
  };
  const completeScan=()=>{
    ring.style.borderColor='var(--green)';
    progress.style.height='0'; progress.style.background='rgba(0,255,65,.2)';
    const id='FP-'+Math.random().toString(36).substr(2,8).toUpperCase();
    const match=Math.random()>.3;
    result.innerHTML=match
      ? `<span style="color:var(--green);">✓ IDENTITY CONFIRMED</span><br><span style="color:var(--muted);font-size:10px;">Print ID: ${id}<br>Agent: ${agentData.codename||'UNKNOWN'}<br>Clearance: GRANTED</span>`
      : `<span style="color:var(--red);">✗ IDENTITY UNKNOWN</span><br><span style="color:var(--muted);font-size:10px;">Print ID: ${id}<br>NO MATCH IN DATABASE</span>`;
    addXp(5,'exploit');
  };

  pad.addEventListener('mousedown',start); pad.addEventListener('touchstart',e=>{e.preventDefault();start();});
  pad.addEventListener('mouseup',stop); pad.addEventListener('mouseleave',stop);
  pad.addEventListener('touchend',stop); pad.addEventListener('touchcancel',stop);
}

/* ═══════════════════════════════════════════════════════════════
   SATELLITE VIEW — Fake zoom-in animation
   ═══════════════════════════════════════════════════════════════ */

function setupSatellite() {
  toggleSection('satToggle','satBody','satArrow');
  $('satLaunch').addEventListener('click',launchSatellite);
}

async function launchSatellite() {
  const target=$('satTarget').value.trim()||'Unknown Target';
  const overlay=$('satOverlay');
  overlay.style.display='flex';
  const lat=(Math.random()*180-90).toFixed(4);
  const lng=(Math.random()*360-180).toFixed(4);

  overlay.innerHTML=`<div class="sat-grid"></div><div class="sat-info" id="satInfo">SATELLITE FEED — LIVE<br>TARGET: ${target}</div><div class="sat-coords" id="satCoords"></div><div class="sat-crosshair"></div><div class="sat-zoom" id="satZoomText"></div>`;

  const zoomLevels=['ORBITAL','CONTINENTAL','REGIONAL','CITY','STREET','TARGET'];
  const coordsEl=$('satCoords'), zoomEl=$('satZoomText');

  for(let i=0;i<zoomLevels.length;i++){
    zoomEl.textContent=zoomLevels[i];
    zoomEl.style.opacity='1';
    coordsEl.innerHTML=`LAT: ${lat}<br>LNG: ${lng}<br>ALT: ${(35000/(i+1)).toFixed(0)}km<br>ZOOM: ${i+1}x`;
    await sleep(200);
    zoomEl.style.transition='opacity .8s,transform .8s';
    zoomEl.style.opacity='0'; zoomEl.style.transform='scale(3)';
    await sleep(1000);
    zoomEl.style.transition='none'; zoomEl.style.transform='scale(1)';
    document.body.classList.add('screen-shake');
    setTimeout(()=>document.body.classList.remove('screen-shake'),300);
  }

  zoomEl.style.opacity='1'; zoomEl.textContent='🎯 LOCKED';
  zoomEl.style.color='#ff0033'; zoomEl.style.fontSize='40px';
  await sleep(2000);

  const close=()=>{overlay.style.display='none';};
  overlay.addEventListener('click',close,{once:true});
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}});
  addXp(15,'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   DARK WEB SIMULATOR — Fake .onion browser
   ═══════════════════════════════════════════════════════════════ */

const DW_SITES={
  'an0nym0us.onion':{title:'ANONYMOUS HQ',content:`
<pre class="dw-ascii">
   ▄▀▀▀▀▄  ▄▀▀▀▀▄
  █ ▄▄▄▄ ██ ▄▄▄▄ █
  █ ████ ██ ████ █
  ▀▄▄▄▄▀  ▀▄▄▄▄▀
</pre>
<p style="color:var(--green);text-align:center;font-size:14px;">WELCOME TO ANONYMOUS HQ</p>
<p style="color:var(--muted);text-align:center;">We are Legion. We do not forgive.<br>We do not forget. Expect us.</p>
<p style="color:var(--green-dim);margin-top:16px;">> Active agents online: ${Math.floor(Math.random()*9000+1000)}</p>
<p style="color:var(--green-dim);">> Operations in progress: ${Math.floor(Math.random()*50+10)}</p>
<p style="color:var(--green-dim);">> Global pranks deployed: ${Math.floor(Math.random()*999999)}</p>`},

  'darkmarket.onion':{title:'DARK MARKET',content:`<p style="color:var(--red);font-size:14px;">⚠ DARK MARKET ⚠</p>
<p style="color:var(--muted);margin-top:8px;">LISTINGS:</p>
<p style="color:var(--green);">> Invisible Ink Pen .............. 2 coins</p>
<p style="color:var(--green);">> Whoopee Cushion (Pro Grade) .... 5 coins</p>
<p style="color:var(--green);">> Fake Parking Ticket Pack ...... 3 coins</p>
<p style="color:var(--green);">> Voice Changer Megaphone ....... 8 coins</p>
<p style="color:var(--green);">> Exploding Pen (Confetti) ...... 4 coins</p>
<p style="color:var(--muted);margin-top:10px;font-size:10px;">All items are joke/prank products. No real contraband.</p>`},

  'secret-wiki.onion':{title:'SECRET WIKI',content:`<p style="color:var(--cyan);font-size:14px;">📖 THE SECRET WIKI</p>
<p style="color:var(--muted);margin-top:8px;">Classified knowledge:</p>
<p style="color:var(--green);">> <a style="color:var(--cyan);" href="#">History of Anonymous</a></p>
<p style="color:var(--green);">> <a style="color:var(--cyan);" href="#">Beginner's Guide to Pranking</a></p>
<p style="color:var(--green);">> <a style="color:var(--cyan);" href="#">Cryptography 101</a></p>
<p style="color:var(--green);">> <a style="color:var(--cyan);" href="#">Famous Hackers in History</a></p>
<p style="color:var(--green);">> <a style="color:var(--cyan);" href="#">How the Internet Works</a></p>
<p style="color:var(--muted);margin-top:10px;font-size:10px;">Educational content only.</p>`},
};

function setupDarkWeb() {
  toggleSection('darkwebToggle','darkwebBody','darkwebArrow');
  $('dwGo').addEventListener('click',()=>{
    const url=$('dwUrl').value.trim().replace('http://','').replace('https://','');
    const browser=$('dwBrowser');
    browser.innerHTML='<div class="net-scanning">Connecting through TOR network...</div>';
    setTimeout(()=>{
      browser.innerHTML='<div class="net-scanning">Routing through 3 relays...</div>';
      setTimeout(()=>{
        const site=DW_SITES[url];
        if(site){
          browser.innerHTML=site.content;
        } else {
          browser.innerHTML=`<p style="color:var(--red);">ERROR 404: Site not found on the dark web.</p>
<p style="color:var(--muted);margin-top:8px;">Try one of these:</p>
<p style="color:var(--cyan);cursor:pointer;" onclick="document.getElementById('dwUrl').value='http://an0nym0us.onion'">an0nym0us.onion</p>
<p style="color:var(--cyan);cursor:pointer;" onclick="document.getElementById('dwUrl').value='http://darkmarket.onion'">darkmarket.onion</p>
<p style="color:var(--cyan);cursor:pointer;" onclick="document.getElementById('dwUrl').value='http://secret-wiki.onion'">secret-wiki.onion</p>`;
        }
        addXp(5,'exploit');
      },1500);
    },1000);
  });
}

/* ═══════════════════════════════════════════════════════════════
   FAKE DESKTOP — Windows/Mac clone
   ═══════════════════════════════════════════════════════════════ */

function setupFakeDesktop() {
  toggleSection('fakeDesktopToggle','fakeDesktopBody','fakeDesktopArrow');
  $('fakeWin').addEventListener('click',()=>launchFakeDesktop('win'));
  $('fakeMac').addEventListener('click',()=>launchFakeDesktop('mac'));
}

function launchFakeDesktop(type) {
  const overlay=$('fakeDesktopOverlay');
  const content=$('fakeDesktopContent');
  overlay.style.display='flex';

  if(type==='win'){
    const time=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    content.innerHTML=`<div class="fake-win">
      <div class="fake-win-icons">
        ${['📁 Documents','🌐 Browser','🎮 Games','📧 Email','📝 Notes','🗑️ Recycle','💻 Terminal','📊 Excel'].map(i=>`<div class="fake-win-icon"><div class="fake-win-icon-img">${i.split(' ')[0]}</div><div class="fake-win-icon-name">${i.split(' ')[1]}</div></div>`).join('')}
      </div>
      <div class="fake-win-taskbar"><button class="fake-win-start">⊞ Start</button><div class="fake-win-time">${time}</div></div>
    </div>`;
  } else {
    content.innerHTML=`<div class="fake-mac">
      <div class="fake-mac-menubar"><span style="font-weight:bold;"></span><span>Finder</span><span>File</span><span>Edit</span><span>View</span><span style="margin-left:auto;">${new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</span></div>
      <div class="fake-mac-dock">
        ${['📁','🌐','📧','💬','📝','🎵','📷','⚙️','🗑️'].map(i=>`<div class="fake-mac-dock-icon">${i}</div>`).join('')}
      </div>
    </div>`;
  }

  // Glitch after 5s
  setTimeout(()=>{
    if(overlay.style.display==='none')return;
    content.style.animation='glitchFlash .3s ease 3';
    setTimeout(()=>{
      content.innerHTML=`<div style="background:#000;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;">
        <div style="font-size:60px;margin-bottom:20px;">🎭</div>
        <div style="font-family:monospace;font-size:20px;color:#00ff41;">SYSTEM COMPROMISED</div>
        <div style="font-family:monospace;font-size:14px;color:#00ff41;opacity:.6;margin-top:8px;">by HACKTIVIST KIDS</div>
      </div>`;
    },1000);
  },5000);

  const close=()=>{overlay.style.display='none';content.innerHTML='';};
  overlay.addEventListener('click',close);
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}});
  addXp(15,'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   HACK THE PLANET — Interactive attack map
   ═══════════════════════════════════════════════════════════════ */

function setupPlanet() {
  toggleSection('planetToggle','planetBody','planetArrow');
  const canvas=$('planetCanvas'); if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let attacks=0, nodes=[];
  // Simple world outline dots
  const worldPoints=[];
  for(let i=0;i<200;i++) worldPoints.push({x:Math.random()*680,y:60+Math.random()*220});

  function drawMap(){
    ctx.fillStyle='rgba(0,0,0,.1)';ctx.fillRect(0,0,680,340);
    // World dots
    ctx.fillStyle='rgba(0,255,65,.15)';
    worldPoints.forEach(p=>{ctx.fillRect(p.x,p.y,2,2);});
    // Grid
    ctx.strokeStyle='rgba(0,255,65,.03)';ctx.lineWidth=.5;
    for(let x=0;x<680;x+=34){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,340);ctx.stroke();}
    for(let y=0;y<340;y+=34){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(680,y);ctx.stroke();}
    // Attack lines
    nodes.forEach(n=>{
      n.life-=0.01;
      if(n.life<=0)return;
      ctx.beginPath();ctx.moveTo(n.x1,n.y1);ctx.lineTo(n.x2,n.y2);
      ctx.strokeStyle=`rgba(255,0,51,${n.life})`;ctx.lineWidth=1;ctx.stroke();
      // Pulse at target
      ctx.beginPath();ctx.arc(n.x2,n.y2,4*n.life,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,0,51,${n.life})`;ctx.fill();
      // Source dot
      ctx.beginPath();ctx.arc(n.x1,n.y1,2,0,Math.PI*2);
      ctx.fillStyle=`rgba(0,255,65,${n.life})`;ctx.fill();
    });
    nodes=nodes.filter(n=>n.life>0);
    // Random new attack
    if(Math.random()>.92){
      nodes.push({x1:Math.random()*680,y1:60+Math.random()*220,x2:Math.random()*680,y2:60+Math.random()*220,life:1});
      attacks++;
      $('planetStats').textContent=`ATTACKS: ${attacks} | ACTIVE NODES: ${nodes.length}`;
    }
    requestAnimationFrame(drawMap);
  }
  drawMap();
}

/* ═══════════════════════════════════════════════════════════════
   SECURITY CAM GRID — 4-camera CCTV
   ═══════════════════════════════════════════════════════════════ */

function setupCCTV() {
  toggleSection('cctvToggle','cctvBody','cctvArrow');
  $('cctvLaunch').addEventListener('click',launchCCTV);
}

function launchCCTV() {
  const overlay=$('exploitOverlay');
  const content=$('exploitContent');
  overlay.style.display='flex';
  const labels=['FRONT DOOR','PARKING LOT','SERVER ROOM','HALLWAY B'];
  content.innerHTML=`<div class="cctv-grid">${labels.map((l,i)=>`<div class="cctv-feed"><canvas id="cctvCam${i}" width="340" height="170"></canvas><div class="cctv-label">CAM ${i+1} — ${l}</div><div class="cctv-rec">● REC</div><div class="cctv-time" id="cctvTime${i}"></div></div>`).join('')}</div>`;
  const intervals=[];
  for(let i=0;i<4;i++){
    const c=document.getElementById('cctvCam'+i);
    if(!c)continue;
    const ctx=c.getContext('2d');
    intervals.push(setInterval(()=>{
      const img=ctx.createImageData(340,170);
      for(let j=0;j<img.data.length;j+=4){
        const v=Math.random()*30;
        img.data[j]=v*.3;img.data[j+1]=v*(i===2?.8:.4);img.data[j+2]=v*.2;img.data[j+3]=255;
      }
      ctx.putImageData(img,0,0);
      // Occasional movement simulation
      if(Math.random()>.95){ctx.fillStyle='rgba(0,255,65,.1)';ctx.fillRect(Math.random()*300,Math.random()*140,40,60);}
      const t=document.getElementById('cctvTime'+i);
      if(t)t.textContent=new Date().toLocaleTimeString();
    },100));
  }
  const close=()=>{overlay.style.display='none';content.innerHTML='';intervals.forEach(clearInterval);};
  overlay.addEventListener('click',close,{once:true});
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}});
  addXp(15,'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   DRONE CONTROL — Fake UAV simulator
   ═══════════════════════════════════════════════════════════════ */

function setupDrone() {
  toggleSection('droneToggle','droneBody','droneArrow');
  $('droneLaunch').addEventListener('click',launchDrone);
}

function launchDrone() {
  const overlay=$('exploitOverlay');
  const content=$('exploitContent');
  overlay.style.display='flex';
  let alt=50,heading=0,speed=0,lat=34.0522,lng=-118.2437;
  content.innerHTML=`<div class="drone-hud">
    <div class="drone-cam"><canvas id="droneCamCanvas"></canvas></div>
    <div class="drone-overlay">
      <div class="drone-crosshair"></div>
      <div class="drone-stats" id="droneStats"></div>
      <div class="drone-alt"><div class="drone-alt-fill" id="droneAlt"></div></div>
      <div class="drone-compass" id="droneCompass">N</div>
      <div class="drone-controls">W/S: altitude<br>A/D: rotate<br>SPACE: boost</div>
    </div>
  </div>`;
  const cam=document.getElementById('droneCamCanvas');
  if(cam){cam.width=window.innerWidth;cam.height=window.innerHeight;}
  const ctx=cam?cam.getContext('2d'):null;
  const dirs=['N','NE','E','SE','S','SW','W','NW'];
  const droneInt=setInterval(()=>{
    if(!ctx)return;
    // Terrain noise
    const img=ctx.createImageData(cam.width,cam.height);
    for(let j=0;j<img.data.length;j+=4){const v=20+Math.random()*15;img.data[j]=v*.2;img.data[j+1]=v*.6;img.data[j+2]=v*.15;img.data[j+3]=255;}
    ctx.putImageData(img,0,0);
    // Grid overlay
    ctx.strokeStyle='rgba(0,255,65,.05)';
    for(let x=0;x<cam.width;x+=50){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,cam.height);ctx.stroke();}
    heading=(heading+speed)%360; lat+=(Math.random()-.5)*.001; lng+=(Math.random()-.5)*.001;
    const stats=$('droneStats');
    if(stats)stats.innerHTML=`ALT: ${alt}m<br>HDG: ${heading.toFixed(0)}°<br>SPD: ${speed.toFixed(1)}m/s<br>LAT: ${lat.toFixed(4)}<br>LNG: ${lng.toFixed(4)}<br>FUEL: ${Math.max(0,100-Math.floor(Math.random()*.1)).toFixed(0)}%<br>GPS: LOCKED`;
    const altEl=$('droneAlt');if(altEl)altEl.style.height=Math.min(alt/2,100)+'%';
    const comp=$('droneCompass');if(comp)comp.textContent=dirs[Math.floor(heading/45)%8];
  },100);
  const keyHandler=(e)=>{
    if(e.key==='w')alt=Math.min(alt+5,200);
    if(e.key==='s')alt=Math.max(alt-5,10);
    if(e.key==='a')heading-=10;
    if(e.key==='d')heading+=10;
    if(e.key===' ')speed=Math.min(speed+2,30);
  };
  document.addEventListener('keydown',keyHandler);
  const close=()=>{overlay.style.display='none';content.innerHTML='';clearInterval(droneInt);document.removeEventListener('keydown',keyHandler);};
  overlay.addEventListener('click',close,{once:true});
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}});
  addXp(20,'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   FACE GLITCH — Webcam with distortion
   ═══════════════════════════════════════════════════════════════ */

function setupFaceGlitch() {
  toggleSection('faceToggle','faceBody','faceArrow');
  $('faceLaunch').addEventListener('click',launchFaceGlitch);
}

async function launchFaceGlitch() {
  const overlay=$('exploitOverlay');
  const content=$('exploitContent');
  overlay.style.display='flex';
  try {
    const stream=await navigator.mediaDevices.getUserMedia({video:true});
    const video=document.createElement('video');
    video.srcObject=stream; video.autoplay=true; video.playsInline=true;
    const canvas=document.createElement('canvas');
    content.innerHTML='';content.appendChild(canvas);
    video.onloadeddata=()=>{
      canvas.width=video.videoWidth||640;canvas.height=video.videoHeight||480;
      canvas.style.cssText='width:100%;height:100%;object-fit:cover;';
      const ctx=canvas.getContext('2d');
      const faceInt=setInterval(()=>{
        ctx.drawImage(video,0,0,canvas.width,canvas.height);
        // Glitch effects
        if(Math.random()>.7){
          const y=Math.random()*canvas.height,h=10+Math.random()*30;
          const strip=ctx.getImageData(0,y,canvas.width,h);
          ctx.putImageData(strip,Math.random()*40-20,y+Math.random()*10-5);
        }
        // RGB shift
        if(Math.random()>.8){
          ctx.globalCompositeOperation='screen';
          ctx.fillStyle='rgba(255,0,0,.05)';ctx.fillRect(3,0,canvas.width,canvas.height);
          ctx.fillStyle='rgba(0,0,255,.05)';ctx.fillRect(-3,0,canvas.width,canvas.height);
          ctx.globalCompositeOperation='source-over';
        }
        // Mask overlay hint
        if(Math.random()>.95){
          ctx.fillStyle='rgba(0,255,65,.1)';
          ctx.font='40px monospace';ctx.fillText('🎭',canvas.width/2-20,canvas.height/2);
        }
        // Scanlines
        ctx.fillStyle='rgba(0,0,0,.03)';
        for(let y=0;y<canvas.height;y+=2)ctx.fillRect(0,y,canvas.width,1);
      },33);
      const close=()=>{overlay.style.display='none';content.innerHTML='';clearInterval(faceInt);stream.getTracks().forEach(t=>t.stop());};
      overlay.addEventListener('click',close,{once:true});
      document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}});
    };
    addXp(20,'exploit');
  } catch(e) {
    content.innerHTML=`<div style="color:var(--red);font-family:var(--font-mono);text-align:center;">CAMERA ACCESS DENIED<br><span style="color:var(--muted);font-size:12px;">Enable camera permissions to use Face Glitch</span></div>`;
    overlay.addEventListener('click',()=>{overlay.style.display='none';},{once:true});
  }
}

/* ═══════════════════════════════════════════════════════════════
   DEAD MAN'S SWITCH
   ═══════════════════════════════════════════════════════════════ */

let dmsArmed=false, dmsTimer=null, dmsTimeLeft=60;

function setupDeadSwitch() {
  toggleSection('dmsToggle','dmsBody','dmsArrow');
  $('dmsArm').addEventListener('click',()=>{
    dmsArmed=true; dmsTimeLeft=60;
    $('dmsStatus').textContent='SWITCH ARMED — CLICK ANYWHERE TO RESET';
    $('dmsStatus').style.color='var(--red)';
    dmsTimer=setInterval(()=>{
      dmsTimeLeft--;
      $('dmsFill').style.width=(dmsTimeLeft/60*100)+'%';
      $('dmsFill').style.background=dmsTimeLeft>20?'var(--green)':dmsTimeLeft>10?'#fbbf24':'#ff0033';
      if(dmsTimeLeft<=0){
        clearInterval(dmsTimer);
        const exploits=['bsod','virus','matrix','anony'];
        launchExploit(exploits[Math.floor(Math.random()*exploits.length)]);
        dmsArmed=false;
        $('dmsStatus').textContent='SWITCH TRIGGERED — EXPLOIT DEPLOYED';
      }
    },1000);
    document.addEventListener('click',resetDms);
  });
  $('dmsDisarm').addEventListener('click',()=>{
    dmsArmed=false; if(dmsTimer)clearInterval(dmsTimer);
    $('dmsStatus').textContent='SWITCH DISARMED'; $('dmsStatus').style.color='var(--muted)';
    $('dmsFill').style.width='100%'; $('dmsFill').style.background='var(--green)';
    document.removeEventListener('click',resetDms);
  });
}

function resetDms(){if(dmsArmed){dmsTimeLeft=60;$('dmsFill').style.width='100%';$('dmsFill').style.background='var(--green)';}}

/* ═══════════════════════════════════════════════════════════════
   PRANK BATTLE — 2-player exploit showdown
   ═══════════════════════════════════════════════════════════════ */

const BATTLE_CARDS=[
  {icon:'💀',name:'BSOD',power:7},{icon:'🟢',name:'MATRIX',power:6},{icon:'🦠',name:'VIRUS',power:8},
  {icon:'📺',name:'GLITCH',power:5},{icon:'📷',name:'WEBCAM',power:9},{icon:'💣',name:'COUNTDOWN',power:10},
  {icon:'🎭',name:'ANON MSG',power:4},{icon:'🔥',name:'SYS32 DEL',power:9},{icon:'💻',name:'FAKE HACK',power:6},
  {icon:'🔒',name:'RANSOM',power:10},{icon:'📡',name:'DRONE',power:8},{icon:'🛰️',name:'SATELLITE',power:7},
];

function setupBattle() {
  toggleSection('battleToggle','battleBody','battleArrow');
  $('battleStart').addEventListener('click',()=>{
    const p1=BATTLE_CARDS[Math.floor(Math.random()*BATTLE_CARDS.length)];
    const p2=BATTLE_CARDS[Math.floor(Math.random()*BATTLE_CARDS.length)];
    $('bp1Pick').textContent=p1.icon; $('bp2Pick').textContent=p2.icon;
    const r=$('battleResult');
    if(p1.power>p2.power) r.innerHTML=`<span style="color:var(--green);">${p1.icon} ${p1.name} (${p1.power}) WINS!</span>`;
    else if(p2.power>p1.power) r.innerHTML=`<span style="color:var(--cyan);">${p2.icon} ${p2.name} (${p2.power}) WINS!</span>`;
    else r.innerHTML=`<span style="color:var(--red);">DRAW! Both power ${p1.power}</span>`;
    addXp(5,'mission');
  });
}

/* ═══════════════════════════════════════════════════════════════
   BOOT VIRUS — Fake BIOS/POST failure
   ═══════════════════════════════════════════════════════════════ */

function setupBios() {
  toggleSection('biosToggle','biosBody','biosArrow');
  $('biosLaunch').addEventListener('click',launchBios);
}

async function launchBios() {
  const overlay=$('exploitOverlay');const content=$('exploitContent');
  overlay.style.display='flex';
  content.innerHTML=`<div class="bios-screen" id="biosText"></div>`;
  const el=$('biosText');
  const lines=[
    {t:'American Megatrends BIOS v2.71',c:''},
    {t:'Copyright (C) 2024, Anonymous Systems Inc.',c:''},
    {t:'',c:''},{t:'CPU: Intel Core i7-13700K @ 5.40GHz',c:''},
    {t:'Memory Test: 16384MB OK',c:''},{t:'',c:''},
    {t:'Detecting Primary Master... Hard Disk',c:''},
    {t:'Detecting Primary Slave... None',c:''},
    {t:'Detecting Secondary Master... CDROM',c:''},
    {t:'',c:''},{t:'Press DEL to enter SETUP',c:''},
    {t:'',c:''},{t:'Initializing USB Controllers... Done',c:''},
    {t:'',c:''},{t:'WARNING: Virus detected in boot sector!',c:'bios-error'},
    {t:'CRITICAL: MBR corrupted by ANONY.SYS',c:'bios-critical'},
    {t:'ERROR: Operating system not found',c:'bios-critical'},
    {t:'',c:''},{t:'SYSTEM HALTED — Press any key to reboot',c:'bios-error'},
    {t:'',c:''},{t:'Just kidding! 😄 This is HACKTIVIST KIDS',c:''},
  ];
  for(const line of lines){
    const div=document.createElement('div');div.className=`bios-line ${line.c}`;div.textContent=line.t;
    el.appendChild(div);el.scrollTop=el.scrollHeight;
    await sleep(line.c?800:200+Math.random()*200);
  }
  const close=()=>{overlay.style.display='none';content.innerHTML='';};
  overlay.addEventListener('click',close,{once:true});
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}});
  addXp(15,'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   RANSOMWARE — Fake file encryption screen
   ═══════════════════════════════════════════════════════════════ */

function setupRansom() {
  toggleSection('ransomToggle','ransomBody','ransomArrow');
  $('ransomLaunch').addEventListener('click',launchRansom);
}

function launchRansom() {
  const overlay=$('exploitOverlay');const content=$('exploitContent');
  overlay.style.display='flex';
  let timeLeft=3599;
  content.innerHTML=`<div class="ransom-screen">
    <div class="ransom-lock">🔒</div>
    <div class="ransom-title">YOUR FILES HAVE BEEN ENCRYPTED</div>
    <div class="ransom-msg">All your documents, photos, and files have been encrypted with military-grade encryption. To decrypt your files, send 0.5 BTC to the address below.</div>
    <div class="ransom-btc">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</div>
    <div class="ransom-msg">Time remaining to pay:</div>
    <div class="ransom-timer" id="ransomTimer">59:59</div>
    <div class="ransom-joke">😄 RELAX — This is a HACKTIVIST KIDS prank! No files were harmed.</div>
  </div>`;
  const ransomInt=setInterval(()=>{
    timeLeft--;
    const m=Math.floor(timeLeft/60),s=timeLeft%60;
    const el=document.getElementById('ransomTimer');
    if(el)el.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if(timeLeft<=0)clearInterval(ransomInt);
  },1000);
  const close=()=>{overlay.style.display='none';content.innerHTML='';clearInterval(ransomInt);};
  overlay.addEventListener('click',close,{once:true});
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}});
  addXp(20,'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   PHONE CRACK — Screen crack overlay
   ═══════════════════════════════════════════════════════════════ */

function setupCrack() {
  toggleSection('crackToggle','crackBody','crackArrow');
  $('crackLaunch').addEventListener('click',launchCrack);
}

function launchCrack() {
  // Create SVG crack overlay
  let existing=document.getElementById('crackOverlayEl');
  if(existing){existing.remove();return;}
  const div=document.createElement('div');
  div.id='crackOverlayEl';div.className='crack-overlay';
  // Generate random crack lines
  const w=window.innerWidth,h=window.innerHeight;
  const cx=w/2+Math.random()*200-100, cy=h/2+Math.random()*200-100;
  let paths='';
  for(let i=0;i<12;i++){
    let px=cx,py=cy,d=`M${px},${py}`;
    const angle=(i/12)*Math.PI*2+Math.random()*.3;
    const len=200+Math.random()*300;
    for(let j=0;j<10;j++){
      px+=Math.cos(angle+Math.random()*.6-.3)*(len/10);
      py+=Math.sin(angle+Math.random()*.6-.3)*(len/10);
      d+=`L${px},${py}`;
    }
    paths+=`<path d="${d}" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="${1+Math.random()}"/>`;
    // Sub-cracks
    for(let k=0;k<3;k++){
      const sx=cx+Math.cos(angle)*(len/10*(2+k*2)),sy=cy+Math.sin(angle)*(len/10*(2+k*2));
      const subAngle=angle+Math.random()*1.5-.75;
      let sd=`M${sx},${sy}`;
      let spx=sx,spy=sy;
      for(let m=0;m<4;m++){spx+=Math.cos(subAngle)*(20+Math.random()*20);spy+=Math.sin(subAngle)*(20+Math.random()*20);sd+=`L${spx},${spy}`;}
      paths+=`<path d="${sd}" fill="none" stroke="rgba(255,255,255,.3)" stroke-width=".5"/>`;
    }
  }
  // Impact point
  paths+=`<circle cx="${cx}" cy="${cy}" r="8" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="1"/>`;
  div.innerHTML=`<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">${paths}</svg>`;
  document.body.appendChild(div);
  // Remove after 30s or on double-click
  div.addEventListener('dblclick',()=>div.remove());
  setTimeout(()=>{if(div.parentNode)div.remove();},30000);
  addXp(10,'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   SYSTEM32 DELETE — Fake terminal system wipe
   ═══════════════════════════════════════════════════════════════ */

function setupSys32() {
  toggleSection('sys32Toggle','sys32Body','sys32Arrow');
  $('sys32Launch').addEventListener('click',launchSys32);
}

async function launchSys32() {
  const overlay=$('exploitOverlay');const content=$('exploitContent');
  overlay.style.display='flex';
  content.innerHTML=`<div class="fake-hack" id="sys32Text" style="overflow:auto;"></div>`;
  const el=$('sys32Text');
  const sysFiles=['kernel32.dll','ntdll.dll','user32.dll','shell32.dll','advapi32.dll','gdi32.dll','comdlg32.dll','ws2_32.dll','ole32.dll','msvcrt.dll',
    'wininet.dll','shlwapi.dll','crypt32.dll','secur32.dll','winspool.drv','mswsock.dll','netapi32.dll','userenv.dll','psapi.dll','iphlpapi.dll',
    'setupapi.dll','wintrust.dll','dhcpcsvc.dll','dnsapi.dll','msi.dll'];
  const addLine=(t,c='')=>{const d=document.createElement('div');d.className=`fake-hack-line ${c}`;d.textContent=t;el.appendChild(d);el.scrollTop=el.scrollHeight;};
  addLine('C:\\> cd C:\\Windows\\System32');await sleep(300);
  addLine('C:\\Windows\\System32> del /F /S /Q *.*');await sleep(500);
  addLine('');addLine('WARNING: This will delete all system files!','');await sleep(300);
  addLine('Are you sure? (Y/N): Y');await sleep(500);
  addLine('');addLine('Deleting system files...');await sleep(300);
  for(const f of sysFiles){
    addLine(`Deleting... C:\\Windows\\System32\\${f}`);
    await sleep(80+Math.random()*120);
  }
  addLine('');await sleep(500);
  addLine('ERROR: Access violation at 0x00000000','');await sleep(300);
  addLine('CRITICAL: Operating system corrupted','');await sleep(300);
  addLine('FATAL: No bootable device found','');await sleep(500);
  addLine('');addLine('');
  addLine('😄 Just kidding! This is HACKTIVIST KIDS — no files were harmed!');
  const close=()=>{overlay.style.display='none';content.innerHTML='';};
  overlay.addEventListener('click',close,{once:true});
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}});
  addXp(20,'exploit');
}

/* ═══════════════════════════════════════════════════════════════
   HACKER NEWS TICKER
   ═══════════════════════════════════════════════════════════════ */

const NEWS_HEADLINES=[
  'Anonymous claims responsibility for worldwide prank deployment',
  'Mysterious Guy Fawkes masks appearing in schools globally',
  'Kids report seeing Matrix rain on family computers',
  'FBI investigating fake WiFi networks named "Surveillance_Van"',
  'BREAKING: All homework encrypted — teachers baffled',
  'Smart fridges displaying Anonymous messages worldwide',
  'Password "anony" trends globally — experts confused',
  'Kid hacker pranks entire school with fake BSOD on projector',
  'Anonymous collective now teaching cryptography to children',
  'BREAKING: Prank levels at all-time high across 47 countries',
  'Experts warn: next generation of ethical hackers is rising',
  'Self-destructing messages spotted in school hallways',
  'Global shortage of Guy Fawkes masks reported',
  'Parents confused by children speaking in Morse code',
  'EXCLUSIVE: Inside the secret world of HACKTIVIST KIDS',
];

function setupNewsTicker() {
  const ticker=$('tickerContent');
  const shuffled=[...NEWS_HEADLINES].sort(()=>Math.random()-.5);
  ticker.innerHTML=shuffled.map(h=>`<span class="ticker-item"><span class="ticker-breaking">BREAKING</span>${h}</span>`).join('');
}

/* ═══════════════════════════════════════════════════════════════
   TOGGLE SECTION HELPER
   ═══════════════════════════════════════════════════════════════ */

function toggleSection(toggleId, bodyId, arrowId) {
  const toggle = $(toggleId), body = $(bodyId), arrow = $(arrowId);
  if (toggle) toggle.addEventListener('click', () => {
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : '';
    arrow.classList.toggle('open', !open);
  });
}

/* ═══════════════════════════════════════════════════════════════
   DEMO MODE — Guided showcase of all 54+ features
   ═══════════════════════════════════════════════════════════════ */

let demoRunning = false, demoAborted = false;

const DEMO_STEPS = [
  // MASKS
  { name:'MASK VAULT', desc:'20 Guy Fawkes mask variants', action: async ()=>{
    openSidebar(); await sleep(800);
    const masks=document.querySelectorAll('.mask-item');
    for(let i=0;i<Math.min(6,masks.length);i++){ masks[i].click(); await sleep(600); }
  }},
  // SLOGANS
  { name:'SLOGAN MODES', desc:'3 display modes: Rotate, Glitch, Wall', action: async ()=>{
    closeSidebar();
    const btns=document.querySelectorAll('[data-mode]');
    for(const b of btns){ b.click(); await sleep(2000); }
  }},
  // THEMES
  { name:'THEMES', desc:'4 color themes + custom builder', action: async ()=>{
    openSidebar(); await sleep(400);
    const themes=['themeNeon','themeRed','themeLight','themeDark'];
    for(const id of themes){ const b=$(id); if(b){b.click(); await sleep(1200);} }
  }},
  // LANGUAGES
  { name:'LANGUAGES', desc:'EN / FR / عربي with RTL', action: async ()=>{
    const langs=['langFr','langAr','langEn'];
    for(const id of langs){ const b=$(id); if(b){b.click(); await sleep(1500);} }
    closeSidebar();
  }},
  // OPS BRIEFING
  { name:'OPS BRIEFING', desc:'10 classified prank missions', action: async ()=>{
    scrollToSection('opsSection'); await sleep(400);
    openSection('opsToggle','opsBody','opsArrow'); await sleep(400);
    const btn=$('opsGenerate'); if(btn){btn.click(); await sleep(2000); btn.click(); await sleep(2000);}
  }},
  // EXPLOIT LAB
  { name:'EXPLOIT LAB', desc:'BSOD, Matrix, Virus, Glitch...', action: async ()=>{
    scrollToSection('exploitSection'); await sleep(400);
    openSection('exploitToggle','exploitBody','exploitArrow'); await sleep(400);
    launchExploit('bsod'); await sleep(2500); closeExploit(); await sleep(400);
    launchExploit('matrix'); await sleep(2500); closeExploit(); await sleep(400);
  }},
  // PAYLOAD
  { name:'PAYLOAD ROULETTE', desc:'15 encrypted prank payloads', action: async ()=>{
    scrollToSection('payloadSection'); await sleep(400);
    openSection('payloadToggle','payloadBody','payloadArrow'); await sleep(400);
    const btn=$('payloadSpin'); if(btn){btn.click(); await sleep(3000);}
  }},
  // SIGNAL JAM
  { name:'SIGNAL JAM', desc:'9 Web Audio sound effects', action: async ()=>{
    scrollToSection('signalSection'); await sleep(400);
    openSection('signalToggle','signalBody','signalArrow'); await sleep(400);
    const btns=document.querySelectorAll('.signal-btn');
    for(let i=0;i<Math.min(4,btns.length);i++){ btns[i].click(); await sleep(800); }
  }},
  // CRYPTO
  { name:'CRYPTO ROOM', desc:'Caesar, Binary, Morse, Reverse', action: async ()=>{
    scrollToSection('cryptoSection'); await sleep(400);
    openSection('cryptoToggle','cryptoBody','cryptoArrow'); await sleep(400);
    const input=$('cryptoInput'); if(input){input.value='We are Anonymous';input.dispatchEvent(new Event('input')); await sleep(1200);}
    const ciphers=['cipherBinary','cipherMorse','cipherReverse','cipherCaesar'];
    for(const id of ciphers){ const b=$(id); if(b){b.click(); await sleep(1200);} }
  }},
  // TERMINAL
  { name:'TERMINAL', desc:'Fake command-line interface', action: async ()=>{
    scrollToSection('terminalSection'); await sleep(400);
    openSection('terminalToggle','terminalBody','terminalArrow'); await sleep(400);
    const input=$('terminalInput');
    const cmds=['whoami','ls','cat manifesto.txt','hack'];
    for(const cmd of cmds){ input.value=cmd; input.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter'})); await sleep(1500); }
  }},
  // NETWORK SCANNER
  { name:'NET SCANNER', desc:'Fake network scan', action: async ()=>{
    scrollToSection('networkSection'); await sleep(400);
    openSection('networkToggle','networkBody','networkArrow'); await sleep(400);
    const btn=$('networkScan'); if(btn){btn.click(); await sleep(5000);}
  }},
  // FILE ENCRYPTOR
  { name:'FILE ENCRYPT', desc:'XOR + Base64 encryption', action: async ()=>{
    scrollToSection('encryptorSection'); await sleep(400);
    openSection('encryptorToggle','encryptorBody','encryptorArrow'); await sleep(400);
    const input=$('encryptorInput'); if(input){input.value='Top secret message from Anonymous!'; await sleep(500);}
    const btn=$('encryptorBtn'); if(btn){btn.click(); await sleep(2000);}
  }},
  // STEGANOGRAPHY
  { name:'STEGO LAB', desc:'Hide messages with zero-width chars', action: async ()=>{
    scrollToSection('stegoSection'); await sleep(400);
    openSection('stegoToggle','stegoBody','stegoArrow'); await sleep(400);
    const secret=$('stegoSecret'), cover=$('stegoCover');
    if(secret&&cover){secret.value='secret'; cover.value='Normal looking text'; cover.dispatchEvent(new Event('input')); await sleep(2500);}
  }},
  // IP LOCATOR
  { name:'IP LOCATOR', desc:'Fake geo-locate any IP', action: async ()=>{
    scrollToSection('ipSection'); await sleep(400);
    openSection('ipToggle','ipBody','ipArrow'); await sleep(400);
    const input=$('ipInput'); if(input)input.value='192.168.1.42';
    const btn=$('ipLookup'); if(btn){btn.click(); await sleep(2000);}
  }},
  // PASSWORD TESTER
  { name:'PASS AUDIT', desc:'Real password strength tester', action: async ()=>{
    scrollToSection('pwTestSection'); await sleep(400);
    openSection('pwTestToggle','pwTestBody','pwTestArrow'); await sleep(400);
    const input=$('pwTestInput');
    if(input){ const pws=['123','password','Anon2024!','X#9kL$mP2@qR']; for(const pw of pws){input.value=pw;input.dispatchEvent(new Event('input'));await sleep(1500);} }
  }},
  // ASCII ART
  { name:'ASCII GEN', desc:'Text to block ASCII art', action: async ()=>{
    scrollToSection('asciiSection'); await sleep(400);
    openSection('asciiToggle','asciiBody','asciiArrow'); await sleep(400);
    const input=$('asciiInput'); if(input){input.value='HACK';input.dispatchEvent(new Event('input'));await sleep(2500);}
  }},
  // PHISH DETECTOR
  { name:'PHISH DETECT', desc:'Spot the scam quiz', action: async ()=>{
    scrollToSection('phishSection'); await sleep(400);
    openSection('phishToggle','phishBody','phishArrow'); await sleep(1500);
    const btn=$('phishScam'); if(btn){btn.click(); await sleep(3000);}
  }},
  // AGENT CHAT
  { name:'AGENT CHAT', desc:'Fake encrypted group chat', action: async ()=>{
    scrollToSection('chatSection'); await sleep(400);
    openSection('chatToggle','chatBody','chatArrow'); await sleep(400);
    const input=$('chatInput');
    if(input){input.value='All agents report in.';input.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter'}));await sleep(4000);}
  }},
  // WANTED POSTER
  { name:'WANTED POSTER', desc:'Generate wanted poster', action: async ()=>{
    scrollToSection('wantedSection'); await sleep(400);
    openSection('wantedToggle','wantedBody','wantedArrow'); await sleep(400);
    const name=$('wantedName'),crime=$('wantedCrime');
    if(name)name.value='TARGET ZERO'; if(crime)crime.value='Too much homework';
    const btn=$('wantedGenerate'); if(btn){btn.click(); await sleep(2500);}
  }},
  // WIFI SPOOF
  { name:'WIFI SPOOF', desc:'30 scary WiFi names', action: async ()=>{
    scrollToSection('wifiSection'); await sleep(400);
    openSection('wifiToggle','wifiBody','wifiArrow'); await sleep(400);
    const btn=$('wifiGenerate'); if(btn){btn.click(); await sleep(2500);}
  }},
  // QR CODE
  { name:'QR FORGE', desc:'Visual QR code generator', action: async ()=>{
    scrollToSection('qrSection'); await sleep(400);
    openSection('qrToggle','qrBody','qrArrow'); await sleep(400);
    const input=$('qrInput'); if(input)input.value='WE ARE ANONYMOUS';
    const btn=$('qrGenerate'); if(btn){btn.click(); await sleep(2000);}
  }},
  // AGENT BADGE
  { name:'AGENT BADGE', desc:'SVG agent ID card', action: async ()=>{
    scrollToSection('badgeSection'); await sleep(400);
    openSection('badgeToggle','badgeBody','badgeArrow'); await sleep(400);
    const btn=$('badgeGenerate'); if(btn){btn.click(); await sleep(2500);}
  }},
  // HACK THE PLANET
  { name:'HACK THE PLANET', desc:'Live attack map', action: async ()=>{
    scrollToSection('planetSection'); await sleep(400);
    openSection('planetToggle','planetBody','planetArrow'); await sleep(4000);
  }},
  // PRANK BATTLE
  { name:'PRANK BATTLE', desc:'2-player exploit showdown', action: async ()=>{
    scrollToSection('battleSection'); await sleep(400);
    openSection('battleToggle','battleBody','battleArrow'); await sleep(400);
    const btn=$('battleStart'); if(btn){btn.click();await sleep(1500);btn.click();await sleep(1500);}
  }},
  // DARK WEB
  { name:'DARK WEB', desc:'Fake .onion browser', action: async ()=>{
    scrollToSection('darkwebSection'); await sleep(400);
    openSection('darkwebToggle','darkwebBody','darkwebArrow'); await sleep(400);
    $('dwUrl').value='http://an0nym0us.onion';
    const btn=$('dwGo'); if(btn){btn.click(); await sleep(4000);}
  }},
  // SHARE EXPLOIT
  { name:'SHARE EXPLOIT', desc:'Copy self-contained prank pages', action: async ()=>{
    scrollToSection('shareSection'); await sleep(400);
    openSection('shareToggle','shareBody','shareArrow'); await sleep(2500);
  }},
  // ACHIEVEMENTS
  { name:'ACHIEVEMENTS', desc:'20 unlockable badges', action: async ()=>{
    scrollToSection('achieveSection'); await sleep(400);
    openSection('achieveToggle','achieveBody','achieveArrow'); await sleep(3000);
  }},
  // FINGERPRINT
  { name:'BIO SCAN', desc:'Fingerprint scanner', action: async ()=>{
    scrollToSection('fpSection'); await sleep(400);
    openSection('fpToggle','fpBody','fpArrow'); await sleep(2000);
  }},
  // SCREEN EXPLOITS ROUND 2
  { name:'BOOT VIRUS', desc:'Fake BIOS failure', action: async ()=>{
    await launchBios(); await sleep(6000); closeExploit();
  }},
  { name:'RANSOMWARE', desc:'Fake file encryption', action: async ()=>{
    launchRansom(); await sleep(4000); closeExploit();
  }},
  { name:'SYS32 DELETE', desc:'Fake system file wipe', action: async ()=>{
    await launchSys32(); await sleep(6000); closeExploit();
  }},
  { name:'CCTV MONITOR', desc:'4-camera surveillance grid', action: async ()=>{
    launchCCTV(); await sleep(4000); closeExploit();
  }},
  { name:'FAKE DESKTOP', desc:'Windows/Mac desktop prank', action: async ()=>{
    launchFakeDesktop('win'); await sleep(7000);
    $('fakeDesktopOverlay').style.display='none';
  }},
  { name:'SCREEN CRACK', desc:'Cracked screen overlay', action: async ()=>{
    launchCrack(); await sleep(3000);
    const el=document.getElementById('crackOverlayEl'); if(el)el.remove();
  }},
  // SATELLITE
  { name:'SATELLITE VIEW', desc:'Satellite zoom-in target lock', action: async ()=>{
    $('satTarget').value='Anonymous HQ';
    await launchSatellite(); await sleep(8000);
    $('satOverlay').style.display='none';
  }},
  // COUNTDOWN
  { name:'COUNTDOWN BOMB', desc:'Payload deployment timer', action: async ()=>{
    // Quick 3-second version for demo
    const overlay=$('countdownOverlay');const timer=$('countdownTimer');const fill=$('countdownFill');
    overlay.style.display='flex';
    for(let i=3;i>=0;i--){timer.textContent=i;fill.style.width=((3-i)/3*100)+'%';await sleep(800);}
    overlay.style.display='none'; glitchTransition();
  }},
  // SCREEN TAKEOVER
  { name:'SCREEN TAKEOVER', desc:'Auto-chain all exploits', action: async ()=>{
    launchExploit('bsod');await sleep(1500);closeExploit();glitchTransition();await sleep(300);
    launchExploit('matrix');await sleep(1500);closeExploit();glitchTransition();await sleep(300);
    launchExploit('anony');await sleep(2000);closeExploit();
  }},
  // MANIFESTO
  { name:'MANIFESTO', desc:'Typewriter broadcast', action: async ()=>{
    const overlay=$('manifestoOverlay');const broadcast=$('manifestoBroadcast');
    overlay.style.display='flex'; broadcast.innerHTML='';
    const msg='We are Anonymous. We are Legion. We do not forgive. We do not forget. Expect us.';
    for(const ch of msg){ broadcast.textContent+=ch; await sleep(30); }
    await sleep(2000); overlay.style.display='none';
  }},
  // SELF DESTRUCT
  { name:'SELF DESTRUCT', desc:'Message self-destruct with smoke', action: async ()=>{
    const overlay=$('sdOverlay');
    overlay.style.display='flex';
    overlay.innerHTML=`<div class="sd-message">THIS MESSAGE WILL SELF-DESTRUCT</div><div class="sd-timer" style="margin-top:16px;">3s</div>`;
    await sleep(1000);
    overlay.querySelector('.sd-timer').textContent='2s'; await sleep(1000);
    overlay.querySelector('.sd-timer').textContent='1s'; await sleep(1000);
    overlay.querySelector('.sd-message').style.cssText='opacity:0;filter:blur(20px);transition:all .5s;';
    overlay.querySelector('.sd-timer').textContent='DESTROYED'; await sleep(1500);
    overlay.style.display='none';
  }},
  // DRONE
  { name:'DRONE CONTROL', desc:'UAV flight simulator', action: async ()=>{
    launchDrone(); await sleep(5000); closeExploit();
  }},
  // AGENT PROFILE
  { name:'AGENT PROFILE', desc:'XP, ranks & stats', action: async ()=>{
    openSidebar(); await sleep(500);
    // Scroll sidebar to agent section
    const card=$('agentCard');if(card)card.scrollIntoView({behavior:'smooth'});
    await sleep(3000); closeSidebar();
  }},
];

function setupDemo() {
  $('demoStart').addEventListener('click', runDemo);
  $('demoStop').addEventListener('click', abortDemo);
}

async function runDemo() {
  if (demoRunning) return;
  demoRunning = true; demoAborted = false;
  closeSidebar();

  // Create persistent banner
  const banner = document.createElement('div');
  banner.className = 'demo-banner'; banner.id = 'demoBanner';
  banner.innerHTML = `<div class="demo-banner-title">🎭 DEMO MODE</div><div class="demo-banner-step" id="demoBannerStep">INITIALIZING...</div><div class="demo-banner-progress" id="demoBannerProgress">0/${DEMO_STEPS.length}</div>`;
  document.body.appendChild(banner);

  for (let i = 0; i < DEMO_STEPS.length; i++) {
    if (demoAborted) break;
    const step = DEMO_STEPS[i];

    // Update banner
    const stepEl = $('demoBannerStep');
    const progEl = $('demoBannerProgress');
    if (stepEl) stepEl.textContent = `${step.name} — ${step.desc}`;
    if (progEl) progEl.textContent = `${i + 1}/${DEMO_STEPS.length}`;

    // Update sidebar progress
    $('demoStatus').textContent = `${step.name}`;
    $('demoFill').style.width = ((i + 1) / DEMO_STEPS.length * 100) + '%';

    // Run the step
    try { await step.action(); } catch (e) { console.warn('Demo step failed:', step.name, e); }

    // Brief pause between steps
    await sleep(500);
    if (demoAborted) break;
  }

  // Cleanup
  endDemo();
}

function abortDemo() {
  demoAborted = true;
  endDemo();
}

function endDemo() {
  demoRunning = false;
  const banner = $('demoBanner');
  if (banner) banner.remove();
  closeExploit();
  // Close any remaining overlays
  ['countdownOverlay','webcamOverlay','manifestoOverlay','sdOverlay','satOverlay','fakeDesktopOverlay'].forEach(id=>{
    const el=$(id); if(el)el.style.display='none';
  });
  const crack=document.getElementById('crackOverlayEl');if(crack)crack.remove();
  $('demoStatus').textContent = demoAborted ? 'DEMO ABORTED' : 'DEMO COMPLETE ✓';
  $('demoFill').style.width = demoAborted ? '0%' : '100%';
}

// Helpers for demo
function openSidebar() { const s=$('sidebar');if(s&&!s.classList.contains('open'))s.classList.add('open'); }
function closeSidebar() { const s=$('sidebar');if(s&&s.classList.contains('open'))s.classList.remove('open'); }
function scrollToSection(id) { const el=$(id);if(el)el.scrollIntoView({behavior:'smooth',block:'center'}); }
function openSection(toggleId,bodyId,arrowId) {
  const body=$(bodyId),arrow=$(arrowId);
  if(body&&body.style.display==='none'){body.style.display='';if(arrow)arrow.classList.add('open');}
}

/* ═══════════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   WORKSHOP DIY LOGO SVG
   ═══════════════════════════════════════════════════════════════ */

const WORKSHOP_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.0 3.214096" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Workshop DIY"><title>Workshop DIY</title><g transform="translate(92.820084,-179.975632)" fill="#00ff41" fill-rule="evenodd"><path d="M-90.269,180.707C-90.27,180.704,-90.281,180.555,-90.293,180.376C-90.305,180.197,-90.316,180.042,-90.317,180.032L-90.319,180.014L-90.296,180.014C-90.284,180.014,-90.259,180.012,-90.241,180.01C-90.222,180.008,-90.192,180.006,-90.173,180.005L-90.137,180.003L-90.129,180.131C-90.124,180.202,-90.119,180.27,-90.118,180.282L-90.116,180.304L-90.055,180.206C-90.022,180.153,-89.977,180.081,-89.957,180.048L-89.919,179.987L-89.883,179.985C-89.864,179.984,-89.825,179.981,-89.797,179.978C-89.769,179.976,-89.739,179.975,-89.73,179.976L-89.714,179.977L-89.826,180.146L-89.938,180.315L-89.797,180.491C-89.719,180.587,-89.656,180.668,-89.656,180.669C-89.656,180.671,-89.657,180.672,-89.659,180.672C-89.676,180.672,-89.857,180.684,-89.861,180.686C-89.866,180.687,-89.896,180.651,-89.971,180.554C-90.028,180.481,-90.076,180.421,-90.078,180.423C-90.08,180.424,-90.087,180.434,-90.093,180.446L-90.105,180.467L-90.097,180.582C-90.091,180.667,-90.09,180.697,-90.094,180.699C-90.099,180.703,-90.137,180.706,-90.21,180.709C-90.258,180.712,-90.268,180.711,-90.269,180.707z"/><path d="M-89.191,180.769C-89.268,180.753,-89.311,180.74,-89.36,180.717C-89.394,180.7,-89.472,180.651,-89.481,180.64C-89.485,180.635,-89.483,180.628,-89.446,180.493C-89.44,180.47,-89.428,180.473,-89.404,180.504C-89.35,180.572,-89.267,180.622,-89.189,180.636C-89.153,180.642,-89.15,180.642,-89.129,180.635C-89.093,180.624,-89.075,180.598,-89.082,180.566C-89.086,180.544,-89.122,180.514,-89.183,180.482C-89.255,180.445,-89.277,180.431,-89.31,180.4C-89.366,180.347,-89.383,180.292,-89.367,180.217C-89.35,180.135,-89.299,180.085,-89.207,180.06C-89.169,180.049,-89.099,180.048,-89.053,180.058C-88.98,180.074,-88.906,180.105,-88.844,180.146C-88.811,180.168,-88.807,180.171,-88.809,180.18C-88.811,180.186,-88.82,180.221,-88.83,180.258C-88.848,180.323,-88.849,180.326,-88.858,180.325C-88.863,180.324,-88.871,180.319,-88.875,180.313C-88.886,180.297,-88.933,180.252,-88.952,180.239C-89.003,180.204,-89.07,180.181,-89.113,180.185C-89.166,180.19,-89.196,180.228,-89.177,180.266C-89.168,180.285,-89.144,180.302,-89.079,180.337C-88.975,180.393,-88.925,180.435,-88.901,180.486C-88.888,180.514,-88.885,180.566,-88.894,180.603C-88.922,180.711,-89.011,180.774,-89.136,180.772C-89.157,180.772,-89.181,180.771,-89.191,180.769z"/><path d="M-91.104,180.904C-91.135,180.835,-91.199,180.692,-91.247,180.585C-91.294,180.479,-91.333,180.392,-91.332,180.391C-91.33,180.39,-91.249,180.353,-91.135,180.302C-91.081,180.278,-91.022,180.254,-91.004,180.248C-90.924,180.223,-90.849,180.234,-90.8,180.279C-90.776,180.3,-90.758,180.33,-90.743,180.373C-90.733,180.402,-90.731,180.413,-90.731,180.444C-90.731,180.474,-90.733,180.485,-90.742,180.507C-90.753,180.537,-90.772,180.572,-90.781,180.579C-90.784,180.582,-90.787,180.585,-90.787,180.587C-90.787,180.59,-90.751,180.61,-90.581,180.697C-90.521,180.729,-90.467,180.757,-90.462,180.76C-90.453,180.766,-90.457,180.768,-90.547,180.808C-90.599,180.831,-90.645,180.85,-90.65,180.85C-90.654,180.85,-90.72,180.816,-90.796,180.775L-90.934,180.7L-90.96,180.712C-90.974,180.718,-90.987,180.724,-90.987,180.724C-90.987,180.725,-90.965,180.775,-90.938,180.836C-90.91,180.898,-90.887,180.95,-90.887,180.953C-90.886,180.957,-90.91,180.97,-90.963,180.994C-91.005,181.013,-91.042,181.029,-91.044,181.029C-91.046,181.029,-91.073,180.972,-91.104,180.904z"/><path d="M-88.329,181.181C-88.367,181.155,-88.399,181.132,-88.4,181.131C-88.401,181.13,-88.362,181.073,-88.314,181.003C-88.266,180.933,-88.228,180.875,-88.229,180.874C-88.232,180.871,-88.365,180.779,-88.401,180.754L-88.419,180.742L-88.506,180.868C-88.554,180.937,-88.594,180.994,-88.596,180.994C-88.6,180.994,-88.742,180.897,-88.742,180.894C-88.742,180.893,-88.563,180.634,-88.382,180.374C-88.362,180.345,-88.345,180.321,-88.343,180.32C-88.34,180.32,-88.23,180.394,-88.196,180.419C-88.196,180.419,-88.227,180.465,-88.265,180.521C-88.304,180.576,-88.336,180.624,-88.337,180.626C-88.338,180.63,-88.305,180.655,-88.246,180.695C-88.195,180.73,-88.152,180.76,-88.15,180.76C-88.148,180.761,-88.114,180.715,-88.075,180.659C-88.036,180.602,-88.003,180.556,-88.001,180.556C-87.997,180.556,-87.857,180.653,-87.857,180.656C-87.857,180.662,-88.252,181.23,-88.256,181.23C-88.258,181.23,-88.291,181.208,-88.329,181.181z"/><path d="M-91.754,181.531C-91.889,181.512,-92.043,181.367,-92.083,181.222C-92.093,181.183,-92.092,181.109,-92.081,181.069C-92.049,180.958,-91.935,180.846,-91.825,180.817C-91.785,180.806,-91.704,180.807,-91.664,180.819C-91.604,180.836,-91.541,180.876,-91.484,180.932C-91.431,180.985,-91.395,181.04,-91.375,181.099C-91.365,181.129,-91.362,181.143,-91.361,181.18C-91.359,181.232,-91.363,181.26,-91.379,181.302C-91.403,181.365,-91.466,181.44,-91.53,181.482C-91.599,181.528,-91.67,181.544,-91.754,181.531z"/><path d="M-90.371,181.625C-90.383,181.62,-90.391,181.607,-90.417,181.549C-90.474,181.422,-90.475,181.421,-90.488,181.418C-90.495,181.417,-90.549,181.416,-90.608,181.416L-90.716,181.416L-90.724,181.431C-90.736,181.452,-90.772,181.484,-90.795,181.495C-90.86,181.525,-90.931,181.513,-90.977,181.463C-90.989,181.451,-91.003,181.43,-91.009,181.418C-91.02,181.397,-91.021,181.391,-91.021,181.36C-91.021,181.328,-91.02,181.322,-91.009,181.299C-90.993,181.265,-90.965,181.238,-90.931,181.222C-90.908,181.21,-90.901,181.209,-90.87,181.209C-90.808,181.208,-90.765,181.23,-90.732,181.277L-90.715,181.303L-90.576,181.304C-90.436,181.306,-90.436,181.306,-90.417,181.315C-90.398,181.324,-90.396,181.327,-90.375,181.369C-90.363,181.394,-90.335,181.456,-90.312,181.507C-90.289,181.558,-90.268,181.604,-90.265,181.608C-90.253,181.626,-90.259,181.629,-90.313,181.629C-90.34,181.628,-90.366,181.627,-90.371,181.625z"/><path d="M-87.689,181.815C-87.787,181.79,-87.87,181.716,-87.921,181.607C-87.961,181.522,-87.962,181.428,-87.925,181.347C-87.88,181.252,-87.77,181.161,-87.654,181.122C-87.641,181.117,-87.612,181.111,-87.59,181.107C-87.544,181.1,-87.501,181.104,-87.452,181.12C-87.349,181.153,-87.252,181.266,-87.222,181.386C-87.208,181.442,-87.216,181.523,-87.241,181.578C-87.277,181.657,-87.359,181.734,-87.458,181.782C-87.517,181.811,-87.551,181.819,-87.611,181.821C-87.649,181.822,-87.666,181.821,-87.689,181.815z"/><path d="M-91.18,182.039C-91.241,182.015,-91.284,181.955,-91.284,181.892C-91.285,181.847,-91.273,181.82,-91.236,181.783C-91.198,181.745,-91.182,181.739,-91.12,181.739C-91.078,181.739,-91.074,181.74,-91.05,181.751C-91.022,181.765,-90.989,181.795,-90.974,181.822L-90.964,181.838L-90.802,181.838L-90.64,181.838L-90.64,181.876C-90.64,181.897,-90.641,181.922,-90.642,181.932L-90.644,181.95L-90.804,181.95L-90.964,181.95L-90.981,181.974C-91,182.002,-91.037,182.034,-91.058,182.04C-91.065,182.042,-91.091,182.045,-91.116,182.046C-91.154,182.047,-91.163,182.046,-91.18,182.039z"/><path d="M-90.43,182.097C-90.443,182.092,-90.446,182.087,-90.446,182.064L-90.446,182.044L-90.474,182.031C-90.51,182.014,-90.523,182.002,-90.537,181.977C-90.553,181.948,-90.555,181.903,-90.543,181.874C-90.532,181.848,-90.495,181.813,-90.473,181.807C-90.455,181.802,-90.451,181.798,-90.448,181.778C-90.443,181.749,-90.442,181.746,-90.432,181.742C-90.426,181.739,-90.403,181.737,-90.376,181.737L-90.329,181.737L-90.326,181.748C-90.323,181.754,-90.322,181.818,-90.323,181.926C-90.324,182.07,-90.325,182.094,-90.33,182.098C-90.337,182.102,-90.418,182.102,-90.43,182.097z"/><path d="M-88.591,182.128L-88.591,181.999L-88.701,181.812C-88.762,181.709,-88.811,181.623,-88.811,181.621C-88.811,181.618,-88.783,181.617,-88.72,181.618L-88.628,181.619L-88.568,181.729C-88.535,181.789,-88.507,181.838,-88.505,181.838C-88.504,181.838,-88.477,181.789,-88.445,181.729L-88.387,181.619L-88.297,181.618C-88.248,181.618,-88.207,181.618,-88.207,181.619C-88.207,181.621,-88.414,181.971,-88.423,181.983C-88.427,181.989,-88.428,182.018,-88.428,182.124L-88.428,182.256L-88.509,182.256L-88.591,182.256L-88.591,182.128z"/><path d="M-89.308,182.253C-89.309,182.252,-89.31,182.227,-89.309,182.198L-89.309,182.146L-89.264,182.145L-89.218,182.144L-89.218,181.937L-89.218,181.73L-89.264,181.729L-89.309,181.728L-89.309,181.673L-89.309,181.619L-89.136,181.618L-88.962,181.617L-88.962,181.673L-88.962,181.73L-89.007,181.73L-89.052,181.73L-89.052,181.937L-89.052,182.144L-89.007,182.144L-88.962,182.144L-88.962,182.2L-88.962,182.256L-89.135,182.256C-89.229,182.256,-89.307,182.255,-89.308,182.253z"/><path d="M-89.906,182.262C-89.962,182.248,-89.99,182.234,-90.052,182.192C-90.115,182.15,-90.15,182.131,-90.192,182.113L-90.219,182.103L-90.219,182.053C-90.218,182.025,-90.218,181.942,-90.218,181.868L-90.217,181.733L-90.201,181.726C-90.162,181.711,-90.115,181.686,-90.064,181.652C-90.005,181.613,-89.953,181.586,-89.917,181.577C-89.823,181.553,-89.733,181.562,-89.646,181.605C-89.56,181.648,-89.498,181.721,-89.464,181.821C-89.453,181.85,-89.453,181.856,-89.453,181.919L-89.453,181.987L-89.467,182.025C-89.487,182.08,-89.51,182.117,-89.545,182.155C-89.598,182.21,-89.66,182.246,-89.739,182.264C-89.787,182.275,-89.858,182.274,-89.906,182.262z"/><path d="M-92.152,182.549C-92.178,182.546,-92.225,182.541,-92.257,182.537C-92.288,182.534,-92.338,182.529,-92.367,182.526C-92.396,182.522,-92.435,182.518,-92.454,182.516C-92.473,182.514,-92.513,182.509,-92.542,182.506C-92.571,182.503,-92.62,182.498,-92.651,182.494C-92.681,182.491,-92.729,182.486,-92.757,182.483C-92.786,182.48,-92.81,182.477,-92.811,182.476C-92.813,182.474,-92.8,182.436,-92.783,182.391C-92.754,182.314,-92.752,182.309,-92.742,182.307C-92.736,182.307,-92.705,182.311,-92.672,182.316C-92.64,182.321,-92.588,182.329,-92.559,182.334C-92.529,182.338,-92.495,182.343,-92.483,182.345C-92.471,182.347,-92.437,182.353,-92.408,182.357C-92.378,182.362,-92.339,182.368,-92.32,182.37C-92.302,182.373,-92.287,182.375,-92.287,182.375C-92.286,182.374,-92.373,182.314,-92.479,182.241C-92.586,182.168,-92.674,182.107,-92.675,182.106C-92.675,182.104,-92.663,182.068,-92.646,182.024L-92.616,181.945L-92.597,181.945C-92.587,181.945,-92.555,181.948,-92.528,181.951C-92.5,181.955,-92.455,181.961,-92.427,181.964C-92.399,181.967,-92.365,181.972,-92.351,181.974C-92.329,181.977,-92.302,181.98,-92.197,181.993C-92.178,181.995,-92.159,181.997,-92.154,181.997C-92.148,181.997,-92.215,181.952,-92.34,181.872C-92.448,181.804,-92.537,181.747,-92.538,181.745C-92.542,181.742,-92.481,181.576,-92.477,181.577C-92.471,181.578,-91.883,181.983,-91.883,181.986C-91.883,181.99,-91.945,182.161,-91.948,182.164C-91.951,182.167,-91.989,182.163,-92.237,182.138C-92.267,182.135,-92.31,182.131,-92.332,182.128C-92.354,182.126,-92.376,182.123,-92.38,182.122C-92.387,182.12,-92.388,182.121,-92.382,182.126C-92.379,182.129,-92.3,182.184,-92.206,182.249C-92.112,182.313,-92.034,182.368,-92.031,182.37C-92.024,182.377,-92.09,182.555,-92.099,182.554C-92.103,182.554,-92.126,182.551,-92.152,182.549z"/><path d="M-87.128,182.564C-87.143,182.559,-87.167,182.547,-87.182,182.537C-87.243,182.495,-87.275,182.442,-87.301,182.339C-87.31,182.305,-87.317,182.277,-87.318,182.277C-87.318,182.277,-87.335,182.28,-87.355,182.285C-87.475,182.316,-87.535,182.329,-87.537,182.328C-87.541,182.326,-87.582,182.16,-87.58,182.158C-87.579,182.158,-87.527,182.145,-87.466,182.129C-87.404,182.114,-87.299,182.089,-87.233,182.072C-87.167,182.056,-87.067,182.031,-87.011,182.018C-86.955,182.004,-86.907,181.993,-86.903,181.994C-86.898,181.995,-86.89,182.022,-86.867,182.117C-86.824,182.288,-86.82,182.309,-86.82,182.357C-86.82,182.467,-86.873,182.536,-86.98,182.566C-87.022,182.578,-87.092,182.577,-87.128,182.564z"/><path d="M-90.937,182.607C-90.969,182.591,-90.996,182.563,-91.011,182.532C-91.019,182.513,-91.021,182.505,-91.021,182.473C-91.021,182.439,-91.02,182.434,-91.008,182.41C-90.992,182.377,-90.966,182.351,-90.934,182.336C-90.911,182.325,-90.905,182.324,-90.864,182.324C-90.823,182.324,-90.818,182.325,-90.798,182.335C-90.769,182.35,-90.741,182.375,-90.725,182.4L-90.712,182.419L-90.597,182.418C-90.518,182.417,-90.48,182.416,-90.477,182.413C-90.474,182.41,-90.451,182.362,-90.425,182.304L-90.378,182.2L-90.329,182.199C-90.302,182.198,-90.276,182.2,-90.27,182.202C-90.26,182.206,-90.26,182.206,-90.266,182.22C-90.268,182.228,-90.285,182.266,-90.302,182.305C-90.32,182.343,-90.346,182.401,-90.36,182.432C-90.389,182.497,-90.407,182.52,-90.431,182.525C-90.438,182.527,-90.505,182.529,-90.581,182.53L-90.717,182.532L-90.73,182.552C-90.746,182.577,-90.771,182.599,-90.796,182.611C-90.813,182.619,-90.821,182.62,-90.863,182.62C-90.909,182.62,-90.91,182.62,-90.937,182.607z"/><path d="M-89.824,182.831C-89.825,182.829,-89.826,182.809,-89.826,182.786L-89.826,182.744L-88.327,182.744L-86.828,182.744L-86.828,182.789L-86.828,182.833L-88.325,182.833C-89.148,182.833,-89.822,182.832,-89.824,182.831z"/><path d="M-90.825,182.969L-90.825,182.926L-88.827,182.926L-86.828,182.926L-86.828,182.969L-86.828,183.012L-88.827,183.012L-90.825,183.012L-90.825,182.969z"/><path d="M-92.82,183.147L-92.82,183.105L-89.824,183.105L-86.828,183.105L-86.828,183.147L-86.828,183.19L-89.824,183.19L-92.82,183.19L-92.82,183.147z"/></g></svg>`;

function initApp() {
  // Inject Workshop DIY logo
  $('workshopLogo').innerHTML = WORKSHOP_LOGO_SVG;

  setupSidebar();
  setupForge();
  setupTheme();
  setupLanguage();
  setupOps();
  setupExploits();
  setupPayload();
  setupSignals();
  setupCrypto();
  setupAgent();
  setupTerminal();
  setupNetworkScan();
  setupEncryptor();
  setupManifesto();
  setupKonami();
  setupGlitchTransitions();
  setupBgRain();
  setupTypingSounds();
  setupHeartbeat();
  setupStego();
  setupIpFaker();
  setupPwTest();
  setupAscii();
  setupQr();
  setupBadge();
  setupShare();
  setupAchievements();
  setupThemeBuilder();
  setupAmbient();
  setupVoice();
  setupWifi();
  setupPhish();
  setupChat();
  setupDeadDrop();
  setupWanted();
  setupSelfDestruct();
  setupFingerprint();
  setupSatellite();
  setupDarkWeb();
  setupFakeDesktop();
  setupNewsTicker();
  setupPlanet();
  setupCCTV();
  setupDrone();
  setupFaceGlitch();
  setupDeadSwitch();
  setupBattle();
  setupBios();
  setupRansom();
  setupCrack();
  setupSys32();
  setupDemo();
  renderMaskGrid();
  loadSavedMask();
  renderSloganArchive();
  setupModeButtons();
  hookXpGains();
  addExtraExploits();

  // Start default mode
  startRotation();
}

/* ═══════════════════════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════════════════════ */

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/* ═══════════════════════════════════════════════════════════════
   CSS ANIMATION INJECTION
   ═══════════════════════════════════════════════════════════════ */

const styleExtra = document.createElement('style');
styleExtra.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes wallLineIn {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;
document.head.appendChild(styleExtra);

/* ═══════════════════════════════════════════════════════════════
   START
   ═══════════════════════════════════════════════════════════════ */

runSplashScreen();
