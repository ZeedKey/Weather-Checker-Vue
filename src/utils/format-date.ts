export const formatDate = (date: string) => {
    const newDate = new Date(date);

    const time = newDate.toLocaleTimeString().slice(0,5);
    const dayOfWeek = newDate.toDateString().slice(0,4)
    const month = newDate.toDateString().slice(4,10)
    const year = newDate.toDateString().slice(13)

    return `${time} - ${dayOfWeek}, ${month} '${year}`;
}