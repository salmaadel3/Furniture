
// navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll' ,()=>{
    if(scrollY >=180){
        navbar.classList.add('bg');
    }else
    {
        navbar.classList.remove('bg');
    }
})
const createNavBar = ()=>{
    let navbar = document.querySelector('.navbar');
    navbar.innerHTML+=`
    <ul class="links-container">
            <li><a href="index.html" class="links active">Home</a></li>
            <li><a href="product.html" class="links" >Product</a></li>
            <li><a href="#" class="links" >About</a></li>
            <li><a href="#" class="links" >Contact</a></li>
        </ul>
        <div class="user-interaction">
            <div class="cart">
                <img src="img/cart.png" alt="" class="cart-icon">
                <span class="item-count">00</span>
            </div>
            <div class="user">
                <img src="img/user.png" class="user-icon" alt="">
                <div class="user-icon-popup">
                    <p>Login to your account</p>
                    <a href="./login.html">Login</a>
                </div>
            </div>
        </div>
    `
}
createNavBar();

// user icon popup
let usericon = document.querySelector('.user-icon');
let usericonpopup = document.querySelector('.user-icon-popup');
usericon.addEventListener('click',()=>{
    usericonpopup.classList.toggle('active');
});
