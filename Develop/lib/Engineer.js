//Define and export the Engineer class. Inherit from Employee.
class engineer {
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
module.exports = engineer;
