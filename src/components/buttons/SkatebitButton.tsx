import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button/button";

export const SkatebitButton = component$(() => {
  return (
    <Button look="primary" class="w-full">
      <a
        href="https://skatebit.vercel.app/"
        target="_blank"
        class="flex w-full items-center justify-center gap-2"
      >
        Skatebit (Modding Website)
      </a>
    </Button>
  );
});
