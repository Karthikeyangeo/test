// Script file for Make up API

// Variable declaration 
var main_div = document.querySelector("#main_div");
var search_out = '',card_out='';
var full_data=[];

//Display when DOM Loaded
document.addEventListener('DOMContentLoaded',display_items());

// Function to display the items from API
function display_items()
{
    let title_div=document.createElement('div');
    title_div.setAttribute('id','title');
    title_div.classList='justify-content-center text-center';
    main_div.appendChild(title_div);

    let h1= document.createElement('h1');
    h1.innerHTML = "Make up Products";
    title_div.appendChild(h1);

    let div_detail = document.createElement('div');
    div_detail.setAttribute('class','card-box mb-3');
    div_detail.setAttribute('id','card');
    main_div.appendChild(div_detail);
    search();
}

var card = document.getElementById("card");

// function to fetch the data from API
async function search()
{
    try
    {
        let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
        let data = await res.json();
        // getting all the data from API to an array 
        full_data = data;
        items_display(full_data);
    }
    catch(error)
    {
        console.log(error);
    }
   
}


// Function to display the items within API 
function items_display(data)
{
    if(data.length>0)
    {
        data.forEach((x)=>{
            // Display the DOM elements using template literals and inner HMTL options
            card_out += `<div class="card m-3 text-center p-3 ">
                            <img class="card-img-top" src="${x.image_link}" alt="Product Image" height="250" width="250">
                            <div class="card-body">
                                <h5 id="product_name" class="card-title">Product: ${x.name}</h5>
                                <h5 id="brand">Brand: ${x.brand}</h5>
                                <h5 id="price">Price:  ${x.price}</h5>
                                <h5 id="product_link"><a href='${x.product_link}' target="_blank">Click here for product Link</a></h5>
                                <p id="description"><span style="font-weight: bold;"> Description:</span> ${x.description}</p>
                            </div>
                        </div>`            
        });
    }
    else
    {
        card_out = `<div class="card mt-5 error"><h5>No Products found </h5></div>`
    }
    card.innerHTML = card_out;
}

