import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button/button";

export const TwitchButton = component$(() => {
  return (
    <a
      href="https://www.twitch.tv/stillmilky"
      target="_blank"
      class="flex w-full items-center justify-center "
    >
      <Button look="primary" class="w-full">
        <svg
          fill="#000000"
          viewBox="-0.5 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 h-5 w-5"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="m11.481 6.259v6.259h-2.091v-6.259zm5.74 0v6.259h-2.091v-6.259zm0 10.962 3.649-3.663v-11.467h-17.221v15.13h4.702v3.13l3.13-3.13zm5.74-17.221v14.61l-6.259 6.259h-4.702l-3.13 3.13h-3.13v-3.129h-5.74v-16.702l1.572-4.168z"></path>
          </g>
        </svg>
        Twitch
      </Button>
    </a>
  );
});
