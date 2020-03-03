let customer = {
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
let showCustomerName = "Customer Name: " + customer.customerName + downLine;
let showIdNumber = "ID Number: " + customer.idNumber + downLine;
let showBirth = "Birth: " + customer.birthDay + downLine;
let showEmail = "Email: " + customer.email + downLine;
let showAddress = "Address: " + customer.address + downLine;
let showCustomerType = "Customer Type: " + customer.customerType + downLine;
let showDiscount = "Discount: " + customer.discount + downLine;
let showQuantity = "Quantity Includes: " + customer.quantityIncludes + downLine;
let showRendDays = "Rend Days: " + customer.rendDays + downLine;
let showServiceType = "Service Type: " + customer.serviceType + downLine;
let showRoomType = "Room Type: " + customer.roomType + downLine;

let menu = prompt("Enter 1 : Show Information Customer" + downLine + "Enter 2 : Edit Information Customer");
let editName = "Enter 1: Edit Name" + downLine;
let editBirth = "Enter 2: Birth" + downLine;
let editAdds = "Enter 3: Address" + downLine;
let editRentDays = "Enter 4: RentDays" + downLine;
if (menu === "1") {
    alert(showInformation());
} else if (menu === "2") {
    let editMenu = prompt(editName + editBirth + editAdds + editRentDays);
    if (editMenu === "1") {
        let newName = prompt("Enter New Name: ");
        alert(updateCustomerName(newName));
    } else if (editMenu === "2") {
        let newBirth = prompt("Enter New Birth: ");
        alert(updateBirth(newBirth));
    } else if (editMenu === "3") {
        let newAddress = prompt("Enter New Address: ");
        alert(updateAddress(newAddress));
    } else if (editMenu === "4") {
        let newRentDays = prompt("Enter New Address: ");
        alert(updateRentDays(newRentDays));
    } else {
        alert("Failed");
    }
}

function showInformation() {
    return showCustomerName + showIdNumber + showBirth + showEmail + showAddress + showCustomerType + showDiscount + showQuantity + showRendDays + showServiceType + showRoomType;

}

function calculatorPayment() {

}

function updateCustomerName(newName) {
    return "CustomerName: " + newName + downLine + showIdNumber + showBirth + showEmail + showAddress + showCustomerType + showDiscount + showQuantity + showRendDays + showServiceType + showRoomType;
}

function updateBirth(newBirth) {
    return showCustomerName + showIdNumber + "Birth: " + newBirth + downLine + showEmail + showAddress + showCustomerType + showDiscount + showQuantity + showRendDays + showServiceType + showRoomType;
}

function updateAddress(newAddress) {
    return showCustomerName + showIdNumber + showBirth + showEmail + "Address: " + newAddress + downLine + showCustomerType + showDiscount + showQuantity + showRendDays + showServiceType + showRoomType;
}
function updateRentDays(newRentDays){
    return showCustomerName + showIdNumber + showBirth + showEmail + showAddress + showCustomerType + showDiscount + showQuantity + "RentDays: " + newRentDays + downLine + showServiceType + showRoomType;
}
