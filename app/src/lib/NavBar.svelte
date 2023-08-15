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
  <div class="navbar bg-base-300 max-w-2xl mx-auto">
    <div class="flex-1">
      <a
        class="btn btn-ghost normal-case text-xl rounded-full"
        href="https://github.com/r4ai/svelte-beginner-tutorial"
      >
        <Github />
        Svelte ToDo
      </a>
    </div>
    <div>
      <label class="swap swap-rotate btn btn-ghost rounded-full">
        <input type="checkbox" bind:checked={isDarkmode} />
        <Sun class="swap-on fill-current" />
        <Moon class="swap-off fill-current" />
      </label>
    </div>
  </div>
</header>
