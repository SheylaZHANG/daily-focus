# Daily Focus

React, TypeScript, and Vite prototype of the Daily Focus frames in the supplied Figma Home file (19:80 and 19:115). Fonts are bundled locally through @fontsource/inter.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

Windows users can also run `./run.ps1` or `./build.ps1` after installing dependencies. These launchers use Node.js directly and can fall back to the bundled Codex runtime on computers where it is available. If PowerShell blocks scripts, invoke `powershell -ExecutionPolicy Bypass -File ./run.ps1` (or `./build.ps1`).

Open the localhost URL printed by Vite. Click a task or use Tab and Enter/Space to toggle it. Progress and completion styling update immediately. Reset demo restores the initial two completed tasks.

```sh
npm run build
npm run preview
```

The supplied design defines a 390 × 844 mobile screen. Wider windows retain its centered width; narrower screens fit the available width and allow content to wrap. No additional desktop design was supplied. The date is intentionally the date shown in Figma. State resets on page reload.
