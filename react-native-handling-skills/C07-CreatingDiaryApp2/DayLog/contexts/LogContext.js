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

  return (
    <LogContext.Provider value={{ logs, onCreate }}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
