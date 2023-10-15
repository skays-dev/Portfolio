const formatDateFromDatabase = (dateString: Date): string => {
    const months: string[] = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ];

    // Step 1: Parse the date string into a Date object
    const dateObj: Date = new Date(dateString);

    // Step 2: Extract the year, month, and day
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth(); // Month is zero-indexed (0-11)
    const day = dateObj.getDate();

    // Step 3: Convert the month number into the corresponding month name
    const monthName = months[month];

    // Step 4: Format the date components into the desired format
    const formattedDate: string = `${monthName} ${day}, ${year}`;

    return formattedDate;
}


export default formatDateFromDatabase;