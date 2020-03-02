let initData = {
    customerName: "Le Minh Huy",
    idNumber: 123456789,
    birthDay: "02/03/2020",
    email: "lehuy121@mail.com",
    address: "Da Nang",
    customerType: "Diamond",
    discount: 50,
    quantityIncludes: 2,
    rendDays: 2,
    serviceType: "Villa",
    roomType: "Vip"
};
let downLine = "\n";
let showCustomerName = "Customer Name: " + initData.customerName + downLine;
let showIdNumber = "ID Number: " + initData.idNumber + downLine;
let showBirth = "Birth: " + initData.birthDay + downLine;
let showEmail = "Email: " + initData.email + downLine;
let showAddress = "Address: " + initData.address + downLine;
let showCustomerType = "Customer Type: " + initData.customerType + downLine;
let showDiscount = "Discount: " + initData.discount + downLine;
let showQuantity = "Quantity Includes: " + initData.quantityIncludes + downLine;
let showRendDays = "Rend Days: " + initData.rendDays + downLine;
let showServiceType = "Service Type: " + initData.serviceType + downLine;
let showRoomType = "Room Type: " + initData.roomType + downLine;

let menu = prompt("Enter 1 : Show Information Customer" + downLine + "Enter 2 : Edit Information Customer");
let editName = "Enter 1: Edit Name" + downLine;
let editBirth = "Enter 2: Birth" + downLine;
let editAdds = "Enter 3: Address" + downLine;
if (menu === "1") {
    alert(showInformation());
} else if (menu === "2") {
    let pickEdit = prompt(editName + editBirth + editAdds);
    if (pickEdit === "1") {
        let newName = prompt("Enter New Name: ");
        alert(updateInformation());
    }else if(pickEdit ==="2"){
       let newBirth = prompt("Enter New Birth: ");
    }else if(pickEdit ==="3"){
        let newAddress = prompt("Enter New Address: ");
    }else {
        alert("Failed");
    }
}
function showInformation(){
    return showCustomerName + showIdNumber + showBirth + showEmail + showAddress + showCustomerType + showDiscount + showQuantity + showRendDays + showServiceType + showRoomType;
}
function calculatorPayment(){

}
function updateInformation(){
    return showInformation();
}
