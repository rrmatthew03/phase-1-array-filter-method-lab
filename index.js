// Code your solution here

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
function findMatching(array, query){
    console.log(query)
    const result = array.filter(function(driver){
    console.log(driver)
    return(driver => query)
    })
console.log(result)    
}

function fuzzyMatch(array, query){
    const drivers = []
    console.log(drivers.length = 0)
    const result = drivers.filter('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby')
    console.log(fuzzyMatch(drivers, 'Sa')) === members(['Sammy', 'Sarah', 'Sally'])
}



function matchName(){}