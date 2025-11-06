import React from "react";
import "../Forms.css"

import RadioOptionsInput from "./RepeatedInputs/RadioOptionsInput";
export default React.memo(function FacultyAdvisor({ selectedInstructor, setSelectedInstructor, 
    selectedInstructorSemester, setSelectedInstructorSemester, 
    selectedInstructorYear, setSelectedInstructorYear, 
    selectedInstructors, setSelectedInstructors, 
    instructors, seasonOptions 
}) {



    const addFaculty = (e) => {
        e.preventDefault();

        if (!selectedInstructor || !selectedInstructorSemester || !selectedInstructorYear) {
            alert("Please fill out all fields before adding a faculty advisor.");
            return;
        }

        const newEntry = {
            name: `${selectedInstructor.first_name} ${selectedInstructor.last_name}`,
            semester: selectedInstructorSemester,
            year: selectedInstructorYear,
        };

        setSelectedInstructors((prev) => [...prev, newEntry]);

        // reset fields
        setSelectedInstructor(null);
        setSelectedInstructorSemester(null);
        setSelectedInstructorYear("");

        console.log("Added:", newEntry);
    };



    return (
        <fieldset style={{ borderRadius: 0.5 + 'em' }}>
            <legend>Faculty Advisor</legend>
            <table>
                <thead>
                    <tr className='row'>
                        <td>Name</td>
                        <td>Semester</td>
                        <td>Year</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='row'>
                        <td>
                            <select
                                value={selectedInstructor?.sar_instructor_id || ""}
                                onChange={(e) =>
                                setSelectedInstructor(
                                    instructors.find(
                                    (i) => i.sar_instructor_id === Number(e.target.value)
                                    )
                                )
                                }
                            >
                                <option value="" disabled>
                                Select advisor
                                </option>
                                {instructors.map((instructor) => (
                                <option key={instructor.sar_instructor_id} value={instructor.sar_instructor_id}>
                                    {instructor.first_name} {instructor.last_name}
                                </option>
                                ))}
                            </select>
                        </td>

                        <td>
                            <RadioOptionsInput 
                                options={seasonOptions} 
                                name="advisor-semester"
                                stateVar={selectedInstructorSemester}
                                stateFunc={setSelectedInstructorSemester}
                            />
                        </td>

                        <td>
                            <input
                                id='selectedInstructorYear'
                                type='number'
                                value={selectedInstructorYear}
                                onChange={(e) => setSelectedInstructorYear(e.target.value)}
                            />
                        </td>

                        <td>
                            <button onClick={addFaculty}>Add Faculty</button>
                        </td>
                    </tr>

                        {selectedInstructors.map((instructor) => (
                            <tr key={`${instructor.name}-${instructor.year}`} className='row'>
                            <td><p>{instructor.name}</p></td>
                            <td><p>{instructor.semester}</p></td>
                            <td><p>{instructor.year}</p></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </fieldset>

    )
})