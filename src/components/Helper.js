export const getDatasToLS = (key) => {
    let items;
    if (localStorage.getItem(key) === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem(key));
    }
    return items;
}
export const setDatasToLS = (key, data) => {
    let items = getDatasToLS(key);
    items.push(data);
    localStorage.setItem(key, JSON.stringify(items));
}

export const removeDataToLS = (key, data) => {
    if (data == undefined) {
        localStorage.setItem(key, JSON.stringify([]));
    }
    else {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

export default getDatasToLS;

// { name: 'stackoverflow', url: 'https://stackoverflow.com/', points: 0 },
//     { name: 'hackerrank', url: 'https://www.hackerrank.com/', points: 2 },
//     { name: 'bionluk', url: 'https://bionluk.com/', points: 0 }