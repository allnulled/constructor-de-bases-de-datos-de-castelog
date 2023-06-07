const child_process = require("child_process");
const fs = require("fs");
const path = require("path");


Copiar_todo_en_docs: {
    child_process.execSync("cp -R ./src/www/* ./docs", {
        cwd: path.resolve(__dirname, "..")
    });
}
Copiar_index_en_docs: {
    const fichero_origen = path.resolve(__dirname, "..", "src/www/app.ultima.html");
    const fichero_destino = path.resolve(__dirname, "..", "docs/index.html");
    fs.copyFileSync(fichero_origen, fichero_destino);
}