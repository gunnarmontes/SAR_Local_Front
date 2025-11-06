import React from "react";
import "../Forms.css"
import RadioOptionsInput from "./RepeatedInputs/RadioOptionsInput";

export default React.memo( function EnrolledDegree( {degreeOptions, degreeProgram, setDegreeProgram, isAcceleratedMasters, setIsAcceleratedMasters}) {


    return (

        <fieldset style={{borderRadius: 0.5+'em'}} >
            <legend>What degree are you currently enrolled in?</legend>
            <div>
                <label className='form-label'>Degree</label>
                <div className='form-options-div'>
                    <RadioOptionsInput 
                        options={degreeOptions}
                        name="degreeProgram"
                        stateVar={degreeProgram}
                        stateFunc={setDegreeProgram}
                    />                            
                    
                </div>
                <div>
                    <label id="accelerated-label" className='form-label'>Are You In The Accelerated Masters Program?</label>
                    <div className='form-options-div'>
                        <div className='row'>
                            <input                                         
                                id='accelerated-masters'
                                type='checkbox' 
                                checked={isAcceleratedMasters}
                                onChange={(e) => setIsAcceleratedMasters(e.target.checked)} 
                            />
                            <label htmlFor='accelerated-masters'>Yes</label>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>

    )
})