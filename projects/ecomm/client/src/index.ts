const card = document.querySelector(".products-grid") as HTMLDivElement;
 
const Productcard = document.createElement('div')

try {
    

const response = await fetch("http://localhost:5000/api/user/products",{

    method: "GET",
    headers: { "Content-Type": "application/json" }


}
)
const data =  await response.json()
console.log(data);

if(!response.ok){
    throw new Error("unable to fetch");
}




data.forEach((product: any) => {
    const productCard = document.createElement('div');
    productCard.innerHTML = `
        <div class="product-card">
            <div class="product-badge">NEW</div>
            <div class="product-img">
                <img src="${product.image}">
            </div>
            <div class="product-info">
                <div class="product-brand">ARROW</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">${product.price}</span>
                    <span class="original-price">₹2,999</span>
                    <span class="discount">50% OFF</span>
                </div>
                <a href="#" class="btn-add-cart">ADD TO CART</a>
            </div>
        </div>
    `;
    card.appendChild(productCard);
});




} catch (error) {
    console.log(error);
    
}



