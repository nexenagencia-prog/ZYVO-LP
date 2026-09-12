const questions = [
  "Onde estou errando?",
  "O que está me faltando?",
  "O que preciso aprender?",
  "O que preciso mudar no meu comportamento?",
  "O que devo praticar?",
];

const tools = [
  ["▣", "Reuniões", ""],
  ["▶", "Gravações", ""],
  ["□", "Agenda", ""],
  ["▤", "Anotações", ""],
  ["▱", "Compartilhar tela", ""],
  ["▦", "Calculadora", ""],
  ["▧", "Criar slides", ""],
  ["|||", "Skills", "(análise de performance)"],
];

export default function Home() {
  return (
    <main>
      <section className="heroRef" id="inicio">
        <header className="topbar shell">
          <a className="logo" href="#inicio" aria-label="ZYVO"><img src="/zyvo-logo.svg" alt="ZYVO" /></a>
          <nav>
            <a className="active" href="#inicio">Início</a>
            <a href="#skills">Skills</a>
            <a href="#human">Human Pro</a>
            <a href="#planos">Planos</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="topActions"><button className="search" aria-label="Buscar">⌕</button><a className="darkPill" href="#contato">Começar agora</a></div>
        </header>

        <div className="heroGrid shell">
          <div className="heroCopy">
            <span className="eyebrow">REUNIÕES INTELIGENTES</span>
            <h1>Converse.<br/>Evolua.<br/>Vá além.</h1>
            <p>A ZYVO é a plataforma de videoconferência com inteligência de performance humana. Faça suas reuniões, analise seu comportamento e descubra o que realmente precisa desenvolver.</p>
            <div className="heroActions"><a className="darkPill big" href="#contato">Começar agora</a><a className="ghostPill" href="#como"><span className="play">▶</span> Ver como funciona</a></div>
            <div className="heroStats"><div><b>+ foco</b><span>em cada conversa</span></div><div><b>+ clareza</b><span>nas suas decisões</span></div><div><b>+ resultados</b><span>na sua carreira</span></div></div>
          </div>

          <div className="heroVisual" aria-label="Interface de videoconferência ZYVO">
            <div className="laptopMock">
              <div className="laptopScreen">
                <div className="screenBar"><span className="miniBrand">ZYVO</span><span>00:24:18</span><span>⚙　⊕　＋</span></div>
                <div className="screenBody">
                  <aside className="rail"><span>◉</span><span>▣</span><span>♙</span><span>✎</span><span>▤</span><span>▦</span></aside>
                  <div className="videoMain personWoman"><span className="personLabel">Marina</span></div>
                  <div className="peopleColumn"><div className="personMan"><span>Rafael</span></div><div className="personWoman2"><span>Camila</span></div><div className="personDark"><span>Ricardo</span></div></div>
                  <div className="chatPanel"><b>Chat</b><div className="chatLine"><i className="avatar a"/><p><strong>Marina</strong><span>Ótima ideia!</span></p><small>10:24</small></div><div className="chatLine"><i className="avatar b"/><p><strong>Rafael</strong><span>Concordo, faz sentido.</span></p><small>10:25</small></div><div className="chatLine"><i className="avatar c"/><p><strong>Camila</strong><span>Vamos avançar com isso.</span></p><small>10:26</small></div><div className="chatInput">Digite uma mensagem... <span>›</span></div></div>
                </div>
                <div className="meetingControls"><span>♟</span><span>◈</span><span>▣</span><span>▣</span><span>♩</span><span>✦</span><b>●</b></div>
              </div>
              <div className="laptopBase"><i/></div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase" id="como">
        <div className="showcaseGrid shell">
          <div className="showcaseCopy">
            <span className="eyebrow">MAIS DO QUE UMA CHAMADA DE VÍDEO</span>
            <h2>Reuniões que<br/>mostram o que<br/>importa.</h2>
            <p>Enquanto você conversa, a ZYVO analisa padrões da sua comunicação, argumentação, escuta e condução. E mostra o que está funcionando, o que está te limitando e em que pontos você pode evoluir.</p>
            <a className="underLink" href="#skills">Conhecer a plataforma <b>→</b></a>
          </div>
          <div className="featureCards" id="skills">
            <article className="glassCard cardLaptop"><div className="cardIcon">▣</div><h3>Reuniões<br/>em alta qualidade</h3><p>Estabilidade, segurança<br/>e uma experiência fluida.</p><div className="deviceSlice"/></article>
            <article className="glassCard"><div className="cardIcon">|||</div><h3>Análises<br/>inteligentes</h3><p>Entenda seus padrões<br/>e identifique oportunidades.</p><div className="bars"><i/><i/><i/><i/><i/><i/></div></article>
            <article className="glassCard"><div className="cardIcon">◉</div><h3>Evolução<br/>contínua</h3><p>Aplique, pratique<br/>e veja a diferença.</p><div className="waves"><i/><b/></div></article>
          </div>
        </div>
      </section>

      <section className="humanRef" id="human">
        <div className="humanBackdrop"/>
        <div className="humanGrid shell">
          <div className="humanCopy">
            <span className="eyebrow dark">HUMAN PRO</span>
            <h2>Pergunte.<br/>Entenda.<br/>Evolua.</h2>
            <p>O Human Pro é uma ferramenta dentro da ZYVO que analisa suas reuniões e responde, com base no seu histórico, o que você precisa desenvolver. Sem achismos. Sem generalidades.</p>
            <a className="outlinePill" href="#contato">Conhecer o Human Pro <span>→</span></a>
          </div>
          <div className="humanChat">
            <div className="questionStack">{questions.map((q)=><div key={q}>{q}</div>)}</div>
            <div className="askBox"><span>Digite sua pergunta...</span><button>›</button></div>
          </div>
          <div className="humanPortrait"/>
          <div className="humanBenefits"><span>MAIS<br/>AUTONOMIA</span><span>MAIS<br/>CONSCIÊNCIA</span><span>MAIS<br/>RESULTADOS</span></div>
        </div>
      </section>

      <section className="toolsRef" id="planos">
        <div className="toolsGrid shell">
          <div className="toolsCopy"><span className="eyebrow">TUDO EM UM SÓ LUGAR</span><h2>Ferramentas que<br/>trabalham com você.</h2><p>Reuniões, gravações, análises, anotações, compartilhamento, agenda e muito mais.<br/>Tudo integrado para você focar no que realmente importa: evoluir.</p><a className="underLink" href="#contato">Explorar recursos <b>→</b></a></div>
          <div className="toolCards">{tools.map(([icon,title,sub])=><article key={title}><span className="toolGlyph">{icon}</span><b>{title}</b>{sub&&<small>{sub}</small>}</article>)}</div>
        </div>
      </section>

      <section className="finalRef" id="contato">
        <div className="finalArt"/>
        <div className="finalGrid shell">
          <div className="finalCopy"><span className="eyebrow dark">PRONTO PARA EVOLUIR?</span><h2>Suas próximas reuniões<br/>podem levar você mais longe.</h2><p>Experimente a ZYVO e descubra uma nova forma de se comunicar,<br/>aprender e alcançar resultados.</p><div className="finalActions"><a className="lightPill" href="#inicio">Começar agora</a><a className="outlinePill small" href="#inicio">Falar com um especialista</a></div></div>
          <div className="finalBrand"><img src="/zyvo-logo.svg" alt="ZYVO"/><span>REUNIÕES INTELIGENTES.<br/>PESSOAS EXTRAORDINÁRIAS.</span><small>DISPONÍVEL PARA　●　▣　◎</small></div>
        </div>
      </section>
    </main>
  );
}
