function checkLogin(username, password) {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            if (username === "admin" && password === "1234") {
                resolve("Login successful");
            } else {
                setTimeout(() => {
                    reject("Invalid username or password");
                }, 2000);
            }

        }, 2000);

    });
}


// Successful login
checkLogin("admin", "1234")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });


// Failed login
checkLogin("admin", "wrong")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });