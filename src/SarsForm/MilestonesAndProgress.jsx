import React from "react";
import "../Forms.css"

import RadioOptionsInput from "./RepeatedInputs/RadioOptionsInput";
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
                            <RadioOptionsInput 
                                options={milestoneOptions}
                                name="enteredProgramProg"
                                stateVar={enteredProgramCompPlanned}
                                stateFunc={setEnteredProgramCompPlanned}
                            />
                        </td>
                        <td>
                            <RadioOptionsInput 
                                options={seasonOptions}
                                name="enteredProgramSem"
                                stateVar={enteredProgramSemester}
                                stateFunc={setEnteredProgramSemester}
                            />
                            
                            
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
                            <RadioOptionsInput 
                                options={milestoneOptions}
                                name="enteredProgramProg"
                                stateVar={planOfStudyCompPlanned}
                                stateFunc={setPlanOfStudyCompPlanned}
                            />
                            
                        </td>
                        <td>
                            <RadioOptionsInput 
                                options={seasonOptions}
                                name="planOfStudySem"
                                stateVar={planOfStudySemester}
                                stateFunc={setPlanOfStudySemester}
                            />
                            
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
                            <RadioOptionsInput 
                                options={milestoneOptions}
                                name="finalDefenseProg"
                                stateVar={finalDefenseCompPlanned}
                                stateFunc={setFinalDefenseCompPlanned}
                            />
                        </td>
                        <td>
                            <RadioOptionsInput 
                                options={seasonOptions}
                                name="finalDefenseSem"
                                stateVar={finalDefenseSemester}
                                stateFunc={setFinalDefenseSemester}
                            />
                            
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