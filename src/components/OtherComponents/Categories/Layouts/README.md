# Layouts Components

This folder contains organized layout components for different product categories. Each layout has its own folder with Vue component and CSS file.

## Folder Structure

```
Layouts/
├── index.js                           # Main export file for all layouts
├── AcousticTilesLayout/
│   ├── index.js                      # Export file for AcousticTilesLayout
│   ├── AcousticTilesLayout.vue       # Vue component
│   └── AcousticTilesLayout.css      # Component styles
├── ArtificialMultiturfLayout/
│   ├── index.js                      # Export file for ArtificialMultiturfLayout
│   ├── ArtificialMultiturfLayout.vue # Vue component
│   └── ArtificialMultiturfLayout.css # Component styles
├── BroadloomCarpetsLayout/
│   ├── index.js                      # Export file for BroadloomCarpetsLayout
│   ├── BroadloomCarpetsLayout.vue    # Vue component
│   └── BroadloomCarpetsLayout.css   # Component styles
└── CarpetTilesLayout/
    ├── index.js                      # Export file for CarpetTilesLayout
    ├── CarpetTilesLayout.vue         # Vue component
    └── CarpetTilesLayout.css         # Component styles
```

## Usage

### Import Individual Layout
```javascript
import AcousticTilesLayout from './Layouts/AcousticTilesLayout';
import ArtificialMultiturfLayout from './Layouts/ArtificialMultiturfLayout';
import BroadloomCarpetsLayout from './Layouts/BroadloomCarpetsLayout';
import CarpetTilesLayout from './Layouts/CarpetTilesLayout';
```

### Import All Layouts
```javascript
import { 
    AcousticTilesLayout, 
    ArtificialMultiturfLayout, 
    BroadloomCarpetsLayout, 
    CarpetTilesLayout 
} from './Layouts';
```

## Benefits

- ✅ **Organized**: Each layout has its own folder
- ✅ **Clean Imports**: No more confusion about which CSS belongs to which component
- ✅ **Maintainable**: Easy to find and update specific layouts
- ✅ **Scalable**: Easy to add new layouts following the same pattern
- ✅ **No Conflicts**: Each component has its own isolated CSS file
