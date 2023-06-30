/* eslint-disable arrow-body-style */


import GenreItem from "./GenreItem"

function CenterFilterGenre({ data }) {
  const elements = data.map((item) => {
    return <GenreItem genre={item.genre} />
  })

  return <div className="centerblock__filter_item_text"><div className="filterItemBox">{elements}</div></div>
}

export default CenterFilterGenre