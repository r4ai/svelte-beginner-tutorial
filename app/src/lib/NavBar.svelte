<script lang="ts">
  import { Github, Moon, Sun } from "lucide-svelte";

  let isDarkmode = localStorage.getItem("isDarkmode") === "true";

  $: {
    if (isDarkmode) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("isDarkmode", "true");
    } else {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("isDarkmode", "false");
    }
  }
</script>

<header class="bg-base-300">
  <div class="navbar mx-auto max-w-2xl bg-base-300">
    <div class="flex-1">
      <a
        class="btn btn-ghost rounded-full text-xl normal-case"
        href="https://github.com/r4ai/svelte-beginner-tutorial"
      >
        <Github />
        Svelte ToDo
      </a>
    </div>
    <div>
      <label class="btn btn-ghost swap swap-rotate rounded-full">
        <input
          type="checkbox"
          bind:checked={isDarkmode}
          aria-label={`Switch to ${isDarkmode ? "light" : "dark"} mode`}
        />
        <Sun class="swap-on fill-current" />
        <Moon class="swap-off fill-current" />
      </label>
    </div>
  </div>
</header>
