export default function ContactUs() {
  // for clicking on submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="text-center mt-4">
      <h2>Contact Us</h2>
      <p>"Kindly share the required information with us."</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label text-start">
            Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-2 col-form-label text-start">
            Phone
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="phone" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label text-start">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" required />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}