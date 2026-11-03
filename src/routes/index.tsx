import { createFileRoute } from "@tanstack/react-router";
import { AlmanacApp } from "@/components/almanac-app";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <AlmanacApp />;
}
