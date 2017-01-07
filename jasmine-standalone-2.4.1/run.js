var findMinMax = function(list){
// determining the minimum and maximum elements in a list
        var Min = Math.min.apply(null, list);
        var Max = Math.max.apply(null, list);
        var MinNMax = [Min,Max]
        var  is_equal = []

//checking whether the element is min and max
        for(i= 0; i < list.length; i++){
            if(list[i] == list[i+1]){
                 is_equal.push(list[i])
                return is_equal
            }
            else return MinNMax
        }
    }