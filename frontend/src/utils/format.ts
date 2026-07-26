export function formatDate(
  date: string,
) {
  return new Date(
    date,
  ).toLocaleDateString();
}

export function formatDateTime(
  date: string,
  time?: string,
) {
  return (
    formatDate(date) +
    (time
      ? ` • ${time}`
      : " • Time TBD")
  );
}

export function formatFileSize(
  bytes: number,
) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(
      bytes / 1024
    ).toFixed(1)} KB`;
  }

  return `${(
    bytes /
    1024 /
    1024
  ).toFixed(1)} MB`;
}