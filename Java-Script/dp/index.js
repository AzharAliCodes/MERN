let c = document.getElementsByTagName("body")[0]


setInterval(() => {
    let r =Math.floor(Math.random() * 226)
    let a =Math.floor(Math.random() * 226)
    let b =Math.floor(Math.random() * 226)
    c.style.backgroundColor = `rgb(${a},${b},${r})`
},2000)