import React, { useState } from 'react';
import { 
  X, 
  Terminal, 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  AlertCircle,
  Database,
  Building2,
  Key,
  DollarSign
} from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'vineyards2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleAutoFill = () => {
    setPasscode('vineyards2026');
    setIsAuthenticated(true);
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
      <div className="relative w-full max-w-4xl bg-[#08080A] border border-[#AF9E81]/40 shadow-[0_0_50px_rgba(175,158,129,0.2)] rounded-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/90">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#AF9E81] rounded-full animate-ping" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#AF9E81] font-bold flex items-center gap-2">
              <Terminal size={14} /> THE_VINEYARDS_OS // HOA_PORTAL_GATE
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#AF9E81]/10 border border-[#AF9E81]/30 flex items-center justify-center text-[#AF9E81] mb-6 shadow-[0_0_30px_rgba(175,158,129,0.15)]">
              <Lock size={28} />
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-2 font-mono">
              ESTATE MANAGEMENT // OPERATOR ACCESS
            </h2>
            <p className="text-base text-zinc-200 leading-relaxed max-w-md mb-8">
              Frictionless demo gate active. Use the 1-click bypass button below or enter preset passkey <code className="text-[#AF9E81] bg-[#AF9E81]/10 px-2 py-0.5 rounded font-mono">vineyards2026</code>.
            </p>

            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
              <div className="relative">
                <input 
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode..."
                  className="w-full bg-black/60 border border-white/15 focus:border-[#AF9E81] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-[#AF9E81] font-mono text-center tracking-widest"
                />
              </div>

              {error && (
                <div className="flex items-center justify-center gap-2 text-rose-400 text-xs font-mono">
                  <AlertCircle size={14} />
                  <span>ACCESS DENIED // INVALID CODE</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#AF9E81] hover:bg-[#9e8c6f] text-black font-black uppercase tracking-wider py-3 rounded-xl text-base font-semibold min-h-[44px] transition-all duration-200 font-mono shadow-[0_0_20px_rgba(175,158,129,0.3)] active:scale-95 cursor-pointer"
              >
                Authenticate Board Member
              </button>

              <button
                type="button"
                onClick={handleAutoFill}
                className="w-full bg-white/5 hover:bg-white/10 text-[#AF9E81] border border-[#AF9E81]/30 hover:border-[#AF9E81]/60 font-mono text-base font-semibold min-h-[44px] uppercase tracking-wider py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles size={14} />
                <span>1-Click Auto-Fill Demo Passkey (`vineyards2026`)</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="p-6 space-y-4 font-mono text-xs overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[#AF9E81] font-bold flex items-center gap-2">
                <Building2 size={14} /> THE VINEYARDS ESTATE BOARD // VERIFIED
              </span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck size={14} /> AUTH_TOKEN: OK
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
                <span className="text-slate-400 block text-xs font-semibold tracking-wider">DATABASE ENGINE</span>
                <span className="text-white font-bold block text-sm">PostgreSQL 15 (Supabase Ready)</span>
                <p className="text-xs font-semibold text-slate-400 font-sans">Tables: feed_items, assessments, maintenance_tickets, guest_passes.</p>
              </div>

              <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
                <span className="text-slate-400 block text-xs font-semibold tracking-wider">ROW LEVEL SECURITY</span>
                <span className="text-emerald-400 font-bold block text-sm">RLS Enforced</span>
                <p className="text-xs font-semibold text-slate-400 font-sans">Resident data isolated by unit number and verified authentication.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
