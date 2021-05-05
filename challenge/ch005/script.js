function check() {
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var jump = document.getElementById('jump')
    var exit = document.getElementById('exit')
    if (start.value.length == 0 || end.value.length == 0 || jump.value.length == 0) {
        window.alert('[ERROR] missing datas!')
    } else {
        exit.innerHTML = 'Counting: <br>'
        var s = Number(start.value)
        var e = Number(end.value)
        var j = Number(jump.value)
        if (j <= 0) {
            window.alert('Invalid Jump! Considering 1 how Jump')
            j = 1
        }
        if (s < e) {
            for(var count = s; count <= e; count += j){
                exit.innerHTML += `👉 ${count} `
            }
        } else {
            for(var count = s; count >= e; count -= j){
                exit.innerHTML += ` ${count} 👉`
            }
        }
        exit.innerHTML += ` 🏁`
    } 
}