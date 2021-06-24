const assert = require('assert');
const task = require('../modules/task');
const task1 = require('../modules/task');
const task2 = require('../modules/task');
const task3 = require('../modules/task');


//Describe tests
describe('Save Records',function(){
  
    //Create test
    
    it('Save record to db', function(done){

         char = new task({
            description:'Start record',
            completed: false
        });

       
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });

        char = new task1({
            description:'Start project',
            completed: true
        });

       
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    
         char = new task2({
        description:'read SQL',
        completed: true
        });

   
         char.save().then(function(){
         assert(char.isNew === false);
         done();
       
        });

         char = new task3({
         description:'Start assignment',
         completed: false
        });


        char.save().then(function(){
          assert(char.isNew === false);
         done();
        });
    });
});
   
   
