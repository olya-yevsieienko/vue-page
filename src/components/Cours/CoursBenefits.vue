<template>
    <div class="benefits">
        <h4 class="benefits__title">Преимущества</h4>

        <ul class="benefits__list">
            <li
                v-for="benefit in cours.benefits"
                :key="benefit.name"
                class="benefits__list-item"
            >
                <span>
                    <span class="benefits__check" />
                    <strong>{{ benefit.name }}</strong>
                </span>

                <p class="benefits__body">
                    {{ benefit.body }}
                </p>
            </li>
        </ul>

        <p class="benefits__text">
            {{ cours.perspective }}
        </p>

        <h4 class="benefits__title">Получаемые навыки</h4>
        <span
            v-for="skill in cours.skills"
            :key="skill.name"
            class="benefits__skill"
        >
            {{ skill }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'CoursBenefits',
    props: {
        cours: {
            type: Object,
            required: true
        }
    }
}
</script>