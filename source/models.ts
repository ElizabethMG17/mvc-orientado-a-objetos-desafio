import contactsJason from './contacts.json'; // Asegúrate de que el archivo esté en la misma carpeta
import path from 'path';

class Contact {
  id: number = 0;
  name: string = "";

  constructor(id: number, name: string) {
    this.name = name;
    this.id = id;
  }
}

class ContactsCollection {
  contactos: Contact[] = [];

  load() {
    contactsJason.forEach((item: any) => {
      const contact = new Contact(item.id, item.name);
      this.addOne(contact);
    });
  }

  getAll() {
    return this.contactos;
  }

  addOne(contact: Contact): void {
    const existe = this.contactos.some(p => p.id === contact.id);
    if (existe) {
      throw new Error(`El producto con ID ${contact.id} ya existe en la lista.`);
    }
    this.contactos.push(contact);
  }

  getOneById(id: number): Contact | undefined {
    return this.contactos.find(c => c.id === id);
  }

  save(): void {
    // Si decides volver a usar jsonfile para guardar, puedes hacerlo aquí
  }
}

export { ContactsCollection };