import { IQuiz } from "../interfaces/IQuiz";

export const buildQuizzes: IQuiz[] = [
    {
        id: 1,
        title: 'Matemática básica',
        description: 'Estudo de frações',
        id_user: 1,
        id_gender: 1,
        questions: [
            {
                id: 1,
                question: "Quantos graus tem uma circunferência de raio 10?",
                answers: [
                    { id: 1, answer: '360', correct: true },
                    { id: 2, answer: '180', correct: false },
                    { id: 3, answer: '3600', correct: false },
                    { id: 4, answer: '1800', correct: false },
                    { id: 5, answer: '90', correct: false }
                ]
            },
            {
                id: 2,
                question: "Qual é a fração equivalente a 1/2?",
                answers: [
                    { id: 1, answer: '2/4', correct: true },
                    { id: 2, answer: '1/4', correct: false },
                    { id: 3, answer: '2/3', correct: false },
                    { id: 4, answer: '3/4', correct: false },
                    { id: 5, answer: '1/3', correct: false }
                ]
            },
            {
                id: 3,
                question: "Quanto é 3/5 + 2/5?",
                answers: [
                    { id: 1, answer: '1', correct: true },
                    { id: 2, answer: '3/5', correct: false },
                    { id: 3, answer: '5/5', correct: false },
                    { id: 4, answer: '1/5', correct: false },
                    { id: 5, answer: '7/5', correct: false }
                ]
            },
            {
                id: 4,
                question: "Qual fração é maior: 3/7 ou 2/5?",
                answers: [
                    { id: 1, answer: '3/7', correct: true },
                    { id: 2, answer: '2/5', correct: false },
                    { id: 3, answer: 'Ambas são iguais', correct: false },
                    { id: 4, answer: 'Nenhuma das duas', correct: false },
                    { id: 5, answer: 'Depende do contexto', correct: false }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Matemática financeira',
        description: 'Matemática financeira: Porcentagem',
        id_user: 1,
        id_gender: 1,
        questions: [
            {
                id: 1,
                question: "Qual é 10% de 200?",
                answers: [
                    { id: 1, answer: '20', correct: true },
                    { id: 2, answer: '10', correct: false },
                    { id: 3, answer: '30', correct: false },
                    { id: 4, answer: '40', correct: false },
                    { id: 5, answer: '50', correct: false }
                ]
            },
            {
                id: 2,
                question: "Se um produto custa R$ 50,00 e está com um desconto de 20%, qual será o preço final?",
                answers: [
                    { id: 1, answer: 'R$ 40,00', correct: true },
                    { id: 2, answer: 'R$ 30,00', correct: false },
                    { id: 3, answer: 'R$ 35,00', correct: false },
                    { id: 4, answer: 'R$ 45,00', correct: false },
                    { id: 5, answer: 'R$ 50,00', correct: false }
                ]
            },
            {
                id: 3,
                question: "Qual é a porcentagem de aumento de 200 para 300?",
                answers: [
                    { id: 1, answer: '50%', correct: true },
                    { id: 2, answer: '25%', correct: false },
                    { id: 3, answer: '75%', correct: false },
                    { id: 4, answer: '100%', correct: false },
                    { id: 5, answer: '150%', correct: false }
                ]
            },
            {
                id: 4,
                question: "Um item custa R$ 100,00. Se seu preço aumentar 15%, quanto custará?",
                answers: [
                    { id: 1, answer: 'R$ 115,00', correct: true },
                    { id: 2, answer: 'R$ 105,00', correct: false },
                    { id: 3, answer: 'R$ 110,00', correct: false },
                    { id: 4, answer: 'R$ 120,00', correct: false },
                    { id: 5, answer: 'R$ 130,00', correct: false }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'História da matemática',
        description: 'Da mesopotâmica para a moderna',
        id_user: 1,
        id_gender: 1,
        questions: [
            {
                id: 1,
                question: "Qual civilização é creditada pela invenção do sistema sexagesimal?",
                answers: [
                    { id: 1, answer: 'Mesopotâmica', correct: true },
                    { id: 2, answer: 'Egípcia', correct: false },
                    { id: 3, answer: 'Grega', correct: false },
                    { id: 4, answer: 'Romana', correct: false },
                    { id: 5, answer: 'Chinesa', correct: false }
                ]
            },
            {
                id: 2,
                question: "Quem é conhecido como o 'pai da geometria'?",
                answers: [
                    { id: 1, answer: 'Euclides', correct: true },
                    { id: 2, answer: 'Pitágoras', correct: false },
                    { id: 3, answer: 'Aristóteles', correct: false },
                    { id: 4, answer: 'Platão', correct: false },
                    { id: 5, answer: 'Arquimedes', correct: false }
                ]
            },
            {
                id: 3,
                question: "Qual matemático é famoso por sua teoria do deslocamento de fluidos?",
                answers: [
                    { id: 1, answer: 'Arquimedes', correct: true },
                    { id: 2, answer: 'Euclides', correct: false },
                    { id: 3, answer: 'Pitágoras', correct: false },
                    { id: 4, answer: 'Platão', correct: false },
                    { id: 5, answer: 'Aristóteles', correct: false }
                ]
            },
            {
                id: 4,
                question: "Quem desenvolveu o cálculo diferencial e integral?",
                answers: [
                    { id: 1, answer: 'Isaac Newton e Gottfried Wilhelm Leibniz', correct: true },
                    { id: 2, answer: 'René Descartes', correct: false },
                    { id: 3, answer: 'Carl Friedrich Gauss', correct: false },
                    { id: 4, answer: 'Pierre-Simon Laplace', correct: false },
                    { id: 5, answer: 'Blaise Pascal', correct: false }
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'Trigonometria',
        description: 'Formas geométricas',
        id_user: 1,
        id_gender: 1,
        questions: [
            {
                id: 1,
                question: "Qual é a fórmula da área de um triângulo?",
                answers: [
                    { id: 1, answer: 'base x altura / 2', correct: true },
                    { id: 2, answer: 'base x altura', correct: false },
                    { id: 3, answer: 'lado x lado', correct: false },
                    { id: 4, answer: 'lado x lado / 2', correct: false },
                    { id: 5, answer: 'base + altura', correct: false }
                ]
            },
            {
                id: 2,
                question: "Qual é a hipotenusa de um triângulo retângulo com catetos de 3 e 4 unidades?",
                answers: [
                    { id: 1, answer: '5', correct: true },
                    { id: 2, answer: '6', correct: false },
                    { id: 3, answer: '7', correct: false },
                    { id: 4, answer: '8', correct: false },
                    { id: 5, answer: '9', correct: false }
                ]
            },
            {
                id: 3,
                question: "Qual é o seno de 90 graus?",
                answers: [
                    { id: 1, answer: '1', correct: true },
                    { id: 2, answer: '0', correct: false },
                    { id: 3, answer: '-1', correct: false },
                    { id: 4, answer: '0.5', correct: false },
                    { id: 5, answer: 'sqrt(2)/2', correct: false }
                ]
            },
            {
                id: 4,
                question: "Qual é a relação fundamental da trigonometria?",
                answers: [
                    { id: 1, answer: 'sin^2(θ) + cos^2(θ) = 1', correct: true },
                    { id: 2, answer: 'sin(θ) + cos(θ) = 1', correct: false },
                    { id: 3, answer: 'tan(θ) = sin(θ) / cos(θ)', correct: false },
                    { id: 4, answer: 'sin(θ) = 1/cos(θ)', correct: false },
                    { id: 5, answer: 'cos(θ) = 1/sin(θ)', correct: false }
                ]
            }
        ]
    },
    {
        id: 5,
        title: 'Geometria analítica',
        description: 'Estudo das formas no plano cartesiano',
        id_user: 1,
        id_gender: 1,
        questions: [
            {
                id: 1,
                question: "Qual é a fórmula da distância entre dois pontos (x1, y1) e (x2, y2)?",
                answers: [
                    { id: 1, answer: 'sqrt((x2 - x1)^2 + (y2 - y1)^2)', correct: true },
                    { id: 2, answer: '(x2 - x1) + (y2 - y1)', correct: false },
                    { id: 3, answer: 'sqrt((x2 - x1) + (y2 - y1))', correct: false },
                    { id: 4, answer: '(x2 - x1)^2 + (y2 - y1)^2', correct: false },
                    { id: 5, answer: 'sqrt(x2 - x1) + sqrt(y2 - y1)', correct: false }
                ]
            },
            {
                id: 2,
                question: "Qual é a equação da reta que passa pelos pontos (0, 0) e (1, 1)?",
                answers: [
                    { id: 1, answer: 'y = x', correct: true },
                    { id: 2, answer: 'y = 2x', correct: false },
                    { id: 3, answer: 'y = x + 1', correct: false },
                    { id: 4, answer: 'y = x - 1', correct: false },
                    { id: 5, answer: 'y = 2x + 1', correct: false }
                ]
            },
            {
                id: 3,
                question: "Qual é a fórmula da área de um círculo de raio r?",
                answers: [
                    { id: 1, answer: 'πr^2', correct: true },
                    { id: 2, answer: '2πr', correct: false },
                    { id: 3, answer: 'πr', correct: false },
                    { id: 4, answer: 'πd^2', correct: false },
                    { id: 5, answer: '2πd', correct: false }
                ]
            },
            {
                id: 4,
                question: "Qual é a equação da circunferência de raio 5 e centro na origem?",
                answers: [
                    { id: 1, answer: 'x^2 + y^2 = 25', correct: true },
                    { id: 2, answer: 'x^2 + y^2 = 5', correct: false },
                    { id: 3, answer: 'x^2 + y^2 = 10', correct: false },
                    { id: 4, answer: 'x^2 + y^2 = 20', correct: false },
                    { id: 5, answer: 'x^2 + y^2 = 30', correct: false }
                ]
            },
            {
                id: 5,
                question: "Qual é a equação da parábola com vértice na origem e foco em (0, 1)?",
                answers: [
                    { id: 1, answer: 'y = x^2', correct: true },
                    { id: 2, answer: 'y = 2x^2', correct: false },
                    { id: 3, answer: 'y = x', correct: false },
                    { id: 4, answer: 'y = 2x', correct: false },
                    { id: 5, answer: 'x = y^2', correct: false }
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Álgebra',
        description: 'Estudo das operações algébricas',
        id_user: 1,
        id_gender: 1,
        questions: [
            {
                id: 1,
                question: "Qual é o valor de x na equação 2x + 3 = 7?",
                answers: [
                    { id: 1, answer: '2', correct: true },
                    { id: 2, answer: '1', correct: false },
                    { id: 3, answer: '3', correct: false },
                    { id: 4, answer: '4', correct: false },
                    { id: 5, answer: '5', correct: false }
                ]
            },
            {
                id: 2,
                question: "Qual é o valor de y na equação y/2 = 4?",
                answers: [
                    { id: 1, answer: '8', correct: true },
                    { id: 2, answer: '2', correct: false },
                    { id: 3, answer: '4', correct: false },
                    { id: 4, answer: '6', correct: false },
                    { id: 5, answer: '10', correct: false }
                ]
            },
            {
                id: 3,
                question: "Qual é o valor de x na equação x^2 - 4 = 0?",
                answers: [
                    { id: 1, answer: '2', correct: true },
                    { id: 2, answer: '-2', correct: true },
                    { id: 3, answer: '4', correct: false },
                    { id: 4, answer: '-4', correct: false },
                    { id: 5, answer: '0', correct: false }
                ]
            },
            {
                id: 4,
                question: "Qual é a fórmula da soma de uma progressão aritmética?",
                answers: [
                    { id: 1, answer: 'S = n/2 (a1 + an)', correct: true },
                    { id: 2, answer: 'S = n (a1 + an)', correct: false },
                    { id: 3, answer: 'S = n/2 (a1 - an)', correct: false },
                    { id: 4, answer: 'S = n (a1 - an)', correct: false },
                    { id: 5, answer: 'S = a1 + an', correct: false }
                ]
            },
            {
                id: 5,
                question: "Qual é a fórmula do produto de uma progressão geométrica?",
                answers: [
                    { id: 1, answer: 'P = a1 * r^(n-1)', correct: true },
                    { id: 2, answer: 'P = a1 * r^n', correct: false },
                    { id: 3, answer: 'P = a1 / r^(n-1)', correct: false },
                    { id: 4, answer: 'P = a1 / r^n', correct: false },
                    { id: 5, answer: 'P = r^n / a1', correct: false }
                ]
            }
        ]
    },
    {
        id: 7,
        title: 'Cálculo diferencial',
        description: 'Derivadas e suas aplicações',
        id_user: 1,
        id_gender: 1,
        questions: [
            {
                id: 1,
                question: "Qual é a derivada de x^2?",
                answers: [
                    { id: 1, answer: '2x', correct: true },
                    { id: 2, answer: 'x^2', correct: false },
                    { id: 3, answer: '2', correct: false },
                    { id: 4, answer: 'x', correct: false },
                    { id: 5, answer: '1', correct: false }
                ]
            },
            {
                id: 2,
                question: "Qual é a derivada de sin(x)?",
                answers: [
                    { id: 1, answer: 'cos(x)', correct: true },
                    { id: 2, answer: 'sin(x)', correct: false },
                    { id: 3, answer: '-cos(x)', correct: false },
                    { id: 4, answer: '-sin(x)', correct: false },
                    { id: 5, answer: '1', correct: false }
                ]
            },
            {
                id: 3,
                question: "Qual é a derivada de e^x?",
                answers: [
                    { id: 1, answer: 'e^x', correct: true },
                    { id: 2, answer: 'x e^x', correct: false },
                    { id: 3, answer: 'e', correct: false },
                    { id: 4, answer: 'x', correct: false },
                    { id: 5, answer: '1', correct: false }
                ]
            },
            {
                id: 4,
                question: "Qual é a derivada de ln(x)?",
                answers: [
                    { id: 1, answer: '1/x', correct: true },
                    { id: 2, answer: 'ln(x)', correct: false },
                    { id: 3, answer: 'x', correct: false },
                    { id: 4, answer: '1', correct: false },
                    { id: 5, answer: 'x^2', correct: false }
                ]
            },
            {
                id: 5,
                question: "Qual é a derivada de 1/x?",
                answers: [
                    { id: 1, answer: '-1/x^2', correct: true },
                    { id: 2, answer: '1/x', correct: false },
                    { id: 3, answer: '-1/x', correct: false },
                    { id: 4, answer: 'x^-2', correct: false },
                    { id: 5, answer: 'x^-1', correct: false }
                ]
            }
        ]
    },
    {
        id: 8,
        title: 'Cálculo integral',
        description: 'Integrais e suas aplicações',
        id_user: 1,
        id_gender: 1,
        questions: [
            {
                id: 1,
                question: "Qual é a integral de x?",
                answers: [
                    { id: 1, answer: 'x^2 / 2 + C', correct: true },
                    { id: 2, answer: 'x^2 + C', correct: false },
                    { id: 3, answer: '2x + C', correct: false },
                    { id: 4, answer: 'x + C', correct: false },
                    { id: 5, answer: 'x^2 / 2', correct: false }
                ]
            },
            {
                id: 2,
                question: "Qual é a integral de 1/x?",
                answers: [
                    { id: 1, answer: 'ln|x| + C', correct: true },
                    { id: 2, answer: 'ln(x) + C', correct: false },
                    { id: 3, answer: '1/x + C', correct: false },
                    { id: 4, answer: 'x^(-1) + C', correct: false },
                    { id: 5, answer: 'e^x + C', correct: false }
                ]
            },
            {
                id: 3,
                question: "Qual é a integral de e^x?",
                answers: [
                    { id: 1, answer: 'e^x + C', correct: true },
                    { id: 2, answer: 'x e^x + C', correct: false },
                    { id: 3, answer: 'e^x / x + C', correct: false },
                    { id: 4, answer: 'e^x x + C', correct: false },
                    { id: 5, answer: 'x + e^x', correct: false }
                ]
            },
            {
                id: 4,
                question: "Qual é a integral de cos(x)?",
                answers: [
                    { id: 1, answer: 'sin(x) + C', correct: true },
                    { id: 2, answer: '-sin(x) + C', correct: false },
                    { id: 3, answer: 'cos(x) + C', correct: false },
                    { id: 4, answer: '-cos(x) + C', correct: false },
                    { id: 5, answer: 'tan(x) + C', correct: false }
                ]
            },
            {
                id: 5,
                question: "Qual é a integral de sin(x)?",
                answers: [
                    { id: 1, answer: '-cos(x) + C', correct: true },
                    { id: 2, answer: 'cos(x) + C', correct: false },
                    { id: 3, answer: 'sin(x) + C', correct: false },
                    { id: 4, answer: '-sin(x) + C', correct: false },
                    { id: 5, answer: 'tan(x) + C', correct: false }
                ]
            }
        ]
    },
    {
        id: 9,
        title: 'Probabilidade e estatística',
        description: 'Conceitos de probabilidade e estatística',
        id_user: 1,
        id_gender: 1,
        questions: [
            {
                id: 1,
                question: "Qual é a probabilidade de obter cara em um lançamento de uma moeda?",
                answers: [
                    { id: 1, answer: '1/2', correct: true },
                    { id: 2, answer: '1/3', correct: false },
                    { id: 3, answer: '1/4', correct: false },
                    { id: 4, answer: '1/5', correct: false },
                    { id: 5, answer: '2/3', correct: false }
                ]
            },
            {
                id: 2,
                question: "Qual é a probabilidade de obter um 3 ao lançar um dado de seis faces?",
                answers: [
                    { id: 1, answer: '1/6', correct: true },
                    { id: 2, answer: '1/3', correct: false },
                    { id: 3, answer: '1/4', correct: false },
                    { id: 4, answer: '1/5', correct: false },
                    { id: 5, answer: '1/2', correct: false }
                ]
            },
            {
                id: 3,
                question: "O que é a média aritmética de 2, 4 e 6?",
                answers: [
                    { id: 1, answer: '4', correct: true },
                    { id: 2, answer: '2', correct: false },
                    { id: 3, answer: '6', correct: false },
                    { id: 4, answer: '3', correct: false },
                    { id: 5, answer: '5', correct: false }
                ]
            },
            {
                id: 4,
                question: "Qual é a mediana dos números 1, 3, 3, 6, 7, 8, 9?",
                answers: [
                    { id: 1, answer: '6', correct: true },
                    { id: 2, answer: '7', correct: false },
                    { id: 3, answer: '3', correct: false },
                    { id: 4, answer: '8', correct: false },
                    { id: 5, answer: '9', correct: false }
                ]
            },
            {
                id: 5,
                question: "Qual é o desvio padrão de um conjunto de dados com valores 2, 4, 4, 4, 5, 5, 7, 9?",
                answers: [
                    { id: 1, answer: '2', correct: true },
                    { id: 2, answer: '4', correct: false },
                    { id: 3, answer: '6', correct: false },
                    { id: 4, answer: '8', correct: false },
                    { id: 5, answer: '10', correct: false }
                ]
            }
        ]
    },
    {
        id: 10,
        title: 'Lógica matemática',
        description: 'Conceitos de lógica e raciocínio',
        id_user: 1,
        id_gender: 1,
        questions: [
            {
                id: 1,
                question: "Qual é a negação da proposição 'Todos os homens são mortais'?",
                answers: [
                    { id: 1, answer: 'Alguns homens não são mortais', correct: true },
                    { id: 2, answer: 'Nenhum homem é mortal', correct: false },
                    { id: 3, answer: 'Todos os homens são imortais', correct: false },
                    { id: 4, answer: 'Alguns homens são mortais', correct: false },
                    { id: 5, answer: 'Nenhum homem é imortal', correct: false }
                ]
            },
            {
                id: 2,
                question: "Qual é a tabela verdade da proposição 'P ∧ Q'?",
                answers: [
                    { id: 1, answer: 'V, F, F, F', correct: true },
                    { id: 2, answer: 'V, V, V, F', correct: false },
                    { id: 3, answer: 'V, V, F, F', correct: false },
                    { id: 4, answer: 'F, F, F, F', correct: false },
                    { id: 5, answer: 'V, V, V, V', correct: false }
                ]
            },
            {
                id: 3,
                question: "Qual é a tabela verdade da proposição 'P ∨ Q'?",
                answers: [
                    { id: 1, answer: 'V, V, V, F', correct: true },
                    { id: 2, answer: 'V, F, F, F', correct: false },
                    { id: 3, answer: 'V, V, F, F', correct: false },
                    { id: 4, answer: 'F, F, F, F', correct: false },
                    { id: 5, answer: 'V, V, V, V', correct: false }
                ]
            },
            {
                id: 4,
                question: "Qual é a implicação da proposição 'Se chove, então uso guarda-chuva'?",
                answers: [
                    { id: 1, answer: 'Se não chove, então não uso guarda-chuva', correct: true },
                    { id: 2, answer: 'Se chove, então não uso guarda-chuva', correct: false },
                    { id: 3, answer: 'Se não chove, então uso guarda-chuva', correct: false },
                    { id: 4, answer: 'Uso guarda-chuva, então chove', correct: false },
                    { id: 5, answer: 'Não chove, então uso guarda-chuva', correct: false }
                ]
            },
            {
                id: 5,
                question: "Qual é a equivalência lógica da proposição 'P → Q'?",
                answers: [
                    { id: 1, answer: '¬P ∨ Q', correct: true },
                    { id: 2, answer: 'P ∧ Q', correct: false },
                    { id: 3, answer: 'P ∨ Q', correct: false },
                    { id: 4, answer: '¬P ∧ ¬Q', correct: false },
                    { id: 5, answer: '¬P ∧ Q', correct: false }
                ]
            }
        ]
    }
]