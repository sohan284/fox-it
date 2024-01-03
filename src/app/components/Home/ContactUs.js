import React from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
    <div className='bg-primary container mx-auto'>
           
           <form onSubmit={sendEmail} className='flex flex-col '>
            <label>
                To:
                <input type="email" name="to_email" required />
            </label>
            <label>
                Subject:
                <input type="text" name="subject" required />
            </label>
            <label>
                Message:
                <textarea name="message" required />
            </label>
            <button type="submit" className='bg-black'>Send Email</button>
        </form>
           
    </div>
    );
};

export default EmailForm;
