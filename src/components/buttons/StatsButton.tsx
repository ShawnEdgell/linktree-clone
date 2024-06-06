import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button/button";
import { Link } from "@builder.io/qwik-city";

export const StatsButton = component$(() => {
  return (
    <Button look="secondary" class="w-full">
      <Link href="/stats" class="flex w-full items-center justify-center gap-2">
        Stats & Settings
      </Link>
    </Button>
  );
});
