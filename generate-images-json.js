const fs = require('fs');
const path = require('path');

console.log('Skript startet...');

// Ordner mit Bildern
const folderPath = path.join(__dirname, 'images');

// Alle Dateien im Bilder-Ordner lesen
const files = fs.readdirSync(folderPath);
console.log('Gefundene Dateien:', files);

// Nur Bild-Dateien behalten
const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
console.log('Gefilterte Bild-Dateien:', imageFiles);

// JSON erstellen mit Key "images"
const jsonOutput = { images: imageFiles.map(file => `images/${file}`) };
console.log('JSON Inhalt:', jsonOutput);

// In images.json speichern
fs.writeFileSync(path.join(__dirname, 'images.json'), JSON.stringify(jsonOutput, null, 2));
console.log('images.json erfolgreich erstellt!');
