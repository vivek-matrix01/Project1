const obj=[
{id:1,
rating:4.1,
total_reviews:6,//in K
brand:"Kalini",
clothes:"Kurta with trouser & dupatta",
originalprice:4995,
discount:72 ,//in %
image:"../images/image1.webp",
discountprice: function() { return this.originalprice * (100 - this.discount) / 100; },

},
{id:2,
    rating:3.7,
    total_reviews:27,//in K
    brand:"Sangria",
    clothes:"Yoke Design Velvet Kurta Set",
    originalprice:7799,
    discount:80 ,//in %
    discountprice: function() { return this.originalprice * (100 - this.discount) / 100; },
    image:"../images/image6.webp",
    dp:this.discountprice,
    },
{id:3,
    dp:this.discountprice,
    rating:4.1,
    total_reviews:420,//in K
    brand:"Shae By Sassafras",
    clothes:"Women kurti with trouser",
    originalprice:3999,
    discount:67 ,//in %
    discountprice: function() { return this.originalprice * (100 - this.discount) / 100; },
    image:"../images/image2.webp",
    },
{id:4,
    rating:4.5,
    dp:this.discountprice,
    total_reviews:3,//in K
    brand:"Myshka",
    clothes:"Women Embroided Kurta Set",
    originalprice:4499,
    discount:75,//in %
    discountprice: function() { return this.originalprice * (100 - this.discount) / 100; },
    image:"../images/image3.webp",
    },
{id:5,
    rating:4.2,
    dp:this.discountprice,
    total_reviews:5,//in K
    brand:"Myshka",
    clothes:"Women Embroided  Regular Kurta Set",
    originalprice:7199,
    discount:75,//in %
    discountprice: function() { return this.originalprice * (100 - this.discount) / 100; },
    image:"../images/image4.webp",
    },
{id:6,
    rating:3.7,
    dp:this.discountprice,
    total_reviews:30,//in K
    brand:"Myshka",
    clothes:"Regular Kurta Set",
    originalprice:3499,
    discount:75,//in %
    discountprice: function() { return this.originalprice * (100 - this.discount) / 100; },
    image:"../images/image5.webp",
    },
{id:4,
    rating:4.5,
    dp:this.discountprice,
    total_reviews:7,//in K
    brand:"Ishin",
    clothes:"Velvet Straight Kurta Set",
    originalprice:5999,
    discount:63,//in %
    discountprice: function() { return this.originalprice * (100 - this.discount) / 100; },
    image:"../images/image7.webp",
    },
{id:4,
    rating:4.5,
    dp:this.discountprice,
    total_reviews:9,//in K
    brand:"Miravan",
    clothes:"Women Yoke Design Kurta Set",
    originalprice:4799,
    discount:57,//in %
    discountprice: function() { return this.originalprice * (100 - this.discount) / 100; },
    image:"../images/image8.webp",
    },


];

let container=document.querySelector(".item_container");
function item(obj){

    return (` <div class="item"><div class="image"><img src="${obj.image}"></div>
        <div class="attribute">
        <div class="rating">${obj.rating} ⭐ | ${obj.total_reviews}k</div>
        <div class="brand">${obj.brand}</div>
        <div class="clothes">${obj.clothes}</div>
        <div class="price">
            <span class="discountprice"> Rs. ${obj.discountprice()}  </span>
            <span class="originalprice"> Rs. ${obj.originalprice}</span>
            <span class="discount">
            ( ${obj.discount}% OFF )
            </span>
        </div>
        <div ><button class="addtobag" onclick="addtobag(${obj.id})">Add To Bag</button></div>
        </div> </div>`);
}
let innerhtml=``;
obj.forEach(obj => {
    innerhtml+=item(obj);
    
});

container.innerHTML=`${innerhtml}`;
let count=0;
let itemid=[];
function addtobag(id){
   console.log(id);
    localStorage.setItem(`obj${count}`,JSON.stringify(obj.find(el=>id===el.id)));
    count++;
    document.querySelector(".count").innerHTML=`${count}`;
    document.querySelector(".count").style.padding="1px 4px";
}
