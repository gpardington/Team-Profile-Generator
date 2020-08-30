//Define and export the Engineer class. Inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName) {
        super(name, id, email);
        this.gitHub = gitHubUserName;
        this.role = ("Engineer");
    }
    getGitHub() {
        return (this.gitHub);
    }

    getRole() {
        return (this.role);
    }
}
module.exports = Engineer;
