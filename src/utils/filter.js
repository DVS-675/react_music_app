export const createFilterList = (filterElements, id) => {
    let result;
    switch (id) {
      case 0:
        result = filterElements?.map((filterElement) => filterElement.author);
        break;
      case 1:
        result = filterElements;
        return result;
      case 2:
        result = filterElements?.map((filterElement) => filterElement.genre);
        break;
      default:
        result = '';
        break;
    }
  
    const filteredResult = result?.filter(
      (item, i) => result.indexOf(item) === i
    );
  
    return filteredResult;
  };