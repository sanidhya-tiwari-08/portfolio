# Portfolio Website - Sanidhya Tiwari

## 📁 Directory Structure

```
f:\portfolio\
├── portfolio.html          # Main portfolio HTML file
├── gallery-images.json     # Gallery images configuration (auto-generated)
├── load-gallery.js         # Script to auto-generate gallery from images
└── work\                   # Place your work images here
    ├── image1.jpg
    ├── image2.png
    └── ...
```

## 🚀 Getting Started

1. **Open the Portfolio**
   - Open `portfolio.html` in your web browser
   - For best results, use a local web server (see below)

2. **Add Your Work Images**
   - Place your work images (JPG, PNG, GIF, WEBP) in the `work\` folder
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`

3. **Generate Gallery**
   - Open terminal in the `f:\portfolio\` directory
   - Run: `node load-gallery.js`
   - This will scan the `work\` folder and update `gallery-images.json`

4. **Refresh the Portfolio**
   - Refresh your browser to see the new images in the gallery

## 🖼️ Gallery Features

- **Automatic Image Detection**: The `load-gallery.js` script automatically finds all images in the `work\` folder
- **Lightbox View**: Click any image to view it in fullscreen with navigation
- **Responsive Design**: Gallery adapts to different screen sizes
- **Smooth Animations**: Images fade in with staggered animations

## 📝 Manual Gallery Configuration

If you prefer to manually configure the gallery, edit `gallery-images.json`:

```json
[
  {
    "src": "work/my-image.jpg",
    "title": "Campaign Creative",
    "description": "Marketing campaign design for client X"
  },
  {
    "src": "work/another-image.png",
    "title": "Press Release",
    "description": "Media communication piece"
  }
]
```

## 🌐 Running with a Local Server

For the gallery to work properly (loading JSON files), use a local web server:

### Option 1: Python
```bash
# Python 3
cd f:\portfolio
python -m http.server 8000

# Then open: http://localhost:8000/portfolio.html
```

### Option 2: Node.js (http-server)
```bash
npm install -g http-server
cd f:\portfolio
http-server

# Then open: http://localhost:8080/portfolio.html
```

### Option 3: VS Code Live Server
- Install "Live Server" extension in VS Code
- Right-click on `portfolio.html` and select "Open with Live Server"

## 🎨 Customization

The portfolio uses CSS variables for easy theming. Edit the `:root` section in `portfolio.html` to change colors:

```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Secondary color */
    --accent-color: #ec4899;     /* Accent color */
    --light-bg: #ffffff;         /* Background */
    --text-dark: #1e293b;        /* Text color */
}
```

## 📱 Features

- ✅ Light theme design
- ✅ Responsive layout
- ✅ Smooth scroll animations
- ✅ Interactive timeline
- ✅ Skills showcase
- ✅ Work gallery with lightbox
- ✅ Contact information
- ✅ Professional animations

## 🔧 Requirements

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Node.js (optional, for auto-generating gallery)
- Local web server (recommended for gallery functionality)

## 📞 Support

For issues or questions, contact: tsanidhya01@gmail.com

