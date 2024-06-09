export function getDate(timeStamp) {
  const date = new Date(timeStamp * 1000);
  const fullYear = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();

  return `${fullYear}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}.`;
}

export function createdMinsAgo(timeStamp) {
  const date1 = new Date(timeStamp * 1000);
  const date2 = new Date(Date.now());

  const diffTime = Math.abs(date1 - date2);
  const diffDays = Math.round(diffTime / 1000) / 60;

  if (diffDays > 0 && diffDays < 1) return "Less than a minute ago...";
  else if (diffDays > 1 && diffDays < 2) {
    return `${Math.floor(diffDays)} minute ago...`;
  } else if (diffDays / 60 > 1) {
    return `${Math.floor(diffDays / 60 / 24) === 1 ? Math.floor(diffDays / 60 / 24) + " day ago" : Math.floor(diffDays / 60 / 24) + " days ago"}`;
  } else if (diffDays > 60) {
    return `${Math.floor(diffDays / 60) === 1 ? Math.floor(diffDays / 60) + " hour ago" : Math.floor(diffDays / 60) + " hours ago"} `;
  } else {
    return `${Math.floor(diffDays)} minutes ago...`;
  }
}
