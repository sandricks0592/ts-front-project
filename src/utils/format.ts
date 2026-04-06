export const formatNumber = (number: number): string => {
    return number.toLocaleString();
};

export const formatDate = (date: string): string => {
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return date;
    return d.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};