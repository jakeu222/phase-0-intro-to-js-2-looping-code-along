// Code your solutions in this file

/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)

}
*/




function writeCards(name, event) {
    let array = []
    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }


    return array












}

function countDown(number) {
    while (number > -1) {
        console.log(number--)
    }
}













