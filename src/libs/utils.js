export function objectToQuery(obj) {
  let str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p) && obj[p]) {
      if (!encodeURIComponent(obj[p])) continue;
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export function queryToObject(queryString, makeAnArray = false) {
  const urlParams = new URLSearchParams(queryString);
  let object = Object.fromEntries(urlParams);

  if (makeAnArray) {
    object = Object.entries(object).reduce((acc, [key, value]) => {
      acc[key] = value?.split(",");
      return acc;
    }, {});
  }

  return object;
}

export function updateUrlParams(object) {
  const queryString = window.location.search;
  const queryObject = queryToObject(queryString);
  const newObject = {
    ...queryObject,
    ...object,
  };
  const newString = objectToQuery(newObject);

  window.history.pushState({}, "", `?${newString}`);

  return newString;
}
