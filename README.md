# SKP Engineering Attendance

A professional attendance management website for SKP Engineering College.

## Features
- Secure role-based login for admin, faculty, and student accounts
- Daily period-wise attendance tracking by class and department
- Attendance percentage lookup by department and roll number
- Student and faculty leave request workflow with parent/admin notifications
- Editable institution contact block managed by admin only
- CSV export for attendance data and reporting
- Professional institutional landing page and dashboard layout

## Run locally
Open `index.html` directly in a browser, or serve the folder with a simple local web server.

Example:

```bash
python3 -m http.server 3000
```

Then visit:

```text
http://localhost:3000
```

## Project structure
- `index.html` – single-page attendance portal layout
- `style.css` – full responsive styling
- `script.js` – attendance logic, interaction handling, CSV export
- `logo.svg` – SKP institutional logo

## Notes
This front-end prototype includes secure design patterns and role-based UX flows. For the full production version, it can be extended with authentication, database storage, real SMS gateways, and admin APIs.
