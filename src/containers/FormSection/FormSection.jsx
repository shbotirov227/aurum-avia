import React, { useState } from 'react';
import { CButton, CCol, CForm, CFormInput, CFormSelect, } from "@coreui/react";

import "./FormSection.scss";

const FormSection = () => {

    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        setValidated(true)
    }

    return (
        <div className="FormSection container" id="formSection">
            <iframe id="directions" className="FormSection-map" title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5425.907410211136!2d69.199668!3d41.289032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89a274fdb9b7%3A0x2b8bc58608ca7fb2!2sChilanzar-25%2C%20100152%2C%20Tashkent%2C%20Tashkent%20Region%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1717765098456!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <CForm
                className="FormSection-form row g-3 needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
            >
                <h3 className="FormSection-title">Make Your <span className="blueText">Reservation</span> Through This <span className="blueText">Form</span></h3>
                <CCol md={6}>
                    <CFormInput
                        className="FormSection-input"
                        type="text"
                        feedbackValid="Looks good!"
                        id="validationCustom01"
                        label="Your Name"
                        placeholder="Ex. John Smithee"
                        required
                    />
                </CCol>
                <CCol md={6}>
                    <CFormInput
                        className="FormSection-input"
                        type="text"
                        feedbackValid="Looks good!"
                        id="validationCustom02"
                        label="Your Phone Number"
                        placeholder="Ex. +998 99 123 45 67"
                        required
                    />
                </CCol>

                <CCol md={6}>
                    <CFormSelect
                        className="FormSection-input"
                        aria-describedby="validationCustom04Feedback"
                        feedbackInvalid="Please select a valid state."
                        id="validationCustom04"
                        label="Number Of Guests"
                        required
                    >
                        <option disabled>ex. 3 or 4 or 5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                    </CFormSelect>
                </CCol>

                <CCol md={6}>
                    <CFormInput
                        className="FormSection-input"
                        type="date"
                        feedbackValid="Looks good!"
                        id="date"
                        label="Check In Date"
                        required
                    />
                </CCol>

                <CCol md={12}>
                    <CFormSelect
                        className="FormSection-input"
                        aria-describedby="validationCustom04Feedback"
                        feedbackInvalid="Please select a valid state."
                        id="validationCustom04"
                        label="Choose Your Destination"
                        required
                    >
                        <option disabled>Choose city</option>
                        <option value="antalya">Antalya</option>
                        <option value="istanbul">Istanbul</option>
                        <option value="dubai">Dubai</option>
                        <option value="sharm-el-sheikh">Sharm El-Sheikh</option>
                        <option value="kuala-lumpur">Kuala Lumpur</option>
                        <option value="canada">Canada</option>
                        <option value="england">England</option>
                    </CFormSelect>
                </CCol>

                <CCol md={12}>
                    <CFormSelect
                        className="FormSection-input"
                        aria-describedby="validationCustom04Feedback"
                        feedbackInvalid="Please select a valid state."
                        id="visaSupport"
                        label="Choose Your Visa Support"
                        required
                    >
                        <option disabled>ex. 3 or 4 or 5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                    </CFormSelect>
                </CCol>
                <CCol xs={12}>
                    <CButton className="btn-default" type="submit">Make Your Reservation Now</CButton>
                </CCol>
            </CForm>
        </div>
    )
}

export default FormSection;
