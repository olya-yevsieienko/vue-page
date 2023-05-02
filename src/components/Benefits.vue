<template>
    <div class="benefits">
        <h4 class="benefits__title">
            Преимущества
        </h4>

        <ul class="benefits__list">
            <li
                v-for="benefit in profession.benefits"
                :key="benefit.name"
                class="benefits__list-item"
            >
                <span class="benefits__check"></span>

                <div class="">
                    <strong>{{ benefit.name }}</strong>
                    <p class="">
                        {{ benefit.body }}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        profession: {
            type: Object,
            required: true
        }
    }
}
</script>