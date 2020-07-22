console.log("Question: 3")



console.log("oops concept")
	// Create a class as User


class User {
	constructor(name, age, email) {
		this.name = name;
		this.age = age;
        this.email = email;
        this.adCoins = 0; //default value
        this.courses = [];  

	}

	login() {
		console.log(`${this.name} has logged in`);
		return this;
	}

	logout() {
		console.log(`${this.name} has logged out`);
		return this;
	}

}
// another class as Moderator
class Moderator extends User {
	constructor(name, age, email) {
		super(name, age, email);
        
       

	}

	addCoins() {
		this.adCoins++;
		console.log(`${this.name} has ${this.adCoins} coins`);
		return this;
    }
    
    removeCoins() {
		this.adCoins--;
		console.log(`${this.name} has ${this.adCoins} coins`);
		return this;
	}
}

// one more class
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }

    deleteUser(user,course){
        user.courses.pop(course);
        console.log(user);
    }

}

// take detail for output

let user1 = new User('komal', 25, 'k@gmail.com');

let user2 = new User('vru', 25, 'v@gmail.com');

let user3 = new User('kushal', 25, 'ku@gmail.com');
let mod = new Moderator('jay', 20, 'jd@gmail.com');
let admin = new Admin('admin',25,'a@gmail.com');
// take into one array
let users = [user1, user2, user3, mod,admin];

// fetch all records
users.forEach(element => {
	console.log(element);
});

// user has login and logout access;
console.log("========== users login and logout ===========");
user1.login().logout();

// moderator user has added one coin
console.log("========== added coins ===========");
mod.login().addCoins().logout();
mod.login().addCoins().logout();

console.log("========== remove coins ===========");
// moderator user has remove that one coin
mod.login().removeCoins().logout();

// course added to all user
admin.addCourse(user1,'HTML')

admin.addCourse(user2,'python')


// addcourse
admin.addCourse(user3,'java')

// deletecourse
admin.deleteUser(user3,'java' );

// admin has all the propery of User and Moderator
admin.login().addCoins().addCourse(user3,'javascript');
admin.logout();
