function insertionSort(arr) {
    // Loop through each element in the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element in a variable
        let current = arr[i];
        
        // Initialize j to the index before i
        let j = i - 1;
        
        // Move elements of arr[0...i-1], that are greater than the current element, one position ahead
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Place the current element at its correct position in the sorted part of the array
        arr[j + 1] = current;
    }
    return arr;
}


const array = [12, 11, 13, 5, 6];
console.log("Original array:", array);
console.log("Sorted array:", insertionSort(array));