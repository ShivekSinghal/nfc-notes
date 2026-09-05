# Teacher's Tribute Tap

Build a polished mobile-first NFC gift microsite for four teachers: Manas, Ayushi, Jhilmil, and Kriti. Create four public routes: /manas, /ayushi, /jhilmil, /kriti, all powered by one reusable React/TypeScript component and simple data config so text/photos can be edited quickly. Keep it extremely simple, fast-loading, and beautiful on iPhone/Android because the pages will open from NFC stickers.

Each route should show only one vertically scrolling screen with: (1) teacher name and a short personalized subtitle, (2) a hero area with an elegant placeholder for one photo, (3) three compact sections titled exactly: “Something you taught me”, “Something I’ll always remember”, and “Something I probably never said”, (4) a small playful/funny line, and (5) a short closing “Thank you” message signed — Shivek. No login, no database, no navigation menu, no complex animations.

Personalize the visual identity per teacher while preserving the same structure:
- Manas: dark terminal/tech aesthetic, subtle monospace accents, heading “MANAS.exe”, tiny boot/status details; playful line: “Things Manas successfully debugged: Technology ✅ Hashtag problems ✅ Shivek ❌”.
- Ayushi: elegant warm editorial feel, soft neutral background, refined typography, calm and sincere.
- Jhilmil: expressive artistic/dance-forward feel, sophisticated but lively.
- Kriti: warm, bright, affectionate, clean and contemporary.

Use tasteful placeholder copy that I can replace later, but make the final screen feel complete. Add a very small “Tap brought you here ✦” or NFC-inspired micro-label near the top so the NFC magic is acknowledged without dominating the page. Do not add buttons unless needed. Make sure long text wraps well and page looks premium at 390px width. Include a simple landing route / that shows four small cards linking to each teacher page for testing, but the individual NFC links should feel standalone.

Design quality: premium, minimal, emotional, not cheesy. Use Tailwind/shadcn as needed. Ensure accessibility and fast performance. Give me a working preview.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9094d5e9-4160-4098-98d7-3fb9536b93fe).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
