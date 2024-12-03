/**
 * Classe responsável por classificar os dados de PPM (partes por milhão) com base em faixas predefinidas.
 * 
 * A classe `DataClassifier` contém um método estático que recebe o valor de PPM e retorna uma classificação
 * associada a uma descrição textual e uma cor para indicar o nível de qualidade do dado.
 * 
 * @class
 */
export default class DataClassifier {
    /**
     * Classifica o valor de PPM (partes por milhão) em três categorias: "bom", "moderado" e "ruim".
     * 
     * - Para valores abaixo de 50, a classificação é "bom" com a cor "verde".
     * - Para valores entre 50 e 100, a classificação é "moderado" com a cor "amarelo".
     * - Para valores acima de 100, a classificação é "ruim" com a cor "vermelho".
     * 
     * @param {number} ppm - O valor de PPM a ser classificado.
     * @returns {Object} Um objeto contendo a classificação e a cor associada:
     * - `content`: A descrição da classificação (ex: "bom", "moderado", "ruim").
     * - `color`: A cor associada à classificação (ex: "green", "yellow", "red").
     * 
     * @example
     * const result = DataClassifier.classify(45);
     * console.log(result); // { content: "bom", color: "green" }
     */
    static classify(ppm) {
        if (ppm < 50) {
            return { content: "bom", color: "green" };
        } else if (ppm >= 50 && ppm <= 100) {
            return { content: "moderado", color: "yellow" };
        } else {
            return { content: "ruim", color: "red" };
        }
    }
}
