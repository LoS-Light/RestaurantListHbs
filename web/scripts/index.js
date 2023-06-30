const buttonSearch = document.getElementById("button-search");
buttonSearch.addEventListener("click", (event) => {
    const inputSearch = document.getElementById("input-search");
    const keyword = inputSearch.value.trim();
    if (!keyword) {
        event.preventDefault();
    }
});