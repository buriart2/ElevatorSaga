{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator2 = elevators[1];
        var uppressed = [];
        var downpressed = [];
        var backtozero = false;
     

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
          
            var floor;
            if (downpressed.length > 0) {
                floor = downpressed.pop();
            } else if (uppressed.length > 0){
                floor = uppressed.pop();
            } else if (backtozero){
                floor = 0;
            } else {
                floor = elevator.currentFloor();
            }
            // go to the floor chosen above
            elevator.goToFloor(floor);
        });
        
        elevator2.on("idle", function() {

            var floor;
            if (downpressed.length > 0) {
                floor = downpressed.pop();
            } else if (uppressed.length > 0){
                floor = uppressed.pop();
            } else if (backtozero){
                floor = 0;
            } else {
                floor = elevator2.currentFloor();
            }
            // go to the floor chosen above
            elevator2.goToFloor(floor);
        });
        
        
        
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);
        })
        elevator2.on("floor_button_pressed", function(floorNum) {
            elevator2.goToFloor(floorNum);
        })
        
        elevator.on("stopped_at_floor", function(floorNum) {
            elevator.goToFloor(0);
        })
        elevator2.on("stopped_at_floor", function(floorNum) {
            elevator2.goToFloor(0);
        })
        
       
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}