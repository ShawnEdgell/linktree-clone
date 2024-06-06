import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DiscordButton } from "~/components/buttons/DiscordButton";
import { YouTubeButton } from "~/components/buttons/YouTubeButton";
import { TwitchButton } from "~/components/buttons/TwitchButton";
import { TikTokButton } from "~/components/buttons/TikTokButton";
import { GitHubButton } from "~/components/buttons/GitHubButton";
import { SkatebitButton } from "~/components/buttons/SkatebitButton";
import { StatsButton } from "~/components/buttons/StatsButton";
import { Footer } from "~/components/footer/footer";

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center ">
      <h1 class="mb-4 text-4xl font-bold">@stillmilky</h1>
      <p class="mb-6 text-center text-lg">Email: milky.irl@gmail.com</p>
      <div class="flex w-full max-w-md flex-col gap-3 px-4">
        <DiscordButton />
        <YouTubeButton />
        <TwitchButton />
        <TikTokButton />
        <GitHubButton />
        <SkatebitButton />
        <StatsButton />
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
