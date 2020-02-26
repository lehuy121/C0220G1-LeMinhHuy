function insertToDiscount() {
    let getCustomerType = document.getElementById("customerType");
    // lay gia tri dang duoc selected
    let getText = getCustomerType.options[getCustomerType.selectedIndex].text;
    let customerTypeValue = getCustomerType.value;
    console.log(customerTypeValue);
    document.getElementById("discount").value = customerTypeValue;
}

function paymentCalculator() {
    // get value nhap vao tu textbox thong qua id
    let getCustomerName = document.getElementById("customerName").value;
    // hien thi value vua get duoc thong qua id su dung innerText vi Element chua du lieu do la the <p>
    document.getElementById("showName").innerText = "Customer Name: " + getCustomerName;

    let cmnd = document.getElementById("cmndID").value;
    document.getElementById("showCMND").innerText = "CMND: " + cmnd;

    let birth = document.getElementById("dayOfBirth").value;
    document.getElementById("showBirth").innerText = "Day Of Birth: " + birth;

    let email = document.getElementById("email").value;
    document.getElementById("showEmail").innerText = "Email" + email;

    let address = document.getElementById("addr").value;
    document.getElementById("showAddr").innerText = "Address: " + address;

    let customerType = document.getElementById("customerType").value;
    document.getElementById("showCustomerType").innerText = "Customer Type: " + customerType;

    let discount = document.getElementById("discount").value;
    document.getElementById("showDiscount").innerText = "Discount: " + discount + "%";

    let quantity = document.getElementById("quantity").value;
    document.getElementById("showQuantity").innerText = "Quantity Includes: " + quantity;

    let rentDays = document.getElementById("rentDays").value;
    document.getElementById("showRentDays").innerText = "Rent Days: " + rentDays;

    let serviceType = document.getElementById("serviceType");
    let displayValue = serviceType.options[serviceType.selectedIndex].text;
    document.getElementById("showServiceType").innerText = "Service Type: " + displayValue;
    let getServiceType = serviceType.value;
    console.log(getServiceType);

    let roomType = document.getElementById("roomType").value;
    document.getElementById("showRoomType").innerText = "Room Type: " + roomType;

    // Tinh Toan Gia Thue Phong
    //( Số tiền phải trả  = giá loại dịch vụ X số ngày X ( 1 – giảm giá/100 ) )
    //let totalPay = (getServiceType * rentDays * (1 - discount/100));
    let payment = getServiceType * rentDays;
    let totalPayment = payment * (1 - discount / 100);
    document.getElementById("totalPay").innerHTML = "Total Payment: " + totalPayment.toString();


}