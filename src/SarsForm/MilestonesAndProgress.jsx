import React from "react";
import "../Forms.css"

export default React.memo(function MilestonesAndProgress( {
    enteredProgramCompPlanned, setEnteredProgramCompPlanned,
    enteredProgramSemester, setEnteredProgramSemester,
    enteredProgramYear, setEnteredProgramYear,
    planOfStudyCompPlanned, setPlanOfStudyCompPlanned,
    planOfStudySemester, setPlanOfStudySemester,
    planOfStudyYear, setPlanOfStudyYear,
    finalDefenseCompPlanned, setFinalDefenseCompPlanned,
    finalDefenseSemester, setFinalDefenseSemester,
    finalDefenseYear, setFinalDefenseYear,
    milestoneOptions, seasonOptions
}) {
    
    return (
        <fieldset style={{ borderRadius: 0.5 + 'em' }}>
            <legend>Milestone & Progresses</legend>
            <table>
                <thead>
                    <tr className='row'>
                        <th>
                            <span/>
                        </th>
                        <th>
                            <p>Completed/Planned</p>
                        </th>
                        <th>
                            <p>Semester</p>
                        </th>
                        <th>
                            <p>Year</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>Entered Program</p>
                        </td>
                        <td>
                            {milestoneOptions.map((option) => (
                                <span key={`enteredProgramProg-${option.id}`}>
                                    <input 
                                        type='radio'
                                        name='enteredProgramProg'
                                        id={`enteredProgramProg-${option.id}`}
                                        value={option.value}
                                        checked={enteredProgramCompPlanned === option.value}
                                        onChange={(e) => setEnteredProgramCompPlanned(e.target.value)}
                                    />
                                    <label>{option.label}</label>
                                </span>
                            ))}
                        </td>
                        <td>
                            {seasonOptions.map((option) => (
                                <span key={`enteredProgramSem-${option.id}`} className='row'>
                                    <input
                                        type='radio'
                                        name='enteredProgramSem'
                                        id={`enteredProgramSem-${option.id}`}
                                        value={option.value}
                                        checked={enteredProgramSemester === option.value}
                                        onChange={(e) => setEnteredProgramSemester(e.target.value)}
                                    />
                                    <label htmlFor={`enteredProgramSem-${option.id}`} className='form-radio-options'>
                                        {option.label}
                                    </label>
                                </span>
                            ))}
                        </td>
                        <td>
                            <span>
                                <input
                                    type='number'
                                    name='enteredProgramYear'
                                    id='enteredProgramYear'
                                    value={enteredProgramYear}
                                    onChange={(e) => setEnteredProgramYear(e.target.value)}
                                />
                            </span>
                        </td>    
                    </tr>
                    <tr>
                        <td>
                            <p>Plan Of Study Field</p>
                        </td>
                        <td>
                            {milestoneOptions.map((option) => (
                                <span key={`planOfStudyProg-${option.id}`}>
                                    <input 
                                        type='radio'
                                        name='enteredProgramProg'
                                        id={`planOfStudyProg-${option.id}`}
                                        value={option.value}
                                        checked={planOfStudyCompPlanned === option.value}
                                        onChange={(e) => setPlanOfStudyCompPlanned(e.target.value)}
                                    />
                                    <label>{option.label}</label>
                                </span>
                            ))}
                        </td>
                        <td>
                            {seasonOptions.map((option) => (
                                <span key={`planOfStudySem-${option.id}`} className='row'>
                                    <input
                                        type='radio'
                                        name='planOfStudySem'
                                        id={`planOfStudySem-${option.id}`}
                                        value={option.value}
                                        checked={planOfStudySemester === option.value}
                                        onChange={(e) => setPlanOfStudySemester(e.target.value)}
                                    />
                                    <label htmlFor={`enteredProgramSem-${option.id}`} className='form-radio-options'>
                                        {option.label}
                                    </label>
                                </span>
                            ))}
                        </td>
                        <td>
                            <span>
                                <input
                                    type='number'
                                    name='planOfStudyYear'
                                    id='planOfStudyYear'
                                    value={planOfStudyYear}
                                    onChange={(e) => setPlanOfStudyYear(e.target.value)}
                                />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Final Defense</p>
                        </td>
                        <td>
                            {milestoneOptions.map((option) => (
                                <span key={`finalDefenseProg-${option.id}`}>
                                    <input 
                                        type='radio'
                                        name='finalDefenseProg'
                                        id={`finalDefenseProg-${option.id}`}
                                        value={option.value}
                                        checked={finalDefenseCompPlanned === option.value}
                                        onChange={(e) => setFinalDefenseCompPlanned(e.target.value)}
                                    />
                                    <label>{option.label}</label>
                                </span>
                            ))}
                        </td>
                        <td>
                            {seasonOptions.map((option) => (
                                <span key={`finalDefenseSem-${option.id}`} className='row'>
                                    <input
                                        type='radio'
                                        name='finalDefenseSem'
                                        id={`finalDefenseSem-${option.id}`}
                                        value={option.value}
                                        checked={finalDefenseSemester === option.value}
                                        onChange={(e) => setFinalDefenseSemester(e.target.value)}
                                    />
                                    <label htmlFor={`enteredProgramSem-${option.id}`} className='form-radio-options'>
                                        {option.label}
                                    </label>
                                </span>
                            ))}
                        </td>
                        <td>
                            <span>
                                <input
                                    type='number'
                                    name='finalDefenseYear'
                                    id='finalDefenseYear'
                                    value={finalDefenseYear}
                                    onChange={(e) => setFinalDefenseYear(e.target.value)}
                                />
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </fieldset>
        
    );
});