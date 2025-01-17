//This program *converts* **number grades** into **letter grades**

let grade = 86;

if (grade < 50) {
 console.log(`${grade} % is F`)
}
else if (grade < 65){
    console.log(`${grade} % is D`)
}
else if (grade < 75){
    console.log(`${grade} % is C`)
}
else if (grade < 80 ){
    console.log(`${grade} % is B`)
}
else if (grade < 90 ){
    console.log(`${grade} % is A`)
}
else if (grade < 100 ){
    console.log(`${grade} % is A+`)
}