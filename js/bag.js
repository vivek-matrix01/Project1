let obj=[];
let total_items=localStorage.length;
for(let i=0;i<localStorage.length;i++){
   let str= localStorage.getItem(`obj${i}`);
   obj[i]=JSON.parse(str);
}
load();

function remove(id){

    obj=obj.filter(e=>(e.id!==id)) ;
    
    console.log(id);
    load();
   }

function load(){

if(obj.length===0){
    let 
    x=document.querySelector("#bg");
    
    x.innerHTML=`<img src="../images/im.gif">`;
}



let selected_items=localStorage.length;
let total_discountprice=0;
let total_originalprice=0;
let bill=0;
let html=``;
let i=0;
obj.forEach(obj=>{
    let shopping_str=`
                <div class="shopping_option">
                   
                    
                </div>
                <div class="item_summary">

                    <img src="${obj.image}">
                    <div class="text">
                    <div class="brand">${obj.brand}</div>
        <div class="clothes">${obj.clothes}</div>
        <div class="price">
            <span class="discountprice"> Rs. ${eval(obj.originalprice * (100 - obj.discount) / 100)}  </span>
            <span class="originalprice"> Rs. ${obj.originalprice}</span>
            <span class="discount">
            ( ${obj.discount}% OFF )
            </span>
        </div>
         <button onclick="remove(${obj.id});">REMOVE</button>
                </div></div>
            `;
            total_originalprice+=obj.originalprice;
           

            bill+=eval((obj.originalprice * (100 - obj.discount) / 100)+60);
            total_discountprice+=eval(total_originalprice-bill);
        html+=shopping_str;}
    
   );

   let price_container=`<div class="upper_price_container">
                <div class="price_details"> PRICE DETAILS (${selected_items} Item)</div>
                <div class="price"><div class="right_text">TOTAL MRP</div>
                <div class="original_price"> RS ${total_originalprice}</div></div>
                <div class="price"><div class="right_text">TOTAL DISCOUNT ON MRP</div><div class="discount">RS ${total_discountprice}</div></div>
               
                
                <div class="price">
                    <div class="right_text">PLATFORM FEE</div><div class="platform fee">Rs 20</div>
                </div>
                <div class="price">
                    <div class="right_text">SHIPPING FEE</div><div class="discount_price">RS 40</div>
                </div>
            </div>
            <div class="lower_price_container">
                <div class="total">
                    <div >TOTAL AMOUNT</div>
                    <div  class="bill">RS ${bill} </div>
                </div>
                <div><a><button>PLACE ORDER</button></a></div>
            </div>`;
   document.querySelector(".shopping_container").innerHTML=html;
   document.querySelector(".price_container").innerHTML=price_container;


   
}