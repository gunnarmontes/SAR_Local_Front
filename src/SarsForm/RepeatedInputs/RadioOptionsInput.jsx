import React from "react"
import "../../Forms.css"

export default React.memo(function RadioOptionsInput({options, name, stateVar, stateFunc}) {
    console.log(options)
    return (
        <div className="row">
            {options.map((option) => (
                <span key={`${name}-${option.id}`} className="row">
                    <input 
                        type="radio"
                        name={`${name}`}
                        id={`${name}-${option.id}`}
                        value={option.value}
                        checked={stateVar === option.value}
                        onChange={(e) => stateFunc(e.target.value)}
                    />
                    <label htmlFor={`${name}-${option.id}`} className="form-radio-options">
                        {option.label}
                    </label>

                </span>
            ))}

        </div>
    )
})  