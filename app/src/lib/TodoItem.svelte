<script lang="ts">
  let isChecked = false;
</script>

<div>
  <input type="checkbox" bind:checked={isChecked} />
  <span style={`text-decoration: ${isChecked ? "line-through" : "none"};`}>
    ToDo 1
  </span>
</div>
