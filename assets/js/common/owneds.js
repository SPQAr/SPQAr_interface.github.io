/**
 * Módulo responsável por criar e exportar uma instância da classe `Dashboard`.
 * 
 * Este módulo importa a classe `Dashboard` e a instancia passando o elemento DOM
 * com o ID `'dashboard'` como parâmetro para o construtor da classe. A instância
 * criada é então exportada para ser usada em outras partes do código.
 * 
 * @module dashboardInitializer
 */

import Dashboard from "../dashboard/dashboardManager.js";

// Criação da instância da classe `Dashboard` passando o elemento DOM com o ID 'dashboard'.
const dashboard = new Dashboard(document.getElementById('dashboard'));

/**
 * Instância da classe `Dashboard`, que pode ser utilizada para gerenciar e atualizar
 * o painel de controle da aplicação.
 * 
 * @type {Dashboard}
 */
export default dashboard;
