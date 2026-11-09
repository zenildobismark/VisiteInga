
/* ========================================
   1. LINKS DE NAVEGAÇÃO
======================================== */

const LINKS = [
    ["atrativos", "Atrativos"],
    ["manifestacoes", "Manifestações"],
    ["hospedagem", "Hospedagem"],
    ["alimentacao", "Gastronomia"],
    ["transporte", "Transporte"],
    ["guias", "Guias"]
];

/* ========================================
   2. IDENTIFICAR A PÁGINA ATUAL
======================================== */

const paginaAtual = location.pathname.split("/").pop();

const home = paginaAtual.startsWith("detalhe")
    ? "index.html"
    : "";

/* ========================================
   3. CRIAR O MENU DE NAVEGAÇÃO
======================================== */

document.getElementById("nav").innerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">

            <a class="navbar-brand" href="index.html">
                <i class="bi bi-geo-alt"></i>
                Visite Ingá
            </a>

            <button
                class="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menu"
                aria-controls="menu"
                aria-expanded="false"
                aria-label="Abrir menu">

                <i class="bi bi-list fs-2"></i>
            </button>

            <div class="collapse navbar-collapse" id="menu">

                <ul class="navbar-nav mx-auto">
                    ${LINKS.map(link => `
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="${home}#${link[0]}">
                                ${link[1]}
                            </a>
                        </li>
                    `).join("")}
                </ul>

                <a
                    class="btn btn-terra btn-sm"
                    href="${home}#atrativos">
                    Planeje sua viagem
                </a>

            </div>
        </div>
    </nav>
`;

/* ========================================
   4. CRIAR O RODAPÉ
======================================== */

document.getElementById("rodape").innerHTML = `
    <footer class="py-5">
        <div class="container">

            <h3 class="h4">Visite Ingá</h3>

            <p class="small mb-2">
                © 2026 Visite Ingá.
                Descubra os segredos antigos da Paraíba.
            </p>

            <div class="d-flex gap-3 small">
                ${LINKS.slice(0, 3).map(link => `
                    <a href="${home}#${link[0]}">
                        ${link[1]}
                    </a>
                `).join("")}
            </div>

        </div>
    </footer>
`;

/* ========================================
   5. FUNÇÕES AUXILIARES
======================================== */

// Criar a imagem ou um espaço reservado.
const thumb = item => {
    return item.img
        ? `<img
                src="${item.img}"
                alt="${item.nome}"
                class="thumb">`
        : `<div class="thumb"></div>`;
};

// Criar o link para a página de detalhes.
const href = item => {
    return `detalhe.html?id=${encodeURIComponent(item.id)}`;
};

/* ========================================
   6. MODELOS DOS CARDS
======================================== */

const MODELOS = {

    // Atrativos turísticos
    atrativos: item => `
        <div class="col-6 col-lg-3">
            <article class="card h-100">

                ${thumb(item)}

                <div class="card-body d-flex flex-column">

                    <h3 class="h5">
                        ${item.nome}
                    </h3>

                    <p class="small">
                        ${item.resumo}
                    </p>

                    <a class="mais mt-auto" href="${href(item)}">
                        Saiba mais
                        <i class="bi bi-arrow-right"></i>
                    </a>

                </div>
            </article>
        </div>
    `,

    // Manifestações culturais
    manifestacoes: item => `
        <div class="col-md-6">
            <article class="card h-100 p-3">

                <i class="bi bi-stars fs-5 text-terra"></i>

                <h3 class="h5 mt-2">
                    ${item.nome}
                </h3>

                <p class="small">
                    ${item.resumo}
                </p>

                <a
                    class="btn btn-terra btn-sm align-self-start"
                    href="${href(item)}">
                    Ver detalhes
                </a>

            </article>
        </div>
    `,

    // Hospedagem
    hospedagem: item => `
        <div class="col-md-4">
            <article class="card h-100 p-3">

                <i class="bi ${item.icone || "bi-house"} fs-5 text-terra"></i>

                <h3 class="h5 mt-2">
                    ${item.nome}
                </h3>

                <p class="small">
                    ${item.resumo}
                </p>

                <a
                    class="btn btn-outline-terra btn-sm w-100 mb-2"
                    href="${href(item)}">
                    Ver detalhes
                </a>

                <div>
                    ${(item.tags || []).map(tag => `
                        <span class="badge tag">
                            ${tag}
                        </span>
                    `).join(" ")}
                </div>

            </article>
        </div>
    `,

    // Gastronomia
    alimentacao: item => `
        <div class="col-md-4">
            <article class="card h-100 p-3">

                <i class="bi ${item.icone || "bi-cup-hot"} fs-5 text-terra"></i>

                <h3 class="h5 mt-2">
                    ${item.nome}
                </h3>

                <p class="small">
                    ${item.resumo}
                </p>

                <a class="mais mt-auto" href="${href(item)}">
                    Saiba mais
                    <i class="bi bi-chevron-right"></i>
                </a>

            </article>
        </div>
    `,

    // Transporte
    transporte: item => `
        <div class="col-12">
            <a class="linha" href="${href(item)}">

                <span>
                    <i class="bi bi-bus-front me-2"></i>
                    <b>${item.nome}</b>
                </span>

                <span class="mais">
                    Ver detalhes
                </span>

            </a>
        </div>
    `,

    // Guias turísticos
    guias: item => `
        <div class="col-md-4">

            <b class="d-block">
                ${item.nome}
            </b>

            <p class="small mb-1">
                ${item.resumo}
            </p>

            <a class="mais" href="${href(item)}">
                Ver detalhes
                <i class="bi bi-info-circle"></i>
            </a>

        </div>
    `
};

/* ========================================
   7. EXIBIR AS SEÇÕES NA PÁGINA INICIAL
======================================== */

const alvo = document.getElementById("lista-itens");

if (alvo && typeof SECOES !== "undefined") {

    for (const chave in SECOES) {

        const secao = SECOES[chave];
        const elemento = document.getElementById(chave);
        const modelo = MODELOS[chave];

        // Verifica se a seção e seu modelo existem.
        if (elemento && modelo) {

            const conteudo = `
                <h2 class="h2 mb-4">
                    ${secao.titulo}
                </h2>

                <div class="row g-3">
                    ${secao.itens.map(modelo).join("")}
                </div>
            `;

            // Se a seção já possui a classe "secao",
            // adiciona um container interno.
            elemento.innerHTML = elemento.classList.contains("secao")
                ? `<div class="container">${conteudo}</div>`
                : conteudo;
        }
    }
}

/* ========================================
   8. PÁGINA DE DETALHES
======================================== */

const raiz = document.getElementById("detalhe");

if (raiz && typeof SECOES !== "undefined") {

    // Recuperar o ID enviado pela URL.
    const parametros = new URLSearchParams(location.search);
    const id = parametros.get("id");

    let item;
    let secaoEncontrada;
    let chaveSecao;

    // Procurar o item em todas as seções.
    for (const chave in SECOES) {

        const secao = SECOES[chave];

        const encontrado = secao.itens.find(
            elemento => String(elemento.id) === id
        );

        if (encontrado) {
            item = encontrado;
            secaoEncontrada = secao;
            chaveSecao = chave;
            break;
        }
    }

    // Caso o item não exista.
    if (!item) {

        raiz.innerHTML = `
            <div class="container py-5 mt-5">

                <h1>Página não encontrada</h1>

                <p>
                    O atrativo solicitado não foi encontrado.
                </p>

                <a href="index.html" class="btn btn-terra">
                    Voltar ao início
                </a>

            </div>
        `;

    } else {

        // Combinar os dados padrão com os dados do item.
        const detalhe = {
            ...PADRAO,
            texto: [item.resumo],
            ...item
        };

        // Atualizar o título da aba do navegador.
        document.title = `${detalhe.nome} | Visite Ingá`;

        const [iconeCta, textoCta, linkCta] = detalhe.cta;

        // Montar a página de detalhes.
        raiz.innerHTML = `

            <!-- Banner do atrativo -->
            <header
                class="hero-det d-flex align-items-end"
                ${detalhe.hero
                    ? `style="--foto: url('${detalhe.hero}')"`
                    : ""}>

                <div class="container pb-4">

                    <small class="text-white-50">
                        <i class="bi ${secaoEncontrada.icone || "bi-geo-alt"}"></i>
                        ${detalhe.subtitulo || secaoEncontrada.cat || ""}
                    </small>

                    <h1 class="display-4 text-white">
                        ${detalhe.nome}
                    </h1>

                    <p class="text-white lead col-lg-7 px-0">
                        ${detalhe.resumo}
                    </p>

                </div>
            </header>

            <!-- Conteúdo principal -->
            <main class="container py-5">

                <div class="row g-4">

                    <!-- Descrição e galeria -->
                    <div class="col-lg-8">

                        <article class="card p-4 mb-4">

                            <h2 class="h3">
                                ${detalhe.tituloTexto || detalhe.nome}
                            </h2>

                            ${detalhe.texto.map(paragrafo => `
                                <p>${paragrafo}</p>
                            `).join("")}

                        </article>

                        <div class="row g-3">

                            ${[0, 1].map(numero => `
                                <div class="col-md-6">

                                    ${detalhe.galeria?.[numero]
                                        ? `
                                            <img
                                                src="${detalhe.galeria[numero]}"
                                                alt="${detalhe.nome} - foto ${numero + 1}"
                                                class="thumb galeria">
                                        `
                                        : `
                                            <div class="thumb galeria"></div>
                                        `
                                    }

                                </div>
                            `).join("")}

                        </div>
                    </div>

                    <!-- Informações ao visitante -->
                    <aside class="col-lg-4">

                        <div class="card p-4 mb-4">

                            <h2 class="h5 text-terra">
                                <i class="bi bi-info-circle"></i>
                                Informações ao Visitante
                            </h2>

                            ${(detalhe.infos || []).map(info => `
                                <div class="d-flex gap-2 mt-3">

                                    <i class="bi ${info[0]} text-terra"></i>

                                    <div>
                                        <b>${info[1]}</b>

                                        <div class="small">
                                            ${info[2]}
                                        </div>
                                    </div>

                                </div>
                            `).join("")}

                            <a
                                class="btn btn-terra w-100 mt-4"
                                href="${linkCta || "#"}"
                                target="_blank"
                                rel="noopener">

                                <i class="bi ${iconeCta || "bi-info-circle"}"></i>
                                ${textoCta || "Saiba mais"}

                            </a>

                        </div>

                        <!-- Localização -->
                        <div class="card p-4">

                            <h2 class="h5 text-terra">
                                <i class="bi bi-geo-alt-fill"></i>
                                Localização
                            </h2>

                            ${detalhe.mapa
                                ? `
                                    <img
                                        src="${detalhe.mapa}"
                                        alt="Mapa: ${detalhe.local || detalhe.nome}"
                                        class="thumb mapa mb-2">
                                `
                                : `
                                    <div class="thumb mapa mb-2">
                                        <i class="bi bi-map"></i>
                                    </div>
                                `
                            }

                            <p class="small text-center mb-0">
                                ${detalhe.local || "Localização não informada"}
                            </p>

                        </div>

                    </aside>

                </div>

                <!-- Voltar para a seção de origem -->
                <a
                    class="mais d-inline-block mt-4"
                    href="index.html#${chaveSecao}">

                    <i class="bi bi-arrow-left"></i>
                    Voltar para ${secaoEncontrada.titulo}

                </a>

            </main>
        `;
    }
}