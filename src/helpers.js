export function formateDate(date) {
    const formatter = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric"
    });
    return formatter.format(new Date(date))
}