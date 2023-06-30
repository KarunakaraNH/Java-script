let items=[
{name:"Rahul", price:30},
{name:"Vijay",price:100},
{name:"Ram",price:300},
{name:"Rahim",price:400}
]
console.log(items)

const filteritems=items.filter((item)=>{return item.price<=100})

console.log(filteritems)