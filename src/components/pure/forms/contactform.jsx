import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const Contactform = ({ add }) => {

    const nameRef = useRef('');
    const cellphoneRef = useRef('');
    const emailRef = useRef('');


    function addform(e) {
        e.preventDefault();
        const newcontact = new Contact(
            nameRef.current.value,
            cellphoneRef.current.value,
            emailRef.current.value,
            false
        )
        add(newcontact);
    }

    return (
        <form onSubmit={addform}>
            <input ref={nameRef} placeholder='Name' id='inpname' className='form-control m-2' />
            <input ref={cellphoneRef} placeholder='Cellphone' id='inpcellphone' className='form-control m-2' />
            <input ref={emailRef} placeholder='Email' id='inpemail' className='form-control m-2' />

            <button
                type='submit'
                className='btn btn-success'
            >add</button>
        </form>
    );
};


Contactform.propTypes = {
    add: PropTypes.func.isRequired
};


export default Contactform;
