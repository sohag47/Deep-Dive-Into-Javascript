//! JavaScript Classes

class User {
    constructor(username, email, password) {
        this.id = 0;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static getUserInfo() {
        return { 'isLogin': true };
    }
}
class Person extends User {
    constructor(username, email, password, name, phone, address, age) {
        super(username, email, password);
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.age = age;

    }

    findById(id) {
        if (id == this.id) {
            let user_details = {
                "id": this.id,
                "name": this.name,
                "username": this.username,
                "email": this.email,
                "phone": this.phone,
                "address": this.address,
                "age": this.age
            };
            return user_details;
        } else {
            return "user not found!";
        }


    }
    get allUser() {
        let user_details = {
            "id": this.id,
            "name": this.name,
            "username": this.username,
            "email": this.email,
            "phone": this.phone,
            "address": this.address,
            "age": this.age
        };
        return user_details;
    }
    setUserId(id) {
        this.id = id;
        console.log('this.id :>> ', this.id);
        return;
    }
}

let sohag = new Person(
    'sohag47',
    'sohag@email.com',
    123456,
    "Minhazul Islam Sohag",
    123456,
    "Dhaka",
    26
);
sohag.setUserId(1);
console.log('user info :>> ', sohag.findById(1));
console.log("Login info", User.getUserInfo())
