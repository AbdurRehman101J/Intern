function Polygone(n) {
    if(n<0) {
        return false
    }
    return (n*n) + ((n-1)*(n-1))
}
console.log(Polygone(4))