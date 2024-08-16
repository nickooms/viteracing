const loadXML = (path: string) =>
  new Promise((resolve, reject) => {
    const cached = localStorage.getItem(path);
    if (cached) {
      resolve(new DOMParser().parseFromString(cached, 'text/xml'));
    }
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      localStorage.setItem(path, xhr.responseText);
      resolve(new DOMParser().parseFromString(xhr.responseText, 'text/xml'));
    };
    xhr.onerror = () => reject('Error while getting XML.');
    xhr.open('GET', path);
    xhr.responseType = 'text';
    xhr.send();
  });

export const useCache = () => {
  const get = async (url: string) => {
    const cached = localStorage.getItem(url);
    if (cached) {
      return JSON.parse(cached);
    }
    const response = await fetch(url);
    const json = await response.json();
    localStorage.setItem(url, JSON.stringify(json));
    return json;
  };

  const getXML = async (url: string) => {
    /* const cached = localStorage.getItem(url);
    if (cached) {
      return cached;
    } */
    const doc = await loadXML(url);
    return doc;
    // localStorage.setItem(url, doc.re);
    // return text;
  };

  return { get, getXML };
};
