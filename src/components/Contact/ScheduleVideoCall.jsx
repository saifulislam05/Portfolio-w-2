import React from "react";

const ScheduleVideoCall = ({ scheduleVideoCallUrl }) => {
  return (
    <div className="content-card">
      <h3 className="h3 form-title" align="center">
        Schedule Video Call with me:
          </h3>
          <center>
              
      <img src="https://oktayshakirov.com/assets/images/calendar.png" />
          </center>
      {/* Add Calendly popup widget here with the provided scheduleVideoCallUrl */}
    </div>
  );
};

export default ScheduleVideoCall;
