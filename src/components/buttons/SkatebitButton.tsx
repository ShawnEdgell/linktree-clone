import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button/button";

export const SkatebitButton = component$(() => {
  return (
    <a
      href="https://skatebit.vercel.app/"
      target="_blank"
      class="flex w-full items-center justify-center "
    >
      <Button look="primary" class="w-full">
        Skatebit (Modding Website)
      </Button>
    </a>
  );
});
