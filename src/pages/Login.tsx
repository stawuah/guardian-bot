import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [manualAddress, setManualAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState("");

  const connectPhantom = async () => {
    setError("");
    setIsConnecting(true);
    try {
      const phantom = (window as any)?.solana;
      if (!phantom?.isPhantom) {
        window.open("https://phantom.app/", "_blank");
        setError("Phantom wallet not found. Please install it first.");
        return;
      }
      const resp = await phantom.connect();
      const address = resp.publicKey.toString();
      localStorage.setItem("sentinel_wallet", address);
      navigate("/");
    } catch {
      setError("Connection rejected or failed.");
    } finally {
      setIsConnecting(false);
    }
  };

  const handleManualSubmit = () => {
    setError("");
    const trimmed = manualAddress.trim();
    if (!trimmed) {
      setError("Please enter a Solana address.");
      return;
    }
    // Basic Solana address validation (base58, 32-44 chars)
    if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(trimmed)) {
      setError("Invalid Solana address format.");
      return;
    }
    localStorage.setItem("sentinel_wallet", trimmed);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <a href="/" className="flex items-center justify-center gap-2.5 no-underline mb-12">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">Sentinel</span>
        </a>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight text-center mb-2">
            Connect your wallet
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-8 leading-relaxed">
            Non-custodial. Sentinel never holds your tokens.
          </p>

          {/* Phantom Button */}
          <button
            onClick={connectPhantom}
            disabled={isConnecting}
            className="w-full flex items-center justify-center gap-3 bg-foreground text-primary-foreground font-semibold text-[15px] rounded-xl py-3.5 px-6 border-none cursor-pointer font-display hover:opacity-85 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed mb-3"
          >
            <svg width="20" height="20" viewBox="0 0 128 128" fill="none">
              <circle cx="64" cy="64" r="64" fill="#AB9FF2" />
              <path d="M110.6 64.1c-1.3-13.7-13-24.5-26.8-24.8-7-.2-13.6 2.4-18.7 6.8a26.3 26.3 0 0 0-24-6.4c-12.7 2.7-21.3 14.2-21.3 27.2v1c.1 15.4 12.6 27.7 28 27.7h35.4c15 0 27.6-11.6 28-26.6.1-1.6 0-3.3-.2-4.9h.6zm-71 16.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm22 0a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" fill="#fff" />
            </svg>
            {isConnecting ? "Connecting…" : "Connect with Phantom"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Manual Address */}
          <label className="block text-sm font-semibold text-foreground mb-2">
            Solana address
          </label>
          <input
            type="text"
            value={manualAddress}
            onChange={(e) => setManualAddress(e.target.value)}
            placeholder="e.g. 7xKXtg2CW87d97TXJSDpbD5jBk…"
            className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring font-mono mb-3"
          />
          <button
            onClick={handleManualSubmit}
            className="w-full flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-line-2 text-foreground font-semibold text-[14px] rounded-xl py-3 px-6 cursor-pointer font-display hover:border-ink-4 transition-colors"
          >
            Continue with address
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Error */}
          {error && (
            <div className="mt-4 bg-red-surface text-sentinel-red text-sm font-medium rounded-lg px-4 py-2.5 text-center">
              {error}
            </div>
          )}
        </div>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground text-center mt-6 leading-relaxed">
          By connecting, you agree to our{" "}
          <a href="#" className="underline text-foreground hover:opacity-70">Terms</a> and{" "}
          <a href="#" className="underline text-foreground hover:opacity-70">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
