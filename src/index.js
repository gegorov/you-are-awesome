// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = property => property;


const createNotEnumerableProperty = (property) => {
  /* eslint-disable */
  Object.defineProperty(
    Object.prototype,
    property,
    {
      value: 'value',
      enumerable: false,
    },
  );
  /* eslint-enable */
  return property;
};

const createProtoMagicObject = () => {
  const magic = () => {};
  magic.prototype = magic.__proto__; // eslint-disable-line
  return magic;
};
const incrementor = () => {

};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = param => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(param);
  }, 1000);
  setTimeout(() => {
    reject(new Error());
  }, 2000);
});

const getDeepPropertiesCount = (object) => {
  let counter = 0;

  const helper = (obj) => {
    /* eslint-disable */
    for (const subObj in obj) {
      counter += 1;
      helper(obj[subObj]);
      
    }
      /* eslint-enable */
  };

  helper(object);
  return counter;
};
const createSerializedObject = () => {
  const object = { first: 'x', second: 'y' };
  return new String(JSON.stringify(object)); // eslint-disable-line
};
const toBuffer = () => {};
const sortByProto = (arr) => arr.sort((a, b) => a.__proto__ - b.__proto__); // eslint-disable-line


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.toBuffer = toBuffer;
exports.sortByProto = sortByProto;
