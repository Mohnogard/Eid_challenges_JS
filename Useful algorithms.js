
***FOR MAXIMUM PROFIT


========= Approach 2 (Find best profit of 2 days in a row) =========

let profits = []
let profindexes = []
let best =0

function approach1 (arr){
    for (let i=0;i<arr.length;i++){
        if ((i+1)<arr.length){
            profits.push((arr[i+1]-arr[i]))
            profindexes.push([i,i+1])
    }}

    for (let j=0;j<profits.length;j++){
        for (let x=0; x<profits.length;x++){
            if (profits[j]>=profits[x]){
                best=profits[j]
            } else {
                break
            }
            if (x==profits.length-1){
                console.log("best profit is: "+best+ " which is at indexes: "+ profindexes[j])
                return(best, profindexes[j])
                break
            }

            }
        }
    }

approach1(arr)



========= Approach 3 (Find absolute max profit regardless of days) =========
let lowest=arr[0]
let highest=arr[0]
function approach2 (arr){

for (let i=0; i<arr.length-1;i++){
    if (arr[i]<lowest){
        lowest=arr[i]
    }
}
for (let i=0; i<arr.length-1;i++){
    if (arr[i]>highest){
        lowest=arr[i]
    }
}
console.log(lowest + ".." + highest)

}

(approach2(arr))


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
