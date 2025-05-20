import React, { useState } from "react";
import "./PentagonCheckin.css";

const initialData = [
  { title: "Evangelized", subtitle: "new bucket or fruit meeting", status: "Update" },
  { title: "Watched Service", subtitle: "physical or offline", status: "Update" },
  { title: "Speeched", subtitle: "speeched the 10min script", status: "Update" },
  { title: "Wacthed DB", subtitle: "on the day participation", status: "Update" },
  { title: "Done Tithes", subtitle: "10% of my income", status: "Update" },
];

const getStatusClass = (status) => {
  return status === "Yes" ? "status-yes" : "status-update";
};

export default function PentagonCheckin() {
  const [data, setData] = useState(initialData);

  const handleUpdate = (index) => {
    const newData = [...data];
    newData[index].status = "Yes";
    setData(newData);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="menu-icon">☰</div>
        <h1 className="title">
          Pentagon Check<span className="in-circle">in</span>
        </h1>
        <div className="spacer" />
      </header>

      <main className="main">
        <h2 className="section-title">Current Participation</h2>
        {data.map((item, idx) => (
          <div key={idx} className="card">
            <div className="text-content">
              <p className="card-title">{item.title}</p>
              <p className="card-subtitle">{item.subtitle}</p>
            </div>
            <button
              className={`status-button ${getStatusClass(item.status)}`}
              onClick={() => handleUpdate(idx)}
            >
              {item.status}
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}