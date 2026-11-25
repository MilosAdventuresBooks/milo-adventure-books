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
- The `cover-*.jpg` pictures are cut from the FINAL cover wraps by `_tools/website_covers.py` (run it from the repo root; update the wrap paths in its `COVERS` list when a FINAL cover changes). 13 Nov 2026: AW, CB, 4S, FA framed covers and AD from its FINAL.
- Live with a Books2Read link (13 Nov 2026): AW https://books2read.com/u/Lrarz0, AD https://books2read.com/u/5O2ON7. Still "Coming soon": CB, 4S, FA, FL.
- The scrolling page strips use the `pv-*.jpg` files, made by `_tools/website_previews.py` (run it from the repo root to remake them after a page changes).
- Line art is never shown as a whole page: each line-art preview is a collage of three close-ups (the `CROPS` list in the script). Coloured pages and key pages are shown whole.
- Each preview has a bigger copy (`pv-*-lg.jpg`) that opens when it is clicked (`site.js`).
- 25 Nov 2026: Colouring Animals of the World for Adults (AN) added as "Coming soon" on `colouring-for-adults.html` (after Magic Moments) and on the home page grown-ups shelf: `cover-an-animals-of-the-world.jpg` + `th-an-*` from the local cover wrap front, `pv-an-*` close-ups of the tree frog, grey wolf and octopus (no cover pictures), their colour keys, and the four Where It Lives key pages, all from the local interior build. Add AN to OTHER_BOOKS in `_tools/website_picture_book_pages.py` before rerunning it.
- 22 Nov 2026: MFL strip now shows all three answer-key pages (`pv-mfl-key51/52/53`, one shared crop box) and two 2x2 coloured tiles (`pv-mfl-g00/g01`), pushed live (470c631); old `pv-mfl-key1` removed.
- 22 Nov 2026: MFL cover changed to the Sky Islands front: `cover-mfl-dream-lands-v2.jpg` (new name, browsers cache), alt text updated, old cover removed, pushed live (02ab978).
- 22 Nov 2026: Four Seasons cover changed to the maple tree: `cover-4s-four-seasons-maple.jpg` + `th-4s-four-seasons-maple.jpg` (new names), alt text new, 48 pictures, old files removed, pushed live (867a181).
- 22 Nov 2026: source folder levelled with live again (3 pages + 33 images copied from live, this note copied to live); hash-compare both ways first, other sessions push live directly.
- 19 Nov 2026: Milo's Dream Lands (MFL) added as "Coming soon" on `colouring-for-kids.html`, pushed live (f2197b7): `cover-mfl-dream-lands.jpg` and `pv-mfl-*.jpg` from `_tools/website_previews_mfl.py` (close-ups avoid Milo's and Dog's hiding places). This copy of the page now matches the live one (it also carries the TAW block, whose pictures were uploaded from another branch).
- 21 Nov 2026 (PR #67): this folder brought level with the live site. The live clone had run ahead (FF, FW, MM and TAW previews, even key pages, cleaned-up FL previews, the caption-width rule), so copying this folder over the live site would have rolled it back. Before any push, hash-compare both ways and copy only what is newer. Same day: the kids page Dream Lands strip was closed properly (it had swallowed both Flowers books and squashed their covers), and strips of 6+ pages scroll.
