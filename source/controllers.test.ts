import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsControllerOptions } from './controllers';


test('ContactsController constructor carga contactos', t => {
  const controller = new ContactsController();

  t.truthy(controller.contacts); // Verifica que exista la instancia
  t.true(Array.isArray(controller.contacts.contactos)); // Verifica que contactos sea un array
  t.true(controller.contacts.contactos.length >= 0); // Verifica que tenga 0 o más contactos
});


test('processOptions - get all contacts', t => {
const controller = new ContactsController();
const options: ContactsControllerOptions = { action: 'get', params: {} };
const result = controller.processOptions(options);

t.true(Array.isArray(result)); // Verifica que el resultado sea un array
});


test('processOptions - get contact by id', t => {
const controller = new ContactsController();
const options: ContactsControllerOptions = { action: 'get', params: {id: 1 } };
const result = controller.processOptions(options);

t.truthy(result); // Verifica que se devuelva un contacto
});

test('processOptions - save new contact', t => {
  const controller = new ContactsController();
  const newContact = { id: 2, name: 'Nuevo Contacto' };
  const options: ContactsControllerOptions = { action: 'save', params: newContact };

  const result = controller.processOptions(options);
  
  t.deepEqual(result, newContact); // Verifica que el contacto guardado sea el mismo
});