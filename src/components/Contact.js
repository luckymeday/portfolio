import React from 'react'
import EmailButton from './EmailButton';


const Contact = () => {

    const myFunction = () => {
        alert("My email has been copied to your clipboard! 🎉");
    }

    return (
        <section className="contact border-red" id="contact">
            <div className="container border-red" >

                <h1 onClick={() => myFunction()}>
                    <EmailButton />
                </h1>

            </div>
        </section>
    )
}

export default Contact;