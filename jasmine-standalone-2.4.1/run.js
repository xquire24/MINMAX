var findMinMax = function(num){
// determining the minimum and maximum elements in a list
        var Min = Math.min.apply(null, num);
        var Max = Math.max.apply(null, num);
        var MinNMax = [Min,Max]