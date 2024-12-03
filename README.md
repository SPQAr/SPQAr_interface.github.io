# Interface SPQAr
A aplicação consiste em uma interface para monitorar, em tempo real, dados sobre a qualidade do ar coletados por protótipos sobre a qualidade do ar da cidade de São Paulo. Essa interface

---

### **Principais Funcionalidades**
1. **Monitoramento em Tempo Real**:
   - Utiliza `SSE (Server-Sent Events)` para conexão contínua com o servidor.
   - Recebe atualizações em tempo real sobre os níveis de poluição, interpretados como ppm (partículas por milhão).

2. **Classificação dos Dados**:
   - Os dados recebidos são classificados como *bom*, *moderado* ou *ruim* por meio de algoritmos personalizados (classe `DataClassifier`).
   - Cada classificação é associada a cores específicas (verde, amarelo e vermelho) para facilitar a interpretação visual.

3. **Dashboard Interativo**:
   - As informações das estações são organizadas em um dashboard que exibe o status atual de cada estação.
   - Inclui painéis interativos que mudam de cor e conteúdo de acordo com as atualizações de dados.

4. **Gerenciamento de Estações**:
   - Os painéis das estações são criados dinamicamente utilizando fábricas de componentes e classes utilitárias para modularidade (como `StationFactory` e `ElementCreator`).

5. **Design Responsivo e Moderno**:
   - Estilo consistente com foco na usabilidade e experiência do usuário.
   - Utiliza variáveis CSS e classes bem estruturadas para manter a estética e o desempenho.

---

### **Tecnologias Utilizadas**
- **Frontend**: HTML, CSS, JavaScript (ES6+).
- **API e Comunicação**:
  - Conexão com servidor via `EventSource` (para eventos SSE).
  - Organização modular das funcionalidades por meio de classes como `DashboardManager` e `SSEService`.
- **Design Responsivo**:
  - Estrutura baseada em variáveis CSS e layout flexível para exibição em dispositivos diversos.

---

### **Valor Agregado**
1. **Clareza e Simplicidade**:
   - Exibe dados complexos de maneira simplificada e acessível, permitindo ao usuário final entender a situação da qualidade do ar sem necessidade de conhecimentos técnicos aprofundados.

2. **Atualização Contínua e Precisão**:
   - Integração em tempo real evita a necessidade de recarregar a página para obter novos dados, otimizando a experiência do usuário.

3. **Contribuição Social**:
   - Proporciona informações valiosas para a sociedade e autoridades públicas, possibilitando decisões informadas para melhorar a qualidade do ar e a saúde urbana.

4. **Modularidade e Extensibilidade**:
   - O código foi projetado com modularidade em mente, facilitando a manutenção e a adição de novas funcionalidades no futuro.

5. **Interatividade Visual**:
   - Uso de cores e painéis dinâmicos promove uma experiência de usuário mais rica e intuitiva.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## Impacto do Projeto

Por meio da integração de tecnologias modernas e acessíveis, este protótipo busca resolver um dos maiores desafios urbanos: a poluição do ar. A plataforma proposta oferece dados confiáveis e em tempo real, auxiliando na criação de políticas públicas e promovendo um ambiente mais saudável e sustentável.

