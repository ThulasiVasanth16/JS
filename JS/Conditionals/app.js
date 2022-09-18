/*const age = 45;

if(age < 5) {
    console.log(" you are the baby. you get in free")
}
else if(age < 15){
    console.log(" you are the child.you pay $10 ")
}
else if (age < 65 ){
    console.log("you are the adult.you pay $20")
}*/

/*const dayOfWeek =prompt(`ENTER A DAY`);

if (dayOfWeek ==='Monday') {
    console.log("UGHH  I HATE MONDAYS !")
}
else if(dayOfWeek === 'Saturday') {
    console.log("YAY I LOVE SATURDAY!")
}
else if(dayOfWeek === 'Friday') {
    console.log("Cool after Work!!")
}
else if(dayOfWeek === 'Thursday') {
    console.log("Tried!")
}
else if(dayOfWeek === 'Wednesday') {
    console.log("Its  pain")
}
else if(dayOfWeek === 'Tuesday') {
    console.log("Yeah its okay!")
}
else{
    console.log("MEH")
}*/

//password must 6character
const password = prompt("please enter a new password");

if(password.length >= 6) {
    if(password.indexOf('') === -1) {
        console.log("Valid Password!");
    }else{
        console.log("password cannot contain spaces!")
    }
    
}else{
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}

/*password can't space
if(password.indexOf('') === -1) {
    console.log("Good job! No space!")
}else{
    console.log("password cannot contain spaces!")
}*/
