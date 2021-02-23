let database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "1234"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

let newsfeed = [
    {
        username:"Bobby",
        timeline: "So Tired from all that learning!"
    },
    {
        username:"Sally",
        timeline: "JS is so cool"
    },
    {
        username: "Mitch",
        timeline: "Js is pretty cool!"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i ++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function singIn(username, password) {
    if(isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

let userNamePrompt = prompt("What\'s your username?");
let userPassPrompt = prompt("What\'s your password?");

singIn(userNamePrompt, userPassPrompt)