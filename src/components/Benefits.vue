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
                <div class="">
                    <div class="benefits__check"></div>
                    <strong>{{ benefit.name }}</strong>
                </div>

                <p class="benefits__body">
                    {{ benefit.body }}
                </p>
            </li>
        </ul>

        <div class="benefits__text">
            {{ profession.perspective }}
        </div>

        <h4 class="benefits__title">Получаемые навыки</h4>
        <span
            v-for="skill in profession.skills"
            :key="skill.name"
            class="benefits__skill"
        >
            {{ skill }}
        </span>
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