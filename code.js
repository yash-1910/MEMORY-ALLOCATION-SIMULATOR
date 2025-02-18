function Process(size, time) {
    this.size = size;
    this.timeLeft = time;
    this.allocatedBlock = null;
    this.id = processID;

    processID += 1;

    this.isAllocated = function() {
        return this.allocatedBlock != null;
    };

    this.tick = function() {
        this.timeLeft -= 1;
    };
}

function MemControlBlock(size) {
    this.size = size;
    this.process = null;
    this.available = true;
    this.next = null;
    this.prev = null;
    this.fromPartition = false; // Used to determine whether height of a MemControlBlock needs to be added

    this.setProcess = function(process) {
        if (process == null) {
            this.process = null;
            this.available = true;
        } else {
            this.process = process;
            this.available = false;
        }
    };
}

