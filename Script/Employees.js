var rIndex = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                        
                    employeenumber = document.getElementById("employeenumber").value,
                    name = document.getElementById("name").value,
                    adress = document.getElementById("adress").value,
                    phonenumber = document.getElementById("phonenumber").value,
                    role= document.getElementById("role").value,
                    restaurant = document.getElementById("restaurant").value;
                
            
                if(employeenumber === ""){
                    alert("You must enter Employeenumber in the Employernumber field");
                    isEmpty = true;
                }
                else if(name === ""){
                    alert("You must enter a name in the name field");
                    isEmpty = true;
                }
                else if(adress === ""){
                    alert("Adress Connot Be Empty");
                    isEmpty = true;
                }
                else if(phonenumber === ""){
                    alert("You must enter a phone number in the adress field");
                    isEmpty = true;
                }
                else if(role === ""){
                    alert("You must enter a role in the role field");
                    isEmpty = true;
                }
                else if(restaurant === ""){
                    alert("You must enter a restaurant in the restaurant field");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            // AddRow
            function addHtmlTableRow()
            {
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    
                    employeenumber = document.getElementById("employeenumber").value,
                    name = document.getElementById("name").value,
                    adress = document.getElementById("adress").value,
                    phonenumber = document.getElementById("phonenumber").value,
                    role = document.getElementById("phonenumber").value,
                    restaurant = document.getElementById("restaurant").value;
            
                    cell1.innerHTML = employeenumber;
                    cell2.innerHTML = name;
                    cell3.innerHTML = adress;
                    cell4.innerHTML = phonenumber;
                    cell5.innerHTML = role;
                    cell6.innerHTML = restaurant;
                    
                selectedRowToInput();
                }
            }
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function(){ 
                      rIndex = this.rowIndex;
                      document.getElementById("employeenumber").value = this.cells[0].innerHTML;
                      document.getElementById("name").value = this.cells[1].innerHTML;
                      document.getElementById("adress").value = this.cells[2].innerHTML;
                      document.getElementById("phonenumber").value = this.cells[3].innerHTML;
                      document.getElementById("role").value = this.cells[4].innerHTML;
                      document.getElementById("restaurant").value = this.cells[5].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var employeenumber = document.getElementById("employeenumber").value,
                    name = document.getElementById("name").value,
                    adress = document.getElementById("adress").value,
                    phonenumber = document.getElementById("phonenumber").value,
                    role = document.getElementById("role").value,
                    restaurant = document.getElementById("restaurant").value;
               
                if(!checkEmptyInput()){
                
                    table.rows[rIndex].cells[0].innerHTML = employeenumber;
                    table.rows[rIndex].cells[1].innerHTML = name;
                    table.rows[rIndex].cells[2].innerHTML = adress;
                    table.rows[rIndex].cells[3].innerHTML = phonenumber;
                    table.rows[rIndex].cells[4].innerHTML = role;
                    table.rows[rIndex].cells[5].innerHTML = restaurant;
                    
              }
            }
           function removeSelectedRow()
            {
                    table.deleteRow(rIndex);

                    // sletter input text
                    document.getElementById("employeenumber").value = "";
                    document.getElementById("name").value = "";
                    document.getElementById("adress").value = "";
                    document.getElementById("phonenumber").value = "";
                    document.getElementById("role").value = "";
                    document.getElementById("restaurant").value = "";
            }