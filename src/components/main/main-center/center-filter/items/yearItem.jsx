import getYear from "../../../../../utils/getYear"

export const YearItem = ({ year }) => {
  return (
    <a style={{ color: "white" }} href="#author">
      {getYear(year)}
    </a>
  )
}


