import type { Metadata } from "next";
import NewsEventsPage, { metadata as parentMeta } from "../page";

export const metadata: Metadata = {
  ...parentMeta,
  title: "Events | News & Events | Care Packs",
};

export default function EventsSubPage() {
  return <NewsEventsPage />;
}
