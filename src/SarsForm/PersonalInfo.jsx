import React from "react"
import "../Forms.css"


export default React.memo(function PersonalInfo( {user, name, setName}) {



    return (
        <fieldset style={{borderRadius: 0.5+'em'}}>
            <legend>Personal Information</legend>
                <div className="column">
                    <label
                         
                        htmlFor="student-name" 
                        className='form-label'
                    >
                        Student Name
                    </label>

                    <input 
                        id="student-name"
                        type="text"
                        className="form-control" 
                        style={{lineHeight: 1}} 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <label
                        htmlFor="student-pid" 
                        className='form-label'
                    >
                        Student PID
                    </label>
                    <input 
                        id="student-pid"
                        type='text' 
                        className='form-control' 
                        style={{lineHeight: 1}}
                        value={user.pid}
                        readOnly
                    />
                </div>
            </fieldset>

    )
}) 