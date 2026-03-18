const positions = [
  { coin: "SOL", name: "Solana", side: "Long" as const, sl: "$138", cur: "$172.40", tp: "$195", pnl: "+$1,210", pnlP: "+16.3%", barFill: 62, markerPos: 62 },
  { coin: "JUP", name: "Jupiter", side: "Long" as const, sl: "$0.70", cur: "$0.964", tp: "$1.20", pnl: "+$720", pnlP: "+17.6%", barFill: 53, markerPos: 53 },
  { coin: "WIF", name: "dogwifhat", side: "Short" as const, sl: "$3.10", cur: "$2.61", tp: "$1.90", pnl: "+$690", pnlP: "+24.3%", barFill: 41, markerPos: 41, warn: "Near SL" },
];

const HeroWidget = () => (
  <div className="bg-surface border border-line rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,.06),0_8px_32px_rgba(0,0,0,.06)]">
    {/* Header */}
    <div className="px-[18px] py-4 border-b border-line flex items-center justify-between">
      <span className="text-[13px] font-semibold text-foreground">Open positions</span>
      <div className="flex items-center gap-[5px] bg-sentinel-green-surface rounded-full px-[9px] py-[3px]">
        <span className="w-[5px] h-[5px] rounded-full bg-sentinel-green animate-blink" />
        <span className="text-[11px] font-semibold text-sentinel-green">Engine active</span>
      </div>
    </div>

    {/* Positions */}
    {positions.map(p => (
      <div key={p.coin} className="px-[18px] py-[13px] border-b border-line grid grid-cols-[1fr_auto] gap-3 items-center hover:bg-background transition-colors">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-[30px] h-[30px] rounded-full bg-background border border-line flex items-center justify-center text-[9.5px] font-bold text-ink-2 flex-shrink-0">{p.coin}</div>
            <span className="text-[13.5px] font-semibold text-foreground">{p.name}</span>
            <span className={`text-[10.5px] font-semibold rounded px-1.5 py-[1px] ${p.side === 'Long' ? 'bg-sentinel-green-surface text-sentinel-green' : 'bg-sentinel-red-surface text-sentinel-red'}`}>{p.side}</span>
            {p.warn && <span className="flex items-center gap-[5px] bg-sentinel-amber-surface rounded px-2 py-[2px] text-[10.5px] font-semibold text-sentinel-amber">{p.warn}</span>}
          </div>
          <div className="h-[3px] bg-line rounded-sm relative mb-[5px]">
            <div className={`absolute top-0 left-0 h-full rounded-sm ${p.pnl.startsWith('+') ? 'bg-sentinel-green' : 'bg-sentinel-red'}`} style={{ width: `${p.barFill}%` }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-[9px] h-[9px] bg-surface border-2 border-foreground rounded-full" style={{ left: `${p.markerPos}%`, transform: 'translate(-50%, -50%)' }} />
          </div>
          <div className="flex justify-between text-[10px] font-mono-data">
            <span className="text-sentinel-red">SL {p.sl}</span>
            <span className="text-ink-3">{p.cur}</span>
            <span className="text-sentinel-green">TP {p.tp}</span>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-sm font-bold font-mono-data ${p.pnl.startsWith('+') ? 'text-sentinel-green' : 'text-sentinel-red'}`}>{p.pnl}</div>
          <div className="text-[10.5px] text-ink-4 mt-[1px] font-mono-data">{p.pnlP}</div>
        </div>
      </div>
    ))}

    {/* Footer */}
    <div className="px-[18px] py-[11px] bg-background border-t border-line flex items-center justify-between">
      <span className="text-[11.5px] text-ink-3">3 of 6 positions shown</span>
      <span className="text-[11px] font-mono-data text-ink-4">checked 6s ago</span>
    </div>
  </div>
);

export default HeroWidget;
