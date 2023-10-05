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

function isOneEditAway(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  if (Math.abs(len1 - len2) > 1) {
    return false;
  }

  let edits = 0;
  let i = 0;
  let j = 0;

  while (i < len1 && j < len2) {
    if (str1[i] !== str2[j]) {
      edits++;

      if (edits > 1) {
        return false;
      }

      if (len1 === len2) {
        i++;
        j++;
      } else if (len1 > len2) {
        i++;
      } else {
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  if (i < len1 || j < len2) {
    edits++;
  }
  return edits === 1;
}

console.log(isOneEditAway("pale", "ple")); 
console.log(isOneEditAway("pales", "pale")); 
console.log(isOneEditAway("pale", "kale"));
console.log(isOneEditAway("pale", "pales")); 
console.log(isOneEditAway("pale", "bake"));
```

### Given two strings, write a method to determine if they are one edit away from each other.
