<template>
    <div class="vacancies">
        <h4 class="vacancies__title">Вакансии - Photoshop</h4>

        <div class="vacancies__block">
            <div class="vacancies__total">
                <span class="vacancies__name">Всего вакансий</span>
                <span class="vacancies__total-value">
                    {{ profession.vacanciesTotal }}
                </span>
            </div>

            <ul class="vacancies__list">
                <li
                    v-for="vacancy in profession.vacanciesPrice"
                    :key="vacancy.complexity"
                    class="vacancies__list-item"
                >
                    <span class="vacancies__name">{{ vacancy.name }}</span>
                    <span class="vacancies__price">{{ vacancy.price }}</span>
                    <div class="vacancies__complexity">
                        <span
                            v-for="n in vacancy.complexity"
                            :key="n"
                            class="vacancies__complexity-icon"
                        />
                        <span
                            v-for="n in (3 - vacancy.complexity)"
                            :key="n"
                            class="vacancies__complexity-icon--disabled"
                        />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        profession: {
            type: Object,
            required: true,
        }
    },
}
</script>