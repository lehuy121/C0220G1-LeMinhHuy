function confirmAction() {
    let pressOk = confirm(" Click OK to Confirm, Cancel to Cancel");
    if (pressOk) {
        displayUser();
    }
}

function displayUser() {
    let getUser = {
        customerName: getValueById("customerName"),
        idNumber: getValueById("idNumber"),
        email: getValueById("email"),
        dayOfBirth: getValueById("dayOfBirth"),
        address: getValueById("addr"),
        customerType: getValueOptionSelected(getElementById("customerType")),
        discount: getValueById("discount"),
        quantity: getValueById("quantity"),
        rentDays: getValueById("rentDays"),
        serviceType: getValueOptionSelected(getElementById("serviceType")),
        valueServiceType: getValueById("serviceType"),
        roomType: getValueById("roomType")
    };
    let label = {
        customerName: "CustomerName: ",
        totalPayment: "TotalPayment: ",
        idNumber: "ID Number: ",
        labelBirth: "Day Of Birth: ",
        email: "Email: ",
        address: "Address: ",
        customerType: "Customer Type: ",
        discount: "Discount: ",
        quantity: "Quantity Includes: ",
        rentDays: "Rent Days: ",
        serviceType: "Service Type: ",
        roomType: "Room Type: ",
        percent: " %",
        usd: " $"
    };
    displayTextById("showName", label.customerName + getUser.customerName);
    displayTextById("showIDNumber", label.idNumber + getUser.idNumber);
    displayTextById("showBirth", label.labelBirth + getUser.dayOfBirth);
    displayTextById("showEmail", label.email + getUser.email);
    displayTextById("showAddr", label.address + getUser.address);
    displayTextById("showCustomerType", label.customerType + getUser.customerType);
    displayTextById("showDiscount", label.discount + getUser.discount + label.percent);
    displayTextById("showQuantity", label.quantity + getUser.quantity);
    displayTextById("showRentDays", label.rentDays + getUser.rentDays);
    displayTextById("showServiceType", label.serviceType + getUser.serviceType);
    displayTextById("showRoomType", label.roomType + getUser.roomType);

    let result = paymentCalculator(getUser.valueServiceType, getUser.rentDays, getUser.discount);
    displayTextById("totalPay", label.totalPayment + result + label.usd);
}

function paymentCalculator(serviceType, rentDays, discount) {
    let payment = serviceType * rentDays;
    let totalPayment = 0;
    let percentDiscount = 1 - discount / 100;
    return totalPayment = payment * percentDiscount;
}

function insertDiscountAmount() {
    let getCustomerType = getValueById("customerType");
    pushValueById("discount", getCustomerType);
}

function getElementById(id) {
    return document.getElementById(id);
}

function getValueById(id) {
    return document.getElementById(id).value;
}

function pushValueById(id, elementValue) {
    return document.getElementById(id).value = elementValue;
}

function displayTextById(id, elementValue) {
    return document.getElementById(id).innerText = elementValue;
}

function getValueOptionSelected(element) {
    return element.options[element.selectedIndex].text;
}
