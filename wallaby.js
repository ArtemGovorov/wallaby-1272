module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js'
    ],

    tests: [
      'test/**/*.spec.js'
    ],
    //
    // compilers: {
    //   '**/*.js': wallaby.compilers.babel({
    //     babel: require("babel-core"),
    //     plugins: [
    //       require("babel-plugin-transform-flow-strip-types")
    //     ]
    //   })
    // },

    env: {
      type: 'node'
    }
  };
};