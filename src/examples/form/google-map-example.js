import React from 'react';

function GoogleMapExample() {
  return (
    <div>
      <p>
        Virkesvägen 2, 120 30, Stockholm
      </p>
      <iframe
        title="Map to Hyper Island"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8147.572147856763!2d18.0908021!3d59.3013436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ead817053689c15!2sHyper%20Island!5e0!3m2!1sen!2sse!4v1583098243023!5m2!1sen!2sse"
        width="500"
        height="300"
        frameborder="0"
        style={{border: '0;'}}
        allowfullscreen
      />
    </div>
  );
}

export default GoogleMapExample;
