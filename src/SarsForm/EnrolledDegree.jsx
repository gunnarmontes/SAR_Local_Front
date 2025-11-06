import React from "react";
import "../Forms.css"

export default React.memo( function EnrolledDegree( {degreeOptions, degreeProgram, setDegreeProgram, isAcceleratedMasters, setIsAcceleratedMasters}) {


    return (

        <fieldset style={{borderRadius: 0.5+'em'}} >
            <legend>What degree are you currently enrolled in?</legend>
            <div>
                <label className='form-label'>Degree</label>
                <div className='form-options-div'>                            
                    {degreeOptions.map((option) => (
                        <div key={`enrolled-${option.id}`} className='row'>
                            <input 
                                type='radio'
                                name='degreeProgram'
                                id={option.id}
                                value={option.value}
                                checked={degreeProgram === option.value}
                                onChange={(e) => setDegreeProgram(e.target.value)}
                            />
                            <label htmlFor={option.id} className='form-radio-options'>{option.label}</label>
                        </div>
                    ))}
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