export function logVariables(data, topLevelPrefix = '', depth = 0, faulty = 0, faultyKeys={}) {
  const spaces = '   '.repeat(depth);
  let prefix = '';

  if (depth === 0) {
    const keys = Object.keys(data);
    prefix = keys.length > 0 ? `${topLevelPrefix||keys[0]}` : '';
    console.log(`${prefix}============================={ START LOG }===============================`);
    console.log()
  }

  // if (depth === 1) {
  //   console.log(`--------------------------{ ${topLevelPrefix}: }--------------------------`);
  // }

  for (const [key, value] of Object.entries(data)) {
    const subPrefix = `${spaces}${key}: `;

    if (depth >= 2) {
      // console.log(`${spaces}${spaces}${spaces}{ ...more to follow... }`);
      return; // Stop recursion
    }

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      console.log(`${spaces}${spaces}${subPrefix}[Object]${depth===0 ? `----------------------------------------------------------------` : ''}`);
      logVariables(value, `${spaces}${key}`, depth + 1);
    } else if (Array.isArray(value)) {
      console.log(`${spaces}${spaces}${subPrefix}[Array]${depth===0 ? `---------------------------------------------------------------` : ''}`);
      logVariables(value, `${spaces}${key}`, depth + 1);
    } else if (typeof value === 'object' && value !== null) {
      console.log(`${subPrefix}`);
      logVariables(value, `${spaces}${key}`, depth + 1);
    } else if (typeof value === 'function') {
      console.log(`${spaces}${spaces}${subPrefix}[Function]`);
    } else if (typeof value === 'undefined') {
      console.log(`${spaces}${spaces}${subPrefix}[undefined]`);
      faulty ++
      faultyKeys[subPrefix] = value
    } else {
      console.log(`${spaces}${spaces}${subPrefix}${typeof value === 'function' ? 'function' : value}`);
    }
  }

  if (depth === 0) {
    const keys = Object.keys(data);
    let totalKeys = keys.length 
    console.log(`${prefix}--------------------------{ Total Keys: ${totalKeys} }------------------------------`);
    console.log(`${prefix}--------------------------{ Faulty Keys: ${faulty} }-----------------------------`);
    for (let key in faultyKeys){
      console.log('           -', key)
    }
  }
  
  if (depth === 0) {
    console.log(`${prefix}============================={ END LOG }================================= `);
    console.log()
  }

  if (depth === 1) {
    console.log(`------------------------------------------------------------------------------------`);
    console.log()
  }

}










  

  // Example usage:
  // const sampleData = {
  //   name: 'John',
  //   age: 25,
  //   sayHello: function() {
  //     console.log('Hello!');
  //   },
  //   address: {
  //     street: '123 Main St',
  //     city: 'Anytown',
  //     postalCode: '12345'
  //   },
  //   hobbies: ['reading', 'coding', 'traveling']
  // };
  
  // logVariables(sampleData);
  