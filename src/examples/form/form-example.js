import React from 'react';

function FormExample() {
  return (
    <div>
      <h2>Contact form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email"/>
        </div>
        <button className="btn btn-primary" type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default FormExample;
