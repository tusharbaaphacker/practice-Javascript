function App() {
    const FetchApi = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let result = await response.json();
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    FetchApi();
}