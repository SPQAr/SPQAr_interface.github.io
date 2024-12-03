/**
 * Módulo para gerenciar a comunicação em tempo real com o servidor e atualizar o dashboard com as estações.
 * 
 * Este módulo estabelece uma conexão SSE (Server-Sent Events) com o servidor, recebe dados em tempo real,
 * processa as informações sobre as estações e suas classificações, e atualiza o dashboard com os dados recebidos.
 * Utiliza os módulos `SSEService`, `DataClassifier`, `createStation` e `dashboard`.
 * 
 * @module dashboardUpdater
 */

import dashboard from "../common/owneds.js";
import SSEService from "./sseService.js";
import DataClassifier from "./dataClassifier.js";
import createStation from "../station/stationFactory.js";

// Configurações iniciais

/**
 * Instância do serviço SSE para conexão com o servidor.
 * 
 * @type {SSEService}
 */
const sseService = new SSEService('http://localhost:3000/data');

/**
 * Estabelece a conexão com o servidor SSE e define os callbacks de sucesso e erro.
 * 
 * - O callback de sucesso é responsável por processar os dados recebidos e atualizar o dashboard.
 * - O callback de erro lida com problemas na conexão SSE.
 * 
 * @function
 * @param {function} successCallback - Função chamada quando os dados são recebidos com sucesso do servidor.
 * @param {function} errorCallback - Função chamada quando ocorre um erro na conexão SSE.
 */
sseService.connect(
    /**
     * Callback de sucesso para processar dados recebidos.
     * 
     * @param {string} data - Dados recebidos do servidor, em formato JSON.
     * 
     * @returns {void}
     */
    (data) => {
        console.log("Mensagem recebida do servidor:", data);

        try {
            const parsedData = JSON.parse(data);
            console.log("parsedData: ", parsedData); // Verifique os dados recebidos aqui

            // Verificar se parsedData.stations existe e é um array
            if (Array.isArray(parsedData.stations)) {
                parsedData.stations.forEach(station => {
                    dashboard.addStations(createStation(station).create());
                });
            } else {
                console.log("Nenhuma estação encontrada ou formato incorreto.");
            }

            // Caso o dado seja de ppm, faz o processamento
            if (parsedData.ppm) {
                const classifiedData = DataClassifier.classify(parsedData.ppm);
                dashboard.updateStation(`station-${parsedData.id}`, classifiedData);
            }

        } catch (error) {
            console.error("Erro ao processar dados:", error);
        }
    },
    /**
     * Callback de erro para lidar com falhas na conexão SSE.
     * 
     * @param {Error} error - O erro ocorrido na conexão SSE.
     * 
     * @returns {void}
     */
    (error) => {
        console.error("Erro na conexão SSE:", error);
    }
);
