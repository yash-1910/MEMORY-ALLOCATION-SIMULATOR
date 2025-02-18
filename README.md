# MEMORY-ALLOCATION-SIMULATOR


## Overview
This project is a simple **Memory Allocation Simulator** built using HTML, CSS, and JavaScript. It allows users to simulate memory management by adding processes with specified sizes and execution times.

## Features
- Add processes with custom size and execution time.
- Simulate memory allocation dynamically.
- Track process execution and deallocation.
- Basic memory management simulation.

## Technologies Used
- **HTML**: Structure the web page.
- **CSS**: Style the user interface.
- **JavaScript**: Handle process creation, memory allocation logic, and execution.

## File Structure
## How to Use
1. Open `index.html` in a web browser.
2. Enter process size and execution time in the form fields.
3. Click the submit button (automatically triggered when data is entered).
4. The process will be added to the memory management queue.
5. The simulation will allocate memory based on availability.
6. Processes will execute and deallocate memory when done.

## JavaScript Explanation
### `Process` Class
Represents a process with:
- `size`: Memory required.
- `timeLeft`: Remaining execution time.
- `allocatedBlock`: Assigned memory block.
- `tick()`: Decrements execution time.

### `MemControlBlock` Class
Represents memory blocks with:
- `size`: Size of the block.
- `available`: Whether it's free or occupied.
- `setProcess(process)`: Assigns or removes a process.

## Future Enhancements
- Implement different memory allocation strategies (First Fit, Best Fit, Worst Fit).
- Add a visual representation of memory allocation.
- Improve UI with better styling.
- Introduce process priority-based allocation.

## Author
**Tanay Gupta**

## License
This project is open-source and available for use and modification.
