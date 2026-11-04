import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quiénes Somos | Iglesia Cristiana Maranatha Montería Central",
  description:
    "Conoce nuestra historia, visión, valores y a nuestros pastores. Somos una familia que cree, ama y camina unida hacia el propósito eterno de Dios.",
  openGraph: {
    title: "Quiénes Somos | Iglesia Cristiana Maranatha Montería Central",
    description:
      "Conoce nuestra historia, visión, valores y a nuestros pastores en Maranatha Montería Central.",
    url: "https://www.maranathamc.com/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/fondo.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-brand-dark/65" />
          </div>
          <div className="relative z-10 container mx-auto px-6 pb-16 pt-36">
            <p className="font-playfair text-brand-light/60 text-xs uppercase tracking-[0.25em] mb-4">
              Maranatha Montería Central
            </p>
            <h1 className="text-brand-light text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight max-w-3xl">
              Más que una iglesia,<br />somos una familia.
            </h1>
          </div>
        </section>

        {/* QUIÉNES SOMOS */}
        <section className="bg-neutral-50 py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-brand-mid text-xs font-semibold uppercase tracking-[0.25em]">
                Quiénes somos
              </span>
              <h2 className="font-playfair text-brand-dark text-3xl sm:text-4xl font-medium mt-4 mb-6 leading-tight">
                Un lugar donde cada historia importa
              </h2>
              <p className="text-brand-dark/75 text-base leading-relaxed">
                En Iglesia Cristiana Maranatha Montería Central creemos que Dios tiene un propósito único para cada persona. Aquí encontrarás un hogar espiritual donde tu vida puede ser transformada por el poder de Jesucristo.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-brand-dark/70 text-base leading-relaxed">
                Somos una iglesia apasionada por Dios y comprometida con ver vidas restauradas, familias levantadas y generaciones caminando en el diseño eterno del Señor.
              </p>
              <blockquote className="border-l-2 border-brand-mid pl-5 py-1">
                <p className="font-playfair text-brand-dark text-lg italic leading-relaxed">
                  &ldquo;Cosas que ojo no vio, ni oído oyó, son las que Dios ha preparado para los que le aman.&rdquo;
                </p>
                <cite className="text-brand-dark/50 text-sm not-italic mt-2 block">— 1 Corintios 2:9</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* VISIÓN + ADN */}
        <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">

            {/* Visión */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
              <div className="bg-brand-dark rounded-2xl p-8 sm:p-10 min-h-[280px] flex flex-col justify-between">
                <span className="text-brand-light/40 text-xs uppercase tracking-[0.25em]">Nuestra visión</span>
                <div>
                  <p className="font-playfair text-brand-light text-2xl sm:text-3xl font-medium leading-snug mb-4">
                    Llenar la tierra con la gloria de Dios
                  </p>
                  <p className="text-brand-light/60 text-sm leading-relaxed">
                    Llevamos el evangelio del Reino a cada lugar posible, extendiendo el amor de Jesús más allá de las paredes de la iglesia por toda Córdoba y Colombia.
                  </p>
                </div>
              </div>
              <div>
                <span className="text-brand-mid text-xs font-semibold uppercase tracking-[0.25em]">
                  Nuestro ADN
                </span>
                <p className="text-brand-dark/70 text-base leading-relaxed mt-4 mb-8">
                  Lo que somos como iglesia nace del corazón de Dios. Nuestro ADN está marcado por valores que reflejan el carácter de Cristo.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Amor", text: "Amamos a Dios y a las personas como Jesús nos enseñó." },
                    { title: "Pasión", text: "Vivimos apasionados por la presencia de Dios y su Reino." },
                    { title: "Servicio", text: "Servimos con humildad, entendiendo el valor de cada vida." },
                    { title: "Restauración", text: "Nadie está demasiado lejos para ser restaurado por Dios." },
                  ].map((item) => (
                    <div key={item.title} className="border border-neutral-200 rounded-xl p-4">
                      <h3 className="text-brand-dark font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-brand-dark/60 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-neutral-100 mb-20 md:mb-28" />

            {/* Creencias */}
            <div id="creencias">
              <div className="max-w-2xl mb-12">
                <span className="text-brand-mid text-xs font-semibold uppercase tracking-[0.25em]">
                  Lo que creemos
                </span>
                <h2 className="font-playfair text-brand-dark text-3xl sm:text-4xl font-medium mt-4 leading-tight">
                  Nuestra fe está fundamentada en la Palabra de Dios
                </h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                {[
                  "Creemos en un Dios trino: Padre, Hijo y Espíritu Santo, que gobierna con amor, poder y verdad.",
                  "Creemos que Jesucristo es el Hijo de Dios, quien murió por nuestros pecados, resucitó y hoy vive para darnos vida eterna.",
                  "Creemos que la salvación es un regalo de gracia, recibido por fe en Jesús.",
                  "Creemos en el poder transformador del Espíritu Santo, quien guía y capacita a los creyentes.",
                  "Creemos en el poder del Reino de Dios, que trae sanidad, libertad y restauración.",
                  "Creemos en la familia como un diseño divino donde se levantan generaciones para el Señor.",
                  "Creemos que cada persona fue creada con un propósito eterno que puede impactar al mundo.",
                ].map((belief, i) => (
                  <li
                    key={i}
                    className={`flex gap-4 p-4 bg-neutral-50 border border-neutral-200 rounded-xl ${i === 6 ? "md:col-span-2" : ""}`}
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-mid text-white flex items-center justify-center text-xs font-semibold">
                      {i + 1}
                    </span>
                    <span className="text-brand-dark/80 text-sm leading-relaxed">{belief}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://maranatha.com.co/wp-content/uploads/2024/12/DECLARACION-DOCTRINAL-DEL-MINISTERIO-MUNDIAL-MARANATHA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-2 border border-brand-dark text-brand-dark py-3 px-7 text-sm font-semibold hover:bg-brand-dark hover:text-brand-light transition-colors"
              >
                Declaración doctrinal completa
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* PASTORES */}
        <section id="pastores" className="bg-brand-dark py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <span className="text-brand-light/40 text-xs uppercase tracking-[0.25em]">Liderazgo</span>
            <h2 className="font-playfair text-brand-light text-3xl sm:text-4xl font-medium mt-4 mb-12 md:mb-16 leading-tight">
              Nuestros pastores
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Imagen */}
              <div className="rounded-2xl overflow-hidden">
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none">
                  <Image
                    src="/images/pastores.png"
                    alt="Pastor Luis Salinas y Pastora Lily Salinas"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 384px, 50vw"
                  />
                </div>
              </div>

              {/* Bios */}
              <div className="space-y-10">
                <div>
                  <h3 className="font-playfair text-brand-light text-2xl font-medium mb-3">
                    Pastor Luis Salinas
                  </h3>
                  <div className="h-px bg-brand-light/10 mb-4" />
                  <p className="text-brand-light/65 text-sm leading-relaxed">
                    A los 21 años el Señor declaró sobre su vida el propósito que tenía preparado para él. Durante 25 años sirvió y lideró en diferentes iglesias, siendo preparado en cada etapa. Hoy pastorea Maranatha Montería Central con una palabra de fe y dependencia total del Espíritu Santo.
                  </p>
                </div>

                <div>
                  <h3 className="font-playfair text-brand-light text-2xl font-medium mb-3">
                    Pastora Lily Salinas
                  </h3>
                  <div className="h-px bg-brand-light/10 mb-4" />
                  <p className="text-brand-light/65 text-sm leading-relaxed">
                    Mujer de Dios cuya vida refleja amor, sensibilidad al Espíritu Santo y un deseo profundo de ver a las nuevas generaciones en el propósito divino. Dios la usa a través de Maranatha Kids, levantando una generación que crezca con identidad firme en Cristo.
                  </p>
                </div>

                <div className="border border-brand-light/10 rounded-xl p-6">
                  <p className="text-brand-light/50 text-xs uppercase tracking-[0.2em] mb-3">Su llamado</p>
                  <p className="text-brand-light/75 text-sm leading-relaxed mb-4">
                    En 2020, durante un tiempo de ayuno y oración, Dios comenzó a hablar claramente a sus corazones. A través de confirmaciones proféticas, el Señor les reveló que era tiempo de cumplir el llamado pastoral en <span className="text-brand-light">Montería</span>.
                  </p>
                  <blockquote className="border-l-2 border-brand-light/20 pl-4">
                    <p className="font-playfair text-brand-light/80 text-base italic">
                      &ldquo;Esta ciudad está bañada con la sangre de Jesús.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HORARIOS */}
        <section id="horarios" className="bg-neutral-50 py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <span className="text-brand-mid text-xs font-semibold uppercase tracking-[0.25em]">
              Únete
            </span>
            <h2 className="font-playfair text-brand-dark text-3xl sm:text-4xl font-medium mt-4 mb-12 leading-tight">
              Horarios de reuniones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Servicio Dominical", time: "Domingo · 10:00 am", color: "border-cyan-400/60" },
                { title: "Escuela de Oración", time: "Martes · 6:30 pm", color: "border-blue-400/60" },
                { title: "Casas AMAR", time: "Jueves · 7:00 pm", color: "border-orange-400/60" },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`bg-white border-2 ${item.color} rounded-2xl p-6 flex flex-col justify-between min-h-[160px]`}
                >
                  <div>
                    <h3 className="text-brand-dark font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-brand-dark/50 text-sm">{item.time}</p>
                  </div>
                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center text-brand-mid text-sm font-medium hover:underline"
                  >
                    Transmisión en vivo →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
