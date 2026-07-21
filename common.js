// ════════════════════════════════════════════════════════════════════
// VTS 共用工具（三頁共用：index.html / quiz.html / result.html）
// ════════════════════════════════════════════════════════════════════

// ── 主題 ──
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'dark');

function toggleTheme() {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

/** HTML 跳脫：防止 XSS */
function h(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/** Fisher-Yates 洗牌（in-place） */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/** Set 相等比較 */
function setsEqual(a, b) {
    return a.size === b.size && [...a].every(x => b.has(x));
}
