export interface TeacherConfig {
  slug: "manas" | "ayushi" | "jhilmil" | "kriti";
  /** Big heading, e.g. "MANAS.exe" for the terminal theme */
  heading: string;
  /** Plain name used in card labels / alt text */
  name: string;
  subtitle: string;
  /** Set to a real photo path (e.g. "/images/manas.jpg") to replace the placeholder */
  photoSrc?: string;
  taught: string;
  remember: string;
  neverSaid: string;
  playful: string;
  thankYou: string;
  /** CSS theme class defined in src/styles.css */
  themeClass: string;
  /** Optional tiny status lines shown under the header (used by Manas' terminal theme) */
  statusLines?: string[];
}

export const teachers: TeacherConfig[] = [
  {
    slug: "manas",
    heading: "MANAS.exe",
    name: "Manas",
    subtitle: "Teacher, debugger of chaos, occasional miracle worker.",
    taught:
      "That technology is not magic — it's patience wearing a disguise. You taught me to read the error before fearing it, and to keep going when nothing compiles.",
    remember:
      "The day everything broke right before the deadline, and you just smiled and said \"good, now we learn.\" I did. I still do.",
    neverSaid:
      "Half the things I figured out, I figured out because you refused to just give me the answer. It was annoying. It was perfect.",
    playful:
      "Things Manas successfully debugged: Technology ✅ Hashtag problems ✅ Shivek ❌",
    thankYou:
      "Thank you for every late reply you still sent, every \"try again\" that actually meant \"I believe you can.\"",
    themeClass: "theme-manas",
    statusLines: [
      "$ boot shivek_gratitude --force",
      "> loading memories... OK",
      "> rendering thank_you.txt ... 100%",
    ],
  },
  {
    slug: "ayushi",
    heading: "Ayushi",
    name: "Ayushi",
    subtitle: "For the calm in the chaos, and the kindness in every correction.",
    taught:
      "That doing something well matters more than doing it fast — and that a little grace, offered at the right moment, can change a whole day.",
    remember:
      "The way you noticed when no one else did. One small question, asked at exactly the right time, that I have never forgotten.",
    neverSaid:
      "That on the days I doubted myself the most, your quiet confidence in me was the thing I borrowed to keep going.",
    playful: "Official record holder for most patient person I know. It's not close.",
    thankYou:
      "Thank you for teaching with both rigor and warmth. It is rarer than you know, and I noticed every bit of it.",
    themeClass: "theme-ayushi",
  },
  {
    slug: "jhilmil",
    heading: "Jhilmil",
    name: "Jhilmil",
    subtitle: "For teaching me that expression is a kind of courage.",
    taught:
      "That movement, art, and honesty are all the same language — and that showing up fully is worth more than showing up perfectly.",
    remember:
      "The energy you brought into every room. Rehearsals that ran late, laughter that ran later, and a standard of passion I still chase.",
    neverSaid:
      "That watching you do what you love made me braver about doing what I love. You were proof that it could be done beautifully.",
    playful: "Certified: zero dull moments. Science cannot explain it.",
    thankYou:
      "Thank you for every beat, every correction, every cheer. Some teachers teach subjects. You taught spirit.",
    themeClass: "theme-jhilmil",
  },
  {
    slug: "kriti",
    heading: "Kriti",
    name: "Kriti",
    subtitle: "For the warmth that made everything feel possible.",
    taught:
      "That being good to people and being great at your work are not a trade-off — you were always both, effortlessly.",
    remember:
      "Every time you celebrated a small win like it was a big one. You made progress feel like something worth smiling about.",
    neverSaid:
      "That your encouragement landed deeper than you probably realised. Some of it is still carrying me today.",
    playful: "Warning: prolonged exposure may cause confidence.",
    thankYou:
      "Thank you for the generosity, the patience, and the sunshine. This little page exists because of you.",
    themeClass: "theme-kriti",
  },
];

export function getTeacher(slug: string): TeacherConfig {
  const t = teachers.find((t) => t.slug === slug);
  if (!t) throw new Error(`Unknown teacher: ${slug}`);
  return t;
}
