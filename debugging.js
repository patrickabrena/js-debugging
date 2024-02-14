const USE_TYPEOF_TO_CHECK_THE_TYPE_OF_A_VARIABLE = () => {
  let seven = 7;
  let three = "3";
  console.log(seven + three);
  // Only change code below this line
  console.log(typeof seven);
  console.log(typeof three);
};
USE_TYPEOF_TO_CHECK_THE_TYPE_OF_A_VARIABLE();

// just look at freeCodeCamp's debugging section under legacy JS DS&A course
// everything else about catching bugs is stuff I've already done by just building projects

const USE_CAUTION_WHEN_REINITIALIZING_VARIABLES_INSIDE_A_LOOP = () => {
  function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      row = []; // *****reinit the row variable to an empty arr gives desired answer
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns

        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }

  let matrix = zeroArray(3, 2);
  console.log(matrix);
};
USE_CAUTION_WHEN_REINITIALIZING_VARIABLES_INSIDE_A_LOOP();

const PREVENT_INFINITE_LOOPS_WITH_A_VALID_TERMINAL_CONDITION = () => {
  function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }
  console.log(myFunc);
};
PREVENT_INFINITE_LOOPS_WITH_A_VALID_TERMINAL_CONDITION();
