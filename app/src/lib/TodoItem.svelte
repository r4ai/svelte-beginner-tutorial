<script lang="ts">
  import { Trash2 } from "lucide-svelte";

  export let id: number;
  export let title: string;
  export let completed: boolean;
  export let deleteTodo: (id: number) => void;
</script>

<div class="flex flex-row items-center gap-4 rounded-xl bg-base-200 px-4 py-3">
  <input type="checkbox" bind:checked={completed} class="checkbox" />
  <span class="flex-1 truncate {completed ? 'line-through' : ''} ">
    {title}
  </span>
  <button
    class="btn btn-circle btn-sm text-base-content/75 hover:btn-error hover:text-base"
    on:click={() => deleteTodo(id)}
  >
    <Trash2 class="p-0.5" />
  </button>
</div>
