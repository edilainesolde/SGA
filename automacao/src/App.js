import React, { useEffect, useState } from 'react';

function App() {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [horaAtual, setHoraAtual] = useState('');
  
  // NOVO ESTADO: Controla a visibilidade do painel de alarmes
  const [showAlarms, setShowAlarms] = useState(false);

  // NOVA LISTA: Dados fictícios de alarmes e manutenções programadas
  const alertasManutencao = [
    { id: 1, maquina: 'Mazak VCN-530C', tipo: 'Corretiva', criticidade: 'alta', desc: 'Temperatura elevada no spindle detectada.', tempo: 'Há 15 min' },
    { id: 2, maquina: 'Fanuc Robocut α-C600iC', tipo: 'Preventiva', criticidade: 'media', desc: 'Troca de guias e limpeza do reservatório.', tempo: 'Amanhã, 08:00' },
    { id: 3, maquina: 'Haas ST-30', tipo: 'Alarme', criticidade: 'alta', desc: 'Desgaste prematuro da ferramenta T04.', tempo: 'Há 1 hora' },
  ];

  // Atualiza o relógio no formato HH:MM
  useEffect(() => {
    const atualizarRelogio = () => {
      const agora = new Date();
      setHoraAtual(agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    };
    atualizarRelogio();
    const timerRelogio = setInterval(atualizarRelogio, 1000);
    return () => clearInterval(timerRelogio);
  }, []);

  // Busca os dados das máquinas a cada 5 segundos
  useEffect(() => {
    const carregarDados = () => {
      fetch('http://localhost:3001/api/machines')
        .then(resposta => {
          if (!resposta.ok) throw new Error("Falha na comunicação com o servidor");
          return resposta.json();
        })
        .then(dados => {
          setMachines(dados);
          setLoading(false);
        })
        .catch(erro => {
          console.error("Erro ao carregar:", erro);
          setError(erro.message);
          setLoading(false);
        });
    };

    carregarDados();
    const relogio = setInterval(carregarDados, 5000);
    return () => clearInterval(relogio);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f6f2] text-[#102a43] relative overflow-hidden flex flex-col font-sans" style={{ fontFamily: '"Trebuchet MS", "Segoe UI", sans-serif' }}>
      
      {/* Padrão de fundo em linhas diagonais sutis */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.015) 4px, rgba(0,0,0,0.015) 8px)' }}
      ></div>

      {/* ================= CABEÇALHO SENAI ================= */}
      <header className="bg-[#102a43] h-[72px] px-6 flex items-center justify-between shadow-sm z-10 relative">
        <div className="flex items-center gap-3">
          <span className="brand-mark text-[#f1c84b] text-[36px] font-light leading-none p-2 inline-block rotate-[30deg] ml-3" aria-hidden="true">
            ⊞
          </span>
          <div className="flex flex-col mt-1">
            <span className="text-gray-300 text-[9px] tracking-[0.15em] uppercase leading-none mb-1">Sistema de Gestão de Ambientes</span>
            <span className="text-white text-[22px] font-semibold tracking-wide leading-none">SENAI</span>
          </div>
        </div>
        
        <button className="flex items-center gap-2 border border-slate-500/50 hover:border-slate-400 bg-transparent transition-colors rounded px-4 py-1.5 text-white text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f1c84b]"></span>
          <span>Login</span>
        </button>
      </header>

      {/* ================= CONTEÚDO PRINCIPAL (GRID DE MÁQUINAS) ================= */}
      <main className="relative z-10 mx-auto w-full max-w-[1400px] pt-8 px-6 pb-[180px] flex-1">
        
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-[#6d7f91] text-[22px] font-normal">
            Status do Chão de Fábrica às {horaAtual || '...'}
          </h2>
          <span className="text-[11px] text-[#6d7f91] uppercase tracking-widest font-bold">Atualização em tempo real</span>
        </div>
        <div className="h-[4px] w-full bg-[#f1c84b] mb-8"></div>

        {loading ? (
          <div className="bg-white p-6 shadow-sm text-[#6d7f91]">A carregar telemetria...</div>
        ) : error ? (
          <div className="bg-white p-6 shadow-sm text-red-600 border-l-4 border-red-600">Erro de ligação: {error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {machines.map(machine => {
              const nomeStr = machine.name ? machine.name.toLowerCase() : '';
              const isErosao = nomeStr.includes('erosão') || nomeStr.includes('erosao');
              const isPrensa = nomeStr.includes('prensa');
              
              const emOperacao = machine.status === 'Usinando' || machine.status === 'Estampando';
              
              const borderColor = emOperacao ? 'border-l-[5px] border-l-[#176b87]' : 'border-l-[5px] border-l-[#6d7f91]';
              const badgeBg = emOperacao ? 'bg-[#176b87]/10 text-[#176b87]' : 'bg-gray-100 text-[#6d7f91]';
              const typeLabel = isErosao ? 'Erosão a Fio' : isPrensa ? 'Estamparia' : 'Usinagem CNC';

              return (
                <div key={machine.id} className={`bg-white shadow-sm border border-gray-200 ${borderColor} flex flex-col justify-between`}>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-[#102a43] leading-tight mb-1">{machine.name}</h3>
                        <span className="text-[10px] font-bold text-[#6d7f91] uppercase tracking-wider">{typeLabel}</span>
                      </div>
                      <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded ${badgeBg}`}>
                        {emOperacao ? `🟢 ${machine.status}` : '⚪ Parada'}
                      </span>
                    </div>

                    <div className="mb-4 text-[13px] text-[#102a43]">
                      <div className="flex justify-between mb-1">
                        <span className="text-[#6d7f91]">Programa:</span>
                        <span className="font-semibold truncate max-w-[120px]">{machine.current_program}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6d7f91]">Peças Produzidas:</span>
                        <span className="font-bold">{machine.part_count} un</span>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="flex justify-between items-center text-[12px] mb-1">
                        <span className="text-[#6d7f91] font-bold uppercase tracking-wider">OEE Global:</span>
                        <span className="font-bold text-[#102a43]">{machine.oee}%</span>
                      </div>
                      <div className="w-full bg-[#f4f6f2] h-2 rounded-none overflow-hidden">
                        <div 
                          className="bg-[#176b87] h-full transition-all" 
                          style={{ width: `${machine.oee}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="bg-[#f4f6f2] p-3 border border-gray-100">
                      <h4 className="text-[10px] uppercase text-[#6d7f91] font-bold mb-2 tracking-wider">Telemetria em Tempo Real</h4>
                      <div className="grid grid-cols-2 gap-2 text-[12px] text-[#102a43]">
                        
                        {isErosao ? (
                          <>
                            <div className="flex flex-col">
                              <span className="text-[#6d7f91] text-[10px]">Tensão Elétrica</span>
                              <span className="font-bold">{machine.voltage} V</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[#6d7f91] text-[10px]">Corrente</span>
                              <span className="font-bold">{machine.current} A</span>
                            </div>
                            <div className="flex flex-col col-span-2 mt-1">
                              <span className="text-[#6d7f91] text-[10px]">Tensão do Fio</span>
                              <span className="font-bold">{machine.wire_tension} g</span>
                            </div>
                          </>
                        ) : isPrensa ? (
                          <>
                            <div className="flex flex-col">
                              <span className="text-[#6d7f91] text-[10px]">Força (Tonnage)</span>
                              <span className="font-bold">{machine.tonnage} T</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[#6d7f91] text-[10px]">Cadência</span>
                              <span className="font-bold">{machine.strokes_per_min} GPM</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex flex-col">
                              <span className="text-[#6d7f91] text-[10px]">Rotação</span>
                              <span className="font-bold">{machine.spindle_speed} RPM</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[#6d7f91] text-[10px]">Avanço</span>
                              <span className="font-bold">{machine.feed_rate} mm/m</span>
                            </div>
                            <div className="flex flex-col col-span-2 mt-1">
                              <span className="text-[#6d7f91] text-[10px]">Carga no Eixo</span>
                              <span className="font-bold">{machine.spindle_load}%</span>
                            </div>
                          </>
                        )}
                        
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#fafbfc] px-5 py-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
                    <span className="text-[#6d7f91]">CMD: {machine.controller}</span>
                    <button className="text-[#176b87] font-bold hover:underline" type="button">
                      Detalhes &gt;
                    </button>
                  </div>
                  
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* ================= WIDGET E PAINEL FLUTUANTE DE ALARMES ================= */}
      <div className="fixed bottom-0 right-12 z-50 flex flex-col items-end">
        
        {/* Painel Expansível de Alarmes */}
        {showAlarms && (
          <div className="bg-white border border-gray-200 shadow-2xl w-[360px] mb-2 rounded-t overflow-hidden">
            {/* Cabeçalho do Painel */}
            <div className="bg-[#102a43] px-5 py-4 flex justify-between items-center border-b-[4px] border-[#f1c84b]">
              <h3 className="text-white font-semibold text-[15px] tracking-wide">Fila de Manutenção</h3>
              <button 
                onClick={() => setShowAlarms(false)} 
                className="text-gray-400 hover:text-white transition-colors"
                title="Fechar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            {/* Lista de Alertas */}
            <div className="max-h-80 overflow-y-auto">
              {alertasManutencao.map(alerta => (
                <div key={alerta.id} className="p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-1.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${alerta.criticidade === 'alta' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-[#176b87]'}`}>
                      {alerta.tipo}
                    </span>
                    <span className="text-[11px] text-[#6d7f91] font-medium">{alerta.tempo}</span>
                  </div>
                  <h4 className="text-[14px] font-bold text-[#102a43] leading-none mb-1">{alerta.maquina}</h4>
                  <p className="text-[12px] text-[#6d7f91] leading-tight">{alerta.desc}</p>
                </div>
              ))}
            </div>

            {/* Rodapé do Painel */}
            <div className="bg-[#f4f6f2] p-3 text-center border-t border-gray-200">
              <button className="text-[#176b87] text-[12px] font-bold hover:underline">Ver Histórico Completo &gt;</button>
            </div>
          </div>
        )}

        {/* Botão Flutuante (Sino) */}
        <button 
          onClick={() => setShowAlarms(!showAlarms)}
          className="bg-[#176b87] hover:bg-[#135a72] transition-colors text-white flex items-center gap-4 px-6 py-4 rounded-t-lg shadow-lg"
        >
          <div className="relative border border-white/30 rounded-full p-1.5 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-sm"></span>
            </span>
          </div>
          
          <div className="flex flex-col pr-8 text-left">
            <span className="font-semibold text-[15px] tracking-wide">Notificações de Alarme</span>
            <span className="text-xs text-white/80">Manutenções Preventivas e Corretivas</span>
          </div>
          
          <svg className={`w-5 h-5 text-[#f1c84b] transition-transform duration-300 ${showAlarms ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
}

export default App;