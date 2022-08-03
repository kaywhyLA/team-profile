function Employee(name = 'Josie') {
    this.name = 'josie';
    this.id = '10171738';
    this.email = 'jhouston@yahoo.com';
    this.officeNumber = '405';


    Employee.prototype.getName = function() {
        return {
            name: this.name,
        }
    };

    Employee.prototype.getId = function() {
        return {
            id: this.id,
        }
    };

    Employee.prototype.getEmail = function() {
        return {
            email: this.email,
        }
    };
    Employee.prototype.officeNumber = function() {
        return {
            number: this.officeNumber
        }
    }
};

module.exports = Employee;