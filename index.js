//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (newDrivers, name) {
    return newDrivers.filter(matchName => matchName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch (newDrivers, name) {
    return newDrivers.filter(element => element.charAt(0) === name.charAt(0))
}

function matchName(newArray, name){
    return newArray.filter(element => element.name === name)
}