<template>
    <div class="search">
        <input
          type="text"
          class="search__input"
          placeholder="Поиск..."
        >
        <div class="search__img"></div>
    </div>
</template>

<script>
export default {
    name: 'my-search'
}
</script>

<style scoped>
.search {
    position: relative;
    display: block;
    width: 230px;
}
.search__input {
    padding: 7px 15px;
    font-family: inherit;
    font-size: 16px;
    border: none;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    outline: none;
}
::placeholder {
    color: var(--search);
}
.search__img {
    position: absolute;
    top: 3px;
    right: -27px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: var(--border-radius);
    background: var(--violet);
}
.search__img::after {
    content: url('../../assets/image/search.svg');
    width: 15px;
    height: 15px;
}
</style>