import React, { useState, useEffect } from 'react';
import './Calendar.css';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate Sunday sessions for the next 2 years
  const generateSessions = () => {
    const sessions = [];
    const startDate = new Date();
    const endDate = new Date();
    endDate.setFullYear(endDate.getFullYear() + 2); // 2 years into the future

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      // Check if it's Sunday (0) and during January-March
      if (d.getDay() === 0 && d.getMonth() >= 0 && d.getMonth() <= 2) {
        sessions.push(new Date(d));
      }
    }
    return sessions;
  };

  const sessions = generateSessions();

  // Custom calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getMonthName = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const isSessionDay = (date) => {
    return sessions.some(session => 
      session.toDateString() === date.toDateString()
    );
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelectedDate = (date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      days.push(date);
    }

    return days;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const handleDateClick = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const getUpcomingSessions = () => {
    const today = new Date();
    return sessions
      .filter(session => session >= today)
      .slice(0, 5)
      .map(session => ({
        date: session,
        time: '4:00 PM - 5:00 PM',
        location: 'Franklin Lakes Racquet Club'
      }));
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="calendar-page">
      <div className="calendar-hero">
        <div className="container">
          <h1 className="calendar-title">Program Schedule</h1>
          <p className="calendar-subtitle">
            Sunday tennis sessions from January through March
          </p>
        </div>
      </div>

      <div className="calendar-content">
        <div className="container">
          <div className="calendar-grid">
            <div className="calendar-main">
              <div className="calendar-wrapper">
                <div className="custom-calendar">
                  {/* Calendar Header */}
                  <div className="calendar-header">
                    <button 
                      className="nav-button"
                      onClick={() => navigateMonth(-1)}
                      aria-label="Previous month"
                    >
                      ‹
                    </button>
                    <h2 className="month-year">{getMonthName(currentDate)}</h2>
                    <button 
                      className="nav-button"
                      onClick={() => navigateMonth(1)}
                      aria-label="Next month"
                    >
                      ›
                    </button>
                  </div>

                  {/* Days of Week Header */}
                  <div className="weekdays-header">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="weekday-label">{day}</div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="calendar-days-grid">
                    {generateCalendarDays().map((date, index) => (
                      <div
                        key={index}
                        className={`calendar-day ${
                          date ? 'active-day' : 'empty-day'
                        } ${
                          date && isToday(date) ? 'today' : ''
                        } ${
                          date && isSelectedDate(date) ? 'selected' : ''
                        } ${
                          date && isSessionDay(date) ? 'session-day' : ''
                        }`}
                        onClick={() => handleDateClick(date)}
                      >
                        {date && (
                          <>
                            <span className="day-number">{date.getDate()}</span>
                            {isSessionDay(date) && (
                              <div className="session-indicator">
                                <span className="session-dot"></span>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="calendar-legend">
                <h3>Legend</h3>
                <div className="legend-item">
                  <span className="legend-dot session-dot"></span>
                  <span>Sunday Tennis Session</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot regular-day"></span>
                  <span>Regular Day</span>
                </div>
              </div>
            </div>

            <div className="calendar-sidebar">
              <div className="selected-date-info">
                <h3>Selected Date</h3>
                <div className="date-display">
                  {formatDate(selectedDate)}
                </div>
                {sessions.some(session => 
                  session.toDateString() === selectedDate.toDateString()
                ) ? (
                  <div className="session-details">
                    <h4>🎾 Sunday Tennis Session</h4>
                    <p><strong>Time:</strong> 4:00 PM - 5:00 PM</p>
                    <p><strong>Location:</strong> Franklin Lakes Racquet Club</p>
                    <p><strong>Type:</strong> Weekly Sunday Program</p>
                  </div>
                ) : (
                  <div className="no-session">
                    <p>No session scheduled for this date.</p>
                  </div>
                )}
              </div>

              <div className="upcoming-sessions">
                <h3>Upcoming Sessions</h3>
                {getUpcomingSessions().map((session, index) => (
                  <div key={index} className="upcoming-session">
                    <div className="session-date">
                      {session.date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="session-info">
                      <div className="session-time">{session.time}</div>
                      <div className="session-location">{session.location}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="program-info">
                <h3>Program Information</h3>
                <div className="info-item">
                  <span className="info-icon">📅</span>
                  <div>
                    <strong>Season:</strong> January - March
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏰</span>
                  <div>
                    <strong>Time:</strong> 4:00 PM - 5:00 PM
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>Location:</strong> Franklin Lakes Racquet Club
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">🎾</span>
                  <div>
                    <strong>Schedule:</strong> Every Sunday
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage; 