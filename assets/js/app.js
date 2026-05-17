const STORAGE_KEY = 'os013_ordens_v2';
const form = document.getElementById('formOS');
const listaOS = document.getElementById('listaOS');
const busca = document.getElementById('busca');
const contadorOS = document.getElementById('contadorOS');
const moneyFields = ['valorServico', 'valorPecas', 'desconto'];
let ordens = [];
let selectedNumero = null;

const exemplo = {
  numero: 'OS-' + new Date().getFullYear() + '-0001',
  data: new Date().toISOString().slice(0, 10),
  status: 'Aberta',
  cliente: 'Cliente Exemplo',
  loja: '8596',
  responsavel: 'João Silva',
  telefone: '(13) 99999-9999',
  email: 'cliente@email.com',
  endereco: 'Santos/SP',
  servico: 'Suporte presencial',
  equipamento: 'Computador caixa / PDV Legal',
  descricao: 'Computador do caixa não abre o sistema de vendas.',
  tecnico: 'Alexander',
  diagnostico: 'Verificar inicialização, rede, impressora e acesso ao PDV Legal.',
  solucao: '',
  observacoes: 'Atendimento prioritário para operação de caixa.',
  valorServico: '150,00',
  valorPecas: '0,00',
  desconto: '0,00'
};

function moneyToNumber(value) {
  if (!value) return 0;
  return Number(String(value).replace(/\./g, '').replace(',', '.')) || 0;
}
function numberToMoney(value) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function getFormData() {
  const data = new FormData(form);
  const obj = {};
  for (const [key, value] of data.entries()) obj[key] = value;
  return obj;
}
function setFormData(os) {
  Object.entries(os).forEach(([key, value]) => {
    const field = document.getElementById(key);
    if (field) field.value = value ?? '';
  });
  selectedNumero = os.numero || null;
  updateTotals();
  renderList();
}
function saveLocal() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ordens));
}
function loadLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    ordens = raw ? JSON.parse(raw) : [exemplo];
  } catch (e) {
    ordens = [exemplo];
  }
}
function nextOSNumber() {
  const year = new Date().getFullYear();
  const sameYear = ordens
    .map(o => String(o.numero || ''))
    .filter(n => n.includes(`OS-${year}-`))
    .map(n => Number(n.split('-').pop()))
    .filter(Boolean);
  const next = sameYear.length ? Math.max(...sameYear) + 1 : 1;
  return `OS-${year}-${String(next).padStart(4, '0')}`;
}
function newOS() {
  setFormData({
    numero: nextOSNumber(),
    data: new Date().toISOString().slice(0, 10),
    status: 'Aberta',
    cliente: '', loja: '', responsavel: '', telefone: '', email: '', endereco: '',
    servico: 'Suporte presencial', equipamento: '', descricao: '', tecnico: 'Alexander',
    diagnostico: '', solucao: '', observacoes: '', valorServico: '0,00', valorPecas: '0,00', desconto: '0,00'
  });
  selectedNumero = null;
  renderList();
}
function saveOS() {
  const os = getFormData();
  if (!os.cliente.trim()) {
    alert('Informe o cliente antes de salvar a ordem de serviço.');
    document.getElementById('cliente').focus();
    return;
  }
  const idx = ordens.findIndex(item => item.numero === (selectedNumero || os.numero));
  if (idx >= 0) ordens[idx] = os;
  else ordens.push(os);
  selectedNumero = os.numero;
  saveLocal();
  renderList();
  alert('Ordem de serviço salva com sucesso.');
}
function deleteOS() {
  if (!selectedNumero) {
    alert('Selecione uma ordem de serviço para excluir.');
    return;
  }
  if (!confirm('Deseja excluir esta ordem de serviço?')) return;
  ordens = ordens.filter(os => os.numero !== selectedNumero);
  saveLocal();
  newOS();
}
function statusClass(status) {
  const s = String(status || '').toLowerCase();
  if (s.includes('andamento')) return 'andamento';
  if (s.includes('aguardando')) return 'aguardando';
  if (s.includes('concl')) return 'concluida';
  if (s.includes('cancel')) return 'cancelada';
  return 'aberta';
}
function renderList() {
  const term = busca.value.trim().toLowerCase();
  const filtered = ordens.filter(os => [os.numero, os.cliente, os.loja, os.status, os.servico, os.telefone, os.tecnico].join(' ').toLowerCase().includes(term));
  contadorOS.textContent = filtered.length;
  listaOS.innerHTML = filtered.map(os => `
    <button class="os-item ${os.numero === selectedNumero ? 'active' : ''}" data-numero="${escapeHtml(os.numero)}">
      <div class="os-item__top">
        <div><strong>${escapeHtml(os.numero || '')}</strong><small>${escapeHtml(os.cliente || 'Sem cliente')}</small>${os.loja ? `<br><small>Loja ${escapeHtml(os.loja)}</small>` : ''}</div>
        <span class="badge ${statusClass(os.status)}">${escapeHtml(os.status || 'Aberta')}</span>
      </div>
      <p>${escapeHtml(os.descricao || 'Sem descrição informada.')}</p>
    </button>
  `).join('');
  document.querySelectorAll('.os-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const os = ordens.find(item => item.numero === btn.dataset.numero);
      if (os) setFormData(os);
    });
  });
}
function updateTotals() {
  const subtotal = moneyToNumber(document.getElementById('valorServico').value) + moneyToNumber(document.getElementById('valorPecas').value);
  const total = Math.max(0, subtotal - moneyToNumber(document.getElementById('desconto').value));
  document.getElementById('subtotal').textContent = `R$ ${numberToMoney(subtotal)}`;
  document.getElementById('total').textContent = `R$ ${numberToMoney(total)}`;
}
function formatMoneyField(e) {
  const field = e.target;
  let value = field.value.replace(/[^\d]/g, '');
  if (!value) value = '0';
  const number = Number(value) / 100;
  field.value = numberToMoney(number);
  updateTotals();
}
function escapeHtml(value) {
  return String(value || '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

['btnNova'].forEach(id => document.getElementById(id).addEventListener('click', newOS));
['btnSalvar', 'btnSalvar2'].forEach(id => document.getElementById(id).addEventListener('click', saveOS));
['btnImprimir', 'btnImprimir2'].forEach(id => document.getElementById(id).addEventListener('click', () => window.print()));
document.getElementById('btnExcluir').addEventListener('click', deleteOS);
busca.addEventListener('input', renderList);
moneyFields.forEach(id => {
  const field = document.getElementById(id);
  field.addEventListener('blur', formatMoneyField);
  field.addEventListener('input', updateTotals);
});
form.addEventListener('input', updateTotals);

// labels for responsive service table cells
const labels = ['Serviço', 'Equipamento / Sistema', 'Problema relatado', 'Técnico'];
document.querySelectorAll('.service-table .td').forEach((td, idx) => td.setAttribute('data-label', labels[idx]));

loadLocal();
setFormData(ordens[0] || exemplo);
renderList();
