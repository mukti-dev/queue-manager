// Queue.ts

type Task<T = void> = {
    priority: number;
    task: () => Promise<T>;
};

export class Queue<T = void> {
    private items: Task<T>[] = [];
    private isProcessing: boolean = false;

    // Add a task to the queue with priority
    enqueue(task: () => Promise<T>, priority: number = 0): void {
        this.items.push({ task, priority });
        this.items.sort((a, b) => b.priority - a.priority); // Sort tasks by priority
        console.log(this.items)
        this.processQueue();
    }

    // Process the queue
    private async processQueue(): Promise<void> {
        if (this.isProcessing) return;
        this.isProcessing = true;

        while (this.items.length > 0) {
            const taskItem = this.items.shift();
            if (taskItem) {
                try {
                    await taskItem.task();
                } catch (error) {
                    console.error('Error processing task:', error);
                }
            }
        }

        this.isProcessing = false;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size(): number {
        return this.items.length;
    }

    // Clear all tasks in the queue
    clear(): void {
        this.items = [];
    }
}