var findMinMax = function(list){
// determining the minimum and maximum elements in a list
        var Min = Math.min.apply(null, list);
        var Max = Math.max.apply(null, list);
        var MinNMax = [Min,Max]
        var  is_equal = []