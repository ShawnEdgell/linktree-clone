import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="mt-8 text-center text-sm text-gray-600">
      <p>© {currentYear} stillmilky. All rights reserved.</p>
      <p>
        Made by{" "}
        <a
          href="https://github.com/ShawnEdgell/linktree-clone"
          class="text-blue-800 hover:underline"
        >
          Milky
        </a>
      </p>
    </footer>
  );
});
