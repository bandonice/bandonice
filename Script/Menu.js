function myFunction() {
  // Declare variables
  var input, filter, ul, li, h2, i, txtValue, div;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("menu-ul");
  li = ul.getElementsByTagName('li');
  div = document.getElementsByClassName("delete-menu-item");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    h2 = div[i].getElementsByTagName("h2")[0];
    txtValue = h2.textContent || h2.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}

function AddPizza() {
  var nameInput = document.getElementById("menu-add-name").value;
  var priceInput = document.getElementById("menu-add-price").value;
  var infoInput = document.getElementById("menu-add-info").value;
  let addPizza = document.getElementById("add-pizza");

  addPizza.innerHTML += `
  <div class="delete-menu-item">
      <button class="added-delete-btn">Delete</button>
      <li class="edit-menu-item">
        <img src="image/pizzaEmoji-removebg-preview.png" alt="image" >
        <h2>${nameInput}</h2>  
      <button onclick="editFunction()">Edit</button>
      <h3>Price: ${priceInput}</h3>
      <a> ${infoInput}</a>
      </li>
    </div>
      `;
  var allSubjectName = document.querySelectorAll(".delete-menu-item");
  for (var index = 0; index <allSubjectName.length; index++){
  allSubjectName[index].querySelector("button").addEventListener("click",
   function(){
   this.closest(".delete-menu-item").remove();
  });
   }
}

function AddDrink() {
  var ul = document.getElementById("test");
  var nameInput = document.getElementById("menu-add-name").value;
  var priceInput = document.getElementById("menu-add-price").value;
  var infoInput = document.getElementById("menu-add-info").value;
  let addDrink = document.getElementById("add-drinks");

  addDrink.innerHTML += `
  <div class="delete-menu-item">
      <button class="added-delete-btn">Delete</button>
      <li class="edit-menu-item">
        <img src="image/sodaemojijpg-removebg-preview.png" alt="image" >
        <h2>${nameInput}</h2>  
      <button onclick="editFunction()">Edit</button>
      <h3>Price: ${priceInput}</h3>
      <a> ${infoInput}</a>
      </li>
    </div>
      `;
  var allSubjectName = document.querySelectorAll(".delete-menu-item");
  for (var index = 0; index <allSubjectName.length; index++){
  allSubjectName[index].querySelector("button").addEventListener("click",
   function(){
   this.closest(".delete-menu-item").remove();
  });
   }
}

  var allSubjectName = document.querySelectorAll(".delete-menu-item");
  for (var index = 0; index <allSubjectName.length; index++){
  allSubjectName[index].querySelector("button").addEventListener("click",
   function(){
   this.closest(".delete-menu-item").remove();
  });
   }

function editFunction() {
  
  let Image = prompt("Type inn drink or pizza. depending on what you are editing.").toLowerCase();

  if(Image === "pizza"){
    var allSubjectName = document.querySelectorAll(".edit-menu-item");
  title = prompt("Ny tittel: ");
  price = prompt("Ny pris: ");
  info = prompt("Ny informasjon");

    for(var i = 0; i < allSubjectName.length; i++) {
   allSubjectName[i].addEventListener("click", function() {
     this.closest(".edit-menu-item").innerHTML = `
     <li class="edit-menu-item">
        <img src="image/pizzaEmoji-removebg-preview.png" alt="image">
        <h2>${title}</h2>  
      <button onclick="editFunction()">Edit</button>
      <h3>Price: ${price}</h3>
      <a> ${info}</a>
      </li>`;
    });
  }
  }else if(Image === "drink"){
    var allSubjectName = document.querySelectorAll(".edit-menu-item");
  title = prompt("Ny tittel: ");
  price = prompt("Ny pris: ");
  info = prompt("Ny informasjon");

  for(var i = 0; i < allSubjectName.length; i++) {
    allSubjectName[i].addEventListener("click", function() {
      this.closest(".edit-menu-item").innerHTML = `
      <li class="edit-menu-item">
         <img src="image/sodaemojijpg-removebg-preview.png" alt="image">
         <h2>${title}</h2>  
       <button onclick="editFunction()">Edit</button>
       <h3>Price: ${price}</h3>
       <a> ${info}</a>
       </li>`;
        });
   }
  }else{
    alert("you need to type in drink or pizza. Try again.");
  }
 
}