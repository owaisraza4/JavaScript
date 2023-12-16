const products = [
  {
    id: 4,
    title: "newTitle",
    price: 205,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smartfunctionality",
    image_url: "https://i.imgur.com/R2PN9Wq.jpeg",
  },
  {
    id: 7,
    title: "Ergonomic Wooden Tuna",
    price: 743,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image_url: "https://i.imgur.com/mp3rUty.jpeg",
  },
  {
    id: 9,
    title: "Electronic Bronze Chips",
    price: 808,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image_url: "https://i.imgur.com/R3iobJA.jpeg",
  },
  {
    id: 11,
    title: "Awesome Bronze Car",
    price: 382,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image_url: "https://i.imgur.com/cBuLvBi.jpeg",
  },
  {
    id: 12,
    title: "Recycled Rubber Cheese",
    price: 30,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image_url: "https://i.imgur.com/KeqG6r4.jpeg",
  },
  {
    id: 12,
    title: "Recycled Rubber Cheese",
    price: 30,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image_url: "https://i.imgur.com/KeqG6r4.jpeg",
  }
];

const product_element = document.getElementById("card_details");

const Array_of_objetcs = products;

Array_of_objetcs.map(
  (product, index) =>
    (product_element.innerHTML += `
  <div class="card">
    <img src="${product.image_url}" style="height: 20rem;" class="card-img-top" alt="...">
    <h5 class="card-title">id: ${product.id}</h5>
      <h5 class="card-title">${product.title}</h5>
      <h5 class="card-title">$ : ${product.price}</h5>
      <p class="card-text">${product.description}</p>
      <div class="btn btn-warning m-3">Explore More!</div>
    </div>
    </div>`)
);
