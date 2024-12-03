import { DOMAppender, ElementContentUpdater, BackgroundColorUpdater } from "./dashboardUtils.js";

export default class Dashboard {
    constructor(dashboardElement) {
        this.dashboard = dashboardElement;
        this.contentUpdater = ElementContentUpdater;
        this.colorUpdater = BackgroundColorUpdater;
        this.domAppender = DOMAppender;
    }

    updateStation(idStation, {content, color}) {
        this.contentUpdater.update(idStation, content);
        this.colorUpdater.update(idStation, color);
    }

    addStations(stations) {
        this.domAppender.append(this.dashboard, stations);
    }
}