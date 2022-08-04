import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import Contactform from '../pure/forms/contactform';


const ContactListComponent = () => {

    const contact1 = new Contact('jorge', '123', 'jorge@gmail.com', false);
    const contact2 = new Contact('andres', '456', 'andres@gmail.com', true);
    const contact3 = new Contact('luisa', '789', 'luisa@gmail.com', false);

    const [contacts, setContacts] = useState([contact1, contact2, contact3]);

    function contactConected(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }

    function userDeleted(contact) {
        const index = contacts.indexOf(contact); //OBTENER EL INDEX
        const tempContacts = [...contacts]; // OBTENER TODAS LAS TAREAS
        tempContacts.splice(index, 1);
        //actualizar todo el listado de tareas
        setContacts(
            tempContacts
        )
    }

    function addContact(contact) {
        const index = contacts.indexOf(contact); //OBTENER EL INDEX
        const tempContacts = [...contacts]; // OBTENER TODAS LAS TAREAS

        tempContacts.push(contact);
        //actualizar todo el listado de tareas
        setContacts(
            tempContacts
        )
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">List Contact</h5>
                    <table className="table table-striped-columns">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cellphone</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contacts, index) => {
                                return <ContactComponent
                                    key={index}
                                    contact={contacts}
                                    conected={contactConected}
                                    remove={userDeleted}
                                >

                                </ContactComponent>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
            <Contactform
                add={addContact}
            ></Contactform>
        </div >
    );
};


ContactListComponent.propTypes = {

};


export default ContactListComponent;
