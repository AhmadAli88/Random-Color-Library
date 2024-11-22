import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for event clicks
import randomColor from 'randomcolor';

const Calendar = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Meeting', date: '2024-11-23', category: 'Work' },
    { id: 2, title: 'Yoga Class', date: '2024-11-24', category: 'Health' },
    { id: 3, title: 'Birthday Party', date: '2024-11-25', category: 'Personal' },
  ]);

  const categoryColors = {
    Work: randomColor({ luminosity: 'dark', seed: 'Work' }),
    Health: randomColor({ luminosity: 'dark', seed: 'Health' }),
    Personal: randomColor({ luminosity: 'dark', seed: 'Personal' }),
  };

  const handleDateClick = (info) => {
    const title = prompt('Enter event title:');
    const category = prompt('Enter category (Work, Health, Personal):');
    if (title && category) {
      setEvents([
        ...events,
        {
          id: events.length + 1,
          title,
          date: info.dateStr,
          category,
        },
      ]);
    }
  };

  return (
    <div>
      <h1>Dynamic Color-Coded Event Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events.map((event) => ({
          title: event.title,
          date: event.date,
          backgroundColor: categoryColors[event.category] || '#ccc',
          borderColor: categoryColors[event.category] || '#ccc',
        }))}
        dateClick={handleDateClick}
        editable
      />
    </div>
  );
};

export default Calendar;
