let fname = document.createElement("p");
let lname = document.createElement("p");

document.getElementById("sub").addEventListener("click", (e) => {
    e.preventDefault(); 
    
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;

    fname.textContent = firstName;
    lname.textContent = lastName;

    document.getElementsByClassName('list').append(fname);
    document.getElementsByClassName('list').append(lname);
});