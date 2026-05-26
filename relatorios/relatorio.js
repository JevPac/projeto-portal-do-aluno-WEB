/* ======================================
DARK MODE / LIGHT MODE
====================================== */

const themeToggle =
    document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeToggle.innerHTML = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML = "🌙";
    }

});

/* ======================================
MODAL DOCUMENTOS
====================================== */

const documentos = {

    "Histórico escolar": {
        descricao:
            "Documento contendo todas as disciplinas cursadas, notas, frequência e situação acadêmica.",
        tamanho:
            "2.3 MB",
        formato:
            "PDF"
    },

    "Boletim de Desempenho": {
        descricao:
            "Relatório detalhado de desempenho semestral do aluno.",
        tamanho:
            "1.4 MB",
        formato:
            "PDF"
    },

    "Coeficiente de Rendimento": {
        descricao:
            "Documento oficial contendo o CR geral do aluno.",
        tamanho:
            "900 KB",
        formato:
            "PDF"
    },

    "Plano de estudos": {
        descricao:
            "Planejamento acadêmico e disciplinas futuras do curso.",
        tamanho:
            "1.1 MB",
        formato:
            "PDF"
    }
};

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescricao =
    document.getElementById("modalDescricao");

const modalFormato =
    document.getElementById("modalFormato");

const modalTamanho =
    document.getElementById("modalTamanho");

document
    .querySelectorAll(".doc-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            const nome =
                card.querySelector(".doc-name")
                    .innerText;

            const doc =
                documentos[nome];

            modal.style.display = "flex";

            modalTitle.innerText = nome;

            modalDescricao.innerHTML =
                `<strong>Descrição:</strong> ${doc.descricao}`;

            modalFormato.innerHTML =
                `<strong>Formato:</strong> ${doc.formato}`;

            modalTamanho.innerHTML =
                `<strong>Tamanho:</strong> ${doc.tamanho}`;
        });

    });

/* ======================================
FECHAR MODAL
====================================== */

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
DOWNLOAD PDF
====================================== */

document
    .querySelectorAll(".btn-download-inline")
    .forEach(btn => {

        btn.addEventListener("click", (e) => {

            e.stopPropagation();

            const card =
                btn.closest(".doc-card");

            const nome =
                card.querySelector(".doc-name")
                    .innerText;

            gerarPDF(nome);

        });

    });

/* ======================================
GERAR PDF
====================================== */

function gerarPDF(nomeDocumento) {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const azulEscuro = [0, 26, 111];
    const azulClaro = [35, 114, 217];

    doc.setFillColor(...azulEscuro);

    doc.rect(0, 0, 210, 35, "F");

    doc.setTextColor(255, 255, 255);

    doc.setFontSize(24);

    doc.text(
        "Relatório Acadêmico",
        15,
        20
    );

    doc.setTextColor(...azulEscuro);

    doc.setFontSize(20);

    doc.text(
        nomeDocumento,
        15,
        60
    );

    doc.setFontSize(13);

    doc.text(
        "Aluno: Sávio Monteiro dos Santos",
        15,
        80
    );

    doc.text(
        "Curso: Sistemas de Informação",
        15,
        90
    );

    doc.text(
        "Universidade Federal do Acre",
        15,
        100
    );

    doc.setDrawColor(...azulClaro);

    doc.line(15, 110, 195, 110);

    doc.setFontSize(12);

    doc.text(
        "Documento acadêmico emitido automaticamente pelo portal do aluno.",
        15,
        130
    );

    doc.save(
        `${nomeDocumento}.pdf`
    );
}