let customer = {
    customerName: "Le Minh Huy",
    idNumber: 123456789,
    birthDay: "02/03/2020",
    email: "lehuy121@mail.com",
    address: "Da Nang",
    customerType: "Diamond",
    quantityIncludes: 2,
    rendDays: 7,
    serviceType: "Villa",
    roomType: "Vip",
};
let discountByAddress = {
    daNang: 20,
    hue: 10,
    quangNgai: 5
};
let discountByRentDays = {
    above7: 30,
    range5To7: 20,
    range2To4: 10
};
let discountByCustomerType = {
    diamond: 15,
    platinum: 10,
    gold: 5,
    silver: 2,
    member: 1
};
let priceServiceType = {
    villa: 500,
    house: 300,
    room: 100
};
let discountPayment = discountAmountCalculate(discountByAddress.daNang, discountByRentDays.above7, discountByCustomerType.diamond);
let payment = paymentCalculate(priceServiceType.villa, customer.rendDays, discountPayment);
let downLine = "\n";
let showCustomerName = "Customer Name: " + customer.customerName + downLine;
let showIdNumber = "ID Number: " + customer.idNumber + downLine;
let showBirth = "Birth: " + customer.birthDay + downLine;
let showEmail = "Email: " + customer.email + downLine;
let showAddress = "Address: " + customer.address + downLine;
let showCustomerType = "Customer Type: " + customer.customerType + downLine;
let showDiscount = "Discount: " + discountPayment + downLine;
let showQuantity = "Quantity Includes: " + customer.quantityIncludes + downLine;
let showRendDays = "Rend Days: " + customer.rendDays + downLine;
let showServiceType = "Service Type: " + customer.serviceType + downLine;
let showRoomType = "Room Type: " + customer.roomType + downLine;
let showPayment = "Payment : " + payment + downLine;

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
        let newRentDays = parseInt(prompt("Enter Rent Days: "));
        if (newRentDays < 5) {
            updateRentDays(newRentDays,discountByRentDays.range2To4);
        } else if (newRentDays < 8) {
            updateRentDays(newRentDays, discountByRentDays.range5To7);
        } else {
            updateRentDays(newRentDays, discountByRentDays.above7);
        }
    } else {
        alert("Failed");
    }
}

function showInformation() {
    return showCustomerName + showIdNumber + showBirth + showEmail + showAddress + showCustomerType + showDiscount + showQuantity + showRendDays + showServiceType + showRoomType + showPayment;
}

function updateCustomerName(newName) {
    return "CustomerName: " + newName + downLine + showIdNumber + showBirth + showEmail + showAddress + showCustomerType + showDiscount + showQuantity + showRendDays + showServiceType + showRoomType + showPayment;
}

function updateBirth(newBirth) {
    return showCustomerName + showIdNumber + "Birth: " + newBirth + downLine + showEmail + showAddress + showCustomerType + showDiscount + showQuantity + showRendDays + showServiceType + showRoomType + showPayment;
}

function updateAddress(newAddress) {
    return showCustomerName + showIdNumber + showBirth + showEmail + "Address: " + newAddress + downLine + showCustomerType + showDiscount + showQuantity + showRendDays + showServiceType + showRoomType + showPayment;
}
function paymentCalculate(priceServiceType, rentDays, discountAmount) {
//Số tiền phải trả  = giá loại dịch vụ * số ngày - giảm giá
    return priceServiceType * rentDays - discountAmount;
}
function discountAmountCalculate(discountByAddress, discountByRentDays, discountByCustomerType) {
// Số tiền giảm giá = giảm giá theo địa chỉ + giảm giá theo thời gian lưu trú + giảm giá theo loại Customer
    return discountByAddress + discountByRentDays + discountByCustomerType;
}
function updateRentDays(newRentDays, discountRange) {
    let newDiscountAmountRange = discountAmountCalculate(discountByAddress.daNang, discountRange, discountByCustomerType.diamond);
    let newPaymentByRentDays = paymentCalculate(priceServiceType.villa, newRentDays, newDiscountAmountRange);
    return alert(showCustomerName + showIdNumber + showBirth + showEmail + showAddress + showCustomerType + "New Discount: " + newDiscountAmountRange + downLine + showQuantity + "New Rent Days: " + newRentDays + downLine + showServiceType + showRoomType + "New Payment: " + newPaymentByRentDays);
}

function updateRentDaysRangeAbove7(newRentDays) {

}




