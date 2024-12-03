export default class SSEService {
    constructor(url) {
        this.eventSource = new EventSource(url);
    }

    connect(onMessageCallback, onErrorCallback) {
        this.eventSource.onopen = () => console.log("Conexão SSE aberta!");
        this.eventSource.onmessage = (event) => onMessageCallback(event.data);
        this.eventSource.onerror = (error) => onErrorCallback(error);
    }

    close() {
        this.eventSource.close();
        console.log("Conexão SSE encerrada.");
    }
}