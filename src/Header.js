import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = props =>
    <header>
        <h1>Guests lists</h1>
        <p>We help you to handle your guests...</p>
        <GuestInputForm
        handleNewGuest = {props.addNewGuest}
        handleNameInput = {props.addPendingGuest}
        pendingGuest = {props.pendingGuest} />
    </header>

Header.PropTypes = {
    pendingGuest: PropTypes.string.isRequired,
    handleNewGuest: PropTypes.func.isRequired,
    handleNameInput: PropTypes.func.isRequired
}

export default Header;