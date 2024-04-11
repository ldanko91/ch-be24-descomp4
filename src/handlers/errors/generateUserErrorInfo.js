const generateUserErrorInfo = (user) => {
    return `One or more properties were incomplete or not valid.
    List of required properties:
    * Name   : Must be a string, received ${user.name},
    * lastname   : Must be a string, received ${user.lastname},
    * email   : Must be a string, received ${user.email},
    `
}

export default generateUserErrorInfo