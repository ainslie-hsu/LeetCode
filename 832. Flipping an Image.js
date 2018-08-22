var flipAndInvertImage = function(A) {
  var flip = A.map(arr => arr.reverse());
  return flip.map(arr => {
    return arr.map(element => invert(element));
  });
};

var invert = function(val) {
  if (val === 0) {
    return 1;
  }
  if (val === 1) {
    return 0;
  }
}
