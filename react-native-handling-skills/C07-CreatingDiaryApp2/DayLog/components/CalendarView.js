import React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

function CalendarView({ markedDates, selectedDate, onSelectDate }) {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <Calendar
      style={styles.calendar}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        dotColor: '#009688',
        todayTextColor: '#009688',
      }}
      markedDates={markedSelectedDate}
      onDayPress={(day) => {
        onSelectDate(day.dateString);
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
