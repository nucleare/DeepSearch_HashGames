# References for Use & Research of Theory 1 
_As mentioned in [BCMinesThoery.MD](https://github.com/nucleare/GameResultsGenerator/blob/main/BCGame/BCMinesThoery.MD)_


## Reorder an array according to given indexes
Source: [https://www.geeksforgeeks.org/reorder-a-array-according-to-given-indexes/](https://www.geeksforgeeks.org/reorder-a-array-according-to-given-indexes/)

Given the example:
```
Input:  arr[]   = [10, 11, 12];
            index[] = [1, 0, 2];
Output: arr[]   = [11, 10, 12]
           index[] = [0,  1,  2] 

Input:  arr[]   = [50, 40, 70, 60, 90]
          index[] = [3,  0,  4,  1,  2]
Output: arr[]   = [40, 60, 90, 50, 70]
          index[] = [0,  1,  2,  3,   4]
```

### Solution 1

"A Simple Solution is to use an auxiliary array temp[] of same size as given arrays. Traverse the given array and put all elements at their correct place in temp[] using index[]. Finally copy temp[] to arr[] and set all values of index[i] as i."

```

      // JavaScript program to sort an array according to given
      // indexes
 
      // Function to reorder elements of arr[] according
      // to index[]
      function reorder(arr, index, n) {
        var temp = [...Array(n)];
 
        // arr[i] should be present at index[i] index
        for (var i = 0; i < n; i++) temp[index[i]] = arr[i];
 
        // Copy temp[] to arr[]
        for (var i = 0; i < n; i++) {
          arr[i] = temp[i];
          index[i] = i;
        }
      }
 
      // Driver program
 
      var arr = [50, 40, 70, 60, 90];
      var index = [3, 0, 4, 1, 2];
      var n = arr.length;
 
      reorder(arr, index, n);
 
      document.write("Reordered array is: ");
      document.write("<br>");
      for (var i = 0; i < n; i++) document.write(arr[i] + " ");
      document.write("<br>");
      document.write("Modified Index array is: ");
      document.write("<br>");
      for (var i = 0; i < n; i++) document.write(index[i] + " ");
       
      // This code is contributed by rdtank.
```

Output:

```
Reordered array is: 
40 60 90 50 70 
Modified Index array is: 
0 1 2 3 4
```

*** 

### Solution 2 

To solve Without Auxiliary Array, it's explained:

> 1) Do following for every element arr[i]
>   a) While index[i] is not equal to i
>       (i)  Store array and index values of the target (or 
>            correct) position where arr[i] should be placed.
>            The correct position for arr[i] is index[i]
>       (ii) Place arr[i] at its correct position. Also
>            update index value of correct position.
>       (iii) Copy old values of correct position (Stored in
>            step (i)) to arr[i] and index[i] as the while 
>            loop continues for i.

And the code provided:

```
// A O(n) time and O(1) extra space JavaScript program to
// sort an array according to given indexes
 
// Function to reorder elements of arr[] according
// to index[]
function reorder(arr, index, n)
{
    // Fix all elements one by one
    for (let i=0; i<n; i++)
    {
        // While index[i] and arr[i] are not fixed
        while (index[i] != i)
        {
            // Store values of the target (or correct)
            // position before placing arr[i] there
            let oldTargetI = index[index[i]];
            let oldTargetE = arr[index[i]];
 
            // Place arr[i] at its target (or correct)
            // position. Also copy corrected index for
            // new position
            arr[index[i]] = arr[i];
            index[index[i]] = index[i];
 
            // Copy old target values to arr[i] and
            // index[i]
            index[i] = oldTargetI;
            arr[i] = oldTargetE;
        }
    }
}
 
// Driver program
    let arr = [50, 40, 70, 60, 90];
    let index = [3, 0, 4, 1, 2];
    let n = arr.length;
 
    reorder(arr, index, n);
 
    document.write("Reordered array is: <br>");
    for (let i=0; i<n; i++)
        document.write(arr[i] + " ");
 
    document.write("<br>Modified Index array is: <br>");
    for (let i=0; i<n; i++)
        document.write(index[i] + " ");
 
// This code is contributed by Surbhi Tyagi.

```
Output:

```
Reordered array is: 
40 60 90 50 70 
Modified Index array is: 
0 1 2 3 4
```

***

### Solution 3

Another Method without using an auxiliary array is to sort the arrays. 
Sort the index array and customize the sort to swap the arr[] data whenever you swap the index[] data.

```
// Javascript code to reorder an array
// according to given indices
 
let heapSize;
 
function heapify(arr,index,i)
{
    let largest = i;
      
    // left child in 0 based indexing
    let left = 2 * i + 1;
      
    // right child in 1 based indexing
    let right = 2 * i + 2;
      
    // Find largest index from root,
    // left and right child
    if (left < heapSize &&
        index[left] > index[largest] )
    {
        largest = left;
    }
    if (right < heapSize &&
        index[right] > index[largest] )
    {
        largest = right;
    }
       
    if (largest != i)
    {
          
        // swap arr whenever index is swapped
        let temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;
          
        temp = index[largest];
        index[largest] = index[i];
        index[i] = temp;
          
        heapify(arr, index, largest);
    }
}
 
function heapSort(arr,index,n)
{
    // Build heap
    for(let i = (n - 1) / 2 ; i >= 0 ; i--)
    {
        heapify(arr, index, i);
    }
      
    // Swap the largest element of
    // index(first element)
    // with the last element
    for(let i = n - 1 ; i > 0 ; i--)
    {
        let temp = index[0];
        index[0] = index[i];
        index[i] = temp;
          
        // swap arr whenever index is swapped
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
          
        heapSize--;
        heapify(arr, index, 0);
    }
}
 
// Driver code
let arr=[50, 40, 70, 60, 90 ];
 
let index=[3, 0, 4, 1, 2];
let n = arr.length;
 
heapSize = n;
heapSort(arr, index, n);
 
document.write("Reordered array is: <br>");
for(let i = 0 ; i < n ; i++)
    document.write(arr[i] + " ");
 
document.write("<br>"); 
 
document.write("Modified Index array is: <br>");
for(let i = 0; i < n; i++)
    document.write(index[i] + " ");
 
 
// This code is contributed by ab2127
```
Output:

```
Reordered array is: 
40 60 90 50 70 
Modified Index array is: 
0 1 2 3 4
```

***

## Our Usage

It is uncertain whether the above solutions would prove useful as they are, but it may have something to do with determining or assigning an Index to each resulting array in case it may be more suitable in finding some sort of pattern

Whereas:

The array in the mines formula for BC.Games is 

`[7, 2, 19, 25, 1, 13, 5, 24, 14, 6, 15, 9, 22, 16, 3, 17, 18, 20, 8, 21, 4, 12, 10, 23, 11]`

We've noted that if you set the maximum possible mines, which is 24, then the resulting array will seem as if the array is placed back in order, at least according to the provably fair checker found [here](https://bcverify.gdoc.win/) And I realized that it was a function of the provably fair checker to do that.

Fortunately, I had created my own provably fair checker [here](https://codepen.io/nucleare/pen/XWBdoje) which wasn't nearly as aesthetically pleasing, but it provided the result of the BC.Game function more accurately but outputting the array the new array as it appeared. Thus for the given example:

 - Server seed - 40beefabc30dfdfb54aa239479dcd5a469e5f9f1879c622063e3704194c31664
 - Client seed - 00ff0000ff000000ff
 - Nonce - 176
 - Mines - 10

The resulting array would be - [23,19,13,24,25,14,22,17,12,16]

Whereas the full array is - [23,19,13,24,25,14,22,17,12,16,3,1,5,6,11,7,20,15,4,18,8,9,21,2,10]

This proves to be more useful for this purpose because we can now assign an index used for the result based on the newly formed array by establishing the original array as an index. There's obviously more than one way to go about this, we can try:

# NOT COMPLETED
__Work in Progress__
```
## Using the original example for the JavaScript excercise and the outcome of nonce 176 above:

Input:  arr[]   = [ 23, 19, 13, 24, 25, 14, 22, 17, 12, 16, 3, 1, 5, 6, 11, 7, 20, 15, 4, 18, 8, 9, 21, 2, 10] ## Game Result as Array
          index[] = [?, ?, ..., ?] ## Determine the Index when applied to Game's Original Array
Output: arr[]   = [7, 2, 19, 25, 1, 13, 5, 24, 14, 6, 15, 9, 22, 16, 3, 17, 18, 20, 8, 21, 4, 12, 10, 23, 11] ## Game Algorithm Array as ouput
          index[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] ## when Game array is proper order index
          
Input:  arr[]   = [ 23, 19, 13, 24, 25, 14, 22, 17, 12, 16, 3, 1, 5, 6, 11, 7, 20, 15, 4, 18, 8, 9, 21, 2, 10] ## Game Result as array
          index[] = [7, 2, 19, 25, 1, 13, 5, 24, 14, 6, 15, 9, 22, 16, 3, 17, 18, 20, 8, 21, 4, 12, 10, 23, 11] ## Game Algorithm as index
Output: arr[]   = [ ?, ?, ..., ?] ## Determine the requivalent "index" if it were an array between the two 
          index[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
          
```

I'm not sure if the examples are correct, temporary pause - last updated 2/8/23 4:00:00 PST
