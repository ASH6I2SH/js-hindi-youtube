const user= {
    username: 'ashish',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log('Got user details from database');
        // console.log(`username: ${this.username}`)
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    return this;
}

const userOne= new User('hitesh', 12, true);
const userTwo= new User('chai aur code', 11, false)
console.log(userOne);
console.log(userTwo);
console.log(user);
