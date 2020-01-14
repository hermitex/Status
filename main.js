const createStarTriangle = (num) => {
    let triangle = "";
    if (num > 0) {
        for (let i = 1; i <= num; ++i) {
            triangle += i + " ";
            console.log(triangle)
        }
    }
};

createStarTriangle(10);