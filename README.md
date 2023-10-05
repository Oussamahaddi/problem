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

```

let count = 0;
let i = 0;
let j = 0;

function compare(firstStr, secondStr) {
    let len1 = firstStr.length;
    let len2 = secondStr.length;
    
    if (Math.abs(len1 - len2) > 1) {
        return false;
    }
    
    while (i < len1 && j < len2) {
        if (firstStr[i] != secondStr[j]) {
            if (count == 1) return false;
            if (len1 > len2) {
                i++;
            } else if (len1 < len2) {
                j++;
            } else {
                i++;
                j++;
            }
            count++;
        } else {
            i++;
            j++;
        }
    }
    if (i < len1 || j < len2)
        count++;
}

console.log(compare("pale", "pale"));
```

### Given two strings, write a method to determine if they are one edit away from each other.
