
import { use, useState } from 'react';
import { validateAdmissionYear } from './helpers';
import "./Forms.css"

import PersonalInfo from './SarsForm/PersonalInfo';
import EnrolledDegree from './SarsForm/EnrolledDegree';
import GradStudyBeginning from './SarsForm/GradStudyBeginning';
import FacultyAdvisor from './SarsForm/FacultyAdvisor';
import MilestonesAndProgress from './SarsForm/MilestonesAndProgress';
import PhDMilestones from './SarsForm/PhDMilestones';

export default function SarsStudentPage({ user }) {

    const [name, setName] = useState("Need to figure out how to get name from CAS")

    const [degreeProgram, setDegreeProgram] = useState(null)
    const [isAcceleratedMasters, setIsAcceleratedMasters] = useState(false)

    const [admissionSeason, setAdmissionSeason] = useState(null)
    const [admissionYear, setAdmissionYear] = useState("")

    const [instructors, setInstructors] = useState([
        { sar_instructor_id: 1, pid: "123456", first_name: "John", last_name: "Doe", is_cs: true },
        { sar_instructor_id: 2, pid: "789012", first_name: "Jane", last_name: "Smith", is_cs: false },
        { sar_instructor_id: 3, pid: "345678", first_name: "Alice", last_name: "Johnson", is_cs: true }
    ]);
    const [selectedInstructor, setSelectedInstructor] = useState(null);
    const [selectedInstructorSemester, setSelectedInstructorSemester] = useState(null)
    const [selectedInstructorYear, setSelectedInstructorYear] = useState("")
    const [selectedInstructors, setSelectedInstructors] = useState([]);

    const [enteredProgramCompPlanned, setEnteredProgramCompPlanned] = useState("")
    const [enteredProgramSemester, setEnteredProgramSemester] = useState("")
    const [enteredProgramYear, setEnteredProgramYear] = useState("")
    const [planOfStudyCompPlanned, setPlanOfStudyCompPlanned] = useState("")
    const [planOfStudySemester, setPlanOfStudySemester] = useState("")
    const [planOfStudyYear, setPlanOfStudyYear] = useState("")
    const [finalDefenseCompPlanned, setFinalDefenseCompPlanned] = useState("")
    const [finalDefenseSemester, setFinalDefenseSemester] = useState("")
    const [finalDefenseYear, setFinalDefenseYear] = useState("")

    const [PhDCompPlanned, setPhDCompPlanned] = useState("")
    const [PhDSemester, setPhDSemester] = useState("")
    const [PhDYear, setPhDYear] = useState("")

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

    const milestoneOptions = [
        { id: "planned", value: "Planned", label: "Planned"},
        { id: "completed", value: "Completed", label: "Completed"}
    ]
    
   
   



    return (
        <div>
            <h1>SARS Student Page</h1>
            <form>

                <PersonalInfo user={user} name={name} setName={setName} />
                <EnrolledDegree 
                    degreeOptions={degreeOptions} 
                    degreeProgram={degreeProgram} setDegreeProgram={setDegreeProgram}
                    isAcceleratedMasters={isAcceleratedMasters} setIsAcceleratedMasters={setIsAcceleratedMasters}
                />
                <GradStudyBeginning 
                    seasonOptions={seasonOptions} 
                    admissionSeason={admissionSeason} setAdmissionSeason={setAdmissionSeason} 
                    admissionYear={admissionYear} setAdmissionYear={setAdmissionYear} 
                />
                <FacultyAdvisor
                    instructors={instructors} seasonOptions={seasonOptions}
                    selectedInstructor={selectedInstructor} setSelectedInstructor={setSelectedInstructor}
                    selectedInstructorSemester={selectedInstructorSemester} setSelectedInstructorSemester={setSelectedInstructorSemester}
                    selectedInstructorYear={selectedInstructorYear} setSelectedInstructorYear={setSelectedInstructorYear}
                    selectedInstructors={selectedInstructors} setSelectedInstructors={setSelectedInstructors}
                />
                <MilestonesAndProgress 
                    enteredProgramCompPlanned={enteredProgramCompPlanned} setEnteredProgramCompPlanned={setEnteredProgramCompPlanned}
                    enteredProgramSemester={enteredProgramSemester} setEnteredProgramSemester={setEnteredProgramSemester}
                    enteredProgramYear={enteredProgramYear} setEnteredProgramYear={setEnteredProgramYear}
                    planOfStudyCompPlanned={planOfStudyCompPlanned} setPlanOfStudyCompPlanned={setPlanOfStudyCompPlanned}
                    planOfStudySemester={planOfStudySemester} setPlanOfStudySemester={setPlanOfStudySemester}
                    planOfStudyYear={planOfStudyYear} setPlanOfStudyYear={setPlanOfStudyYear}
                    finalDefenseCompPlanned={finalDefenseCompPlanned} setFinalDefenseCompPlanned={setFinalDefenseCompPlanned}
                    finalDefenseSemester={finalDefenseSemester} setFinalDefenseSemester={setFinalDefenseSemester}
                    finalDefenseYear={finalDefenseYear} setFinalDefenseYear={setFinalDefenseYear}
                    milestoneOptions={milestoneOptions} seasonOptions={seasonOptions}
                />
            </form>
        </div>
    )
}