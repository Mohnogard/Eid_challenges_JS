

let arr = [2,6,1,2,4,3,7,1,6,1]

// Sort descending
for (i=0; i<arr.length;i++){
    for (j=0; j<=arr.length-1;j++){
        if (arr[i]<=arr[j]){
            [arr[i], arr[j]]=[arr[j], arr[i]]
        } else if (arr[i]<arr[j]) {
            break
        }
    }
}
console.log(arr) 


// Sort ascending
for (i=0; i<arr.length;i++){
    for (j=0; j<=arr.length-1;j++){
        if (arr[i]>=arr[j]){
            [arr[i], arr[j]]=[arr[j], arr[i]]
        } else if (arr[i]>arr[j]) {
            break
        }
    }
}
console.log(arr) 


// Find largest
let largest
for (i=0; i<=arr.length;i++){
    for (j=0;j<=arr.length;j++){
        if (arr[i]>=arr[j]){
            largest=arr[i]
        } else {
            break
        }
    }
    if (j===arr.length){
        break 
    }
}

largest=arr[0]
for (i=0; i<=arr.length;i++){
        if (arr[i]>largest){
            largest=arr[i]
        } 
}

smallest=arr[0]
for (i=0; i<=arr.length;i++){
        if (arr[i]<smallest){
            smallest=arr[i]
        } 
}


// Find smallest
let smallest
for (i=0; i<=arr.length;i++){
    for (j=0;j<=arr.length;j++){
        if (arr[i]<=arr[j]){
            smallest=arr[i]
        } else {
            break
        }
    }
    if (j===arr.length){
        break 
    }
}

console.log(largest+"..."+smallest)


// Count dupes
let dupes = {}
for(i=0; i<=arr.length-1;i++){
    dupes[arr[i]]=0
    for(j=0;j<=arr.length;j++){
        if (arr[i]==arr[j]){
            dupes[arr[i]]+=1
        }
    }
}
console.log(dupes)