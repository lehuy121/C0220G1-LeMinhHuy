function confirmAction() {
    let pressOk = confirm(" Click OK to Confirm, Cancel to Cancel");
    if (pressOk) {
        displayInformation();
    }
}

function displayInformation() {
    let getInformation = {
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
    displayTextById("showName", label.customerName + getInformation.customerName);
    displayTextById("showIDNumber", label.idNumber + getInformation.idNumber);
    displayTextById("showBirth", label.labelBirth + getInformation.dayOfBirth);
    displayTextById("showEmail", label.email + getInformation.email);
    displayTextById("showAddr", label.address + getInformation.address);
    displayTextById("showCustomerType", label.customerType + getInformation.customerType);
    displayTextById("showDiscount", label.discount + getInformation.discount + label.percent);
    displayTextById("showQuantity", label.quantity + getInformation.quantity);
    displayTextById("showRentDays", label.rentDays + getInformation.rentDays);
    displayTextById("showServiceType", label.serviceType + getInformation.serviceType);
    displayTextById("showRoomType", label.roomType + getInformation.roomType);

    let result = paymentCalculator(getInformation.valueServiceType, getInformation.rentDays, getInformation.discount);
    displayTextById("totalPay", label.totalPayment + result + label.usd);
}

function paymentCalculator(serviceType, rentDays, discount) {
    let payment = serviceType * rentDays;
    let totalPayment = 0;
    return totalPayment = payment * (1 - discount / 100);
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
