const db = require('../util/database');

module.exports = class User {
    constructor(name, email, phoneno) {
        this.name = name;
        this.email = email;
        this.phoneno = phoneno;
    }

    save() {
        return db.execute('INSERT INTO appointments (name, email, phoneno) VALUES (?, ?, ?)', [this.name, this.email, this.phoneno]);
    }

    static findAll(){
        return db.execute('select * from appointments')
    }
};
