<script lang="ts">
  export let title: string;

  let isChecked = false;
</script>

<div>
  <input type="checkbox" bind:checked={isChecked} />
  <span style={`text-decoration: ${isChecked ? "line-through" : "none"};`}>
    {title}
  </span>
</div>
