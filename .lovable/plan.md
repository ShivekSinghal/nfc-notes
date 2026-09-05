# New colours, a Tanisha page, and a private admin area

## 1. Colour palettes

Each teacher keeps the same layout but gets a new palette:

- **Manas** — deep red on near-black, still terminal-flavoured with monospace type and the boot lines.
- **Ayushi** — olive green with soft warm neutrals, calm editorial feel.
- **Jhilmil** — light blue, airy and expressive, still lively.
- **Kriti** — unchanged (warm, bright).
- **Tanisha** — new: warm orange, clean and contemporary.

## 2. New Tanisha page

A new page at `/tanisha` with the same five parts (name and subtitle, photo area, the three sections, playful line, thank-you signed Shivek) and placeholder copy you can rewrite. She is also added to the four-card list on the home page (now five cards).

## 3. Private admin area

- New page at `/admin` with an email-and-password sign-in, plus a small, discreet link to it from the home page.
- Once signed in, you get a simple editor: pick a teacher, edit every line of text (subtitle, the three sections, playful line, thank-you), pick a colour direction, upload a photo, and create a brand-new teacher page where you type the web address yourself (e.g. `tanisha`).

### One thing to flag

You chose "keep it in the file" for saving. That means the editor can show and preview your changes on your own device, but they will not appear for anyone tapping a sticker until the text is put back into the project — and photos you upload have nowhere to live, so they would vanish on refresh. A login also needs somewhere to store your account.

So the plan is: turn on Lovable Cloud (built into Lovable, no accounts to create) for the login, the saved text, and photo uploads. Everything then updates live for everyone the moment you hit save, from your phone. If you'd rather not, say so and I'll instead make the admin area a local editor with a "download my content" button that I paste in for you each time.

## Technical notes

- Add `.theme-tanisha` plus recoloured `.theme-manas` (red), `.theme-ayushi` (olive), `.theme-jhilmil` (light blue) token blocks in `src/styles.css`; all values in oklch, no hardcoded colour utilities in components.
- `src/lib/teachers.ts` gains a `tanisha` entry; `slug` type widens to `string` so dynamically created pages work.
- Replace the four static route files with a single dynamic route `src/routes/$slug.tsx` (keeping per-page `head()` metadata generated from the teacher record) so new pages need no new files. The existing `/manas`, `/ayushi`, `/jhilmil`, `/kriti` URLs keep working.
- Enable Lovable Cloud: a `teachers` table (slug, heading, name, subtitle, all copy fields, theme, photo path, sort order) with public read, and write restricted to authenticated admins via a separate `user_roles` table and a `has_role` security-definer function; grants issued alongside RLS. Seed rows for the five existing teachers in the migration.
- Photos: a public storage bucket with authenticated-only writes.
- Admin auth: email/password sign-in at `/auth`, editor under an `_authenticated` gate; the file-based `teachers.ts` stays as the fallback/seed source.
