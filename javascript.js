let a=[1,2,3,4,5,6,7,8,9];
let N=a.length;
let first=0;
let last=N-1;
while (first<last){
    let b=a[first];
    a[first]=a[last]
    a[last]=b
    first++;
    last--;
}document.write(a);