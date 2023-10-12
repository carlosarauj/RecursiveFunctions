function recursion(max){
    if (max >= 100000) return
     max++

    console.log(max)
    recursion(max)
}
recursion(0)