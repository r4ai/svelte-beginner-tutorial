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

<div class="flex flex-row gap-4 px-4 py-3 items-center bg-base-200 rounded-xl">
  <input type="checkbox" bind:checked={done} class="checkbox" />
  <span class={twMerge("flex-1 truncate", done ? "line-through" : "")}>
    {title}
  </span>
  <button
    class="btn btn-sm hover:btn-error btn-circle text-base-content/75 hover:text-base"
    on:click={handleDelete}
  >
    <Trash2 class="p-0.5" />
  </button>
</div>
