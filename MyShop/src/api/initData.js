const initData = () => (
    fetch('http://localhost:8080/api/')
    .then(res => res.json())
);

export default initData;