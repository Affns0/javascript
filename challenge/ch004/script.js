function check() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.getElementById('res')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        alert('[ERRO} Check your data and try again!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto', )
        if (fsex[0].checked) {
            gender = 'man'
            if (age >= 0 && age < 10) {
                //children
                img.setAttribute('src', 'image/young_m.jpg')
            } else if (age < 21) {
                //teenager
                img.setAttribute('src', 'image/teenager_m.jpg')
            } else if (age < 60) {
                //adult
                img.setAttribute('src', 'image/adult_m.jpg')
            } else if  (age < 150) {
                //Old Man
                img.setAttribute('src', 'image/old_man.jpg')
            }
        } else if (fsex[1].checked) {
            gender = 'woman'}
            if ( age >= 0 && age < 10) {
                //children
                img.setAttribute('src', 'image/young_f.jpg')
            } else if (age < 21) {
                //teenager
                img.setAttribute('src', 'image/teenager_f.jpg')
            } else if (age < 60) {
                //adult
            img.setAttribute('src', 'image/adult_f.jpg')
            } else if (age < 150) {
                //Old Lady
                img.setAttribute('src', 'image/old_lady.jpg')
        }   
        res.style.textAlign = 'center'
        res.innerHTML = `Detected ${gender} with ${age} years old.`
        res.appendChild(img)
    }
}