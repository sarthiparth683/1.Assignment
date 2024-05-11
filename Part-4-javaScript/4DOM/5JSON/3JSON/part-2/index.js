// Code Implementation | Examples:
// Demonstration: The instructor will demonstrate how to parse JSON data received from a server and display it on a web page using JavaScript. Explanation: The instructor will explain each step of the code, including fetching JSON data using AJAX, parsing it using JSON.parse(), and dynamically updating the HTML content with the parsed data.
// Fetch JSON data from a server

// fetch("https://example.com/data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // Parse JSON data and display it on the web page
//     document.getElementById("output").textContent = JSON.stringify(
//       data,
//       null,
//       2
//     );
//   })
//   .catch((error) => console.error("Error fetching data:", error));

//-----------------------------------------------------------------------------
// Problem
// creating a web application that displays user cards based on the provided array of user objects. along with add to cart and Delete functionality.(Use localstorage)

var products = [
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
    name: "APPLE iPhone 14 (Blue, 128 GB)",
    price: "₹57,999",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",
    name: "APPLE iPhone 12 (Blue, 64 GB)",
    price: "₹42,999",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
    name: "APPLE iPhone 13 (Blue, 128 GB)",
    price: "₹58,900",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/r/x/-original-imagth5xf4shxcuv.jpeg?q=70",
    name: "SAMSUNG Galaxy S22 5G (Phantom White, 128 GB)",
    price: "₹39,999",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70",
    name: "Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)",
    price: "₹32,999",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/x/0/-original-imagszg3qxqgdx9c.jpeg?q=70",
    name: "Infinix Zero 30 5G (Rome Green, 256 GB)",
    price: "₹23,999",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/l4ln8nk0/mobile/6/s/i/-original-imagfgf9nf8psuyv.jpeg?q=70",
    name: "OPPO A57 (Glowing Green, 64 GB)",
    price: "₹10,987",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/l0zm64w0/mobile/w/0/i/-original-imagcnn5ahg6pwzd.jpeg?q=70",
    name: "OPPO A96 (Starry Black, 128 GB)",
    price: "₹15,849",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70",
    name: "REDMI 12 (Moonstone Silver, 128 GB)",
    price: "₹10,999",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70",
    name: "REDMI 12 (Pastel Blue, 128 GB)",
    price: "₹10,999",
  },
];

// card code
var container = document.getElementById("container");
container.innerHTML = "";

products.forEach(function (ele) {
  //creating individual card
  var card = document.createElement("div");
  //creating element for cards
  var image = document.createElement("img");
  image.src = ele.imageUrl;
  var h4 = document.createElement("h4");
  h4.textContent = ele.name;
  var price = document.createElement("p");
  price.textContent = ele.price;
  var btn = document.createElement("button");
  btn.textContent = "Add to cart";
  btn.addEventListener("click", function () {
    addToCart(ele);
  });
  // appending in card then in container
  card.append(image, h4, price, btn);
  container.append(card);
});
//--------------------------------------------------------------------------------
//*********************************************************************************
var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(ele) {
  console.log(ele);
  cartArr.push(ele);

  console.log(cartArr);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  window.location.href = "cart.html"
}; 
//********************************************************************** */
// localStorage.removeItem(key); // To delete specific data by key.
// localStorage.clear(); // To clear all local storage data.
//********************************************************************** */  