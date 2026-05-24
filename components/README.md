# The Medic Zone - Component System

This directory contains the modular component system for The Medic Zone website.

## Overview

The component system provides reusable, unified design elements across all pages, eliminating duplicate code and ensuring consistent styling.

## Directory Structure

```
components/
├── README.md                 # This file
├── config.js                 # Shared configuration (colors, fonts, site settings)
├── navigation.html           # Unified navigation component
├── footer.html               # Unified footer component
├── head.html                 # Shared head/meta tags (optional template)
├── card.html                 # Reusable card templates
├── modal.html                # Modal/dialog component
├── css/
│   └── unified.css          # Unified styles for all pages
└── js/
    └── loader.js            # Component loader script
```

## Usage

### 1. Include Shared Configuration

Add this to your page's `<head>`:

```html
<script src="../components/config.js"></script>
```

### 2. Include Unified CSS

```html
<link rel="stylesheet" href="../components/css/unified.css" />
```

### 3. Add Navigation Placeholder

In your `<body>`, add:

```html
<div id="nav-placeholder"></div>
```

### 4. Add Footer Placeholder

Before closing `</body>`, add:

```html
<div id="footer-placeholder"></div>
```

### 5. Load Components

At the end of your `<body>`, add:

```html
<script src="../components/js/loader.js"></script>
```

## Component Details

### Navigation Component (`navigation.html`)

- Fixed top navigation bar
- Responsive mobile menu (hamburger toggle)
- Automatic path resolution based on page location
- Highlights current page
- Dark mode compatible

### Footer Component (`footer.html`)

- 4-column grid layout
- Navigation links
- Social media links
- Credits section
- Responsive design

### Card Components (`card.html`)

Template-based card system for:
- Project cards
- Creative work cards
- Blog post cards
- Accordion sections

Usage:
```javascript
const card = window.MedicCards.createCard('project-card-template', {
  title: 'Project Name',
  description: 'Description',
  tags: ['JavaScript', 'HTML']
});
document.getElementById('container').appendChild(card);
```

### Modal Component (`modal.html`)

Reusable modal/dialog system.

Usage:
```javascript
window.MedicModal.open({
  title: 'Modal Title',
  body: '<p>Content goes here</p>',
  buttons: [
    {
      text: 'Close',
      onClick: () => window.MedicModal.close()
    }
  ]
});
```

### Unified CSS (`css/unified.css`)

Contains:
- Global styles
- Carousel/slideshow styles
- Animation keyframes
- Card component styles
- Responsive design utilities
- Dark mode support

## Configuration (`config.js`)

The config file exports `window.MEDIC_CONFIG` containing:

### Tailwind Configuration
```javascript
colors: {
  "medic-pink": "#FFB4D6",
  "medic-hot-pink": "#FF3F9F",
  "medic-light-pink": "#FF96CB",
  "medic-yellow": "#FFF898",
  "medic-dark-bg": "rgb(27, 0, 12.24)",
  "medic-dark-nav": "rgb(63, 0, 31.5)",
  "medic-dark-menu": "rgb(150, 0, 75.7142857143)",
  "medic-dark-yellow": "rgb(101, 94.1359223301, 0)",
  "medic-dark-img": "rgb(255, 27, 130.36)"
}
```

### Site Configuration
```javascript
site: {
  title: "The Medic Zone",
  logo: "pics/marianne gagnamagnid.png",
  ga_id: "G-RTS1Z5XYJ4"
}
```

## Migration Guide

### Converting an Existing Page

1. **Update `<head>` section:**
   - Add Tailwind CSS CDN
   - Add shared config script
   - Add unified CSS
   - Remove Bootstrap if present

2. **Replace navigation:**
   - Delete existing `<nav>` element
   - Add `<div id="nav-placeholder"></div>`

3. **Replace footer:**
   - Delete existing `<footer>` element
   - Add `<div id="footer-placeholder"></div>`

4. **Convert to Tailwind classes:**
   - Replace Bootstrap classes with Tailwind equivalents
   - Use medic-* custom colors from config

5. **Add component loader:**
   - Add `<script src="../components/js/loader.js"></script>` before `</body>`

### Example Before/After

**Before (Bootstrap):**
```html
<div class="card text-bg-info">
  <h3 class="card-header">Title</h3>
  <p class="card-body">Content</p>
</div>
```

**After (Tailwind + Components):**
```html
<section class="bg-white dark:bg-gray-800 border-2 border-medic-hot-pink rounded-lg p-6 shadow-lg">
  <h3 class="text-2xl font-bold mb-4 text-medic-hot-pink dark:text-medic-light-pink">
    Title
  </h3>
  <p class="text-gray-700 dark:text-gray-300">Content</p>
</section>
```

## Design System

### Color Usage

- **Primary:** `medic-hot-pink` - Main brand color, buttons, headers
- **Secondary:** `medic-pink` - Background, accents
- **Accent:** `medic-yellow` - Highlights, hover states
- **Light:** `medic-light-pink` - Subtle backgrounds, hover states

### Typography

- **Heading Font:** `font-epunda` (Epunda Slab)
- **Code Font:** `font-sharetechmono` (Share Tech Mono)

### Spacing

- Use Tailwind's spacing scale: `p-4`, `m-6`, `gap-8`, etc.
- Standard section spacing: `mb-8`
- Standard padding: `p-6`

### Borders

- Standard border: `border-2 border-medic-hot-pink dark:border-medic-dark-img`
- Rounded corners: `rounded-lg`

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Dark mode support via `prefers-color-scheme`

## Performance

- Components loaded asynchronously
- Minimal JavaScript dependencies
- CSS delivered via single unified file
- Tailwind CDN for rapid prototyping (consider build step for production)

## Future Enhancements

- [ ] Build process for Tailwind (reduce file size)
- [ ] Component lazy loading
- [ ] Dark mode toggle button
- [ ] Animation library integration
- [ ] More card variants
- [ ] Form components
- [ ] Toast notification system

## Maintenance

When updating components:
1. Edit the component file in `/components/`
2. Changes automatically apply to all pages using that component
3. No need to update individual pages

## Support

For issues or questions about the component system, check:
- This README
- Component source code (well-commented)
- Main site: https://medicmedic.github.io
