function check() {
    var num = document.getElementById('table')
    var mult = document.getElementById('mult')
    if (num.value.length == 0) {
        window.alert('Please Enter a NUMBER!')
    } else {
        var n =Number(num.value)
        var count = 1
        mult.innerHTML = ''
        while (count <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${count} = ${n*count}`
            item.value = `mult${count}`
            mult.appendChild(item)
            count++
        }
    }
}