let arr = [
  {
    id : 1,
    brand: "Samsung",
    model: "SamsungA30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    image_url:
      "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-A30-500x500.jpg",
  },
  {
    id : 2,
    brand: "Samsung",
    model: "SamsungA10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
    image_url: "https://hamariweb.com/mobiles/LargeImages/4449_04.jpg",
  },
  {
    id : 3,
    brand: "Samsung",
    model: "SamsungA20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
    image_url: "https://cdn.phonemore.com/content/2019/jpg/11915.jpg",
  },
  {
    id : 4,
    brand: "Vivo",
    model: "VivoY20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
    image_url: "https://hamariweb.com/mobiles/LargeImages/5713_03.jpg",
  },
  {
    id : 5,
    brand: "Vivo",
    model: "VivoY11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
    image_url:
      "https://cdn.bolnews.com/wp-content/uploads/2023/07/FotoJet-2023-07-12T191350.341.jpg",
  },
  {
    id : 6,
    brand: "Vivo",
    model: "VivoY15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
    image_url: "https://hamariweb.com/mobiles/LargeImages/3761_03.jpg",
  },
  {
    id : 7,
    brand: "Motorola",
    model: "Motorola123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
    image_url:
      "https://g-mart.pk/wp-content/uploads/Motorola-Edge-40-Neo-1-438x593.jpg",
  },
  {
    id : 8,
    brand: "Iphone",
    model: "Iphone12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    image_url:
      "https://applehub.pk/wp-content/uploads/2021/09/iphone-12-pro-max.jpg",
  },
  {
    id : 9,
    brand: "Iphone",
    model: "Iphone13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    image_url: "https://hamariweb.com/mobiles/LargeImages/5781_01.jpg",
  },
  {
    id : 10,
    brand: "Iphone",
    model: "IphoneX",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    image_url:
      "https://static-01.daraz.pk/p/be084f0d688b460419ce544d4860ddd2.jpg",
  },
];

const Array_element = document.getElementById("Mobile_Detail");

const Display_data = arr.map((mobile, index) => {
  let { id, brand, model, price, camera, ram, rom, image_url } = mobile;
  return (Array_element.innerHTML += `
<div class="container">
<div class="card ">
<img src="${image_url}" class="card-img-top" style="height: 15rem;" alt="...">
<div class="card-body">
<h5 class="card-title lead">id : ${id}</h5>
<h5 class="card-title lead">Brand : ${brand}</h5>
<h5 class="card-title lead">Model : ${model}</h5>
<h5 class="card-title lead">Price : Rs-${price}</h5>
<h5 class="card-title lead">Camera : ${camera}</h5>
<h5 class="card-title lead">Ram : ${ram}</h5>
<h5 class="card-title lead">Rom : ${rom}</h5>
<button class="btn btn-primary mt-2" type="button">Explore More</button>
</div>
</div>`);
});

function search() {

  const searchBy = document.getElementById("searchBy").value;
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();

  // Validate required fields
  if (!searchBy || !searchValue) {
    alert("Please select a search criterion and enter a value.");
    return;
  }

  // Clear the previous search results
  clearResults();

  // Use map and filter to get filtered results
  const filteredArray = arr
    .filter((devices) => devices[searchBy].toLowerCase().includes(searchValue))
    .map(
      (devices) => `
      <tbody class="text-center">
      <tr class="text-center">
      <th class="text-center" scope="row">${devices.id}</th>
       <td class="text-center">${devices.brand}</td>
       <td class="text-center">${devices.model}</td>
       <td class="text-center">${devices.price}</td>
       <td class="text-center">${devices.camera}</td>
       <td class="text-center">${devices.ram}</td>
       <td class="text-center">${devices.rom}</td>
       <td class="text-center"><img style="height: 5rem;" src="${devices.image_url}" alt="" ></td>
       </tr>
       </tbody>
     `
    );

  //  Display the results
  renderResults(filteredArray);
}

function renderResults(results) {
  const resultsContainer = document.getElementById("Search_Detail");

  results.length === 0 ? alert("No matching results found.") : false;

  results.map((result) => {

    resultsContainer.innerHTML += result;
  });
}

function clearResults() {
  document.getElementById("Search_Detail").innerHTML = "";
  document.getElementById("Mobile_Detail").innerHTML = "";
}
