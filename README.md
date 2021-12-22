# Lesson 012 | Getter, Setter, Property Descriptor

> Bellow is the Github link for all done homeworks.

[Homeworks 12 - Lesson 012 | Getter, Setter, Property Descriptor](https://github.com/vahehak93/Lesson-012-Getter-Setter-Property-Descriptor.git)

---

> Tasks | Revisiting Objects

- Task 1\
 Write an object with field name
 ```javascript
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
```

- Task 2\
The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.
```javascript
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});
// OUTPUT => "John"

// John's avg = 90
// Bob's avg = 83.33
```

