const products = JSON.parse(localStorage.getItem("products")) || []

const params = new URLSearchParams(window.location.search)
const productId = params.get("id")
const productEl = document.querySelector(".product")

const getSingleProduct = () =>{
    const product = products.find(ele => (
        ele.id === Number(productId)
    ))

    productEl.innerHTML = `
        <div class="product-card" >
                <h2>${product.name}</h2>
                <p>${product.category}</p>
                <p>${product.price}</p>
                <p>${product.seller}</p>
            </div>
    `
}

getSingleProduct()
