import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = props =>
    <div>
        <h2>Invitees</h2>
        <label>
            <input
                type="checkbox"
                onChange={props.handleCheck}
                checked={props.isChecked} /> Hide those who haven't responded
          </label>
    </div>

ConfirmedFilter.propTypes = {
    handleCheck: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired
}

export default ConfirmedFilter;