var now = new Date()
var time = now.getHours()
console.log(`Now it's exacly ${time} on clock.`)
if (time < 12) {
    console.log('Good Morning!')
} else if (time <= 18) {
    console.log('Good afternoon!')
} else {
    console.log('Good Evening!')
}