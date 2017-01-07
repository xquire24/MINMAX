var findMinMax = function(list){
    var low = list[0];
    var high = list[0];
    var nlist = [];
  for (var i = 0; i <= list.length; i++) {
    if (list[i] <= low) {
        low = list[i];
        nlist[0]=low;
    } else if (list[i] >= high) {
        high = list[i];
        nlist[1]=high;
    }
}
return nlist;
}