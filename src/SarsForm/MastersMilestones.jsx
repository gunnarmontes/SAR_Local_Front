import React from "react";
import "../Forms.css"

import RadioOptionsInput from "./RepeatedInputs/RadioOptionsInput";
import YearTextbox from "./RepeatedInputs/YearTextbox";

export default React.memo(function MastersMilestones( {
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
                            <YearTextbox
                                name="MastersEnteredProgram"
                                stateVar={enteredProgramYear}
                                stateFunc={setEnteredProgramYear}
                            />
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
                            <YearTextbox
                                name="MastersPlanOfStudy"
                                stateVar={planOfStudyYear}
                                stateFunc={setPlanOfStudyYear}
                            />
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
                            <YearTextbox
                                name="MastersFinalDefense"
                                stateVar={finalDefenseYear}
                                stateFunc={setFinalDefenseYear}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </fieldset>
        
    );
});