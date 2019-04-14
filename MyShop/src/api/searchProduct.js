const searchProduct = (key) => {
    const url = `http://localhost:8080/api/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;