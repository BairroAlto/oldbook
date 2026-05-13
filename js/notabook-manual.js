/**
 * NOTABOOK - BIBLIOTECA DE FUNCIONALIDADES & MANUAL
 * =================================================
 * Este ficheiro contém a documentação estruturada de todas as ferramentas,
 * ícones e conceitos do ecossistema NotaBook (Aquário, Arquivo, Editor, etc).
 * 
 * Estrutura:
 * - icons: O emoji ou SVG usado.
 * - label: Nome oficial da ferramenta.
 * - description: O que faz.
 * - context: Onde aparece (Editor, Barra, Aquário, etc).
 * - color: Cor associada (para UI).
 */

export const NOTABOOK_MANUAL = {
    
    // 1. BLOCOS DE TEXTO INTELIGENTES (ENTIDADES)
    // ----------------------------------------------------
    smart_blocks: {
        subnote: {
            icon: "📘",
            label: "SubNota",
            color: "#3498db", // Azul
            description: "Bloco de texto azul padrão para organizar ideias secundárias ou pontos específicos dentro de uma nota maior.",
            features: ["Suporta Tópicos", "Pode ser clonada", "Editável"]
        },
        question: {
            icon: "📗",
            label: "Questão",
            color: "#2ecc71", // Verde
            description: "Caixa verde destinada a perguntas de reflexão ou estudo. O título funciona como a pergunta e o corpo como a resposta.",
            features: ["Destaque visual", "Ideal para estudo"]
        },
        container: {
            icon: "📙",
            label: "Contentor Livre",
            color: "#e67e22", // Laranja
            description: "Bloco laranja sem título fixo. Ideal para notas rápidas, avisos ou rascunhos dentro do texto principal.",
            features: ["Sem campo de título", "Foco no conteúdo"]
        },
        redator: {
            icon: "📓",
            label: "Redator",
            color: "#2c3e50", // Preto/Escuro
            description: "Bloco de escrita focado. Possui um cabeçalho colapsável e suporte para abrir em janela flutuante (Multitarefa).",
            features: ["Modo Foco (Popup)", "Cabeçalho automático", "Numeração de parágrafos"]
        },
        toggle: {
            icon: "☂",
            label: "Secção Expansível",
            color: "#9b59b6", // Roxo
            description: "Título H2 que pode esconder ou mostrar o conteúdo dentro dele. Útil para limpar a visualização de notas longas.",
            features: ["Click para abrir/fechar", "Arrastável"]
        }
    },

    // 2. WIDGETS VISUAIS (JORNAL & VISUAL)
    // ----------------------------------------------------
    visual_widgets: {
        sign: {
            icon: "🪧",
            label: "Raciocínio",
            color: "#f1c40f", // Amarelo
            description: "Placa amarela para destacar uma linha de raciocínio. Suporta anexos de links diretos na base da caixa.",
            features: ["Lista de Links", "Numeração automática"]
        },
        card: {
            icon: "🪪",
            label: "Cartão Temático",
            color: "#795548", // Castanho/Terra
            description: "Cartão estilo 'ID' com espaço para uma imagem à esquerda e texto à direita. Bom para perfis de personagens.",
            features: ["Imagem personalizável", "Layout fixo"]
        },
        cube: {
            icon: "🧊",
            label: "Cubo Flutuante",
            color: "#4a90e2", // Azul Claro
            description: "Caixa de texto que pode flutuar à esquerda ou direita, permitindo que o texto principal flua ao seu redor.",
            features: ["Float Left/Right", "Rotação (Tilt)", "Redimensionável"]
        },
        url_card: {
            icon: "🎴",
            label: "Cartão Web",
            color: "#ffffff",
            description: "Transforma um link de texto num cartão visual com imagem de capa, título e domínio.",
            features: ["Gerado automaticamente", "Arrastável"]
        }
    },

    // 3. FERRAMENTAS DE DADOS (GRAPHS & TABLES)
    // ----------------------------------------------------
    data_tools: {
        table: {
            icon: "🧮",
            label: "Tabela Dinâmica",
            description: "Grelha para dados. Inclui um menu flutuante para adicionar/remover linhas e colunas facilmente.",
            features: ["Menu Contextual", "Expansível"]
        },
        timeline: {
            icon: "🌳",
            label: "Linha Cronológica",
            description: "Widget vertical para registar eventos por data. Cria uma linha do tempo visual.",
            features: ["Pontos infinitos", "Marcadores visuais"]
        },
        calendar: {
            icon: "📅",
            label: "Agenda",
            description: "Calendário interativo. Permite clicar nos dias para adicionar tarefas ou eventos.",
            features: ["Vistas Mês/Semana/Ano", "Sincronização com Firebase"]
        }
    },

    // 4. CONECTIVIDADE & FONTES
    // ----------------------------------------------------
    connectivity: {
        superlink: {
            icon: "🖇️",
            label: "SuperLink",
            visual: "Sublinhado Picotado (Amarelo ➝ Laranja)",
            description: "Ligação interna bidirecional. Conecta uma frase (Origem) a outra frase (Destino) dentro da mesma nota.",
            features: ["Scroll suave", "Flash visual", "Sem sair da página"]
        },
        codex: {
            icon: "📚",
            label: "Codex",
            description: "Sistema de citação preciso. Regista Publicação, Ano, Mês, Capítulo, Página e Parágrafo.",
            features: ["Formato JW (w24...)", "Inputs Manuais"]
        },
        link: {
            icon: "🔗",
            label: "Hiperligação",
            description: "Ligação para a Web externa ou para outras notas internas.",
            features: ["Multi-URL (vários links no mesmo texto)"]
        },
        satellite: {
            icon: "🛰️",
            label: "Satélite",
            description: "Sistema da 4ª Coluna que deteta automaticamente ligações entre a caixa ativa e outras entidades na base de dados.",
            features: ["Deteção automática", "Abre popup de conexões"]
        },
        clone: {
            icon: "⚗️",
            label: "Clone / Estátua",
            description: "Cópia viva de um bloco. 'Estátua' (🗿) mantém um vínculo à origem; 'Cópia' (🪞) é independente.",
            features: ["Rastreio de origem", "Bloqueio de edição (Estátua)"]
        }
    },

    // 5. AMBIENTES & MODOS
    // ----------------------------------------------------
    environments: {
        aquarium: {
            icon: "🪸",
            label: "Aquário",
            description: "Ambiente de escrita imersivo (Ecrã Cheio). Fundo escuro, sem distrações. Usa 'Blocos Fantasma' em vez de editor clássico.",
            features: ["Sidebar Medusa", "Blocos arrastáveis", "Janelas Flutuantes"]
        },
        archive: {
            icon: "🗄️",
            label: "Arquivo",
            description: "Sistema de Feed (semelhante a redes sociais) para notas rápidas e contínuas.",
            features: ["Posts individuais", "Gavetões", "Prateleira"]
        },
        flash: {
            icon: "⚡",
            label: "Modo Flash",
            color: "#e67e22",
            description: "Modo de captura rápida. As notas criadas aqui são destacadas e servem para pensamentos fugazes.",
            features: ["Criação em 1 clique", "Lista separada"]
        },
        shared: {
            icon: "🤝",
            label: "Modo Partilha",
            color: "#e74c3c",
            description: "Área colaborativa. Permite editar notas em tempo real com outros utilizadores.",
            features: ["Locks (Cadeados)", "Chat de Presença", "Sincronização ao vivo"]
        }
    },

    // 6. AUTOMAÇÃO & IA
    // ----------------------------------------------------
    automation: {
        robot: {
            icon: "🤖",
            label: "Exportar Sentinela",
            description: "Cola o texto de um artigo e o Robô extrai automaticamente as perguntas e parágrafos, criando caixas formatadas.",
            features: ["Regex Inteligente", "Formatação automática"]
        },
        scanner: {
            icon: "🎰",
            label: "Scanner Universal",
            description: "Analisa o texto atual à procura de referências bíblicas, datas ou nomes de entidades e cria links automaticamente.",
            features: ["Deteção de padrões", "Linkagem em massa"]
        },
        autolinker: {
            icon: "✨",
            label: "Auto-Linker",
            description: "Sugere Tags ou Entidades baseadas no que escreveste, comparando com a tua base de dados.",
            features: ["Sugestão proativa", "Zero-clique"]
        }
    },

    // 7. ENTIDADES (DADOS ESTRUTURADOS)
    // ----------------------------------------------------
    entities: {
        bible: { icon: "📜", label: "Texto Bíblico" },
        character: { icon: "👤", label: "Personagem" },
        location: { icon: "📍", label: "Local" },
        theme: { icon: "🪐", label: "Cosmos (Tema)" },
        tag: { icon: "🏷️", label: "Tag (#)" },
        marker: { icon: "🔖", label: "Marcador" }
    },

    // 8. ESTRUTURA
    // ----------------------------------------------------
    structure: {
        superfolder: {
            icon: "🗃️",
            label: "Superpasta",
            description: "Uma pasta raiz isolada. Quando entras, a navegação foca-se apenas nela, escondendo o resto da árvore.",
            features: ["Ícone personalizado", "Isolamento de contexto"]
        },
        drawer: {
            icon: "📂",
            label: "Gaveta",
            description: "Sub-pasta dentro de um Arquivo/Gavetão.",
            features: ["Organização interna", "Acordeão"]
        },
        drawer_big: {
            icon: "📦",
            label: "Gavetão",
            description: "Contentor principal dentro de um Arquivo para agrupar várias Gavetas.",
            features: ["Agrupamento macro"]
        }
    }
};

/**
 * Função auxiliar para obter dados de uma ferramenta pelo ID ou Label
 * Exemplo: getToolInfo('redator') ou getToolInfo('Raciocínio')
 */
export function getToolInfo(query) {
    const q = query.toLowerCase();
    
    for (const category in NOTABOOK_MANUAL) {
        const items = NOTABOOK_MANUAL[category];
        
        // Procura pela chave (ex: 'subnote')
        if (items[q]) return items[q];
        
        // Procura pelo label (ex: 'SubNota')
        for (const key in items) {
            if (items[key].label.toLowerCase() === q) return items[key];
        }
    }
    return null;
}

/**
 * Função para gerar uma lista HTML simples para um menu de ajuda
 */
export function generateHelpHTML() {
    let html = '<div class="manual-container">';
    
    for (const [catKey, items] of Object.entries(NOTABOOK_MANUAL)) {
        html += `<h3 style="text-transform:capitalize; border-bottom:1px solid #444; margin-top:20px;">${catKey.replace('_', ' ')}</h3>`;
        html += `<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap:10px;">`;
        
        for (const [key, tool] of Object.entries(items)) {
            html += `
                <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:6px; border-left:3px solid ${tool.color || '#888'};">
                    <div style="font-weight:bold; font-size:1.1em; margin-bottom:5px;">
                        ${tool.icon} ${tool.label}
                    </div>
                    <p style="font-size:0.85em; color:#ccc; margin:0;">${tool.description || ''}</p>
                </div>
            `;
        }
        html += `</div>`;
    }
    html += '</div>';
    return html;
}