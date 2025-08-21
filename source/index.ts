import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from 'minimist';

function parseaParams(argv): ContactsControllerOptions {
  // Parsear el argv usando minimist
  const resultado = minimist(argv);
  console.log(resultado); // Esto te ayudará a ver qué argumentos se están pasando

  return {
    action: resultado.action || null, // Asignar la acción
    params: {
      id: resultado.id || null, // Obtener el ID si se proporciona
      name: resultado.name || null // Obtener el nombre si se proporciona
    }
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2)); // Pasar solo los argumentos relevantes
  const result = controller.processOptions(params); // Llamar a processOptions con los parámetros
  console.log(result); // Imprimir el resultado
}

main();