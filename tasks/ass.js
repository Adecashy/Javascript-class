const usernameEl = document.getElementById("username")
const phoneEl = document.getElementById("phone")
const emailEl = document.getElementById("email")
const buttonEl = document.getElementById("btn")
const clearButtonEl = document.getElementById("clear-btn")
const userDetailsEl = document.getElementById("user-details")
let userDetailsArray = JSON.parse(localStorage.getItem("users")) || []

const saveUserDetails = ()=>{
    const usernameVal = usernameEl.value
    const phoneVal = phoneEl.value
    const emailVal = emailEl.value
    if (!usernameVal || !phoneVal || !emailVal) {
        alert("fill all user details")
        return  
    }

    const newUserInfo = {
        username: usernameVal,
        phone: phoneVal,
        email: emailVal
    }
    userDetailsArray.push(newUserInfo)
    
    usernameEl.value = ""
    phoneEl.value = ""
    emailEl.value = ""

    localStorage.setItem("users", JSON.stringify(userDetailsArray))

    displayUserDetails()
    
}

const displayUserDetails = ()=>{
    userDetailsArray = JSON.parse(localStorage.getItem("users")) || []

    userDetailsEl.innerHTML = ""

    userDetailsArray.forEach((ele)=>{
        userDetailsEl.innerHTML += `
            <tr>
                <td>${ele.username}</td>
                <td>${ele.phone}</td>
                <td>${ele.email}</td>
            </tr>
        `
    })
}
displayUserDetails()

const clearAllUserDetails = ()=>{
    localStorage.clear()
    displayUserDetails()
}

buttonEl.addEventListener("click", saveUserDetails)
clearButtonEl.addEventListener("click", clearAllUserDetails)