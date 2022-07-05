// module wrapper function
// what is module wrapper function?
// module wrapper function is a function that is used to wrap the code of a module.
// MODULE FUNCTION is a private function .it is not accessible outside the module.
// module wrapper function is used to make the code of a module more scalable.

// (function (exports, require, module, __filename, __dirname) {
//   // module code
//   const name = "Om ";
//   console.log(name + "is a good person");
// })();

console.log(__filename);
console.log(__dirname);
console.log(module);
