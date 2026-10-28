let a=["yaris","yaris","dayz",125]
let find=(x)=>{
   return (x)
}
console.log(find(a))
//
let b=["hello","world","hru","i-am-fine"]
let y=(z)=>{
    return (z)
}
console.log(y(b))
//
let s=[1122,15,130]
let g=(f)=>{
    return(f)
}
console.log(g(s))
//
let k = ["airwave", "yaris", "dayz", 125]
let findAll = (k, item) => {
  let result = []
  for (let i = 0; i < k.length; i++) {
    if (k[i] == item) {
      result.push(i)
    }
  }
  return result
}
console.log(findAll(k, "airwave"))   
// 
let o=["air wave","without" ,"ac","owner-name","syed ali abbas haider rizvi"]
let findg = (o,items)=>{
let results=[]
for (let v=0;v<o.length;v++){
    if(o[v]===items){
        results.push(v)
    }
}
  return results
}
console.log(findg(o, "syed ali abbas haider rizvi")) 
//
let p=["ali abbas","laiba","mariam"]
let checkresult=(p,i)=>{
    let w=[]
    for(let e=o;e<p.length;e++){
        if(p[e]===i){
            result.push(e)
        }
    }
    return w
}
console.log(checkresult(p,laiba))