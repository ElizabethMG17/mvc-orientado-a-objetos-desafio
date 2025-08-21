import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load(); // Cargar los contactos al iniciar
  }

  processOptions(options: ContactsControllerOptions) {
    let result;

    if (options.action === "get") {
      if (options.params.id) {
        result = this.contacts.getOneById(options.params.id);
      } else {
        result = this.contacts.getAll();
      }
    } else if (options.action === "save") {
      const newContact = options.params;
      this.contacts.addOne(newContact);
      this.contacts.save();
      return newContact; // Retornar el nuevo contacto
    }
    return result; // Si no hay acción válida
  }
}

export { ContactsController };