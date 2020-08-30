//Define and export the Manager class. Inherit from Employee.
class manager {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = ("Manager");
    }
    getRole() {
        return (this.role);
    }
    getOfficeNumber(){
        return (this.officeNumber)
    }
}
module.exports = manager;