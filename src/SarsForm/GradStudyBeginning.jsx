import React from "react";
import "../Forms.css"

import RadioOptionsInput from "./RepeatedInputs/RadioOptionsInput";

export default React.memo( function GradStudyBeginning({ seasonOptions, admissionSeason, setAdmissionSeason, admissionYear, setAdmissionYear }) {



    return (
        <fieldset style={{borderRadius: 0.5+'em'}}>
            <legend>Which semester did you begin graduate studies?</legend>
            <label className='form-label'>Semester Admitted</label>
            <div className='form-options-div row'>
                <RadioOptionsInput 
                    options={seasonOptions}
                    name="admissionSeason"
                    stateVar={admissionSeason}
                    stateFunc={setAdmissionSeason}
                />
            </div>
            <label className='form-label'>Year</label>
            <input 
                type='number'
                className="form-control" 
                style={{lineHeight: 1}} 
                value={admissionYear}
                onChange={(e) => setAdmissionYear(e.target.value)}
            />
        </fieldset>

    )
})