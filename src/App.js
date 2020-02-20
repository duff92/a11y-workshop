import React from 'react';
import './App.css';

function App() {


  return (
    <div className="body loaded" hidden>
      <h1>100% accessible</h1>
      <p>
        <a href="https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/" rel="noopener">Read the article</a>
      </p>
      <p>
        {/* start slipsum code */}
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
        {/* end slipsum code */}
      </p>

      <ul>
        <li>CSS only <span aria-label="emoji" role="img">🖕</span></li>
        <li>JS only <span aria-label="emoji" role="img">🖕</span></li>
        <li>Screen reader users <span aria-label="emoji" role="img">🖕</span></li>
        <li>Keyboard users <span aria-label="emoji" role="img">🖕</span></li>
        <li>High contrast mode <span aria-label="emoji" role="img">🖕</span></li>
        <li>Mouse users <span aria-label="emoji" role="img">🖕</span></li>
        <li>Readability <span aria-label="emoji" role="img">🖕</span></li>
        <li>Reader mode <span aria-label="emoji" role="img">🖕</span></li>
        <li>Source <span aria-label="emoji" role="img">🖕</span></li>
      </ul>

      <form action="#form">
        <p>
          <label htmlFor="text">Dummy form</label><br />
          <input type="text" id="text" />
        </p>
        <button>Send</button>
      </form>

      <p>
        {/*  start slipsum code */}
        You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.
        {/* end slipsum code */}
      </p>

    </div>
  );
}

export default App;
