let employees = [];
let idCounter = 1;

document.getElementById('addUser').addEventListener('click', addEmployee);

function addEmployee() {
    let name = document.getElementById('name').value.trim();
    let profession = document.getElementById('profession').value.trim();
    let age = document.getElementById('age').value.trim();
    let errorMessage = document.getElementById('errorMessage');
    let employeeContainer = document.getElementById('employeeContainer');

    if (!name || !profession || !age) {
        errorMessage.textContent = "Error: Please Make sure All the fields are filled before adding an employee!";
        return;
    }

    errorMessage.textContent = '';
    let newEmployee = {
        id: idCounter++,
        name: name,
        profession: profession,
        age: age
    };

    employees.push(newEmployee);
    renderEmployees();
}

function renderEmployees() {
    let employeeContainer = document.getElementById('employeeContainer');
    employeeContainer.innerHTML = '';

    if (employees.length === 0) {
        employeeContainer.innerHTML = '<p>You have 0 employees.</p>';
    } else {
        employees.forEach(employee => {
            let li = document.createElement('li');
            li.innerHTML = `
                ${employee.id}. ${employee.name} - ${employee.profession} (Age: ${employee.age})
                <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
            `;
            employeeContainer.appendChild(li);
        });
    }
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    renderEmployees();
}