/**
 * EduCore SMS — Mobile Native App JS
 * Injects bottom navigation bar + mobile UX enhancements
 * Include AFTER app.js and sidebar.js
 */

(function () {
  'use strict';

  /* ── DETECT MOBILE ── */
  function isMobile() {
    return window.innerWidth <= 768;
  }

  /* ── BOTTOM NAV CONFIG ── */
  // Edit this to match your actual nav items
  var bottomNavItems = [
    {
      id: 'home',
      label: 'Home',
      href: 'index.html',
      icon: '<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
      matchPaths: ['index.html', '/']
    },
    {
      id: 'students',
      label: 'Students',
      href: 'modules/students/list.html',
      icon: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      matchPaths: ['students', 'admission']
    },
    {
      id: 'quick',
      label: 'Quick',
      href: '#quickActionModal',
      isFab: true,
      icon: '<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'
    },
    {
      id: 'finance',
      label: 'Finance',
      href: 'modules/fees/receipts.html',
      icon: '<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
      badge: '63',
      matchPaths: ['fees', 'finance']
    },
    {
      id: 'more',
      label: 'More',
      href: '#',
      icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
      isMore: true
    }
  ];

  /* ── INJECT BOTTOM NAV ── */
  function injectBottomNav() {
    if (document.getElementById('mobileBottomNav')) return;

    var currentPath = window.location.pathname + window.location.href;

    var items = bottomNavItems.map(function (item) {
      // Determine active state
      var isActive = false;
      if (item.matchPaths) {
        isActive = item.matchPaths.some(function (p) {
          return currentPath.indexOf(p) !== -1;
        });
      }
      // Fallback: home is active if no other matches
      if (!isActive && item.id === 'home' && currentPath.match(/index\.html$|\/$/)) {
        isActive = true;
      }

      var badgeHtml = item.badge
        ? '<span class="nav-badge">' + item.badge + '</span>'
        : '';

      if (item.isFab) {
        return (
          '<button class="nav-item nav-fab" onclick="' + (item.href[0] === '#' ? "openModal('" + item.href.slice(1) + "')" : "location.href='" + item.href + "'") + '">' +
          '  <div class="nav-fab-btn">' + item.icon + '</div>' +
          '  <span>' + item.label + '</span>' +
          '</button>'
        );
      }

      if (item.isMore) {
        return (
          '<button class="nav-item' + (isActive ? ' active' : '') + '" onclick="toggleMobileMoreSheet(event)">' +
          '  ' + item.icon + badgeHtml +
          '  <span>' + item.label + '</span>' +
          '</button>'
        );
      }

      return (
        '<a class="nav-item' + (isActive ? ' active' : '') + '" href="' + item.href + '">' +
        '  ' + item.icon + badgeHtml +
        '  <span>' + item.label + '</span>' +
        '</a>'
      );
    }).join('');

    var nav = document.createElement('nav');
    nav.id = 'mobileBottomNav';
    nav.className = 'mobile-bottom-nav';
    nav.innerHTML = items;
    document.body.appendChild(nav);
  }

  /* ── MORE SHEET ── */
  var moreSheetOpen = false;

  window.toggleMobileMoreSheet = function (e) {
    e && e.stopPropagation();
    var existing = document.getElementById('mobileMoreSheet');
    if (existing) {
      existing.remove();
      moreSheetOpen = false;
      return;
    }

    var sheet = document.createElement('div');
    sheet.id = 'mobileMoreSheet';
    sheet.className = 'action-sheet';
    sheet.innerHTML = [
      makeSheetItem('Reports', '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>', 'reports/index.html'),
      makeSheetItem('Attendance', '<svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>', 'modules/attendance/student.html'),
      makeSheetItem('Timetable', '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>', 'modules/academics/timetable.html'),
      makeSheetItem('Messages', '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>', 'communication/messages.html'),
      '<div class="action-sheet-divider"></div>',
      makeSheetItem('Settings', '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>', 'settings/index.html'),
    ].join('');

    document.body.appendChild(sheet);
    moreSheetOpen = true;

    // Close on outside tap
    setTimeout(function () {
      document.addEventListener('click', closeMobileMoreSheet, { once: true });
    }, 50);
  };

  function makeSheetItem(label, iconSvg, href) {
    return '<a class="action-sheet-item" href="' + href + '">' + iconSvg + label + '</a>';
  }

  window.closeMobileMoreSheet = function () {
    var sheet = document.getElementById('mobileMoreSheet');
    if (sheet) sheet.remove();
    moreSheetOpen = false;
  };

  /* ── TOUCH RIPPLE EFFECT ── */
  function addRipple(el) {
    el.classList.add('ripple-host');
    el.addEventListener('click', function (e) {
      if (!isMobile()) return;
      var ripple = document.createElement('span');
      ripple.className = 'ripple';
      var size = Math.max(el.offsetWidth, el.offsetHeight);
      var rect = el.getBoundingClientRect();
      ripple.style.cssText = [
        'width:' + size + 'px',
        'height:' + size + 'px',
        'left:' + (e.clientX - rect.left - size / 2) + 'px',
        'top:' + (e.clientY - rect.top - size / 2) + 'px'
      ].join(';');
      el.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 600);
    });
  }

  function initRipples() {
    document.querySelectorAll('.btn, .quick-btn, .mobile-tab').forEach(addRipple);
  }

  /* ── SWIPEABLE SIDEBAR GESTURE ── */
  function initSwipeGesture() {
    var startX = 0;
    var startY = 0;
    var threshold = 60;
    var edgeZone = 30; // px from left edge to trigger open

    document.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
      if (!isMobile()) return;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = Math.abs(e.changedTouches[0].clientY - startY);

      // Only handle if horizontal swipe is dominant
      if (Math.abs(dx) < threshold || dy > Math.abs(dx)) return;

      var layout = document.getElementById('layout');
      if (!layout) return;

      // Swipe right from left edge → open sidebar
      if (dx > 0 && startX < edgeZone) {
        layout.classList.add('sidebar-mobile-open');
      }
      // Swipe left → close sidebar
      if (dx < 0) {
        layout.classList.remove('sidebar-mobile-open');
      }
    }, { passive: true });
  }

  /* ── HAPTIC FEEDBACK (where supported) ── */
  window.mobileHaptic = function (type) {
    if (!navigator.vibrate) return;
    var patterns = { light: [10], medium: [20], heavy: [40] };
    navigator.vibrate(patterns[type] || patterns.light);
  };

  /* ── SCROLL HEADER HIDE/SHOW ── */
  function initScrollHeader() {
    if (!isMobile()) return;
    var lastScroll = 0;
    var topbar = document.querySelector('.topbar');
    if (!topbar) return;

    window.addEventListener('scroll', function () {
      var current = window.pageYOffset;
      if (current <= 60) {
        topbar.style.transform = 'translateY(0)';
        return;
      }
      if (current > lastScroll) {
        // Scrolling down — hide topbar
        topbar.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up — show topbar
        topbar.style.transform = 'translateY(0)';
      }
      lastScroll = current;
    }, { passive: true });

    topbar.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  }

  /* ── MOBILE ACCORDION ACCORDION — LARGER TAP AREA ── */
  function patchMobileAccordions() {
    if (!isMobile()) return;
    document.querySelectorAll('.sidebar-item, .sidebar-accordion-trigger').forEach(function (el) {
      el.style.minHeight = '48px';
    });
  }

  /* ── INIT ── */
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  }

  function run() {
    if (isMobile()) {
      injectBottomNav();
      initRipples();
      initSwipeGesture();
      initScrollHeader();
      patchMobileAccordions();
    }

    // Re-check on resize
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var nav = document.getElementById('mobileBottomNav');
        if (isMobile() && !nav) {
          injectBottomNav();
          initRipples();
        }
        if (!isMobile() && nav) {
          nav.remove();
        }
      }, 200);
    });
  }

  init();

})();
