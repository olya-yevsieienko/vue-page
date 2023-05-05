<template>
    <footer class="footer">
        <span>OwlTop © 2020 - {{ nowYear }} Все права защищены  </span>

        <ul class="footer__links-list">
            <li class="footer__link">
                Пользовательское соглашение
            </li>
            <li class="footer__link">
                Политика конфиденциальности
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    computed: {
        nowYear() {
            return new Date().getFullYear();
        }
    }
}
</script>
