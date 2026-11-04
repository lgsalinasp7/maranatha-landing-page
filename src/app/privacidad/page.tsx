import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad | Iglesia Maranatha Montería Central",
  description: "Cómo tratamos los datos que nos compartes por medio de este sitio.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-16 sm:px-6">
      <article className="mx-auto max-w-2xl space-y-5 text-neutral-800">
        <Link href="/" className="inline-block py-3 text-sm font-semibold underline">
          Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-950">Política de privacidad</h1>
        <p>
          Responsable: Iglesia Maranatha Montería Central, calle 30 # 10-109, Centro, Montería,
          Córdoba. Contacto:{" "}
          <a className="underline" href="mailto:contacto@maranathamc.com">contacto@maranathamc.com</a>.
        </p>
        <h2 className="pt-3 text-2xl font-bold text-neutral-950">Qué datos recibimos</h2>
        <p>
          Este sitio no guarda las peticiones de oración. Al enviar el formulario se abre WhatsApp con
          tu mensaje, y solo nos llega si tú decides enviarlo. Recibiremos tu nombre, si lo escribes,
          tu número de WhatsApp y lo que nos cuentes.
        </p>
        <h2 className="pt-3 text-2xl font-bold text-neutral-950">Para qué los usamos</h2>
        <p>
          Para orar por ti y responderte. Una petición de oración puede revelar creencias religiosas o
          temas de salud, que son datos sensibles: no estás obligado a compartirlos, y no los
          vendemos ni los usamos para publicidad.
        </p>
        <h2 className="pt-3 text-2xl font-bold text-neutral-950">Tus derechos</h2>
        <p>
          Según la Ley 1581 de 2012 puedes conocer, actualizar, rectificar o pedir que eliminemos tus
          datos, y revocar tu autorización, escribiendo al correo de contacto. WhatsApp trata tus datos
          según sus propias condiciones.
        </p>
      </article>
    </main>
  );
}
