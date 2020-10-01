const Challenge_No_1 = () => {
    console.log("Aldi Mulyawan");
    axios
    .get("https://jsonplaceholder.typicode.com/posts/26/comments")
    .then((res) => {
        console.log("Jumlah comments : " + Object.keys(res.data).length);
        console.log(res.data);
    });
};

const Challenge_No_2 = () => {
    console.log("Aldi Mulyawan");
    axios
    .get("https://jsonplaceholder.typicode.com/posts?userId=8")
    .then((res) => {
        console.log(res.data);
    });
};