function confirmAction(){
    let confirmMessage = confirm("Are you sure ?");
    if(confirmMessage){
        displayInfor();
    }
}
function displayInfor() {
    let labelCustomerName = "Customer Name: ";
    let labelTotalPayment = "TotalPayment: ";
    let labelIdNumber = "ID Number: ";
    let labelBirth = "Day Of Birth: ";
    let labelEmail = "Email: ";
    let labelAddr = "Address: ";
    let labelCustomerType = "Customer Type: ";
    let labelDiscount = "Discount: ";
    let labelQuantity = "Quantity Includes: ";
    let labelRentDays = "Rent Days: ";
    let labelServiceType = "Service Type: ";
    let labelPercent = "%";

    let customerName = getElementByID("customerName").value;
    pushValueToHtmlById("showName").innerText = labelCustomerName + customerName;

    let idNumber = getElementByID("idNumber").value;
    pushValueToHtmlById("showIDNumber").innerText = labelIdNumber + idNumber;

    let birth = getElementByID("dayOfBirth").value;
    pushValueToHtmlById("showBirth").innerText = labelBirth + birth;

    let email = getElementByID("email").value;
    pushValueToHtmlById("showEmail").innerText = labelEmail + email;

    let address = getElementByID("addr").value;
    pushValueToHtmlById("showAddr").innerText = labelAddr + address;

    let customerType = getElementByID("customerType");
    let txtCustomerType = getTextOptionSelected(customerType);
    pushValueToHtmlById("showCustomerType").innerText = labelCustomerType + txtCustomerType;

    let discount = getElementByID("discount").value;
    pushValueToHtmlById("showDiscount").innerText = labelDiscount + discount + labelPercent;

    let quantity = getElementByID("quantity").value;
    pushValueToHtmlById("showQuantity").innerText = labelQuantity + quantity;

    let rentDays = getElementByID("rentDays").value;
    pushValueToHtmlById("showRentDays").innerText = labelRentDays + rentDays;

    let serviceType = getElementByID("serviceType");
    let displayText = getTextOptionSelected(serviceType);
    pushValueToHtmlById("showServiceType").innerText = labelServiceType + displayText;
    let getServiceType = serviceType.value;

    let roomType = getElementByID("roomType").value;
    pushValueToHtmlById("showRoomType").innerText = "Room Type: " + roomType;

    let result = paymentCalculator(getServiceType,rentDays,discount);
    pushValueToHtmlById("totalPay").innerText = labelTotalPayment + result.toString();
}
function paymentCalculator(serviceType, rentDays, discount){
    let payment = serviceType * rentDays;
    let totalPayment = 0;
    return totalPayment = payment *(1 - discount/100);
}
function insertToDiscount() {
    let getCustomerType = getElementByID("customerType");
    pushValueToHtmlById("discount").value = getCustomerType.value;
}
function getElementByID(id){
    return document.getElementById(id);
}
function pushValueToHtmlById(id){
    return document.getElementById(id);
}
function getTextOptionSelected(element){
   return element.options[element.selectedIndex].text;
}
