'use client';
import { useState, useEffect } from 'react';
import './ResponseMessage.css';
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
} from 'react-icons/fa';

function ResponseMessage({ type, message }) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (type === 'success') {
      setIcon(<FaCheckCircle />);
    } else if (type === 'warning') {
      setIcon(<FaExclamationCircle />);
    } else if (type === 'error') {
      setIcon(<FaTimesCircle />);
    } else {
      setIcon(null);
    }
  }, [type]);

  return (
    <div className={`response_message ${type}`}>
      <div className={`message_icon ${type}`}>{icon}</div>
      <div>{message}</div>
    </div>
  );
}

export default ResponseMessage;
