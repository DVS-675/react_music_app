/* eslint-disable arrow-body-style */
import AuthorItem from "./AuthorItem"

function CenterFilterAuthor({ data }) {
  const elements = data.map((item) => {
    return <AuthorItem author={item.author} />
  })

  return (
    <div className="centerblock__filter_item_text">
      <div className="filterItemBox">{elements}</div>
    </div>
  )
}

export default CenterFilterAuthor
