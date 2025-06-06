const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

makeProducts();
function makeProducts() {
    // document.querySelector("#product").innerHTML = "";
    products.forEach(products =>{
        // let label = document.createElement("label");
        let option = document.createElement("option");
        


        option.text = products.name;
        option.setAttribute("value", products.name);

        document.querySelector("#product").appendChild(option);
    } )
}

const visitsDisplay = document.querySelector(".reviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls"));

if (numReviews !==0) {
  visitsDisplay.textContent = numReviews;
}
else {
  visitsDisplay.textContent = `This is your first review! Thank you`;
}

numReviews++;
localStorage.setItem("numReviews-ls", numReviews);




