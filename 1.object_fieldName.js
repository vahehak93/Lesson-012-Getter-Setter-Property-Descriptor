/*Write an object with field name.
```javascript
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }
  console.log(obj.name)
  obj.name = 'Hovhannes, Sona';
  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
```*/

const obj = {
    name: [],

    get Name() {
        return `${this.name}`
    },  

    set Name(value) {

        for (let i of value.split(",")) {
            console.log(i.length)
            this.name.push([i, i.length])
        }

    }    
};

obj.Name = "Hovhannes,Sona"

console.log(obj.name)