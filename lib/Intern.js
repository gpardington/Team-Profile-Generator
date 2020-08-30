//Define and export the Intern class. Inherit from Employee.
class intern {
    constructor(name, id, email, gitHubUserName) {
        super(name, id, email);
        this.school = school;
        this.role = ("Intern");
    }
    getGitHub() {
        return (this.gitHub);
    }

    getRole() {
        return (this.role);
    }
}
module.exports = intern;