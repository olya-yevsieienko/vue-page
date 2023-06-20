<template>
    <div class="vacancies">
        <h3 class="vacancies__title">Вакансии - Photoshop</h3>

        <div class="vacancies__block">
            <p class="vacancies__total">
                <span class="vacancies__name">Всего вакансий</span>
                <span class="vacancies__total-value">
                    {{ cours.vacanciesTotal }}
                </span>
            </p>

            <ul class="vacancies__list">
                <li
                    v-for="vacancy in cours.vacanciesPrice"
                    :key="vacancy.complexity"
                    class="vacancies__list-item"
                >
                    <span class="vacancies__name">{{ vacancy.name }}</span>
                    <span class="vacancies__price">{{ vacancy.price }} ₽ </span>
                    
                    <div class="vacancies__career-level">
                        <span
                            v-for="levelNumber in vacancy.level"
                            :key="`level-${levelNumber}`"
                            class="vacancies__career-icon"
                        />
                        <span
                            v-for="levelNumber in (maxCareerLevel - vacancy.level)"
                            :key="`level - ${levelNumber}`"
                            class="vacancies__career-icon--disabled"
                        />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { MAX_CAREER_LEVEL } from '@/assets/constants/reviewConstants';

export default {
    name: 'CoursVacancies',
    props: {
        cours: {
            type: Object,
            required: true,
        }
    },
    computed: {
        maxCareerLevel() {
            return MAX_CAREER_LEVEL;
        }
    }
}
</script>