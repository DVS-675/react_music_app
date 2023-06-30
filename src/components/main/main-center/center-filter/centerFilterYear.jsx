
/* eslint-disable arrow-body-style */

import YearItem from "./YearItem"

function CenterFilterYear({ data }) {
  const elements = data.map((item) => {    
    return <YearItem year={item.release_date} />
  })

  return <div className="centerblock__filter_item_text"><div className="filterItemBox">{elements}</div></div>
}

export default CenterFilterYear