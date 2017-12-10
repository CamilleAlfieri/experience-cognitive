const res = [{a:1},{a:2},{a:3}].find(
  (item)=>{
    console.log(item)
    console.log(item.a)
    console.log(item.a === 3)
    return item.a === 3
  }
)

...res//?

const a = (a) => (b) => (c) => a+b+c

a(4)(5)(6)//?