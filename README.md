# Jammeh AsSalaam Moving

Local Next.js recreation of https://jammeh-moving.blackwood4884.chatgpt.site/.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. The development command uses Webpack to avoid a macOS Turbopack file-watcher failure in restricted environments. If your environment restricts native file watching, use `WATCHPACK_POLLING=true npm run dev`.

## Production

```sh
npm run build
npm start
```

## Structure

- `app/page.tsx`: page content, mobile navigation, and FAQ controls.
- `app/move-planner.tsx`: local move summary, clipboard copy, text download, and editing.
- `app/globals.css`: original responsive styling.
- `public/`: locally hosted reference image and favicon.

The planner does not transmit information or book a move. Data remains in browser memory and clears on reload. Returning to edit preserves entered details.
