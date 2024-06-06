import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="mt-8 text-center text-sm text-gray-600">
      <p>© 2024 stillmilky. All rights reserved.</p>
      <p>
        Made by{" "}
        <a
          href="https://github.com/ShawnEdgell/linktree-clone"
          class="text-blue-600 hover:underline"
        >
          Milky
        </a>
      </p>
    </footer>
  );
});
