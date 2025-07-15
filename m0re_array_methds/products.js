const searchInputEl = document.getElementById("search-input")
const productListEl = document.querySelector(".products-list")


const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 29.99,
        seller: "TechZone",
        description: "Ergonomic wireless mouse with adjustable DPI and silent clicks."
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Footwear",
        price: 79.99,
        seller: "FitStride",
        description: "Lightweight running shoes with breathable mesh and cushioned soles."
    },
    {
        id: 3,
        name: "Blender Pro 500",
        category: "Home Appliances",
        price: 99.99,
        seller: "KitchenWares",
        description: "High-performance blender with 5 speed settings and a glass jar."
    },
    {
        id: 4,
        name: "LED Desk Lamp",
        category: "Office Supplies",
        price: 24.50,
        seller: "BrightTech",
        description: "Rechargeable LED desk lamp with touch controls and USB charging port."
    },
    {
        id: 5,
        name: "Leather Wallet",
        category: "Accessories",
        price: 45.00,
        seller: "UrbanStyle",
        description: "Genuine leather wallet with RFID blocking and 8 card slots."
    },
    {
        id: 6,
        name: "Noise Cancelling Headphones",
        category: "Electronics",
        price: 120.00,
        seller: "SoundPulse",
        description: "Over-ear wireless headphones with active noise cancellation and 20h battery."
    },
    {
        id: 7,
        name: "Yoga Mat XL",
        category: "Fitness",
        price: 35.95,
        seller: "ZenBody",
        description: "Extra thick, non-slip yoga mat perfect for all types of workouts."
    },
    {
        id: 8,
        name: "Smartphone Tripod",
        category: "Photography",
        price: 18.99,
        seller: "SnapGear",
        description: "Adjustable tripod for smartphones with Bluetooth remote control."
    },
    {
        id: 9,
        name: "Instant Coffee Pack",
        category: "Grocery",
        price: 10.49,
        seller: "BrewHouse",
        description: "Premium instant coffee blend with rich aroma and smooth taste."
    },
    {
        id: 10,
        name: "Office Chair Ergonomic",
        category: "Furniture",
        price: 150.00,
        seller: "ComfySeating",
        description: "Ergonomic office chair with lumbar support and mesh backrest."
    },
    {
        id: 11,
        name: "Men's Analog Watch",
        category: "Watches",
        price: 85.75,
        seller: "TimeKeeper",
        description: "Stylish stainless steel wristwatch with water resistance up to 50m."
    },
    {
        id: 12,
        name: "Bluetooth Speaker",
        category: "Audio",
        price: 42.30,
        seller: "EchoSound",
        description: "Compact Bluetooth speaker with deep bass and 12h playtime."
    },
    {
        id: 13,
        name: "Cookware Set (7pcs)",
        category: "Kitchen",
        price: 115.00,
        seller: "HomeChef",
        description: "Non-stick cookware set including pots, pans, and utensils."
    },
    {
        id: 14,
        name: "Mini Projector",
        category: "Electronics",
        price: 210.00,
        seller: "VisionTech",
        description: "Portable projector with 1080p support and HDMI input."
    },
    {
        id: 15,
        name: "Cotton Bath Towels (Set of 4)",
        category: "Home & Living",
        price: 33.90,
        seller: "SoftTouch",
        description: "Soft and absorbent bath towels made of 100% premium cotton."
    },
    {
        id: 16,
        name: "Gaming Keyboard RGB",
        category: "Gaming",
        price: 59.95,
        seller: "ProGamerz",
        description: "Mechanical keyboard with RGB lighting and customizable keys."
    },
    {
        id: 17,
        name: "Scented Candles Pack",
        category: "Decor",
        price: 20.00,
        seller: "AromaLight",
        description: "Set of 6 soy wax candles with relaxing floral and citrus scents."
    },
    {
        id: 18,
        name: "Dog Leash Retractable",
        category: "Pets",
        price: 14.99,
        seller: "PetPalace",
        description: "Durable 16ft retractable dog leash with anti-slip handle."
    },
    {
        id: 19,
        name: "iPhone 14 Case",
        category: "Mobile Accessories",
        price: 19.99,
        seller: "CaseFactory",
        description: "Shockproof silicone case for iPhone 14 with raised edges for protection."
    },
    {
        id: 20,
        name: "E-book Reader",
        category: "Electronics",
        price: 129.99,
        seller: "ReadPro",
        description: "6-inch e-ink display e-book reader with backlight and long battery life."
    }
];

// localStorage.setItem("products", JSON.stringify(products))


const display = (productsArray=products) => {
    productListEl.innerHTML = ""
    productsArray.forEach(ele => (
        productListEl.innerHTML += `
            <div class="product-card" >
                <h2 onclick="showSingleProduct(${ele.id})">${ele.name}</h2>
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


const showSingleProduct = (id)=>{
    const singleProductEl = document.querySelector(".single-product")
    // find the product with that id
    const Product = products.find(ele => ele.id === id)
    // display it in the single product card
    singleProductEl.innerHTML = `
        <div class="product-card" >
                <h2>${Product.name}</h2>
                <p>${Product.category}</p>
                <p>${Product.price}</p>
                <p>${Product.seller}</p>
            </div>
    `
    
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
