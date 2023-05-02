function formatDate(str) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'майя', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const date = str.split('-');

    const day = removeNullAtBegining(date[2]);
    const month = months[+removeNullAtBegining(date[1])];
    const year = date[0];

    return `${day} ${month} ${year}`;
};

function removeNullAtBegining(date) {
    const temp = date.split('');
    return temp[0] === '0' ? date.split(1) : date;
}

export default formatDate;
