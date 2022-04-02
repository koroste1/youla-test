function checkDate(timestamp) {
    // var day = new Date(timestamp * 1000).getDate();
    // var month = new Date(timestamp * 1000).getMonth();
    // var year = new Date(timestamp * 1000).getFullYear();
    // var hour = new Date(timestamp * 1000).getHours();
    //
    // const current_Date = new Date(Date.now());
    // const current_day = current_Date.getDate();
    // const current_month = current_Date.getMonth() + 1;
    // const currentYear = current_Date.getFullYear();

    // let isSameDate = false;

    // if (year == currentYear) {
    //     if (month == current_month) {
    //         if (day == current_day) {
    //             isSameDate = true;
    //         } else {
    //             isSameDate = false;
    //         }
    //     }
    // }

    const currentDate = new Date(); // Получаем текущую дату, Аргументы не требуются
    const date = new Date(timestamp*1000); // Получаем дату по timestamp умноженной на 1000 (так как timestamp передается в секундах)

    // Можно использовать логические операторы для сравнения даты
    // Увеличивать номер месяца не нужно
    const isSameDate = currentDate.getDate() === date.getDate()
    && currentDate.getMonth() === date.getMonth()
    && currentDate.getFullYear() == date.getFullYear()

    const hour = date.getHours();

    return {
        isSameDate: isSameDate,
        dayPeriod: hour > 11 ? 'pm' : 'am'
    }
}