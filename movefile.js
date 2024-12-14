const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Rutas preestablecidas
const predefinedPaths = {
    btnLoki: path.join(__dirname, 'src', 'styles', 'module', '_btnLoki.module.scss'),
    // Agrega más rutas aquí según sea necesario
};

// Ruta de destino fija relativa al proyecto que usa el módulo
const destinationDir = path.join(__dirname, '..', '..', 'src', 'sass', 'module');
const styleFilePath = path.join(__dirname, '..', '..', 'src', 'sass', '_style.module.scss');


// Función para copiar un archivo de un punto A a un punto B
function copyFile(from, to) {
    fs.copyFileSync(from, to);
    console.log(`Archivo copiado de ${from} a ${to}`);
}

// Función para actualizar el archivo _style.module.scss
function updateStyleFile(importPath) {
    const importStatement = `@import "${importPath}";\n`;
    let content = '';

    // Leer el contenido existente del archivo
    if (fs.existsSync(styleFilePath)) {
        content = fs.readFileSync(styleFilePath, 'utf8');
    }

    // Agregar la nueva ruta de importación al contenido existente
    content += importStatement;

    // Escribir el contenido actualizado de vuelta al archivo
    fs.writeFileSync(styleFilePath, content, 'utf8');
    console.log(`Archivo ${styleFilePath} actualizado con: ${importStatement}`);
}

// Configura readline para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Muestra las opciones al usuario
console.log('Opciones disponibles:');
Object.keys(predefinedPaths).forEach(key => {
    console.log(`- ${key}`);
});

// Pregunta al usuario por la opción
rl.question('Introduce la opción del archivo a copiar: ', (option) => {
    const from = predefinedPaths[option];
    if (!from) {
        console.error('Opción no válida');
        rl.close();
        return;
    }

    const fileName = path.basename(from);
    const to = path.join(destinationDir, fileName);

    // Verifica si el directorio de destino existe, si no, créalo
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
    }

    // Verifica si el archivo ya existe en el destino
    if (fs.existsSync(to)) {
        console.log(`El archivo ${fileName} ya existe en el destino.`);
    } else {
        try {
            copyFile(from, to);
            // Actualiza el archivo _style.module.scss con la nueva ruta de importación
            const relativeImportPath = `./module/${fileName}`;
            updateStyleFile(relativeImportPath);
        } catch (error) {
            console.error('Error al copiar el archivo', error);
        }
    }
    rl.close();
});