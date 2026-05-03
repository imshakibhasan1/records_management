
// Part 1 add values into a local storage 
document.getElementById('add').addEventListener("click",() => {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let phone = document.getElementById("phoneInput").value;
    let key = document.getElementById("key").value; 

    let records = JSON.parse(localStorage.getItem("records")) || {};
    let record = {
            name: name,
            email: email,
            phone: phone
        };
    records[key] = record;
    
    localStorage.setItem("records", JSON.stringify(records));
    console.log(records);
});

// Part 2 Hunt values from local storage using key
document.getElementById("get").addEventListener("click", () => {
    let getData = JSON.parse(localStorage.getItem("records")) || {};
    let key = document.getElementById("keyInput").value;

    if (getData[key]) {
        let record = getData[key];
        document.getElementById("putResult").innerText = 
            `Name: ${record.name} Email: ${record.email} Phone: ${record.phone}`;
    } else {
        document.getElementById("putResult").innerText = "No record found for this key!";
    }
});


