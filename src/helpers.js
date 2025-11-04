const validateAdmissionYear = (year) => {

    const currentYear = new Date().getFullYear();


    console.log("Validating years start type is ", typeof year);

    if (year === undefined || year === null) {

        return `Year is undefined or null`

    }

    if (typeof year !== "string") {
        return `Year is invalid type is ${typeof year} and not "string"`
    }

    parsedYear = parseInt(year);

    if (isNaN(parsedYear)) {
        return `Enter a valid year you entered: ${year}`
    }

    
    if (parsedYear < 2000 || parsedYear > currentYear) {
        return `Year: ${year} is out of valid range (2000 - ${currentYear})`
    }
    return `Valid year ${parsedYear}`

        
}

export { validateAdmissionYear };