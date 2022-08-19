const myCustomLocale = {
    // months list by order
    months: [
        "Jänner",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
    ],

    // week days by order
    weekDays: [
        {
            name: "Sonntag", // used for accessibility
            short: "S", // displayed at the top of days' rows
            isWeekend: true, // is it a formal weekend or not?
        },
        {
            name: "Montag",
            short: "M",
        },
        {
            name: "Dienstag",
            short: "T",
        },
        {
            name: "Mittwoch",
            short: "W",
        },
        {
            name: "Donnerstag",
            short: "T",
        },
        {
            name: "Freitag",
            short: "F",
        },
        {
            name: "Samstag",
            short: "S",
            isWeekend: true,
        },
    ],

    // just play around with this number between 0 and 6
    weekStartingIndex: 0,

    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject) {
        return gregorainTodayObject;
    },

    // return a native JavaScript date here
    toNativeDate(date) {
        return new Date(date.year, date.month - 1, date.day);
    },

    // return a number for date's month length
    getMonthLength(date) {
        return new Date(date.year, date.month, 0).getDate();
    },

    // return a transformed digit to your locale
    transformDigit(digit) {
        return digit;
    },

    // texts in the date picker
    nextMonth: "Nächster Monat",
    previousMonth: "Letzter Monat",
    openMonthSelector: "Monat wählen",
    openYearSelector: "Jahr wählen",
    closeMonthSelector: "Monat Auswahl schließen",
    closeYearSelector: "Jahr Auswahl schließen",
    defaultPlaceholder: "wählen...",

    // for input range value
    from: "von",
    to: "bis",

    // used for input value when multi dates are selected
    digitSeparator: ",",

    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,

    // is your language rtl or ltr?
    isRtl: false,
};

export default myCustomLocale;
