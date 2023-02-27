# JSON? Come on.. JSCON is more ✨ ENHANCED ✨ 
<a href="https://discord.gg/y9KUzq2yaT"><img src="https://img.shields.io/discord/1077492444574261339?style=for-the-badge&color=5865F2&logo=discord&logoColor=white&label=Abdlmu'tii" alt="Discord server" /></a>
  <a href="https://www.npmjs.com/package/jsccon"><img src="https://img.shields.io/npm/dt/jsccon.svg?maxAge=3600&color=CC3534&style=for-the-badge&logo=npm" alt="npm downloads" /></a>
<br>
  <a href=""><img src="https://img.shields.io/badge/Telegram-2AABEE?style=for-the-badge&logo=telegram&logoColor=white" alt="npm downloads" /></a>
<br>
JSCON is a Node.js library for working with JSON and JSCON files. It provides methods for parsing, writing, and sorting files, as well as other cool features!

## Installation

To install JSCON, use the following command, make sure it is spelled **JSCCON** NOT **JSCON**:
```cli
npm install jsccon
```

## API
- `parse(file)` - Read .jscon file and convert to JavaScript object, the `file` is an jscon file, should look like `<filename>.jscon`
- `sort(<file or url>, {by: "less|more", proprety: "<number property>", arrayProprety: "<array property>", output: "filename.jscon|object"})` Sort by property number or array values length where `property` is a number property and `arrayProperty` is an property that own array
- `merge(outputFileName, [files])` Merge multiple files into one file, where `outputFileName` is the output file name, and `[files]` is array of file names
- `set(file, newData)` Set a new object to the file, `newData` is object
- `delete(file, {property: "property_name", value: "value"})` Delete an item from the file.
- `update(file, {property: "property_name", value: "value", newData: {age: "18", job: "Playing video games all night"}})` Update the data who has the same property and value with and add the `newData`.

## Code sample:
Now. Let's say that's your json file:
```json
[
  {
    "id": 1,
    "name": "Alice",
    "age": 25,
    "pets": [
      {
        "name": "Fluffy",
        "type": "cat"
      },
      {
        "name": "Rover",
        "type": "dog"
      }
    ]
  },
  {
    "id": 2,
    "name": "Bob",
    "age": 30,
    "pets": [
      {
        "name": "Spot",
        "type": "dog"
      }
    ]
  },
  {
    "id": 3,
    "name": "Charlie",
    "age": 20,
    "pets": []
  }
]
```

And that's how to use JSCON various functions to sort this JSON file:

### Read & Transfer .JSCON file to JS object:
```js
// Require the library 
const JSCON = require('jsccon');
const jscon = new JSCON();

// Parse a JSCON file
const data = jscon.parse('example.jscon');
console.log(data);
```

### Sort a .JSCON file by less & more:
```js
// Require the library 
const JSCON = require('jsccon');
const jscon = new JSCON();

// Sort a .JSCON file by less
jscon.sort('example.jscon', { by: 'less', property: 'age', output: 'sorted_data.jscon' });

// Sort a .JSCON file by more
jscon.sort('example.jscon', { by: 'more', property: 'age', output: 'sorted_data.jscon' });

// Sort a .JSCON file by less values in array
jscon.sort('example.jscon', { by: 'less', arrayProperty: 'pets', output: 'sorted_data.jscon' });

// Sort a .JSCON file by more values in array
jscon.sort('example.jscon', { by: 'more', arrayProperty: 'age', output: 'sorted_data.jscon' });

// Sort a .JSCON file by less, but return data as object
jscon.sort('example.jscon', { by: 'less', property: 'age', output: 'object' });
```

### Merge multiple .JSCON files
```js
// Require the library 
const JSCON = require('jsccon');
const jscon = new JSCON();

// Merge multiple JSCON files
const inputFiles = ['file1.jscon', 'file2.jscon'];
jscon.merge('merged_data.jscon', inputFiles);
```

### Delete an item from a JSCON file:
```js
// Require the library 
const JSCON = require('jsccon');
const jscon = new JSCON();

// Delete an item from a JSON file
jscon.delete('example.jscon', { property: 'name', value: 'Alice' });
```

### Add an item to JSCON file
```js
// Require the library 
const JSCON = require('jsccon');
const jscon = new JSCON();

// Add an item to a JSCON file
const newData = { name: 'Sarah', age: 28, pets: [] };
jscon.set('example.jscon', newData);
```

### Update an item in a .JSCON file:
```js
// Require the library 
const JSCON = require('jsccon');
const jscon = new JSCON();

// Update an item in a JSCON file
const updatedData = { age: 26 };
jscon.update('example.json', { property: 'name', value: 'Bob', newData: updatedData });
```



## License 
JSCON is released under the MIT License. [Read more](https://opensource.org/licenses/MIT)

## Contribution:
Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue on the [GitHub repository](https://github.com/abdlmutii/jscon), also be free to send important bugs to my <a href="mailto:abdlmutii@outlook.com">email adress</a>

## Credits
Credits goes to [abdlmutii](https://github.com/abdlmutii/abdlmutii), if you like this npm package please remember to check other work i've done on github and star [this repo](https://github.com/abdlmuti/jscon).
