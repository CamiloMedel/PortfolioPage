import 'animate.css';
import './Contact.css'

function Contact(){
    return (
        <main className="contact-container">
            <form action="https://formsubmit.co/1037577e1ba38bca3872f4dcda3a16ab" method="POST" className='animate__animated animate__fadeIn'>
                <input type="hidden" name="_next" value="https://camilomedel.github.io/PortfolioPage/#/confirmation"/>
                <input type='text' name='_honey' style={{display: 'none'}}/>
                <h1 className="title">CONTACT</h1>
                <label for='name'>Name:</label>
                <input type='text' name='name' placeholder='Your full name...' id='name' required/>
                <label for='email:'>Email:</label>
                <input type='email' name='email' placeholder='you@example.com' id='email' required/>
                <label for='subject'>Subject (optional):</label>
                <input type='text' name='subject' placeholder="What's this about?" id='subject'/>
                <label for='message'>Message:</label>
                <textarea name='message' rows='5' placeholder='Type your message here...' id='message' required></textarea>
                <button type='submit'>Send</button>
            </form>
        </main>
    )
}

export default Contact