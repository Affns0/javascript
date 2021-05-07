let num = document.getElementById('num')
let list = document.getElementById('list')
let exit = document.getElementById('exit')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `add ${num.value} value.`
        list.appendChild(item)
        exit.innerHTML = ''
    } else {
        window.alert('Invalid value or already found in the list.')
    }
    num.value = ''
    num.focus()
}

function finish() {
    if (valores.length == 0) {
        window.alert('add value before finish!')
    } else {
        let tot = valores.length
        let bigger = valores[0]
        let smaller = valores[0]
        let sum = 0
        let media = 0
        for(let pos in valores) {
            sum += valores[pos]
            if(valores[pos] > bigger)
            bigger = valores[pos]
            if(valores[pos] < smaller)
            smaller = valores[pos]
        }
        media = sum / tot
        exit.innerHTML = ''
        exit.innerHTML += `<p>Altogether there is ${tot} registered numbers.</p>`
        exit.innerHTML += `<p>The bigger value is ${bigger}.</p>`
        exit.innerHTML += `<p>The smaller value is ${smaller}.</p>`
        exit.innerHTML += `<p>The sum of all values is ${sum}.</p>`
        exit.innerHTML += `<p>The media of all entered numbers is ${media}.</p>`
    }
}