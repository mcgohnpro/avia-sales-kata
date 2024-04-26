export default function RadioFilters() {
  return (
    <div className="filters">
      <label htmlFor="cheapest">
        <input type="radio" id="cheapest" name="filters" />
        самый дешевый
      </label>
      <label htmlFor="fastest">
        <input type="radio" id="fastest" name="filters" />
        самый быстрый
      </label>
      <label htmlFor="optimal">
        <input type="radio" id="optimal" name="filters" />
        самый быстрый
      </label>
    </div>
  )
}
