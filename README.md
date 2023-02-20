# JSON? Come on.. JSCON is more ✨ ENHANCED ✨ 
JSCON is a Node.js library for working with JSON and JSCON files. It provides methods for parsing, writing, and sorting files, as well as encrypting and decrypting data.

## Installation

To install JSCON, use the following command:
```cli
npm install jsccon
```

## API
- `parse(file)` - Read .jscon file and convert to JavaScript object, the `file` is an jscon file, should look like `<filename>.jscon`
- `sort(<file or url>, {by: "less|more", proprety: "<number property>", arrayProprety: "<array property>", output: "filename.jscon|object"})` Sort by property number or array values length where `property` is a number property and `arrayProperty` is an property that own array
- 
