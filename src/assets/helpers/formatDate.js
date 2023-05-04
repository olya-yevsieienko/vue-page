export default function formatDate(date, months) {
    const dateData = date.split('-');

    const day = +dateData[2];
    const month = months[+dateData[1]];
    const year = dateData[0];

    return `${day} ${month} ${year}`;
};
