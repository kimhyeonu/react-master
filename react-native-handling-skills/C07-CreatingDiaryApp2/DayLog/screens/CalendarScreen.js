import React, { useContext, useMemo, useState } from 'react';
import { format } from 'date-fns';

import LogContext from '../contexts/LogContext';
import CalendarView from '../components/CalendarView';
import FeedList from '../components/FeedList';

function CalendarScreen() {
  const { logs } = useContext(LogContext);

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {
          marked: true,
        };
        return acc;
      }, {}),
    [logs]
  );

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );

  const filteredLogs = logs.filter(
    (log) => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate
  );

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
}

export default CalendarScreen;
