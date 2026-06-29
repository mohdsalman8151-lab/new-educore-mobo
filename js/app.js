/**
 * EduCore SMS — Shared Application JavaScript
 * Handles: Sidebar, Dark Mode, Dropdowns, Accordion, Clock, Charts helpers
 */

// ── DARK MODE ──────────────────────────────────────────────
const DARK_KEY = 'educore-theme';

function initDarkMode() {
  const saved = localStorage.getItem(DARK_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleDarkMode() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(DARK_KEY, next);
}

// ── SIDEBAR TOGGLE ─────────────────────────────────────────
const SIDEBAR_KEY = 'educore-sidebar';

function initSidebar() {
  const layout = document.getElementById('layout');
  if (!layout) return;
  const collapsed = localStorage.getItem(SIDEBAR_KEY) === 'collapsed';
  if (collapsed) layout.classList.add('sidebar-collapsed');
}

function toggleSidebar() {
  const layout = document.getElementById('layout');
  if (!layout) return;

  // Mobile: use mobile-open class
  if (window.innerWidth <= 992) {
    layout.classList.toggle('sidebar-mobile-open');
    return;
  }

  // Desktop: collapse/expand
  layout.classList.toggle('sidebar-collapsed');
  const isCollapsed = layout.classList.contains('sidebar-collapsed');
  localStorage.setItem(SIDEBAR_KEY, isCollapsed ? 'collapsed' : 'expanded');
}

function closeMobileSidebar() {
  const layout = document.getElementById('layout');
  if (layout) layout.classList.remove('sidebar-mobile-open');
}

// ── ACCORDION ──────────────────────────────────────────────
function toggleAccordion(header) {
  const body = header.nextElementSibling;
  if (!body || !body.classList.contains('accordion-body')) return;

  const isOpen = body.classList.contains('open');

  // Close all others in same group (optional: comment out for multi-open)
  // document.querySelectorAll('.accordion-body.open').forEach(b => {
  //   b.classList.remove('open');
  //   b.previousElementSibling.classList.remove('open', 'active');
  // });

  if (isOpen) {
    body.classList.remove('open');
    header.classList.remove('open');
  } else {
    body.classList.add('open');
    header.classList.add('open', 'active');
  }
}

// ── NOTIFICATION DROPDOWN ──────────────────────────────────
let notifOpen = false;

function toggleNotif(event) {
  if (event) event.stopPropagation();
  const dropdown = document.getElementById('notifDropdown');
  if (!dropdown) return;
  notifOpen = !notifOpen;
  dropdown.classList.toggle('open', notifOpen);
  // Close user dropdown if open
  const userDd = document.getElementById('userDropdown');
  if (userDd) userDd.classList.remove('open');
}

function markAllRead() {
  document.querySelectorAll('.notif-unread').forEach(el => el.remove());
  const dot = document.querySelector('.notif-dot');
  if (dot) dot.style.display = 'none';
}

// ── USER DROPDOWN ──────────────────────────────────────────
let userDdOpen = false;

function toggleUserDropdown(event) {
  if (event) event.stopPropagation();
  const dropdown = document.getElementById('userDropdown');
  if (!dropdown) return;
  userDdOpen = !userDdOpen;
  dropdown.classList.toggle('open', userDdOpen);
  // Close notif dropdown if open
  const notifDd = document.getElementById('notifDropdown');
  if (notifDd) notifDd.classList.remove('open');
  notifOpen = false;
}

// Close dropdowns on outside click
document.addEventListener('click', function (e) {
  const notifDd = document.getElementById('notifDropdown');
  const notifBtn = document.getElementById('notifBtn');
  const userDd = document.getElementById('userDropdown');
  const userBtn = document.getElementById('userBtn');

  if (notifDd && notifOpen && !notifBtn?.contains(e.target) && !notifDd.contains(e.target)) {
    notifDd.classList.remove('open');
    notifOpen = false;
  }
  if (userDd && userDdOpen && !userBtn?.contains(e.target) && !userDd.contains(e.target)) {
    userDd.classList.remove('open');
    userDdOpen = false;
  }
});

// ── CLOCK ──────────────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('tb-date');
  if (!el) return;
  const now = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const d = days[now.getDay()];
  const mo = months[now.getMonth()];
  const dt = String(now.getDate()).padStart(2, '0');
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  el.textContent = `${d} ${mo} ${dt} · ${h}:${m}`;
}

// ── ACTIVE NAV LINK ────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const fullPath = window.location.pathname;

  document.querySelectorAll('.nav-item, .sub-item').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (!href) return;
    // Normalize href relative to current page
    if (fullPath.endsWith(href) || fullPath.includes(href.replace('../', ''))) {
      link.classList.add('active');
      // Open parent accordion if sub-item
      if (link.classList.contains('sub-item')) {
        const body = link.closest('.accordion-body');
        if (body) {
          body.classList.add('open');
          const header = body.previousElementSibling;
          if (header) header.classList.add('open', 'active');
        }
      }
    }
  });
}

// ── MODAL HELPERS ──────────────────────────────────────────
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

// Close modal on backdrop click
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('open');
  }
});

// ── SEARCH FILTER ──────────────────────────────────────────
function filterTable(inputId, tableId) {
  const input = document.getElementById(inputId);
  const table = document.getElementById(tableId);
  if (!input || !table) return;
  const query = input.value.toLowerCase();
  table.querySelectorAll('tbody tr').forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none';
  });
}

// ── TOOLTIP ────────────────────────────────────────────────
function initTooltips() {
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    if (el.classList.contains('nav-item') || el.classList.contains('accordion-header')) return;
    el.style.position = 'relative';
  });
}

// ── CHART DEFAULTS ─────────────────────────────────────────
function getChartColors(theme) {
  const isDark = theme === 'dark';
  return {
    grid: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    text: isDark ? '#94A3B8' : '#6C757D',
  };
}

function applyChartDefaults() {
  if (typeof Chart === 'undefined') return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const colors = getChartColors(isDark ? 'dark' : 'light');
  Chart.defaults.color = colors.text;
  Chart.defaults.borderColor = colors.grid;
  Chart.defaults.font.family = "'DM Sans', sans-serif";
}

// ── PROGRESS BAR ANIMATION ─────────────────────────────────
function animateProgressBars() {
  document.querySelectorAll('.prog-fill[data-width]').forEach(bar => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => { bar.style.width = width; }, 100);
  });
}

// ── COUNTER ANIMATION ──────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.getAttribute('data-count'));
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1200;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = prefix + (Number.isInteger(target) ? Math.floor(current).toLocaleString() : current.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  initDarkMode();
  initSidebar();
  updateClock();
  setInterval(updateClock, 60000);
  setActiveNav();
  animateProgressBars();
  animateCounters();
  applyChartDefaults();

  // Re-apply chart defaults on theme change
  const observer = new MutationObserver(() => applyChartDefaults());
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
});

// ── RESIZE HANDLER ─────────────────────────────────────────
window.addEventListener('resize', function () {
  if (window.innerWidth > 992) {
    closeMobileSidebar();
  }
});
