/* ======================================
DADOS DAS DISCIPLINAS
====================================== */

/* ======================================
DADOS DAS DISCIPLINAS
====================================== */

const disciplinas = {

    "2026.2": [

        {
            nome: "Banco de Dados I",
            horario: "Segunda 07:30 - 09:10",
            professor: "Prof. Carlos Eduardo",
            sala: "Laboratório S30-5P",
            descricao: "Modelagem relacional, SQL, normalização e manipulação de bancos de dados."
        },

        {
            nome: "Comunicação e Redes",
            horario: "Quarta 07:30 - 11:00",
            professor: "Prof. Ricardo Lima",
            sala: "Bloco T",
            descricao: "Protocolos de redes, arquitetura TCP/IP e comunicação entre dispositivos."
        },

        {
            nome: "Pesquisa Operacional",
            horario: "Quinta 07:30 - 09:10",
            professor: "Prof. Ana Paula",
            sala: "Sala 12",
            descricao: "Métodos matemáticos aplicados à tomada de decisão."
        },

        {
            nome: "Contabilidade e Custos",
            horario: "Sexta 09:20 - 11:00",
            professor: "Prof. Marcelo Souza",
            sala: "Sala 20",
            descricao: "Fundamentos de contabilidade empresarial e análise de custos."
        }

    ],

    "2026.1": [

        {
            nome: "Sistemas Operacionais",
            horario: "Segunda 07:30 - 09:10",
            professor: "Prof. Helena Costa",
            sala: "Lab SO",
            descricao: "Gerenciamento de processos, memória e sistemas Linux."
        },

        {
            nome: "Engenharia de Software",
            horario: "Terça 09:20 - 11:00",
            professor: "Prof. Diego Martins",
            sala: "Sala 18",
            descricao: "Metodologias ágeis, UML e desenvolvimento de software."
        },

        {
            nome: "Interação Humano Computador",
            horario: "Quarta 11:10 - 12:50",
            professor: "Prof. Juliana Alves",
            sala: "Lab UX",
            descricao: "Experiência do usuário, acessibilidade e design de interfaces."
        },

        {
            nome: "Estatística Aplicada",
            horario: "Quinta 09:20 - 11:00",
            professor: "Prof. Fernando Rocha",
            sala: "Sala 22",
            descricao: "Probabilidade, médias estatísticas e análise de dados."
        }

    ],

    "2025.2": [

        {
            nome: "Estrutura de Dados",
            horario: "Segunda 09:20 - 11:00",
            professor: "Prof. João",
            sala: "Lab 2",
            descricao: "Pilhas, filas, listas, árvores e algoritmos de ordenação."
        },

        {
            nome: "Programação Web",
            horario: "Sexta 09:20 - 11:00",
            professor: "Prof. Lucas",
            sala: "Lab 3",
            descricao: "HTML, CSS, JavaScript e desenvolvimento frontend."
        },

        {
            nome: "Matemática Computacional",
            horario: "Terça 07:30 - 09:10",
            professor: "Prof. Roberto Lima",
            sala: "Sala 10",
            descricao: "Matrizes, lógica matemática e fundamentos computacionais."
        },

        {
            nome: "Arquitetura de Computadores",
            horario: "Quarta 09:20 - 11:00",
            professor: "Prof. Camila Rocha",
            sala: "Lab Hardware",
            descricao: "Processadores, memória e organização computacional."
        }

    ],

    "2025.1": [

        {
            nome: "Programação Orientada a Objetos",
            horario: "Segunda 07:30 - 09:10",
            professor: "Prof. Gustavo Henrique",
            sala: "Lab Java",
            descricao: "Classes, objetos, herança e polimorfismo em Java."
        },

        {
            nome: "Análise de Sistemas",
            horario: "Terça 09:20 - 11:00",
            professor: "Prof. André Luiz",
            sala: "Sala 14",
            descricao: "Levantamento de requisitos e modelagem de sistemas."
        },

        {
            nome: "Banco de Dados",
            horario: "Quarta 07:30 - 09:10",
            professor: "Prof. Mariana Souza",
            sala: "Lab Banco",
            descricao: "SQL, modelagem ER e consultas avançadas."
        },

        {
            nome: "Empreendedorismo",
            horario: "Quinta 11:10 - 12:50",
            professor: "Prof. Felipe Ramos",
            sala: "Sala 25",
            descricao: "Criação de startups e gestão de inovação."
        }

    ],

    "2024.2": [

        {
            nome: "Lógica de Programação",
            horario: "Segunda 07:30 - 09:10",
            professor: "Prof. Marcelo Alves",
            sala: "Lab 1",
            descricao: "Algoritmos, estruturas condicionais e repetição."
        },

        {
            nome: "Matemática Discreta",
            horario: "Terça 09:20 - 11:00",
            professor: "Prof. Fernanda Silva",
            sala: "Sala 8",
            descricao: "Conjuntos, grafos, lógica proposicional e combinatória."
        },

        {
            nome: "Fundamentos da Computação",
            horario: "Quarta 07:30 - 09:10",
            professor: "Prof. Tiago Lima",
            sala: "Sala 16",
            descricao: "História da computação e conceitos básicos de TI."
        },

        {
            nome: "Inglês Técnico",
            horario: "Sexta 09:20 - 11:00",
            professor: "Prof. Paula Mendes",
            sala: "Sala 5",
            descricao: "Leitura e interpretação de textos técnicos em inglês."
        }

    ],

    "2024.1": [

        {
            nome: "Algoritmos",
            horario: "Terça 07:30 - 09:10",
            professor: "Prof. Marcos",
            sala: "Lab 1",
            descricao: "Introdução à programação e resolução de problemas."
        },

        {
            nome: "Matemática Discreta",
            horario: "Quinta 07:30 - 09:10",
            professor: "Prof. Fernanda",
            sala: "Sala 8",
            descricao: "Estruturas matemáticas aplicadas à computação."
        },

        {
            nome: "Introdução à Computação",
            horario: "Segunda 09:20 - 11:00",
            professor: "Prof. Bruno Almeida",
            sala: "Sala 2",
            descricao: "Conceitos básicos sobre computadores e software."
        },

        {
            nome: "Metodologia Científica",
            horario: "Sexta 07:30 - 09:10",
            professor: "Prof. Carla Mendes",
            sala: "Sala 4",
            descricao: "Normas acadêmicas e elaboração de pesquisas."
        }

    ]

};

/* ======================================
HORÁRIOS POR PERÍODO
====================================== */

const periodos = {

    "2026.2": `
        <tr class="row-large">
            <td class="time-col">07:30 - 09:10</td>

            <td class="filled-cell">Banco de Dados I<br><span class="room">T. S30-5P</span></td>
            <td></td>
            <td class="filled-cell">Comunicação e Redes<br><span class="room">T. S30-5P</span></td>
            <td class="filled-cell">Pesquisa Operacional<br><span class="room">T. S30-5P</span></td>
            <td></td>
            <td></td>
        </tr>

        <tr class="row-large">
            <td class="time-col">09:20 - 11:00</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td class="filled-cell">Contabilidade e Custos<br><span class="room">Sala 20</span></td>

            <td></td>
        </tr>
    `,

    "2026.1": `
        <tr class="row-large">
            <td class="time-col">07:30 - 09:10</td>

            <td class="filled-cell">Sistemas Operacionais<br><span class="room">Lab SO</span></td>

            <td></td>

            <td></td>

            <td></td>

            <td></td>

            <td></td>
        </tr>

        <tr class="row-large">
            <td class="time-col">09:20 - 11:00</td>

            <td></td>

            <td class="filled-cell">Engenharia de Software<br><span class="room">Sala 18</span></td>

            <td></td>

            <td class="filled-cell">Estatística Aplicada<br><span class="room">Sala 22</span></td>

            <td></td>

            <td></td>
        </tr>
    `,

    "2025.2": `
        <tr class="row-large">
            <td class="time-col">07:30 - 09:10</td>

            <td></td>

            <td class="filled-cell">Matemática Computacional<br><span class="room">Sala 10</span></td>

            <td></td>

            <td></td>

            <td></td>

            <td></td>
        </tr>

        <tr class="row-large">
            <td class="time-col">09:20 - 11:00</td>

            <td class="filled-cell">Estrutura de Dados<br><span class="room">Lab 2</span></td>

            <td></td>

            <td class="filled-cell">Arquitetura de Computadores<br><span class="room">Lab Hardware</span></td>

            <td></td>

            <td class="filled-cell">Programação Web<br><span class="room">Lab 3</span></td>

            <td></td>
        </tr>
    `,

    "2025.1": `
        <tr class="row-large">
            <td class="time-col">07:30 - 09:10</td>

            <td class="filled-cell">Programação Orientada a Objetos<br><span class="room">Lab Java</span></td>

            <td></td>

            <td class="filled-cell">Banco de Dados<br><span class="room">Lab Banco</span></td>

            <td></td>

            <td></td>

            <td></td>
        </tr>

        <tr class="row-large">
            <td class="time-col">09:20 - 11:00</td>

            <td></td>

            <td class="filled-cell">Análise de Sistemas<br><span class="room">Sala 14</span></td>

            <td></td>

            <td></td>

            <td></td>

            <td></td>
        </tr>
    `,

    "2024.2": `
        <tr class="row-large">
            <td class="time-col">07:30 - 09:10</td>

            <td class="filled-cell">Lógica de Programação<br><span class="room">Lab 1</span></td>

            <td></td>

            <td class="filled-cell">Fundamentos da Computação<br><span class="room">Sala 16</span></td>

            <td></td>

            <td></td>

            <td></td>
        </tr>

        <tr class="row-large">
            <td class="time-col">09:20 - 11:00</td>

            <td></td>

            <td class="filled-cell">Matemática Discreta<br><span class="room">Sala 8</span></td>

            <td></td>

            <td></td>

            <td class="filled-cell">Inglês Técnico<br><span class="room">Sala 5</span></td>

            <td></td>
        </tr>
    `,

    "2024.1": `
        <tr class="row-large">
            <td class="time-col">07:30 - 09:10</td>

            <td></td>

            <td class="filled-cell">Algoritmos<br><span class="room">Lab 1</span></td>

            <td></td>

            <td class="filled-cell">Matemática Discreta<br><span class="room">Sala 8</span></td>

            <td class="filled-cell">Metodologia Científica<br><span class="room">Sala 4</span></td>

            <td></td>
        </tr>

        <tr class="row-large">
            <td class="time-col">09:20 - 11:00</td>

            <td class="filled-cell">Introdução à Computação<br><span class="room">Sala 2</span></td>

            <td></td>

            <td></td>

            <td></td>

            <td></td>

            <td></td>
        </tr>
    `
};

/* ======================================
FUNÇÃO PARA ADICIONAR EVENTOS
====================================== */

function adicionarEventosNasDisciplinas() {

    const cells = document.querySelectorAll(".filled-cell");

    cells.forEach(cell => {

        cell.addEventListener("click", () => {

            const nome = cell.childNodes[0].textContent.trim();

            const periodo = document.getElementById("periodos").value;

            const disciplina = disciplinas[periodo].find(
                d => d.nome === nome
            );

            if (disciplina) {

                document.getElementById("modal").style.display = "flex";

                document.getElementById("modalTitle").innerText =
                    disciplina.nome;

                document.getElementById("modalHorario").innerHTML =
                    "<strong>Horário:</strong> " + disciplina.horario;

                document.getElementById("modalProfessor").innerHTML =
                    "<strong>Professor:</strong> " + disciplina.professor;

                document.getElementById("modalSala").innerHTML =
                    "<strong>Sala:</strong> " + disciplina.sala;
            }

        });

    });

}

/* ======================================
MODAL
====================================== */

const modal = document.getElementById("modal");

document
    .getElementById("closeModal")
    .addEventListener("click", () => {

        modal.style.display = "none";

    });

window.onclick = function (event) {

    if (event.target == modal) {

        modal.style.display = "none";

    }

}

/* ======================================
ALTERAÇÃO DE PERÍODO
====================================== */

document
    .getElementById("periodos")
    .addEventListener("change", function () {

        document.querySelector("tbody").innerHTML =
            periodos[this.value];

        adicionarEventosNasDisciplinas();

    });

/* ======================================
INICIAR EVENTOS
====================================== */

adicionarEventosNasDisciplinas();

/* ======================================
DARK MODE / LIGHT MODE
====================================== */

const themeToggle =
    document.getElementById("themeToggle");

const body =
    document.body;

/* SALVAR TEMA */

if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark");

    themeToggle.innerHTML = "☀️";

}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        themeToggle.innerHTML = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.innerHTML = "🌙";

        localStorage.setItem("theme", "light");
    }

});

/* ======================================
GERAR PDF
====================================== */

const btnPdf =
    document.querySelector(".btn-pdf");

btnPdf.addEventListener("click", gerarPDF);

function gerarPDF() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const periodoAtual =
        document.getElementById("periodos").value;

    const materias =
        disciplinas[periodoAtual];

    /* ======================================
    CORES UFAC
    ====================================== */

    const azulEscuro = [0, 26, 111];
    const azulClaro = [35, 114, 217];
    const mostarda = [242, 195, 53];

    /* ======================================
    HEADER
    ====================================== */

    doc.setFillColor(...azulEscuro);

    doc.rect(0, 0, 210, 30, "F");

    doc.setTextColor(255, 255, 255);

    doc.setFont("helvetica", "bold");

    doc.setFontSize(24);

    doc.text("Portal do Aluno - Horários", 15, 18);

    /* ======================================
    INFORMAÇÕES
    ====================================== */

    doc.setTextColor(...azulEscuro);

    doc.setFontSize(14);

    doc.text(
        `Período: ${periodoAtual}`,
        15,
        45
    );

    doc.text(
        "Curso: Sistemas de Informação",
        15,
        55
    );

    doc.text(
        "Aluno: Sávio Monteiro dos Santos",
        15,
        65
    );

    /* ======================================
    LINHA
    ====================================== */

    doc.setDrawColor(...azulClaro);

    doc.setLineWidth(1);

    doc.line(15, 72, 195, 72);

    /* ======================================
    DISCIPLINAS
    ====================================== */

    let y = 85;

    materias.forEach((disciplina, index) => {

        /* CARD */

        doc.setFillColor(245, 247, 255);

        doc.roundedRect(
            15,
            y - 8,
            180,
            32,
            4,
            4,
            "F"
        );

        /* TÍTULO */

        doc.setTextColor(...azulClaro);

        doc.setFontSize(16);

        doc.setFont("helvetica", "bold");

        doc.text(
            disciplina.nome,
            20,
            y
        );

        /* INFORMAÇÕES */

        doc.setFont("helvetica", "normal");

        doc.setTextColor(40, 40, 40);

        doc.setFontSize(11);

        doc.text(
            `Horário: ${disciplina.horario}`,
            20,
            y + 8
        );

        doc.text(
            `Professor: ${disciplina.professor}`,
            20,
            y + 14
        );

        doc.text(
            `Sala: ${disciplina.sala}`,
            20,
            y + 20
        );

        y += 42;

        /* NOVA PÁGINA */

        if (y > 250) {

            doc.addPage();

            y = 30;
        }

    });

    /* ======================================
    FOOTER
    ====================================== */

    doc.setFillColor(...azulEscuro);

    doc.rect(0, 285, 210, 12, "F");

    doc.setTextColor(255, 255, 255);

    doc.setFontSize(10);

    doc.text(
        "UFAC • Universidade Federal do Acre",
        15,
        293
    );

    /* ======================================
    DOWNLOAD
    ====================================== */

    doc.save(
        `horarios-${periodoAtual}.pdf`
    );

}