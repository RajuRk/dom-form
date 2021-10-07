const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const pinCode = document.getElementById("pinCode");
const gender = document.getElementById("gender");
const food =  document.getElementById("food");
const state = document.getElementById("state");
const country = document.getElementById("country");
const submitBtn = document.querySelector(".submitBtn");
const errorMsg = document.querySelectorAll("#error");


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formValidation();
    getData();
});

const checkRadio = () => {
    const radio = document.querySelectorAll("#gender");
    var radioValue = [];
    for(var i=0; i<radio.length; i++) {
        if(radio[i].checked){
            radioValue.push(radio[i].value);
        }
    }
    return radioValue;
}

const checkCheckBox = () => {
    var checkBox = document.querySelectorAll("#food");
    var getCheckValue = []
    for(var i=0; i<checkBox.length; i++){
        if(checkBox[i].checked){
            getCheckValue.push(checkBox[i].value);
        }
    }
    return getCheckValue;
}

const formValidation = () => {
   if(firstName.value == "" || firstName.value.length >= 2){
        errorMsg.innerText = "Fields must be filled out";
        return false;
   }
};
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
     
    // Object.keys(formData).forEach((key) =>{
    //     if(formData[key] == ""){
    //         return false;
    //     }else{
            
            
    //     }
    // });

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
    
    reset();
       
};

const reset = () =>{
    firstName.value = "";
    lastName.value = "";
    address.value = "";
    pinCode.value = "";
    gender.value.checked = false;
    food.value.checked = false;
    state.value = "";
    country.value = "";
}
