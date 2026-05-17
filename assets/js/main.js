const state = {
  selected: null,
  ordens: []
};

const today = new Date();
const pad = n => String(n).padStart(2, '0');
const isoToday = `${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;

const fields = [
  'numero','data','loja','status','cliente','responsavel','telefone','email','endereco','servico','equipamento','descricao','tecnico','diagnostico','solucao','observacoes','valorServico','valorPecas','desconto'
];

function dinheiroParaNumero(valor){
  if(!valor) return 0;
  return Number(String(valor).replace(/\./g,'').replace(',','.')) || 0;
}
function numeroParaDinheiro(valor){
  return valor.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
}
function formatarData(iso){
  if(!iso) return '';
  const [a,m,d] = iso.split('-');
  return `${d}/${m}/${a}`;
}
function classeStatus(status){
  if(status === 'Em andamento') return 'andamento';
  if(status === 'Aguardando cliente') return 'aguardando';
  if(status === 'Concluída') return 'concluida';
  return 'aberta';
}
function proximoNumero(){
  return `OS-${today.getFullYear()}-${String(state.ordens.length + 1).padStart(4,'0')}`;
}
function lerForm(){
  const obj = {};
  fields.forEach(id => obj[id] = document.getElementById(id).value);
  return obj;
}
function preencherForm(os){
  fields.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.value = os[id] || '';
  });
  document.getElementById('lojaInfo').value = os.loja || '';
  atualizarMetaETotal();
}
function novaOS(){
  state.selected = null;
  preencherForm({
    numero: proximoNumero(), data: isoToday, loja:'', status:'Aberta', cliente:'', responsavel:'', telefone:'', email:'', endereco:'', servico:'Suporte presencial', equipamento:'', descricao:'', tecnico:'Alexander', diagnostico:'', solucao:'', observacoes:'', valorServico:'0,00', valorPecas:'0,00', desconto:'0,00'
  });
  renderLista();
}
function salvarOS(){
  const os = lerForm();
  if(!os.cliente.trim()){
    alert('Informe o nome do cliente antes de salvar a ordem de serviço.');
    return;
  }
  const existente = state.ordens.findIndex(item => item.numero === (state.selected || os.numero));
  if(existente >= 0){
    state.ordens[existente] = os;
  } else {
    state.ordens.push(os);
  }
  state.selected = os.numero;
  localStorage.setItem('os013_ordens', JSON.stringify(state.ordens));
  renderLista();
  atualizarMetaETotal();
}
function excluirOS(){
  if(!state.selected) return;
  if(!confirm('Deseja excluir esta ordem de serviço?')) return;
  state.ordens = state.ordens.filter(os => os.numero !== state.selected);
  localStorage.setItem('os013_ordens', JSON.stringify(state.ordens));
  novaOS();
}
function renderLista(){
  const lista = document.getElementById('listaOS');
  const termo = document.getElementById('busca').value.toLowerCase().trim();
  lista.innerHTML = '';
  state.ordens
    .filter(os => !termo || [os.numero, os.cliente, os.loja, os.status, os.servico, os.tecnico].join(' ').toLowerCase().includes(termo))
    .forEach(os => {
      const btn = document.createElement('button');
      btn.className = `os-item ${state.selected === os.numero ? 'active' : ''}`;
      btn.innerHTML = `<div class="os-item-top"><div><strong>${os.numero}</strong><small>${os.cliente || 'Sem cliente'}${os.loja ? ' • Loja ' + os.loja : ''}</small></div><span class="status-pill ${classeStatus(os.status)}">${os.status}</span></div><p>${os.descricao || 'Sem descrição informada.'}</p>`;
      btn.onclick = () => { state.selected = os.numero; preencherForm(os); renderLista(); };
      lista.appendChild(btn);
    });
}
function atualizarMetaETotal(){
  const numero = document.getElementById('numero').value;
  const data = document.getElementById('data').value;
  const status = document.getElementById('status').value;
  const loja = document.getElementById('loja').value;
  document.getElementById('lojaInfo').value = loja;
  document.getElementById('metaNumero').textContent = numero;
  document.getElementById('metaData').textContent = formatarData(data);
  const metaStatus = document.getElementById('metaStatus');
  metaStatus.textContent = status;
  metaStatus.className = `status-pill ${classeStatus(status)}`;
  const subtotal = dinheiroParaNumero(document.getElementById('valorServico').value) + dinheiroParaNumero(document.getElementById('valorPecas').value);
  const total = Math.max(0, subtotal - dinheiroParaNumero(document.getElementById('desconto').value));
  document.getElementById('subtotal').textContent = `R$ ${numeroParaDinheiro(subtotal)}`;
  document.getElementById('total').textContent = `R$ ${numeroParaDinheiro(total)}`;
}
function carregar(){
  try{ state.ordens = JSON.parse(localStorage.getItem('os013_ordens') || '[]'); }catch(e){ state.ordens = []; }
  if(state.ordens.length === 0){
    state.ordens.push({numero:'OS-2026-0001',data:isoToday,loja:'8596',status:'Aberta',cliente:'Cliente Exemplo',responsavel:'João Silva',telefone:'(13) 99999-9999',email:'cliente@email.com',endereco:'Santos/SP',servico:'Suporte presencial',equipamento:'Computador caixa / PDV Legal',descricao:'Computador do caixa não abre o sistema de vendas.',tecnico:'Alexander',diagnostico:'Verificar inicialização, rede, impressora e acesso ao PDV Legal.',solucao:'',observacoes:'Atendimento prioritário para operação de caixa.',valorServico:'150,00',valorPecas:'0,00',desconto:'0,00'});
  }
  state.selected = state.ordens[0].numero;
  preencherForm(state.ordens[0]);
  renderLista();
}

document.addEventListener('DOMContentLoaded', () => {
  carregar();
  fields.forEach(id => document.getElementById(id).addEventListener('input', atualizarMetaETotal));
  document.getElementById('lojaInfo').addEventListener('input', e => { document.getElementById('loja').value = e.target.value; atualizarMetaETotal(); });
  document.getElementById('btnNova').onclick = novaOS;
  document.getElementById('btnSalvar').onclick = salvarOS;
  document.getElementById('btnSalvar2').onclick = salvarOS;
  document.getElementById('btnExcluir').onclick = excluirOS;
  document.getElementById('btnImprimir').onclick = () => window.print();
  document.getElementById('btnImprimir2').onclick = () => window.print();
  document.getElementById('busca').addEventListener('input', renderLista);
});
