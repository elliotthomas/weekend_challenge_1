var verbose = false

var addEmployee = function() {
    if (verbose) {
        console.log("In addEmployee");
    }
    // User input
    var firstName = $("#firstNameIn").val();
    var lastName = $("#lastNameIn").val();
    var idNumber = $("#idNumberIn").val();
    var jobTitle = $("#jobTitleIn").val();
    var annualSalary = $("#annualSalaryIn").val();
    // New Employee
    if (verbose) {
        console.log(firstName);
        console.log(lastName);
        console.log(idNumber);
        console.log(jobTitle);
        console.log(annualSalary);
    }
    showEmployee([firstName, lastName, idNumber, jobTitle, annualSalary]);
    var monthlyCost = getMonthlyCost();
    showMonthlyCost(monthlyCost);
    clearInput();
};

var showEmployee = function(employeeArray) {
    // Table location
    var table = $("#employeeTable");
    // New Employee to HTML
    var htmlTable = '<tr data-name="' + employeeArray[0] + ' ' + employeeArray[1] + '" data-salary="' + employeeArray[4] + '">';
    for (var i = 0; i < employeeArray.length; i++) {
        htmlTable += "<td>" + employeeArray[i] + "</td>";
    }
    htmlTable += "</tr>";
    // Add the employee to the table
    table.append(htmlTable);
};

var getMonthlyCost = function() {
    if (verbose) {
        console.log("In getMonthlyCost");
    }
    // Table rows
    var rows = $("tr");
    var totalSalary = 0;
    // sum salaries
    $("tr").each(function() {
        var salary = $(this).data("salary");
        if (salary !== undefined) {
            totalSalary += salary;
        }
    });
    return totalSalary / 12;
};

var showMonthlyCost = function(monthlyCost) {
    var roundedMonthlyCost = Math.round(monthlyCost * 100) / 100;
    $("#totalCost").html("$" + roundedMonthlyCost);
};

var clearInput = function() {
    $("input").val("");
};
