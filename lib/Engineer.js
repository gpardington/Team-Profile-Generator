//Define and export the Engineer class. Inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, githubUserName) {
        super (name, id, email);
        this.github = githubUserName;
        this.role = ("Engineer");
    }
    getGithub() {
        return (this.github);
    }

    getRole() {
        return (this.role);
    }
}
module.exports = Engineer;