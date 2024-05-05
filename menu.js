const menuitems=[
  {
    id:1,
    name:"Garlic Bread",
    price:8.5,
    image:"images/menu-item-thumbnail-01.jpg",
    qty:0
  },
  {
    id:2,
    name:"Mixed Salad",
    price:25,
    image:"images/menu-item-thumbnail-02.jpg",
    qty:0
  },
  {
    id:3,
    name:"BBQ Chicken Wings",
    price:10,
    image:"images/menu-item-thumbnail-03.jpg",
    qty:0
  },
  {
    id:4,
    name:"Meat Feast Pizza",
    price:5,
    image:"images/menu-item-thumbnail-04.jpg",
    qty:0
  },
  {
    id:5,
    name:"Chicken Tikka Masala",
    price:15,
    image:"images/menu-item-thumbnail-05.jpg",
    qty:0
  },
  {
    id:6,
    name:"Spicy Meatballs",
    price:6.5,
    image:"images/menu-item-thumbnail-06.jpg",
    qty:0
  },
  {
    id:7,
    name:"Chocolate Fudgecake",
    price:4.5,
    image:"images/menu-item-thumbnail-07.jpg",
    qty:0
  },
  {
    id:8,
    name:"Waffle",
    price:10,
    image:"images/menu-item-thumbnail-08.jpeg",
    qty:0
  },
  {
    id:9,
    name:"Macaron",
    price:9.5,
    image:"images/menu-item-thumbnail-09.jpg",
    qty:0
  },
  {
    id:10,
    name:"American Espresso",
    price:8.5,
    image:"images/menu-item-thumbnail-10.jpg",
    qty:0
  },
  {
    id:11,
    name:"Caramel Macchiato",
    price:25,
    image:"images/menu-item-thumbnail-11.jpg",
    qty:0
  },
  {
    id:12,
    name:"Iced Mocha",
    price:10,
    image:"images/menu-item-thumbnail-12.png",
    qty:0
  }
]
let menulist= document.querySelector(".menus")
console.log(menulist)
function displaymenu()
{
  menuitems.map((menu)=>{
    menulist.innerHTML+=`<div class="col">
    <div class="card shadow h-100">
      <img src=${menu.image} class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${menu.name}</h5>
        <p class="card-text">$${menu.price}</p>
        <button type="button" class="btn btn-success">Add to Cart</button>
      </div>
    </div>
  </div>`
  })
}
displaymenu()
let 

function displaycartitems()
{
  createImageBitmap.map()
}