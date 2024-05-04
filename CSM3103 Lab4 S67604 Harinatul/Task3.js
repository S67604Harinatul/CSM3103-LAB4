// Task 1: Create Product Object
function createProduct() {
  const productName = document.getElementById("productName").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  // Create a product object
  const product = {
    productName: productName,
    quantity: quantity,
    price: price
  };

  // Access and display product properties
  displayProductDetails(product);
}

function displayProductDetails(product) {
  const productDetails = document.getElementById("productDetails");
  productDetails.innerHTML = `
    <p>Product Name: ${product.productName}</p>
    <p>Quantity: ${product.quantity}</p>
    <p>Price: ${product.price}</p>
  `;
}


// Task 2: Create Book Object
function createBook() {
    var bookName = document.getElementById("bookName").value;
    var authorFName = document.getElementById("authorFName").value;
    var authorLName = document.getElementById("authorLName").value;
    const price = "RM15.00";
  
    function Author(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    Author.prototype.getFullName = function() {
      return this.firstName + " " + this.lastName;
    };
  
    var author = new Author(authorFName, authorLName);
  
    var bookDetails = document.getElementById("bookDetails");
    bookDetails.innerHTML = `
      <p>Book Name: ${bookName}</p>
      <p>Author Name: ${author.getFullName()}</p>
      <p>Price: ${price}</p>
    `;
}

// Task 3: Create Parent object employee
class Employee {
  constructor(name, id, salary) {
    this.employeeName = name;
    this.employeeId = id;
    this.salary = salary;
  }

  displayDetails() {
    const employeeDetails = document.getElementById("employeeDetails");
    employeeDetails.innerHTML = `
      <p>Employee Name: Shahrulnizam B Jamil</p>
      <p>Employee ID: ${this.employeeId}</p>
      <p>Salary: ${this.salary}</p>
    `;
  }
}

class Manager extends Employee {
  constructor(name, branch) {
    super(name, "SCRT001", "RM5000.00"); 
    this.managerName = name;
    this.branch = branch;
  }

  displayManagerDetails() {
    const managerDetails = document.getElementById("managerDetails");
    managerDetails.innerHTML = `
      <p>Manager Name: ${this.managerName}</p>
      <p>Branch: ${this.branch}</p>
    `;
  }
}

function createPropertyManager() {
  const managerName = document.getElementById("managerName").value;
  const branch = document.getElementById("branch").value;

  const manager = new Manager(managerName, branch);

  manager.displayDetails();
  manager.displayManagerDetails();
}
