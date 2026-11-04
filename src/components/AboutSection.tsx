import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-neutral-50 py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-brand-dark text-3xl sm:text-4xl md:text-5xl font-medium mb-8 md:mb-12 text-center leading-tight">
          Mas que una Iglesia somos una Familia
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Columna 1: Mapa de Córdoba con 3 puntos */}
          <div className="bg-brand-dark border border-brand-purple/50 rounded-2xl p-0 flex flex-col items-center justify-end min-h-[300px] sm:min-h-[350px] overflow-hidden relative group">
            <div className="absolute inset-0 w-full h-full p-4 flex items-center justify-center">
              <div className="relative w-full h-[120%] -top-5 sm:-top-10">
                <Image
                  src="/images/mapacordoba_v2.png"
                  alt="Mapa de Córdoba con 3 puntos de ubicación"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-screen"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center p-6 sm:p-8 mt-auto w-full text-center">
              <span className="text-xl sm:text-2xl font-bold text-brand-light mb-3 tracking-wide drop-shadow-lg">Córdoba</span>
              <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-brand-light/80 font-medium">
                <span className="bg-brand-light/10 px-2 sm:px-3 py-1 rounded-full border border-brand-light/10">Montería</span>
                <span className="bg-brand-light/10 px-2 sm:px-3 py-1 rounded-full border border-brand-light/10">Planeta Rica</span>
                <span className="bg-brand-light/10 px-2 sm:px-3 py-1 rounded-full border border-brand-light/10">Tierralta</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Visión en Acción */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center order-first lg:order-none shadow-sm">
            <h3 className="text-brand-dark text-xl sm:text-2xl font-bold mb-4 sm:mb-6 tracking-wide">
              VISIÓN EN ACCIÓN
            </h3>
            <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed mb-4">
              Ir por toda Córdoba<br className="hidden sm:block" /> y predicar el evangelio a toda criatura.
            </p>
            <p className="text-brand-dark/80 text-sm sm:text-base leading-relaxed">
              Llevándoles la Palabra por medio de las casas<br className="hidden lg:block" /> amar{' '}
              con señales, prodigios y milagros,<br className="hidden lg:block" />
              para así establecer familias restauradas<br className="hidden lg:block" />
              que manifiesten el Reino de Dios en cada lugar.
            </p>
          </div>

          {/* Columna 3: Montería */}
          <div className="bg-brand-dark border border-brand-purple/50 rounded-2xl p-0 flex flex-col items-center justify-end min-h-[300px] sm:min-h-[350px] relative overflow-hidden group">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/Monteria-parnoamica-rio-sinu.jpeg"
                alt="Montería Río Sinú"
                fill
                className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center p-6 sm:p-8 mt-auto w-full">
              <span className="text-2xl sm:text-3xl font-bold text-brand-light mb-1 tracking-wide drop-shadow-lg text-center">Montería</span>
              <span className="text-base sm:text-lg text-brand-light/80 font-medium drop-shadow-md">tierra que fluye leche y miel</span>
            </div>
          </div>
        </div>

        {/* Anuncios - bento grid sobre fondo */}
        <div className="mt-20 -mx-4 sm:-mx-6 px-4 sm:px-6 py-16 md:py-20 relative min-h-[560px] overflow-hidden">
          {/* Fondo con imagen */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/fondo.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-brand-dark/50" aria-hidden />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h3 className="text-brand-light text-2xl sm:text-3xl font-medium mb-8 md:mb-10 text-center tracking-wide">
              Anuncios
            </h3>

            {/* Bento grid asimétrico */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {/* Panel grande izquierdo - Servicio Dominical (cian) */}
              <div id="servicio-dominical" className="md:row-span-2 min-h-[320px] md:min-h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer border-2 border-cyan-400/80 bg-brand-dark/40 p-6 md:p-8 flex flex-col justify-end shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] transition-all duration-300">
                <div className="absolute inset-0">
                  <Image
                    src="/images/flying_dove.png"
                    alt=""
                    fill
                    className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white text-xl md:text-2xl font-bold tracking-wide mb-1">SERVICIO DOMINICAL</h4>
                  <p className="text-cyan-200/90 font-medium mb-5">Domingo 10:00 am</p>
                  <Link
                    href="#visit"
                    className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 py-3 px-6 rounded-full font-semibold text-sm hover:bg-cyan-100 transition-colors cursor-pointer"
                  >
                    Regístrate Ahora
                  </Link>
                </div>
              </div>

              {/* Panel superior derecho - Escuela de oración (azul) */}
              <div id="escuela-oracion" className="min-h-[180px] md:min-h-[195px] rounded-2xl overflow-hidden relative group cursor-pointer border-2 border-blue-400/80 bg-brand-dark/40 p-6 flex flex-col justify-end shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] transition-all duration-300">
                <div className="absolute inset-0">
                  <Image
                    src="/images/praying_hands.png"
                    alt=""
                    fill
                    className="object-cover opacity-35 group-hover:opacity-50 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/40 to-transparent" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white text-lg md:text-xl font-bold tracking-wide">ESCUELA DE ORACIÓN</h4>
                  <p className="text-blue-200/90 font-medium text-sm">Martes 6:30 pm</p>
                </div>
              </div>

              {/* Panel inferior derecho - Casas Amar (naranja) */}
              <div id="casas-amar" className="min-h-[180px] md:min-h-[195px] rounded-2xl overflow-hidden relative group cursor-pointer border-2 border-orange-400/80 bg-brand-dark/40 p-6 flex flex-col justify-end shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_28px_rgba(251,146,60,0.5)] transition-all duration-300">
                <div className="absolute inset-0">
                  <Image
                    src="/images/open_bible.png"
                    alt=""
                    fill
                    className="object-cover opacity-35 group-hover:opacity-50 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/40 to-transparent" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white text-lg md:text-xl font-bold tracking-wide">CASAS AMAR</h4>
                  <p className="text-orange-200/90 font-medium text-sm">Jueves 7:00 pm</p>
                </div>
              </div>
            </div>

            {/* Tabs de navegación */}
            <nav className="flex flex-wrap justify-center gap-2 mt-8" aria-label="Eventos">
              <a href="#servicio-dominical" className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-cyan-400/50 hover:bg-cyan-500/20 transition-colors">
                Servicio Dominical
              </a>
              <a href="#escuela-oracion" className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-blue-400/50 hover:bg-blue-500/20 transition-colors">
                Escuela de oración
              </a>
              <a href="#casas-amar" className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-orange-400/50 hover:bg-orange-500/20 transition-colors">
                Casas Amar
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
