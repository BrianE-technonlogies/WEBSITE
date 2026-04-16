// PRODUCTS
const data = [
    {
        id: 1,
        name: "Invicta Men's pro Diver",
        img:"carImg/car8.png",
        price: 480,
        cat: "Lamborghini"
    },
    {
        id: 11,
        name: "Brian Auto",
        img:"carImg/car23.png",
        price: 500,
        cat: "Lamborghini"
    },
    {
        id: 2,
        name: "Timex Men's Expendition Scout",
        img:"carImg/car5.png",
        price: 40,
        cat: "Sports"
    },
    {
        id: 1,
        name: "Brian Auto",
        img:"carImg/car24.png",
        price: 74,
        cat: "Sports"
    },
    {
        id: 4,
        name: "Eyamu Men's pro Diver",
        img:"carImg/car22.png",
        price: 200,
        cat: "Luxury"
    },
    {
        id: 18,
        name: "Invicta Men's pro Diver",
        img:"carImg/car9.png",
        price: 350,
        cat: "Lamborghini"
    },
    {
        id: 15,
        name: "Brian Auto",
        img:"carImg/car19.png",
        price: 200,
        cat: "Lamborghini"
    },
    {
        id: 13,
        name: "Invicta Men's pro Diver",
        img:"carImg/car8.png",
        price: 500,
        cat: "Lamborghini"
    },
    {
        id: 10,
        name: "Brian Auto",
        img:"carImg/car19.png",
        price: 500,
        cat: "Casual"
    },
    {
        id: 9,
        name: "Invicta Men's pro Diver",
        img:"carImg/car8.png",
        price: 480,
        cat: "Lamborghini"
    },
    {
        id: 12,
        name: "Invicta Men's pro Diver",
        img:"carImg/car20.png",
        price: 400,
        cat: "Lamborghini"
    },
    {
        id: 7,
        name: "Brian Auto",
        img:"carImg/car8.png",
        price: 500,
        cat: "Casual"
    },
    {
        id: 6,
        name: "Invicta Men's pro Diver",
        img:"carImg/car9.png",
        price: 74,
        cat: "Lamborghini"
    },
       {
        id: 11,
        name: "Invicta Brian",
        img:"carImg/car22.png",
        price: 500,
        cat: "Lamborghini"
    },
       {
        id: 11,
        name: "Invicta Brian",
        img:"carImg/car24.png",
        price: 200,
        cat: "Lamborghini"
    },
       {
        id: 11,
        name: "Brian Auto",
        img:"carImg/car13.png",
        price: 500,
        cat: "Lamborghini"
    },
       {
        id: 11,
        name: "Brian Auto",
        img:"carImg/car21.png",
        price: 83,
        cat: "Lamborghini"
    },
       {
        id: 11,
        name: "Brian Auto",
        img:"carImg/car13.png",
        price: 280,
        cat: "Lamborghini"
    },
       {
        id: 11,
        name: "Brian Auto",
        img:"carImg/car23.png",
        price: 200,
        cat: "Lamborghini"
    },
       {
        id: 11,
        name: "Brian Auto",
        img:"carImg/car25.png",
        price: 300,
        cat: "Lamborghini"
    },
]

// Displaying above Products
const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")

const displayproducts = (filteredProducts) =>{
    productsContainer.innerHTML = filteredProducts.map(product=>
        `
        <div class="product">
            <img src = "${product.img}" alt = " ">
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
        </div>
        `
    ).join("");
}

displayproducts(data);


// Setting Search Input
searchInput.addEventListener("keyup",(e)=>{
    const value = e.target.value.toLowerCase();

    if(value){
        displayproducts(data.filter(item=> item.name.toLowerCase().indexOf(value) !== -1))
    }else{
        displayproducts(data)
    }
});

// Setting Car Categories
const setCategories = () => {
    const allCats = data.map(item=>item.cat)
    const categories = ["All",...allCats.filter((item,i)=>{
        return allCats.indexOf(item)===i
    })];

    categoriesContainer.innerHTML = categories.map(cat=>
        `
        <span class="cat">${cat}</span>
        `
    ).join("")

    categoriesContainer.addEventListener("click",(e)=>{
        const selectedCat = e.target.textContent;

        selectedCat === "All" 
        ? displayproducts(data) 
        : displayproducts(data.filter(item=>item.cat === selectedCat));
    });
    
};

// setting prices using Maximum Price
const setPrices = ()=>{
    const priceList = data.map(item=>item.price);
    const minPrice= Math.min(...priceList);
    const maxPrice= Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = minPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent = "$" + e.target.value
        displayproducts(data.filter((item) => item.price <= e.target.value));
    })
};

setCategories();
setPrices();