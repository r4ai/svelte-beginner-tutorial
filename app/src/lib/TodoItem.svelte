<script lang="ts">
  import { todos } from "./store";
  import { Trash2 } from "lucide-svelte";
  import { twMerge } from "tailwind-merge";

  export let title: string;
  export let done: boolean;

  $: todos.edit(title, {
    title,
    done,
  });

  const handleDelete = () => {
    todos.remove(title);
  };
</script>

<div class="flex flex-row items-center gap-4 rounded-xl bg-base-200 px-4 py-3">
  <input type="checkbox" bind:checked={done} class="checkbox" />
  <span class={twMerge("flex-1 truncate", done ? "line-through" : "")}>
    {title}
  </span>
  <button
    class="btn btn-circle btn-sm text-base-content/75 hover:btn-error hover:text-base"
    on:click={handleDelete}
  >
    <Trash2 class="p-0.5" />
  </button>
</div>
