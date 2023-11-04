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

  export function getFilteredTracks(arr, values) {
    const findList = [];
  
    for (let i = 0; i < values.length; i += 1) {
      for (let j = 0; j < arr.length; j += 1) {
        if (arr[j].author.includes(values[i])) {
          findList.push(arr[j]);
        } else if (arr[j].genre.includes(values[i])) {
          findList.push(arr[j]);
        }
      }
    }
  
    return findList;
  }
  
  // Фильтр плейлиста, если одновременно выбран и исполнитель и жанр
  export function getCombineFilteredTracks(arr, values) {
    const findAuthorsList = getFilteredTracks(arr, values.name);
    const findList = [];
  
    for (let i = 0; i < findAuthorsList.length; i += 1) {
      for (let j = 0; j < values.genre.length; j += 1) {
        if (findAuthorsList[i].genre.includes(values.genre[j])) {
          findList.push(findAuthorsList[i]);
        }
      }
    }
  
    return findList;
  }
  
  // Поиск по плейлисту
  export function getSearchingTracks(arr, value) {
    const findList = [];
  
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].name.toLowerCase().includes(value)) {
        findList.push(arr[i]);
      }
    }
  
    return findList;
  }
  
  // Фильтр плейлиста по дате
  export function getFilterByDate(arr, values) {
    const dates = arr.map((elem) => elem.release_date);
    const index = dates.indexOf(null);
    if (index >= 0) {
      dates.splice(index, 1);
    }
  
    const value = values[0];
    let findList = [];
  
    if (value === 'default') {
      findList = arr;
    } else if (value === 'old') {
      const tracksOldToNew = dates.sort((a, b) => new Date(a) - new Date(b));
      for (let i = 0; i < tracksOldToNew.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
          if (arr[j].release_date) {
            if (arr[j].release_date.includes(tracksOldToNew[i])) {
              findList.push(arr[j]);
            }
          }
        }
      }
    } else if (value === 'new') {
      const tracksNewToOld = dates.sort((a, b) => new Date(b) - new Date(a));
      for (let i = 0; i < tracksNewToOld.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
          if (arr[j].release_date) {
            if (arr[j].release_date.includes(tracksNewToOld[i])) {
              findList.push(arr[j]);
            }
          }
        }
      }
    }
  
    return findList;
  }