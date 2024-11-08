// index.ts

import { Queue } from './Queue';

// Create a new queue for tasks returning void
const queue = new Queue();

// Define tasks that return Promise<void>
const x = async (): Promise<void> => {
    console.log('Task X started');
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('Task X completed');
};
// Define tasks that return Promise<void>
const y = async (): Promise<void> => {
    console.log('Task Y started');
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('Task Y completed');
};
// Define tasks that return Promise<void>
const z = async (): Promise<void> => {
    console.log('Task Z started');
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('Task Z completed');
};

// Enqueue the task functions
queue.enqueue(x); // enqueue x itself
queue.enqueue(y); // enqueue y itself
queue.enqueue(z,1); // enqueue z itself
console.log(queue.size())