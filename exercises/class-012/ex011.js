var age = 90
if (age < 16) {
    console.log('No vote')
} else if (age < 18  || age > 67 ){
        console.log('Optional vote')
    } else if (age => 18 ) {
        console.log('Obrigatory vote')
    } else {
        console.log('Optional vote')
    }
