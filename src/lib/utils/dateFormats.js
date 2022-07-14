export const dateFormatter = Intl.DateTimeFormat("fr", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  
export const dateCompactFormatter = Intl.DateTimeFormat("fr", {
  day: "2-digit",
  month: "2-digit",
  weekday: "short",
  // year: "2-digit",
  });
export const timeFormatter = Intl.DateTimeFormat("fr", {
    // weekday: "narrow",
    hour: "2-digit",
    minute: "2-digit",
    // year: "2-digit",
  });
