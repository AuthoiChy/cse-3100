export default function ContactUs() {
    // Handles form submission
    const submitForm = (e) => {
      e.preventDefault();
      alert('Your form has been successfully submitted!');
    };
  
    return (
      <section className="contact-section text-center mt-5">
        <h2>Reach Out to Us</h2>
        <p>We'd love to hear from you! Kindly provide your details below.</p>
        <form onSubmit={submitForm} className="contact-form">
          <div className="input-group mb-3">
            <label htmlFor="fullName" className="input-label">
              Full Name
            </label>
            <input type="text" className="input-field" id="fullName" required />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="phoneNumber" className="input-label">
              Phone Number
            </label>
            <input type="text" className="input-field" id="phoneNumber" required />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="emailAddress" className="input-label">
              Email Address
            </label>
            <input type="email" className="input-field" id="emailAddress" required />
          </div>
          <button type="submit" className="submit-btn btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  