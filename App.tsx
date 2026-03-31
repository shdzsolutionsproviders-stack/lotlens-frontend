import { useState, useEffect, useRef } from "react";

const MANIFEST_DATA = [
  {
    brand: "Calvin Klein",
    description: "CK WOMENS CURVE WIREFREE BRA",
    qty: 88,
    unitRetail: 19.99,
    extRetail: 1759.12,
    ebayAvg: 14.5,
    ebaySold: 87,
    score: "green",
  },
  {
    brand: "Calvin Klein",
    description: "CK WIRELESS BRA 2-PACK",
    qty: 41,
    unitRetail: 23.99,
    extRetail: 983.59,
    ebayAvg: 16.0,
    ebaySold: 54,
    score: "green",
  },
  {
    brand: "Lands' End",
    description: "LANDS END WOMENS QUILTED SET",
    qty: 43,
    unitRetail: 19.99,
    extRetail: 859.57,
    ebayAvg: 12.0,
    ebaySold: 22,
    score: "yellow",
  },
  {
    brand: "Roxy",
    description: "ROXY WOMENS QUILTED JACKET",
    qty: 33,
    unitRetail: 24.99,
    extRetail: 824.67,
    ebayAvg: 22.0,
    ebaySold: 38,
    score: "green",
  },
  {
    brand: "Gloria Vanderbilt",
    description: "GLORIA VANDERBILT SLIM JEAN",
    qty: 44,
    unitRetail: 17.99,
    extRetail: 791.56,
    ebayAvg: 14.0,
    ebaySold: 63,
    score: "green",
  },
  {
    brand: "Max & Mia",
    description: "MAX MIA HOODIE LOUNGE SET",
    qty: 21,
    unitRetail: 24.99,
    extRetail: 524.79,
    ebayAvg: 11.0,
    ebaySold: 9,
    score: "yellow",
  },
  {
    brand: "Live2Lounge",
    description: "LIVE2LOUNGE WOMENS LOUNGE SET",
    qty: 26,
    unitRetail: 19.99,
    extRetail: 519.74,
    ebayAvg: 8.0,
    ebaySold: 5,
    score: "red",
  },
  {
    brand: "Felina",
    description: "FELINA VELOUR TRACK SUIT",
    qty: 27,
    unitRetail: 18.99,
    extRetail: 512.73,
    ebayAvg: 16.5,
    ebaySold: 29,
    score: "green",
  },
  {
    brand: "Wrangler",
    description: "WRANGLER WOMENS BOOTCUT JEAN",
    qty: 19,
    unitRetail: 24.99,
    extRetail: 474.81,
    ebayAvg: 19.0,
    ebaySold: 72,
    score: "green",
  },
  {
    brand: "Well Worn",
    description: "WELL WORN STRETCH PANT",
    qty: 25,
    unitRetail: 17.99,
    extRetail: 449.75,
    ebayAvg: 7.0,
    ebaySold: 4,
    score: "red",
  },
  {
    brand: "Adidas",
    description: "ADIDAS WOMENS ACTIVE PANT",
    qty: 22,
    unitRetail: 19.99,
    extRetail: 439.78,
    ebayAvg: 17.0,
    ebaySold: 81,
    score: "green",
  },
  {
    brand: "Banana Republic",
    description: "BANANA REPUBLIC WOMENS JACKET",
    qty: 15,
    unitRetail: 28.99,
    extRetail: 434.85,
    ebayAvg: 26.0,
    ebaySold: 34,
    score: "green",
  },
  {
    brand: "Roxy",
    description: "ROXY LADIES SNOW PANT",
    qty: 13,
    unitRetail: 32.99,
    extRetail: 428.87,
    ebayAvg: 28.0,
    ebaySold: 19,
    score: "green",
  },
  {
    brand: "Mondetta",
    description: "MONDETTA LADIES QUARTER ZIP",
    qty: 22,
    unitRetail: 18.99,
    extRetail: 417.78,
    ebayAvg: 11.0,
    ebaySold: 12,
    score: "yellow",
  },
  {
    brand: "Roxy",
    description: "ROXY WOMENS SNOW PANT BLUE",
    qty: 11,
    unitRetail: 34.99,
    extRetail: 384.89,
    ebayAvg: 30.0,
    ebaySold: 17,
    score: "green",
  },
  {
    brand: "Calvin Klein",
    description: "CK WOMENS JOGGER 2-PACK",
    qty: 18,
    unitRetail: 20.99,
    extRetail: 377.82,
    ebayAvg: 15.0,
    ebaySold: 43,
    score: "green",
  },
  {
    brand: "525 America",
    description: "525 TEDDY 3-PIECE SET",
    qty: 10,
    unitRetail: 36.99,
    extRetail: 369.9,
    ebayAvg: 9.0,
    ebaySold: 3,
    score: "red",
  },
  {
    brand: "32 Degrees",
    description: "32 DEGREES WOMEN TECH JOGGER",
    qty: 26,
    unitRetail: 13.99,
    extRetail: 363.74,
    ebayAvg: 11.0,
    ebaySold: 55,
    score: "green",
  },
  {
    brand: "Mondetta",
    description: "MONDETTA WOMENS PEACHED PANT",
    qty: 26,
    unitRetail: 13.99,
    extRetail: 363.74,
    ebayAvg: 10.0,
    ebaySold: 18,
    score: "yellow",
  },
  {
    brand: "Calvin Klein",
    description: "CK WOMENS BIKINI 3-PACK",
    qty: 22,
    unitRetail: 14.99,
    extRetail: 329.78,
    ebayAvg: 12.0,
    ebaySold: 61,
    score: "green",
  },
  {
    brand: "Tahari",
    description: "TAHARI LADIES LONG WRAP COAT",
    qty: 7,
    unitRetail: 44.99,
    extRetail: 314.93,
    ebayAvg: 38.0,
    ebaySold: 24,
    score: "green",
  },
  {
    brand: "Marmot",
    description: "MARMOT ECHO FEATHERLESS COAT",
    qty: 2,
    unitRetail: 149.99,
    extRetail: 299.98,
    ebayAvg: 95.0,
    ebaySold: 11,
    score: "green",
  },
];

const LOT_ID = "MIR-6559397";
const LOT_NAME = "Women's Apparel 6 Pallets — Calvin Klein, Roxy & More";
const TOTAL_UNITS = 2809;
const TOTAL_RETAIL = 57542.93;
const TOTAL_LINES = 1096;
const TOTAL_BRANDS = 86;

const SCORE_CONFIG = {
  green: {
    color: "#00D4AA",
    bg: "rgba(0,212,170,0.12)",
    border: "rgba(0,212,170,0.3)",
  },
  yellow: {
    color: "#F5C518",
    bg: "rgba(245,197,24,0.12)",
    border: "rgba(245,197,24,0.3)",
  },
  red: {
    color: "#FF4757",
    bg: "rgba(255,71,87,0.12)",
    border: "rgba(255,71,87,0.3)",
  },

  nodata: {
    color: "#4A5568",
    bg: "rgba(74,85,104,0.12)",
    border: "rgba(74,85,104,0.3)",
  },
};

const getScoreLabel = (score, mode) => {
  if (score === "nodata") return "";
  if (score === "red") return "LOW";
  if (mode === "post") {
    return score === "green" ? "PROFIT" : "WATCH";
  }
  return score === "green" ? "HOT" : "FAIR";
};

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1500,
}) {
  const [display, setDisplay] = useState(0);
  const startTime = useRef(null);
  const rafRef = useRef(null);
  useEffect(() => {
    startTime.current = null;
    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value, duration]);
  return (
    <span>
      {prefix}
      {decimals > 0
        ? display.toFixed(decimals)
        : Math.floor(display).toLocaleString()}
      {suffix}
    </span>
  );
}

function ProgressBar({ label, value, max, color }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setTimeout(() => setWidth((value / max) * 100), 300);
  }, [value, max]);
  return (
    <div style={{ marginBottom: 8 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 4,
          fontSize: 11,
          color: "#8896A5",
          fontFamily: "monospace",
        }}
      >
        <span>{label}</span>
        <span style={{ color }}>{value} items</span>
      </div>
      <div
        style={{
          height: 4,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: color,
            borderRadius: 2,
            transition: "width 1s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [phase, setPhase] = useState("landing");
  const [bidAmount, setBidAmount] = useState("");
  const [targetROI, setTargetROI] = useState("100");
  const [ebayFee, setEbayFee] = useState("13");
  const [shippingCost, setShippingCost] = useState("0");
  const [prepCost, setPrepCost] = useState("0");
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState("");
  const [filter, setFilter] = useState("all");
  const [mode, setMode] = useState("pre");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedSummary, setUploadedSummary] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [manifestView, setManifestView] = useState(false);
  const fileInputRef = useState(null);

  const BACKEND_URL = "https://lotlens-backend.onrender.com";
  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = document.querySelector(
        'iframe[id^="sb_open-sandbox"]'
      ) as HTMLElement;
      if (iframe) {
        iframe.style.display = "none";
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleFileUpload = async (file) => {
    if (!file) return;
    setUploadError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${BACKEND_URL}/parse`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.error) {
        setUploadError(data.error);
        return;
      }

      setUploadedFile({ name: file.name, items: data.items });
      setUploadedSummary(data.summary);
      setPhase("config");
    } catch (err) {
      setUploadError("Could not connect to server. Try again.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const processSteps = [
    `Reading manifest... ${TOTAL_LINES} lines detected`,
    "Normalizing item descriptions with AI...",
    "Querying eBay Sold Listings...",
    "Calculating margin per item...",
    "Generating profitability scores...",
    "Analysis complete ✓",
  ];

  const [liveItems, setLiveItems] = useState(null);
  const [apiError, setApiError] = useState(null);

  const resetApp = () => {
    setPhase("landing");
    setBidAmount("");
    setTargetROI("100");
    setFilter("all");
    setMode("pre");
    setProgress(0);
    setLiveItems(null);
    setApiError(null);
    setUploadedFile(null);
    setUploadedSummary(null);
    setUploadError(null);
    setManifestView(false);
  };

  const handleAnalyze = async () => {
    setPhase("processing");
    setProgress(0);
    setApiError(null);

    const itemsToAnalyze = uploadedFile ? uploadedFile.items : MANIFEST_DATA;
    const steps = [
      `Reading manifest... ${itemsToAnalyze.length} items detected`,
      "Normalizing item descriptions with AI...",
      "Querying eBay Sold Listings...",
      "Calculating margin per item...",
      "Generating profitability scores...",
      "Analysis complete ✓",
    ];

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setProgress(Math.min((step / steps.length) * 80, 80));
      setProgressLabel(steps[Math.min(step - 1, steps.length - 1)]);
    }, 600);

    try {
      const response = await fetch(`${BACKEND_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: itemsToAnalyze }),
      });

      const data = await response.json();
      clearInterval(interval);

      if (data.results) {
        setLiveItems(data.results);
        setProgressLabel("Analysis complete ✓");
        setProgress(100);
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (err) {
      clearInterval(interval);
      setApiError("Live eBay data unavailable — showing demo prices");
      setLiveItems(null);
      setProgressLabel("Analysis complete ✓");
      setProgress(100);
    }

    setTimeout(() => setPhase("results"), 800);
  };

  const bidNum = parseFloat(bidAmount) || 0;
  const targetROINum = parseFloat(targetROI) || 100;
  const ebayFeeNum = parseFloat(ebayFee) / 100 || 0.13;
  const shippingNum = parseFloat(shippingCost) || 0;
  const prepNum = parseFloat(prepCost) || 0;
  const activeItems = liveItems || MANIFEST_DATA;
  const greenItems = activeItems.filter((i) => i.score === "green");
  const totalEbayRevenue = activeItems.reduce(
    (s, i) =>
      s + ((i.ebayAvg || 0) * (1 - ebayFeeNum) - shippingNum - prepNum) * i.qty,
    0
  );
  const actualROI =
    bidNum > 0 ? ((totalEbayRevenue - bidNum) / bidNum) * 100 : 0;
  const grossMargin =
    bidNum > 0 ? ((totalEbayRevenue - bidNum) / totalEbayRevenue) * 100 : 0;
  const maxRecommendedBid = totalEbayRevenue / (1 + targetROINum / 100);
  const filteredItems =
    filter === "all"
      ? activeItems
      : activeItems.filter((i) => i.score === filter);
  const hasPalletData = activeItems.some(
    (i) => i.palletId && i.palletId.trim() !== ""
  );

  const getVerdict = () => {
    if (bidNum === 0) return { text: "ANALYZE", color: "#8896A5" };
    const hitting = actualROI >= targetROINum;
    const close = actualROI >= targetROINum * 0.5;
    if (mode === "during") {
      if (hitting) return { text: "KEEP BIDDING", color: "#00D4AA" };
      if (close) return { text: "CAREFUL", color: "#F5C518" };
      return { text: "STOP BIDDING", color: "#FF4757" };
    }
    if (mode === "post") {
      if (hitting) return { text: "GOOD BUY", color: "#00D4AA" };
      if (close) return { text: "BREAK EVEN", color: "#F5C518" };
      return { text: "TIGHT", color: "#FF4757" };
    }
    if (hitting) return { text: "BID ON IT", color: "#00D4AA" };
    if (close) return { text: "CONSIDER", color: "#F5C518" };
    return { text: "PASS", color: "#FF4757" };
  };

  const { text: verdictText, color: verdictColor } = getVerdict();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0D14",
        fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
        color: "#E8EDF2",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0D14; }
        ::-webkit-scrollbar-thumb { background: #1E2736; border-radius: 2px; }
        .item-row:hover { background: rgba(255,255,255,0.04) !important; }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-primary:active { transform: translateY(0); }
        .tab-btn:hover { background: rgba(255,255,255,0.06) !important; }
        input:focus { outline: none; border-color: #00D4AA !important; }
        .filter-btn:hover { opacity: 0.8; }
        .drop-zone:hover { border-color: rgba(0,212,170,0.5) !important; background: rgba(0,212,170,0.06) !important; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          background: "rgba(10,13,20,0.95)",
          backdropFilter: "blur(12px)",
          zIndex: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
          }}
          onClick={resetApp}
        >
          <div
            style={{
              width: 32,
              height: 32,
              background: "linear-gradient(135deg, #00D4AA, #0097FF)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            ⬡
          </div>
          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 2,
                color: "#E8EDF2",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              LOTLENS
            </div>
            <div style={{ fontSize: 9, color: "#4A5568", letterSpacing: 3 }}>
              RESELLER INTELLIGENCE
            </div>
          </div>
        </div>
        {phase === "results" && (
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {[
              ["pre", "PRE-BID"],
              ["during", "LIVE BID"],
              ["post", "PURCHASED"],
            ].map(([m, label]) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className="tab-btn"
                style={{
                  padding: "6px 14px",
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background:
                    mode === m ? "rgba(0,212,170,0.15)" : "transparent",
                  color: mode === m ? "#00D4AA" : "#8896A5",
                  fontSize: 10,
                  cursor: "pointer",
                  letterSpacing: 1,
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={resetApp}
              className="tab-btn"
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                border: "1px solid rgba(255,71,87,0.25)",
                background: "transparent",
                color: "#FF4757",
                fontSize: 10,
                cursor: "pointer",
                letterSpacing: 1,
                transition: "all 0.2s",
                fontFamily: "inherit",
                marginLeft: 4,
              }}
            >
              ↩ NEW LOT
            </button>
          </div>
        )}
      </div>

      {/* LANDING */}
      {phase === "landing" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 65px)",
            padding: "40px 24px",
            animation: "fadeIn 0.6s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(0,212,170,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              fontSize: 11,
              letterSpacing: 4,
              color: "#00D4AA",
              marginBottom: 24,
            }}
          >
            MANIFEST ANALYZER v2.0
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 64px)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.1,
              margin: "0 0 16px",
              maxWidth: 700,
            }}
          >
            Is this lot
            <br />
            <span style={{ color: "#00D4AA" }}>worth bidding on?</span>
          </h1>
          <p
            style={{
              color: "#8896A5",
              textAlign: "center",
              maxWidth: 480,
              lineHeight: 1.7,
              fontSize: 13,
              marginBottom: 48,
            }}
          >
            Upload your B-Stock manifest. In 60 seconds you'll know which items
            have real margin on eBay and exactly how much it makes sense to bid.
          </p>
          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
              width: "100%",
              maxWidth: 520,
              border: "2px dashed rgba(0,212,170,0.25)",
              borderRadius: 16,
              padding: "48px 32px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s",
              background: "rgba(0,212,170,0.03)",
              marginBottom: 24,
            }}
            onClick={() => document.getElementById("file-input").click()}
          >
            <input
              id="file-input"
              type="file"
              accept=".csv,.xlsx,.xls"
              style={{ display: "none" }}
              onChange={(e) => handleFileUpload(e.target.files[0])}
            />
            <div style={{ fontSize: 32, marginBottom: 16 }}>📂</div>
            <div style={{ fontSize: 13, color: "#E8EDF2", marginBottom: 8 }}>
              Click to browse or drag & drop
            </div>
            <div style={{ fontSize: 11, color: "#4A5568" }}>
              CSV · Excel — B-Stock, BULQ, Direct Liquidation
            </div>
            {uploadError && (
              <div style={{ marginTop: 12, fontSize: 11, color: "#FF4757" }}>
                {uploadError}
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                height: 1,
                width: 80,
                background: "rgba(255,255,255,0.08)",
              }}
            />
            <span style={{ fontSize: 10, color: "#4A5568", letterSpacing: 2 }}>
              OR TRY A LIVE DEMO
            </span>
            <div
              style={{
                height: 1,
                width: 80,
                background: "rgba(255,255,255,0.08)",
              }}
            />
          </div>
          <button
            onClick={() => setPhase("config")}
            className="btn-primary"
            style={{
              padding: "14px 40px",
              background: "linear-gradient(135deg, #00D4AA, #0097FF)",
              border: "none",
              borderRadius: 10,
              color: "#0A0D14",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: 1.5,
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}
          >
            DEMO — SEE IT IN ACTION →
          </button>
          <div
            style={{
              marginTop: 12,
              fontSize: 10,
              color: "#4A5568",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>
              {LOT_NAME} · {TOTAL_UNITS.toLocaleString()} units
            </span>
            </div>
        </div>
      )}
      <div
        style={{
          textAlign: "center",
          fontSize: 9,
          color: "#4A5568",
          letterSpacing: 2,
          marginTop: 32,
          marginBottom: 12,
        }}
      >
        SCORE LEGEND
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginTop: 0,
          flexWrap: "wrap",
        }}
      >
        {[
          {
            color: "#00D4AA",
            bg: "rgba(0,212,170,0.12)",
            border: "rgba(0,212,170,0.3)",
            label: "HOT",
            desc: "Strong eBay demand. Buy with confidence.",
          },
          {
            color: "#F5C518",
            bg: "rgba(245,197,24,0.12)",
            border: "rgba(245,197,24,0.3)",
            label: "FAIR",
            desc: "Decent margin. Worth bidding carefully.",
          },
          {
            color: "#FF4757",
            bg: "rgba(255,71,87,0.12)",
            border: "rgba(255,71,87,0.3)",
            label: "LOW",
            desc: "Low eBay ratio. Thin margin.",
          },
          {
            color: "#FFFFFF",
            bg: "rgba(74,85,104,0.12)",
            border: "rgba(74,85,104,0.3)",
            label: "N/A",
            desc: "No eBay listings found.",
          },
        ].map((b) => (
          <div
            key={b.label}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <span
              style={{
                padding: "3px 8px",
                borderRadius: 4,
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: 1,
                whiteSpace: "nowrap",
                color: b.color,
                background: b.bg,
                border: `1px solid ${b.border}`,
              }}
            >
              {b.label}
            </span>
            <span style={{ fontSize: 11, color: "#4A5568" }}>{b.desc}</span>
          </div>
        ))}
      </div>
      {/* CONFIG */}
      {phase === "config" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 65px)",
            padding: "40px 24px",
            animation: "fadeIn 0.4s ease",
          }}
        >
          <div style={{ width: "100%", maxWidth: 460 }}>
            <div
              style={{
                fontSize: 10,
                color: "#00D4AA",
                letterSpacing: 3,
                marginBottom: 24,
              }}
            >
              QUICK SETUP
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 24,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "#8896A5",
                  letterSpacing: 1,
                  marginBottom: 12,
                }}
              >
                MANIFEST LOADED
              </div>
              {uploadedSummary ? (
                <>
                  <div
                    style={{ fontSize: 12, color: "#00D4AA", marginBottom: 4 }}
                  >
                    ✓ {uploadedFile.name}
                  </div>
                  <div
                    style={{ fontSize: 10, color: "#4A5568", marginBottom: 16 }}
                  >
                    Custom manifest
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    {[
                      [uploadedSummary.totalUnits.toLocaleString(), "units"],
                      [
                        `$${(uploadedSummary.totalRetail / 1000).toFixed(1)}k`,
                        "ext. retail",
                      ],
                      [uploadedSummary.totalBrands.toString(), "brands"],
                    ].map(([v, l]) => (
                      <div
                        key={l}
                        style={{
                          flex: 1,
                          background: "rgba(255,255,255,0.03)",
                          borderRadius: 8,
                          padding: "10px 12px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#E8EDF2",
                          }}
                        >
                          {v}
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            color: "#4A5568",
                            marginTop: 2,
                          }}
                        >
                          {l}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <div style={{ fontSize: 12, color: "#E8EDF2" }}>
                      {LOT_NAME}
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#FF4757",
                          display: "inline-block",
                          animation: "blink 1.5s infinite",
                        }}
                      />
                      <span style={{ fontSize: 10, color: "#FF4757" }}>
                        CLOSES TOMORROW
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ fontSize: 10, color: "#4A5568", marginBottom: 16 }}
                  >
                    Lot ID: {LOT_ID}
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    {[
                      [TOTAL_UNITS.toLocaleString(), "units"],
                      [`$${(TOTAL_RETAIL / 1000).toFixed(1)}k`, "ext. retail"],
                      [TOTAL_BRANDS.toString(), "brands"],
                    ].map(([v, l]) => (
                      <div
                        key={l}
                        style={{
                          flex: 1,
                          background: "rgba(255,255,255,0.03)",
                          borderRadius: 8,
                          padding: "10px 12px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#E8EDF2",
                          }}
                        >
                          {v}
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            color: "#4A5568",
                            marginTop: 2,
                          }}
                        >
                          {l}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 24,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "#8896A5",
                  marginBottom: 20,
                  letterSpacing: 1,
                }}
              >
                BID PARAMETERS
              </div>

              <div style={{ marginBottom: 16 }}>
                <div
                  style={{
                    fontSize: 10,
                    color: "#8896A5",
                    marginBottom: 6,
                    letterSpacing: 1,
                  }}
                >
                  CURRENT LOT BID ($)
                </div>
                <input
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder="e.g. 3500"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                    color: "#E8EDF2",
                    fontSize: 13,
                    transition: "border-color 0.2s",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{ fontSize: 10, color: "#8896A5", letterSpacing: 1 }}
                  >
                    TARGET ROI (%)
                  </div>
                  <div style={{ fontSize: 9, color: "#4A5568" }}>
                    Max bid calculated automatically
                  </div>
                </div>
                <input
                  value={targetROI}
                  onChange={(e) => setTargetROI(e.target.value)}
                  placeholder="100"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                    color: "#E8EDF2",
                    fontSize: 13,
                    transition: "border-color 0.2s",
                    fontFamily: "inherit",
                  }}
                />
                <div
                  style={{
                    marginTop: 8,
                    padding: "10px 12px",
                    background: "rgba(0,212,170,0.05)",
                    border: "1px solid rgba(0,212,170,0.12)",
                    borderRadius: 6,
                    fontSize: 10,
                    color: "#4A5568",
                    lineHeight: 1.6,
                  }}
                >
                  How much you want your money to grow. 100% means doubling your
                  investment. The app also shows Gross Margin as a safety
                  indicator — how much buffer you have after costs.
                </div>
              </div>

              <div style={{ fontSize: 10, color: "#4A5568" }}>
                Both fields optional — skip to see full item analysis
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#8896A5",
                      letterSpacing: 1.5,
                      marginBottom: 6,
                    }}
                  >
                    eBay FEES (%) — of sale price
                  </div>
                  <input
                    value={ebayFee}
                    onChange={(e) => setEbayFee(e.target.value)}
                    placeholder="13"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      color: "#E8EDF2",
                      fontSize: 13,
                      fontFamily: "inherit",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#8896A5",
                      letterSpacing: 1.5,
                      marginBottom: 6,
                    }}
                  >
                    SHIPPING / ITEM ($) — per unit
                  </div>
                  <input
                    value={shippingCost}
                    onChange={(e) => setShippingCost(e.target.value)}
                    placeholder="0"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      color: "#E8EDF2",
                      fontSize: 13,
                      fontFamily: "inherit",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#8896A5",
                      letterSpacing: 1.5,
                      marginBottom: 6,
                    }}
                  >
                    PREP / ITEM ($) — per unit
                  </div>
                  <input
                    value={prepCost}
                    onChange={(e) => setPrepCost(e.target.value)}
                    placeholder="0"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      color: "#E8EDF2",
                      fontSize: 13,
                      fontFamily: "inherit",
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleAnalyze}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "16px",
                background: "linear-gradient(135deg, #00D4AA, #0097FF)",
                border: "none",
                borderRadius: 10,
                color: "#0A0D14",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: 1.5,
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              ANALYZE MANIFEST →
            </button>
            <button
              onClick={resetApp}
              style={{
                width: "100%",
                marginTop: 12,
                padding: "12px",
                background: "transparent",
                border: "none",
                color: "#4A5568",
                fontSize: 11,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              ← Back
            </button>
          </div>
        </div>
      )}

      {/* PROCESSING */}
      {phase === "processing" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 65px)",
            padding: "40px 24px",
          }}
        >
          <div style={{ width: "100%", maxWidth: 420, textAlign: "center" }}>
            <div
              style={{
                fontSize: 11,
                color: "#00D4AA",
                letterSpacing: 3,
                marginBottom: 32,
                animation: "pulse 1.5s infinite",
              }}
            >
              PROCESSING
            </div>
            <div style={{ height: 180, marginBottom: 32 }}>
              <svg
                viewBox="0 0 120 120"
                style={{
                  width: 120,
                  height: 120,
                  margin: "0 auto",
                  display: "block",
                }}
              >
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="4"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#00D4AA"
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 54}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 54 * (1 - progress / 100)
                  }`}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  style={{ transition: "stroke-dashoffset 0.5s ease" }}
                />
                <text
                  x="60"
                  y="65"
                  textAnchor="middle"
                  fill="#E8EDF2"
                  fontSize="20"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  {Math.floor(progress)}%
                </text>
              </svg>
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#8896A5",
                marginBottom: 24,
                minHeight: 20,
              }}
            >
              {progressLabel}
            </div>
            <div
              style={{
                height: 2,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #00D4AA, #0097FF)",
                  transition: "width 0.5s ease",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {phase === "results" && (
        <div style={{ padding: "32px", animation: "fadeIn 0.5s ease" }}>
          {/* Live data indicator */}
          {liveItems && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#00D4AA",
                  display: "inline-block",
                  animation: "blink 1.5s infinite",
                }}
              />
              <span
                style={{ fontSize: 10, color: "#00D4AA", letterSpacing: 2 }}
              >
                LIVE eBay DATA
              </span>
            </div>
          )}

          {/* API error fallback notice */}
          {apiError && (
            <div
              style={{
                background: "rgba(245,197,24,0.06)",
                border: "1px solid rgba(245,197,24,0.2)",
                borderRadius: 8,
                padding: "10px 16px",
                marginBottom: 20,
                fontSize: 11,
                color: "#F5C518",
              }}
            >
              ⚠ {apiError}
            </div>
          )}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                background: `rgba(${
                  verdictText === "BID ON IT" ||
                  verdictText === "KEEP BIDDING" ||
                  verdictText === "GOOD BUY"
                    ? "0,212,170"
                    : verdictText === "CONSIDER" ||
                      verdictText === "CAREFUL" ||
                      verdictText === "BREAK EVEN"
                    ? "245,197,24"
                    : verdictText === "ANALYZE"
                    ? "255,255,255"
                    : "255,71,87"
                },0.08)`,
                border: `1px solid rgba(${
                  verdictText === "BID ON IT" ||
                  verdictText === "KEEP BIDDING" ||
                  verdictText === "GOOD BUY"
                    ? "0,212,170"
                    : verdictText === "CONSIDER" ||
                      verdictText === "CAREFUL" ||
                      verdictText === "BREAK EVEN"
                    ? "245,197,24"
                    : verdictText === "ANALYZE"
                    ? "255,255,255"
                    : "255,71,87"
                },0.2)`,
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#8896A5",
                  letterSpacing: 2,
                  marginBottom: 8,
                }}
              >
                VERDICT
              </div>
              <div
                style={{
                  fontSize: verdictText.length > 8 ? 20 : 28,
                  fontWeight: 700,
                  color: verdictColor,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {verdictText}
              </div>
              {bidNum > 0 ? (
                <div style={{ fontSize: 11, color: "#8896A5", marginTop: 4 }}>
                  At ${bidNum.toLocaleString()} bid
                </div>
              ) : (
                <div style={{ fontSize: 11, color: "#4A5568", marginTop: 4 }}>
                  Enter bid to see verdict
                </div>
              )}
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#8896A5",
                  letterSpacing: 2,
                  marginBottom: 8,
                }}
              >
                MAX RECOMMENDED BID
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#E8EDF2",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <AnimatedNumber
                  value={maxRecommendedBid}
                  prefix="$"
                  decimals={0}
                />
              </div>
              <div style={{ fontSize: 11, color: "#4A5568", marginTop: 4 }}>
                for {targetROINum}% target ROI
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#8896A5",
                  letterSpacing: 2,
                  marginBottom: 12,
                }}
              >
                RETURN ANALYSIS
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontSize: 10, color: "#4A5568", marginBottom: 4 }}
                  >
                    ACTUAL ROI
                  </div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: bidNum > 0 ? "#00D4AA" : "#4A5568",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {bidNum > 0 ? (
                      <AnimatedNumber
                        value={actualROI}
                        suffix="%"
                        decimals={0}
                      />
                    ) : (
                      "—"
                    )}
                  </div>
                  <div style={{ fontSize: 9, color: "#4A5568", marginTop: 2 }}>
                    efficiency
                  </div>
                </div>
                <div
                  style={{ width: 1, background: "rgba(255,255,255,0.06)" }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontSize: 10, color: "#4A5568", marginBottom: 4 }}
                  >
                    GROSS MARGIN
                  </div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: bidNum > 0 ? "#0097FF" : "#4A5568",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {bidNum > 0 ? (
                      <AnimatedNumber
                        value={grossMargin}
                        suffix="%"
                        decimals={0}
                      />
                    ) : (
                      "—"
                    )}
                  </div>
                  <div style={{ fontSize: 9, color: "#4A5568", marginTop: 2 }}>
                    safety buffer
                  </div>
                </div>
              </div>
              {bidNum > 0 && (
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 10,
                    color: "#4A5568",
                    lineHeight: 1.5,
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    paddingTop: 10,
                  }}
                >
                  {actualROI.toFixed(0)}% ROI · {grossMargin.toFixed(0)}% margin{" "}
                  {grossMargin > 50
                    ? "— strong buffer after fees and costs."
                    : grossMargin > 30
                    ? "— covers fees, limited cushion."
                    : "— tight. Factor in eBay fees and shipping carefully."}
                </div>
              )}
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#8896A5",
                  letterSpacing: 2,
                  marginBottom: 8,
                }}
              >
                EST. eBay REVENUE
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#0097FF",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <AnimatedNumber
                  value={totalEbayRevenue}
                  prefix="$"
                  decimals={0}
                />
              </div>
              <div style={{ fontSize: 11, color: "#4A5568", marginTop: 4 }}>
                top {MANIFEST_DATA.length} of {TOTAL_LINES} items analyzed
              </div>
              <div
                style={{
                  marginTop: 10,
                  padding: "8px 10px",
                  background: "rgba(245,197,24,0.06)",
                  border: "1px solid rgba(245,197,24,0.15)",
                  borderRadius: 6,
                  fontSize: 9,
                  color: "#8896A5",
                  lineHeight: 1.5,
                }}
              >
                ⚠ Partial analysis — demo shows top {MANIFEST_DATA.length}{" "}
                items. Full production analysis covers all {TOTAL_LINES} lines
                and {TOTAL_UNITS.toLocaleString()} units. Actual revenue
                potential is higher.
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#8896A5",
                  letterSpacing: 2,
                  marginBottom: 16,
                }}
              >
                LOT SCORING
              </div>
              <ProgressBar
                label={mode === "post" ? "PROFIT" : "HOT"}
                value={greenItems.length}
                max={activeItems.length}
                color="#00D4AA"
              />
              <ProgressBar
                label="FAIR"
                value={activeItems.filter((i) => i.score === "yellow").length}
                max={activeItems.length}
                color="#F5C518"
              />
              <ProgressBar
                label="LOW"
                value={activeItems.filter((i) => i.score === "red").length}
                max={activeItems.length}
                color="#FF4757"
              />
              <ProgressBar
                label="NO DATA"
                value={activeItems.filter((i) => i.score === "nodata").length}
                max={activeItems.length}
                color="#4A5568"
              />
            </div>
          </div>

          {mode === "pre" && (
            <div
              style={{
                background: "rgba(0,212,170,0.06)",
                border: "1px solid rgba(0,212,170,0.2)",
                borderRadius: 10,
                padding: "14px 20px",
                marginBottom: 24,
                fontSize: 12,
                color: "#8896A5",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "#00D4AA", fontWeight: 600 }}>
                PRE-BID:{" "}
              </span>
              {bidNum > 0
                ? `Current bid of $${bidNum.toLocaleString()} is ${
                    bidNum < maxRecommendedBid
                      ? `within safe range. Your recommended ceiling is $${Math.floor(
                          maxRecommendedBid
                        ).toLocaleString()} for a ${targetROINum}% ROI.`
                      : `ABOVE the recommended max of $${Math.floor(
                          maxRecommendedBid
                        ).toLocaleString()} for your target ROI. Profitability at risk.`
                  }`
                : `Estimated eBay revenue for top items: $${Math.floor(
                    totalEbayRevenue
                  ).toLocaleString()}. Enter the current bid to calculate your exact ROI, gross margin, and max recommended bid.`}
            </div>
          )}
          {mode === "during" && (
            <div
              style={{
                background: "rgba(245,197,24,0.06)",
                border: "1px solid rgba(245,197,24,0.2)",
                borderRadius: 10,
                padding: "14px 20px",
                marginBottom: 24,
                fontSize: 12,
                color: "#8896A5",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "#F5C518", fontWeight: 600 }}>
                LIVE BID:{" "}
              </span>
              Don't go above{" "}
              <span style={{ color: "#F5C518", fontWeight: 600 }}>
                ${Math.floor(maxRecommendedBid).toLocaleString()}
              </span>{" "}
              to hit your {targetROINum}% ROI target.
              {greenItems.length > 0 &&
                ` ${greenItems
                  .map((i) => i.brand || i.description.split(" ")[0])
                  .filter((name, index, arr) => arr.indexOf(name) === index)
                  .slice(0, 3)
                  .join(", ")} lead this lot's revenue potential.`}
            </div>
          )}
          {mode === "post" && (
            <div
              style={{
                background: "rgba(0,151,255,0.06)",
                border: "1px solid rgba(0,151,255,0.2)",
                borderRadius: 10,
                padding: "14px 20px",
                marginBottom: 24,
                fontSize: 12,
                color: "#8896A5",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "#0097FF", fontWeight: 600 }}>
                PURCHASED:{" "}
              </span>
              {greenItems.length > 0
                ? `List ${greenItems
                    .slice(0, 3)
                    .map((i) => i.brand || i.description.split(" ")[0])
                    .join(
                      ", "
                    )} first — highest sell-through based on eBay data. Bundle low-data items into mixed lots to move slow inventory quickly.`
                : "Prioritize items with the most eBay sold listings. Bundle low-data items into mixed lots to move slow inventory quickly."}
            </div>
          )}

          {/* View toggle */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              {[
                ["all", "ALL"],
                [
                  "green",
                  `${mode === "post" ? "PROFIT" : "HOT"} (${
                    greenItems.length
                  })`,
                ],
                [
                  "yellow",
                  `FAIR (${
                    activeItems.filter((i) => i.score === "yellow").length
                  })`,
                ],
                [
                  "red",
                  `LOW (${
                    activeItems.filter((i) => i.score === "red").length
                  })`,
                ],
                [
                  "nodata",
                  `NO DATA (${
                    activeItems.filter((i) => i.score === "nodata").length
                  })`,
                ],
              ].map(([f, label]) => {
                const activeColor =
                  f === "green"
                    ? "#00D4AA"
                    : f === "yellow"
                    ? "#F5C518"
                    : f === "red"
                    ? "#FF4757"
                    : f === "nodata"
                    ? "#4A5568"
                    : "#8896A5";
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className="filter-btn"
                    style={{
                      padding: "6px 16px",
                      borderRadius: 6,
                      border: `1px solid ${
                        filter === f ? activeColor : "rgba(255,255,255,0.08)"
                      }`,
                      background:
                        filter === f ? `${activeColor}18` : "transparent",
                      color: filter === f ? activeColor : "#8896A5",
                      fontSize: 10,
                      cursor: "pointer",
                      letterSpacing: 1,
                      transition: "all 0.2s",
                      fontFamily: "inherit",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            {uploadedFile && (
              <div style={{ display: "flex", gap: 4 }}>
                {[
                  ["analysis", "ANALYSIS"],
                  ["manifest", "MANIFEST VIEW"],
                ].map(([v, label]) => (
                  <button
                    key={v}
                    onClick={() => setManifestView(v === "manifest")}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 6,
                      fontSize: 10,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      letterSpacing: 1,
                      border: `1px solid ${
                        manifestView === (v === "manifest")
                          ? "#00D4AA"
                          : "rgba(255,255,255,0.08)"
                      }`,
                      background:
                        manifestView === (v === "manifest")
                          ? "rgba(0,212,170,0.12)"
                          : "transparent",
                      color:
                        manifestView === (v === "manifest")
                          ? "#00D4AA"
                          : "#8896A5",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* MANIFEST VIEW — shows original B-Stock columns + LotLens data */}
          {manifestView && uploadedFile ? (
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                overflowX: "auto",
              }}
            >
              {/* Header banner */}
              <div
                style={{
                  padding: "14px 20px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#00D4AA",
                      letterSpacing: 2,
                      marginBottom: 4,
                    }}
                  >
                    YOU UPLOADED THIS MANIFEST
                  </div>
                  <div
                    style={{ fontSize: 13, color: "#E8EDF2", fontWeight: 500 }}
                  >
                    {uploadedFile.name}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "#4A5568" }}>
                    Lot ID:{" "}
                    <span style={{ color: "#8896A5", fontFamily: "monospace" }}>
                      {activeItems[0]?.lotId || "—"}
                    </span>
                  </div>
                  <div style={{ fontSize: 11, color: "#4A5568", marginTop: 2 }}>
                    {activeItems.length} items ·{" "}
                    {activeItems
                      .reduce((s, i) => s + i.qty, 0)
                      .toLocaleString()}{" "}
                    units
                  </div>
                </div>
              </div>
              <div style={{ minWidth: 960 }}>
                {/* Column headers with visual separator */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "90px 110px 90px 1fr 80px 50px 85px 85px 4px 95px 95px 100px",
                    padding: "10px 16px",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    fontSize: 10,
                    color: "#4A5568",
                    letterSpacing: 1.5,
                  }}
                >
                  <span>LOT ID</span>
                  <span>ITEM #</span>
                  {hasPalletData && <span>PALLET</span>}
                  <span>DESCRIPTION</span>
                  <span>CONDITION</span>
                  <span style={{ textAlign: "center" }}>QTY</span>
                  <span style={{ textAlign: "right" }}>UNIT RETAIL</span>
                  <span style={{ textAlign: "right" }}>EXT. RETAIL</span>
                  <span></span>
                  <span style={{ textAlign: "right", color: "#00D4AA" }}>
                    eBay AVG
                  </span>
                  <span style={{ textAlign: "right", color: "#00D4AA" }}>
                    EST. REVENUE
                  </span>
                  <span style={{ textAlign: "center", color: "#00D4AA" }}>
                    SCORE
                  </span>
                </div>
                {/* Column group labels */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "370px 4px 275px",
                    padding: "5px 16px",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    style={{ fontSize: 9, color: "#2D3748", letterSpacing: 2 }}
                  >
                    ORIGINAL MANIFEST
                  </div>
                  <div></div>
                  <div
                    style={{
                      fontSize: 9,
                      color: "rgba(0,212,170,0.5)",
                      letterSpacing: 2,
                      paddingLeft: 180,
                    }}
                  >
                    LOTLENS OVERLAY
                  </div>
                </div>
                {filteredItems.map((item, i) => {
                  const cfg = SCORE_CONFIG[item.score];
                  const badgeLabel =
                    getScoreLabel(item.score, mode) || "NO DATA";
                  const revenueEst = item.ebayAvg * item.qty;
                  return (
                    <div
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "90px 110px 90px 1fr 80px 50px 85px 85px 4px 95px 95px 100px",
                        padding: "13px 16px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        background:
                          i % 2 === 0
                            ? "transparent"
                            : "rgba(255,255,255,0.01)",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          color: "#4A5568",
                          fontFamily: "monospace",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxWidth: "88px",
                        }}
                      >
                        {item.lotId || "—"}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#4A5568",
                          fontFamily: "monospace",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxWidth: "108px",
                        }}
                      >
                        {item.itemNumber || "—"}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#4A5568",
                          fontFamily: "monospace",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxWidth: "88px",
                        }}
                      >
                        {hasPalletData && (item.palletId || "–")}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            color: "#E8EDF2",
                            fontWeight: 500,
                            marginBottom: 2,
                          }}
                        >
                          {item.description}
                        </div>
                        {item.brand && (
                          <div style={{ fontSize: 11, color: "#8896A5" }}>
                            {item.brand}
                          </div>
                        )}
                        {item.condition && (
                          <div style={{ fontSize: 10, color: "#4A5568" }}>
                            {item.condition.replace(/_/g, " ")}
                          </div>
                        )}
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {item.condition && (
                          <span
                            style={{
                              fontSize: 10,
                              padding: "2px 6px",
                              borderRadius: 4,
                              fontWeight: 600,
                              letterSpacing: 0.8,
                              background: item.condition.includes("NEW")
                                ? "rgba(0,212,170,0.15)"
                                : item.condition.includes("GOOD")
                                ? "rgba(245,197,24,0.15)"
                                : "rgba(255,71,87,0.15)",
                              color: item.condition.includes("NEW")
                                ? "#00D4AA"
                                : item.condition.includes("GOOD")
                                ? "#F5C518"
                                : "#FF4757",
                            }}
                          >
                            {item.condition.replace(/_/g, " ")}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          fontSize: 13,
                          color: "#8896A5",
                        }}
                      >
                        {item.qty}
                      </div>
                      <div
                        style={{
                          textAlign: "right",
                          fontSize: 13,
                          color: "#8896A5",
                        }}
                      >
                        ${item.unitRetail.toFixed(2)}
                      </div>
                      <div
                        style={{
                          textAlign: "right",
                          fontSize: 13,
                          color: "#8896A5",
                        }}
                      >
                        ${item.extRetail.toFixed(2)}
                      </div>
                      {/* Visual separator */}
                      <div
                        style={{
                          width: 1,
                          background: "rgba(0,212,170,0.15)",
                          margin: "0 4px",
                          alignSelf: "stretch",
                        }}
                      />
                      <div
                        style={{
                          textAlign: "right",
                          fontSize: 14,
                          fontWeight: 600,
                          color: item.ebayAvg > 0 ? "#E8EDF2" : "#4A5568",
                        }}
                      >
                        {item.ebayAvg > 0 ? `$${item.ebayAvg.toFixed(2)}` : "–"}
                      </div>
                      <div
                        style={{
                          textAlign: "right",
                          fontSize: 13,
                          color: revenueEst > 0 ? "#00D4AA" : "#4A5568",
                        }}
                      >
                        {revenueEst > 0 ? `$${revenueEst.toFixed(0)}` : "–"}
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <span
                          style={{
                            padding: "3px 8px",
                            borderRadius: 4,
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: 1,
                            whiteSpace: "nowrap",
                            color: cfg.color,
                            background: cfg.bg,
                            border: `1px solid ${cfg.border}`,
                          }}
                        >
                          {badgeLabel}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                style={{
                  padding: "10px 16px",
                  fontSize: 11,
                  color: "#4A5568",
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                Showing {filteredItems.length} of {activeItems.length} items ·
                Original manifest + LotLens pricing overlay
              </div>
            </div>
          ) : (
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 60px 80px 90px 90px 80px 80px",
                  padding: "12px 20px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  fontSize: 10,
                  color: "#8896A5",
                  letterSpacing: 1.5,
                }}
              >
                <span>ITEM</span>
                <span style={{ textAlign: "center" }}>QTY</span>
                <span style={{ textAlign: "right" }}>RETAIL</span>
                <span style={{ textAlign: "right" }}>eBay AVG</span>
                <span style={{ textAlign: "right" }}>EST. REVENUE</span>
                <span style={{ textAlign: "right" }}>SOLD</span>
                <span style={{ textAlign: "center" }}>SCORE</span>
              </div>
              {filteredItems.map((item, i) => {
                const cfg = SCORE_CONFIG[item.score];
                const revenueEst = item.ebayAvg * item.qty;
                const badgeLabel = getScoreLabel(item.score, mode) || "NO DATA";
                return (
                  <div
                    key={i}
                    className="item-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 60px 80px 90px 90px 80px 80px",
                      padding: "16px 20px",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      background:
                        i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                      transition: "background 0.15s",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "#E8EDF2",
                          marginBottom: 3,
                          fontWeight: 500,
                        }}
                      >
                        {item.brand || "—"}
                      </div>
                      <div style={{ fontSize: 12, color: "#8896A5" }}>
                        {item.description}
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: 13,
                        color: "#8896A5",
                      }}
                    >
                      {item.qty}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: 13,
                        color: "#8896A5",
                      }}
                    >
                      ${item.unitRetail.toFixed(2)}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#E8EDF2",
                      }}
                    >
                      ${item.ebayAvg.toFixed(2)}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: 13,
                        color: "#00D4AA",
                      }}
                    >
                      ${revenueEst.toFixed(0)}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: 12,
                        color: "#8896A5",
                      }}
                    >
                      {item.ebaySold} sold
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <span
                        style={{
                          padding: "4px 10px",
                          borderRadius: 4,
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: 1,
                          color: cfg.color,
                          background: cfg.bg,
                          border: `1px solid ${cfg.border}`,
                        }}
                      >
                        {badgeLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div
            style={{
              marginTop: 16,
              fontSize: 11,
              color: "#4A5568",
              textAlign: "right",
            }}
          >
            * eBay prices based on Sold Listings — last 90 days · Live API in
            production
          </div>
        </div>
      )}
    </div>
  );
}
