let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        img: 'kids/charming-brunette-kid-denim-attire-smiling-camera-full-length-view-happy-preteen-girl-isolated-pink-background_197531-13692.webp',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        img: 'kids/full-length-portrait-cute-little-kid-boy-stylish-jeans-clothes-smiling-standing-white-kids-fashion-concept_155003-20307.webp',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        img: 'kids/happy-lovely-girl-wearing-stylish-fur-violet-coat-round-trendy-glasses-posing_291650-1131.webp',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        img: 'kids/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_155003-17313.webp',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        img: 'kids/pretty-little-girl-tulle-skirt-with-package-with-present-walking-isolated-pink-background-smiling-camera-cute-friendly-child-expressing-true-positive-emotions-place-text_197531-3557.webp',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        img: 'kids/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_155003-21550.webp',
        price: 120000
    },
    {
        id: 7,
        name: 'PRODUCT NAME 7',
        img: 'kids/full-length-portrait-cute-little-kid-girl-stylish-jeans-clothes-looking-camera-smiling-standing-against-white-studio-wall-kids-fashion-concept_155003-21548.webp',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.img}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.img}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}