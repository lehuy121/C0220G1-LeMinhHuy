let listCustomerArr = [];
let listEmployeeArr = [];

class Customer {
    constructor() {
        this.name = "";
        this.idNumber = "";
        this.birth = "";
        this.email = "";
        this.address = "";
        this.customerType = "";
        this.discount = 0;
        this.quantityIncludes = 0;
        this.rentDays = 0;
        this.serviceType = "";
        this.roomType = "";
        this.payment = 0;
    }

    getName() {
        return this.name;
    }

    setName() {
        let name = prompt("Input Name");
        return this.name = name;
    }

    getIdNumber() {
        return this.idNumber;
    }

    setIdNumber() {
        let idNumber;
        do {
            idNumber = prompt("Input Id Number");
            if (isNumber(idNumber)) {
                return this.idNumber = idNumber;
            } else {
                alert("Id number invalid");
            }
        } while (!isNumber(idNumber));

    }

    getBirth() {
        return this.birth;
    }

    setBirth() {
        let birth;
        do {
            birth = prompt("Input Birth(Format is DD/MM/YYYY)");
            if (isBirth(birth)) {
                return this.birth = birth;
            } else {
                alert("Birth invalid");
            }
        } while (!isBirth(birth));
    }

    getEmail() {
        return this.email;
    }

    setEmail() {
        let email;
        do {
            email = prompt("Input Email(Format is abc@abc.com)");
            if (isEmail(email)) {
                return this.email = email;
            } else {
                alert("Email invalid");
            }
        } while (!isEmail(email));
    }

    getAddress() {
        return this.address;
    }

    setAddress() {
        let address = prompt("Input Address");
        return this.address = address;
    }

    getCustomerType() {
        return this.customerType;
    }

    setCustomerType() {
        let customerType = prompt("Customer Type");
        return this.customerType = customerType;
    }

    getDiscount() {
        return this.discount;
    }

    setDiscount() {
        let discount;
        do {
            discount = parseInt(prompt("Input Discount"));
            if (isNumber(discount)) {
                return this.discount = discount;
            } else {
                alert("Discount must be a number");
            }
        } while (!isNumber(discount));

    }

    getQuantityIncludes() {
        return this.quantityIncludes;
    }

    setQuantityIncludes() {
        let quantityIncludes;
        do {
            quantityIncludes = prompt("Input Quantity Includes");
            if (isNumber(quantityIncludes)) {
                return this.quantityIncludes = quantityIncludes;
            } else {
                alert("QuantityIncludes must be a number");
            }
        } while (!isNumber(quantityIncludes));
    }

    getRentDays() {
        return this.rentDays;
    }

    setRentDays() {
        let rentDays;
        do {
            rentDays = prompt("Input Rent Days");
            if (isNumber(rentDays)) {
                return this.rentDays = rentDays;
            } else {
                alert("RentDays must be a number");
            }
        } while (!isNumber(rentDays));
    }

    getServiceType() {
        return this.serviceType;
    }

    setServiceType() {
        let serviceType;
        do {
            serviceType = prompt("Input Service Type: (Villa|House|Room)");
            if (isServiceType(serviceType)) {
                return this.serviceType = serviceType;
            } else {
                alert("Invalid")
            }
        } while (!isServiceType(serviceType));

    }

    getRoomType() {
        return this.roomType;
    }

    setRoomType() {
        let roomType = prompt("Input Room Type");
        return this.roomType = roomType;
    }

    getPayment() {
        return this.payment;
    }

    calculatePayment() {
        let payment;
        let percentDiscount;
        if (this.getServiceType() === "Villa") {
            payment = 500 * this.rentDays;
            percentDiscount = 1 - this.discount / 100;
            return this.payment = payment * percentDiscount;
        } else if (this.getServiceType() === "House") {
            payment = 300 * this.rentDays;
            percentDiscount = 1 - this.discount / 100;
            return this.payment = payment * percentDiscount;
        } else if (this.getServiceType() === "Room") {
            payment = 100 * this.rentDays;
            percentDiscount = 1 - this.discount / 100;
            return this.payment = payment * percentDiscount;
        }

    }
}

class Employee {
    constructor() {
        this.name = "";
        this.idNumber = "";
        this.birth = "";
        this.phoneNumber = "";
        this.level = "";
        this.position = "";
        this.workingPart = "";
        this.salary = 0;
    }

    defineLevel = {
        intermediate: "Intermediate",
        colleges: "Colleges",
        university: "University",
        afterUniversity: "AfterUniversity",
    };
    definePosition = {
        receptionist: "Receptionist",
        serve: "Serve",
        expert: "Expert",
        monitoring: "Monitoring",
        manage: "Manage",
        director: "Director",
    };
    defineWorkingParts = {
        sale: "Sale",
        marketing: "Marketing",
        administrative: "Administrative",
        serve: "Serve",
        manage: "Manage",
    };
    defineSalaryByLevel = {
        intermediate: 120,
        colleges: 140,
        university: 160,
        afterUniversity: 200,
    };
    defineSubsidizeByWorkingParts = {
        sale: 300,
        marketing: 200,
        manager: 500
    };

    getName() {
        return this.name;
    }

    setName() {
        let name = prompt("Input Name");
        return this.name = name;
    }

    getBirth() {
        return this.birth;
    }

    setBirth() {
        let birth;
        do {
            birth = prompt("Input Birth(Format is DD/MM/YYYY)");
            if (isBirth(birth)) {
                return this.birth = birth;
            } else {
                alert("Birth invalid");
            }
        } while (!isBirth(birth));
    }

    getIdNumber() {
        return this.idNumber;
    }

    setIdNumber() {
        let idNumber;
        do {
            idNumber = prompt("Input Id Number");
            if (isNumber(idNumber)) {
                return this.idNumber = idNumber;
            } else {
                alert("Id number invalid");
            }
        } while (!isNumber(idNumber));

    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setPhoneNumber() {
        let phoneNumber;
        do {
            phoneNumber = prompt("Input Phone Number");
            if (isPhoneNumber(phoneNumber)) {
                return this.phoneNumber = phoneNumber;
            } else {
                alert("Phone number invalid");
            }
        } while (!isPhoneNumber(phoneNumber));
    }

    getLevel() {
        return this.level;
    }

    setLevel() {
        let level;
        do {
            level = prompt("Input level: (1=Intermediate | 2=Colleges | 3=University | 4=AfterUniversity)");
            if (isLevel(level)) {
                if (level === "1") {
                    return this.level = this.defineLevel.intermediate;
                } else if (level === "2") {
                    return this.level = this.defineLevel.colleges;
                } else if (level === "3") {
                    return this.level = this.defineLevel.university;
                } else if (level === "4") {
                    return this.level = this.defineLevel.afterUniversity;
                }

            } else {
                alert("Invalid")
            }
        } while (!isLevel(level));

    }

    getPosition() {
        return this.position;
    }

    setPosition() {
        let position;
        do {
            position = prompt("Input Position: (1=Receptionist | 2=Serve | 3=Expert | 4=Monitoring | 5=Manage | 6=Director)");
            if (isPosition(position)) {
                if (position === "1") {
                    return this.level = this.definePosition.receptionist;
                } else if (position === "2") {
                    return this.position = this.definePosition.serve;
                } else if (position === "3") {
                    return this.position = this.definePosition.expert;
                } else if (position === "4") {
                    return this.position = this.definePosition.monitoring;
                } else if (position === "5") {
                    return this.position = this.definePosition.manage;
                } else if (position === "6") {
                    return this.position = this.definePosition.director;
                }
            } else {
                alert("Invalid")
            }
        } while (!isPosition(position));

    }

    getWorkingPart() {
        return this.workingPart;
    }

    setWorkingPart() {
        let workingPart;
        do {
            workingPart = prompt("Input WorkingParts: (1=Sale | 2=Marketing | 3=Administrative | 4=Serve | 5=Manage");
            if (isWorkingPart(workingPart)) {
                if (workingPart === "1") {
                    return this.workingPart = this.defineWorkingParts.sale;
                } else if (workingPart === "2") {
                    return this.workingPart = this.defineWorkingParts.marketing;
                } else if (workingPart === "3") {
                    return this.workingPart = this.defineWorkingParts.administrative;
                } else if (workingPart === "4") {
                    return this.workingPart = this.defineWorkingParts.serve;
                } else if (workingPart === "5") {
                    return this.workingPart = this.defineWorkingParts.manage;
                }
            } else {
                alert("Invalid")
            }
        } while (!isWorkingPart(workingPart));

    }

    calculateSalary() {
        if (this.getLevel() === this.defineLevel.intermediate) {
            if (this.getLevel() === this.defineLevel.intermediate && this.getWorkingPart() === this.defineWorkingParts.sale) {
                return this.salary = this.defineSalaryByLevel.intermediate + this.defineSubsidizeByWorkingParts.sale;
            } else if (this.getLevel() === this.defineLevel.intermediate && this.getWorkingPart() === this.defineWorkingParts.marketing) {
                return this.salary = this.defineSalaryByLevel.intermediate + this.defineSubsidizeByWorkingParts.marketing;
            } else if (this.getLevel() === this.defineLevel.intermediate && this.getWorkingPart() === this.defineWorkingParts.manage) {
                return this.salary = this.defineSalaryByLevel.intermediate + this.defineSubsidizeByWorkingParts.manager;
            } else {
                return this.salary = this.defineSalaryByLevel.intermediate;
            }
        } else if (this.getLevel() === this.defineLevel.colleges) {
            if (this.getLevel() === this.defineLevel.colleges && this.getWorkingPart() === this.defineWorkingParts.sale) {
                return this.salary = this.defineSalaryByLevel.colleges + this.defineSubsidizeByWorkingParts.sale;
            } else if (this.getLevel() === this.defineLevel.colleges && this.getWorkingPart() === this.defineWorkingParts.marketing) {
                return this.salary = this.defineSalaryByLevel.colleges + this.defineSubsidizeByWorkingParts.marketing;
            } else if (this.getLevel() === this.defineLevel.colleges && this.getWorkingPart() === this.defineWorkingParts.manage) {
                return this.salary = this.defineSalaryByLevel.colleges + this.defineSubsidizeByWorkingParts.manager;
            } else {
                return this.salary = this.defineSalaryByLevel.colleges;
            }
        } else if (this.getLevel() === this.defineLevel.university) {
            if (this.getLevel() === this.defineLevel.university && this.getWorkingPart() === this.defineWorkingParts.sale) {
                return this.salary = this.defineSalaryByLevel.university + this.defineSubsidizeByWorkingParts.sale;
            } else if (this.getLevel() === this.defineLevel.university && this.getWorkingPart() === this.defineWorkingParts.marketing) {
                return this.salary = this.defineSalaryByLevel.university + this.defineSubsidizeByWorkingParts.marketing;
            } else if (this.getLevel() === this.defineLevel.university && this.getWorkingPart() === this.defineWorkingParts.manage) {
                return this.salary = this.defineSalaryByLevel.university + this.defineSubsidizeByWorkingParts.manager;
            } else {
                return this.salary = this.defineSalaryByLevel.university;
            }
        } else if (this.getLevel() === this.defineLevel.afterUniversity) {
            if (this.getLevel() === this.defineLevel.afterUniversity && this.getWorkingPart() === this.defineWorkingParts.sale) {
                return this.salary = this.defineSalaryByLevel.afterUniversity + this.defineSubsidizeByWorkingParts.sale;
            } else if (this.getLevel() === this.defineLevel.afterUniversity && this.getWorkingPart() === this.defineWorkingParts.marketing) {
                return this.salary = this.defineSalaryByLevel.afterUniversity + this.defineSubsidizeByWorkingParts.marketing;
            } else if (this.getLevel() === this.defineLevel.afterUniversity && this.getWorkingPart() === this.defineWorkingParts.manage) {
                return this.salary = this.defineSalaryByLevel.afterUniversity + this.defineSubsidizeByWorkingParts.manager;
            } else {
                return this.salary = this.defineSalaryByLevel.afterUniversity;
            }
        }
    }
}

function mainMenu() {
    let flag = false;
    let menuAddCustomer = "Enter 1: Add Name Customer";
    let menuDisplayCustomer = "Enter 2: Display Customer";
    let menuEditCustomer = "Enter 3: Edit Customer";
    let menuDeleteCustomer = "Enter 4: Delete Customer";
    let menuAddEmployee = "Enter 5: Add Employee";
    let menuDisplayEmployee = "Enter 6: Display Employee";
    let menuEditEmployee = "Enter 7: Edit Employee";
    let menuDeleteEmployee = "Enter 8: Delete Employee";
    let quitProgram = "Enter q: Quit Menu";
    do {
        let inputMenu = prompt(menuAddCustomer + "\n" + menuDisplayCustomer + "\n" + menuEditCustomer + "\n" + menuDeleteCustomer + "\n" + menuAddEmployee + "\n" + menuDisplayEmployee + "\n" + menuEditEmployee + "\n" + menuDeleteEmployee + "\n" + quitProgram);
        if (inputMenu === "1") {
            addNewCustomer();
            flag = false;
        } else if (inputMenu === "2") {
            displayCustomer();
            flag = true;
        } else if (inputMenu === "3") {
            editCustomer();
            flag = false;
        } else if (inputMenu === "4") {
            deleteCustomer();
            flag = false;
        } else if (inputMenu === "5") {
            addNewEmployee();
            flag = false;
        } else if (inputMenu === "6") {
            displayEmployee();
            flag = true;
        } else if (inputMenu === "7") {
            editEmployee();
            flag = false;
        } else if (inputMenu === "8") {
            deleteEmployee();
            flag = false;
        } else if (inputMenu === "q") {
            return flag = true;
        }
    } while (!flag);
}

function addNewCustomer() {
    let newCustomer = new Customer();
    newCustomer.setName();
    newCustomer.setIdNumber();
    newCustomer.setBirth();
    newCustomer.setEmail();
    newCustomer.setAddress();
    newCustomer.setCustomerType();
    newCustomer.setDiscount();
    newCustomer.setQuantityIncludes();
    newCustomer.setRentDays();
    newCustomer.setServiceType();
    newCustomer.setRoomType();
    newCustomer.calculatePayment();
    listCustomerArr.push(newCustomer);
}

function editCustomer() {
    let element = document.getElementById("customer");
    let customer = getValueOptionSelected(element);
    if (customer === undefined) {
        alert("Can't Edit without data. Create and get data please");
    } else {
        let editCustomer = new Customer();
        editCustomer.setName();
        editCustomer.setIdNumber();
        editCustomer.setBirth();
        editCustomer.setEmail();
        editCustomer.setAddress();
        editCustomer.setCustomerType();
        editCustomer.setDiscount();
        editCustomer.setQuantityIncludes();
        editCustomer.setRentDays();
        editCustomer.setServiceType();
        editCustomer.setRoomType();
        editCustomer.calculatePayment();
        listCustomerArr.splice(customer, 1, editCustomer)
    }

}

function deleteCustomer() {
    let element = document.getElementById("customer");
    let customer = getValueOptionSelected(element);
    if (customer === undefined) {
        alert("Can't Delete without data. Create and get data please");
    } else {
        listCustomerArr.splice(customer, 1)
    }

}

function getAllCustomers() {
    cleanSelectOption("customer");
    displayCustomerBlock();
    for (let i = 0; i < listCustomerArr.length; i++) {
        addItemToSelect("customer", listCustomerArr[i].name, i);
    }
}

function displayByCustomerName(index) {
    getElementById("customerName").value = listCustomerArr[index].name;
    getElementById("idNumber").value = listCustomerArr[index].idNumber;
    getElementById("birth").value = listCustomerArr[index].birth;
    getElementById("email").value = listCustomerArr[index].email;
    getElementById("address").value = listCustomerArr[index].address;
    getElementById("customerType").value = listCustomerArr[index].customerType;
    getElementById("discount").value = listCustomerArr[index].discount;
    getElementById("quantityIncludes").value = listCustomerArr[index].quantityIncludes;
    getElementById("rentDays").value = listCustomerArr[index].rentDays;
    getElementById("serviceType").value = listCustomerArr[index].serviceType;
    getElementById("roomType").value = listCustomerArr[index].roomType;
    getElementById("payment").value = listCustomerArr[index].payment;
}

function displayCustomer() {
    displayCustomerBlock();
    for (let i = 0; i < listCustomerArr.length; i++) {
        getElementById("customerName").value = listCustomerArr[i].name;
        getElementById("idNumber").value = listCustomerArr[i].idNumber;
        getElementById("birth").value = listCustomerArr[i].birth;
        getElementById("email").value = listCustomerArr[i].email;
        getElementById("address").value = listCustomerArr[i].address;
        getElementById("customerType").value = listCustomerArr[i].customerType;
        getElementById("discount").value = listCustomerArr[i].discount;
        getElementById("quantityIncludes").value = listCustomerArr[i].quantityIncludes;
        getElementById("rentDays").value = listCustomerArr[i].rentDays;
        getElementById("serviceType").value = listCustomerArr[i].serviceType;
        getElementById("roomType").value = listCustomerArr[i].roomType;
        getElementById("payment").value = listCustomerArr[i].payment;
    }
}

function addNewEmployee() {
    let newEmployee = new Employee();
    newEmployee.setName();
    newEmployee.setIdNumber();
    newEmployee.setBirth();
    newEmployee.setPhoneNumber();
    newEmployee.setLevel();
    newEmployee.setPosition();
    newEmployee.setWorkingPart();
    newEmployee.calculateSalary();
    listEmployeeArr.push(newEmployee);
}

function displayEmployee() {
    displayEmployeeBlock();
    for (let i = 0; i < listEmployeeArr.length; i++) {
        getElementById("employeeName").value = listEmployeeArr[i].name;
        getElementById("employeeIdNumber").value = listEmployeeArr[i].idNumber;
        getElementById("employeeBirth").value = listEmployeeArr[i].birth;
        getElementById("employeePhoneNumber").value = listEmployeeArr[i].phoneNumber;
        getElementById("employeeLevel").value = listEmployeeArr[i].level;
        getElementById("employeePosition").value = listEmployeeArr[i].position;
        getElementById("employeeWorkingPart").value = listEmployeeArr[i].workingPart;
        getElementById("salary").value = listEmployeeArr[i].salary;
    }
}

function getAllEmployee() {
    cleanSelectOption("employee");
    displayEmployeeBlock();
    for (let i = 0; i < listEmployeeArr.length; i++) {
        addItemToSelect("employee", listEmployeeArr[i].name, i);
    }
}

function displayByEmployeeName(index) {
    getElementById("employeeName").value = listEmployeeArr[index].name;
    getElementById("employeeIdNumber").value = listEmployeeArr[index].idNumber;
    getElementById("employeeBirth").value = listEmployeeArr[index].birth;
    getElementById("employeePhoneNumber").value = listEmployeeArr[index].phoneNumber;
    getElementById("employeeLevel").value = listEmployeeArr[index].level;
    getElementById("employeePosition").value = listEmployeeArr[index].position;
    getElementById("employeeWorkingPart").value = listEmployeeArr[index].workingPart;
    getElementById("salary").value = listEmployeeArr[index].salary;
}

function editEmployee() {
    let element = getElementById("employee");
    let employee = getValueOptionSelected(element);
    if (employee === undefined) {
        alert("Can't Edit without data. Create and get data please");
    } else {
        let editEmployee = new Employee();
        editEmployee.setName();
        editEmployee.setIdNumber();
        editEmployee.setBirth();
        editEmployee.setPhoneNumber();
        editEmployee.setLevel();
        editEmployee.setPosition();
        editEmployee.setWorkingPart();
        editEmployee.calculateSalary();
        listEmployeeArr.splice(employee, 1, editEmployee)
    }
}

function deleteEmployee() {
    let element = getElementById("employee");
    let employee = getValueOptionSelected(element);
    if (employee === undefined) {
        alert("Can't Delete without data. Create and get data please");
    } else {
        listEmployeeArr.splice(employee, 1)
    }
}

function getValueOptionSelected(element) {
    if (element.selectedIndex.value !== undefined) {
        return element.options[element.selectedIndex].value;
    }

}

function addItemToSelect(elementID, text, value) {
    let x = document.getElementById(elementID);
    let option = document.createElement("option");
    option.text = text;
    option.value = value;
    x.add(option);
}

function cleanSelectOption(elementId) {
    let select = document.getElementById(elementId);
    let length = select.options.length;
    for (let i = length - 1; i >= 0; i--) {
        select.options[i] = null;
    }
}

function getElementById(elementId) {
    return document.getElementById(elementId);
}

function isEmail(email) {
    let regExp = /^([a-z]{3})@([a-z]{3})\.(com)$/;
    return regExp.test(email);
}

function isNumber(number) {
    let regExp = /^([\d]+)$/;
    return regExp.test(number);
}

function isBirth(birth) {
    let regExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d)$/;
    return regExp.test(birth);
}

function isServiceType(serviceType) {
    let regExp = /^(Villa|House|Room)$/;
    return regExp.test(serviceType);
}

function isLevel(level) {
    let regExp = /^([1234])$/;
    return regExp.test(level);
}

function isPosition(position) {
    let regExp = /^([123456])$/;
    return regExp.test(position);
}

function isWorkingPart(workingPart) {
    let regExp = /^([12345])$/;
    return regExp.test(workingPart);
}

function isPhoneNumber(phone) {
    let regExp = /^([\d]{10})$/;
    return regExp.test(phone);
}

function displayCustomerBlock() {
    let customer = document.getElementById("customerBlock");
    let employee = document.getElementById("employeeBlock");
    employee.style.display = "none";
    customer.style.display = "block";
}

function displayEmployeeBlock() {
    let customer = document.getElementById("customerBlock");
    let employee = document.getElementById("employeeBlock");
    customer.style.display = "none";
    employee.style.display = "block";

}