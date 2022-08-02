function Intern(name = '') {
    this.name = 'Josie';
    this.id = '10171738';
    this.email = 'jhouston@yahoo.com';
    this.school = 'SMU';

    Intern.prototype.getSchool = function() {
        return {
            school: this.school,
        }
    }

    Intern.prototype.getRole = function() {
        return {
            role: this.getRole,
        }
    }
};










module.exports = Intern;