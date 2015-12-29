var exports = module.exports = {};
exports.range = function(start, end, countBy){
  var myRange = [];
  if (start < end){
    if(!countBy) var countBy = 1;
    while (start <= end){
      myRange.push(start);
      start += countBy;
    }
  } else {
    if (!countBy) var countBy = -1;
    while (start >= end){
      myRange.push(start);
      start += countBy;
    }
  }
  return myRange;
}

exports.sum = function(range){
  var sum = 0;
  for (var i=0; i<range.length; i++){
    sum += range[i];
  }
  return sum;
}

exports.reverseArray = function(range){
  
}
