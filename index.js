const fs = require("fs");
const fetch = require("node-fetch")
class JSCON {
  constructor(options = {}) {
    this.options = options;
    };
  
  parse(file) {
    if(file.endsWith(".json") || file.endsWith(".jscon")) {
    let data = fs.readFileSync(file, "utf-8");

    return JSON.parse(data);
    } else if(file.startsWith("https://") || file.startsWith("http://")) {
     let data = fetch(file).then(j=>j.json());
      return JSON.parse(data);
    } else {
      throw Error("Provide valid json/jscon file path or file url..");
    }
  }

  write(file, data) {
    const { encrypted, key } = this.options;
    let json = JSON.stringify(data, null, 2);

    fs.writeFileSync(file, json, "utf-8");
  }

  sort(file, options) {
    if(options.by === "less") {
    // sort a .jscon file by the given property, in ascending order
    const { property, arrayProperty, output } = options;
    const data = this.parse(file);
    const sortedData = data.sort((a, b) => {
      if (a[arrayProperty] && b[arrayProperty]) {
        return a[arrayProperty].length - b[arrayProperty].length;
      }
      return a[property] - b[property];
    });

    if (output === "object") {
      return sortedData;
    } else {
      this.write(output, sortedData);
    }
    } else {
      // sort a .jscon file by the given property, in descending order
    const { property, arrayProperty, output } = options;
    const data = this.parse(file);
    const sortedData = data.sort((a, b) => {
      if (a[arrayProperty] && b[arrayProperty]) {
        return b[arrayProperty].length - a[arrayProperty].length;
      }
      return b[property] - a[property];
    });

    if (output === "object") {
      return sortedData;
    } else {
      this.write(output, sortedData);
    }
    }
  }

  sort(file, options) {
    
  }

  merge(outputFile, inputFiles) {
    const data = inputFiles.reduce((acc, file) => {
      const fileData = this.parse(file);
      return acc.concat(fileData);
    }, []);

    this.write(outputFile, data);
  }

   get(file, options) {
    const { property, value, output } = options;
    const data = this.parse(file);
    const filteredData = data.filter((item) => item[property] === value);

    if (output === "object") {
      return filteredData;
    } else {
      this.write(output, filteredData);
    }
  }

  delete(file, options) {
    const { property, value } = options;
    const data = this.parse(file);
    const newData = data.filter((item) => item[property] !== value);
    this.write(file, newData);
  }

  set(file, newData) {
    const data = this.parse(file);
    data.push(newData);
    this.write(file, data);
  }

  update(file, options) {
    const { property, value, newData } = options;
    const data = this.parse(file);
    const updatedData = data.map((item) => {
      if (item[property] === value) {
        return { ...item, ...newData };
      } else {
        return item;
      }
    });
    this.write(file, updatedData);
    }
}

module.exports = JSCON;