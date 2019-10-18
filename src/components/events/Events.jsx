import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getIsFetching,
  getErrorMessage
} from "../../common/redux/reducers/commonReducers";
import { fetchEvents } from "./eventsActions";
import * as selectors from "./eventsSelectors";
import PageHeader from "../../common/components/page-header/PageHeader";
import EventsList from "./EventsList";
import FetchError from "../fetchError/FetchError";

export const Events = props => {
  const { upcomingEvents, previousEvents, errorMessage, isFetching } = props;

  useEffect(() => {
    props.fetchEvents();
  }, []);

  const handleActionAfterError = () => props.fetchEvents();

  return (
    <React.Fragment>
      <PageHeader header="Our Events">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        vestibulum ut augue id malesuada. Aliquam blandit tellus in ipsum
        porttitor suscipit events.
      </PageHeader>

      {errorMessage && (
        <FetchError
          errorMessage={errorMessage}
          nextAction={handleActionAfterError}
          label="Try again"
        />
      )}

      {isFetching && <p>Is fetching events...</p>}

      {upcomingEvents.length > 0 && !errorMessage && (
        <React.Fragment>
          <EventsList events={upcomingEvents} title="Upcoming Events" />
          <hr />
        </React.Fragment>
      )}
      {previousEvents.length > 0 && !errorMessage && (
        <EventsList events={previousEvents} title="Previous Events" />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  upcomingEvents: selectors.selectUpcomingEvents(state),
  previousEvents: selectors.selectPreviousEvents(state),
  errorMessage: getErrorMessage(state),
  isFetching: getIsFetching(state)
});

Events.propTypes = {
  previousEvents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      place: PropTypes.string,
      placeLink: PropTypes.string,
      address: PropTypes.string,
      facebookEvent: PropTypes.string,
      date: PropTypes.string
    })
  ),
  errorMessage: PropTypes.bool,
  isFetching: PropTypes.bool
};

export default connect(
  mapStateToProps,
  { fetchEvents }
)(Events);
