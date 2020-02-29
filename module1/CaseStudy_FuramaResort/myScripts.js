function confirmAction() {
    let confirmMessage = confirm("Are you sure ?");
    if (confirmMessage) {
        displayInformation();
    }
}
function displayInformation() {
    let initData = {
        customerName: getValueById("customerName"),
        idNumber: getValueById("idNumber"),
        email: getValueById("email"),
        dayOfBirth: getValueById("dayOfBirth"),
        address: getValueById("addr"),
        customerType: getTextOptionSelected(getElementById("customerType")),
        discount: getValueById("discount"),
        quantity: getValueById("quantity"),
        rentDays: getValueById("rentDays"),
        serviceType: getTextOptionSelected(getElementById("serviceType")),
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
    pushTextValueById("showName", label.customerName + initData.customerName);
    pushTextValueById("showIDNumber", label.idNumber + initData.idNumber);
    pushTextValueById("showBirth", label.labelBirth + initData.dayOfBirth);
    pushTextValueById("showEmail", label.email + initData.email);
    pushTextValueById("showAddr", label.address + initData.address);
    pushTextValueById("showCustomerType", label.customerType + initData.customerType);
    pushTextValueById("showDiscount", label.discount + initData.discount + label.percent);
    pushTextValueById("showQuantity", label.quantity + initData.quantity);
    pushTextValueById("showRentDays", label.rentDays + initData.rentDays);
    pushTextValueById("showServiceType", label.serviceType + initData.serviceType);
    pushTextValueById("showRoomType", label.roomType + initData.roomType);

    let result = paymentCalculator(initData.valueServiceType, initData.rentDays, initData.discount);
    pushTextValueById("totalPay", label.totalPayment + result + label.usd);
}

function paymentCalculator(serviceType, rentDays, discount) {
    let payment = serviceType * rentDays;
    let totalPayment = 0;
    return totalPayment = payment * (1 - discount / 100);
}

function insertToDiscount() {
    let getCustomerType = getValueById("customerType");
    // getValueById("discount") = getCustomerType;
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

function pushTextValueById(id, elementValue) {
    return document.getElementById(id).innerText = elementValue;
}

function getTextOptionSelected(element) {
    return element.options[element.selectedIndex].text;
}
