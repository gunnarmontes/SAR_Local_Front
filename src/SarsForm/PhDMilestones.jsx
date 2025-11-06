import React from "react";
import "../Forms.css"


import RadioOptionsInput from "./RepeatedInputs/RadioOptionsInput";
import YearTextbox from "./RepeatedInputs/YearTextbox";

export default React.memo( function PhDMilestones({ seasonOptions, milestoneOptions,
    PhDCompPlanned, setPhDCompPlanned, PhDSemester, setPhDSemester, PhDYear, setPhDYear,
    PhDPlanOfStudyCompPlanned, setPhDPlanOfStudyCompPlanned, PhDPlanOfStudySemester, setPhDPlanOfStudySemester, PhDplanOfStudyYear, setPhDPlanOfStudyYear,

}) {

    return (

        <fieldset style={{ borderRadius: 0.5 + "em"}}>
            <legen>PhD Milestone</legen>
            <table>
                <thead>
                    <tr className="row">
                        <th>
                            <span />
                        </th>
                        <th>
                            Completed/Planned
                        </th>
                        <th>
                            Semester
                        </th>
                        <th>
                            Year
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
                                name="PhDEnteredProgramProg"
                                stateVar={PhDCompPlanned}
                                stateFunc={setPhDCompPlanned}
                            />
                        </td>
                        <td>
                            <RadioOptionsInput 
                                options={seasonOptions}
                                name="PhDenteredProgramSem"
                                stateVar={PhDSemester}
                                stateFunc={setPhDSemester}
                            />                                                                                
                        </td>
                        <td>
                            <YearTextbox
                                name="PhDEnteredProgram"
                                stateVar={PhDYear}
                                stateFunc={setPhDYear}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>Plan of Study filed (due by the end of your 3rd semester) </p>
                        </td>
                        <td>
                            <RadioOptionsInput 
                                options={milestoneOptions}
                                name="PhDPosProg"
                                stateVar={PhDPlanOfStudyCompPlanned}
                                stateFunc={setPhDPlanOfStudyCompPlanned}
                            />
                        </td>
                        <td>
                            <RadioOptionsInput 
                                options={seasonOptions}
                                name="PhDPosSem"
                                stateVar={PhDPlanOfStudySemester}
                                stateFunc={setPhDPlanOfStudySemester}
                            />                                                                                
                        </td>
                        <td>
                            <YearTextbox
                                name="PhDPosEnteredProgram"
                                stateVar={PhDplanOfStudyYear}
                                stateFunc={setPhDPlanOfStudyYear}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>Qualifier Exam (due at the end of your second year)</p>
                        </td>
                        <td>
                            <RadioOptionsInput 
                                options={milestoneOptions}
                                name="PhDPosProg"
                                stateVar={PhDPlanOfStudyCompPlanned}
                                stateFunc={setPhDPlanOfStudyCompPlanned}
                            />
                        </td>
                        <td>
                            <RadioOptionsInput 
                                options={seasonOptions}
                                name="PhDPosSem"
                                stateVar={PhDPlanOfStudySemester}
                                stateFunc={setPhDPlanOfStudySemester}
                            />                                                                                
                        </td>
                        <td>
                            <YearTextbox
                                name="PhDPosEnteredProgram"
                                stateVar={PhDplanOfStudyYear}
                                stateFunc={setPhDPlanOfStudyYear}
                            />
                        </td>
                    </tr>
                </tbody>

            </table>


        </fieldset>


    )
})