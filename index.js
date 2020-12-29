function wakeDog(dogName, dogBreed) {
  var variableOne = (`Wake ${dogName} the ${dogBreed}`);
  console.log(variableOne);
  return variableOne;
  }

function leashDog(dogName, dogBreed) {
 var variableOne = (`Leash ${dogName} the ${dogBreed}`);
  console.log(variableOne);
  return variableOne;
  }
  
function walkToPark(dogName, dogBreed) {
   var variableOne = (`Walk to the park with ${dogName} the ${dogBreed}`);
    console.log(variableOne);
    return variableOne;
}  

function throwFrisbee(dogName, dogBreed) {
   var variableOne = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(variableOne);
    return variableOne;
}  

function walkHome(dogName, dogBreed) {
   var variableOne = (`Walk home with ${dogName} the ${dogBreed}`);
    console.log(variableOne);
    return variableOne;
}  

function unleashDog(dogName, dogBreed) {
   var variableOne = (`Unleash ${dogName} the ${dogBreed}`);
    console.log(variableOne);
    return variableOne;
}  

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog (dogName, dogBreed){
    //return routine.map(fn => fn(dogName, dogBreed))
    let arrayExercise = []
    for (let i = 0; i < routine.length; i++) {
        arrayExercise.push(routine[i](dogName, dogBreed))
        }  
        return arrayExercise


}
