const searchInputEl = document.getElementById("search-input")
const productListEl = document.querySelector(".products-list")

const products = JSON.parse(localStorage.getItem("products")) || []

const display = (productsArray=products) => {
    productListEl.innerHTML = ""
    productsArray.forEach(ele => (
        productListEl.innerHTML += `
            <div class="product-card" >
                <h2 onclick="redirectToProduct(${ele.id})">${ele.name}</h2>
                <p>${ele.category}</p>
                <p>${ele.price}</p>
                <p>${ele.seller}</p>
                <button>Add to cart</button>
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
