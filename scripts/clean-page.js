// Clear DOM
document.documentElement.innerHTML = '';

// Remove Event listeners
for (const obj of [document, window]) {
    for (const event of Object.values(getEventListeners(obj))) {
        for (const {type, listener, useCapture} of event) {
            obj.removeEventListener(type, listener, useCapture)
        }
    }    
}
