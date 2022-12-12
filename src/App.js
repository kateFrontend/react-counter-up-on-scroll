import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import CountUp from "react-countup/build/CountUp";
import ReactVisibilitySensor from "react-visibility-sensor";

function App({ className, ...rest }) {

const [viewPortEntered, setViewPortEntered] = useState(false)

  return (
    <>
      <section className="counter">
        <div className="counter-row">
          <div className="counter-column">
            <strong data-number='305'>
              <CountUp {...rest} start = {  viewPortEntered ? null : 0 } end={305} >
                {({ countUpRef }) => {
                    return(
                    <ReactVisibilitySensor
                    active = {!viewPortEntered}
                    onChange = {isVisible = {
                      if(isVisible){
                        setViewPortEntered(true)
                      }
                    }}
                    delayedCall
                    >
                      <span className="number" ref={countUpRef}/>
                    </ReactVisibilitySensor>
                    )
                }}
              </CountUp>
            </strong>
            <span>On Going <br/>Projects</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
