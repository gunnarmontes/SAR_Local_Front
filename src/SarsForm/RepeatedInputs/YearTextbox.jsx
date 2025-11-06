import React from "react";
import "../../Forms.css"

export default React.memo(function YearTextbox( {name, stateVar, stateFunc} ) {

    return (

        <div>
            <label className='form-label'>Year</label>
            <input 
                type='number'
                name={`${name}-yearbox`}
                id={`${name}-yearbox`}
                className="form-control" 
                style={{lineHeight: 1}} 
                value={stateVar}
                onChange={(e) => stateFunc(e.target.value)}
            />
        </div>

    )
})