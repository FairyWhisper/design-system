import React from "react";
import "./Alerts.css";

export default function Alerts() {
  const alerts = [
    { type: "info", message: "This is an informational alert." },
    { type: "success", message: "Your changes have been saved successfully!" },
    { type: "warning", message: "Please check your input values." },
    { type: "error", message: "Something went wrong. Try again later." },
  ];

  return (
    <div className="alerts-page">
      <h1 className="page-title">Alerts</h1>
      <p className="page-description">
        Contextual messages used to communicate status, feedback, or warnings.
      </p>

      <div className="alerts-container">
        {alerts.map((alert, index) => (
          <div key={index} className={`alert alert-${alert.type}`}>
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
}
