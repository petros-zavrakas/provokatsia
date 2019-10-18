import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import { wrapWordsWithSpan } from "../../common/utils/utils";
import { Title } from "./EventsList.styles";

const EventsList = props => {
  const { events, title } = props;

  return (
    <div data-test="eventsListComponent">
      <Title>{wrapWordsWithSpan(title)}</Title>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      place: PropTypes.string,
      mapsLink: PropTypes.string,
      address: PropTypes.string,
      facebookEvent: PropTypes.string,
      date: PropTypes.string
    })
  )
};

export default EventsList;
