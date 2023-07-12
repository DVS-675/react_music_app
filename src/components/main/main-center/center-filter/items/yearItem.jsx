import getYear from "../../../../../utils/getYear"

function YearItem({ year }) {
  return (
    <a style={{ color: "white" }} href="#author">
      {getYear(year)}
    </a>
  )
}

export default YearItem
