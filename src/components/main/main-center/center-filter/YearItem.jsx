import getYear from "../../../../utils/getYear"

function YearItem({ year }) {
  return (
    <div>
      <a style={{ color: "white" }} href="#author">
        {getYear(year)}
      </a>
    </div>
  )
}

export default YearItem
