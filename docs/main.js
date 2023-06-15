
// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www/js/download_file.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www/js", "/home/carlos/Escritorio/Nuevo3/democracia-2.0");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www/js", "/home/carlos/Escritorio/Nuevo3/democracia-2.0" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www/js/download_file.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        window.download_file_by_source = function(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www/js/download_file.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www/js/download_file.js");

// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www/app.calo
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www", "/home/carlos/Escritorio/Nuevo3/democracia-2.0");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www", "/home/carlos/Escritorio/Nuevo3/democracia-2.0" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www/app.calo:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
// [castelog:empaquetables] "./js/download_file.js"

// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"app","version":"ultima","contenido":{"head":"<head>\n    <title>🗄 Constructor de bases de datos de Castelog</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"./components/estilos.css\" />\n    <script src=\"./js/calo.js\"></script>\n    <style>\n      .tarjeta_tipica {\n        border: 1px solid #CCC;\n        margin-top: 1px;\n        padding: 4px;\n      }\n      .win7 [role=\"tabpanel\"] {\n        padding: 2px;\n        margin-bottom: 0px;\n      }\n      .w_100 { width:100% !important; }\n      .subtitulo_de_pestanya {\n        padding: 4px !important;\n      }\n      .win7 button.boton_lateral {\n        margin-left: 1px;\n      }\n      .win7 details > summary {\n        display: block !important;\n      }\n      .win7 ul.tree-view.has-container {\n        margin: 0px;\n        padding: 0px;\n        padding-left: 10px;\n      }\n      .win7 ul.tree-view li {\n        margin-top: 0px !important;\n      }\n      .titulo_de_pestanya.subtitulo_de_pestanya {\n        cursor: pointer;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const DiseniadorDeEsquemaDeConstructorDeBasesDeDatosDeCastelog = Castelog.metodos.un_componente_vue2("DiseniadorDeEsquemaDeConstructorDeBasesDeDatosDeCastelog",
  "<div class=\"DiseniadorDeEsquemaDeConstructorDeBasesDeDatosDeCastelog Component\">"
 + "    <div class=\"titulo_de_pestanya\">▦ Tablas</div>"
 + "    <div class=\"w_100 horizontal_layout\" style=\"margin-top: 1px; margin-bottom: 1px;\">"
 + "      <button class=\"w_100\" v-on:click=\"() => agregar_elemento(tablas, 'tabla')\">"
 + "        <div class=\"emoji\"> ➕ </div>"
 + "        <div class=\"para_tablet_o_mayor\">Añadir tabla</div>"
 + "      </button>"
 + "      <button class=\"boton_minimal margen_izquierda_item\">"
 + "        <div class=\"emoji\" v-on:click=\"() => raiz.guardar_datos()\"> ✔ </div>"
 + "        <div class=\"para_tablet_o_mayor\" style=\"padding-left: 4px; padding-right: 10px;\">Guardar</div>"
 + "      </button>"
 + "      <button class=\"boton_minimal margen_izquierda_item\">"
 + "        <div class=\"emoji\" v-on:click=\"() => raiz.cargar_datos()\"> ♻️ </div>"
 + "        <div class=\"para_tablet_o_mayor\" style=\"padding-left: 4px; padding-right: 10px;\">Cargar</div>"
 + "      </button>"
 + "    </div>"
 + "    <div v-for=\"tabla, tabla_index in tablas\" v-bind:key=\"'tabla-' + tabla_index\" class=\"\">"
 + "      <div class=\"horizontal_layout\">"
 + "        <div class=\"w_100 titulo_de_pestanya subtitulo_de_pestanya\" v-on:click=\"() => alternar_elemento(tabla)\" :class=\"{active:tabla.esta_mostrando_detalles}\">{{ tabla.nombre || '?' }} (tabla)</div>"
 + "        <button class=\"boton_lateral\" v-on:click=\"() => eliminar_elemento(tablas, tabla_index)\">"
 + "          <span>❌</span>"
 + "        </button>"
 + "      </div>"
 + "      <article role=\"tabpanel\" v-if=\"tabla.esta_mostrando_detalles\">"
 + "        <ul class=\"tree-view has-container\">"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Nombre:"
 + "              </summary>"
 + "              <div>"
 + "                <input class=\"w_100\" type=\"text\" v-model=\"tabla.nombre\" />"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Descripción:"
 + "              </summary>"
 + "              <div>"
 + "                <textarea class=\"w_100\" v-model=\"tabla.descripcion\"></textarea>"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Ruta de URL de tabla:"
 + "              </summary>"
 + "              <div>"
 + "                <input class=\"w_100\" type=\"text\" v-model=\"tabla.ruta_de_url_de_tabla\" />"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Identificador único:"
 + "              </summary>"
 + "              <div>"
 + "                <input class=\"w_100\" type=\"text\" v-model=\"tabla.identificador_unico\" />"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Atributos de tabla extra:"
 + "              </summary>"
 + "              <div>"
 + "                <button class=\"w_100\" style=\"\" v-on:click=\"() => agregar_elemento(tabla.atributos_de_tabla, 'atributo de tabla')\">Añadir atributo</button>"
 + "                <ul class=\"tree-view has-container\">"
 + "                  <li v-for=\"atributo, atributo_index in tabla.atributos_de_tabla\" v-bind:key=\"'tabla-' + tabla_index + '-atributo-' + atributo_index\">"
 + "                    <div class=\"horizontal_layout\">"
 + "                      <div class=\"w_100\">"
 + "                        <details>"
 + "                          <summary>{{ atributo_index }}</summary>"
 + "                          <div>"
 + "                            <textarea class=\"w_100\" type=\"text\" v-model=\"tabla.atributos_de_tabla[atributo_index]\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                      </div>"
 + "                      <button class=\"boton_lateral\" v-on:click=\"() => eliminar_elemento(tabla.atributos_de_tabla, atributo_index)\">"
 + "                        <span>❌</span>"
 + "                      </button>"
 + "                    </div>"
 + "                  </li>"
 + "                </ul>"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Columnas:"
 + "              </summary>"
 + "              <div>"
 + "                <div class=\"titulo_de_pestanya\">▥ Columnas</div>"
 + "                <button class=\"w_100\" style=\"\" v-on:click=\"() => agregar_elemento(tabla.columnas, 'columna')\">Añadir columna</button>"
 + "                  <div v-for=\"columna, columna_index in tabla.columnas\" v-bind:key=\"'tabla-' + tabla_index + '-columna-' + columna_index\">"
 + "                    <div class=\"horizontal_layout\">"
 + "                      <div class=\"w_100 titulo_de_pestanya subtitulo_de_pestanya\" v-on:click=\"() => alternar_elemento(columna)\" :class=\"{active:columna.esta_mostrando_detalles}\">{{ columna.nombre || '?' }} (columna)</div>"
 + "                      <button class=\"boton_lateral\" v-on:click=\"() => eliminar_elemento(tabla.columnas, columna_index)\">"
 + "                        <span>❌</span>"
 + "                      </button>"
 + "                    </div>"
 + "                    <article role=\"tabpanel\" v-if=\"columna.esta_mostrando_detalles\">"
 + "                      <ul class=\"tree-view has-container\">"
 + "                        <li>"
 + "                          <details>"
 + "                            <summary>"
 + "                              Nombre:"
 + "                            </summary>"
 + "                            <div>"
 + "                              <input class=\"w_100\" type=\"text\" v-model=\"columna.nombre\" />"
 + "                            </div>"
 + "                          </details>"
 + "                        </li>"
 + "                        <li>"
 + "                          <details>"
 + "                            <summary>"
 + "                              Descripción:"
 + "                            </summary>"
 + "                            <div>"
 + "                              <textarea class=\"w_100\" v-model=\"columna.descripcion\"></textarea>"
 + "                            </div>"
 + "                          </details>"
 + "                        </li>"
 + "                        <li>"
 + "                          <details>"
 + "                            <summary>"
 + "                              Ruta de URL de columna:"
 + "                            </summary>"
 + "                            <div>"
 + "                              <input class=\"w_100\" type=\"text\" v-model=\"columna.ruta_de_url_de_columna\" />"
 + "                            </div>"
 + "                          </details>"
 + "                        </li>"
 + "                        <li>"
 + "                          <details>"
 + "                            <summary>"
 + "                              Identificador único:"
 + "                            </summary>"
 + "                            <div>"
 + "                              <input class=\"w_100\" type=\"text\" v-model=\"columna.identificador_unico\" />"
 + "                            </div>"
 + "                          </details>"
 + "                        </li>"
 + "                        <li>"
 + "                          <details>"
 + "                            <summary>"
 + "                              Atributos de columna extra:"
 + "                            </summary>"
 + "                            <div>"
 + "                              <button class=\"w_100\" style=\"\" v-on:click=\"() => agregar_elemento(columna.atributos_de_columna, 'atributo de columna', { clave:'', valor:'' })\">Añadir atributo</button>"
 + "                              <ul class=\"tree-view has-container\">"
 + "                                <li v-for=\"atributo, atributo_index in columna.atributos_de_columna\" v-bind:key=\"'tabla-' + tabla_index + '-atributo-' + atributo_index\">"
 + "                                  <div class=\"horizontal_layout\">"
 + "                                    <div class=\"w_100\">"
 + "                                      <details>"
 + "                                        <summary>{{ atributo_index }}</summary>"
 + "                                        <div>"
 + "                                          <textarea class=\"w_100\" type=\"text\" v-model=\"columna.atributos_de_columna[atributo_index]\"></textarea>"
 + "                                        </div>"
 + "                                      </details>"
 + "                                    </div>"
 + "                                    <button class=\"boton_lateral\" v-on:click=\"() => eliminar_elemento(columna.atributos_de_columna, atributo_index)\">"
 + "                                      <span>❌</span>"
 + "                                    </button>"
 + "                                  </div>"
 + "                                </li>"
 + "                              </ul>"
 + "                            </div>"
 + "                          </details>"
 + "                        </li>"
 + "                      </ul>"
 + "                    </article>"
 + "                  </div>"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "        </ul>"
 + "      </article>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ raiz:{ type:Object,
required:true
}
},
data() {try {
return { tablas:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ agregar_elemento( elementos,
tipo_de_elemento = "elemento",
valor_base = { 
} ) {try {
let nombre = "";
while(!(( (!(nombre === "")) ) && ( (!(((item, list) => list.indexOf(item) !== -1)(nombre, Object.keys(elementos)))) ))) {
nombre = this.$window.prompt( "¿Qué nombre de " + tipo_de_elemento + "?" );
if((!(typeof nombre === 'string'))) {
return;
}
}
elementos[ nombre ] = Object.assign({ tipo:tipo_de_elemento,
nombre,
descripcion:"",
identificador_unico:""
}, ( tipo_de_elemento === "tabla" ? { ruta_de_url_de_tabla:"/",
atributos_de_tabla:{ 
},
columnas:{ 
},
esta_mostrando_detalles:false
} : ( tipo_de_elemento === "columna" ? { ruta_de_url_de_columna:"/",
atributos_de_columna:{ 
},
tipo_de_dato:"texto",
es_identificador:false,
es_clave_unica:false,
es_clave_foranea:false,
es_columna_virtual:false,
tiene_valor_por_defecto:null,
esta_mostrando_detalles:false
} : { 
} ) ), valor_base );
if(tipo_de_elemento === "atributo de tabla") {
elementos[ nombre ] = "";
}
if(tipo_de_elemento === "atributo de columna") {
elementos[ nombre ] = "";
}
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
alternar_elemento( elemento ) {try {
elemento.esta_mostrando_detalles = (!(elemento.esta_mostrando_detalles));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar_elemento( elementos,
elemento_index ) {try {
delete elementos[ elemento_index ];
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);
const PanelFinalDeConstructorDeBasesDeDatosDeCastelog = Castelog.metodos.un_componente_vue2("PanelFinalDeConstructorDeBasesDeDatosDeCastelog",
  "<div class=\"PanelFinalDeConstructorDeBasesDeDatosDeCastelog Component\">"
 + "    <div>"
 + "      <div class=\"titulo_de_pestanya\"> ⭐ Descargar</div>"
 + "      <div class=\"horizontal_layout\" style=\"margin-top: 1px; margin-bottom: 0px;\">"
 + "        <button class=\"\" v-on:click=\"importar\">Importar de fichero</button>"
 + "        <button class=\"\" style=\"margin-left: 2px;\" v-on:click=\"exportar\">Exportar a fichero</button>"
 + "      </div>"
 + "      <input type=\"file\" style=\"display:none;\" ref=\"selector_de_fichero\" accept=\"application/json\" v-on:input=\"importar_fichero\" />"
 + "    </div>"
 + ""
 + "  </div>",
  function(component) {return { props:{ raiz:{ type:Object,
required:true
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ exportar() {try {
const datos = this.raiz.obtener_datos(  );
const nombre = this.$window.prompt( "¿Qué nombre de fichero?",
"arquitectura.calo-db.json" );
if((!(nombre))) {
return;
}
window.download_file_by_source( nombre,
JSON.stringify(datos, null, 2) );
} catch(error) {
console.log(error);
throw error;
}

},
importar() {try {
this.$refs.selector_de_fichero.click(  );
} catch(error) {
console.log(error);
throw error;
}

},
importar_fichero() {try {
if(this.$refs.selector_de_fichero.files.length === 0) {
return;
}
const [ fichero ] = this.$refs.selector_de_fichero.files;
const lector = new FileReader(  );
lector.onload = ( evento ) => {try {
const resultado_json = evento.target.result;
try {
const resultado = JSON.parse(resultado_json);
if(( (!("infraestructura" in resultado)) ) && ( (!("esquema" in resultado)) )) {
throw new Error( "El fichero JSON no cumple con el formato propio de la aplicación" );
}
this.raiz.guardar_datos( resultado );
this.$window.location.reload(  );
} catch(error) {
this.$window.alert( "Error al importar fichero JSON: " + error.message );}
} catch(error) {
console.log(error);
throw error;
}

};
lector.onerror = ( evento ) => {
};
lector.readAsText( fichero );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);
const ConstructorDeBasesDeDatosDeCastelog = Castelog.metodos.un_componente_vue2("ConstructorDeBasesDeDatosDeCastelog",
  "<div class=\"ConstructorDeBasesDeDatosDeCastelog Component win7\">"
 + "    <section class=\"tabs\">"
 + "      <menu role=\"tablist\" aria-label=\"InfraestructuraDeBaseDeDatos\">"
 + "        <button role=\"tab\" v-on:click=\"() => seleccionar_pestania('infraestructura')\" :aria-selected=\"pestania_seleccionada === 'infraestructura'\">"
 + "          <div class=\"emoji\"> 📡 </div>"
 + "          <div class=\"para_tablet_o_mayor\" style=\"white-space: nowrap;\">Infraestructura</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => seleccionar_pestania('esquema')\" :aria-selected=\"pestania_seleccionada === 'esquema'\">"
 + "          <div class=\"emoji\"> ▤ </div>"
 + "          <div class=\"para_tablet_o_mayor\" style=\"white-space: nowrap;\">Esquema</div>"
 + "        </button>"
 + "        <button role=\"tab\" v-on:click=\"() => seleccionar_pestania('datos')\" :aria-selected=\"pestania_seleccionada === 'datos'\">"
 + "          <div class=\"emoji\"> ⭐ </div>"
 + "          <div class=\"para_tablet_o_mayor\" style=\"white-space: nowrap;\">Descargar</div>"
 + "        </button>"
 + "      </menu>"
 + "    </section>"
 + "    <article role=\"tabpanel\" v-show=\"pestania_seleccionada === 'infraestructura'\">"
 + "      <DiseniadorDeInfraestructuraDeConstructorDeBasesDeDatosDeCastelog ref=\"control_de_infraestructura\" :raiz=\"this\" />"
 + "    </article>"
 + "    <article role=\"tabpanel\" v-show=\"pestania_seleccionada === 'esquema'\">"
 + "      <DiseniadorDeEsquemaDeConstructorDeBasesDeDatosDeCastelog ref=\"control_de_esquema\" :raiz=\"this\" />"
 + "    </article>"
 + "    <article role=\"tabpanel\" v-show=\"pestania_seleccionada === 'datos'\">"
 + "      <PanelFinalDeConstructorDeBasesDeDatosDeCastelog ref=\"control_de_datos\" :raiz=\"this\" />"
 + "    </article>"
 + "  </div>",
  function(component) {return { data() {try {
return { pestania_seleccionada:"infraestructura"
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ seleccionar_pestania( pestania ) {try {
this.pestania_seleccionada = pestania;
} catch(error) {
console.log(error);
throw error;
}

},
obtener_datos(  ) {try {
const infraestructura = this.$refs.control_de_infraestructura.maquinas;
const esquema = this.$refs.control_de_esquema.tablas;
return { infraestructura,
esquema
};
} catch(error) {
console.log(error);
throw error;
}

},
guardar_datos( nuevos_datos ) {try {
const datos = ( nuevos_datos ? nuevos_datos : this.obtener_datos(  ) );
localStorage._constructor_de_bases_de_datos_de_castelog_ = JSON.stringify(datos, null, 2);
} catch(error) {
console.log(error);
throw error;
}

},
cargar_datos() {try {
const datos = (() => {try {
return JSON.parse(localStorage._constructor_de_bases_de_datos_de_castelog_);
} catch(error) {
return { infraestructura:[  ],
esquema:{ 
}
};}})();
if(this.$refs.control_de_infraestructura) {
this.$refs.control_de_infraestructura.maquinas = datos.infraestructura;
}
if(this.$refs.control_de_esquema) {
this.$refs.control_de_esquema.tablas = datos.esquema;
}
return datos;
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {try {
this.cargar_datos(  );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);
const DiseniadorDeInfraestructuraDeConstructorDeBasesDeDatosDeCastelog = Castelog.metodos.un_componente_vue2("DiseniadorDeInfraestructuraDeConstructorDeBasesDeDatosDeCastelog",
  "<div class=\"DiseniadorDeInfraestructuraDeConstructorDeBasesDeDatosDeCastelog Component win7\">"
 + "    <div class=\"titulo_de_pestanya\">🖥️ Máquinas</div>"
 + "    <div class=\"w_100 horizontal_layout\" style=\"margin-top: 1px; margin-bottom: 1px;\">"
 + "      <button class=\"w_100\" v-on:click=\"() => agregar_maquina()\">"
 + "        <div class=\"emoji\"> ➕ </div>"
 + "        <div class=\"para_tablet_o_mayor\">Añadir máquina</div>"
 + "      </button>"
 + "      <button class=\"boton_minimal margen_izquierda_item\">"
 + "        <div class=\"emoji\" v-on:click=\"() => raiz.guardar_datos()\"> ✔ </div>"
 + "        <div class=\"para_tablet_o_mayor\" style=\"padding-left: 4px; padding-right: 10px;\">Guardar</div>"
 + "      </button>"
 + "      <button class=\"boton_minimal margen_izquierda_item\">"
 + "        <div class=\"emoji\" v-on:click=\"() => raiz.cargar_datos()\"> ♻️ </div>"
 + "        <div class=\"para_tablet_o_mayor\" style=\"padding-left: 4px; padding-right: 10px;\">Cargar</div>"
 + "      </button>"
 + "    </div>"
 + "    <div v-for=\"maquina, maquina_index in maquinas\" v-bind:key=\"'maquina-' + maquina_index\" class=\"\">"
 + "      <div class=\"horizontal_layout\">"
 + "        <div class=\"w_100 titulo_de_pestanya subtitulo_de_pestanya\" v-on:click=\"() => alternar_elemento(maquina)\" :class=\"{active:maquina.esta_mostrando_detalles}\">{{ maquina.nombre || '?' }} (máquina)</div>"
 + "        <button class=\"boton_lateral\" v-on:click=\"() => eliminar_elemento(maquinas, maquina_index)\">"
 + "          <span>❌</span>"
 + "        </button>"
 + "      </div>"
 + "      <article role=\"tabpanel\" v-if=\"maquina.esta_mostrando_detalles\">"
 + "        <ul class=\"tree-view has-container\">"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Nombre:"
 + "              </summary>"
 + "              <div>"
 + "                <input class=\"w_100\" type=\"text\" v-model=\"maquina.nombre\" />"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Descripción:"
 + "              </summary>"
 + "              <div>"
 + "                <textarea class=\"w_100\" type=\"number\" v-model=\"maquina.descripcion\"></textarea>"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                URL:"
 + "              </summary>"
 + "              <div>"
 + "                <input class=\"w_100\" type=\"text\" v-model=\"maquina.url\"/>"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Puerto de URL:"
 + "              </summary>"
 + "              <div>"
 + "                <input class=\"w_100\" type=\"number\" v-model=\"maquina.puerto_de_url\"/>"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Identificador único:"
 + "              </summary>"
 + "              <div>"
 + "                <input class=\"w_100\" type=\"text\" v-model=\"maquina.identificador_unico\" />"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "          <li>"
 + "            <details>"
 + "              <summary>"
 + "                Proyectos:"
 + "              </summary>"
 + "              <div>"
 + "                <button class=\"w_100\" style=\"\" v-on:click=\"() => agregar_proyecto(maquina)\">Añadir proyecto</button>"
 + "                <div v-for=\"proyecto, proyecto_index in maquina.proyectos\" v-bind:key=\"'maquina-' + maquina_index + '-proyecto-' + proyecto_index\" class=\"\">"
 + "                  <div class=\"horizontal_layout\">"
 + "                    <div class=\"w_100 titulo_de_pestanya subtitulo_de_pestanya\" v-on:click=\"() => alternar_elemento(proyecto)\" :class=\"{active:proyecto.esta_mostrando_detalles}\">{{ proyecto.nombre || '?' }} (proyecto)</div>"
 + "                    <button class=\"boton_lateral\" v-on:click=\"() => eliminar_elemento(maquina.proyectos, proyecto_index)\">"
 + "                      <span>❌</span>"
 + "                    </button>"
 + "                  </div>"
 + "                  <article role=\"tabpanel\" v-if=\"proyecto.esta_mostrando_detalles\">"
 + "                    <ul class=\"tree-view has-container\">"
 + "                      <li>"
 + "                        <details>"
 + "                          <summary>"
 + "                            <div>Nombre:</div>"
 + "                          </summary>"
 + "                          <div>"
 + "                            <input class=\"w_100\" type=\"text\" v-model=\"proyecto.nombre\" />"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                      <li>"
 + "                        <details>"
 + "                          <summary>"
 + "                            <div>Descripción:</div>"
 + "                          </summary>"
 + "                          <div>"
 + "                            <textarea class=\"w_100\" type=\"number\" v-model=\"proyecto.descripcion\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                      <li>"
 + "                        <details>"
 + "                          <summary>"
 + "                            <div>Ruta de URL:</div>"
 + "                          </summary>"
 + "                          <div>"
 + "                            <input class=\"w_100\" type=\"text\" v-model=\"proyecto.ruta_de_url\" />"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                      <li>"
 + "                        <details>"
 + "                          <summary>"
 + "                            <div>Identificador único:</div>"
 + "                          </summary>"
 + "                          <div>"
 + "                            <input class=\"w_100\" type=\"text\" v-model=\"proyecto.identificador_unico\" />"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                      <li>"
 + "                        <details>"
 + "                          <summary>"
 + "                            <div>Nombre:</div>"
 + "                          </summary>"
 + "                          <div>"
 + "                            <input class=\"w_100\" type=\"text\" v-model=\"proyecto.nombre\" />"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                      <li>"
 + "                        <details>"
 + "                          <summary>"
 + "                            <div>Conexiones:</div>"
 + "                          </summary>"
 + "                          <div>"
 + "                            <button class=\"w_100\" style=\"\" v-on:click=\"() => agregar_conexion(proyecto)\">Añadir conexión</button>"
 + "                            <div v-for=\"conexion, conexion_index in proyecto.conexiones\" v-bind:key=\"'maquina-' + maquina_index + '-proyecto-' + proyecto_index + '-conexion-' + conexion_index\" class=\"\">"
 + "                              <div class=\"horizontal_layout\">"
 + "                                <div class=\"w_100 titulo_de_pestanya subtitulo_de_pestanya\" v-on:click=\"() => alternar_elemento(conexion)\" :class=\"{active:conexion.esta_mostrando_detalles}\">{{ conexion.nombre || '?' }} (conexión)</div>"
 + "                                <button class=\"boton_lateral\" v-on:click=\"() => eliminar_elemento(proyecto.conexiones, conexion_index)\">"
 + "                                  <span>❌</span>"
 + "                                </button>"
 + "                              </div>"
 + "                              <article role=\"tabpanel\" v-if=\"conexion.esta_mostrando_detalles\">"
 + "                                <ul class=\"tree-view has-container\">"
 + "                                  <li>"
 + "                                    <details>"
 + "                                      <summary>"
 + "                                        <div>Nombre:</div>"
 + "                                      </summary>"
 + "                                      <div>"
 + "                                        <input class=\"w_100\" type=\"text\" v-model=\"conexion.nombre\" />"
 + "                                      </div>"
 + "                                    </details>"
 + "                                  </li>"
 + "                                  <li>"
 + "                                    <details>"
 + "                                      <summary>"
 + "                                        <div>Descripción:</div>"
 + "                                      </summary>"
 + "                                      <div>"
 + "                                        <textarea class=\"w_100\" type=\"number\" v-model=\"conexion.descripcion\"></textarea>"
 + "                                      </div>"
 + "                                    </details>"
 + "                                  </li>"
 + "                                  <li>"
 + "                                    <details>"
 + "                                      <summary>"
 + "                                        <div>Usuario de base de datos:</div>"
 + "                                      </summary>"
 + "                                      <div>"
 + "                                        <input class=\"w_100\" type=\"text\" v-model=\"conexion.usuario_de_base_de_datos\" />"
 + "                                      </div>"
 + "                                    </details>"
 + "                                  </li>"
 + "                                  <li>"
 + "                                    <details>"
 + "                                      <summary>"
 + "                                        <div>Contraseña de usuario:</div>"
 + "                                      </summary>"
 + "                                      <div>"
 + "                                        <input class=\"w_100\" type=\"text\" v-model=\"conexion.contrasenia_de_base_de_datos\" />"
 + "                                      </div>"
 + "                                    </details>"
 + "                                  </li>"
 + "                                  <li>"
 + "                                    <details>"
 + "                                      <summary>"
 + "                                        <div>URL de base de datos:</div>"
 + "                                      </summary>"
 + "                                      <div>"
 + "                                        <input class=\"w_100\" type=\"text\" v-model=\"conexion.url_de_base_de_datos\" />"
 + "                                      </div>"
 + "                                    </details>"
 + "                                  </li>"
 + "                                  <li>"
 + "                                    <details>"
 + "                                      <summary>"
 + "                                        <div>Puerto de base de datos:</div>"
 + "                                      </summary>"
 + "                                      <div>"
 + "                                        <input class=\"w_100\" type=\"text\" v-model=\"conexion.puerto_de_base_de_datos\" />"
 + "                                      </div>"
 + "                                    </details>"
 + "                                  </li>"
 + "                                  <li>"
 + "                                    <details>"
 + "                                      <summary>"
 + "                                        <div>Nombre de base de datos:</div>"
 + "                                      </summary>"
 + "                                      <div>"
 + "                                        <input class=\"w_100\" type=\"text\" v-model=\"conexion.nombre_de_base_de_datos\" />"
 + "                                      </div>"
 + "                                    </details>"
 + "                                  </li>"
 + "                                  <li>"
 + "                                    <details>"
 + "                                      <summary>"
 + "                                        <div>Identificador único:</div>"
 + "                                      </summary>"
 + "                                      <div>"
 + "                                        <input class=\"w_100\" type=\"text\" v-model=\"conexion.identificador_unico\" />"
 + "                                      </div>"
 + "                                    </details>"
 + "                                  </li>"
 + "                                </ul>"
 + "                              </article>"
 + "                            </div>"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                    </ul>"
 + "                  </article>"
 + "                </div>"
 + "              </div>"
 + "            </details>"
 + "          </li>"
 + "        </ul>"
 + "      </article>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ raiz:{ type:Object,
required:true
}
},
data() {try {
return { maquinas:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ agregar_maquina(  ) {try {
let nombre = "";
while(!(( (!(nombre === "")) ) && ( (!(((item, list) => list.indexOf(item) !== -1)(nombre, ((list, column) => {const output = []; const listItems = Object.values(list); for(let index=0; index<listItems.length; index++) { const row = listItems[index]; output.push(row[column]); } return output; })(this.maquinas, "nombre" )))) ))) {
nombre = this.$window.prompt( "¿Qué nombre de nueva máquina?" );
if((!(typeof nombre === 'string'))) {
return;
}
}
this.maquinas.push({ tipo:"máquina",
nombre,
descripcion:"",
url:"",
puerto_de_url:80,
identificador_unico:"",
proyectos:[  ]
})
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
agregar_proyecto( maquina ) {try {
let nombre = "";
while(!(( (!(nombre === "")) ) && ( (!(((item, list) => list.indexOf(item) !== -1)(nombre, ((list, column) => {const output = []; const listItems = Object.values(list); for(let index=0; index<listItems.length; index++) { const row = listItems[index]; output.push(row[column]); } return output; })(maquina.proyectos, "nombre" )))) ))) {
nombre = this.$window.prompt( "¿Qué nombre de nuevo proyecto?" );
if((!(typeof nombre === 'string'))) {
return;
}
}
maquina.proyectos.push({ tipo:"proyecto",
nombre,
descripcion:"",
ruta_de_url:"/",
identificador_unico:"",
conexiones:[  ]
})
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
agregar_conexion( proyecto ) {try {
let nombre = "";
while(!(( (!(nombre === "")) ) && ( (!(((item, list) => list.indexOf(item) !== -1)(nombre, ((list, column) => {const output = []; const listItems = Object.values(list); for(let index=0; index<listItems.length; index++) { const row = listItems[index]; output.push(row[column]); } return output; })(proyecto.conexiones, "nombre" )))) ))) {
nombre = this.$window.prompt( "¿Qué nombre de nueva conexión?" );
if((!(typeof nombre === 'string'))) {
return;
}
}
proyecto.conexiones.push({ tipo:"conexión",
nombre,
descripcion:"",
usuario_de_base_de_datos:"",
contrasenia_de_base_de_datos:"",
url_de_base_de_datos:"",
puerto_de_base_de_datos:"",
nombre_de_base_de_datos:"",
identificador_unico:""
})
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
alternar_elemento( elemento ) {try {
if(elemento.esta_mostrando_detalles) {
elemento.esta_mostrando_detalles = false;
}
else {
elemento.esta_mostrando_detalles = true;
}
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar_elemento( lista,
indice ) {try {
lista.splice( indice,
1 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);
const PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <ConstructorDeBasesDeDatosDeCastelog />"
 + "  </div>",
  null,
  null);
const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app\">"
 + "    <router-view></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {
},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"Home",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www/app.calo" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo3/constructor-de-bases-de-datos-de-castelog/src/www/app.calo");