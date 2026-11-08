# Putting the website online

This folder is the one website for every book (author 2026-11-08): Milo's picture books, the colouring books for kids and the colouring books for adults. It lives at **https://milosadventuresbooks.github.io/milo-adventure-books/** (the GitHub repository `milo-adventure-books`), the address in the Instagram and Pinterest bios.

1. Open the `milo-adventure-books` repository on GitHub.
2. Choose **Add file > Upload files**. Drag in everything in this folder except this UPLOAD.md. Files with the same name are replaced; that is fine.
3. **Commit changes**, wait about two minutes, then open the address above.
4. Delete the old files the site no longer uses (an upload never removes anything). Several are whole line-art pages that anyone could still open and print. The easy way: on the repository page press the **.** key, which opens the files in an editor in the browser. In the file list on the left, click the first one, hold **Cmd** and click the rest, right-click, **Delete**. Then open the **Source Control** tab (the branch icon), type a message and press **Commit & Push**. The files to delete:
   - `fl-ice-palace-colour.jpg`, `fl-ice-palace-line.jpg`, `hero.jpg`, `milo.jpg`
   - `pv-ad-03a.jpg` to `pv-ad-06b.jpg` (8 files) and `pv-fl-03a.jpg` to `pv-fl-06b.jpg` (8 files)
   - `pv-aw-03a.jpg` to `pv-aw-09b.jpg` (14 files)
   - `pv-cb-03.jpg` to `pv-cb-08.jpg`, `pv-4s-03.jpg` to `pv-4s-08.jpg` (6 each) and `pv-fa-03.jpg` to `pv-fa-06.jpg` (4)
   Rule of thumb: in the repository, keep only the files that are in this folder; anything else can go.

Keep `privacy.html` in the repository: Google's YouTube uploader approval links to it, and the footer of `index.html` links to it.

## Afterwards
- The site has four pages sharing `style.css`: `index.html` (the three cards), `picture-books.html`, `colouring-for-kids.html` and `colouring-for-adults.html`.
- When a book goes live, Claude finds its Books2Read link with Playwright and swaps its "Coming soon" for "Find it on Amazon" on its section page. Upload that page again.
- A domain like miaprinsloo.com can be added later under **Settings > Pages > Custom domain**.
- The scrolling page strips use the `pv-*.jpg` files, made by `_tools/website_previews.py` (run it from the repo root to remake them after a page changes).
- Line art is never shown as a whole page: each line-art preview is a collage of three close-ups (the `CROPS` list in the script). Coloured pages and key pages are shown whole.
- Each preview has a bigger copy (`pv-*-lg.jpg`) that opens when it is clicked (`site.js`).
