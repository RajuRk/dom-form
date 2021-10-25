const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const pinCode = document.getElementById("pinCode");
const gender = document.querySelectorAll("#gender");
const food =  document.querySelectorAll("#food");
const state = document.getElementById("state");
const country = document.getElementById("country");
const errorMsg = document.querySelector("#error");

const submitBtn = () => {
    validation();
    getData();
    reset();
};

const checkValue = (data) => {
    var getValue = [];
    for(var i=0; i<data.length; i++) {
        if(data[i].checked){
            getValue.push(data[i].value);
        }
    }
    return getValue;
}

const validation = () => {
    if(firstName.value == ""){
        errorMsg.innerHTML = "Error";
    }
}

const getData = () =>{
    var table = document.getElementById("list").getElementsByTagName("tbody")[0];
    const formData = {};
    formData["firstName"] = firstName.value;
    formData["lastName"] = lastName.value;
    formData["address"] = address.value;
    formData["pinCode"] = pinCode.value;
    formData["gender"] = `${checkValue(gender)}`;
    formData["food"] = `${validateCheckBox(food)}`;
    formData["state"] = state.value;
    formData["country"] = country.value;
     
    table.innerHTML += `<tr>
                            <td>${formData.firstName}</td>
                            <td>${formData.lastName}</td>
                            <td>${formData.address}</td>
                            <td>${formData.pinCode}</td>
                            <td>${formData.gender}</td>
                            <td>${formData.food}</td>
                            <td>${formData.state}</td>
                            <td>${formData.country}</td>
                        </tr>`;
};

const reset = () =>{
    firstName.value = "";
    lastName.value = "";
    address.value = "";
    pinCode.value = "";
    state.value = "";
    country.value = "";
    gender.value = "";
    food.value = "";
    
}

let checked = [];
let foods = ["pizza", "pasta", "burger", "soup", "salad"];

function validateCheckBox(name) {
  if (!checked.includes(name)) {
    checked.push(name);
    if (checked.length == 2) {
      foods.forEach((food) => {
        if (!checked.includes(food)) {
          document.getElementById(food).disabled = true;
        }
      });
    }
  } else {
    checked = checked.filter((food) => food != name);
    if (checked.length < 2) {
      foods.forEach((food) => {
        document.getElementById(food).disabled = false;
      });
    }
  }
}
