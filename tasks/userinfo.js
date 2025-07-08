const usernameInput = document.getElementById("username")
const phoneInput = document.getElementById("phone")
const addButtonEl = document.getElementById("add-btn")
const userInfos = document.getElementById("user-infos")
let usersList = []


// SAVE A NEW USER
const saveNewUser  = ( )=>{
    // retrive the values
    const usernameVal = usernameInput.value
    const phoneVal = phoneInput.value

    // check if they are not empty
    if(usernameVal === "" || phoneVal === ""){
        alert("Fill all fields")
        return
    }

    // save both value in an object
    const newUser = {
        username: usernameVal,
        phone: phoneVal
    }

    // push the new user into the userList array
    usersList.push(newUser)

    // clear the inputs
    usernameInput.value = ""
    phoneInput.value = ""

    // clear the table body
    userInfos.innerHTML = ""

    // loop the array and render it on the table body
    usersList.forEach((ele)=>{
        userInfos.innerHTML += `
            <tr>
                <td>${ele.username}</td>
                <td>${ele.phone}</td>
            </tr>
        `
    })
}

addButtonEl.addEventListener("click", saveNewUser)