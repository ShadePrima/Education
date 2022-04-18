//======31.Пример fetch с промисами получения данных по API=====



// const response = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
// .then(function(data) {
//     return data.json()
// }).then(function(data) {
//     console.log(data)
// }).catch('Курсы валют не доступны')


//Получить данные с сервера 

// async function getCurrencies () {
//     // const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
//     // const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
//     const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
   
//     const usdRate = data[26].rate.toFixed(2)
//     const eurRate = data[32].rate.toFixed(2)


//     console.log(usdRate)
//     console.log(eurRate)


//     //Отобразим это все на странице
//     const usdElement = document.querySelector('#usd')
//     const eurElement = document.querySelector('#eur')

//     usdElement.innerText = usdRate
//     eurElement.innerText = eurRate


// } 
// getCurrencies() 

//Получение данных из ассинхронной функции 

async function getCurrencies () {
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    //отобразить эти данные на странице 
    renderRates(data)
} 
getCurrencies()

function renderRates (data) {
    const usdRate = data[26].rate.toFixed(2)
    const eurRate = data[32].rate.toFixed(2)


    console.log(usdRate)
    console.log(eurRate)
 

    //Отобразим это все на странице
    const usdElement = document.querySelector('#usd')
    const eurElement = document.querySelector('#eur')

    usdElement.innerText = usdRate
    eurElement.innerText = eurRate
}

