const tabs = document.querySelectorAll('.tab-btn');
const loginSubmit = document.getElementById('loginSubmit');
const gmailLogin = document.getElementById('gmailLogin');
const searchStudentBtn = document.getElementById('searchStudentBtn');
const studentDept = document.getElementById('studentDept');
const studentRoll = document.getElementById('studentRoll');
const exportButton = document.querySelector('.export-btn');
const adminEditToggle = document.getElementById('adminEditToggle');
const adminContactPanel = document.getElementById('adminContactPanel');
const saveContactBtn = document.getElementById('saveContactBtn');
const sendStudentLeave = document.getElementById('sendStudentLeave');
const sendFacultyLeave = document.getElementById('sendFacultyLeave');

const attendanceData = {
  'CSE-204': {
    name: 'Aarav Kumar',
    dept: 'CSE',
    percent: '88.2%',
    status: 'Present',
    statusClass: 'good',
    leave: 'No leave'
  },
  'CSE-210': {
    name: 'Harini S',
    dept: 'CSE',
    percent: '75%',
    status: 'Present',
    statusClass: 'good',
    leave: 'No leave'
  },
  'ECE-104': {
    name: 'Pooja M',
    dept: 'ECE',
    percent: '50%',
    status: 'Warning',
    statusClass: 'warning',
    leave: 'One leave'
  },
  'EEE-118': {
    name: 'Sanjay V',
    dept: 'EEE',
    percent: '100%',
    status: 'Present',
    statusClass: 'good',
    leave: 'No leave'
  }
};

if (tabs.length) {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

if (loginSubmit) {
  loginSubmit.addEventListener('click', () => {
    const email = document.getElementById('authEmail')?.value.trim();
    const password = document.getElementById('authPassword')?.value.trim();

    if (!email || !password) {
      alert('Please enter your email and password.');
      return;
    }

    const role = document.querySelector('.tab-btn.active')?.dataset.role || 'admin';
    alert(`${role.charAt(0).toUpperCase() + role.slice(1)} login successful.`);
    window.location.href = 'dashboard.html';
  });
}

if (gmailLogin) {
  gmailLogin.addEventListener('click', () => {
    alert('Google Gmail SSO can be connected to the secure backend in the production version.');
  });
}

if (searchStudentBtn) {
  searchStudentBtn.addEventListener('click', () => {
    const dept = studentDept.value;
    const roll = studentRoll.value.trim();
    const key = `${dept}-${roll.replace(/^.*?[-]/, '')}`;
    const record = attendanceData[key] || attendanceData[`${dept}-${roll}`];

    const studentName = document.getElementById('studentName');
    const detailDept = document.getElementById('detailDept');
    const detailRoll = document.getElementById('detailRoll');
    const detailPercent = document.getElementById('detailPercent');
    const detailLeave = document.getElementById('detailLeave');
    const studentBadge = document.getElementById('studentBadge');

    if (!record) {
      studentName.textContent = 'Record not found';
      detailDept.textContent = dept;
      detailRoll.textContent = roll;
      detailPercent.textContent = '—';
      detailLeave.textContent = 'No data';
      studentBadge.className = 'status danger';
      studentBadge.textContent = 'Not found';
      return;
    }

    studentName.textContent = record.name;
    detailDept.textContent = record.dept;
    detailRoll.textContent = dept + '-' + roll.split('-')[1] || roll;
    detailPercent.textContent = record.percent;
    detailLeave.textContent = record.leave;
    studentBadge.className = `status ${record.statusClass}`;
    studentBadge.textContent = record.status;
  });
}

if (exportButton) {
  exportButton.addEventListener('click', () => {
    const rows = [
      ['Student', 'Roll No', 'Department', 'Period 1', 'Period 2', 'Period 3', 'Period 4', 'Attendance %'],
      ['Aarav Kumar', 'CSE-204', 'CSE', 'P', 'P', 'A', 'P', '75%'],
      ['Harini S', 'CSE-210', 'CSE', 'P', 'A', 'P', 'P', '75%'],
      ['Pooja M', 'ECE-104', 'ECE', 'P', 'A', 'A', 'P', '50%']
    ];

    const csv = rows.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'skp_attendance_report.csv';
    a.click();
    URL.revokeObjectURL(url);
  });
}

if (adminEditToggle) {
  adminEditToggle.addEventListener('click', () => {
    adminContactPanel.classList.toggle('hidden');
  });
}

if (saveContactBtn) {
  saveContactBtn.addEventListener('click', () => {
    const office = document.getElementById('contactOffice')?.value;
    const phone = document.getElementById('contactPhone')?.value;
    const email = document.getElementById('contactEmail')?.value;
    const location = document.getElementById('contactLocation')?.value;

    if (!office || !phone || !email || !location) {
      alert('Please fill all contact details.');
      return;
    }

    alert('Contact details updated successfully.');
    adminContactPanel.classList.add('hidden');
  });
}

if (sendStudentLeave) {
  sendStudentLeave.addEventListener('click', () => {
    const name = document.getElementById('studentLeaveName')?.value.trim();
    const dept = document.getElementById('studentLeaveDept')?.value;
    const reason = document.getElementById('studentLeaveReason')?.value.trim();

    if (!name || !reason) {
      alert('Please enter the student name and leave reason.');
      return;
    }

    alert(`Leave request sent for ${name} (${dept}) to the faculty. Parent SMS alert queued.`);
  });
}

if (sendFacultyLeave) {
  sendFacultyLeave.addEventListener('click', () => {
    const name = document.getElementById('facultyLeaveName')?.value.trim();
    const dept = document.getElementById('facultyLeaveDept')?.value;
    const reason = document.getElementById('facultyLeaveReason')?.value.trim();

    if (!name || !reason) {
      alert('Please enter the faculty name and leave reason.');
      return;
    }

    alert(`Faculty leave request sent for ${name} (${dept}) to the admin.`);
  });
}
