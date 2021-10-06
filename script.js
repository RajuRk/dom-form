const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const pinCode = document.getElementById("pinCode");
const gender = document.getElementById("gender");
const food =  document.getElementById("food");
const state = document.getElementById("state");
const country = document.getElementById("country");
const submitBtn = document.querySelector(".submitBtn");

const checkRadio = () => {
    const radio = document.querySelectorAll("#gender");
    var radioValue;
    for(var i=0; i<radio.length; i++) {
        if(radio[i].checked){
            radioValue = radio[i].value;
            console.log(radioValue);
            return radioValue;
        }
    }
    
}

const checkCheckBox = () => {
    var checkBox = document.querySelectorAll("#food");
    var getCheckValue;
    for(var i=0; i<checkBox.length; i++){
        if(checkBox[i].checked){
            getCheckValue = checkBox[i].value;
            return getCheckValue;
        }
    }
}

submitBtn.addEventListener("click", () => {
    getData();
    reset();

});

const getData = () =>{
    var table = document.getElementById("list").getElementsByTagName("tbody")[0];
    const formData = {};
    formData["firstName"] = firstName.value;
    formData["lastName"] = lastName.value;
    formData["address"] = address.value;
    formData["pinCode"] = pinCode.value;
    formData["gender"] = `${checkRadio()}`;
    formData["food"] = `${checkCheckBox()}`;
    formData["state"] = state.value;
    formData["country"] = country.value;
    console.log(formData)
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
    gender.value = "";
    food.value = "";
    state.value = "";
    country.value = "";
}
