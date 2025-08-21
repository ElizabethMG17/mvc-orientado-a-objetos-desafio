"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsCollection = void 0;
// este import existe solo para que tsc lo tome y lo copie a /build
var contacts_json_1 = require("./contacts.json");
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
var jsonfile_1 = require("jsonfile"); // Asegúrate de tener esta importación
var Contact = /** @class */ (function () {
    function Contact(id, name) {
        this.id = 0;
        this.name = "";
        this.name = name;
        this.id = id;
    }
    return Contact;
}());
var ContactsCollection = /** @class */ (function () {
    function ContactsCollection() {
        this.contactos = [];
    }
    ContactsCollection.prototype.load = function () {
        var _this = this;
        contacts_json_1.default.forEach(function (item) {
            var contact = new Contact(item.id, item.name);
            _this.addOne(contact); // usar el método que valida duplicados
        });
    };
    ContactsCollection.prototype.getAll = function () {
        return this.contactos;
    };
    ContactsCollection.prototype.addOne = function (contact) {
        var existe = this.contactos.some(function (p) { return p.id === contact.id; });
        if (existe) {
            throw new Error("El producto con ID ".concat(contact.id, " ya existe en la lista."));
        }
        this.contactos.push(contact);
    };
    ContactsCollection.prototype.getOneById = function (id) {
        return this.contactos.find(function (c) { return c.id === id; });
    };
    ContactsCollection.prototype.save = function () {
        jsonfile_1.default.writeFile('./contacts.json', this.contactos, { spaces: 2 }, function (err) {
            if (err) {
                console.error('Error al guardar el archivo:', err);
            }
            else {
                console.log('Archivo guardado exitosamente.');
            }
        });
    };
    return ContactsCollection;
}());
exports.ContactsCollection = ContactsCollection;
