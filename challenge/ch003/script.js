function load () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var date = new Date()
    var time = date.getHours()
    msg.innerHTML = `The time it is ${time}`
    if (time >= 0 && time < 12) {
        // good morning
        img.src = "image/morning.jpg"
        document.body.style.background = "#BEB79D"
    } else if (time >= 12 && time < 18) {
        // good afternon
        img.src = "image/afternoon.jpg"
        document.body.style.background = "#C58353"
    } else {
        // good evening
        img.src = "image/evening.jpg"
        document.body.style.background = "#5D4569"
    }


}