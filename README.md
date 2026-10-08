# Weatheria

Weatheria is a lightweight weather dashboard built with JavaScript and bundled with Webpack. It fetches real-time weather data for a user-entered city using the Visual Crossing Weather API and displays the current temperature, humidity, wind speed, and weather condition with dynamic icons.

![Weatheria Preview](/src/preview.png)

## Live Demo

[Click Here](https://rajatthedev.github.io/Weatheria/)

## Features

- Search for weather by city name
- Displays current temperature and "feels like" temperature
- Shows humidity and wind speed
- Uses weather condition-specific icons
- Includes a loading state while fetching data
- Responsive single-page layout with a clean weather card UI

## Tech Stack

- HTML
- CSS
- JavaScript
- Webpack
- Visual Crossing Weather API

## Prerequisites

- Node.js and npm installed
- A browser to view the app

## Installation

1. Clone the repository:

```bash
git clone https://github.com/RajatTheDev/Weatheria.git
cd Weatheria
```

2. Install dependencies:

```bash
npm install
```

## Running the App

### Development mode

```bash
npm run dev
```

This starts the Webpack dev server and opens the app in the browser.

### Production build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment

The project includes a deploy script for GitHub Pages:

```bash
npm run deploy
```

## Contributing

Contributions are welcome! If you have ideas for improvement or want to add features, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT license.
