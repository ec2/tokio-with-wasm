export function createWorker(module, memory){
    const worker = new Worker(
        new URL('./wot.worker.js', import.meta.url),
        {
            type: 'module',
        }
    )
    worker.postMessage({module, memory})
    return worker;
}