const listners = (() => {
  // get entered value from text area
  function getText() {
    const textBar = document.getElementById('search-me');
    return textBar.value;
  }
})();

export default listners;
