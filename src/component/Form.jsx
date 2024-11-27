export default function Form() {
    return (
      <div>
        <div>
          <h2>Job Application Form</h2>
        </div>
  
        <div>
          <form>
        
            <label>What role are you apply for?</label><br />
            <input type="search" placeholder="Search role..." /> <br /><hr />
            <label>First Name </label>
            <input type="text" /><hr />
            <label > Email </label>
            <input type="email" /><hr />
            <label > Password </label>
            <input type="password" /><hr />
            <label > How many languages do you speak? Select all that apply.</label> <br />
            <input type="checkbox" />French<br />
            <input type="checkbox" />Spanish<br />
            <input type="checkbox" />English<br />
            <input type="checkbox" />Arabic<br /><hr />
            <label>Which of the following do you represent?</label><br />
            <input type="radio" />American<br />
            <input type="radio" />Native American<br />
            <input type="radio" />Caucausian<br />
            <input type="radio" />African American<br /><hr />
            <label>Please upload your CV here!</label>
            <input type="file" /><hr />
            <label>Enter your date of birth</label>
            <input type="date" /><hr />
            <label>How many people live in your household?</label><br />
            <input type="number" /><hr />
            <label>Please Enter your telephone.</label>
            <input type="tel" /> <hr />
            <label>What is the day of the week?</label>
            <input type="week" /><hr />
            <label> Pick a color </label>
            <input type="color" /><hr />
            <label>upload an image</label><br />
            <input type="image" accept="image/*" /><hr />
            <label>Room tempearture range</label><br />
            <input type="range" /><hr />
            <label> Paste your website link </label>
            <input type="url" /><hr />
            <label>Input time </label>
            <input type="time" /><hr />
            <label>Date-time Local </label><br />
            <input type="datetime-local" /><hr />
            <input type="hidden" /><hr />
            <button type="reset">Reset</button><hr />
            <button type="submit">Submit Form</button>
          </form>
        </div>
      </div>
    );
  }
  