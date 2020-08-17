import React from 'react'
import EmailButton from './EmailButton';


const Contact = () => {
    return (
        <div className="contact border-red" id="contact">
            <div style={{ paddingTop: "20%", marginLeft: "60%" }}>

                <EmailButton />
            </div>

        </div>
    )
}

export default Contact;