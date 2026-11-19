from pathlib import Path
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

BASE = Path(r"c:\Users\Guilherme Leite\Desktop\SGA")
ASSETS = BASE / "slides_assets"
OUT = BASE / "APRESENTACAO_FRONTEND_SGA.pptx"

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

NAVY = RGBColor(20, 48, 84)
BLUE = RGBColor(18, 75, 121)
CYAN = RGBColor(45, 132, 170)
YELLOW = RGBColor(246, 188, 0)
WHITE = RGBColor(255, 255, 255)
LIGHT = RGBColor(244, 247, 250)
DARK = RGBColor(35, 42, 49)
GRAY = RGBColor(105, 116, 126)
GREEN = RGBColor(42, 139, 92)


def add_text(slide, text, x, y, w, h, size=20, color=DARK, bold=False, align=PP_ALIGN.LEFT):
    box = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    tf = box.text_frame
    tf.clear()
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = text
    p.alignment = align
    r = p.runs[0]
    r.font.name = "Aptos"
    r.font.size = Pt(size)
    r.font.bold = bold
    r.font.color.rgb = color
    return box


def add_header(slide, title, section):
    bg = slide.background
    bg.fill.solid()
    bg.fill.fore_color.rgb = WHITE
    bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, Inches(0.18))
    bar.fill.solid(); bar.fill.fore_color.rgb = YELLOW; bar.line.fill.background()
    add_text(slide, section.upper(), 0.65, 0.35, 3.5, 0.28, 10, BLUE, True)
    add_text(slide, title, 0.65, 0.65, 11.9, 0.65, 26, NAVY, True)


def add_footer(slide, number):
    add_text(slide, "SGA • Frontend", 0.65, 7.12, 3, 0.22, 9, GRAY)
    add_text(slide, str(number), 12.2, 7.12, 0.5, 0.22, 9, GRAY, True, PP_ALIGN.RIGHT)


def add_image(slide, filename, x, y, w, h):
    path = ASSETS / filename
    if path.exists():
        pic = slide.shapes.add_picture(str(path), Inches(x), Inches(y), width=Inches(w), height=Inches(h))
        # white border
        pic.line.color.rgb = RGBColor(220, 225, 230)
        pic.line.width = Pt(1)
        return pic
    add_text(slide, f"Imagem não encontrada: {filename}", x, y, w, h, 16, RGBColor(180, 50, 50), True)


def add_bullets(slide, items, x, y, w, h, size=18, bullet_color=BLUE):
    box = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    tf = box.text_frame
    tf.clear()
    tf.word_wrap = True
    for i, item in enumerate(items):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.text = item
        p.level = 0
        p.font.name = "Aptos"
        p.font.size = Pt(size)
        p.font.color.rgb = DARK
        p.space_after = Pt(12)
        p.text = "• " + item
    return box


def title_slide():
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    slide.background.fill.solid(); slide.background.fill.fore_color.rgb = NAVY
    accent = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(0.18), prs.slide_height)
    accent.fill.solid(); accent.fill.fore_color.rgb = YELLOW; accent.line.fill.background()
    add_text(slide, "APRESENTAÇÃO TÉCNICA", 0.85, 0.75, 5, 0.35, 12, YELLOW, True)
    add_text(slide, "Frontend do SGA", 0.85, 1.35, 8.2, 0.9, 38, WHITE, True)
    add_text(slide, "Sistema de Gestão de Ambientes", 0.85, 2.25, 8.2, 0.55, 24, RGBColor(205, 221, 236), False)
    add_text(slide, "React • Interface • Rotas • API • Experiência por perfil", 0.85, 3.15, 9.5, 0.45, 16, WHITE, False)
    add_text(slide, "TechFlow", 0.85, 6.55, 3, 0.4, 16, YELLOW, True)
    add_image(slide, "home.png", 9.6, 1.15, 3.1, 4.7)


def slide_objective():
    slide = prs.slides.add_slide(prs.slide_layouts[6]); add_header(slide, "Objetivo da interface", "Visão geral")
    add_bullets(slide, [
        "Facilitar o acesso às informações dos ambientes.",
        "Organizar consultas, cadastros e alocações.",
        "Permitir o relato público de problemas de manutenção.",
        "Adaptar ações e relatórios para cada perfil.",
        "Apresentar feedback claro de sucesso, erro e carregamento.",
    ], 0.75, 1.55, 6.0, 4.8, 18)
    add_image(slide, "home.png", 7.15, 1.55, 5.35, 4.85)
    add_footer(slide, 2)


def slide_tech():
    slide = prs.slides.add_slide(prs.slide_layouts[6]); add_header(slide, "Tecnologias utilizadas no frontend", "Tecnologia")
    cards = [
        ("React 19", "Componentização e estados"),
        ("React Router", "Navegação entre páginas"),
        ("JavaScript", "Interações e lógica"),
        ("Fetch API", "Comunicação assíncrona"),
        ("CSS", "Layout e identidade visual"),
        ("Jest / Testing", "Validação da interface"),
    ]
    for i, (title, desc) in enumerate(cards):
        col = i % 3; row = i // 3
        x, y = 0.75 + col*4.15, 1.55 + row*2.15
        box = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(3.65), Inches(1.55))
        box.fill.solid(); box.fill.fore_color.rgb = LIGHT; box.line.color.rgb = RGBColor(220, 225, 230)
        add_text(slide, title, x+0.25, y+0.25, 3.15, 0.35, 18, NAVY, True)
        add_text(slide, desc, x+0.25, y+0.75, 3.15, 0.48, 14, DARK)
    add_footer(slide, 3)


def slide_structure():
    slide = prs.slides.add_slide(prs.slide_layouts[6]); add_header(slide, "Estrutura da aplicação", "Arquitetura frontend")
    items = [
        ("index.js", "Inicializa o React"),
        ("App.js", "Define as rotas"),
        ("api.js", "Centraliza requisições"),
        ("*.js", "Telas e componentes"),
        ("*.css", "Estilos por página"),
    ]
    y = 1.55
    for i, (name, desc) in enumerate(items):
        box = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.75), Inches(y), Inches(5.0), Inches(0.78))
        box.fill.solid(); box.fill.fore_color.rgb = LIGHT if i % 2 == 0 else RGBColor(233, 241, 246)
        box.line.fill.background()
        add_text(slide, name, 1.0, y+0.13, 1.45, 0.4, 16, BLUE, True)
        add_text(slide, desc, 2.55, y+0.16, 3.0, 0.38, 14, DARK)
        y += 0.96
    add_text(slide, "Fluxo principal", 7.05, 1.55, 2.2, 0.4, 18, NAVY, True)
    steps = ["Usuário", "Componente", "apiFetch", "Backend", "Supabase"]
    x = 7.0
    for i, step in enumerate(steps):
        circle = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(2.35+i*0.72), Inches(2.0), Inches(0.48))
        circle.fill.solid(); circle.fill.fore_color.rgb = NAVY if i in (0,4) else BLUE
        circle.line.fill.background()
        add_text(slide, step, x, 2.35+i*0.72+0.08, 2.0, 0.22, 12, WHITE, True, PP_ALIGN.CENTER)
        if i < len(steps)-1:
            add_text(slide, "↓", x+0.85, 2.78+i*0.72, 0.3, 0.25, 12, YELLOW, True, PP_ALIGN.CENTER)
    add_footer(slide, 4)


def slide_home():
    slide = prs.slides.add_slide(prs.slide_layouts[6]); add_header(slide, "Página inicial pública", "Demonstração")
    add_image(slide, "home.png", 0.75, 1.55, 8.15, 5.15)
    add_bullets(slide, [
        "Aulas em andamento.",
        "Ambiente e turma visualizados.",
        "Atualização automática do horário.",
        "Acesso rápido à manutenção.",
        "Botão de login.",
    ], 9.25, 1.75, 3.25, 4.7, 16)
    add_footer(slide, 5)


def slide_login():
    slide = prs.slides.add_slide(prs.slide_layouts[6]); add_header(slide, "Login e painel por perfil", "Experiência por usuário")
    add_image(slide, "login.png", 0.75, 1.55, 5.85, 4.95)
    add_image(slide, "painel_coordenador.png", 7.05, 1.55, 5.45, 4.95)
    add_text(slide, "Ação mostrada conforme o perfil", 7.05, 6.45, 5.45, 0.35, 14, BLUE, True, PP_ALIGN.CENTER)
    add_footer(slide, 6)


def slide_allocation():
    slide = prs.slides.add_slide(prs.slide_layouts[6]); add_header(slide, "Alocação de ambiente", "Formulário funcional")
    add_image(slide, "alocacao.png", 0.75, 1.55, 8.15, 5.15)
    add_bullets(slide, [
        "Ambiente carregado pela API.",
        "Aula, dia e período selecionados.",
        "Horários dependentes do período.",
        "Detalhes do ambiente em tempo real.",
        "Feedback de sucesso ou erro.",
    ], 9.25, 1.75, 3.25, 4.7, 16)
    add_footer(slide, 7)


def slide_public_maintenance():
    slide = prs.slides.add_slide(prs.slide_layouts[6]); add_header(slide, "Sugestão pública de manutenção", "Acesso sem login")
    add_image(slide, "sugestao_manutencao.png", 0.75, 1.55, 8.15, 5.15)
    add_bullets(slide, [
        "Nome do solicitante.",
        "Ambiente escolhido.",
        "Local preenchido automaticamente.",
        "Descrição detalhada.",
        "Sugestão separada da ocorrência.",
    ], 9.25, 1.75, 3.25, 4.7, 16)
    add_footer(slide, 8)


def slide_maintenance():
    slide = prs.slides.add_slide(prs.slide_layouts[6]); add_header(slide, "Direcionamento de manutenção", "Painel operacional")
    add_image(slide, "direcionamento_manutencao.png", 0.75, 1.55, 8.15, 5.15)
    add_bullets(slide, [
        "Sugestões organizadas por status.",
        "Pendente, Em análise e Concluída.",
        "Status atualizado com PATCH.",
        "Comentário de direcionamento.",
        "Interface atualizada sem recarregar.",
    ], 9.25, 1.75, 3.25, 4.7, 16)
    add_footer(slide, 9)


def slide_reports():
    slide = prs.slides.add_slide(prs.slide_layouts[6]); add_header(slide, "Relatórios e telemetria", "Consulta de dados")
    add_image(slide, "telemetria.png", 0.75, 1.55, 8.15, 5.15)
    add_bullets(slide, [
        "Ambientes e turmas.",
        "Atribuições e alocações.",
        "Sugestões de manutenção.",
        "Status e indicadores de máquinas.",
        "Dados apresentados pelo backend.",
    ], 9.25, 1.75, 3.25, 4.7, 16)
    add_footer(slide, 10)


def slide_concepts():
    slide = prs.slides.add_slide(prs.slide_layouts[6]); add_header(slide, "Conceitos aplicados e próximos passos", "Síntese")
    add_bullets(slide, [
        "Componentização e reutilização.",
        "Hooks: useState, useEffect e useMemo.",
        "Navegação por React Router.",
        "Estados de carregamento e erro.",
        "Comunicação assíncrona com API.",
    ], 0.75, 1.55, 5.25, 4.9, 17)
    add_text(slide, "Próximas evoluções", 7.05, 1.55, 3.8, 0.45, 20, NAVY, True)
    add_bullets(slide, [
        "Autenticação segura.",
        "Proteção de rotas por perfil.",
        "Reserva completa por horário.",
        "SLA e histórico de manutenção.",
        "QR Code, RFID e upload seguro.",
    ], 7.05, 2.15, 5.25, 4.2, 17)
    add_footer(slide, 11)


def slide_close():
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    slide.background.fill.solid(); slide.background.fill.fore_color.rgb = NAVY
    accent = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(0.18), prs.slide_height)
    accent.fill.solid(); accent.fill.fore_color.rgb = YELLOW; accent.line.fill.background()
    add_text(slide, "Frontend do SGA", 0.85, 1.15, 8.5, 0.75, 34, WHITE, True)
    add_text(slide, "Uma interface integrada para ambientes, alocações, manutenção e relatórios.", 0.85, 2.15, 10.5, 1.15, 24, RGBColor(215, 227, 238), False)
    add_text(slide, "Obrigado pela atenção", 0.85, 5.55, 5, 0.55, 22, YELLOW, True)
    add_text(slide, "Perguntas", 10.8, 5.55, 1.5, 0.55, 18, WHITE, True, PP_ALIGN.RIGHT)


title_slide()
slide_objective()
slide_tech()
slide_structure()
slide_home()
slide_login()
slide_allocation()
slide_public_maintenance()
slide_maintenance()
slide_reports()
slide_concepts()
slide_close()

prs.save(OUT)
print(OUT)
