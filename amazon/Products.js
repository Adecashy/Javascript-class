const searchInputEl = document.getElementById("search-input")
const productListEl = document.querySelector(".products-list")
const cartEl = document.getElementById("cart")


const products = JSON.parse(localStorage.getItem("products")) || []
// console.log(products);

let cartItem = JSON.parse(localStorage.getItem("addToCart")) || []

const display = (productsArray=products) => {
    productListEl.innerHTML = ""
    productsArray.forEach(ele => (
        productListEl.innerHTML += `
            <div class="product-card" >
                <h2 onclick="redirectToProduct(${ele.id})">${ele.name}</h2>
                <p>${ele.category}</p>
                <p>${ele.price}</p>
                <p>${ele.seller}</p>
                <button onclick="addToCart(${ele.id})">Add to cart</button>
            </div>
        `
    ))
}

display()

const search = () =>{
    const seacrhQuery = searchInputEl.value
    const result = products.filter(ele => (
        ele.name.toLowerCase().includes(seacrhQuery.toLowerCase()) || 
        ele.category.toLowerCase().includes(seacrhQuery.toLowerCase()) || 
        ele.seller.toLowerCase().includes(seacrhQuery.toLowerCase())))
        
    display(result)
}

searchInputEl.addEventListener("input", search)

// REDIRECT USER 2 SINGLE Product PAGE
const redirectToProduct = (id) =>{
    window.location.href = `./singleProduct.html?id=${id}`
}
// CART
const getCart = (id) => {
    const product = products.find((ele) => ele.id === id)
    console.log(product);

    return product
}
const addToCart = (id) =>{
    const cartProduct = getCart(id)
    cartItem.push(cartProduct)
    localStorage.setItem("addToCart", JSON.stringify(cartItem))
    updateCart()
}

const updateCart = () =>{
    cartItem = JSON.parse(localStorage.getItem("addToCart"))
    cartEl.textContent = cartItem.length
}
updateCart()

redirectToCart = () =>{
    window.location.href = `./cart.html`
}
















// buttonEl.addEventListener("click", addToCart)

// map
// filter
// find
// includes

// MAP
// const productNames = products.map((ele) => {
//     return ele.price
// })

// const searcQuery = "i"
// const searchResult = products.filter((ele) => ele.name.toLowerCase().includes(searcQuery.toLowerCase()) || ele.category.toLowerCase().includes(searcQuery.toLowerCase()))

// console.log(searchResult)

// const highPriceProducts = products.filter((ele) => ele.price <= 300 && ele.isNegotiable)

// const negotiableProduct = products.filter((ele) => !ele.isNegotiable)
// const gadgetProduct = products.filter((ele) => ele.category == "gadget")
// console.log(gadgetProduct)

// const headSet = products.find((ele) => ele.name == "Headset")
// console.log(headSet);

// const cheapProduct = products.find((ele) => ele.price >= 2000)
// console.log(cheapProduct)

// console.log(names.includes("blae"))

// const userName = "adeola joshua"
// const search = "Ad"
// console.log(userName.includes(search))
