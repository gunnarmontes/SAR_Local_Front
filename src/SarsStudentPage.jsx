
import { useState } from 'react';
import { validateAdmissionYear } from './helpers';
import "./Forms.css"

export default function SarsStudentPage({ user }) {

    const [name, setName] = useState("Need to figure out how to get name from CAS")
    const [degreeProgram, setDegreeProgram] = useState(null)
    const [isAcceleratedMasters, setIsAcceleratedMasters] = useState(false)
    const [admissionSeason, setAdmissionSeason] = useState(null)
    const [admissionYear, setAdmissionYear] = useState("")


    const degreeOptions = [
        { id: "MS-thesis", label: "MS (Thesis)", value: "MS (Thesis)" },
        { id: "MS-coursework", label: "MS (Coursework)", value: "MS (Coursework)" },
        { id: "MS-undecided", label: "MS (Undecided)", value: "MS (Undecided)" },
        { id: "MEng", label: "MEng", value: "MEng" },
        { id: "PhD", label: "PhD", value: "PhD" },
    ];

    const seasonOptions = [
        { id: "fall", label: "Fall", value: "Fall" },
        { id: "spring", label: "Spring", value: "Spring"}
    ]
    
   
    return (
        <div>
            <h1>SARS Student Page</h1>
            <form>

                <fieldset style={{borderRadius: 0.5+'em'}}>
                    <legend>Personal Information</legend>
                    <div>
                        <p htmlFor="personal-info" className='form-label'>Student Name</p>
                        <input 
                            type="text"
                            className="form-control" style={{lineHeight: 1}} 
                            onChange={(e) => setName(e.target.value)} 
                            value={name}
                        />
                         <p htmlFor="personal-info" className='form-label'>Student PID</p>
                        <input 
                            type='text' 
                            className='form-control' style={{lineHeight: 1}}
                            value={user.pid}
                            readOnly
                        />
                    </div>
                </fieldset>

                <fieldset style={{borderRadius: 0.5+'em'}} >
                    <legend>What degree are you currently enrolled in?</legend>
                    <div>

                        <p className='form-label'>Degree</p>
                        <div className='form-options-div'>
                            {degreeOptions.map((option) => (
                                <div key={option.id} className='row'>
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
                            <p id="accelerated-label" className='form-label'>Are You In The Accelerated Masters Program?</p>
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

                <fieldset style={{borderRadius: 0.5+'em'}}>
                    <legend>Which semester did you begin graduate studies?</legend>
                    <p className='form-label'>Semester Admited</p>
                    <div className='form-options-div row'>
                        {seasonOptions.map((option) => (
                            <span key={option.id} className='row'>
                                <input
                                    type='radio'
                                    name='admissionSeason'
                                    id={option.id}
                                    value={option.value}
                                    checked={admissionSeason === option.value}
                                    onChange={(e) => setAdmissionSeason(e.target.value)}
                                />
                                <label htmlFor={option.id} className='form-radio-options'>{option.label}</label>
                                
                            </span>
                        ))}  
                    </div>
                    <p className='form-label'>Year</p>
                    <input 
                        type='number'
                        className="form-control" 
                        style={{lineHeight: 1}} 
                        onChange={(e) => setAdmissionYear(e.target.value)}
                    />
                </fieldset>

                <fieldset style={{borderRadius: 0.5+'em'}}>
                    <legend>Faculty Advisor</legend>

                </fieldset>
            </form>
        </div>
    )
}