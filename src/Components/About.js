import React, { useState } from 'react'

export default function About() {

  return (
    <div id= 'About' className='container' >
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Basic Service 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <strong>Details about Basic Service: </strong> Basic services usually include a visual inspection and oil and filter change, the critical fluids in the engine such as anti-freeze, brake fluid, washer fluid, and steering fluid, are topped up. Also, to ensure the car is in the best condition possible, a check of up to 35 key components is carried out. The brakes are also checked according to manufacturer guidelines. Additional service is also recommended in case the car needs; however, not all garages do this.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Full Service
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <strong>Details about Full Service: </strong> A full service usually comprises extra 15-30 additional checks on the car's components in comparison to the basic servicing. Also, along with the basic service, if the car requires any additional maintenance work, there's an additional cost.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Major Service
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <strong>Details about Major Service: </strong> A major service consists of everything covered in a full service; however, it also includes a change of fuel filters, a change of spark plugs, and some other wear items/services that are suggested in the manufacturer's guidelines. This does not comprise any maintenance work or additional repair.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Manufaturer's Service
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <strong>Details about Manufacturer's Service: </strong> A manufacturer service consists of all wear, maintenance, and service the car needs and is considered to be the most comprehensive and expensive service available. There is an extensive range of checks provided in the manufacturer's service, such as :

                        - Oil and oil filter check and replacement<br></br>

                        - Brake fluid check and top-up<br></br>

                        - Anti-freeze coolant check and top-up<br></br>

                        - Windscreen wash check and top-up<br></br>

                        - Full brake check<br></br>

                        - Power steering fluid check and top-up<br></br>

                        - Steering check<br></br>

                        - Shock absorbers check<br></br>

                        <b>The other services include:</b><br></br>

                        - light check<br></br>

                        - suspension check<br></br>

                        - wheel alignment check<br></br>

                        - windscreen wipers check<br></br>

                        - exhaust check<br></br>

                        - charging systems check<br></br>

                        - charging system check<br></br>

                        - battery, pressure, and tyre tread check<br></br>
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button  type="button" className="btn btn-primary" onClick={toggleStyle}> {buttonText}</button>        
        </div> */}
    </div>
  )
}
