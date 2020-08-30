//Define and export the Manager class. Inherit from Employee.
class manager {
    constructor(name, id, email, gitHubUserName) {
        super(name, id, email);
        this.gitHub = gitHubUserName;
        this.role = ("Manager");
    }
    getGitHub() {
        return (this.gitHub);
    }

    getRole() {
        return (this.role);
    }
}
module.exports = manager;