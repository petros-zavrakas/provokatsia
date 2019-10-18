import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { EventCont, EventDate, EventInfo, EventActions } from "./Event.styles";
import FacebookIcon from "mdi-react/FacebookIcon";

const Event = props => {
  const { event } = props;

  return (
    <EventCont data-test="eventComponent">
      <EventDate data-test="eventDate">
        <span className="day">{moment(event.date).format("DD")}</span>
        <span className="month">{moment(event.date).format("MMM")}</span>
        <span className="year">{moment(event.date).format("YYYY")}</span>
      </EventDate>
      <EventInfo className="eventInfo">
        <h3 data-test="eventTitle">{event.title}</h3>
        <div data-test="eventPlace">
          <h4>
            {event.mapsLink ? (
              <a href={event.mapsLink} target="_blank">
                {event.place}
              </a>
            ) : (
              event.place
            )}
          </h4>
          {event.address && <span>{event.address}</span>}
        </div>
      </EventInfo>
      {event.facebookEvent && (
        <EventActions data-test="eventActions">
          <a href={event.facebookEvent} target="_blank">
            <FacebookIcon size="1.5em" color="#fff" />
          </a>
        </EventActions>
      )}
    </EventCont>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    place: PropTypes.string,
    mapsLink: PropTypes.string,
    address: PropTypes.string,
    facebookEvent: PropTypes.string,
    date: PropTypes.string
  })
};

export default Event;
