export function getCountPages (totalResults) {
  return Math.ceil(totalResults / 40)
}
