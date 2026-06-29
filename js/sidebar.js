/**
 * EduCore SMS — Sidebar HTML Generator (Full 18-Module Version)
 * Call: renderSidebar(activeSection, activeItem, depth)
 * depth: '' = root, '../' = one folder deep, '../../' = two folders deep
 */
function renderSidebar(activeSection, activeItem, depth) {
  depth = depth || '';
  var d = depth;

  var sections = [
    {
      label: 'Overview', items: [
        {
          type: 'accordion', id: 'dash', icon: iconGrid, label: 'Dashboards', children: [
            { href: d + 'index.html',                                   label: 'Super Admin',        id: 'super-admin' },
            { href: d + 'dashboards/student-dashboard.html',            label: 'Student Dashboard',  id: 'student-dash' },
            { href: d + 'dashboards/teacher-dashboard.html',            label: 'Teacher Dashboard',  id: 'teacher-dash' },
            { href: d + 'dashboards/branch-dashboard.html',             label: 'Branch Dashboard',   id: 'branch-dash' },
            { href: d + 'dashboards/library-dashboard.html',            label: 'Library Dashboard',  id: 'library-dash' },
            { href: d + 'dashboards/parent-dashboard.html',             label: 'Parent Dashboard',   id: 'parent-dash' }
          ]
        }
      ]
    },
    {
      label: 'Academic', items: [
        {
          type: 'accordion', id: 'students', icon: iconStudents, label: 'Students', badge: '1,248', children: [
            { href: d + 'modules/students/list.html',        label: 'All Students',         id: 'students-list' },
            { href: d + 'modules/students/add.html',         label: 'Add Student',          id: 'students-add' },
            { href: d + 'modules/students/profile.html',     label: 'Student Profile',      id: 'students-profile' },
            { href: d + 'modules/students/assign.html',      label: 'Class Assignment',     id: 'students-assign' },
            { href: d + 'modules/students/siblings.html',    label: 'Sibling Linking',      id: 'students-siblings' },
            { href: d + 'modules/students/tc.html',          label: 'Transfer Certificate', id: 'students-tc' },
            { href: d + 'modules/students/id-card.html',     label: 'ID Card Generator',    id: 'students-id' },
            { href: d + 'modules/students/health.html',      label: 'Health Records',       id: 'students-health' }
          ]
        },
        {
          type: 'accordion', id: 'teachers', icon: iconTeachers, label: 'Staff & HR', children: [
            { href: d + 'modules/staff/add.html',          label: 'Onboarding',           id: 'teachers-list' },
            { href: d + 'modules/staff/departments.html',  label: 'Departments',          id: 'staff-dept' },
            { href: d + 'modules/staff/attendance.html',   label: 'Attendance',           id: 'teacher-att' },
            { href: d + 'modules/staff/leave.html',        label: 'Leave Management',     id: 'teacher-leave' },
            { href: d + 'modules/staff/payroll.html',      label: 'Payroll',              id: 'teacher-payroll' },
            { href: d + 'modules/staff/appraisal.html',    label: 'Appraisal',            id: 'staff-appraisal' },
            { href: d + 'modules/staff/recruitment.html',  label: 'Recruitment',          id: 'staff-recruit' },
            { href: d + 'modules/staff/documents.html',    label: 'Document Vault',       id: 'staff-docs' }
          ]
        },
        {
          type: 'accordion', id: 'classes', icon: iconClasses, label: 'Academics', children: [
            { href: d + 'modules/academics/sessions.html',      label: 'Academic Sessions',    id: 'classes' },
            { href: d + 'modules/academics/classes.html',       label: 'Classes & Sections',   id: 'subjects' },
            { href: d + 'modules/academics/subjects.html',      label: 'Subjects',             id: 'subjects-list' },
            { href: d + 'modules/academics/timetable.html',     label: 'Timetable',            id: 'timetable' },
            { href: d + 'modules/academics/lesson-plans.html',  label: 'Lesson Plans',         id: 'lesson-plans' },
            { href: d + 'modules/academics/curriculum.html',    label: 'Curriculum',           id: 'syllabus' },
            { href: d + 'modules/academics/calendar.html',      label: 'Academic Calendar',    id: 'acad-cal' },
            { href: d + 'modules/academics/booklist.html',      label: 'Book Lists',           id: 'booklist' }
          ]
        },
        {
          type: 'accordion', id: 'exams', icon: iconExams, label: 'Exams & Assessment', children: [
            { href: d + 'modules/exams/schedule.html',       label: 'Exam Schedule',       id: 'exams' },
            { href: d + 'modules/exams/marks-entry.html',    label: 'Marks Entry',         id: 'marks-entry' },
            { href: d + 'modules/exams/grading.html',        label: 'Grading Config',      id: 'grades' },
            { href: d + 'modules/exams/report-card.html',    label: 'Report Cards',        id: 'report-cards' },
            { href: d + 'modules/exams/merit.html',          label: 'Merit List',          id: 'merit' },
            { href: d + 'modules/exams/analysis.html',       label: 'Result Analysis',     id: 'results' },
            { href: d + 'modules/exams/online-exam.html',    label: 'Online Exams',        id: 'online-exam' },
            { href: d + 'modules/exams/question-bank.html',  label: 'Question Bank',       id: 'qbank' },
            { href: d + 'modules/exams/marksheet.html',      label: 'Marksheets',          id: 'marksheet' }
          ]
        },
        {
          type: 'accordion', id: 'attendance', icon: iconAttendance, label: 'Attendance', children: [
            { href: d + 'modules/attendance/dashboard.html',  label: 'Dashboard',           id: 'att-dash' },
            { href: d + 'modules/attendance/student.html',    label: 'Student Attendance',  id: 'student-att' },
            { href: d + 'modules/attendance/staff.html',      label: 'Staff Attendance',    id: 'staff-att' },
            { href: d + 'modules/attendance/leave.html',      label: 'Leave Workflow',      id: 'att-leave' },
            { href: d + 'modules/attendance/holidays.html',   label: 'Holidays',            id: 'holidays' },
            { href: d + 'modules/attendance/analytics.html',  label: 'Analytics',           id: 'att-analytics' },
            { href: d + 'modules/attendance/reports.html',    label: 'Reports',             id: 'att-reports' },
            { href: d + 'modules/attendance/gatepass.html',   label: 'Gate Pass',           id: 'gatepass' },
            { href: d + 'modules/attendance/biometric.html',  label: 'Biometric',           id: 'biometric' },
            { href: d + 'modules/attendance/alerts.html',     label: 'Alerts & Audit',      id: 'att-alerts' }
          ]
        }
      ]
    },
    {
      label: 'Finance', items: [
        {
          type: 'accordion', id: 'finance', icon: iconFinance, label: 'Fee Management', children: [
            { href: d + 'modules/fees/structure.html',        label: 'Fee Structure',       id: 'fee-structure' },
            { href: d + 'modules/fees/schedules.html',        label: 'Fee Schedules',       id: 'fee-sched' },
            { href: d + 'modules/fees/receipts.html',         label: 'Receipts',            id: 'collect-fee' },
            { href: d + 'modules/fees/online-payment.html',   label: 'Online Payment',      id: 'online-pay' },
            { href: d + 'modules/fees/defaulters.html',       label: 'Defaulters',          id: 'dues' },
            { href: d + 'modules/fees/concession.html',       label: 'Concessions',         id: 'concession' },
            { href: d + 'modules/fees/fines.html',            label: 'Late Fines',          id: 'fee-fines' },
            { href: d + 'modules/fees/gst-invoice.html',      label: 'GST Invoices',        id: 'gst-inv' }
          ]
        },
        {
          type: 'accordion', id: 'accounts-mod', icon: iconAccounts, label: 'Accounts', children: [
            { href: d + 'modules/accounts/ledger.html',         label: 'Ledger',            id: 'accounts' },
            { href: d + 'modules/accounts/heads.html',          label: 'Income & Exp Heads',id: 'acc-heads' },
            { href: d + 'modules/accounts/petty-cash.html',     label: 'Petty Cash',        id: 'petty-cash' },
            { href: d + 'modules/accounts/bank-recon.html',     label: 'Bank Reconciliation',id: 'bank-recon' },
            { href: d + 'modules/accounts/vendor.html',         label: 'Vendor Payments',   id: 'expense' },
            { href: d + 'modules/accounts/budget.html',         label: 'Budget',            id: 'budget' },
            { href: d + 'modules/accounts/trial-balance.html',  label: 'Trial Balance',     id: 'trial-bal' },
            { href: d + 'modules/accounts/audit.html',          label: 'Audit Trail',       id: 'acc-audit' }
          ]
        }
      ]
    },
    {
      label: 'Campus', items: [
        {
          type: 'accordion', id: 'library', icon: iconLibrary, label: 'Library', children: [
            { href: d + 'modules/library/catalogue.html',    label: 'Book Catalogue',      id: 'books' },
            { href: d + 'modules/library/issue-return.html', label: 'Issue / Return',      id: 'issue' },
            { href: d + 'modules/library/members.html',      label: 'Members',             id: 'lib-members' },
            { href: d + 'modules/library/fines.html',        label: 'Fines',               id: 'lib-fines' },
            { href: d + 'modules/library/reservations.html', label: 'Reservations',        id: 'lib-reserve' },
            { href: d + 'modules/library/ebooks.html',       label: 'E-Books',             id: 'ebooks' },
            { href: d + 'modules/library/analytics.html',    label: 'Library Analytics',   id: 'lib-analytics' },
            { href: d + 'modules/library/opac.html',         label: 'OPAC Search',         id: 'opac' }
          ]
        },
        {
          type: 'accordion', id: 'hostel', icon: iconHostel, label: 'Hostel', children: [
            { href: d + 'modules/hostel/rooms.html',           label: 'Rooms',             id: 'rooms' },
            { href: d + 'modules/hostel/allocation.html',      label: 'Allocation',        id: 'allocation' },
            { href: d + 'modules/hostel/checkin.html',         label: 'Check-In / Out',    id: 'hostel-checkin' },
            { href: d + 'modules/hostel/fees.html',            label: 'Hostel Fees',       id: 'hostel-fees' },
            { href: d + 'modules/hostel/wardens.html',         label: 'Wardens',           id: 'warden' },
            { href: d + 'modules/hostel/mess.html',            label: 'Mess Menu',         id: 'mess' },
            { href: d + 'modules/hostel/visitors.html',        label: 'Visitor Register',  id: 'visitors' },
            { href: d + 'modules/hostel/night-attendance.html',label: 'Night Attendance',  id: 'night-att' }
          ]
        },
        {
          type: 'accordion', id: 'transport', icon: iconTransport, label: 'Transport', children: [
            { href: d + 'modules/transport/routes.html',      label: 'Routes',             id: 'routes' },
            { href: d + 'modules/transport/vehicles.html',    label: 'Vehicles',           id: 'vehicles' },
            { href: d + 'modules/transport/drivers.html',     label: 'Drivers',            id: 'drivers' },
            { href: d + 'modules/transport/allocation.html',  label: 'Bus Allocation',     id: 'bus-alloc' },
            { href: d + 'modules/transport/tracking.html',    label: 'GPS Tracking',       id: 'tracking' },
            { href: d + 'modules/transport/fees.html',        label: 'Transport Fees',     id: 'transport-fees' },
            { href: d + 'modules/transport/bus-pass.html',    label: 'Bus Passes',         id: 'bus-pass' },
            { href: d + 'modules/transport/incidents.html',   label: 'Incidents',          id: 'incidents' }
          ]
        },
        {
          type: 'accordion', id: 'inventory-mod', icon: iconInventory, label: 'Inventory', children: [
            { href: d + 'modules/inventory/assets.html',      label: 'Asset Register',     id: 'inv-assets' },
            { href: d + 'modules/inventory/stock.html',       label: 'Stock',              id: 'inv-stock' },
            { href: d + 'modules/inventory/purchase.html',    label: 'Purchase Orders',    id: 'inv-po' },
            { href: d + 'modules/inventory/vendors.html',     label: 'Vendors',            id: 'inv-vendors' },
            { href: d + 'modules/inventory/maintenance.html', label: 'Maintenance',        id: 'inv-maint' },
            { href: d + 'modules/inventory/audit.html',       label: 'Stock Audit',        id: 'inv-audit' }
          ]
        },
        {
          type: 'accordion', id: 'sports-mod', icon: iconSports, label: 'Sports & Activities', children: [
            { href: d + 'modules/sports/clubs.html',         label: 'Clubs',               id: 'sports-clubs' },
            { href: d + 'modules/sports/participation.html', label: 'Participation',        id: 'sports-part' },
            { href: d + 'modules/sports/achievements.html',  label: 'Achievements',         id: 'sports-ach' },
            { href: d + 'modules/sports/sports-day.html',    label: 'Sports Day',           id: 'sports-day' },
            { href: d + 'modules/sports/competitions.html',  label: 'Competitions',         id: 'sports-comp' },
            { href: d + 'modules/sports/equipment.html',     label: 'Equipment',            id: 'sports-equip' },
            { href: d + 'modules/sports/reports.html',       label: 'Reports',              id: 'sports-rpt' }
          ]
        },
        {
          type: 'accordion', id: 'health-mod', icon: iconHealth, label: 'Health & Medical', children: [
            { href: d + 'modules/health/history.html',      label: 'Medical History',       id: 'health-hist' },
            { href: d + 'modules/health/checkups.html',     label: 'Health Checkups',       id: 'health-chk' },
            { href: d + 'modules/health/vaccination.html',  label: 'Vaccination',           id: 'health-vax' },
            { href: d + 'modules/health/sick-room.html',    label: 'Sick Room',             id: 'health-sick' },
            { href: d + 'modules/health/medicines.html',    label: 'Medicines',             id: 'health-med' },
            { href: d + 'modules/health/bmi.html',          label: 'BMI & Growth',          id: 'health-bmi' },
            { href: d + 'modules/health/emergency.html',    label: 'Emergency Protocol',    id: 'health-emg' }
          ]
        }
      ]
    },
    {
      label: 'Communication', items: [
        {
          type: 'accordion', id: 'messaging', icon: iconMsg, label: 'Communication', children: [
            { href: d + 'modules/communication/noticeboard.html', label: 'Notice Board',     id: 'notices' },
            { href: d + 'modules/communication/messaging.html',   label: 'Messages',         id: 'messages' },
            { href: d + 'modules/communication/email.html',       label: 'Email Broadcast',  id: 'sms-email' },
            { href: d + 'modules/communication/events.html',      label: 'Events',           id: 'events' },
            { href: d + 'modules/communication/emergency.html',   label: 'Emergency Alert',  id: 'emergency-msg' },
            { href: d + 'modules/communication/scheduler.html',   label: 'Scheduler',        id: 'msg-sched' },
            { href: d + 'modules/communication/receipts.html',    label: 'Read Receipts',    id: 'read-receipts' }
          ]
        },
        {
          type: 'accordion', id: 'parent-portal', icon: iconParents, label: 'Parent Portal', children: [
            { href: d + 'modules/parent-portal/attendance.html',   label: 'Attendance View',  id: 'parents' },
            { href: d + 'modules/parent-portal/fees.html',         label: 'Fee Payment',      id: 'parent-fees' },
            { href: d + 'modules/parent-portal/reports.html',      label: 'Progress Reports', id: 'parent-rpts' },
            { href: d + 'modules/parent-portal/leave.html',        label: 'Leave Application',id: 'parent-leave' },
            { href: d + 'modules/parent-portal/ptm.html',          label: 'PTM Booking',      id: 'parent-ptm' },
            { href: d + 'modules/parent-portal/notices.html',      label: 'Notices',          id: 'parent-notices' },
            { href: d + 'modules/parent-portal/feedback.html',     label: 'Feedback',         id: 'parent-fb' }
          ]
        }
      ]
    },
    {
      label: 'Administration', items: [
        {
          type: 'accordion', id: 'admission-mod', icon: iconAdmission, label: 'Admission', children: [
            { href: d + 'modules/admission/form.html',         label: 'Admission Form',      id: 'adm-form' },
            { href: d + 'modules/admission/enquiries.html',    label: 'Enquiries',           id: 'adm-enquiry' },
            { href: d + 'modules/admission/documents.html',    label: 'Documents',           id: 'adm-docs' },
            { href: d + 'modules/admission/entrance.html',     label: 'Entrance Test',       id: 'adm-entrance' },
            { href: d + 'modules/admission/merit.html',        label: 'Merit List',          id: 'adm-merit' },
            { href: d + 'modules/admission/analytics.html',    label: 'Analytics',           id: 'adm-analytics' }
          ]
        },
        {
          type: 'accordion', id: 'reports', icon: iconReports, label: 'Reports', children: [
            { href: d + 'modules/reports/enrollment.html',   label: 'Enrollment Report',     id: 'rpt-att' },
            { href: d + 'modules/reports/attendance.html',   label: 'Attendance Report',     id: 'rpt-att2' },
            { href: d + 'modules/reports/fees.html',         label: 'Fee Report',            id: 'rpt-fin' },
            { href: d + 'modules/reports/results.html',      label: 'Results Report',        id: 'rpt-perf' },
            { href: d + 'modules/reports/finance.html',      label: 'Finance Report',        id: 'rpt-finance' },
            { href: d + 'modules/reports/performance.html',  label: 'Performance Report',    id: 'rpt-class' },
            { href: d + 'modules/reports/custom.html',       label: 'Custom Reports',        id: 'rpt-custom' },
            { href: d + 'modules/reports/export.html',       label: 'Export Data',           id: 'rpt-export' }
          ]
        },
        {
          type: 'accordion', id: 'admin', icon: iconAdmin, label: 'System Admin', children: [
            { href: d + 'modules/settings/users.html',         label: 'User Management',     id: 'users' },
            { href: d + 'modules/settings/roles.html',         label: 'Roles & Permissions', id: 'roles' },
            { href: d + 'modules/settings/branches.html',      label: 'Branches',            id: 'branches' },
            { href: d + 'modules/settings/audit-log.html',     label: 'Audit Log',           id: 'audit-log' },
            { href: d + 'modules/settings/rollover.html',      label: 'Year Rollover',       id: 'acad-year' },
            { href: d + 'modules/settings/backup.html',        label: 'Backup & Restore',    id: 'backup' }
          ]
        },
        { type: 'link', icon: iconSettings, label: 'Settings', href: d + 'modules/settings/school-profile.html', id: 'settings' }
      ]
    }
  ];

  var html = '';
  sections.forEach(function(section) {
    html += '<div class="nav-section"><div class="nav-section-label">' + section.label + '</div>';
    section.items.forEach(function(item) {
      if (item.type === 'link') {
        html += '<a class="nav-item' + (activeItem === item.id ? ' active' : '') + '" href="' + item.href + '" data-tooltip="' + item.label + '">' +
          '<div class="nav-icon">' + item.icon + '</div><span>' + item.label + '</span>' +
          (item.badge ? '<span class="nav-badge">' + item.badge + '</span>' : '') +
          '</a>';
      } else {
        var isOpen = item.children.some(function(c){ return c.id === activeItem; }) || activeSection === item.id;
        html += '<div class="accordion-header' + (isOpen ? ' open active' : '') + '" onclick="toggleAccordion(this)" data-tooltip="' + item.label + '">' +
          '<div class="nav-icon">' + item.icon + '</div>' +
          '<span>' + item.label + '</span>' +
          (item.badge ? '<span class="nav-badge">' + item.badge + '</span>' : '') +
          '<div class="accordion-arrow"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>' +
          '</div>' +
          '<div class="accordion-body' + (isOpen ? ' open' : '') + '">';
        item.children.forEach(function(child) {
          html += '<a class="sub-item' + (activeItem === child.id ? ' active' : '') + '" href="' + child.href + '">' +
            '<div class="sub-dot"></div>' + child.label + '</a>';
        });
        html += '</div>';
      }
    });
    html += '</div>';
  });

  // Footer
  html += '<div class="sidebar-footer">' +
    '<div class="avatar">SA</div>' +
    '<div class="sidebar-footer-info">' +
    '<div class="sidebar-footer-name">Super Admin</div>' +
    '<div class="sidebar-footer-role">Administrator</div>' +
    '</div></div>';

  var el = document.getElementById('sidebar-nav');
  if (el) el.innerHTML = html;
}

// ── SVG ICONS ─────────────────────────────────────────────────────────────────
var iconGrid      = '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>';
var iconStudents  = '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
var iconTeachers  = '<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
var iconClasses   = '<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>';
var iconExams     = '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>';
var iconAttendance= '<svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>';
var iconFinance   = '<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>';
var iconAccounts  = '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>';
var iconLibrary   = '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>';
var iconHostel    = '<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';
var iconTransport = '<svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h5l3 3v3h-8V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>';
var iconInventory = '<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>';
var iconSports    = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8l2.5 5H9.5L12 8z"/><path d="M12 16v2"/></svg>';
var iconHealth    = '<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>';
var iconMsg       = '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
var iconParents   = '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>';
var iconAdmission = '<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>';
var iconAdmin     = '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
var iconReports   = '<svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>';
var iconSettings  = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>';
