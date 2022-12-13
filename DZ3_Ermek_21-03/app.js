// #1 dz
for (let i = 0; i <= 20; i += 2){
    console.log(i)
}

// #2 dz
var i = 0
do {
    var num = prompt('введите число: ')
    if (num >0 ){
        i -= num
    } else {
        alert(i)
        break
    }
} while (true)