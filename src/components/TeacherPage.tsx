import type { TeacherConfig } from "@/lib/teachers";

function NfcBadge() {
  return (
    <p className="flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      <span aria-hidden>✦</span> Tap brought you here <span aria-hidden>✦</span>
    </p>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm">
      <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed break-words">{body}</p>
    </section>
  );
}

export function TeacherPage({ teacher }: { teacher: TeacherConfig }) {
  return (
    <div
      className={`${teacher.themeClass} min-h-dvh bg-background font-body text-foreground antialiased`}
    >
      <main className="mx-auto flex w-full max-w-md flex-col gap-8 px-5 pt-10 pb-16">
        <NfcBadge />

        <header className="flex flex-col gap-3 text-center">
          <h1 className="font-display text-4xl font-semibold tracking-tight break-words">
            {teacher.heading}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {teacher.subtitle}
          </p>
          {teacher.statusLines && (
            <div
              aria-hidden
              className="mx-auto mt-1 w-full max-w-xs rounded-lg border bg-muted px-4 py-3 text-left font-mono text-[11px] leading-relaxed text-muted-foreground"
            >
              {teacher.statusLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          )}
        </header>

        <figure>
          {teacher.photoSrc ? (
            <img
              src={teacher.photoSrc}
              alt={`Photo of ${teacher.name}`}
              className="aspect-[4/5] w-full rounded-2xl border object-cover shadow-md"
              loading="lazy"
            />
          ) : (
            <div
              role="img"
              aria-label={`Photo of ${teacher.name} coming soon`}
              className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed bg-muted text-muted-foreground"
            >
              <span aria-hidden className="text-3xl">
                ✦
              </span>
              <p className="text-xs uppercase tracking-[0.2em]">
                A photo of {teacher.name} goes here
              </p>
            </div>
          )}
        </figure>

        <div className="flex flex-col gap-4">
          <Section title="Something you taught me" body={teacher.taught} />
          <Section
            title="Something I’ll always remember"
            body={teacher.remember}
          />
          <Section
            title="Something I probably never said"
            body={teacher.neverSaid}
          />
        </div>

        <p className="rounded-xl bg-accent px-5 py-4 text-center text-sm font-medium leading-relaxed text-accent-foreground">
          {teacher.playful}
        </p>

        <footer className="flex flex-col gap-3 text-center">
          <p className="text-[15px] leading-relaxed">{teacher.thankYou}</p>
          <p className="font-display text-lg font-semibold">
            — Shivek
          </p>
        </footer>
      </main>
    </div>
  );
}
