import React from 'react';

function FormExample() {
  return (
    <div>
      <h3>Contact form</h3>
      <form>
        <div className="form-group">
          <input type="email" placeholder="Your email"/>
        </div>
        <button className="btn btn-primary" type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default FormExample;
