# Pokemon Memory Card Game

A memory card game built with React and TypeScript. Test your memory by clicking on Pokémon cards — each card can only be clicked once!

## Features

- 12 randomly shuffled Pokémon cards
- Score tracking (current score and high score)
- Win modal on completing the game
- Responsive card grid layout
- Pokémon data fetched from the [PokeAPI](https://pokeapi.co/)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:

```bash
npm run dev
```

The game will be available at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

## How to Play

1. Click on any Pokémon card to start
2. Click on different cards to increase your score
3. Avoid clicking the same card twice — this resets your score!
4. Complete all 12 cards without repeating to win
5. Click "Play Again" to restart

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS** - Styling
- **PokeAPI** - Pokémon data
  import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
