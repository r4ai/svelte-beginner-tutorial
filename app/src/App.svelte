<script lang="ts">
  import "modern-css-reset";
  import NavBar from "./lib/NavBar.svelte";
</script>

<main>
  <NavBar />
  <div>
    <h2>ToDo List</h2>
    <div>
      <div>
        <input type="checkbox" />
        <span>ToDo 1</span>
      </div>
      <div>
        <input type="checkbox" />
        <span>ToDo 2</span>
      </div>
      <div>
        <input type="checkbox" />
        <span>ToDo 3</span>
      </div>
    </div>
    <div>
      <input type="text" placeholder="Add a new ToDo" />
      <button>Add</button>
    </div>
  </div>
</main>

<style>
</style>
