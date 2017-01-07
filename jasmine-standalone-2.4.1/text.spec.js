(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

       it('should return [7, 9] for [9, 7]', function () {
        expect(findMinMax([9, 7])).toEqual([7, 9]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

       it('should return [10, 80] for [10, 20, 30, 40, 50, 60, 70,80]', function () {
        expect(findMinMax([10, 20, 30, 40, 50, 60, 70,80])).toEqual([10, 80]);
      });

      it('should return [10,30] for [11, 20, 10 , 30]', function () {
        expect(findMinMax([11,20,10,30])).toEqual([10, 30]);
      });



    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [5] for [5, 5]', function () {
        expect(findMinMax([5,5])).toEqual([5]);
      }); 

      it('should return [7] for [7,7,7]', function () {
        expect(findMinMax([7,7,7])).toEqual([7]);
      });

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });


      it('should return [8] for [8,8,8,8]', function () {
        expect(findMinMax([8,8,8,8])).toEqual([8]);
      });

    });

  });

})();