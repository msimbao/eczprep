import * as Icons from 'phosphor-react-native';

export const QUIZ = [
  {
    id: '1',
    title: 'English G7 2017',
    level: 1,
    questions: [
      {
        title: 'I have given this book to you. Therefore, it is.....',
        alternatives: [
          'mine',
          'ours',
          'theirs',
          'yours'
        ],
        answer:'When something is given to you, it becomes YOURS',
        correct: 3
      },
      {
        title: 'Mwila remained in water ......... a long time.',
        alternatives: [
          'at',
          'in',
          'for',
          'to'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 2
      },
      {
        title: 'All the pupils were given books ..... Sepiso',
        alternatives: [
          'beside',
          'except',
          'unless',
          'without'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 1
      },
      {
        title: 'He checked his punctured tube by ........ it into a basin of water.',
        alternatives: [
          'put',
          'putting',
          'has put',
          'had put'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 1
      },
      {
        title: 'John and Mary Love _____ parents.',
        alternatives: [
          'her',
          'his',
          'their',
          'them'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 2
      },
      {
        title: '______ people study Spanish nowadays.',
        alternatives: [
          'A little',
          'Few',
          'Little',
          'Much'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 1
      },
      {
        title: 'He is jealous _____ his friend.',
        alternatives: [
          'of',
          'off',
          'on',
          'with'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 0
      },
      {
        title: 'The dog ______ was shot died instantly.',
        alternatives: [
          'whose',
          'whom',
          'who',
          'which'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 3
      },
      {
        title: 'Mulenga is _____ cruel than Mwaka.',
        alternatives: [
          'so',
          'most',
          'more',
          'like'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 2
      },
      {
        title: 'Mulima will go to the hospital _____ you allow him.',
        alternatives: [
          'until',
          'unless',
          'if',
          'but'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 3
      },
      {
        title: 'I saw you pick up my pencil case ______ you cannot deny it.',
        alternatives: [
          'and',
          'as',
          'but',
          'yet'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 0
      },
      {
        title: 'They were talking _____ the others were eating.',
        alternatives: [
          'despite',
          'even',
          'in spite',
          'while'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 3
      },
      {
        title: 'Chipo picked a _________ of flowers for her grandmother.',
        alternatives: [
          'bunch',
          'bundle',
          'group',
          'heap'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 0
      },
      {
        title: 'How _______ does the dispensary open?',
        alternatives: [
          'always',
          'often',
          'sometimes',
          'usually'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 1
      },
      {
        title: 'AIDS cases ____ to be common in the 1980s.',
        alternatives: [
          'was started',
          'starts',
          'starting',
          'started'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 3
      },
      {
        title: '______ of our learners arrived at school late because it was raining in the morning.',
        alternatives: [
          'Enough',
          'Much',
          'Plenty',
          'Several'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 3
      },
      {
        title: 'Marla saw a ______ of bees near the well.',
        alternatives: [
          'band',
          'bunch',
          'pack',
          'swarm'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 3
      },      {
        title: 'When I reached home, the dog had already _____ the food.',
        alternatives: [
          'ate',
          'eat',
          'eating',
          'eaten'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 3
      },      {
        title: 'The noise that came from the stadium was the _____ ',
        alternatives: [
          'loud',
          'louder',
          'loudest',
          'more loud'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 2
      },      {
        title: 'I saw a _______ of lions in the Luangwa National Game Park yesterday.',
        alternatives: [
          'group',
          'pride',
          'shoal',
          'swarm'
        ],
        answer:'I have given this book to you. Therefore, it is.....',
        correct: 1
      },
    ]
  },
  {
    id: '2',
    title: 'Math G7 2021',
    svg: Icons.MathOperations,
    level: 2,
    questions: [
      {
        title: "Que tipo de atribuição é esta variável, `const fullName: string = 'Dylan Israel';`?",
        alternatives: [
          'Explicita',
          'Implícita'
        ],
        correct: 0
      },
      {
        title: "Qual é o tipo de `const exemplo = ['Dylan']`?",
        alternatives: [
          'unknown[]',
          'string',
          'string[]',
          'any[]'
        ],
        correct: 2
      },
      {
        title: "keyof pode ser usado com assinaturas de índice para extrair o tipo de índice.",
        alternatives: [
          'Verdadeiro',
          'False',
        ],
        correct: 0
      },
    ]
  },
  {
    id: '3',
    title: 'Science G7 2023',
    level: 2,
    questions: [
      {
        title: 'Qual a melhor descrição para identificar o Stack Navigator?',
        alternatives: [
          'Adiciona um menu fixo na parte inferior do dispositivo, facilitando o acesso a telas utilizadas com mais frequência.',
          'Ao abrir uma nova tela, essa nova tela é colocada no topo da pilha de navegação e ao voltar telas, as mesmas são removidas dessa pilha.',
          'Adiciona um menu lateral, ocupando toda a altura do dispositivo. No primeiro momento esse menu fica escondido e você consegue abrir o menu arrastando a tela.'
        ],
        correct: 1
      },
      {
        title: 'Ao “tipar” as rotas, você tem a vantagem de no momento da navegação saber se uma rota recebe parâmetros ou não e qual o formato dos parâmetros.',
        alternatives: [
          'Verdadeiro.',
          'Falso'
        ],
        correct: 0
      },
      {
        title: 'Sobre o NavigationContainer é correto afirmar.',
        alternatives: [
          'O NavigationContainer é o componente no qual criamos uma rota na aplicação, passando para ele as propriedades "name" e "component".',
          'O NavigationContainer  é um “hook” exportado de dentro do  react navigation que nos permite acessar funções como o "navigate" e o "goBack".',
          'O NavigationContainer é um contexto que compartilha com nossa aplicação, todas as rotas e propriedades de navegação.'
        ],
        correct: 2
      },
    ]
  },
  {
    id: '4',
    title: 'G7 Social Studies 2019',
    level: 3,
    questions: [
      {
        title: 'CSS-in-JS é a estratégia de estilo pela qual o JavaScript é usado para estilizar componentes.',
        alternatives: [
          'Verdadeiro',
          'Falso'
        ],
        correct: 0
      },
      {
        title: 'Assinale abaixo a alternativa que não corresponde a uma característica do Styled Components.',
        alternatives: [
          'Realizar a importação default do styled e  e utilizá-lo para criar os componentes (ex.: styled.View).',
          'É possível tanto criar componentes estilizados predefinidos com o "styled." quanto repassar componentes personalizados para ele por styled().',
          'A forma de estilizar os componentes se assemelha bastante ao que utilizamos quando trabalhamos diretamente com CSS (letras minúsculas, separadas por hífen e com ponto e vírgula ao final).',
          'É possível personalizar apenas as estilizações dos componentes (prop style) via styled, ou seja, não é possível configurar outras propriedades/atributos do componente.'
        ],
        correct: 1
      },
      {
        title: 'Com o Styled Components é possível isolar a estrutura do componente da sua estilização.',
        alternatives: [
          'Verdadeiro',
          'Falso'
        ],
        correct: 0
      },
    ]
  },
  {
    id: '5',
    title: 'G7 Special Paper 2022',
    level: 2,
    questions: [
      {
        title: 'Qual dos seguintes métodos salva informações no AsyncStorage?',
        alternatives: [
          'AsyncStorage.removeItem',
          'AsyncStorage.setItem',
          'AsyncStorage.getItem'
        ],
        correct: 1
      },
      {
        title: 'O que melhor descreve o PropDrilling?',
        alternatives: [
          'Estratégia onde você repassa propriedades entre componentes até você chegar no componente desejado.',
          'Estratégia onde você salva informações localmente no dispositivo (storage) e acessar quando precisar.',
          'Estratégia onde você compartilha informações entre componentes através de contextos (Context API).'
        ],
        correct: 1
      },
      {
        title: 'Qual a maneira correta de salvar objetos no AsyncStorage?',
        alternatives: [
          "await AsyncStorage.setItem('@app:key', { id: 1, name: 'Item 1' });",
          "await AsyncStorage.getItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));",
          "await AsyncStorage.setItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));"
        ],
        correct: 2
      },
    ]
  },
  {
    id: '6',
    title: 'G7 Special Paper Two 2018',
    level: 1,
    questions: [
      {
        title: 'Assinale a alternativa correta sobre React Native:',
        alternatives: [
          'React Native é um framework Javascript baseado no React capaz de criar aplicações apenas para Android e iOS.',
          'Diferentemente do React, o React Native é construído totalmente pela comunidade e não tem nenhuma relação com o Facebook.',
          'Com o React Native você consegue manter quase toda a sua aplicação pelo Javascript e manipular código nativo caso necessário.',
          'Apesar do destaque do ReactJS na Web, o React Native não é muito utilizado atualmente no mercado de trabalho da área mobile.'
        ],
        correct: 2
      },
      {
        title: 'Assinale a alternativa incorreta sobre React Native CLI e Expo',
        alternatives: [
          'Tanto com React Native CLI quanto com Expo é possível criar aplicações para iOS e Android.',
          'React Native CLI é a maneira mais "crua" de se criar um projeto React Native. Já o Expo traz mais funcionalidades em cima dessa base, por exemplo o Expo Go.',
          'Com o Expo é possível testar aplicações iOS pelo Expo Go caso você tenha um dispositivo físico iOS mesmo que não tenha um sistema macOS, o que não é possível pela React Native CLI.',
          'A documentação oficial do React Native recomenda apenas a React Native CLI, nem chegando a mencionar o Expo.'
        ],
        correct: 3
      },
      {
        title: 'Sobre o Expo, assinale a alternativa correta:',
        alternatives: [
          'Expo tem dois caminhos tradicionais ao criar um projeto: Managed Workflow e Bare Workflow.',
          'Managed Workflow é a maneira de criar projetos onde desde o início você tem acesso ao seu código nativo.',
          'Com o Bare Workflow você não pode utilizar em nenhum momento o Expo Go.',
          'A configuração do ambiente React Native para Managed Workflow é mais complexa do que para Bare Workflow'
        ],
        correct: 3
      },
      {
        title: 'Sobre componentização em React Native, escolha a alternativa incorreta:',
        alternatives: [
          'Componentizar é uma forma de reaproveitar trechos de código em vários locais do seu código.',
          'Uma das vantagens da componentização é simplificar um componente muito complexo em múltiplos componentes menores, facilitando assim na manutenção do código.',
          'Apesar de ajudar no reaproveitamento e simplificação do código, componentizar reduz a produtividade e legibilidade do projeto.',
          'Nenhuma está correta.'
        ],
        correct: 3
      },
    ]
  },
];