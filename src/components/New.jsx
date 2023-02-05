import React from "react";

export const New = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form action="">
            <label htmlFor="">ID:</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Date</label>
            <br />
            <input type="date" />
            <br />
            <label htmlFor="">Place</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Name</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Gender</label>
            <br />
            <input type="radio" id="gender1" name="gender" value="M" />
            <label for="gender1">Male</label>
            <br />
            <input type="radio" id="gender2" name="gender" value="F" />
            <label for="gender2">Female</label>
            <br />
            <input type="radio" id="gender3" name="gender" value="N" />
            <label for="gender3">Prefer not to say</label>
            <br></br>
            <label htmlFor="">Chief Complaint</label>
            <br />
            <textarea rows="4" cols="50" name="comment" form="usrform" />
            <br />
            <label htmlFor="">Past Medical History</label>
            <br />
            <select id="history" name="history">
              <option value="Diabetes">Diabetes</option>
              <option value="Hypertention">Hypertention</option>
              <option value="Thyroid">Thyroid disorders</option>
              <option value="Cardiovascular">Cardiovascular diseases</option>
              <option value="Respiratory">Respiratory diseases</option>
              <option value="Bleeding">Bleeding disorders</option>
              <option value="Others">Others</option>
            </select>
            <br />
            <label htmlFor="">Past Dental Visit</label>
            <br />
            <input type="radio" id="visit1" name="visit" value="M" />
            <label for="visit1">Yes</label>
            <br />
            <input type="radio" id="visit2" name="visit" value="F" />
            <label for="visit2">No</label>
            <br />
            <label htmlFor="">Personal Habits</label>
            <br />
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Smoking</label>
            <br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> Smoke-less</label>
            <br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> Alcohol</label>
            <br></br>

            <label htmlFor="">Tooth number</label>
            <input type="text" />
            <br />

            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
};
