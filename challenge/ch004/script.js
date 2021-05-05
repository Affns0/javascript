function search() {
    var date = new Date()
    var year = date.getFullYear()
    var entyear = document.getElementById('txtyear')
    var exit = document.getElementById('exit')
    if (entyear.value.length == 0 ||Number(entyear.value) > year) {
        window.alert('[ERROR] Check your data first and try again!')
    } else {
        var entsex = document.getElementsByName('radsex')
        var age = year - Number(entyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'picture')
        if (entsex[0].checked) {
            gender = 'Man'
            if (age >=0 && age < 10) {
                //child
                img.setAttribute('src', 'image/young_m.jpg')
            } else if (age < 21) {
                //teenager
                img.setAttribute('src', 'image/teenager_m.jpg')
            } else if (age < 50) {
                // adult
                img.setAttribute('src', 'image/adult_m.jpg')
            } else {
                //old man
                img.setAttribute('src', 'image/old_man.jpg')
            }
        } else if (entsex[1].checked) {
            gender = 'Woman'
            if (age >=0 && age < 10) {
                //child
                img.setAttribute('src', 'image/young_f.jpg')
            } else if (age < 21) {
                //teenager
                img.setAttribute('src', 'image/teenager_f.jpg')
            } else if (age < 50) {
                // adult
                img.setAttribute('src', 'image/adult_f.jpg')
            } else {
                //old woman
                img.setAttribute('src', 'image/old_lady.jpg')
            }
        }
        exit.style.textAlign = 'center'
        exit.innerHTML = `Checked ${gender} with ${age} years old.`
        exit.appendChild(img)
    }
        
}