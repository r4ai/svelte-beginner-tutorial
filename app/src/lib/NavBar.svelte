<div class="navBar">
  <a href="/">
    <h1>Svelte ToDo</h1>
  </a>
</div>

<style>
  .navBar {
    border-bottom: 1px solid var(--default-gray-400, #9ca3af);
    background: var(--default-gray-400, #9ca3af);
    display: flex;
    padding: 0.5rem 1rem;
  }

  h1 {
    color: var(--default-gray-800, #1f2937);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.1s ease-in-out;
  }

  a:hover {
    text-decoration: underline;
    background-color: var(--default-gray-300, #d1d5dba9);
  }
</style>
