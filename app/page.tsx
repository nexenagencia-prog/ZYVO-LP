const tools = [
  ["Reuniões", "Vídeo com foco em contexto e performance."],
  ["Gravações", "Reassista momentos e decisões importantes."],
  ["Agenda", "Organize sua rotina de reuniões."],
  ["Anotações", "Registre ideias sem sair da experiência."],
  ["Compartilhar tela", "Apresente sem quebrar o fluxo."],
  ["Calculadora", "Ferramentas úteis sempre por perto."],
  ["Criar slides", "Prepare materiais dentro do ecossistema."],
  ["Skills", "Analise sua atuação em cada reunião."],
];

const questions = [
  "Onde estou errando?",
  "O que está me faltando?",
  "O que preciso aprender?",
  "O que preciso mudar no meu comportamento?",
  "O que devo praticar?",
];

export default function Home() {
  return (
    <main>
      <header className="topbar shell">
        <a href="#inicio" className="logo"><img src="/zyvo-logo.svg" alt="ZYVO" /></a>
        <nav>
          <a href="#inicio">Início</a><a href="#skills">Skills</a><a href="#human">Human Pro</a><a href="#planos">Planos</a><a href="#contato">Contato</a>
        </nav>
        <div className="topActions"><button className="searchBtn" aria-label="Buscar">⌕</button><a href="#contato" className="blackPill">Começar agora</a></div>
      </header>

      <section id="inicio" className="hero shell">
        <span className="eyebrow">REUNIÕES INTELIGENTES</span>
        <h1>Você termina uma reunião.<br/><span>A ZYVO descobre o que você não percebeu nela.</span></h1>
        <p>A ZYVO é a plataforma de videoconferência com inteligência de performance humana. Faça suas reuniões, analise seu comportamento e descubra o que realmente precisa desenvolver.</p>
        <div className="heroActions"><a className="blackPill large" href="#skills">Começar agora</a><a className="textLink" href="#como">Ver como funciona <b>↗</b></a></div>

        <div className="deviceScene">
          <div className="aurora a1"/><div className="aurora a2"/>
          <div className="laptop">
            <div className="screen">
              <div className="screenTop"><img src="/zyvo-logo.svg" alt="ZYVO"/><span>Reunião estratégica</span><small>•••</small></div>
              <div className="meetingLayout">
                <div className="speaker"><div className="face faceMain"><span>SB</span></div><div className="nameTag">Sandro Bello</div></div>
                <div className="sidePeople"><div className="mini faceWarm"><span>AM</span></div><div className="mini faceDark"><span>RC</span></div></div>
              </div>
              <div className="controls"><i>⌁</i><i>◉</i><i>⌁</i><i>▣</i><button>Sair</button></div>
              <div className="floatingGlass insight"><small>INSIGHT DA REUNIÃO</small><b>Você apresentou a solução antes de explorar totalmente o problema.</b><span>Ver análise completa →</span></div>
              <div className="floatingGlass performance"><small>PERFORMANCE</small><strong>82</strong><span>+6,4%</span></div>
            </div>
            <div className="base"/><div className="baseLip"/>
          </div>
        </div>

        <div className="microStats"><div><strong>+ foco</strong><span>em cada conversa</span></div><div><strong>+ clareza</strong><span>nas suas decisões</span></div><div><strong>+ contexto</strong><span>sobre sua evolução</span></div></div>
      </section>

      <section className="whiteBlock" id="como">
        <div className="shell sectionHead centered"><span className="eyebrow">MAIS DO QUE UMA CHAMADA DE VÍDEO</span><h2>Reuniões que mostram o que importa.</h2><p>Uma experiência de reunião desenhada para capturar contexto, revelar padrões e transformar conversas em inteligência útil.</p></div>
        <div className="shell threeCards">
          <article><div className="iconOrb">◉</div><h3>Reuniões em alta qualidade</h3><p>Áudio, vídeo e compartilhamento em uma interface limpa, rápida e sem distrações.</p><div className="miniMock videoMock"><span/><span/><span/></div></article>
          <article><div className="iconOrb">⌁</div><h3>Análises inteligentes</h3><p>Veja momentos, padrões e sinais que normalmente desaparecem quando a reunião termina.</p><div className="miniMock graphMock"><i/><i/><i/><i/></div></article>
          <article id="skills"><div className="iconOrb">✦</div><h3>Skills</h3><p>Analise comunicação, clareza, escuta e condução sem transformar sua evolução em achismo.</p><div className="miniMock rings"><b>88</b><b>91</b><b>84</b></div></article>
        </div>
      </section>

      <section id="human" className="humanSection">
        <div className="shell humanGrid">
          <div className="humanCopy"><span className="darkEyebrow">HUMAN PRO · DENTRO DA ZYVO</span><h2>Pergunte.<br/>Entenda.<br/><span>Evolua.</span></h2><p>O Human Pro cruza o contexto das suas reuniões para revelar padrões, pontos cegos e competências que podem estar limitando sua performance.</p><p className="humanStrong">Não é outro aplicativo. É uma segunda inteligência dentro da ZYVO.</p></div>
          <div className="humanPanel">
            <div className="humanPanelTop"><span className="orb"/><b>HUMAN PRO</b><small>Histórico</small></div>
            <div className="questionCloud">{questions.map((q)=><span key={q}>{q}</span>)}</div>
            <div className="chatBox"><div><small>LEITURA DO SEU HISTÓRICO</small><b>Seu gargalo não parece ser falta de argumentos.</b><p>Você tende a apresentar antes de investigar. O próximo desenvolvimento pode estar em venda consultiva, descoberta e perguntas de diagnóstico.</p></div><button>↗</button></div>
          </div>
        </div>
      </section>

      <section className="toolsSection shell">
        <div className="sectionHead centered"><span className="eyebrow">TUDO NO MESMO LUGAR</span><h2>Ferramentas que trabalham com você.</h2><p>Menos troca de contexto. Mais continuidade antes, durante e depois da reunião.</p></div>
        <div className="toolGrid">{tools.map(([title,text],i)=><article key={title}><span className="toolIcon">{["◉","▶","30","✎","▣","=","▤","✦"][i]}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>)}</div>
      </section>

      <section className="intelligenceBand"><div className="shell intelligenceGrid"><div><span className="darkEyebrow">INTELIGÊNCIA DE PERFORMANCE HUMANA</span><h2>A ZYVO começa onde o resumo da reunião termina.</h2></div><div className="flow"><span>Reunião</span><i>→</i><span>Comportamento</span><i>→</i><span>Padrões</span><i>→</i><span>Pontos cegos</span><i>→</i><span>Prática</span></div></div></section>

      <section id="contato" className="finalCta shell">
        <div className="finalGlow"/><img src="/zyvo-logo.svg" alt="ZYVO"/><span className="darkEyebrow">PRÓXIMA GERAÇÃO DE REUNIÕES</span><h2>Suas próximas reuniões podem mostrar muito mais sobre você.</h2><p>Videoconferência com inteligência de performance humana.</p><a href="#inicio" className="whitePill">Começar agora</a>
      </section>

      <footer className="shell"><img src="/zyvo-logo.svg" alt="ZYVO"/><span>© 2026 ZYVO</span><small>Performance humana aplicada a reuniões.</small></footer>
    </main>
  );
}
