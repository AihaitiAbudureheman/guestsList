import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = props =>
    <form onSubmit={props.handleNewGuest}>
        <input
            type="text"
            onChange={props.handleNameInput}
            value={props.pendingGuest}
            placeholder="Enter your guest name..." />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>
   
export default GuestInputForm;