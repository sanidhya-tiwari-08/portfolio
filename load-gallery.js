// Gallery Image Loader Script
// This script helps load images from the work directory
// Run this with Node.js: node load-gallery.js

const fs = require('fs');
const path = require('path');

const workDir = path.join(__dirname, 'work');
const outputFile = path.join(__dirname, 'gallery-images.json');

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
// Supported document extensions
const documentExtensions = ['.pdf'];

function getFilesFromDirectory(dir) {
    const files = [];
    
    if (!fs.existsSync(dir)) {
        console.log(`Directory ${dir} does not exist. Creating it...`);
        fs.mkdirSync(dir, { recursive: true });
        return files;
    }
    
    const fileList = fs.readdirSync(dir);
    
    fileList.forEach(file => {
        const filePath = path.join(dir, file);
        const ext = path.extname(file).toLowerCase();
        
        if (imageExtensions.includes(ext) || documentExtensions.includes(ext)) {
            const stats = fs.statSync(filePath);
            if (stats.isFile()) {
                const isPDF = documentExtensions.includes(ext);
                files.push({
                    src: `work/${file}`,
                    type: isPDF ? 'pdf' : 'image',
                    title: path.parse(file).name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                    description: isPDF ? `PDF document: ${path.parse(file).name}` : `Work sample: ${path.parse(file).name}`
                });
            }
        }
    });
    
    return files.sort((a, b) => a.src.localeCompare(b.src));
}

// Generate gallery files JSON
const files = getFilesFromDirectory(workDir);
fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));

const imageCount = files.filter(f => f.type === 'image').length;
const pdfCount = files.filter(f => f.type === 'pdf').length;

console.log(`Found ${files.length} files in ${workDir} (${imageCount} images, ${pdfCount} PDFs)`);
console.log(`Gallery data saved to ${outputFile}`);
console.log('\nFiles found:');
files.forEach((file, index) => {
    console.log(`${index + 1}. ${file.src} [${file.type.toUpperCase()}]`);
});

if (files.length === 0) {
    console.log('\n💡 Tip: Add your work files (JPG, PNG, GIF, WEBP, PDF) to the work/ directory');
    console.log('   Then run this script again to update the gallery.');
}

