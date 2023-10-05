# problem


### write a function, chunk(arr, n), that returns chunked array of size n at the least. Look at example
```
let arr = [1, 4, 12, 3, 2, 6, -9, 0, 1, 2, 4, 5];
let n =2;

const arrayChunk = (array, number) => {
    const result = array.reduce((resArr, item, i) => {
        if (array.length < number) {
            return array;
        } else {
            const chunkIndex = Math.floor(i/number);
            if(!resArr[chunkIndex]) {
                resArr[chunkIndex] = []
            }
            resArr[chunkIndex].push(item);
            return resArr;
        }
    },[])
    return result;
}

console.log(arrayChunk(arr, n));

```

### Given two strings, write a method to determine if they are one edit away from each other.
