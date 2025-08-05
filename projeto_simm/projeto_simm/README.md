# Projeto SIMM - MVP v1.0

## Descrição

Site moderno e responsivo para MMORPG Central, desenvolvido seguindo as especificações técnicas do Projeto SIMM. O layout é otimizado para monetização via Google AdSense e preparado para futura conversão em tema WordPress.

## Características Principais

### 🎨 Design Visual
- Tema escuro com paleta de cores azul/roxo
- Gradientes sutis e microinterações suaves
- Tipografia hierárquica bem definida
- Espaçamentos generosos e layout limpo

### 📱 Responsividade Total
- **Mobile-First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Mobile (até 767px), Tablet (768-1023px), Desktop (1024px+)
- **Grade Fluida**: 1 coluna no mobile até 3+ no desktop
- **Menu Responsivo**: Menu hambúrguer no mobile

### 🔒 Elementos Bloqueados
- Item "Guias - Em Breve" no menu com ícone de cadeado
- Cards de guias bloqueados com overlay escurecido
- Tooltips informativos ao passar o mouse
- Visual consistente para elementos inativos

### 💰 Monetização
- Espaços otimizados para Google AdSense
- Marcações HTML `<!-- ADSENSE SLOT -->`
- Posicionamento estratégico dos anúncios
- Sidebar para desktop com espaço publicitário

### ♿ Acessibilidade
- HTML5 semântico
- Navegação por teclado
- Atributos ARIA adequados
- Alt text para imagens
- Suporte a leitores de tela

## Estrutura de Arquivos

```
projeto_simm/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principais
├── js/
│   └── script.js       # Funcionalidades JavaScript
├── assets/             # Imagens e recursos
├── components/         # Componentes reutilizáveis
└── README.md          # Esta documentação
```

## Como Usar

### 1. Visualizar Localmente

```bash
# Navegar para o diretório
cd projeto_simm

# Iniciar servidor local
python3 -m http.server 8000

# Abrir no navegador
http://localhost:8000
```

### 2. Personalização

#### Cores e Temas
Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary-bg: #0a0e1a;
    --accent-blue: #3b82f6;
    --accent-purple: #8b5cf6;
    /* ... outras variáveis */
}
```

#### Conteúdo
- Edite `index.html` para alterar textos e estrutura
- Adicione imagens na pasta `assets/`
- Modifique `js/script.js` para funcionalidades adicionais

### 3. Implementar AdSense

Substitua os comentários `<!-- ADSENSE SLOT -->` pelos códigos reais do Google AdSense:

```html
<!-- Exemplo de implementação -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

## Funcionalidades Implementadas

### ✅ Menu de Navegação
- Logo com gradiente
- Links: Início, Jogos, Notícias
- Item bloqueado: "Guias - Em Breve"
- Botões de busca e newsletter

### ✅ Seção Hero
- Título com gradiente
- Descrição atrativa
- Botões de ação
- Partículas animadas
- Indicador de scroll

### ✅ Modos de Navegação
- Card "Modo Notícias" ativo
- Card "Modo Guias" bloqueado
- Estatísticas do site
- Efeitos hover suaves

### ✅ Seção de Jogos
- Grid responsivo
- Cards com hover effects
- Espaços para imagens e logos
- CTA para solicitar novos jogos

### ✅ Newsletter
- Formulário funcional
- Validação de email
- Feedback visual
- Recursos destacados

### ✅ Footer
- Links organizados
- Redes sociais
- Informações legais
- Copyright e disclaimer

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript Vanilla**: Funcionalidades interativas
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG guidelines

## Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móveis iOS/Android

## Performance

- CSS otimizado com variáveis
- JavaScript vanilla (sem dependências)
- Lazy loading preparado
- Imagens otimizadas (quando adicionadas)

## Próximos Passos

1. **Conteúdo**: Adicionar imagens reais dos jogos
2. **Funcionalidades**: Implementar busca e filtros
3. **Backend**: Conectar formulários e newsletter
4. **CMS**: Preparar para WordPress
5. **SEO**: Otimizar meta tags e estrutura
6. **Analytics**: Implementar Google Analytics
7. **Performance**: Otimizar Core Web Vitals

## Suporte

Para dúvidas ou modificações, consulte:
- Documentação CSS para customização de estilos
- Arquivo JavaScript para funcionalidades
- Estrutura HTML para modificações de layout

## Licença

Este projeto foi desenvolvido para o Projeto SIMM - MVP v1.0
Todos os direitos reservados.

---

**Desenvolvido com foco em qualidade, performance e monetização.**
