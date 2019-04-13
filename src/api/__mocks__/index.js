const range = n => [...Array(n).keys()];

const makeObje = n =>
  range(n).map(i => ({
    id: i,
    webUrl: `http:abc/${i}`,
    webTitle: `materia ${i}`
  }));

const fetchArticles = event => {
  return Promise.resolve(makeObje(10));
};

export default fetchArticles;
