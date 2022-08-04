export class Contact {
    name = '';
    cellphone = '';
    email = '';
    conected = false;

    constructor(name, cellphone, email, conected) {
        this.name = name;
        this.cellphone = cellphone;
        this.email = email;
        this.conected = conected;
    }

}