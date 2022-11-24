import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked. " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    // console.log("Uppercase was clicked. " + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  }

  const handleCopy = () => {
    console.log("Copied");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter text here.');
  // text = "new text"; --> wrong way to change text
  // setText("newtext"); -->correct way
  return (
    <>
      <div className='formContainer' style={{color : props.mode === 'dark' ? 'white' : '#292c37'}}>
          <h4>{props.heading}</h4>
              <div class="mb-3 mx-2">
                <label for="exampleFormControlInput1" class="form-label" ><b>Name</b></label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name." />
              </div>
              <div class="mb-3 mx-2">
                <label for="exampleFormControlInput2" class="form-label" ><b>Mobile No.</b></label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your mobile number." />
              </div>
              <div class="mb-3 mx-2">
                <label for="exampleFormControlTextarea1" class="form-label"><b>Address</b></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your address.'></textarea>
              </div>
              <div className="mb-3 mx-2">
                <label className='mb-3 mx-2'> <b>Select the services:</b>
                <div class="mb-3 mx-2">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label mx-2" for="gridCheck">
                    <b>Basic Service</b> 
                  </label>
                </div>
                <div class="mb-3 mx-2">
                  <input class="form-check-input" type="checkbox" id="gridCheck2" />
                  <label class="form-check-label mx-2" for="gridCheck">
                    <b>Full Service </b>
                  </label>
                </div>
                <div class="mb-3 mx-2">
                  <input class="form-check-input" type="checkbox" id="gridCheck" />
                  <label class="form-check-label mx-2" for="gridCheck">
                    <b>Major Service</b> 
                  </label>
                </div>
                <div class="mb-3 mx-2">
                  <input class="form-check-input" type="checkbox" id="gridCheck" />
                  <label class="form-check-label mx-2" for="gridCheck">
                    <b>Manufacturer's Service</b> 
                  </label>
                </div>
                </label>
              </div>
              <div className="mx-2 sub">
              <input class="btn btn-primary" type="submit" value="Submit"></input>
              </div>
      </div>
    </>
  )
}
