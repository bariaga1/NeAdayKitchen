# Ne Aday Kitchen

A guided pixel-art cooking tutorial for Habesha cuisine. Walk through **Tsebhi Dorho** or **Classic Beef Tibs** from prep to plate at your own pace.

## Run

```bash
npm install
npm run dev
```

## How it works

Each step is a **guided tutorial card**:

1. Read the instruction and real-world cook time
2. Tap **Start Step** when you're ready
3. Optionally tap **Start Timer** — a kitchen helper that counts down the real duration
4. Tap **Next Step** when you've finished in your kitchen (no forced waiting)

Timers are optional helpers. You always control when to move on.

## Dishes

- **Tsebhi Dorho** (ጸብሒ ዶርሆ) — celebratory chicken stew, ~2+ hours total
- **Classic Beef Tibs** (ቲብስ) — sizzling sautéed beef, ~45 min total

## Stack

- React + TypeScript + Vite
- Pixel CSS (Press Start 2P)

## Adding recipes

Edit `src/data/recipes.ts`. Each step needs `instruction`, `detail`, `durationLabel`, and optional `durationMinutes` for the timer.
