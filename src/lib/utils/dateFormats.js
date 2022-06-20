export const dateFormatter = Intl.DateTimeFormat("fr", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  
export const dateCompactFormatter = Intl.DateTimeFormat("fr", {
    weekday: "narrow",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
