export default function sortCourses(type, order, courses) {
    const sortingOrder = order === 'asc' ? -1 : 1;
    let sortedArray = [];

    switch (type) {
        case 'price':
        case 'rating':
            sortedArray = [...courses].sort((cours1, cours2) => (
                cours1[type] - cours2[type] * sortingOrder
            ));
            break;
        default:
            break;
    }

    return sortedArray;
}
