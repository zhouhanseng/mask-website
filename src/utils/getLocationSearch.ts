export function getLocationSearch() {
  if (typeof location !== "undefined") return location.search;
  return "";
}
