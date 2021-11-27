import React, { createContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

const LogContext = createContext();

export function LogContextProvider({ children }) {
  const [logs, setLogs] = useState(
    Array.from({ length: 8 }).map((_, index) => ({
      id: uuidV4(),
      title: `Log ${index}`,
      body: `Log ${index}`,
      date: new Date().toISOString(),
    }))
  );

  const onCreate = ({ title, body, date }) => {
    const log = {
      id: uuidV4(),
      title,
      body,
      date,
    };

    setLogs([log, ...logs]);
  };

  const onModify = (modified) => {
    const nextLogs = logs.map((log) =>
      log.id === modified.id ? modified : log
    );
    setLogs(nextLogs);
  };

  const onRemove = (id) => {
    const nextLogs = logs.filter((log) => log.id !== id);
    setLogs(nextLogs);
  };

  return (
    <LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
