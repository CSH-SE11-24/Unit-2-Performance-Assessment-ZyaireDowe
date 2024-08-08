const prompt = require('prompt-sync')()

console.log("WELCOME to bitlife")
let greetings = prompt("would you like to play my game")
while (greetings = "yes") {
  let username = prompt("Enter your name ")
  console.log(`Welcome ${username}`)
  let object = {}
  object.userheight = prompt("Enter a height")
  object.userEthnicity = prompt("Enter an Ethnicity ")
  console.log(object)

  console.log("Your on your way to school and see a kid from your school getting beat up by a group of thugs.")


  let answer = ["help him!!", "ingore it"]
  for(let i =0;i<=answer.length){
  console.log(i)}
  let userr = prompt("what will you do? Enter, 'help him!!'or 'ignore it' to decide")

  if (user2 == answer[0]) {
    console.log("you got beat up and later on died from critial conditions")
  }
  else if (user2 == answer[1]) {
    console.log("ignored...on my way to school still")
  }
  
  console.log("you see that kid that was getting beat up in school!!are you goinng to walk past him or apologize")
  
  console.log("enter apologize or walk past")
  let pop = prompt("what will u do")
  if (pop === "apologize") {
    console("okay he forgives, you walk away")
  } else if (pop === "walk past") {
    console.log("you got beat up")
  }
    console.log("its a friday and school is over. should i sneak to the holloween party my mom said no or go home")
  
    console.log("Enter go to party or go home")
    let answer2 = prompt("what will you do")
    if (answer2 === "go to party") {
      console.log("you went to the party and had a ball!!On your way home you were your idenity was mistaken and were shot to death for something you didnt do")
    } else if (answer2 === "go home") {
      console.log("you made it home safe, goodnight")
    }else if (greetings ==="no"){
      console.log("okay, bye")
    }
}
