import { createFileRoute, Link } from "@tanstack/react-router";
import { teachers } from "@/lib/teachers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thank You, Teachers — from Shivek" },
      { name: "description", content: "A small thank-you, delivered by tap." },
      { property: "og:title", content: "Thank You, Teachers — from Shivek" },
      { property: "og:description", content: "A small thank-you, delivered by tap." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-5 py-16 text-foreground">
      <main className="w-full max-w-md">
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span aria-hidden>✦</span> Tap brought you here <span aria-hidden>✦</span>
        </p>
        <h1 className="mt-4 text-center text-2xl font-semibold tracking-tight">
          Four small thank-yous
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Each card opens one teacher's page.
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-3">
          {teachers.map((t) => (
            <li key={t.slug}>
              <Link
                to={`/${t.slug}`}
                className={`${t.themeClass} flex h-24 flex-col items-center justify-center gap-1 rounded-2xl border bg-card text-card-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-ring`}
              >
                <span className="font-display text-lg font-semibold">
                  {t.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Open page
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Made with gratitude — Shivek
        </p>
      </main>
    </div>
  );
}
