
const fetchArticles = event => {
  return fetch(
    `https://content.guardianapis.com/search?q=${event}&api-key=4f0dc017-ba27-4650-ba21-ea7b65fb88c6`
  ).then(response => response.json());
};

export default fetchArticles;


/*
  Hello from the Guardian. Thank you for registering with the open platform.
  A new key has been created for you:
   4f0dc017-ba27-4650-ba21-ea7b65fb88c6

   You can try this key by accessing


   in your browser. For more details on how to use the open platform API,
   check out the documentation available at
   http://open-platform.theguardian.com/documentation/
*/