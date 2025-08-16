import React, { useState } from "react";

const getMonthDays = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

// Sample Indian holidays (add more as needed)
const holidaysList = [
  { date: "2025-01-26", name: "Republic Day" },
  { date: "2025-03-29", name: "Holi" },
  { date: "2025-08-15", name: "Independence Day" },
  { date: "2025-10-02", name: "Gandhi Jayanti" },
  { date: "2025-11-01", name: "Diwali" },
  { date: "2025-12-25", name: "Christmas" }
];

function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const days = getMonthDays(currentYear, currentMonth);
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Find holidays for current month
  const holidaysThisMonth = holidaysList.filter(h => {
    const d = new Date(h.date);
    return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
  });

  // Build calendar grid
  const calendarGrid = [];
  let week = Array(firstDay).fill(null);
  days.forEach((day, i) => {
    week.push(day);
    if (week.length === 7 || i === days.length - 1) {
      calendarGrid.push(week);
      week = [];
    }
  });

  return (
    <main style={{ maxWidth: "430px", margin: "2rem auto", padding: "2rem", background: "#f7f9fa", borderRadius: "18px", boxShadow: "0 4px 24px rgba(10,37,64,0.10)" }}>
      <h1 style={{ color: "#1769aa", marginBottom: "1.5rem", textAlign: "center", fontWeight: 700, fontSize: "2rem" }}>Calendar</h1>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <button onClick={prevMonth} style={{ background: "#0a2540", color: "#fff", border: "none", borderRadius: "50%", width: "36px", height: "36px", fontSize: "1.2rem", cursor: "pointer", boxShadow: "0 2px 8px rgba(23,105,170,0.10)" }}>&lt;</button>
        <span style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#0a2540" }}>{monthNames[currentMonth]} {currentYear}</span>
        <button onClick={nextMonth} style={{ background: "#0a2540", color: "#fff", border: "none", borderRadius: "50%", width: "36px", height: "36px", fontSize: "1.2rem", cursor: "pointer", boxShadow: "0 2px 8px rgba(23,105,170,0.10)" }}>&gt;</button>
      </div>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "6px" }}>
        <thead>
          <tr style={{ background: "#eaf1fb" }}>
            <th style={{ color: '#1769aa', fontWeight: 600, padding: '0.5rem' }}>Sun</th>
            <th style={{ color: '#1769aa', fontWeight: 600, padding: '0.5rem' }}>Mon</th>
            <th style={{ color: '#1769aa', fontWeight: 600, padding: '0.5rem' }}>Tue</th>
            <th style={{ color: '#1769aa', fontWeight: 600, padding: '0.5rem' }}>Wed</th>
            <th style={{ color: '#1769aa', fontWeight: 600, padding: '0.5rem' }}>Thu</th>
            <th style={{ color: '#1769aa', fontWeight: 600, padding: '0.5rem' }}>Fri</th>
            <th style={{ color: '#1769aa', fontWeight: 600, padding: '0.5rem' }}>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendarGrid.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => {
                if (!day) return <td key={j}></td>;
                const isToday = day.toDateString() === today.toDateString();
                const holiday = holidaysThisMonth.find(h => {
                  const hd = new Date(h.date);
                  return hd.toDateString() === day.toDateString();
                });
                return (
                  <td key={day.toISOString()} style={{
                    background: isToday ? "#1769aa" : holiday ? "#ffe5b4" : "#fff",
                    color: isToday ? "#fff" : holiday ? "#d35400" : "#222",
                    fontWeight: isToday || holiday ? "bold" : "normal",
                    borderRadius: isToday ? "50%" : holiday ? "10px" : "10px",
                    textAlign: "center",
                    padding: "0.7rem",
                    boxShadow: isToday ? "0 2px 8px rgba(23,105,170,0.10)" : holiday ? "0 2px 8px rgba(211,84,0,0.10)" : "none",
                    border: isToday ? "2px solid #0a2540" : holiday ? "2px solid #d35400" : "1px solid #eaf1fb"
                  }}>
                    {day.getDate()}
                    {holiday && <span title={holiday.name} style={{ display: 'block', fontSize: '0.7rem', color: '#d35400', marginTop: '2px' }}>★</span>}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {holidaysThisMonth.length > 0 && (
        <div style={{ marginTop: '2rem', background: '#fffbe6', borderRadius: '10px', padding: '1rem', boxShadow: '0 2px 8px rgba(211,84,0,0.07)' }}>
          <h3 style={{ color: '#d35400', fontSize: '1.1rem', marginBottom: '0.7rem' }}>Holidays This Month</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {holidaysThisMonth.map(h => {
              const d = new Date(h.date);
              return (
                <li key={h.date} style={{ marginBottom: '0.5rem', color: '#d35400', fontWeight: 500 }}>
                  {d.getDate()} {monthNames[d.getMonth()]}: {h.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <style>{`
        @media (max-width: 500px) {
          main { padding: 0.5rem !important; }
          h1 { font-size: 1.2rem !important; }
          table { font-size: 0.9rem !important; }
        }
      `}</style>
    </main>
  );
}

export default Calendar;
