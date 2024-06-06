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
          href="https://firebasestorage.googleapis.com/v0/b/stillmilkylive.appspot.com/o/Milky_FishyStats.zip?alt=media&token=305d8e75-3569-43f3-b074-3ad615560e4e"
          class="flex w-full items-center justify-center gap-2"
        >
          <Button look="alert" class="w-full">
            Fishy Stats (Latest)
          </Button>
        </a>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/stillmilkylive.appspot.com/o/Milky_SharkyStats.zip?alt=media&token=3d4abf7d-3f01-4393-8490-ae2e230ab29f"
          class="flex w-full items-center justify-center gap-2"
        >
          <Button look="alert" class="w-full">
            Sharky Stats
          </Button>
        </a>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/stillmilkylive.appspot.com/o/Milky_FroggyStats.zip?alt=media&token=0179b9fd-3d9c-4c36-a487-184c64644fb0"
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
