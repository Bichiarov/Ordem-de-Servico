import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  Plus,
  Search,
  Printer,
  FileText,
  Wrench,
  Save,
  Trash2,
  CheckCircle2,
  Clock,
  AlertCircle,
  ClipboardList,
  DollarSign
} from 'lucide-react';
import './styles.css';

const statusConfig = {
  'Aberta': { icon: Clock, className: 'status-blue' },
  'Em andamento': { icon: Wrench, className: 'status-yellow' },
  'Aguardando cliente': { icon: AlertCircle, className: 'status-orange' },
  'Concluída': { icon: CheckCircle2, className: 'status-green' },
};

const servicosPadrao = [
  'Instalação PDV Legal',
  'Suporte remoto',
  'Suporte presencial',
  'Configuração de impressora',
  'Configuração de rede',
  'Instalação de sistema',
  'Treinamento operacional',
  'Manutenção preventiva',
];

const initialForm = {
  numero: '',
  data: new Date().toISOString().slice(0, 10),
  cliente: '',
  loja: '',
  responsavel: '',
  telefone: '',
  email: '',
  endereco: '',
  equipamento: '',
  servico: 'Suporte presencial',
  descricao: '',
  diagnostico: '',
  solucao: '',
  status: 'Aberta',
  tecnico: 'Alexander',
  valorServico: '0,00',
  valorPecas: '0,00',
  desconto: '0,00',
  observacoes: '',
};

function currencyToNumber(value) {
  if (!value) return 0;
  return Number(String(value).replace(/\./g, '').replace(',', '.')) || 0;
}

function numberToCurrency(value) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(value) {
  if (!value) return '';
  return value.split('-').reverse().join('/');
}

function createNumeroOS(list) {
  const year = new Date().getFullYear();
  const next = list.length + 1;
  return `OS-${year}-${String(next).padStart(4, '0')}`;
}

function App() {
  const [ordens, setOrdens] = useState([
    {
      ...initialForm,
      numero: 'OS-2026-0001',
      cliente: 'Cliente Exemplo',
      loja: '8596',
      responsavel: 'João Silva',
      telefone: '(13) 99999-9999',
      email: 'cliente@email.com',
      endereco: 'Santos/SP',
      equipamento: 'Computador caixa / PDV Legal',
      servico: 'Suporte presencial',
      descricao: 'Computador do caixa não abre o sistema de vendas.',
      diagnostico: 'Verificar inicialização, rede, impressora e acesso ao PDV Legal.',
      solucao: '',
      status: 'Aberta',
      tecnico: 'Alexander',
      valorServico: '150,00',
      valorPecas: '0,00',
      desconto: '0,00',
      observacoes: 'Atendimento prioritário para operação de caixa.',
    },
  ]);

  const [form, setForm] = useState({ ...initialForm, numero: createNumeroOS([]) });
  const [selectedNumero, setSelectedNumero] = useState(null);
  const [search, setSearch] = useState('');

  const subtotal = useMemo(() => currencyToNumber(form.valorServico) + currencyToNumber(form.valorPecas), [form.valorServico, form.valorPecas]);
  const total = useMemo(() => Math.max(0, subtotal - currencyToNumber(form.desconto)), [subtotal, form.desconto]);

  const filteredOrdens = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return ordens;
    return ordens.filter((os) =>
      [os.numero, os.cliente, os.loja, os.responsavel, os.telefone, os.servico, os.status, os.tecnico]
        .join(' ')
        .toLowerCase()
        .includes(term)
    );
  }, [ordens, search]);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleNew() {
    setSelectedNumero(null);
    setForm({ ...initialForm, numero: createNumeroOS(ordens) });
  }

  function handleSave() {
    if (!form.cliente.trim()) {
      alert('Informe o nome do cliente antes de salvar a ordem de serviço.');
      return;
    }

    if (selectedNumero) {
      setOrdens((prev) => prev.map((os) => (os.numero === selectedNumero ? form : os)));
    } else {
      setOrdens((prev) => [...prev, form]);
      setSelectedNumero(form.numero);
    }
  }

  function handleSelect(os) {
    setSelectedNumero(os.numero);
    setForm(os);
  }

  function handleDelete() {
    if (!selectedNumero) return;
    const ok = confirm('Deseja excluir esta ordem de serviço?');
    if (!ok) return;
    setOrdens((prev) => prev.filter((os) => os.numero !== selectedNumero));
    handleNew();
  }

  function handlePrint() {
    window.print();
  }

  const StatusIcon = statusConfig[form.status]?.icon || Clock;

  return (
    <div className="app">
      <header className="topbar no-print">
        <div className="topbar-inner">
          <div>
            <p className="eyebrow">013 Automação Comercial</p>
            <h1>Sistema de Ordem de Serviço</h1>
            <p className="subtitle">Modelo visual alinhado ao app de orçamento comercial da 013.</p>
          </div>
          <div className="actions">
            <button className="btn btn-light" onClick={handleNew}><Plus size={16} /> Nova OS</button>
            <button className="btn btn-primary" onClick={handleSave}><Save size={16} /> Salvar</button>
            <button className="btn btn-outline" onClick={handlePrint}><Printer size={16} /> Imprimir</button>
          </div>
        </div>
      </header>

      <main className="layout page">
        <aside className="sidebar no-print">
          <div className="search-box">
            <Search size={16} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por cliente, loja, OS ou status..." />
          </div>

          <div className="os-list">
            {filteredOrdens.map((os) => {
              const CfgIcon = statusConfig[os.status]?.icon || Clock;
              return (
                <motion.button
                  key={os.numero}
                  onClick={() => handleSelect(os)}
                  whileHover={{ scale: 1.01 }}
                  className={`os-card ${selectedNumero === os.numero ? 'active' : ''}`}
                >
                  <div className="os-card-head">
                    <div>
                      <strong>{os.numero}</strong>
                      <span>{os.cliente || 'Sem cliente'}</span>
                      {os.loja && <small>Loja {os.loja}</small>}
                    </div>
                    <span className={`status-pill ${statusConfig[os.status]?.className}`}><CfgIcon size={12} /> {os.status}</span>
                  </div>
                  <p>{os.descricao || 'Sem descrição informada.'}</p>
                </motion.button>
              );
            })}
          </div>
        </aside>

        <section className="document print-area">
          <div className="doc-header">
            <div className="brand-block">
              <div className="logo-box"><span><b>ZER</b>O13</span></div>
              <div>
                <p className="doc-eyebrow">013 Automação Comercial</p>
                <h2>Ordem de Serviço</h2>
                <p>Suporte técnico • Automação comercial • PDV Legal</p>
              </div>
            </div>
            <div className="doc-meta">
              <div><span>OS</span><strong>{form.numero}</strong></div>
              <div><span>Data</span><strong>{formatDate(form.data)}</strong></div>
              <span className={`status-pill ${statusConfig[form.status]?.className}`}><StatusIcon size={13} /> {form.status}</span>
            </div>
          </div>

          <div className="doc-body">
            <div className="form-grid compact no-print">
              <Input label="Número da OS" value={form.numero} onChange={(v) => updateField('numero', v)} />
              <Input label="Data" type="date" value={form.data} onChange={(v) => updateField('data', v)} />
              <Input label="Loja" value={form.loja} onChange={(v) => updateField('loja', v)} />
              <Select label="Status" value={form.status} onChange={(v) => updateField('status', v)} options={Object.keys(statusConfig)} />
            </div>

            <DocumentBlock title="Dados do Cliente">
              <div className="info-grid">
                <InfoLine label="Cliente" value={form.cliente} field="cliente" updateField={updateField} />
                <InfoLine label="Loja" value={form.loja} field="loja" updateField={updateField} />
                <InfoLine label="Responsável" value={form.responsavel} field="responsavel" updateField={updateField} />
                <InfoLine label="Telefone" value={form.telefone} field="telefone" updateField={updateField} />
                <InfoLine label="E-mail" value={form.email} field="email" updateField={updateField} />
                <InfoLine label="Endereço" value={form.endereco} field="endereco" updateField={updateField} />
              </div>
            </DocumentBlock>

            <DocumentBlock title="Descrição do Atendimento">
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Serviço</th>
                      <th>Equipamento/Sistema</th>
                      <th>Problema relatado</th>
                      <th>Técnico</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><select value={form.servico} onChange={(e) => updateField('servico', e.target.value)}>{servicosPadrao.map((option) => <option key={option} value={option}>{option}</option>)}</select></td>
                      <td><InlineInput value={form.equipamento} onChange={(v) => updateField('equipamento', v)} placeholder="Equipamento" /></td>
                      <td><InlineTextArea value={form.descricao} onChange={(v) => updateField('descricao', v)} placeholder="Descreva o problema informado pelo cliente" /></td>
                      <td><InlineInput value={form.tecnico} onChange={(v) => updateField('tecnico', v)} placeholder="Técnico" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DocumentBlock>

            <DocumentBlock title="Diagnóstico e Solução">
              <div className="two-cols">
                <TextArea label="Diagnóstico técnico" value={form.diagnostico} onChange={(v) => updateField('diagnostico', v)} />
                <TextArea label="Solução aplicada" value={form.solucao} onChange={(v) => updateField('solucao', v)} />
              </div>
            </DocumentBlock>

            <div className="bottom-grid">
              <DocumentBlock title="Observações">
                <TextArea label="Observações gerais" value={form.observacoes} onChange={(v) => updateField('observacoes', v)} />
              </DocumentBlock>

              <div className="values-box">
                <h3><DollarSign size={16} /> Valores</h3>
                <ValueRow label="Serviço" value={form.valorServico} onChange={(v) => updateField('valorServico', v)} />
                <ValueRow label="Peças" value={form.valorPecas} onChange={(v) => updateField('valorPecas', v)} />
                <ValueRow label="Desconto" value={form.desconto} onChange={(v) => updateField('desconto', v)} />
                <div className="subtotal"><span>Subtotal</span><strong>R$ {numberToCurrency(subtotal)}</strong></div>
                <div className="total-box"><span>Total</span><strong>R$ {numberToCurrency(total)}</strong></div>
              </div>
            </div>

            <div className="signatures">
              <div><strong>Assinatura do Cliente</strong><span>Nome e assinatura</span></div>
              <div><strong>Assinatura do Técnico</strong><span>013 Automação Comercial</span></div>
            </div>

            <footer className="doc-footer">
              <strong>013 Automação Comercial</strong>
              <span>suporte@013automacao.com.br • comercial@013automacao.com.br • www.013automacao.com.br</span>
            </footer>

            <div className="doc-actions no-print">
              <button className="btn btn-danger" onClick={handleDelete} disabled={!selectedNumero}><Trash2 size={16} /> Excluir</button>
              <button className="btn btn-primary" onClick={handleSave}><Save size={16} /> Salvar OS</button>
              <button className="btn btn-dark" onClick={handlePrint}><Printer size={16} /> Imprimir OS</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function DocumentBlock({ title, children }) {
  return <section className="doc-block"><h3><ClipboardList size={16} /> {title}</h3>{children}</section>;
}

function InfoLine({ label, value, field, updateField }) {
  return <label className="info-line"><span>{label}:</span><input value={value} onChange={(e) => updateField(field, e.target.value)} /></label>;
}

function Input({ label, value, onChange, type = 'text' }) {
  return <label className="field"><span>{label}</span><input type={type} value={value} onChange={(e) => onChange(e.target.value)} /></label>;
}

function InlineInput({ value, onChange, placeholder }) {
  return <input className="inline-input" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />;
}

function InlineTextArea({ value, onChange, placeholder }) {
  return <textarea className="inline-textarea" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={3} />;
}

function ValueRow({ label, value, onChange }) {
  return <label className="value-row"><span>{label}</span><input value={value} onChange={(e) => onChange(e.target.value)} /></label>;
}

function Select({ label, value, onChange, options }) {
  return <label className="field"><span>{label}</span><select value={value} onChange={(e) => onChange(e.target.value)}>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}

function TextArea({ label, value, onChange }) {
  return <label className="field textarea-field"><span>{label}</span><textarea value={value} onChange={(e) => onChange(e.target.value)} rows={4} /></label>;
}

createRoot(document.getElementById('root')).render(<App />);
