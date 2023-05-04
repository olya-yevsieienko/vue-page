<template>
    <footer class="footer">
        <span>OwlTop © 2020 - {{ nowYear }} Все права защищены  </span>

        <div class="footer__links">
            <span>
                Пользовательское соглашение
            </span>
            <span>
                Политика конфиденциальности
            </span>
        </div>
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
