import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button/button";
import { Link } from "@builder.io/qwik-city";

export const HomeButton = component$(() => {
  return (
    <Link href="/" class="flex w-full items-center justify-center ">
      <Button look="secondary" class="w-full">
        Home
      </Button>
    </Link>
  );
});
