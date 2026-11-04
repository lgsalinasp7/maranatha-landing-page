"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

// Datos que se comparten en toda la portada. El horario y el teléfono viven solo aquí.
const WHATSAPP = "573114710669";
const INSTAGRAM = "https://www.instagram.com/maranathamc/";
const POIMENSOFT = "https://maranathamc.poimensoft.com";
const MAPA =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Calle 30 # 10-109, Montería, Córdoba");
const DOMINGO = "10:00 a. m.";
const MARTES = "6:30 p. m.";
const JUEVES = "7:00 p. m.";

const LOGO = "/images/logoMaranatha.png";
const RIO = "/images/Monteria-parnoamica-rio-sinu.jpeg";

function enlaceWhatsApp(mensaje: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

const DIAS = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"] as const;
type Dia = (typeof DIAS)[number];

const MENSAJE_DIA: Partial<Record<Dia, string>> = {
  MAR: `Martes: Escuela de oración, ${MARTES}`,
  JUE: `Jueves: Casas Amar, ${JUEVES}`,
  DOM: `Domingo: Servicio dominical, ${DOMINGO}`,
};
const PROXIMA: Partial<Record<Dia, string>> = {
  LUN: `martes, ${MARTES}`,
  "MIÉ": `jueves, ${JUEVES}`,
  VIE: `domingo, ${DOMINGO}`,
  "SÁB": `domingo, ${DOMINGO}`,
};

/** Día de la semana y mes según la hora de Colombia, sin importar dónde esté el visitante. */
function hoyEnColombia() {
  const ahora = new Date();
  const zona = { timeZone: "America/Bogota" } as const;
  const semana = new Intl.DateTimeFormat("en-US", { ...zona, weekday: "short" }).format(ahora);
  const indices: Record<string, Dia> = {
    Mon: "LUN", Tue: "MAR", Wed: "MIÉ", Thu: "JUE", Fri: "VIE", Sat: "SÁB", Sun: "DOM",
  };
  const mes = new Intl.DateTimeFormat("es-CO", { ...zona, month: "long" }).format(ahora);
  return { dia: indices[semana] ?? ("MAR" as Dia), mes: mes.toUpperCase() };
}

function Flecha() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12l8-8M6 4h6v6" />
    </svg>
  );
}

function Chevron({ haciaDerecha }: { haciaDerecha?: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={haciaDerecha ? "M6 3l5 5-5 5" : "M10 3L5 8l5 5"} />
    </svg>
  );
}

function Relieve({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 720 340" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M20 300C170 240 240 330 380 250S610 140 710 190" />
      <path d="M60 330C200 270 270 350 410 280S630 180 720 225" />
      <path d="M0 260C150 200 220 290 350 215S590 95 700 150" />
      <path d="M180 10C260 90 400 70 480 120S640 190 720 120" />
      <path d="M240 0C310 60 430 40 510 90S660 150 720 85" />
    </svg>
  );
}

function Marca() {
  return (
    <>
      <Image src={LOGO} alt="" width={66} height={66} />
      <span>
        <b>Maranatha</b>
        <span>Montería Central</span>
      </span>
    </>
  );
}

function Hero({ pausado, onPausar }: { pausado: boolean; onPausar: () => void }) {
  const [menu, setMenu] = useState(false);
  const [videoFallo, setVideoFallo] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (pausado) {
      v.pause();
    } else {
      v.play().catch(() => {
        // Si el navegador no deja reproducir, se queda la foto de fondo.
      });
    }
  }, [pausado]);

  useEffect(() => {
    if (!menu) return;
    const cerrar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", cerrar);
    return () => window.removeEventListener("keydown", cerrar);
  }, [menu]);

  return (
    <section className="hero">
      <Image className="hero-img" src={RIO} alt="Vista aérea de Montería y el río Sinú" fill priority sizes="100vw" />
      {!videoFallo && (
        <video
          ref={video}
          className="hero-video"
          src="/video/bacw1.mp4"
          poster={RIO}
          loop
          muted
          playsInline
          aria-hidden="true"
          onError={() => setVideoFallo(true)}
        />
      )}
      <div className="hero-veil" />
      <div className="wrap hero-in">
        <header className="top">
          <a className="brand" href="#inicio" id="inicio">
            <Marca />
          </a>
          <button
            type="button"
            className={`menu-btn ${menu ? "on" : ""}`}
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-label={menu ? "Cerrar el menú" : "Abrir el menú"}
          >
            Menú <span className="tog"><i /></span>
          </button>
        </header>
        {menu && (
          <nav className="panel" aria-label="Menú principal">
            <div className="panel-top">
              <Image src={LOGO} alt="" width={40} height={40} />
              <button type="button" className="x" onClick={() => setMenu(false)} aria-label="Cerrar menú">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4l12 12M16 4L4 16" />
                </svg>
              </button>
            </div>
            <a className="cur" href="#inicio" onClick={() => setMenu(false)}>Inicio</a>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/nosotros#pastores">Cobertura</Link>
            <Link href="/reflexiones">Reflexiones</Link>
            <hr />
            <a className="ext" href={POIMENSOFT}>PoimenSoft <Flecha /></a>
          </nav>
        )}
        <div className="hero-txt">
          <h1>Somos una iglesia de fe, amor y poder.</h1>
          <p className="sub">Más que una iglesia, somos una familia.</p>
          <div className="hero-cta">
            <a className="btn btn-white" href="#vision">
              Conócenos
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 8h12M9 3l5 5-5 5" />
              </svg>
            </a>
            <a className="btn btn-ghost" href={POIMENSOFT}>PoimenSoft <Flecha /></a>
          </div>
        </div>
        <div className="hero-foot">
          <div className="play">
            <button
              type="button"
              onClick={onPausar}
              aria-label={pausado ? "Reanudar el movimiento" : "Pausar el movimiento"}
            >
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d={pausado ? "M4 2l10 6-10 6z" : "M3 2h4v12H3zM9 2h4v12H9z"} />
              </svg>
            </button>
            <span />
          </div>
          <div className="place">
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 1a5 5 0 00-5 5c0 3.600 5 9 5 9s5-5.400 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            Río Sinú, Montería
          </div>
        </div>
      </div>
    </section>
  );
}

function Pin({ tono, sel, x, y }: { tono: "m" | "p" | "t"; sel: boolean; x: number; y: number }) {
  return (
    <g className={`pg pg-${tono} ${sel ? "sel" : ""}`} transform={`translate(${x} ${y})`}>
      <circle className="m-halo" cx="0" cy="-30" r="30" />
      <ellipse className="m-base" cx="0" cy="2" rx="13" ry="4" />
      <path className="m-pin" d="M0 0C-4 -10 -18 -19 -18 -32A18 18 0 1 1 18 -32C18 -19 4 -10 0 0Z" />
      <circle className="m-eye" cx="0" cy="-32" r="6.5" />
    </g>
  );
}

const ZONAS = [
  { id: "m", nombre: "Montería" },
  { id: "p", nombre: "Planeta Rica" },
  { id: "t", nombre: "Tierralta" },
] as const;
type Zona = (typeof ZONAS)[number]["id"];

const PASOS = [
  { n: "01", t: "Ganar", d: "Alcanzar con el evangelio a toda persona." },
  { n: "02", t: "Afirmar", d: "Establecer en la Palabra familias firmes." },
  { n: "03", t: "Discipular", d: "Formar discípulos que vivan el Reino de Dios." },
  { n: "04", t: "Enviar", d: "Levantar y enviar líderes a cada lugar." },
];

function Vision() {
  const [zona, setZona] = useState<Zona>("m");
  const sel = (z: Zona) => (zona === z ? "sel" : "");

  return (
    <section className="vision" id="vision">
      <Relieve className="contour" />
      <div className="wrap">
        <div className="vis-head">
          <div>
            <p className="eyebrow">Nuestra visión</p>
            <h2>Montería, el comienzo.<br />Córdoba, nuestra misión.</h2>
          </div>
          <div>
            <span className="dash" />
            <p>Una iglesia que alcanza ciudades, restaura familias y transforma regiones con el evangelio de Jesucristo.</p>
          </div>
        </div>
        <div className="vis-card">
          <div className="vis-map">
            <div className="tit">Córdoba</div>
            <div className="map">
              <svg viewBox="0 0 520 420" role="img" aria-label="Mapa de Córdoba con tres puntos: Montería, Planeta Rica y Tierralta">
                <path className="m-land" d="M196 18L232 12L262 30L296 34L318 62L352 72L346 104L372 122L358 148L392 170L436 176L468 206L446 234L404 240L380 272L352 282L336 318L296 340L268 382L226 404L186 388L150 398L122 366L132 326L108 292L130 252L114 216L84 196L108 160L138 146L130 110L160 84L158 50Z" />
                <path className="m-line" d="M150 92C196 76 250 92 316 84" />
                <path className="m-line" d="M124 172C196 146 276 182 372 158" />
                <path className="m-line" d="M112 236C188 208 288 252 440 208" />
                <path className="m-line" d="M126 306C196 280 276 318 384 268" />
                <path className="m-line" d="M140 366C188 344 244 372 306 332" />
                <path className="m-arc" d="M178 104C276 44 440 62 546 196" />
                <circle className="m-end" cx="546" cy="196" r="4" />
                <Pin tono="m" sel={zona === "m"} x={178} y={148} />
                <text className={`m-lbl ${sel("m")}`} x="140" y="180">Montería</text>
                <Pin tono="p" sel={zona === "p"} x={300} y={232} />
                <text className={`m-lbl ${sel("p")}`} x="328" y="222">Planeta Rica</text>
                <Pin tono="t" sel={zona === "t"} x={204} y={332} />
                <text className={`m-lbl ${sel("t")}`} x="232" y="326">Tierralta</text>
              </svg>
            </div>
            <div className="tabs">
              {ZONAS.map((z) => (
                <button
                  key={z.id}
                  type="button"
                  className={`tab ${sel(z.id)}`}
                  aria-pressed={zona === z.id}
                  onClick={() => setZona(z.id)}
                >
                  {z.nombre}
                </button>
              ))}
            </div>
          </div>
          <div className="vis-art">
            <Image src={RIO} alt="" fill sizes="(max-width: 980px) 100vw, 650px" />
            <div className="vis-copy">
              <h3>Visión en acción</h3>
              <p>Ir por toda Córdoba y predicar el evangelio, llevando la Palabra por medio de las Casas Amar para establecer familias restauradas que manifiesten el Reino de Dios.</p>
            </div>
          </div>
        </div>
        <ol className="steps">
          {PASOS.map((p, i) => (
            <li className="step" key={p.n}>
              {i < PASOS.length - 1 && (
                <svg className="wave" viewBox="0 0 200 36" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 20C34 -4 62 -4 100 18S166 40 200 16" vectorEffect="non-scaling-stroke" />
                </svg>
              )}
              <span className="num">{p.n}</span>
              <b>{p.t}</b>
              <span className="txt">{p.d}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Multitud con manos levantadas: [x, y, brazos]. Brazos: 1 izquierdo, 2 derecho, 3 ambos.
const GENTE = [[28, 62, 2], [96, 84, 1], [166, 56, 3], [238, 90, 0], [306, 66, 2], [378, 88, 1], [446, 58, 3], [516, 84, 2], [586, 60, 1], [640, 88, 0]];
const CUERPOS = GENTE.map(([x, y]) => `M${x} ${y}a13 13 0 1 0 .01 0zM${x - 32} 190C${x - 32} ${y + 50} ${x - 17} ${y + 32} ${x} ${y + 32}S${x + 32} ${y + 50} ${x + 32} 190z`).join("");
const BRAZOS = GENTE.map(([x, y, b]) =>
  (b & 1 ? `M${x - 22} ${y + 50}L${x - 37} ${y - 22}` : "") + (b & 2 ? `M${x + 22} ${y + 50}L${x + 35} ${y - 26}` : ""),
).join("");

function Semana() {
  const [dia, setDia] = useState<Dia>("MAR");

  useEffect(() => {
    setDia(hoyEnColombia().dia);
  }, []);

  const vivo = (d: Dia) => (dia === d ? "live" : "");
  const mensaje = MENSAJE_DIA[dia] ?? `Sin actividad general este día. La próxima: ${PROXIMA[dia]}`;

  return (
    <section className="week" id="semana">
      <Relieve className="deco" />
      <div className="wrap">
        <div className="week-head">
          <div>
            <p className="eyebrow">Actividades semanales</p>
            <h2>Tu semana en familia.</h2>
          </div>
          <div className="week-side">
            <div className="days" role="group" aria-label="Elige un día">
              {DIAS.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`day ${dia === d ? "sel" : ""}`}
                  aria-pressed={dia === d}
                  onClick={() => setDia(d)}
                >
                  {d}
                </button>
              ))}
            </div>
            <p className="week-msg" aria-live="polite">{mensaje}</p>
          </div>
        </div>
        <div className="bento">
          <article className={`tile big ${vivo("DOM")}`}>
            <div className="stars" />
            <div className="beam" />
            <Image className="dove" src="/images/flying_dove.png" alt="" width={640} height={640} sizes="520px" />
            <svg className="crowd" viewBox="0 0 640 190" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
              <path d={BRAZOS} fill="none" stroke="#030916" strokeWidth="10" strokeLinecap="round" />
              <path d={CUERPOS} fill="#030916" />
            </svg>
            <div className="scrim" />
            <div className="tile-in">
              <h3>Servicio dominical</h3>
              <p>Domingo · {DOMINGO}</p>
              <a className="btn btn-white" href={MAPA} target="_blank" rel="noopener noreferrer">Quiero asistir <Flecha /></a>
            </div>
          </article>
          <article className={`tile small cool ${vivo("MAR")}`}>
            <Image className="i-hands" src="/images/praying_hands.png" alt="" width={480} height={480} sizes="280px" />
            <div className="tile-in">
              <h3>Escuela de oración</h3>
              <p>Martes · {MARTES}</p>
              <Link className="btn btn-ghost" href="/nosotros#horarios">Ver horario <Flecha /></Link>
            </div>
          </article>
          <article className={`tile small warm ${vivo("JUE")}`}>
            <Image className="i-book" src="/images/open_bible.png" alt="" width={480} height={480} sizes="460px" />
            <div className="tile-in">
              <h3>Casas Amar</h3>
              <p>Jueves · {JUEVES}</p>
              <a
                className="btn btn-ghost"
                href={enlaceWhatsApp("¡Hola! Quiero encontrar una Casa Amar cerca de mí.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Encuentra tu casa <Flecha />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function IconoCasa() {
  return (
    <svg className="ico" viewBox="0 0 120 96" aria-hidden="true">
      <defs>
        <linearGradient id="mmRoof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff9a3c" />
          <stop offset="1" stopColor="#d9651a" />
        </linearGradient>
      </defs>
      <path d="M60 4L4 48l9 10L60 21l47 37 9-10L92 29V10H78v8z" fill="url(#mmRoof)" />
      <path d="M22 58V92H98V58" fill="none" stroke="url(#mmRoof)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <g fill="#8a3f12">
        <circle cx="46" cy="47" r="6.5" />
        <path d="M36 92V68a10 10 0 0120 0v24z" />
        <circle cx="74" cy="47" r="6.5" />
        <path d="M64 92V68a10 10 0 0120 0v24z" />
      </g>
      <g fill="#c25a18">
        <circle cx="60" cy="63" r="5" />
        <path d="M52 92V81a8 8 0 0116 0v11z" />
      </g>
    </svg>
  );
}

function Hojas() {
  return (
    <svg className="leafs" viewBox="0 0 70 220" fill="currentColor" aria-hidden="true">
      <path d="M8 216C20 160 22 110 14 40" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M18 170c14-4 26-16 28-32-16 2-28 14-28 32z" />
      <path d="M20 130c12-4 22-14 24-28-14 2-24 12-24 28z" />
      <path d="M18 92c11-3 20-12 22-25-13 1-22 11-22 25z" />
      <path d="M16 150C6 144 0 132 2 120c10 4 15 16 14 30z" />
      <path d="M18 108C8 102 2 92 4 80c10 4 15 14 14 28z" />
    </svg>
  );
}

function Brote() {
  return (
    <svg className="sprout" viewBox="0 0 220 240" aria-hidden="true">
      <defs>
        <linearGradient id="mmLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c4f564" />
          <stop offset="1" stopColor="#2f9e3f" />
        </linearGradient>
        <radialGradient id="mmGlow">
          <stop offset="0" stopColor="#9dff6a" stopOpacity=".5" />
          <stop offset="1" stopColor="#9dff6a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="112" cy="98" r="94" fill="url(#mmGlow)" />
      <path d="M110 178C113 142 107 118 112 88" fill="none" stroke="#83d84c" strokeWidth="6" strokeLinecap="round" />
      <path d="M110 122C84 120 46 102 26 60C70 54 104 80 110 122Z" fill="url(#mmLeaf)" />
      <path d="M112 92C116 58 148 26 202 18C200 62 160 96 112 92Z" fill="url(#mmLeaf)" />
      <path d="M104 114C84 100 62 84 40 68M120 84C142 66 164 46 190 28" fill="none" stroke="rgba(20,90,40,.55)" strokeWidth="1.6" />
      <path d="M0 240C18 192 60 176 110 172S198 190 220 240Z" fill="#17100b" />
      <circle cx="58" cy="206" r="6" fill="#2b1d13" />
      <circle cx="96" cy="196" r="4" fill="#3a2819" />
      <circle cx="142" cy="208" r="7" fill="#2b1d13" />
      <circle cx="178" cy="218" r="4" fill="#3a2819" />
      <circle cx="40" cy="40" r="2" fill="#e5ffb5" />
      <circle cx="176" cy="84" r="2.4" fill="#e5ffb5" />
      <circle cx="82" cy="28" r="1.6" fill="#e5ffb5" />
    </svg>
  );
}

const ANUNCIOS = [
  {
    tono: "t-casa",
    arriba: "Una casa",
    titulo: "Para ti",
    etiqueta: "Casas Amar",
    enlace: enlaceWhatsApp("¡Hola! Quiero encontrar una Casa Amar cerca de mí."),
    externo: true,
  },
  {
    tono: "t-juntos",
    arriba: "Crecemos",
    titulo: "Juntos",
    etiqueta: "Formación y discipulado",
    enlace: "/nosotros",
    externo: false,
  },
  {
    tono: "t-orar",
    arriba: "Tiempo",
    titulo: "De orar",
    etiqueta: "",
    enlace: "#escuchar",
    externo: false,
  },
];

function Anuncios() {
  const [actual, setActual] = useState(1);
  const [mes, setMes] = useState("");

  useEffect(() => {
    setMes(hoyEnColombia().mes);
  }, []);

  const total = ANUNCIOS.length;
  const anterior = () => setActual((a) => (a + total - 1) % total);
  const siguiente = () => setActual((a) => (a + 1) % total);
  const lugares = [
    { pos: "side l", i: (actual + total - 1) % total, click: anterior },
    { pos: "mid", i: actual, click: undefined },
    { pos: "side r", i: (actual + 1) % total, click: siguiente },
  ];
  const central = ANUNCIOS[actual];

  return (
    <section className="ann" id="anuncios">
      <Relieve className="deco a" />
      <Relieve className="deco b" />
      <div className="wrap">
        <div className="ann-head">
          <div>
            <p className="eyebrow">Anuncios del mes</p>
            <h2>Este mes en Maranatha.</h2>
          </div>
          <div className="month"><b>{mes}</b></div>
        </div>
        <div className="car">
          {lugares.map(({ pos, i, click }) => {
            const a = ANUNCIOS[i];
            return (
              <article className={`card ${pos} ${a.tono}`} key={a.tono} onClick={click}>
                {a.tono === "t-casa" && <Hojas />}
                {a.tono === "t-orar" && (
                  <Image className="bg" src="/images/praying_hands.png" alt="" width={480} height={480} sizes="320px" />
                )}
                {a.tono === "t-juntos" && <Brote />}
                <div className="c-in">
                  {a.tono === "t-casa" && <IconoCasa />}
                  <span className="c-top">{a.arriba}</span>
                  <strong>{a.titulo}</strong>
                  <span className="c-tag">{a.etiqueta}</span>
                </div>
              </article>
            );
          })}
        </div>
        <div className="car-foot">
          {central.externo ? (
            <a className="btn see" href={central.enlace} target="_blank" rel="noopener noreferrer">Ver anuncio <Flecha /></a>
          ) : (
            <Link className="btn see" href={central.enlace}>Ver anuncio <Flecha /></Link>
          )}
          <span className="count">{`0${((actual + 2) % total) + 1} / 0${total}`}</span>
          <span className="pair">
            <button type="button" className="mini" onClick={anterior} aria-label="Anuncio anterior"><Chevron /></button>
            <button type="button" className="mini dark" onClick={siguiente} aria-label="Anuncio siguiente"><Chevron haciaDerecha /></button>
          </span>
        </div>
      </div>
    </section>
  );
}

function Oracion() {
  const [enlace, setEnlace] = useState<string | null>(null);

  // La petición no se guarda en el sitio: se abre WhatsApp con el mensaje listo para enviar.
  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const nombre = String(datos.get("nombre") ?? "").trim();
    const peticion = String(datos.get("peticion") ?? "").trim();
    const saludo = nombre ? `¡Hola! Soy ${nombre}.` : "¡Hola!";
    const url = enlaceWhatsApp(`${saludo} Quiero dejar una petición de oración: ${peticion}`);
    setEnlace(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="pray" id="escuchar">
      <Relieve className="deco" />
      <div className="wrap">
        <form className="pray-box" onSubmit={enviar}>
          <div className="pray-t">
            <span className="dash" />
            <h2>Queremos escucharte.</h2>
            <p>Déjanos tu petición de oración.</p>
          </div>
          <div className="fields">
            <label className="f f-nombre full" htmlFor="mm-nombre">
              <span className="sr">Nombre</span>
              <svg className="fi" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <circle cx="10" cy="6" r="4" />
                <path d="M2.5 18c0-4.200 3.400-6.500 7.500-6.500s7.500 2.300 7.500 6.500z" />
              </svg>
              <input id="mm-nombre" name="nombre" type="text" autoComplete="name" placeholder="Nombre" />
            </label>
            <label className="f full" htmlFor="mm-pet">
              <span className="sr">¿Cómo podemos orar por ti?</span>
              <svg className="fi" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 3c-4.400 0-8 2.900-8 6.500 0 1.800.9 3.400 2.300 4.600L3.500 17.500l3.700-1.500c.9.3 1.800.4 2.800.4 4.400 0 8-2.900 8-6.900S14.400 3 10 3z" />
              </svg>
              <textarea id="mm-pet" name="peticion" required placeholder="¿Cómo podemos orar por ti?" />
            </label>
          </div>
          <div className="send">
            <button type="submit" className="btn btn-send">Enviar por WhatsApp <Flecha /></button>
            <label className="chk" htmlFor="mm-ok">
              <input id="mm-ok" type="checkbox" required />
              <span>Acepto la <Link href="/privacidad">política de privacidad</Link></span>
            </label>
            {enlace && (
              <p className="demo" role="status">
                Abrimos WhatsApp con tu petición: solo falta que la envíes.{" "}
                <a href={enlace} target="_blank" rel="noopener noreferrer">¿No se abrió? Ábrelo aquí.</a>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <a className="brand" href="#inicio"><Marca /></a>
        <div className="foot-links">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <svg className="ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.200" cy="6.800" r=".6" fill="currentColor" />
            </svg>
            @maranathamc
          </a>
          <span className="foot-sep" aria-hidden="true" />
          <a href={POIMENSOFT}>PoimenSoft <Flecha /></a>
        </div>
        <address>Centro, calle 30 # 10-109<br />Montería, Córdoba</address>
        <small>Desarrollado por <b>KaledSoft</b></small>
      </div>
    </footer>
  );
}

export default function Portada() {
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPausado(true);
  }, []);

  return (
    <div className={`mm ${manrope.variable} ${pausado ? "paused" : ""}`}>
      <Hero pausado={pausado} onPausar={() => setPausado(!pausado)} />
      <main>
        <Vision />
        <Semana />
        <Anuncios />
        <Oracion />
      </main>
      <Pie />
    </div>
  );
}
