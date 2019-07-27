// Import React
import React from 'react'

// Import Components


export default function ContactForm() {

    
    return (
        <div className="contact-form">
            <div className="contact-form-wrapper">
                <form action="/action_page.php">
                    <input type="text" name="name" placeholder="Your Name"></input>
                    <input type="text" name="mail" placeholder="Your Email"></input>
                    <input type="text" name="phonenumber" placeholder="Phonenumber"></input>
                    <select name="Location">
                        <option value="netherlands">Netherlands</option>
                        <option value="belgium">Belgium</option>
                        <option value="italy">Italy</option>
                        <option value="london">London</option>
                    </select>
                    <select name="partysize">
                        <option value="2">Party of 2</option>
                        <option value="3">Party of 3</option>
                        <option value="4">Party of 4</option>
                        <option value="5">Party of 5</option>
                        <option value="6">Party of 6</option>
                        <option value="7">Party of 7</option>
                        <option value="8">Party of 8</option>
                        <option value="9">Party of 9</option>
                        <option value="10">Party of 10</option>
                    </select>
                    <input type="date" id="today" name="date" placeholder="03-06-2019"></input>
                    <textarea placeholder="Special notes" rows="10" cols="40" name="comment" form="usrform"></textarea>
                    <input type="submit" value="Submit"></input>
                </form> 
            </div>
        </div>
    )
}
