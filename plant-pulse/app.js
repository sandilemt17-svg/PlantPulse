// Plant Pulse is a front-end learning project. Every row below is fictional demo data.
const hourlyOutput = [78,92,116,105,129,138,121,145,133,0,0,0];
const lines = [
  {name:'Assembly 01',code:'A1',status:'Running',type:'running',output:342,efficiency:91,quality:'98.2%',lead:'Lerato M.',initials:'LM',q:'quality-good'},
  {name:'Assembly 02',code:'A2',status:'Needs attention',type:'attention',output:286,efficiency:78,quality:'94.6%',lead:'Thabo K.',initials:'TK',q:'quality-watch'},
  {name:'Paint shop',code:'PS',status:'Running',type:'running',output:318,efficiency:89,quality:'97.1%',lead:'Aisha N.',initials:'AN',q:'quality-good'},
  {name:'Body shop',code:'BS',status:'Maintenance',type:'maintenance',output:0,efficiency:82,quality:'96.4%',lead:'Sipho D.',initials:'SD',q:'quality-good'}
];
const bars = document.querySelector('#bars');
hourlyOutput.forEach((value, i) => {
  const bar = document.createElement('div'); bar.className = `bar${i === 8 ? ' current' : ''}`;
  bar.style.height = `${Math.max(2, value / 160 * 100)}%`; bar.dataset.value = `${value} units`;
  bar.title = `${String(i + 6).padStart(2,'0')}:00 — ${value ? value + ' units' : 'upcoming'}`;
  bars.appendChild(bar);
});
function renderLines(items) {
  document.querySelector('#lineRows').innerHTML = items.map(line => `<tr><td><span class="line-name"><span class="line-icon">${line.code}</span>${line.name}</span></td><td><span class="status ${line.type}">${line.status}</span></td><td><span class="output-cell">${line.output} <span style="color:#9aa49f;font:8px var(--sans)">units</span></span><div class="tiny-track"><i style="width:${line.efficiency}%"></i></div></td><td>${line.efficiency}%</td><td class="${line.q}">${line.quality}</td><td><span class="lead"><span class="lead-avatar">${line.initials}</span>${line.lead}</span></td><td class="row-more">···</td></tr>`).join('');
}
renderLines(lines);
let toastTimer;
function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2600); }
document.querySelector('#explainButton').addEventListener('click', () => document.querySelector('#explainDialog').showModal());
document.querySelector('#closeDialog').addEventListener('click', () => document.querySelector('#explainDialog').close());
document.querySelector('#doneDialog').addEventListener('click', () => document.querySelector('#explainDialog').close());
document.querySelector('#periodButton').addEventListener('click', () => toast('This demo currently shows today’s sample data.'));
document.querySelector('#lineNav').addEventListener('click', () => document.querySelector('.lines-panel').scrollIntoView({behavior:'smooth'}));
document.querySelector('#qualityNav').addEventListener('click', () => document.querySelector('.insight-panel').scrollIntoView({behavior:'smooth'}));
document.querySelector('#allLinesButton').addEventListener('click', () => toast('The demo includes 4 sample lines. Add more rows in app.js to expand it.'));
