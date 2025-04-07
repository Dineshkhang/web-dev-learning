let p = fetch("https://goweather.herokuapp.com/weather/rajbirajcls")
p.then((value1) => {
    return value1.json()
}).then((value2) => {
    console.log(value2);

})