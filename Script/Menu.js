function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function AddPizza() {
  var ul = document.getElementById("test");
  var nameInput = document.getElementById("menu-add-name").value;
  var priceInput = document.getElementById("menu-add-price").value;
  var infoInput = document.getElementById("menu-add-info").value;

  ul.innerHTML += `<li class="pizzaItem"><a>${nameInput} <br> Price: ${priceInput}<button onclick="deletePizza()">Slett</button><button onclick="editTest()">Rediger</button> <br> Info: ${infoInput}</a></li>`;
  var allSubjectName = document.querySelectorAll(".pizzaItem");
  for (var index = 0; index <allSubjectName.length; index++){
  allSubjectName[index].addEventListener("click", function(){
  this.classList.toggle("active");
  });
  allSubjectName[index].querySelector("button").addEventListener("click",
   function(){
   this.closest(".pizzaItem").remove();
  });
   }

}

function deletePizza() {
  var allSubjectName = document.querySelectorAll(".pizzaItem");
  for (var index = 0; index <allSubjectName.length; index++){
  allSubjectName[index].querySelector("button").addEventListener("click",
   function(){
   this.closest(".pizzaItem").remove();
  });
   }
}

function editTest() {
  var allSubjectName = document.querySelectorAll(".pizzaItem");
  title = prompt("Ny tittel: ");
  price = prompt("Ny pris: ");
  info = prompt("Ny informasjon");
  for(var i = 0; i < allSubjectName.length; i++) {
   allSubjectName[i].addEventListener("click", function() {
     this.closest(".pizzaItem").innerHTML = `<li class="pizzaItem"><a>${title} <br> Price: ${price}<button onclick="deletePizza()">Slett</button><button onclick="editTest()">Rediger</button> <br> Info: ${info}</a></li>`;
    });
  }
 
}