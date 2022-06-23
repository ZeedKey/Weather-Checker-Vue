export const formatDate = (date: string) => {
    const newDate = new Date(date);
    console.log(newDate)

    const time = newDate.toLocaleTimeString().slice(0,5);
    const dayOfWeek = newDate.toDateString().slice(0,4)
    const month = newDate.toDateString().slice(4,10)
    const year = newDate.toDateString().slice(13)

    console.log(year)
    return `${time} - ${dayOfWeek}, ${month} '${year}`;
}