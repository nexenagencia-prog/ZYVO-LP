const features = [
  { tag: "SKILLS", title: "Veja a reunião por dentro.", text: "A Skills transforma cada encontro em uma leitura objetiva da sua atuação. Você revisita momentos importantes, entende o que aconteceu e acompanha sua performance sem depender apenas da memória." },
  { tag: "HUMAN PRO", title: "Descubra o que está faltando em você.", text: "Human Pro é uma ferramenta dentro da ZYVO. Ela cruza o contexto das suas reuniões para investigar padrões, pontos cegos e competências que podem estar limitando sua performance." },
];

const questions = ["Onde estou errando?", "O que está me faltando?", "O que preciso aprender?", "O que preciso mudar no meu comportamento?", "O que devo praticar?"];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#inicio" aria-label="ZYVO"><img src="/zyvo-logo.svg" alt="ZYVO" /></a>
        <nav><a href="#zyvo">ZYVO</a><a href="#skills">Skills</a><a href="#human">Human Pro</a><a href="#como">Como funciona</a></nav>
        <a className="navCta" href="#cta">Conhecer a ZYVO</a>
      </header>

      <section id="inicio" className="hero shell">
        <div className="eyebrow">VIDEOCONFERÊNCIA + INTELIGÊNCIA DE PERFORMANCE HUMANA</div>
        <h1>A reunião termina.<br/><span>A ZYVO continua lendo o que ficou.</span></h1>
        <p className="heroText">Você fala, vende, ensina, negocia e lidera. A ZYVO transforma essas conversas em inteligência para mostrar padrões que você normalmente não percebe enquanto está dentro da reunião.</p>
        <div className="actions"><a className="primary" href="#zyvo">Entender a ZYVO</a><a className="secondary" href="#human">Ver Human Pro</a></div>

        <div className="stage" aria-label="Interface conceitual da ZYVO">
          <div className="glow glowA"/><div className="glow glowB"/>
          <div className="meetingCard glass">
            <div className="meetingTop"><span>Reunião estratégica</span><span className="live">● AO VIVO</span></div>
            <div className="peopleGrid"><div className="person p1"><span>SB</span><small>Sandro</small></div><div className="person p2"><span>MD</span><small>Marina</small></div><div className="person p3"><span>RC</span><small>Rafael</small></div></div>
            <div className="meetingBottom"><button>◉</button><button>⌁</button><button>⌁</button><button className="leave">Sair</button></div>
          </div>
          <div className="insightCard glass">
            <span className="microLabel">PADRÃO RECORRENTE</span>
            <strong>Você acelera a solução antes de explorar o problema.</strong>
            <p>Esse comportamento aparece em diferentes conversas e pode reduzir sua capacidade de construir valor.</p>
            <div className="chip">Investigar com Human Pro →</div>
          </div>
        </div>
      </section>

      <section id="zyvo" className="section shell intro">
        <div><span className="kicker">O QUE É A ZYVO</span><h2>Não é só uma chamada de vídeo.<br/>É contexto acumulado sobre como você performa.</h2></div>
        <p>A ZYVO é uma plataforma de videoconferência construída em torno de performance humana. Você realiza reuniões normalmente. A diferença é que o histórico deixa de ser apenas arquivo: ele passa a revelar recorrências na forma como você explica, pergunta, argumenta, reage, negocia e conduz.</p>
      </section>

      <section className="quoteBand"><div className="shell"><p>Uma reunião pode ser acaso.<br/><strong>Um padrão repetido já é informação.</strong></p></div></section>

      <section id="skills" className="section shell featureGrid">
        {features.map((item) => (
          <article className="featureCard" key={item.tag} id={item.tag === "HUMAN PRO" ? "human" : undefined}>
            <span className="kicker">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p>
            {item.tag === "SKILLS" ? (
              <div className="skillVisual"><div className="timeline"><i style={{width:"78%"}}/><i style={{width:"58%"}}/><i style={{width:"91%"}}/></div><div className="moment"><span>01:48</span><b>Momento importante identificado</b><small>Volte exatamente ao trecho que merece sua atenção.</small></div></div>
            ) : (
              <div className="humanVisual"><div className="humanHead"><span className="orb"/> HUMAN PRO</div><div className="questionList">{questions.slice(0,3).map(q => <span key={q}>{q}</span>)}</div><div className="answer"><small>LEITURA DO HISTÓRICO</small><b>Seu gargalo não parece ser falta de argumentos.</b><p>Você tende a apresentar antes de investigar. O próximo desenvolvimento pode estar em venda consultiva e perguntas de diagnóstico.</p></div></div>
            )}
          </article>
        ))}
      </section>

      <section id="como" className="section shell how">
        <span className="kicker">COMO FUNCIONA</span><h2>Não diga apenas como eu fui.<br/><span>Diga o que eu ainda não consigo enxergar.</span></h2>
        <div className="steps"><div><em>01</em><b>Reunião</b><p>A conversa acontece dentro da ZYVO ou entra pelo seu histórico.</p></div><div><em>02</em><b>Padrão</b><p>A plataforma observa recorrências em diferentes situações, não apenas um episódio isolado.</p></div><div><em>03</em><b>Lacuna</b><p>O Human Pro ajuda a transformar o padrão em uma competência concreta para desenvolver.</p></div><div><em>04</em><b>Nova evidência</b><p>Você volta às próximas reuniões e compara se o comportamento realmente mudou.</p></div></div>
      </section>

      <section className="darkSection"><div className="shell darkGrid"><div><span className="darkKicker">INTELIGÊNCIA APLICADA À PESSOA</span><h2>Talvez o seu problema não seja comunicação.</h2><p>Pode ser persuasão. Diagnóstico. Negociação. Didática. Conhecimento do produto. Escuta. Liderança. Estrutura de raciocínio.</p><p>A ZYVO existe para reduzir o achismo e ajudar você a descobrir onde concentrar desenvolvimento.</p></div><div className="darkPanel"><span>HUMAN PRO</span>{questions.map(q => <div className="darkQ" key={q}>{q}<b>↗</b></div>)}</div></div></section>

      <section className="section shell manifesto"><p className="bigCopy">Você já participa de reuniões.<br/><strong>Agora elas podem começar a revelar por que algumas conversas funcionam — e outras não.</strong></p></section>

      <section id="cta" className="cta shell"><div className="ctaGlow"/><img src="/zyvo-logo.svg" alt="ZYVO" /><h2>Sua próxima reunião pode ser mais do que uma reunião.</h2><p>Ela pode ser a próxima evidência sobre o que você precisa desenvolver.</p><a className="primary light" href="#inicio">Conhecer a ZYVO</a></section>

      <footer className="shell"><img src="/zyvo-logo.svg" alt="ZYVO"/><span>Videoconferência com inteligência de performance humana.</span><small>© 2026 ZYVO</small></footer>
    </main>
  );
}
