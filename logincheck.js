function verifyLogin() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var validUser = ["xictul"];
    var validPass = ["123"];

    validUser.forEach((user) => {
        if(username === user) {
            validPass.forEach((pass) => {
                if(password === pass) {
                    alert("Login Successful ✅")
                } else return;  
            })
        } else alert("Username or Password are Invalid ❌")
    })
    
}