function nameDifference(firstName, secondName){
    
    var fNameLength = firstName.length
    var sNameLength = secondName.length
    
    if(fNameLength > sNameLength) {
        var results = fNameLength - sNameLength
        console.log(firstName + " was greater than " + secondName + " by " +  results)
    } else {
        
        var results = sNameLength - fNameLength
        console.log(secondName + " was less than " + firstName + " by " + results)
    }
}

nameDifference( "Angelina", "Angie")
