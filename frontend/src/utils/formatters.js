export function formatDate(value) {
  if (!value) {
    return 'N/A';
  }

  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(value));
}

export function formatRating(value) {
  return Number(value || 0).toFixed(1);
}
