import React from "react";
import "../Forms.css"

import RadioOptionsInput from "./RepeatedInputs/RadioOptionsInput";
import YearTextbox from "./RepeatedInputs/YearTextbox";

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
            <YearTextbox
                name="gradStudyBeginning"
                stateVar={admissionYear}
                stateFunc={setAdmissionYear}
            
            />
        </fieldset>

    )
})