const fs = require("fs");
const path = require("path");

Copiar_index_en_docs: {
    const fichero_origen = path.resolve(__dirname, "..", "src/www/app-por-defecto.0.0.1.html");
    const fichero_destino = path.resolve(__dirname, "..", "docs/index.html");
    fs.copyFileSync(fichero_origen, fichero_destino);
}