export class TimeHelper {
    private constructor() {}

    private static TimeFormatter(): string {
        const date = new Date();
        const formatter = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const formattedTime = formatter.format(date);
        return formattedTime    // Example => 13:35:54
    }

    private static DateFormatter(): string {
        const date = new Date();
        let day: number | string    = date.getDate();
        let month: number | string  = date.getMonth();
        const year: number | string   = date.getFullYear();

        day = day < 10 ? `0${day}` : `${day}`;
        month = month < 10 ? `0${month}` : `${month}`

        const formattedDate = `${day}/${month}/${year}` 
        return formattedDate;   // Example => 25/07/2024
    }

    static LogDateFormatter(): string {
        const formattedLogDate = `[${this.DateFormatter()} : ${this.TimeFormatter()}]`
        return formattedLogDate;    // Example => [25/07/2024 : 15:54:45]
    }
}