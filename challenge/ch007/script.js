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
        
    } else {
        window.alert('Invalid value or already found in the list.')
    }
}