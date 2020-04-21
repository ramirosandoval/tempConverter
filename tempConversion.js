const ftoc = function(grades) {
  let roundedAndTransformedGrade = ((grades - 32) * (5/9));
  if (roundedAndTransformedGrade % 1 != 0){
    return parseFloat(roundedAndTransformedGrade.toFixed(1)); 

  }else{
    return roundedAndTransformedGrade;
  }
}

const ctof = function(grades) {
  let roundedAndTransformedGrade = ( grades * (9/5) + 32);
  if (roundedAndTransformedGrade % 1 != 0){
    return parseFloat(roundedAndTransformedGrade.toFixed(1));

  }else{
    return roundedAndTransformedGrade;
  }
}

module.exports = {
  ftoc,
  ctof
}
