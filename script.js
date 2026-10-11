const attendanceData = [
  {
    student: 'Aarav Kumar',
    roll: 'CSE-204',
    dept: 'CSE',
    periods: [1, 1, 1, 0],
    percent: 75,
    status: 'Present'
  },
  {
    student: 'Harini S',
    roll: 'CSE-210',
    dept: 'CSE',
    periods: [1, 1, 0, 1],
    percent: 75,
    status: 'Present'
  },
  {
    student: 'Nikhil R',
    roll: 'CSE-221',
    dept: 'CSE',
    periods: [0, 1, 1, 1],
    percent: 75,
    status: 'Present'
  },
  {
    student: 'Pooja M',
    roll: 'ECE-104',
    dept: 'ECE',
    periods: [1, 0, 0, 1],
    percent: 50,
    status: 'Warning'
  },
  {
    student: 'Sanjay V',
    roll: 'EEE-118',
    dept: 'EEE',
    periods: [1, 1, 1, 1],
    percent: 100,
    status: 'Present'
  }
];

const contactData = {
  office: 'SKP Engineering College, Main Administrative Block',
  phone: '+91 98765 43210',
  email: 'support@skpengineering.edu.in',
  location: 'Tiruvannamalai, Tamil Nadu'
};

const state = {
  activeRole: 'admin',
  authenticated: false
};

const studentSummary = {
  name: document.getElementById('studentName'),
  percent: document.getElementById('studentPercent'),
  status: document.getElementById('studentStatus')
};

function renderTable(records) {
  const tbody = document.getElementById('attendanceTableBody');
  tbody.innerHTML = records
    .map((entry) => {
      const presentCount = entry.periods.filter(Boolean).length;
      const percent = Math.round((presentCount / entry.periods.length) * 100);
      const statusClass = percent >= 75 ? 'good' : percent >= 50 ? 'warning' : 'danger';
      const statusLabel = percent >= 75 ? 'Present' : percent >= 50 ? 'Warning' : 'Absent';

      return `
        <tr>
          <td>${entry.student}</td>
          <td>${entry.roll}</td>
          <td>${entry.dept}</td>
          <td>${entry.periods[0] ? 'P' : 'A'}</td>
          <td>${entry.periods[1] ? 'P' : 'A'}</td>
          <td>${entry.periods[2] ? 'P' : 'A'}</td>
          <td>${entry.periods[3] ? 'P' : 'A'}</td>
          <td>
            <span class="status ${statusClass}">${percent}%</span>
          </td>
        </tr>
      `;
    })
    .join('');
}

function updateStudentSummary() {
  const dept = document.getElementById('departmentSelect').value;
  const roll = document.getElementById('rollNumberInput').value.trim();

  const found = attendanceData.find((item) => item.dept === dept && item.roll.toLowerCase() === roll.toLowerCase());

  if (!found) {
    studentSummary.name.textContent = 'No student found';
    studentSummary.percent.textContent = '—';
    studentSummary.status.textContent = 'Not found';
    studentSummary.status.className = 'status danger';
    return;
  }

  const percent = found.percent;
  const statusText = percent >= 75 ? 'Present' : percent >= 50 ? 'Warning' : 'Absent';
  const className = percent >= 75 ? 'status good' : percent >= 50 ? 'status warning' : 'status danger';

  studentSummary.name.textContent = found.student;
  studentSummary.percent.textContent = `${percent}%`;
  studentSummary.status.textContent = statusText;
  studentSummary.status.className = className;
}

function exportCsv() {
  const rows = attendanceData.map((entry) => {
    const presentCount = entry.periods.filter(Boolean).length;
    const percent = Math.round((presentCount / entry.periods.length) * 100);
    return [entry.student, entry.roll, entry.dept, ...entry.periods.map(String), String(percent)].join(',');
  });

  const csv = ['Student,Roll No,Department,Period 1,Period 2,Period 3,Period 4,Attendance %', ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'skp-attendance-report.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function updateContactDisplay() {
  document.getElementById('officeText').textContent = contactData.office;
  document.getElementById('phoneText').textContent = contactData.phone;
  document.getElementById('emailText').textContent = contactData.email;
  document.getElementById('locationText').textContent = contactData.location;
}

function allowContactEdit() {
  const adminPanel = document.getElementById('adminEditPanel');
  const isAdmin = state.activeRole === 'admin';

  if (isAdmin) {
    adminPanel.classList.add('visible');
  } else {
    adminPanel.classList.remove('visible');
    alert('Only admins can edit contact details.');
  }
}

function saveContact() {
  contactData.office = document.getElementById('editOffice').value;
  contactData.phone = document.getElementById('editPhone').value;
  contactData.email = document.getElementById('editEmail').value;
  contactData.location = document.getElementById('editLocation').value;
  updateContactDisplay();
  document.getElementById('adminEditPanel').classList.remove('visible');
  alert('Contact details updated successfully.');
}

function signIn() {
  const userInput = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!userInput || !password) {
    alert('Please enter a valid email or institute ID and password.');
    return;
  }

  state.authenticated = true;
  state.activeRole = document.querySelector('.auth-tab.active')?.dataset.role || 'admin';
  alert(`${state.activeRole.charAt(0).toUpperCase() + state.activeRole.slice(1)} login successful.`);
  document.getElementById('loginShortcut').textContent = `${state.activeRole.charAt(0).toUpperCase() + state.activeRole.slice(1)} Portal`;
}

function gmailLogin() {
  alert('Gmail authentication flow can be connected to Google OAuth in the secure backend implementation.');
}

function sendStudentLeave() {
  const name = document.getElementById('studentLeaveName').value;
  const dept = document.getElementById('studentLeaveDept').value;
  const reason = document.getElementById('studentLeaveReason').value;

  if (!name || !reason) {
    alert('Please enter the student name and leave reason.');
    return;
  }

  alert(`Leave request submitted for ${name} (${dept}) to faculty. Parent SMS alert has been queued.`);
}

function sendFacultyLeave() {
  const name = document.getElementById('facultyLeaveName').value;
  const dept = document.getElementById('facultyLeaveDept').value;
  const reason = document.getElementById('facultyLeaveReason').value;

  if (!name || !reason) {
    alert('Please enter the faculty name and leave reason.');
    return;
  }

  alert(`Faculty leave request submitted for ${name} (${dept}) to the admin for approval.`);
}

document.querySelectorAll('.auth-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.auth-tab').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    state.activeRole = tab.dataset.role;
  });
});

document.getElementById('loginShortcut').addEventListener('click', () => {
  document.getElementById('loginUser').focus();
});

document.getElementById('exploreDashboard').addEventListener('click', () => {
  document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('viewReports').addEventListener('click', () => {
  document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('signInBtn').addEventListener('click', signIn);
document.getElementById('gmailLoginBtn').addEventListener('click', gmailLogin);
document.getElementById('searchStudentBtn').addEventListener('click', updateStudentSummary);
document.getElementById('exportCsvBtn').addEventListener('click', exportCsv);
document.getElementById('editContactBtn').addEventListener('click', allowContactEdit);
document.getElementById('saveContactBtn').addEventListener('click', saveContact);
document.getElementById('sendStudentLeaveBtn').addEventListener('click', sendStudentLeave);
document.getElementById('sendFacultyLeaveBtn').addEventListener('click', sendFacultyLeave);

document.getElementById('departmentSelect').addEventListener('change', updateStudentSummary);
document.getElementById('rollNumberInput').addEventListener('input', updateStudentSummary);

renderTable(attendanceData);
updateStudentSummary();
updateContactDisplay();
