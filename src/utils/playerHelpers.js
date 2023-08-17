export function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    const newArr = array;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      [newArr[currentIndex], newArr[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return newArr;
  }
  
  export const findNextTrackId = (id, tracks) => {
    let nextTrack = '';
    for (let i = 0; i < tracks.length; i += 1) {
      if (tracks[i].id === id) {
        nextTrack = tracks[i];
      }
    }
    return nextTrack;
  };
  
  export const findPrevTrackId = (id, tracks) => {
    let prevTrack = '';
    for (let i = 0; i < tracks.length; i += 1) {
      if (tracks[i].id === id) {
        prevTrack = tracks[i];
      }
    }
    return prevTrack;
  };

  export const createFavorites = (items, currUser) => {
    const userId = currUser?.id;
    const favoritesTracks = [];
    if (items) {
      items.forEach((item) => {
        for (let i = 0; i < item.stared_user.length; i += 1) {
          if (item.stared_user[i].id === userId) {
            favoritesTracks.push(item);
          }
        }
      });
    }
  
    return favoritesTracks;
  };

  export function strPadLeft(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }
  
  