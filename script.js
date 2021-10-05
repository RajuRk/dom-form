function formSubmit(){
    var formData = getFormData();
    insertData(formData);
    reset();
}

function getFormData(){
    var formData = {};
    formData['firstname'] = document.getElementById("firstName").value;
    formData['lastname'] = document.getElementById("lastName").value;
    formData['address'] = document.getElementById("address").value;
    formData['pincode'] = document.getElementById("pinCode").value;
    formData['gender'] = document.getElementById("gender").value;
    getRadioValue(formData['gender']);
    formData['food'] = document.getElementById("food").value;
    getRadioValue(formData['food']);
    formData['state'] = document.getElementById("state").value;
    formData['country'] = document.getElementById("country").value;
    console.log(formData)
    return formData;
}
// getFormData();

function insertData(data){
    var table = document.getElementById("list").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pincode;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.gender;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.food;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.state;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.country;
}

function reset(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pinCode").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("food").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
}

function getRadioValue(radioName){
    const getValue = document.getElementById("gender");
    getValue.value = radioName;
    console.log(getValue);
}

function getCheckboxValue(checkboxName){
    const getValue = document.getElementById("food");
    getValue.value = checkboxName;
    console.log(checkboxName);
}

// function getCheckboxValue(checkboxName){
//     const getValue = document.getElementById("food");
//     if(getValue.length == 2){
//        getValue.value = checkboxName;
//        console.log(getValue);
//     }
//     else{
//         console.log("Select Atleast Two");
//     }
// }
