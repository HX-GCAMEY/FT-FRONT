"use client";
import "./transitions.css";

function Transitions() {
  return (
    <body>
      <p>Hover over the element below</p>

      <div className="box box1">Ease</div>
      <div className="box box2">Linear</div>
      <div className="box box3">Ease-In</div>
      <div className="box box4">Ease-Out</div>
      <div className="box box5">Ease-In-Out</div>
      <div className="box box6">Step-start</div>
      <div className="box box7">Step-end</div>
      <div className="box box8">Steps(5,end)</div>
      <div className="box box9">Cubic-bezier</div>
    </body>
  );
}

export default Transitions;
