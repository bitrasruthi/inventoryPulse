import React from "react";
import "@fullcalendar/react/dist/vdom";
import FullCalendar, {
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "./event-utils";
// import EventModal from "./EventModal";
import { Popover, Whisper } from "rsuite";
import { format } from "date-fns";
import ContentWrapper from "../../components/contentWrapper";
import "./styles.css";

const Calendar = () => {
  const [editable, setEditable] = React.useState(false);
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    console.log(selectInfo);
    setEditable(true);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    console.log(clickInfo);
    setEditable(true);
  };

  return (
    <ContentWrapper>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        weekends
        editable
        selectable
        selectMirror
        dayMaxEvents
        nextDayThreshold={"09:00:00"}
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
      />
      {/* <EventModal
        open={editable}
        onClose={() => setEditable(false)}
        onAddEvent={() => {
          setEditable(false);
        }}
      /> */}
    </ContentWrapper>
  );
};

function renderEventContent(eventContent: EventContentArg) {
  const { timeText, event } = eventContent;

  const speaker = (
    <Popover title="Event" style={{ zIndex: 9999 }}>
      {timeText && (
        <>
          <div className="fc-daygrid-event-dot"></div>
          <div className="fc-event-time">
            {format(eventContent.event.start!, "HH:mm")} -{" "}
            {/* {format(eventContent.event.end!, 'HH:mm')} */}
          </div>
        </>
      )}
      <p>{event.title}</p>
    </Popover>
  );

  return (
    <Whisper
      placement="left"
      trigger="hover"
      controlId="control-id-hover"
      speaker={speaker}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        {timeText && (
          <>
            <div className="fc-daygrid-event-dot"></div>
            <div className="fc-event-time">{eventContent.timeText}</div>
          </>
        )}
        <div className="fc-event-title">{event.title}</div>
      </div>
    </Whisper>
  );
}

export default Calendar;
