import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact, conected, remove }) => {

    function userConected() {
        if (contact.conected) {
            return <i onClick={() => conected(contact)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>
        } else {
            return <i onClick={() => conected(contact)} className='bi-toggle-off task-action' style={{ color: 'gray' }}></i>
        }
    }

    return (
        <tr>
            <th>{contact.name}</th>
            <td>{contact.cellphone}</td>
            <td>{contact.email}</td>
            <td>
                {userConected()}
                <i onClick={() => remove(contact)} className='bi-trash task-action' style={{ color: 'tomato' }}></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    conected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
