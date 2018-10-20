import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest'

const GuestList = props =>
    <ul>
        <PendingGuest name={props.pending} />
        {props.guests.filter(guest => !props.filter || guest.isConfirmed)
            .map((guest, index) =>
                <Guest
                    key={index}
                    name={guest.name}
                    isConfirmed={guest.isConfirmed}
                    isEditing={guest.isEditing}
                    handleConfirmation={() => props.toggle(index)}
                    handleToggleEditing={() => props.editing(index)}
                    setName={(text) => props.setName(text, index)}
                    handleRemove={() => props.remove(index)} />
            )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggle: PropTypes.func.isRequired,
    editing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    filter: PropTypes.bool.isRequired,
    remove: PropTypes.func.isRequired,
    pending: PropTypes.string.isRequired
}
export default GuestList;



