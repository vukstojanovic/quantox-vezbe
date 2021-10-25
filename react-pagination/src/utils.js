const paginate = (data) => {
    let limit = 10;
    let pages = Math.ceil(data.length / limit);
    let arrayOfArrays = [];
    let start = 0;
    let end = limit;
    for (let i = 0; i < pages; i++) {
        let temporary = data.slice(start, end);
        arrayOfArrays.push(temporary);
        start = end;
        end = end + limit;
    }
    return arrayOfArrays;
}

export default paginate
