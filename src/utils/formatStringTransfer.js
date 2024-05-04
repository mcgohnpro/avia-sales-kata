export default function formatStrimgTransfer(count) {
  if (count === 0) {
    return 'Без пересадок'
  }
  if (count === 1) {
    return `${count} пересадка`
  }
  if (count > 1 && count < 5) {
    return `${count} пересадки`
  }
  return `${count} пересадок`
}
