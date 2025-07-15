const addedCartItemEL = document.getElementById("addedCartItems")
const getCartArray = JSON.parse(localStorage.getItem("addToCart")) || []

const displayCartItems = () =>{
    
    getCartArray.forEach(ele => {
        addedCartItemEL.innerHTML += `
            <div class="product-card" >
                <h2>${ele.name}</h2>
                <p>${ele.category}</p>
                <p>${ele.price}</p>
                <p>${ele.seller}</p>
            </div>
        `
    });
}

displayCartItems()