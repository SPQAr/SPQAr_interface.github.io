export default class DataClassifier {
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