import React from "react";
import "../Forms.css"

export default React.memo( function GradStudyBeginning({ seasonOptions, admissionSeason, setAdmissionSeason, admissionYear, setAdmissionYear }) {



    return (
        <fieldset style={{borderRadius: 0.5+'em'}}>
            <legend>Which semester did you begin graduate studies?</legend>
            <label className='form-label'>Semester Admitted</label>
            <div className='form-options-div row'>
                {seasonOptions.map((option) => (
                    <span key={`admission-${option.id}`} className='row'>
                        <input
                            type='radio'
                            name='admissionSeason'
                            id={`admission-${option.id}`}
                            value={option.value}
                            checked={admissionSeason === option.value}
                            onChange={(e) => setAdmissionSeason(e.target.value)}
                        />
                        <label htmlFor={`admission-${option.id}`} className='form-radio-options'>
                            {option.label}
                        </label>
                    </span>
                ))}
  
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