import React from "react";

const Notification = ({ message }) => {
  // console.log(message);
  if (message === null) {
    return null;
  }

  return <div className={message[1]}>{message[0]}</div>;
};

export default Notification;
