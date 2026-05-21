// ============================================================
// MOCK DATA — Protótipo estático para GitHub Pages
// ============================================================

const MOCK = {
  dashboard: {
    metrics: {
      pwnedCount: 13800000000,
      activeGangs: 68,
      threats: 1326,
      vulnerabilities: 562
    },
    recentThreats: [
      { grupo: "LockBit 3.0", vitima: "Saúde Digital S.A.", pais: "BR", data_incidente: "2026-05-18T14:30:00Z" },
      { grupo: "BlackCat", vitima: "Global Finance Ltd", pais: "US", data_incidente: "2026-05-17T09:10:00Z" },
      { grupo: "Cl0p", vitima: "Educação Nacional", pais: "BR", data_incidente: "2026-05-16T22:00:00Z" },
      { grupo: "RansomHub", vitima: "AutoParts Co.", pais: "DE", data_incidente: "2026-05-15T11:45:00Z" },
      { grupo: "Play", vitima: "TechStart Inc.", pais: "UK", data_incidente: "2026-05-14T16:20:00Z" }
    ],
    recentVulnerabilities: [
      { cve_id: "CVE-2026-30078", cvss: 9.8 },
      { cve_id: "CVE-2026-5663", cvss: 8.1 },
      { cve_id: "CVE-2026-5661", cvss: 7.5 },
      { cve_id: "CVE-2026-5660", cvss: 9.1 },
      { cve_id: "CVE-2026-3524", cvss: 6.8 },
      { cve_id: "CVE-2025-44228", cvss: 10.0 }
    ],
    chartData: {
      incidentTimeline: {
        labels: ["Out", "Nov", "Dez", "Jan", "Fev", "Mar", "Abr", "Mai"],
        data: [12, 19, 28, 35, 22, 41, 53, 47]
      },
      severityDistribution: { data: [142, 203, 176, 41] }
    }
  },
  news: [
    {
      titulo: "LockBit 3.0 ataca setor de saúde brasileiro com nova variante de ransomware",
      fonte: "BleepingComputer",
      data_publicacao: "2026-05-18T14:00:00Z",
      resumo: "Uma nova variante do ransomware LockBit 3.0 foi identificada em ataques direcionados a hospitais e clínicas brasileiras. O grupo exige resgates em criptomoedas e ameaça vazar dados de pacientes caso as vítimas não cumpram as exigências.",
      url: "https://bleepingcomputer.com"
    },
    {
      titulo: "Falha crítica no Apache explorada ativamente por grupos APT",
      fonte: "The Hacker News",
      data_publicacao: "2026-05-17T10:30:00Z",
      resumo: "Pesquisadores de segurança identificaram que grupos de ameaças persistentes avançadas estão explorando ativamente uma vulnerabilidade crítica no servidor Apache, com score CVSS de 9.8. Patches emergenciais foram liberados.",
      url: "https://thehackernews.com"
    },
    {
      titulo: "BlackCat mira empresas de energia na Europa com ataques sofisticados",
      fonte: "SecurityWeek",
      data_publicacao: "2026-05-16T08:15:00Z",
      resumo: "O grupo de ransomware BlackCat (ALPHV) está conduzindo uma campanha coordenada contra companhias de energia europeias, usando técnicas de dupla extorsão e ameaças de interrupção de infraestrutura crítica.",
      url: "https://securityweek.com"
    },
    {
      titulo: "CISA emite alerta sobre vulnerabilidades em sistemas ICS industriais",
      fonte: "CISA",
      data_publicacao: "2026-05-15T16:45:00Z",
      resumo: "A Agência de Segurança Cibernética e Infraestrutura dos EUA emitiu alertas urgentes sobre múltiplas vulnerabilidades em sistemas de controle industrial que poderiam permitir acesso não autorizado a infraestruturas críticas.",
      url: "https://cisa.gov"
    },
    {
      titulo: "Grupo Cl0p explora vulnerabilidade zero-day em software de transferência de arquivos",
      fonte: "Krebs on Security",
      data_publicacao: "2026-05-14T12:00:00Z",
      resumo: "O prolífico grupo Cl0p foi identificado explorando uma vulnerabilidade zero-day em plataformas corporativas de transferência de arquivos, comprometendo centenas de organizações ao redor do mundo em questão de horas.",
      url: "https://krebsonsecurity.com"
    },
    {
      titulo: "Novo malware bancário brasileiro mira usuários do Pix e aplicativos financeiros",
      fonte: "Kaspersky BR",
      data_publicacao: "2026-05-13T09:30:00Z",
      resumo: "Pesquisadores da Kaspersky descobriram um novo trojan bancário de origem brasileira que utiliza técnicas avançadas de sobreposição de tela para interceptar transações via Pix e roubar credenciais de acesso a bancos digitais.",
      url: "https://kaspersky.com"
    }
  ],
  threats: [
    { grupo: "LockBit 3.0", vitima: "Saúde Digital S.A.", pais: "BR", data_incidente: "2026-05-18T14:30:00Z", fonte: "RansomFeed", url: "https://ransomfeed.it" },
    { grupo: "BlackCat", vitima: "Global Finance Ltd", pais: "US", data_incidente: "2026-05-17T09:10:00Z", fonte: "RansomFeed", url: "https://ransomfeed.it" },
    { grupo: "Cl0p", vitima: "Educação Nacional", pais: "BR", data_incidente: "2026-05-16T22:00:00Z", fonte: "RansomFeed", url: "https://ransomfeed.it" },
    { grupo: "RansomHub", vitima: "AutoParts Co.", pais: "DE", data_incidente: "2026-05-15T11:45:00Z", fonte: "RansomFeed", url: "https://ransomfeed.it" },
    { grupo: "Play", vitima: "TechStart Inc.", pais: "UK", data_incidente: "2026-05-14T16:20:00Z", fonte: "RansomFeed", url: "https://ransomfeed.it" },
    { grupo: "Akira", vitima: "Logística Express Ltda", pais: "BR", data_incidente: "2026-05-13T08:00:00Z", fonte: "RansomFeed", url: "https://ransomfeed.it" },
    { grupo: "8Base", vitima: "Construtora Delta", pais: "BR", data_incidente: "2026-05-12T19:30:00Z", fonte: "RansomFeed", url: "https://ransomfeed.it" },
    { grupo: "Medusa", vitima: "Escola Técnica Nacional", pais: "US", data_incidente: "2026-05-11T13:15:00Z", fonte: "RansomFeed", url: "https://ransomfeed.it" }
  ],
  cves: [
    { id: "CVE-2026-30078", cvss: 9.8, severity: "CRITICAL", publishedAt: "2026-05-18T14:16:22Z", title: "Remote Code Execution in OpenSSL TLS Handler", description: "Uma vulnerabilidade crítica de execução remota de código foi descoberta no processador TLS do OpenSSL. Um atacante não autenticado pode explorar essa falha enviando pacotes especialmente construídos para comprometer sistemas vulneráveis.", recommendation: "Atualizar para OpenSSL 3.3.2 ou superior. Aplicar patches de segurança emergenciais disponibilizados pelos fornecedores.", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30078" },
    { id: "CVE-2026-5663", cvss: 8.1, severity: "HIGH", publishedAt: "2026-05-17T14:15:11Z", title: "Privilege Escalation in Linux Kernel netfilter", description: "Uma vulnerabilidade de escalada de privilégios no subsistema netfilter do kernel Linux permite que um usuário local sem privilégios obtenha acesso root através de manipulação de tabelas de firewall.", recommendation: "Atualizar o kernel para versão 6.8.5 ou superior. Desativar módulos netfilter desnecessários como mitigação temporária.", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-5663" },
    { id: "CVE-2026-5661", cvss: 7.5, severity: "HIGH", publishedAt: "2026-05-16T14:08:19Z", title: "Authentication Bypass in Apache HTTP Server mod_auth", description: "Uma falha no módulo de autenticação do Apache HTTP Server permite que atacantes remotos contornem mecanismos de autenticação básica através de requisições HTTP malformadas com cabeçalhos específicos.", recommendation: "Aplicar o patch de segurança ASF-2026-001. Habilitar autenticação multifator onde possível.", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-5661" },
    { id: "CVE-2026-5660", cvss: 9.1, severity: "CRITICAL", publishedAt: "2026-05-16T13:45:10Z", title: "SQL Injection in WordPress Core Database Handler", description: "Uma vulnerabilidade de injeção SQL crítica no núcleo do WordPress permite que atacantes não autenticados executem consultas arbitrárias no banco de dados, podendo comprometer toda a instalação.", recommendation: "Atualizar WordPress para versão 6.7.3 ou superior imediatamente. Implementar WAF para filtragem de entrada.", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-5660" },
    { id: "CVE-2026-3524", cvss: 6.8, severity: "MEDIUM", publishedAt: "2026-05-15T13:17:18Z", title: "Cross-Site Scripting (XSS) in Microsoft Teams Web Client", description: "Uma vulnerabilidade de XSS armazenado no cliente web do Microsoft Teams permite que atacantes injetem scripts maliciosos em mensagens de chat, potencialmente comprometendo sessões de outros usuários.", recommendation: "Aplicar atualizações automáticas do Microsoft Teams. Habilitar Política de Segurança de Conteúdo (CSP) mais restritiva.", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-3524" },
    { id: "CVE-2025-44228", cvss: 10.0, severity: "CRITICAL", publishedAt: "2026-04-06T15:51:00Z", title: "Log4Shell Extended — RCE via JNDI in Log4j2 Fork", description: "Nova variante da vulnerabilidade Log4Shell descoberta em forks populares do Log4j2 ainda mantidos por terceiros. Permite execução remota de código sem autenticação através de lookups JNDI maliciosos em logs de aplicação.", recommendation: "Substituir bibliotecas afetadas por Log4j2 2.24.3+. Bloquear consultas JNDI externas no firewall de aplicação.", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-44228" }
  ]
};

// ============================================================
// APP
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.view');
  const sidePanel = document.getElementById('side-panel');
  const closePanel = document.getElementById('close-panel');
  const panelContent = document.getElementById('panel-content');

  let timelineChart = null;
  let donutChart = null;

  const formatDate = (ds) => {
    if (!ds) return 'Data Desconhecida';
    return new Date(ds).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const formatNumber = (n) => {
    if (n >= 1e9) return (n / 1e9).toFixed(1) + ' B';
    if (n >= 1e6) return (n / 1e6).toFixed(1) + ' M';
    if (n >= 1e3) return (n / 1e3).toFixed(1) + ' K';
    return n.toLocaleString();
  };

  // --- Panel close ---
  closePanel.addEventListener('click', () => sidePanel.classList.remove('open'));

  // --- Notifications ---
  let notifications = [
    { title: "Alerta Crítico: Ataque no Brasil detectado", desc: "Vítima: Saúde Digital S.A. | Grupo: LockBit 3.0", dateStr: formatDate("2026-05-18T14:30:00Z") },
    { title: "Alerta Crítico: Ataque no Brasil detectado", desc: "Vítima: Educação Nacional | Grupo: Cl0p", dateStr: formatDate("2026-05-16T22:00:00Z") },
    { title: "Alerta Crítico: Ataque no Brasil detectado", desc: "Vítima: Logística Express Ltda | Grupo: Akira", dateStr: formatDate("2026-05-13T08:00:00Z") }
  ];

  const bellBtn = document.getElementById('bell-btn');
  const bellBadge = document.getElementById('bell-badge');
  const notifDropdown = document.getElementById('notif-dropdown');
  const notifList = document.getElementById('notif-list');
  const clearNotifsBtn = document.getElementById('clear-notifs');

  const renderNotifs = () => {
    if (!notifications.length) {
      notifList.innerHTML = '<p class="text-muted" style="padding:24px;text-align:center;">Nenhuma nova notificação</p>';
      return;
    }
    notifList.innerHTML = notifications.map(n => `
      <div class="notif-item">
        <div class="notif-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
        <div class="notif-content">
          <h5>${n.title}</h5>
          <p>${n.desc}</p>
          <span class="notif-time">${n.dateStr}</span>
        </div>
      </div>
    `).join('');
  };

  bellBadge.style.display = 'block';
  renderNotifs();

  bellBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('open');
    if (notifDropdown.classList.contains('open')) bellBadge.style.display = 'none';
  });

  document.addEventListener('click', (e) => {
    if (!notifDropdown.contains(e.target)) notifDropdown.classList.remove('open');
  });

  clearNotifsBtn.addEventListener('click', () => {
    notifications = [];
    renderNotifs();
  });

  document.getElementById('br-banner-close').addEventListener('click', () => {
    document.getElementById('br-threat-banner').style.display = 'none';
  });

  document.getElementById('br-banner-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('[data-target="view-threats"]').click();
    document.getElementById('br-threat-banner').style.display = 'none';
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));
      item.classList.add('active');
      const target = item.getAttribute('data-target');
      document.getElementById(target).classList.add('active');

      if (target === 'view-dashboard') loadDashboard();
      if (target === 'view-news') loadNews();
      if (target === 'view-threats') loadThreats();
      if (target === 'view-cves') loadCVEs();
    });
  });

  function loadDashboard() {
    const { metrics, recentThreats, recentVulnerabilities, chartData } = MOCK.dashboard;

    document.getElementById('dashboard-cards').innerHTML = `
      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-card-title" style="text-transform:uppercase; text-shadow: 1px 1px 2px rgba(255,3,3,1);"><b>Contas Vazadas</b></span>
        </div>
        <div class="stat-card-value">${formatNumber(metrics.pwnedCount)}</div>
        <div class="stat-trend"><br>
          <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top:5px; margin-left:auto; display:block;">
            <path d="M1 10C2 10 4 12 7 12C10 12 12 5 15 5C18 5 20 12 23 12C26 12 28 8 31 8C34 8 36 10 39 10" stroke="#58a6ff" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-card-title" style="text-transform:uppercase; text-shadow: 1px 1px 2px rgba(250,16,16,1);"><b>Grupos Ativos</b> <i class="fa-solid fa-users" style="color:var(--accent); margin-left:4px;"></i></span>
        </div>
        <div class="stat-card-value">${metrics.activeGangs}</div>
        <div class="stat-trend"><br></div>
      </div>
      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-card-title" style="text-transform:uppercase; text-shadow: 1px 1px 2px rgba(255,5,0,1);"><b>Total de Ameaças</b> <i class="fa-solid fa-triangle-exclamation" style="color:var(--accent); margin-left:4px;"></i></span>
        </div>
        <div class="stat-card-value">${metrics.threats.toLocaleString()}</div>
        <div class="stat-trend"><br></div>
      </div>
      <div class="stat-card">
        <div class="stat-card-header">
          <span class="stat-card-title" style="text-transform:uppercase; text-shadow: 1px 1px 2px rgba(255,5,0,1);"><b>Vulnerabilidades</b> <i class="fa-solid fa-shield-halved" style="color:var(--accent); margin-left:4px;"></i></span>
        </div>
        <div class="stat-card-value">${metrics.vulnerabilities.toLocaleString()}</div>
        <div class="stat-trend"><br></div>
      </div>
    `;

    if (timelineChart) timelineChart.destroy();
    if (donutChart) donutChart.destroy();

    const ctxLine = document.getElementById('incidentTimelineChart').getContext('2d');
    let gradientRed = ctxLine.createLinearGradient(0, 0, 0, 300);
    gradientRed.addColorStop(0, 'rgba(248,81,73,0.4)');
    gradientRed.addColorStop(1, 'rgba(248,81,73,0.0)');

    timelineChart = new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: chartData.incidentTimeline.labels,
        datasets: [{
          label: 'Vulnerabilidades Críticas',
          data: chartData.incidentTimeline.data,
          borderColor: '#f85149',
          backgroundColor: gradientRed,
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#f85149',
          pointBorderColor: '#1c1e1d',
          pointHoverRadius: 6,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false }, ticks: { color: '#8b949e', font: { size: 9 } } },
          y: { min: 0, suggestedMax: 60, grid: { color: '#30363d', borderDash: [5,5] }, ticks: { color: '#8b949e', stepSize: 20, font: { size: 10 } } }
        },
        plugins: { legend: { display: false } }
      }
    });

    const ctxDonut = document.getElementById('attackTypesChart').getContext('2d');
    donutChart = new Chart(ctxDonut, {
      type: 'doughnut',
      data: {
        labels: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'],
        datasets: [{
          data: chartData.severityDistribution.data,
          backgroundColor: ['#f85149', '#e3a14e', '#58a6ff', '#8b949e'],
          borderWidth: 1,
          borderColor: '#1c1e1d'
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'right',
            labels: { color: '#c9d1d9', usePointStyle: true, boxWidth: 8, font: { size: 10 } }
          }
        }
      }
    });

    const tbody = document.querySelector('#recent-threats-table tbody');
    tbody.innerHTML = recentThreats.map((t, i) => {
      let sev = 'HIGH', cls = 'warning';
      if (i % 3 === 0) { sev = 'CRITICAL'; cls = 'danger'; }
      else if (i % 2 !== 0 && i !== 1) { sev = 'MEDIUM'; cls = 'neutral'; }
      else if (i === 1) { sev = 'LOW'; cls = 'neutral'; }
      const d = t.data_incidente ? t.data_incidente.split('T')[0] : '';
      return `<tr>
        <td>${t.grupo || t.vitima}</td>
        <td>${t.vitima || t.pais}</td>
        <td><span class="badge ${cls}" style="text-transform:uppercase; font-size:0.65rem;">${sev}</span></td>
        <td>${d}</td>
      </tr>`;
    }).join('');

    const vulnList = document.getElementById('active-vulns-list');
    vulnList.innerHTML = recentVulnerabilities.map((v, i) => {
      const score = Math.floor(Math.random() * 100) + 120 + (10 - i) * 10;
      return `<div class="vuln-item">
        <div style="font-size:0.85rem; color:#c9d1d9;">
          <span style="color:#e3a14e; margin-right:8px;">•</span>${v.cve_id}
        </div>
        <div style="font-size:0.85rem; color:#58a6ff; font-weight:500;">${score}</div>
      </div>`;
    }).join('');
  }

  function loadNews() {
    const container = document.getElementById('news-container');
    if (container.children.length > 0) return;

    container.innerHTML = MOCK.news.map((item, index) => `
      <div class="list-item" data-index="${index}">
        <h3>${item.titulo}</h3>
        <div class="item-meta">
          <span class="source">${item.fonte}</span>
          <span><i class="fa-regular fa-calendar" style="margin-right:4px;"></i>${formatDate(item.data_publicacao)}</span>
        </div>
        <p class="item-desc">${item.resumo.substring(0, 150)}...</p>
        <div class="read-more">Read more <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.8em;"></i></div>
      </div>
    `).join('');

    container.querySelectorAll('.list-item').forEach(card => {
      card.addEventListener('click', () => {
        const news = MOCK.news[card.getAttribute('data-index')];
        panelContent.innerHTML = `
          <div class="item-header">
            <span class="badge neutral"><i class="fa-solid fa-rss"></i> ${news.fonte}</span>
            <span class="item-date">${formatDate(news.data_publicacao)}</span>
          </div>
          <h2 class="panel-title">${news.titulo}</h2>
          <div class="ai-summary">
            <h4><i class="fa-solid fa-wand-magic-sparkles"></i> AI Summary</h4>
            <p>${news.resumo}</p>
          </div>
          <div style="margin-top:24px;">
            <h3 style="margin-bottom:12px; font-size:1.1rem;">Full Article Link</h3>
            <p class="text-muted">Acesse a fonte original para ler a notícia completa diretamente do publicador.</p>
            <a href="${news.url}" target="_blank" class="btn-primary">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> View Original Source
            </a>
          </div>
        `;
        sidePanel.classList.add('open');
      });
    });

    document.getElementById('news-search').addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      container.querySelectorAll('.list-item').forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(term) ? '' : 'none';
      });
    });
  }

  function loadThreats() {
    const container = document.getElementById('threats-container');
    if (container.children.length > 0) return;

    container.innerHTML = MOCK.threats.map((item, index) => {
      const isBR = ['br', 'brazil', 'brasil'].includes((item.pais || '').toLowerCase());
      const alertIcon = isBR ? '<span style="color:var(--danger); margin-left:8px;"><i class="fa-solid fa-triangle-exclamation fa-beat-fade"></i></span>' : '';
      const baseStyle = isBR
        ? `style="border: 2px solid var(--danger); border-radius:12px; padding:24px; position:relative; box-shadow:0 0 15px rgba(248,81,73,0.4); background-color:rgba(248,81,73,0.05);"`
        : `style="padding:24px; position:relative;"`;
      return `
        <div class="list-item" data-index="${index}" ${baseStyle}>
          <div class="item-header" style="margin-bottom:24px; align-items:flex-start;">
            <h3 style="color:${isBR ? 'var(--danger)' : 'var(--text-bright)'}; text-transform:uppercase; margin-bottom:0; font-size:1.1rem; letter-spacing:0.5px;">
              ${item.grupo || item.vitima || 'AMEAÇA REGISTRADA'} ${alertIcon}
            </h3>
            <span class="item-date">${formatDate(item.data_incidente)}</span>
          </div>
          <p class="item-desc" style="margin-bottom:32px; font-size:0.9rem; color:var(--text-muted); line-height:1.8;">
            Vítima: ${item.vitima || 'Desconhecida'}<br>
            País: <strong style="color:${isBR ? 'var(--danger)' : 'inherit'}">${item.pais || 'Desconhecido'}</strong>
          </p>
          <div class="item-footer" style="gap:12px;">
            <span class="badge danger" style="padding:6px 14px; background-color:rgba(248,81,73,0.15); border:1px solid rgba(248,81,73,0.3);"><i class="fa-solid fa-skull-crossbones"></i> Ransomware</span>
            <span class="badge neutral" style="padding:6px 14px; background-color:rgba(139,148,158,0.15); border:1px solid rgba(139,148,158,0.3);"><i class="fa-solid fa-file-lines"></i> ${item.fonte}</span>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.list-item').forEach(card => {
      card.addEventListener('click', () => {
        const threat = MOCK.threats[card.getAttribute('data-index')];
        const isBR = ['br', 'brazil', 'brasil'].includes((threat.pais || '').toLowerCase());
        panelContent.innerHTML = `
          <div class="item-header">
            <span class="badge danger"><i class="fa-solid fa-skull-crossbones"></i> Ransomware</span>
            <span class="item-date">${formatDate(threat.data_incidente)}</span>
          </div>
          <h2 class="panel-title">Ataque: ${threat.grupo || threat.vitima || 'Ameaça'}</h2>
          <div class="ai-summary" style="border-color:rgba(248,81,73,0.3); background:linear-gradient(145deg,rgba(248,81,73,0.1) 0%,transparent 100%);">
            <h4 style="color:var(--danger);"><i class="fa-solid fa-robot"></i> System Analysis</h4>
            <p>Foi identificado um novo ataque de ransomware.<br>
            A vítima afetada foi identificada como <strong>${threat.vitima || 'Desconhecida'}</strong>, na região de <strong>${threat.pais || 'Desconhecida'}</strong>.</p><br>
            ${threat.grupo ? `<p>O grupo responsável: <strong style="text-transform:uppercase;">${threat.grupo}</strong>.</p><br>` : ''}
            <p><strong>🔎 Detalhes Técnicos do Evento:</strong></p><br>
            <p><strong>👾 Grupo:</strong> ${threat.grupo || 'Desconhecido'}</p><br>
            <p><strong>🏢 Vítima:</strong> ${threat.vitima || 'Desconhecida'}</p><br>
            <p><strong>📅 Data do Incidente:</strong> ${formatDate(threat.data_incidente)}</p><br>
            <p><strong>🌎 País:</strong> ${threat.pais || 'Desconhecido'}</p>
          </div>
          <div style="margin-top:24px;">
            <h3 style="margin-bottom:12px; font-size:1.1rem;">Relatório da Fonte</h3>
            <p class="text-muted">Acesse a fonte original da API que reportou este evento.</p>
            <a href="${threat.url}" target="_blank" class="btn-primary" style="background-color:var(--danger); color:white;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver Origem
            </a>
          </div>
        `;
        sidePanel.classList.add('open');
      });
    });

    document.getElementById('threats-search').addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      container.querySelectorAll('.list-item').forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(term) ? '' : 'none';
      });
    });
  }

  function loadCVEs() {
    const container = document.getElementById('cves-container');
    if (container.children.length > 0) return;

    container.innerHTML = MOCK.cves.map((item, index) => {
      let color = '#8b949e', bg = 'rgba(139,148,158,0.1)', border = '1px solid rgba(139,148,158,0.3)', icon = 'fa-solid fa-circle-info', label = item.severity;
      if (item.cvss >= 9.0) { color = '#f85149'; bg = 'rgba(248,81,73,0.1)'; border = '1px solid rgba(248,81,73,0.3)'; icon = 'fa-solid fa-circle-exclamation'; label = 'CRITICAL'; }
      else if (item.cvss >= 7.0) { color = '#f85149'; bg = 'rgba(248,81,73,0.1)'; border = '1px solid rgba(248,81,73,0.3)'; icon = 'fa-solid fa-circle-exclamation'; label = 'HIGH'; }
      else if (item.cvss >= 4.0) { color = '#d29922'; bg = 'rgba(210,153,34,0.1)'; border = '1px solid rgba(210,153,34,0.3)'; icon = 'fa-solid fa-triangle-exclamation'; label = 'MEDIUM'; }

      return `
        <div class="list-item" data-index="${index}" style="display:flex; flex-direction:row; justify-content:space-between; align-items:center;">
          <div style="display:flex; flex-direction:column; gap:16px;">
            <h3 style="color:var(--text-bright); font-size:1.2rem; margin:0; font-weight:600; white-space:nowrap;">${item.id}</h3>
            <span style="background-color:${bg}; color:${color}; padding:4px 12px; border-radius:12px; font-size:0.75rem; font-weight:bold; border:${border}; display:inline-flex; align-items:center; width:fit-content; text-transform:uppercase; white-space:nowrap;">
              <i class="${icon}" style="margin-right:4px;"></i> ${label} (CVSS: ${item.cvss})
            </span>
          </div>
          <div style="display:flex; align-items:center;">
            <span style="color:var(--text-muted); font-size:0.65rem; opacity:0.6; text-align:right; white-space:nowrap;">${formatDate(item.publishedAt)}</span>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.list-item').forEach(card => {
      card.addEventListener('click', () => {
        const cve = MOCK.cves[card.getAttribute('data-index')];
        let color = '#8b949e', cvssLabel = cve.severity, badgeClass = 'neutral';
        if (cve.cvss >= 9.0) { color = 'var(--danger)'; cvssLabel = 'CRITICAL'; badgeClass = 'danger'; }
        else if (cve.cvss >= 7.0) { color = 'var(--danger)'; cvssLabel = 'HIGH'; badgeClass = 'danger'; }
        else if (cve.cvss >= 4.0) { color = 'var(--warning)'; cvssLabel = 'MEDIUM'; badgeClass = 'warning'; }

        panelContent.innerHTML = `
          <div class="item-header">
            <span class="badge ${badgeClass}"><i class="fa-solid fa-shield-virus"></i> ${cvssLabel}</span>
            <span class="item-date">${formatDate(cve.publishedAt)}</span>
          </div>
          <h2 class="panel-title" style="margin-bottom:5px;">${cve.id}</h2>
          <div class="ai-summary" style="border-color:rgba(88,166,255,0.3); background:linear-gradient(145deg,rgba(88,166,255,0.1) 0%,transparent 100%);">
            <h4 style="color:var(--accent); margin-bottom:15px;"><i class="fa-solid fa-list-ul"></i> Detalhes da Vulnerabilidade</h4>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div>
                <strong style="color:var(--text-muted); font-size:0.85rem; text-transform:uppercase;">Título</strong>
                <p style="margin-top:2px; color:var(--text-bright);">${cve.title}</p>
              </div>
              <div>
                <strong style="color:var(--text-muted); font-size:0.85rem; text-transform:uppercase;">CVSS Score: <strong style="color:${color}; font-weight:bold; font-size:1rem;">${cve.cvss}</strong></strong>
              </div>
              <div>
                <strong style="color:var(--text-muted); font-size:0.85rem; text-transform:uppercase;">Severidade: <span class="badge ${badgeClass}" style="padding:4px 8px; font-size:0.75rem;"><strong>${cvssLabel}</strong></span></strong>
              </div>
              <div style="margin-top:8px;">
                <strong style="color:var(--text-muted); font-size:0.85rem; text-transform:uppercase;">Descrição</strong>
                <p style="margin-top:6px; color:var(--text-bright); line-height:1.6;">${cve.description}</p>
              </div>
              <div style="margin-top:8px;">
                <strong style="color:var(--accent);"><i class="fa-solid fa-list-ul"></i> Recomendações de Segurança</strong>
                <p style="margin-top:6px; color:var(--text-bright); line-height:1.6;">${cve.recommendation}</p>
              </div>
            </div>
          </div>
          <div style="margin-top:24px;">
            <h3 style="margin-bottom:12px; font-size:1.1rem;">Fonte Original</h3>
            <p class="text-muted">Acesse a referência para verificar os patches e mitigações na NVD.</p>
            <a href="${cve.url}" target="_blank" class="btn-primary">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver Detalhes Originais
            </a>
          </div>
        `;
        sidePanel.classList.add('open');
      });
    });

    document.getElementById('cves-search').addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      container.querySelectorAll('.list-item').forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(term) ? '' : 'none';
      });
    });
  }

  loadDashboard();
});
