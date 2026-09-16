import { useState } from "react";
import "./StudentReg.css";

function StudentReg() {

  return(
    <div className="container">
      <div className="form-box">
        <h2>Student Registration Form</h2>

        <form>
          <div className="row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" name="firstName" required/>
            </div>

            <div className="input-group">
              <label>Last Name</label>
                <input type ="text" name="lastName" required/>
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Email</label>
                <input type="email" name="email" required/>
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input type="tel" name="phone"  required />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Age</label>
              <input type="number" name="age" required />
            </div>

            <div className="input-group">
              <label>Course</label>
              <select name="course"required>
                <option value="">Select Course</option>
                <option>B.Tech</option>
                <option>MBBS</option>
                <option>BCA</option>
                <option>BBA</option>
                <option>MCA</option>
                <option>MBA</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Gender</label>

            <div className="gender">
              <label>
                <input type="radio" name="gender"  />
                Male
              </label>

              <label>
                <input type="radio" name="gender"  
                />
                Female
              </label>

              <label>
                <input type="radio" name="gender" />
                Other
              </label>
            </div>
          </div>

          <button type="submit">Register Student</button>
        </form>
      </div>
    </div>
  );
}

export default StudentReg;