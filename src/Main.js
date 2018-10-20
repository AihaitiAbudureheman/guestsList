import React from 'react';
import PropTypes from 'prop-types';
import ConfirmedFilter from './ConfirmedFilter';
import GuestList from './GuestList';
import Counter from './Counter';

const Main = props =>
    <div className="main">

          <ConfirmedFilter
            handleCheck={props.handleToggleFilter}
            isChecked={props.isItFiltered} />

          <Counter
            total={props.totalGuests}
            attending={props.attendingGuests}
            unconfirmed={props.unconfirmedGuests} />

          <GuestList
            guests={props.guestsList}
            toggle={props.toggleConfirmationAt}
            editing={props.toggleEditAt}
            setName={props.setNameAt}
            filter={props.isFiltered}
            remove={props.removeGuest}
            pending={props.pendingGuest} />

        </div>;

Main.PropTypes = {
    attending: PropTypes.number.isRequired,
    unconfirmed: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    isChecked: PropTypes.bool.isRequired,
    handleCheck: PropTypes.func.isRequired,
    guests: PropTypes.array.isRequired,
    toggle: PropTypes.func.isRequired,
    editing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    filter: PropTypes.bool.isRequired,
    remove: PropTypes.func.isRequired,
    pending: PropTypes.string.isRequired
}

export default Main;