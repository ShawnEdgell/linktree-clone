import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";
import { HomeButton } from "~/components/buttons/HomeButton";
import { Footer } from "~/components/footer/footer";

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center ">
      <h1 class="mb-4 text-4xl font-bold">@stillmilky</h1>
      <p class="mb-6 text-center text-lg">Stats & Settings (Skater XL)</p>
      <div class="flex w-full max-w-md flex-col gap-3 px-4">
        <HomeButton />
        <a
          href="https://damp-limit-8cd1.milky-irl.workers.dev/BasicRealisticSettings.zip"
          class="flex w-full items-center justify-center gap-2"
        >
          <Button look="alert" class="w-full">
            Basic Realistic Stats (Goofy & Regular)
          </Button>
        </a>
        <a
          href="https://damp-limit-8cd1.milky-irl.workers.dev/MilkyLatest.zip"
          class="flex w-full items-center justify-center gap-2"
        >
          <Button look="alert" class="w-full">
            Latest Stats (October 2024)
          </Button>
        </a>
        <a
          href="https://damp-limit-8cd1.milky-irl.workers.dev/Fishy.zip"
          class="flex w-full items-center justify-center gap-2"
        >
          <Button look="alert" class="w-full">
            Fishy Stats
          </Button>
        </a>
        <a
          href="https://damp-limit-8cd1.milky-irl.workers.dev/Sharky.zip"
          class="flex w-full items-center justify-center gap-2"
        >
          <Button look="alert" class="w-full">
            Sharky Stats
          </Button>
        </a>
        <a
          href="https://damp-limit-8cd1.milky-irl.workers.dev/Froggy.zip"
          class="flex w-full items-center justify-center gap-2"
        >
          <Button look="alert" class="w-full">
            Froggy Stats
          </Button>
        </a>
      </div>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Milky's Link Hub",
  meta: [
    {
      name: "description",
      content:
        "Connect with StillMilky, a skateboarding & gaming content creator. Find all social media links in one place.",
    },
    {
      name: "keywords",
      content:
        "Milky, skateboarding, Skater XL, Session, Skate, content creator, social media, linktree, stats, settings",
    },
    {
      name: "author",
      content: "Milky",
    },
  ],
};
