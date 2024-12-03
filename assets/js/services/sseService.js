/**
 * Classe responsável por gerenciar a comunicação via Server-Sent Events (SSE).
 * 
 * A classe `SSEService` permite estabelecer uma conexão SSE com um servidor, processar mensagens recebidas
 * em tempo real e gerenciar o fechamento da conexão.
 * 
 * @class
 */
export default class SSEService {
    /**
     * Cria uma instância da classe `SSEService` e inicializa a conexão SSE com a URL fornecida.
     * 
     * @param {string} url - A URL do servidor com a qual a conexão SSE será estabelecida.
     * 
     * @example
     * const sseService = new SSEService('http://localhost:3000/data');
     */
    constructor(url) {
        this.eventSource = new EventSource(url);
    }

    /**
     * Estabelece a conexão com o servidor e define os callbacks para eventos de sucesso e erro.
     * 
     * @param {function} onMessageCallback - Função chamada quando uma mensagem é recebida do servidor.
     * @param {function} onErrorCallback - Função chamada quando ocorre um erro na conexão SSE.
     * 
     * @returns {void}
     * 
     * @example
     * sseService.connect(
     *   (data) => { console.log("Mensagem recebida:", data); },
     *   (error) => { console.error("Erro na conexão SSE:", error); }
     * );
     */
    connect(onMessageCallback, onErrorCallback) {
        this.eventSource.onopen = () => console.log("Conexão SSE aberta!");
        this.eventSource.onmessage = (event) => onMessageCallback(event.data);
        this.eventSource.onerror = (error) => onErrorCallback(error);
    }

    /**
     * Encerra a conexão SSE com o servidor.
     * 
     * @returns {void}
     * 
     * @example
     * sseService.close(); // Encerra a conexão SSE
     */
    close() {
        this.eventSource.close();
        console.log("Conexão SSE encerrada.");
    }
}
