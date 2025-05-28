#  Ship Maintenance Dashboard

A fully custom-built React-based Ship Maintenance Dashboard for managing ship data, components, maintenance jobs, and performance KPIs. This dashboard simulates authentication, provides a calendar view, and supports real-time notifications — all with data persistence via localStorage.

##  Features

-  **Authentication Simulation** (Login & Logout)
-  **Ship Management** (Add, View, Edit, Delete Ships)
-  **Component Management** (Ship Components tracking)
-  **Maintenance Jobs** (Create, Assign, Track Jobs)
-  **Calendar View** (Job deadlines & scheduling)
-  **Notification System** (Job deadlines, component issues)
-  **KPI Dashboard** (Performance metrics & summary)
-  **Data Persistence** (via browser's localStorage)
-  **Responsive UI** (Mobile & Desktop optimized)
-  **Custom Styling** with `main.css`

## Tech Stack

- **React**
- **React Router DOM**
- **Context API**
- **Tailwind CSS / Custom CSS**
- **localStorage API**

## Folder Structure

src/
├── components/
│ ├── Authentication/
│ │ ├── LoginForm.jsx
│ ├── Dashboard/
│ │ ├── KPICards.jsx
│ │ ├── Charts.jsx
│ ├── Ships/
│ │ ├── ShipList.jsx
│ │ ├── ShipDetail.jsx
│ │ ├── ShipForm.jsx
│ ├── Components/
│ │ ├── ComponentList.jsx
│ │ ├── ComponentForm.jsx
│ ├── Jobs/
│ │ ├── JobList.jsx
│ │ ├── JobForm.jsx
│ │ ├── JobCalendar.jsx
│ ├── Notifications/
│ │ ├── NotificationCenter.jsx
├── contexts/
│ ├── AuthContext.jsx
│ ├── ShipsContext.jsx
│ ├── ComponentsContext.jsx
│ ├── JobsContext.jsx
├── pages/
│ ├── LoginPage.jsx
│ ├── DashboardPage.jsx
│ ├── ShipsPage.jsx
│ ├── ShipDetailPage.jsx
│ ├── JobsPage.jsx
├── utils/
│ ├── localStorageUtils.js
│ ├── roleUtils.js
│ ├── notifications.js
├── App.jsx
├── index.js
├── styles/
│ ├── main.css


## Usage Guide
Login with any username/password (simulated).

Add a ship, then manage its components.

Create jobs for ships/components.

View jobs in calendar and track deadlines.

Monitor KPIs from the dashboard.

All data is saved in localStorage — no backend required.

## Acknowledgements
Built as a frontend assignment project with full custom code, without using any templates.

## Author        
Aayush Yadav
B.Tech in ECE with AI/ML specialization

<img width="1440" alt="Screenshot 2025-05-28 at 8 00 50 AM" src="https://github.com/user-attachments/assets/62cb6135-f3fa-4de6-b955-5352ae09ec44" />
<img width="1440" alt="Screenshot 2025-05-28 at 7 59 49 AM" src="https://github.com/user-attachments/assets/7d1f567b-ca93-4215-a64b-a5a5b8d2c1e3" />
<img width="1438" alt="Screenshot 2025-05-28 at 7 59 57 AM" src="https://github.com/user-attachments/assets/e86fc22f-609d-4767-bd92-ba36c6fbf3fc" />
<img width="913" alt="Screenshot 2025-05-28 at 1 06 02 PM" src="https://github.com/user-attachments/assets/6cb7ff78-c17b-4c87-a0c0-9d166b889b9c" />
<img width="1439" alt="Screenshot 2025-05-28 at 8 00 11 AM" src="https://github.com/user-attachments/assets/ae01b8af-0e3a-4c03-8d7a-12b626a60392" />
<img width="1437" alt="Screenshot 2025-05-28 at 8 00 19 AM" src="https://github.com/user-attachments/assets/cb566e6b-81ff-490b-908f-cfb5df851eb2" />
<img width="1437" alt="Screenshot 2025-05-28 at 8 00 25 AM" src="https://github.com/user-attachments/assets/d65d48e3-8238-4293-89f2-46316c306128" />


