const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectacima = document.querySelector(".currency-select-acima")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value")

    const bitcoinToday = 299958.00
    const dolarToday = 5.17
    const euroToday = 5.52
    const libraToday = 6.47
    const realToday = 1.00
    
    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)}

    
    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)}


    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)}
        

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)}


    if(currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)}
    }
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxx PARA SEPARAR AS CAMADAS E FACILITAR A VISUALIZAÇÃO!!
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


function convertValuesAcima(){
    const inputCurrencyValueAcima = document.querySelector(".input-currency").value
    const currencyValueToConvertAcima = document.querySelector(".currency-value-to-convert")

    const bitcoinToday = 299958.00
    const dolarToday = 5.17
    const euroToday = 5.52
    const libraToday = 6.47
    const realToday = 1.00
    
    if(currencySelectacima.value == "bitcoin"){
        currencyValueToConvertAcima.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValueAcima * bitcoinToday)}

    if(currencySelectacima.value == "dolar"){
        currencyValueToConvertAcima.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
         }).format(inputCurrencyValueAcima * dolarToday)}

    if(currencySelectacima.value == "euro"){
        currencyValueToConvertAcima.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValueAcima * euroToday)}

    if(currencySelectacima.value == "libra"){
        currencyValueToConvertAcima.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValueAcima * libraToday)}

    if(currencySelectacima.value == "real"){
        currencyValueToConvertAcima.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValueAcima * realToday)}

    }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxx PARA SEPARAR AS CAMADAS E FACILITAR A VISUALIZAÇÃO!!
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    function changeCurrency(){
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")

        if(currencySelect.value == "bitcoin"){
            currencyName.innerHTML = "₿ BitCoin"
            currencyImage.src = "./assets/Bitcoin.png"
        }
       
        if(currencySelect.value == "dolar"){
            currencyName.innerHTML = "Dólar Americano"
            currencyImage.src = "./assets/EUA.png"
        }

        if(currencySelect.value == "euro"){
            currencyName.innerHTML = "€ Euro"
            currencyImage.src = "./assets/Euro.png"
        }

        if(currencySelect.value == "libra"){
            currencyName.innerHTML = "£ Libra"
            currencyImage.src = "./assets/Libra.png"
        }

        if(currencySelect.value == "real"){
            currencyName.innerHTML = "R$ Real Brasileiro"
            currencyImage.src = "./assets/BR.png"
        }
        
        convertValues()
    }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxx PARA SEPARAR AS CAMADAS E FACILITAR A VISUALIZAÇÃO!!
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    function changeCurrencyAcima(){
        const currencyNameAcima = document.getElementById("currency-name-acima")
        const currencyImageAcima = document.querySelector(".currency-img-acima")

        if(currencySelectacima.value == "bitcoin"){
            currencyNameAcima.innerHTML = "₿ BitCoin"
            currencyImageAcima.src = "./assets/Bitcoin.png"}

        if(currencySelectacima.value == "dolar"){
            currencyNameAcima.innerHTML = "Dólar Americano"
            currencyImageAcima.src = "./assets/EUA.png"}

        if(currencySelectacima.value == "euro"){
            currencyNameAcima.innerHTML = "€ Euro"
            currencyImageAcima.src = "./assets/Euro.png"}

        if(currencySelectacima.value == "libra"){
            currencyNameAcima.innerHTML = "£ Libra"
            currencyImageAcima.src = "./assets/Libra.png"}

        if(currencySelectacima.value == "real"){
            currencyNameAcima.innerHTML = "R$ Real Brasileiro"
            currencyImageAcima.src = "./assets/BR.png"}

        convertValuesAcima()
        }

currencySelectacima.addEventListener("change", changeCurrencyAcima)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
convertButton.addEventListener("click", convertValuesAcima)



