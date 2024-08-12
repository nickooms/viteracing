let list:any = ["One", "Two", "Three", "Four"];
list.push(list.splice(-4, 2));
console.log(list);
