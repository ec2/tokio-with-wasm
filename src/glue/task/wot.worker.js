import init,  * as wasm_bindgen from '../../../../../';
self.onmessage = ({data}) => {{
    let initialised = init(data.module, data.memory).catch(err => {{
        // Propagate to main `onerror`:
        setTimeout(() => {{
            throw err;
        }});
        // Rethrow to keep promise rejected and prevent execution of further commands:
        throw err;
    }});
    
    self.onmessage = async({data}) => {
        await initialised;
        wasm_bindgen.task_worker_entry_point(data);
    };
}}
