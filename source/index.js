"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("./controllers");
var minimist_1 = require("minimist");
function parseaParams(argv) {
    // Parsear el argv usando minimist
    var resultado = (0, minimist_1.default)(argv);
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
    var controller = new controllers_1.ContactsController();
    var params = parseaParams(process.argv.slice(2)); // Pasar solo los argumentos relevantes
    var result = controller.processOptions(params); // Llamar a processOptions con los parámetros
    console.log(result); // Imprimir el resultado
}
main();
