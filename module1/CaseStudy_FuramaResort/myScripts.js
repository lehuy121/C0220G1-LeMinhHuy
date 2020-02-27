function insertToDiscount() {

    let getCustomerType = document.getElementById("customerType");
    document.getElementById("discount").value = getCustomerType.value;
}

function paymentCalculator() {
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

    // get value nhap vao tu textbox thong qua id
    let customerName = document.getElementById("customerName").value;
    // hien thi value vua get duoc thong qua id su dung innerText vi Element chua du lieu do la the <p>
    document.getElementById("showName").innerText = labelCustomerName + customerName;

    let idNumber = document.getElementById("idNumber").value;
    document.getElementById("showIDNumber").innerText = labelIdNumber + idNumber;

    let birth = document.getElementById("dayOfBirth").value;
    document.getElementById("showBirth").innerText = labelBirth + birth;

    let email = document.getElementById("email").value;
    document.getElementById("showEmail").innerText = labelEmail + email;

    let address = document.getElementById("addr").value;
    document.getElementById("showAddr").innerText = labelAddr + address;

    let customerType = document.getElementById("customerType");
    let txtCustomerType = customerType.options[customerType.selectedIndex].text;
    document.getElementById("showCustomerType").innerText = labelCustomerType + txtCustomerType;

    let discount = document.getElementById("discount").value;
    document.getElementById("showDiscount").innerText = labelDiscount + discount + labelPercent;

    let quantity = document.getElementById("quantity").value;
    document.getElementById("showQuantity").innerText = labelQuantity + quantity;

    let rentDays = document.getElementById("rentDays").value;
    document.getElementById("showRentDays").innerText = labelRentDays + rentDays;

    let serviceType = document.getElementById("serviceType");
    let displayText = serviceType.options[serviceType.selectedIndex].text;
    document.getElementById("showServiceType").innerText = labelServiceType + displayText;
    let getServiceType = serviceType.value;
    // console.log(getServiceType);

    let roomType = document.getElementById("roomType").value;
    document.getElementById("showRoomType").innerText = "Room Type: " + roomType;

    // Tinh Toan Gia Thue Phong
    //( Số tiền phải trả  = giá loại dịch vụ X số ngày X ( 1 – giảm giá/100 ) )
    //let totalPay = (getServiceType * rentDays * (1 - discount/100));
    let payment = getServiceType * rentDays;
    let totalPayment = payment * (1 - discount / 100);
    document.getElementById("totalPay").innerText = labelTotalPayment + totalPayment.toString();


}