import React from "react";

export const MainPage = () => {
  return (
    <div className="bro2">
      <div className="form" action="">
        {/* <h2 className="heading">Login</h2> */}
        <br />
        <div className="container">
          <label htmlFor="">ID:</label>
          <input type="text" />
          <label htmlFor="">Date</label>
          <input type="date" />

          <label htmlFor="">Place</label>

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

          <input type="radio" id="gender2" name="gender" value="F" />
          <label for="gender2">Female</label>

          <input type="radio" id="gender3" name="gender" value="N" />
          <label for="gender3">Others</label>
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
          <input type="checkbox" id="smoking" name="smoking" value="smoking" />
          <label for="vehicle1"> Smoking</label>
          <br />
          <input
            type="checkbox"
            id="smokeless"
            name="smokeless"
            value="smokeless"
          />
          <label for="vehicle2"> Smoke-less</label>
          <br />
          <input type="checkbox" id="alcohol" name="alcohol" value="alcohol" />
          <label for="vehicle3"> Alcohol</label>
          <br></br>

          <label htmlFor="">Tooth number</label>
          <input type="text" />
          <br />
          <label htmlFor="">Decayed:</label>
          <input type="text" />
          <br />
          <label htmlFor="">Missing:</label>
          <input type="text" />
          <br />
          <label htmlFor="">Filled:</label>
          <input type="text" />
          <br />
          <label htmlFor="">Pain:</label>
          <input type="text" />
          <br />
          <label htmlFor="">Fracture:</label>
          <input type="text" />
          <br />
          <label htmlFor="">Mobility: </label>
          <input type="text" />
          <br />
          <label htmlFor="">Others:</label>
          <br />
          <textarea rows="4" cols="50" name="comment" form="usrform" />
          <br />
          <br />
          <label htmlFor="">Gingiva</label>
          <br />
          <select id="history" name="history">
            <option value="Diabetes">Calculus:</option>
            <option value="Hypertention">Stains:</option>
            <option value="Thyroid">Generalized chronic gingivitis:</option>
            <option value="Cardiovascular">
              Generalized chronic periodontitis:
            </option>
            <option value="Respiratory">Others:</option>
          </select>
          <br />
          <label htmlFor="">Description</label>
          <br />
          <textarea rows="4" cols="50" name="comment" form="usrform" />
          <br />
          <label htmlFor="">Dental Fluorosis</label>
          <br />
          <input type="radio" id="visit1" name="visit" value="M" />
          <label for="visit1">Yes</label>
          <br />
          <input type="radio" id="visit2" name="visit" value="F" />
          <label for="visit2">No</label>
          <br />
          <label htmlFor="">Malocclusion</label>
          <br />
          <input type="radio" id="visit1" name="visit" value="M" />
          <label for="visit1">Yes</label>
          <br />
          <input type="radio" id="visit2" name="visit" value="F" />
          <label for="visit2">No</label>
          <br />
          <label htmlFor="">Oral mucosal lesion</label>
          <br />
          <input type="radio" id="visit1" name="visit" value="M" />
          <label for="visit1">Yes</label>
          <br />
          <input type="radio" id="visit2" name="visit" value="F" />
          <label for="visit2">No</label>
          <br />
          <label htmlFor="">Condition</label>
          <br />
          <textarea rows="4" cols="50" name="comment" form="usrform" />
          <br />
          <label htmlFor="">Location</label>
          <br />
          <textarea rows="4" cols="50" name="comment" form="usrform" />
          <br />
          <label htmlFor="">Treatment done</label>
          <br />
          <select id="history" name="history">
            <option value="Diabetes">Medication:</option>
            <option value="Hypertention">Referral:</option>
            <option value="Thyroid">Scaling:</option>
            <option value="Cardiovascular">Extraction:</option>
            <option value="Respiratory">Filling:</option>
          </select>
          <br />
          <textarea rows="4" cols="50" name="comment" form="usrform" />
          <br />

          <input type="submit" value="Submit"></input>
        </div>
      </div>
    </div>
  );
};
