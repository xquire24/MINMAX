var findMinMax = function(list){
// determining the minimum and maximum elements in a list
        var Min = Math.min.apply(null, list);
        var Max = Math.max.apply(null, list);
        var MinNMax = [Min,Max]
        var  is_equal = []

//checking whether the element is equal to itself
        for(i= 0; i < num.length; i++){
            if(num[i] == num[i+1]){
                 is_equal.push(num[i])
                return is_equal
            }
            else return MinNMax
        }
    }