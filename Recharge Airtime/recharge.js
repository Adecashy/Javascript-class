const selectNetworktEl = document.getElementById("select-network")
const selectAmountEl = document.getElementById("select-amount")
let generatePinEL = document.getElementById("generated-pin")
const generateButtonEl = document.getElementById("generate-btn")
const cardDetailsEl = document.getElementById("card-details")
let newArray = JSON.parse(localStorage.getItem("cardDetails")) || []

const saveCardDetails = ()=>{
    const selectNetworkVal = selectNetworktEl.value
    const selectAmountVal = selectAmountEl.value
    let generatePinVal = generatePinEL.value
    generatePinVal = Math.ceil(Math.random() * 9999999999999)
    // generatePinEL.value = `*333*${generatePinVal}#`

    if (!selectNetworkVal || !selectAmountVal || !generatePinVal) {
        alert("you have not select any network")
        return
    }
    
    const newCardDetails = {
        network: selectNetworkVal,
        amount: selectAmountVal,
        pin: generatePinVal
    }

    newArray.push(newCardDetails)

    selectNetworktEl.value = ""
    selectAmountEl.value = ""
    generatePinEL.value = ""

    localStorage.setItem("cardDetails", JSON.stringify(newArray))

    displayCardDetails()
}

const displayCardDetails = ()=>{
    newArray = JSON.parse(localStorage.getItem("cardDetails")) || []

    cardDetailsEl.innerHTML = ""

    newArray.forEach((ele, ind)=>{
        cardDetailsEl.innerHTML += `
            <tr>
                <td>${ind + 1}</td>
                <td>${ele.network}</td>
                <td></td>
                <td>${ele.amount}</td>
                <td>${ele.pin}</td>
                <td id="print-ref">*333*${ele.pin}#</td>
                <td>unused</td>
                <td><button onclick="del(${ind})">delete</button></td>
            </tr>
        `
    })
}
displayCardDetails()

// function del(ind) {
//     newArray.splice(ind, 1)
//     localStorage.setItem("cardDetails", JSON.stringify(newArray))
//     displayCardDetails()
// }
// del()

generateButtonEl.addEventListener("click", saveCardDetails)
