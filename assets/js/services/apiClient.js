import dashboard from "../common/owneds.js";
import SSEService from "./sseService.js";
import DataClassifier from "./dataClassifier.js";
import createStation from "../station/stationFactory.js";

// Configurações iniciais
const sseService = new SSEService('http://localhost:3000/data');

sseService.connect(
    (data) => {
        console.log("Mensagem recebida do servidor:", data);

        try {
            const parsedData = JSON.parse(data);
            console.log("parsedData: ", parsedData); // Verifique os dados recebidos aqui

            // Verificar se parsedData.stations existe e é um array
            if (Array.isArray(parsedData.stations)) {
                parsedData.stations.forEach(station => {
                    dashboard.addStations(createStation(station).create())
                });
            } else {
                console.log("Nenhuma estação encontrada ou formato incorreto.");
            };

            // Caso o dado seja de ppm, faz o processamento
            if (parsedData.ppm) {
                const classifiedData = DataClassifier.classify(parsedData.ppm);
                dashboard.updateStation(`station-${parsedData.id}`, classifiedData);
            };

        } catch (error) {
            console.error("Erro ao processar dados:", error);
        }
    },
    (error) => {
        console.error("Erro na conexão SSE:", error);
    }
);
