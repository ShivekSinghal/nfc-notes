import { createFileRoute } from "@tanstack/react-router";
import { TeacherPage } from "@/components/TeacherPage";
import { getTeacher } from "@/lib/teachers";

const teacher = getTeacher("manas");

export const Route = createFileRoute("/manas")({
  head: () => ({
    meta: [
      { title: "For Manas — a thank-you from Shivek" },
      { name: "description", content: "A small thank-you, delivered by tap." },
      { property: "og:title", content: "For Manas — a thank-you from Shivek" },
      { property: "og:description", content: "A small thank-you, delivered by tap." },
    ],
  }),
  component: () => <TeacherPage teacher={teacher} />,
});
