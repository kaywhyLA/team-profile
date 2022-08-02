function Employee(name = 'Josie') {
    this.name = 'josie';
    this.id = '10171738';
    this.email = 'jhouston@yahoo.com';


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


};

module.exports = Employee;