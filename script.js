
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




