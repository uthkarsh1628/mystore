const products = [
    { id: 1, name: "product 1",desc: "the product is the product is", price: 25 },
    { id: 2, name: "product 2",desc: "the product is the product is", price: 45 },
    { id: 3, name: "product 3",desc: "the product is the product is", price: 30 },
  ];
  const cart = {};
  const addToCart = (id) => {
   if (!cart[id]) cart[id] = 1;
    //console.log(cart);
    showCart();
  };


  const pcart =(id) =>{
    cart[id]=cart[id]+1;
    console.log(cart)
    showCart()
  }


  const ncart =(id) =>{
    cart[id]=cart[id]-1;
    cart[id]<1 && delete cart[id]
    console.log(cart)
    showCart()
  }


  const showCart = () => {
    let str = "";
    products.map((value) => {
      if (cart[value.id]) {
        str += `
        <li>${value.name}-$${value.price}-<button onclick=(ncart(${value.id}))>-</button>${cart[value.id]}<button onclick=(pcart(${value.id}))>+</button>-${value.price*cart[value.id]}</li>
        `;
      }
    });
    divCart.innerHTML = str ;
    let count=Object.keys(cart).length
    items.innerHTML=count
    showtotal()
  };


  const showProducts = () => {
    let str = "<div class='row'>";
    products.map((value) => {
      str += `
      <div class='box'>
      <h3>${value.name}</h3>
      <p>${value.desc}<p>
      <h4>Rs.${value.price}</h4> 
      <button onclick=addToCart(${value.id})>Add to Cart</button>
      </div>
      `;
    });
    divProducts.innerHTML = str+"</div>";
  };


  const showtotal =() =>{
    let t=products.reduce((sum,value)=>{
        //  if(cart[value.id])
        //  {
        // return sum+value.price*cart[value.id];
        //  }
        //  return sum
        return sum+value.price*(cart[value.id]?cart[value.id]:0)
    },0);

    divtotal.innerHTML=`order value :$${t}` 
  }


  const displaycart =()=>{
    //divcartblock.style.display="block"
    divcartblock.style.left="80%"
  }


  const hidecart =()=>{
   // divcartblock.style.display="none"
   divcartblock.style.left="100%"
  }