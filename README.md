# Students-Party — quick start 

This project is a Svelte-based web ~~app~~. If you know how a static site works (an `index.html` and some CSS/JS), this README will show the minimal steps to run and edit this project. You don't need prior experience with Node, npm, pnpm, SCSS, or Svelte — just follow the steps below.

## What this repository contains 

- `src/` — the app source code. For simple page content, see `src/routes/+page.svelte`.
- `src/lib/` — shared helpers and components.
- `app.html` (or `src/app.html`) — the HTML template used by the app (similar role to `index.html`).
- `static/` — public files that are copied as-is (images, robots.txt, etc.).
- `package.json` — scripts you can run (we'll use these). You won't normally edit this file.

If you only know `index.html`, think of `app.html` as the project's base HTML file. The content that changes per page is in the `src/routes` files.

## Prerequisites — one-time setup

1. Install Node.js (LTS) from https://nodejs.org/ — pick the Windows installer.
   - This gives you the `node` runtime and the package manager `npm`.
2. (Optional) Install `pnpm` if you prefer it. `pnpm` is a fast package manager. You can also use `npm` if you don't want to install `pnpm`.
   - To install pnpm (one-time):

```powershell
npm install -g pnpm
```

If you don't install `pnpm`, use the `npm` commands shown below instead (they do the same thing). The examples in the commands section will show both where helpful.

## Install dependencies (once)

From the project root (where this `README.md` is), open a terminal (PowerShell) and run either:

```powershell
# with pnpm (recommended if installed)
pnpm install

# or with npm
npm install
```

This downloads the tools the project needs to run (framework code, build tools). It's like downloading libraries for a static site but automated.

## Run the development server (live reload)

After installing dependencies, start the dev server:

```powershell
# with pnpm
pnpm run dev

# or with npm
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173 or similar). When you edit source files, the browser refreshes or updates automatically.

> ~~Note~~
- You will not always edit `index.html` directly. Instead, edit the Svelte files under `src/routes` or components under `src/lib`.
- The development server handles bundling and hot reload so you can focus on the HTML/CSS/JS you change.

## Build for production (create optimized files)

```powershell
# with pnpm
pnpm run build

# or with npm
npm run build
```

After building, you can preview the production output locally:

```powershell
pnpm run preview
# or
npm run preview
```

The build command compiles everything into optimized files ready for deployment.

## Where to edit things 

- Change the page content: `src/routes/+page.svelte` — this is like editing `index.html` but using Svelte's single-file component format.
- Change global HTML template: `app.html` — similar to your site's base `index.html` (head tags, meta, root div).
- Static files (images, fonts): put them in `static/` and reference them by `/path`.
- Shared code/components: `src/lib/`.

Simple example — edit page text

Open `src/routes/+page.svelte` and you'll see a mix of HTML and small Svelte syntax. For a quick change, find the main text and edit it. Save — the browser should update automatically.

If you prefer plain HTML inside a Svelte file, you can add normal tags like `<h1>`, `<p>`, and style them using the `<style>` block.

## A brief note about SCSS (optional)

- SCSS is a CSS extension that adds variables and nesting. If you see `lang="scss"` in a `<style>` tag, it means the file uses SCSS. The dev server compiles SCSS automatically.
- If you don't know SCSS, you can still write plain CSS inside `<style>` blocks and it will work fine.

Example CSS inside a Svelte component:

```svelte
<!-- src/routes/+page.svelte -->
<h1>Hello</h1>
<style>
  h1 { color: rebeccapurple; }
</style>
```

Or, if the file uses SCSS (you'll see `lang="scss"`):

```svelte
<style lang="scss">
  $main-color: rebeccapurple;
  h1 { color: $main-color; }
</style>
```

## Troubleshooting

- If `pnpm install` or `npm install` fails: ensure Node.js is installed and you're running the terminal from the project folder.
- If the dev server doesn't start, check for errors in the terminal — copy them and search online or ask a teammate.
- If the page doesn't update after edits, try refreshing the browser or restarting the dev server.

## Quick checklist (copy-paste)

```powershell
# one-time: install pnpm (optional)
npm install -g pnpm

# install dependencies
pnpm install   # or: npm install

# run dev server
pnpm run dev   # or: npm run dev
```