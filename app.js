const $ = selector => document.querySelector(selector);
const idea = $('#idea');
const iconBackgrounds = ['#edf2e9', '#f4eee8', '#eeedf4', '#eff1e9', '#f5efe5'];
let currentGroup = 'positive';
let activeAnalysis = null;
let allShown = false;
let currentUserId = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));
}

function renderCompetitors() {
  if (!activeAnalysis) return;
  const competitors = allShown ? activeAnalysis.competitors : activeAnalysis.competitors.slice(0, 5);
  $('#competitorList').innerHTML = competitors.map((app, index) => `
    <div class="competitor-row">
      <div class="app-icon" style="background:${iconBackgrounds[index % iconBackgrounds.length]}">${escapeHtml(app.icon || '⌕')}</div>
      <div class="app-info"><strong>${app.url ? `<a href="${escapeHtml(app.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(app.name)}</a>` : escapeHtml(app.name)}</strong><span>${escapeHtml(app.subtitle || app.summary || '')}</span></div>
      <div class="app-rating">${app.platform ? `<span class="match-score">${escapeHtml(app.platform)}</span>` : ''}</div>
    </div>`).join('');
  $('#viewAll').innerHTML = allShown ? 'Show fewer competitors <span>↑</span>' : 'View all 10 competitors <span>→</span>';
}

function renderThemes() {
  if (!activeAnalysis) return;
  if (!activeAnalysis.isDemo) {
    $('#themeList').innerHTML = '<div class="empty-history">Live review collection is the next backend step. These review themes are not included in this search.</div>';
    return;
  }
  const themes = activeAnalysis.reviewThemes[currentGroup] || [];
  $('#themeList').innerHTML = themes.map((theme, index) => `
    <div class="theme-row">
      <div class="theme-line"><span class="theme-rank">0${index + 1}</span><strong class="theme-name">${escapeHtml(theme.name)}</strong><span class="theme-count">${escapeHtml(theme.mentions)}</span></div>
      <div class="theme-bar"><span style="width:${theme.prevalence}%"></span></div>
      <div class="theme-examples">${escapeHtml(theme.example)}</div>
    </div>`).join('');
}

function setIdea(value) { idea.value = value; updateCount(); }
function updateCount() { $('#charCount').textContent = idea.value.length; }
function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => element.classList.remove('show'), 2600);
}

function showHome() {
  $('#homeView').hidden = false;
  $('#stageOneView').hidden = true;
  $('#pageName').textContent = 'Home';
  $('#sideHome').classList.add('active');
  $('#sideStageOne').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showStageOne() {
  $('#homeView').hidden = true;
  $('#stageOneView').hidden = false;
  $('#pageName').textContent = 'Stage 1 · Explore the market';
  $('#sideHome').classList.remove('active');
  $('#sideStageOne').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCurrentUser(user) {
  $('#currentUserName').textContent = user.name;
  $('#currentUserInitials').textContent = user.initials;
}

async function renderHistory() {
  const history = await window.MarketDataService.listHistory(currentUserId);
  if (!history.length) {
    $('#history').innerHTML = '<div class="empty-history">No research yet. Start with an idea.</div>';
    return;
  }
  $('#history').innerHTML = history.map(entry => `
    <button class="history-entry" data-analysis-id="${escapeHtml(entry.analysisId)}" title="${escapeHtml(entry.description)}">
      <span class="history-entry-icon">⌕</span><span class="history-entry-text"><strong>${escapeHtml(entry.name)}</strong><small>${escapeHtml(entry.status)} · ${new Date(entry.createdAt).toLocaleDateString()}</small></span>
    </button>`).join('');
}

async function showSnapshot(snapshot) {
  if (!snapshot) {
    toast('That saved snapshot could not be found.');
    return;
  }
  activeAnalysis = snapshot;
  allShown = false;
  currentGroup = 'positive';
  setIdea(snapshot.idea.description);
  renderCompetitors();
  renderThemes();
  $('#matchCount').textContent = snapshot.summary.similarAppCount;
  $('#reviewCount').textContent = snapshot.summary.reviewCountLabel;
  $('#sentimentCount').textContent = snapshot.summary.sentimentGroupCount;
  $('.summary-note strong').textContent = snapshot.summary.topOpportunity;
  $('#analysisStatus').textContent = snapshot.analysis.status.toUpperCase();
  $('#analysisStatus').className = `analysis-status ${snapshot.analysis.status}`;
  $('.demo-pill').textContent = snapshot.isDemo ? 'ILLUSTRATIVE DATA' : 'WEB SEARCH';
  $('.summary-note').innerHTML = snapshot.isDemo
    ? `<span>✳</span> Most promising gap <strong>${escapeHtml(snapshot.summary.topOpportunity)}</strong>`
    : `<span>✳</span> Next step <strong>Collect reviews for these apps</strong>`;
  $('.results-footer > span:first-child').textContent = snapshot.isDemo
    ? 'Research generated just now · illustrative sample data'
    : 'Competitors found using live web search · review data not yet connected';
  $('.results-sub').textContent = snapshot.isDemo
    ? 'A first look at the apps closest to your idea and the patterns in their reviews.'
    : 'Potential competitors found with live web search. App store reviews will be added in a later backend step.';
  $('.sentiment-tabs').hidden = !snapshot.isDemo;
  $('.method-note').innerHTML = snapshot.isDemo
    ? '<span>✳</span><div><strong>How we find patterns</strong><p>Reviews are grouped by rating, then similar comments are clustered with KNN to find recurring themes.</p></div>'
    : '<span>✳</span><div><strong>Review analysis is not connected yet</strong><p>This search only finds potential competitor apps. No reviews were scanned or summarized.</p></div>';
  $('#results').hidden = false;
  $('#initialState').hidden = true;
  document.querySelectorAll('.sentiment-tab').forEach(button => button.classList.toggle('active', button.dataset.group === currentGroup));
  showStageOne();
  $('#pageName').textContent = snapshot.idea.name;
  $('#results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function analyze() {
  const description = idea.value.trim();
  if (description.length < 15) {
    toast('Add a little more detail so we can find relevant matches.');
    idea.focus();
    return;
  }
  if (description.length > 500) {
    toast('Please keep your idea under 500 characters.');
    return;
  }

  const analyzeButton = $('#analyzeBtn');
  analyzeButton.disabled = true;
  analyzeButton.querySelector('span:first-child').textContent = 'Analyzing…';
  $('#sourceList').hidden = true;
  try {
    const result = await window.MarketDataService.findSimilarApps(description);
    const snapshot = {
      idea: { name: description.slice(0, 52), description },
      analysis: { status: 'completed' },
      competitors: result.apps.map(app => ({ ...app, subtitle: `${app.platform} · ${app.relevanceReason}`, icon: '⌕' })),
      reviewThemes: { positive: [], average: [], negative: [] },
      summary: { similarAppCount: result.apps.length, reviewCountLabel: 'Not scanned', sentimentGroupCount: '—', topOpportunity: 'Collect reviews for these apps' },
      sources: result.sources,
      isDemo: false
    };
    await showSnapshot(snapshot);
    if (result.sources?.length) {
      const list = result.sources.filter(source => /^https:\/\//i.test(source.url)).slice(0, 5).map(source => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}</a>`).join(' · ');
      $('#sourceList').innerHTML = `<span>WEB SOURCES</span> ${list}`;
      $('#sourceList').hidden = false;
    }
  } catch (error) {
    console.error('Market analysis failed:', error);
    toast(error.message || 'We could not load the market snapshot. Please try again.');
  } finally {
    analyzeButton.disabled = false;
    analyzeButton.querySelector('span:first-child').textContent = 'Analyze the market';
  }
}

$('#startStageOne').addEventListener('click', showStageOne);
$('#stageNav1').addEventListener('click', showStageOne);
$('#sideStageOne').addEventListener('click', showStageOne);
$('#backHome').addEventListener('click', showHome);
$('#sideHome').addEventListener('click', showHome);
$('#brandHome').addEventListener('click', event => { event.preventDefault(); showHome(); });
document.querySelectorAll('[data-coming-soon]').forEach(button => button.addEventListener('click', () => toast('This stage is planned for a future release.')));
$('#demoUserSelect').addEventListener('change', async event => {
  currentUserId = event.target.value;
  const users = await window.MarketDataService.listUsers();
  updateCurrentUser(users.find(user => user.id === currentUserId));
  activeAnalysis = null;
  $('#results').hidden = true;
  $('#initialState').hidden = false;
  setIdea('');
  await renderHistory();
  showHome();
});
$('#history').addEventListener('click', async event => {
  const button = event.target.closest('[data-analysis-id]');
  if (!button) return;
  await showSnapshot(await window.MarketDataService.getSnapshot(button.dataset.analysisId));
});
idea.addEventListener('input', updateCount);
$('#analyzeBtn').addEventListener('click', analyze);
idea.addEventListener('keydown', event => { if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') analyze(); });
$('#sampleBtn').addEventListener('click', () => {
  const samples = [
    'An app that helps runners find safe, well-lit routes nearby and keep friends updated on their progress.',
    'A simple budgeting app that helps couples split shared bills, track subscriptions, and save for a goal together.',
    'A fitness app that builds short, equipment-free workouts around the time and energy I have each day.'
  ];
  setIdea(samples.find(sample => sample !== idea.value) || samples[0]);
  idea.focus();
});
$('#viewAll').addEventListener('click', () => { allShown = !allShown; renderCompetitors(); });
document.querySelectorAll('.sentiment-tab').forEach(button => button.addEventListener('click', () => {
  currentGroup = button.dataset.group;
  document.querySelectorAll('.sentiment-tab').forEach(tab => tab.classList.toggle('active', tab === button));
  renderThemes();
}));
$('#sortBtn').addEventListener('click', () => toast('Themes are ranked by how often they appear.'));
$('#exportBtn').addEventListener('click', () => {
  if (!activeAnalysis) return;
  const rows = [
    'Mobile App Agent — Market Snapshot',
    activeAnalysis.isDemo ? 'Illustrative sample data' : 'Live web search results',
    '',
    `App idea: ${activeAnalysis.idea.description}`,
    '',
    'Similar apps',
    ...activeAnalysis.competitors.map((app, index) => `${index + 1}. ${app.name} — ${app.subtitle || app.summary}${app.url ? ` — ${app.url}` : ''}`),
    '',
    'Common review themes',
    ...(activeAnalysis.isDemo ? Object.entries(activeAnalysis.reviewThemes).flatMap(([group, themes]) => [group.toUpperCase(), ...themes.map(theme => `• ${theme.name} (${theme.mentions}) — ${theme.example}`), '']) : ['Review data has not been collected yet.'])
  ].join('\n');
  const blobUrl = URL.createObjectURL(new Blob([rows], { type: 'text/plain' }));
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = 'fieldnotes-market-snapshot.txt';
  link.click();
  URL.revokeObjectURL(blobUrl);
  toast('Your market snapshot is ready to download.');
});

$('#idea').addEventListener('input', () => { $('#sourceList').hidden = true; });

const dialog = $('#roadmapDialog');
$('#roadmapBtn').addEventListener('click', () => dialog.showModal());
$('.dialog-close').addEventListener('click', () => dialog.close());
$('.dialog-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

async function initializeDemoUsers() {
  const users = await window.MarketDataService.listUsers();
  $('#demoUserSelect').innerHTML = users.map(user => `<option value="${escapeHtml(user.id)}">${escapeHtml(user.name)}</option>`).join('');
  currentUserId = users[0]?.id || null;
  if (currentUserId) updateCurrentUser(users[0]);
  await renderHistory();
}

updateCount();
initializeDemoUsers();
