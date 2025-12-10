const card = document.querySelector(".products-grid") as HTMLDivElement;
 
const Productcard = document.createElement('div')

Productcard.innerHTML = `

   <div class="product-card">
                <div class="product-badge">NEW</div>
                <div class="product-img">
                    <span class="product-emoji"></span>
                </div>
                <div class="product-info">
                    <div class="product-brand">ARROW</div>
                    <h3 class="product-name">Slim Fit Formal Shirt</h3>
                    <div class="product-price">
                        <span class="current-price">₹1,499</span>
                        <span class="original-price">₹2,999</span>
                        <span class="discount">50% OFF</span>
                    </div>
                    <a href="#" class="btn-add-cart">ADD TO CART</a>
                </div>
            </div>




`