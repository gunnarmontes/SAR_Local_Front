import React from "react";
import "../Forms.css"

export default React.memo( function PhDMilestones({}) {

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
                                
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>

            </table>


        </fieldset>


    )
})