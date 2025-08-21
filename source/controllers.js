"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsController = void 0;
var models_1 = require("./models");
var ContactsController = /** @class */ (function () {
    function ContactsController() {
        this.contacts = new models_1.ContactsCollection(); // Instanciar ContactsCollection
        this.contacts.load(); // Cargar los contactos al iniciar
    }
    ContactsController.prototype.processOptions = function (options) {
        var result;
        if (options.action === "get") {
            if (options.params.id) {
                result = this.contacts.getOneById(options.params.id);
            }
            else {
                result = this.contacts.getAll();
            }
        }
        else if (options.action === "save") {
            var newContact = options.params;
            this.contacts.addOne(newContact);
            this.contacts.save();
            return newContact; // Retornar el nuevo contacto
        }
        return result; // Si no hay acción válida
    };
    return ContactsController;
}());
exports.ContactsController = ContactsController;
