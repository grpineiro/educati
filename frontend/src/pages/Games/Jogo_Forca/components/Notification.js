import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div id={`notification-container ${showNotification ? "show" : ""}`}>
      <p id="notification_p">Você já selecionou essa letra antes</p>
    </div>
  );
};

export default Notification;
