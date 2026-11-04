import type { Metadata } from "next";
import Link from "next/link";
import { VERSION_POLITICA } from "./version";

export const metadata: Metadata = {
  title: "Política de privacidad | Iglesia Maranatha Montería Central",
  description: "Cómo tratamos los datos que nos compartes por medio de este sitio y cómo ejercer tus derechos.",
};

const TITULO = "pt-3 text-2xl font-bold text-neutral-950";
const LISTA = "list-disc space-y-2 pl-6";
const ENLACE = "underline";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-16 sm:px-6">
      <article className="mx-auto max-w-2xl space-y-5 text-neutral-800">
        <Link href="/" className="inline-block py-3 text-sm font-semibold underline">
          Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-950">Política de privacidad</h1>
        <p className="text-sm text-neutral-600">Versión {VERSION_POLITICA}. Vigente desde el 4 de noviembre de 2026.</p>
        <p>
          Esta política explica, en palabras sencillas, qué hacemos con los datos que nos compartes por
          medio de este sitio, según la Ley 1581 de 2012 y el Decreto 1377 de 2013.
        </p>

        <h2 className={TITULO}>Quién es el responsable</h2>
        <ul className={LISTA}>
          <li>Iglesia de Avivamiento Mundial Maranatha Montería</li>
          <li>Resolución 0750 del 25 de abril de 2025 del Ministerio del Interior</li>
          <li>Domicilio y dirección: calle 30 # 10-109, Centro, Montería, Córdoba, Colombia</li>
          <li>
            Correo:{" "}
            <a className={ENLACE} href="mailto:contacto@maranathamc.com">contacto@maranathamc.com</a>
          </li>
          <li>
            Teléfono y WhatsApp: <a className={ENLACE} href="tel:+573114710669">311 471 0669</a>
          </li>
        </ul>

        <h2 className={TITULO}>Qué datos recibimos</h2>
        <p>
          Este sitio no guarda las peticiones de oración. Al enviar el formulario se abre WhatsApp con
          tu mensaje, y solo nos llega si tú decides enviarlo. En ese caso recibimos tu nombre, si lo
          escribes, tu número de WhatsApp y lo que nos cuentes.
        </p>

        <h2 className={TITULO}>Datos sensibles</h2>
        <p>
          Una petición de oración puede revelar tus creencias religiosas, tu salud o tu vida familiar.
          La ley los llama datos sensibles.{" "}
          <strong>No estás obligado a autorizar su tratamiento ni a compartirlos</strong>, y no te
          negaremos ninguna actividad de la iglesia por no hacerlo. Solo los tratamos con tu
          autorización explícita, que das al marcar la casilla del formulario y enviar el mensaje.
        </p>

        <h2 className={TITULO}>Para qué los usamos</h2>
        <ul className={LISTA}>
          <li>Para orar por ti.</li>
          <li>Para responderte y acompañarte, si lo necesitas.</li>
        </ul>
        <p>
          No los vendemos, no los usamos para publicidad y no los entregamos a terceros sin tu
          autorización, salvo que una autoridad competente lo exija conforme a la ley.
        </p>

        <h2 className={TITULO}>WhatsApp</h2>
        <p>
          El mensaje viaja por WhatsApp, un servicio de Meta que no pertenece a la iglesia. Meta trata
          tus datos según sus propias condiciones y puede hacerlo fuera de Colombia. Si prefieres no
          usarlo, puedes escribirnos al correo o visitarnos.
        </p>

        <h2 className={TITULO}>Niños, niñas y adolescentes</h2>
        <p>
          Si eres menor de edad, pídele a tu madre, tu padre o tu representante legal que nos escriba:
          es quien puede dar la autorización, escuchando antes tu opinión.
        </p>

        <h2 className={TITULO}>Cuánto tiempo los conservamos</h2>
        <p>
          Conservamos tu mensaje solo el tiempo razonable y necesario para orar por ti y responderte, y
          lo suprimimos cuando esa finalidad se cumple o cuando nos lo pides, salvo que una norma o un
          deber legal nos obligue a conservarlo. Esta base de datos estará vigente mientras la iglesia
          desarrolle sus actividades.
        </p>

        <h2 className={TITULO}>Tus derechos</h2>
        <ul className={LISTA}>
          <li>Conocer, actualizar y rectificar tus datos.</li>
          <li>Pedir prueba de la autorización que nos diste.</li>
          <li>Saber, si lo pides, qué uso les hemos dado.</li>
          <li>Revocar tu autorización o pedir que eliminemos tus datos.</li>
          <li>Acceder a ellos gratis.</li>
          <li>
            Presentar quejas ante la Superintendencia de Industria y Comercio (SIC), después de haber
            hecho tu consulta o reclamo ante nosotros.
          </li>
        </ul>

        <h2 className={TITULO}>Cómo ejercerlos</h2>
        <p>
          La administración de la iglesia atiende estas solicitudes. Escríbenos a{" "}
          <a className={ENLACE} href="mailto:contacto@maranathamc.com">contacto@maranathamc.com</a>, por
          WhatsApp al 311 471 0669 o por escrito a nuestra dirección.
        </p>
        <ul className={LISTA}>
          <li>
            <strong>Consultas:</strong> te respondemos en máximo 10 días hábiles desde que la recibimos.
            Si no podemos, te avisamos el motivo y la nueva fecha, que no pasará de 5 días hábiles más.
          </li>
          <li>
            <strong>Reclamos</strong> (corregir, actualizar, suprimir, revocar o avisar de un
            incumplimiento): incluye tu identificación, los hechos, tu dirección y los documentos que
            quieras aportar. Si falta algo, te lo pedimos en los 5 días siguientes; si pasan 2 meses sin
            que lo envíes, entendemos que desististe. Te respondemos en máximo 15 días hábiles, y si no
            podemos, te avisamos el motivo y la nueva fecha, que no pasará de 8 días hábiles más.
          </li>
        </ul>

        <h2 className={TITULO}>Cambios a esta política</h2>
        <p>
          Si cambiamos algo importante, lo publicaremos en esta página y actualizaremos la versión y la
          fecha de arriba antes de aplicar el cambio.
        </p>
      </article>
    </main>
  );
}
