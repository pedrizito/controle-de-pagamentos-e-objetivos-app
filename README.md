# Controle de Pagamentos e Objetivos

## Esse software tem por objetivo cadastrar e dividir contas feitas em grupos de pessoas, divindo o valor igualmente que cada pessoa deve pagar;

### Deploy

https://pedrizito.github.io/controle-de-pagamentos-e-objetivos-app/

### Protótipo

https://www.figma.com/file/kQCjR6Ox3UduUxS46A4hTQ/Sistema-de-Gerenciamento-de-Compras?type=design&node-id=0-1&mode=design&t=asM9KwV1tzPjgPZ7-0

### Checklist

- [x] Criar um repositório no GitHub com a estrutura do Gitflow, incluindo pelo menos as branches principais "main" e "develop."
- [x] Utilizar componentes de um framework CSS, como Bootstrap, Materialize ou outro à sua escolha.
- [x] Apresentar as telas com layout responsivo, adaptando-se a diferentes tamanhos de tela, usando um framework CSS ou implementações personalizadas.
- [x] Desenvolver o layout da aplicação com componentes, tornando o cabeçalho e o rodapé componentes reutilizáveis.
- [x] Aplicar pelo menos dois tipos de data-binding, como Interpolation, Property Binding, Event Binding, Two-Way Data Binding, 
- [x] Empregar variáveis de template e a anotação ViewChild para interagir com elementos do DOM ou componentes diretamente no template ou no código TypeScript do aplicativo.
- [x] Estabelecer a passagem de dados entre componentes por meio da hierarquia de componentes, empregando as anotações @Input e @Output.
- [x] Transferir dados, por meio de serviços, entre componentes que não estão diretamente relacionados.
- [x] Mapear os componentes às rotas no módulo de rotas, criando uma estrutura de navegação eficiente.
- [x] Permitir a navegação fluida entre as diferentes páginas do aplicativo por meio de links e botões de navegação.
- [x] Validar os campos do formulário com expressões regulares (REGEX) e apresentar as mensagens de erro.
- [x] Implementar máscaras em campos de formulário, quando necessário, para melhorar a experiência do usuário ao inserir dados.
- [x] Desabilitar o botão de envio (submit) enquanto o formulário estiver em um estado inválido.
- [x] Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Promises.
- [x] Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Observables.
- [x] Criar o cadastro completo de uma entidade, incluindo operações de criação, leitura, atualização e exclusão (CRUD) utilizando uma API, como o JSON Server.
- [x] Utilizar o armazenamento local (LocalStorage ou SessionStorage) para armazenar dados temporários, quando necessário
- [x] Aplicar a diretiva estrutural ngFor para apresentar uma lista dinâmica de dados em seu aplicativo.
- [x] Utilizar a diretiva ngIf para controlar a exibição ou ocultação de elementos com base em condições específicas.
- [x] Formatar a apresentação de dados com Pipes, de acordo com os requisitos do aplicativo.
- [x] Executar o processo de build da aplicação e realizar o deploy para tornar o aplicativo acessível online.

## Manual de Execução

 -   1 - Clonar o projeto com git clone;
 -   2 - Fazer checkout na branch develop;
 -   3 - Abrir o projeto na sua IDE;
 -   4 - Em um terminal, acessar a pasta do projeto e executar o comando npm install;
 -   5 - Em um terminal, na pasta do projeto executar o comando npm run json:serve;
 -   6 - Em um outro terminal, também na pasta do projeto executar o comando ng serve -o;