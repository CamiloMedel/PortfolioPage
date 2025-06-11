import { Link } from 'react-router';
import './ContactConfirmation.css';

function ContactConfirmation() {
    return (
        <main className='contact-confirmation-container'>
            <div className='text-container'>
                <h1 className='title'>Contact Message Sent!</h1>
                <Link to='/' className='home-button'>Home</Link>
            </div>
        </main>
    )
}

export default ContactConfirmation;