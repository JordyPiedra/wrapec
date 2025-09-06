import { useState } from "react";
import ContactoSection from "./ContactoSection";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--petroleum)' }}>
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[rgba(4,13,20,0.6)] backdrop-blur border-b border-white/10">

        <div className="mx-auto max-w-7xl px-4 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="Inicio">
              <div className="flex items-center text-4xl font-extrabold">
                  <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">W</span>
                  <span className="text-white font-extrabold text-2xl">rapec</span>
                </div>

          </a>


          {/* Botón hamburguesa en móvil */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:bg-white/10"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {/* ícono simple */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm">
            <a href="#por-que" className="text-white/80 hover:text-white">Por qué</a>
            <a href="#productos" className="text-white/80 hover:text-white">Productos</a>
            <a href="#contribuyentes" className="text-white/80 hover:text-white">Contribuyentes</a>
            <a href="#founders" className="text-white/80 hover:text-white">Nuestro equipo</a>
            <a href="#contacto" className="text-white/80 hover:text-white">Contacto</a>
          </nav>

          {/* CTA desktop */}
          <a
            href="#contacto"
            className="hidden md:inline-flex px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold shadow btn-shine"
          >
            Hablemos
          </a>
        </div>

        {/* Panel móvil */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-[rgba(4,13,20,0.85)] backdrop-blur">
            <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2 text-base">
              <a onClick={() => setOpen(false)} href="#por-que" className="py-2 text-white/90 hover:text-white">Por qué</a>
              <a onClick={() => setOpen(false)} href="#productos" className="py-2 text-white/90 hover:text-white">Productos</a>
              <a onClick={() => setOpen(false)} href="#contribuyentes" className="py-2 text-white/90 hover:text-white">Contribuyentes</a>
              <a onClick={() => setOpen(false)} href="#founders" className="py-2 text-white/90 hover:text-white">Nuestro equipo</a>
              <a onClick={() => setOpen(false)} href="#contacto" className="py-2 text-white/90 hover:text-white">Contacto</a>
              <a
                onClick={() => setOpen(false)}
                href="#contacto"
                className="mt-2 w-full inline-flex items-center justify-center rounded-lg px-4 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold shadow"
              >
                Hablemos
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-cyan-500/20 blur-3xl anim-float"></div>
        <div className="pointer-events-none absolute top-10 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-500/20 blur-3xl anim-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight text-white anim-fade-up">
            <span className="gradient-text">Desarrollamos software que automatiza</span><br className="hidden md:block" />
            y simplifica procesos
          </h1>
          <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto anim-fade-up anim-delay-1">
            Usamos IA para darle inteligencia a cada proceso
          </p>

          {/* CTA: 1 col en móvil, 2 en ≥sm */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 anim-fade-up anim-delay-2">
            <a href="#productos" className="w-full px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg text-center">
              Ver productos
            </a>
            <a href="#por-que" className="w-full px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/5 text-center">
              Por qué Wrapec
            </a>
          </div>

          {/* 3 bullets: 1 col en móvil */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              { t: 'Desarrollo de software', d: 'Creamos soluciones digitales a medida que transforman la forma en que trabajas.' },
              { t: 'Automatización de procesos', d: 'Reducimos tiempos y errores convirtiendo tareas repetitivas en flujos inteligentes.' },
              { t: 'Impulsados por IA', d: 'Integramos Inteligencia Artificial práctica para potenciar cada producto que construimos.' },
            ].map((c, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/5 text-left anim-fade-up" style={{ animationDelay: `${0.15 * (i+1)}s` }}>
                <div className="text-cyan-300 font-semibold text-sm sm:text-base">{c.t}</div>
                <div className="text-white/70 text-sm mt-1">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué */}
      <section id="por-que" className="border-t border-white/10" style={{ backgroundColor: 'var(--petroleum-900)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-8 sm:gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">El estudio detrás de los wraps</h2>
            <p className="mt-3 sm:mt-4 text-white/80 text-base sm:text-lg">
              Nuestra filosofía: todo proceso que pueda automatizarse, puede ser mejorado con Inteligencia Artificial.
              Creamos sistemas que aprenden, escalan y se adaptan a tu negocio.
            </p>
            <ul className="mt-5 sm:mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-cyan-400" />
                <span className="text-white/80">Años de experiencia creando software robusto para distintas industrias</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-cyan-400" />
                <span className="text-white/80">Especialistas en automatización de procesos críticos de negocio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-cyan-400" />
                <span className="text-white/80">Proyectos entregados con IA aplicada desde el día uno</span>
              </li>
            </ul>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-white/5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Metric k="Software" v="A medida" />
              <Metric k="Procesos" v="Automatizados" />
              <Metric k="IA" v="Integrada" />
              <Metric k="Soluciones" v="Escalables" />
            </div>
            <div className="mt-4 sm:mt-5 text-xs text-white/60">
              *Nuestro compromiso: desarrollar, automatizar e impulsar con IA.
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="border-t border-white/10" style={{ backgroundColor: 'var(--petroleum-700)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center">Productos</h2>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Declarify */}
            <article className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-300">Declarify</h3>
                <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Activo</span>
              </div>
              <p className="mt-2 text-white/85 text-sm sm:text-base">
                Declarify es nuestro primer producto: una herramienta que automatiza la gestión de gastos y declaraciones de impuestos en Ecuador.
                Conecta con el SRI, clasifica gastos con IA y te entrega reportes listos para la acción.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  'Multi-contribuyente (ideal para contadores)',
                  'Descarga segura de comprobantes SRI',
                  'Clasificación inteligente de gastos',
                  'Exportación PDF/Excel',
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/85">
                    <Check /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-1 sm:flex sm:gap-3">
                <a className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg text-center" href="#contacto">Solicitar demo</a>
                <a className="w-full sm:w-auto mt-3 sm:mt-0 px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/5 text-center" href="#contacto">Ver precios</a>
              </div>
            </article>

            {/* Próximo wrapper */}
            <article className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Siguiente wrap</h3>
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/20">En research</span>
              </div>
              <p className="mt-2 text-white/75 text-sm sm:text-base">
Estamos validando el siguiente wrap enfocado en pagos, identidad digital y analítica para negocios. Si eres contribuyente o pyme, queremos escuchar tus necesidades.              </p>
              <div className="mt-6">
                <a className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold shadow btn-shine inline-flex items-center justify-center" href="#contacto">
                  Propón un problema
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Vertical Contribuyentes */}
      <section id="contribuyentes" className="border-t border-white/10" style={{ backgroundColor: 'var(--petroleum)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center">Vertical: Contribuyentes</h2>
          <p className="text-white/80 text-center mt-3 max-w-3xl mx-auto text-sm sm:text-base">
            Además de desarrollar software propio, en Wrapec ofrecemos soluciones y servicios para contribuyentes y contadores que buscan simplificar su gestión diaria.
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <ServiceCard title="Asesoría contable y tributaria" desc="Apoyo profesional en obligaciones fiscales y manejo contable." />
            <ServiceCard title="Venta de firmas electrónicas" desc="Gestión y provisión de certificados digitales para trámites seguros." />
            <ServiceCard title="Facturadores electrónicos" desc="Herramientas para emitir comprobantes electrónicos de forma simple y rápida." />
            <ServiceCard title="Plantillas de gestión contable" desc="Formatos listos para organizar, controlar y reportar tus finanzas." />
            <ServiceCard title="Distribuidores de SACI ERP" desc="Implementación y soporte de un ERP robusto para la gestión empresarial." />
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="border-t border-white/10" style={{ backgroundColor: 'var(--petroleum-900)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center">Nuestro equipo</h2>
          <p className="text-white/75 text-center mt-2 max-w-3xl mx-auto text-sm sm:text-base">
            Wrapec nació de una convicción: la tecnología debe simplificar lo complejo. Unimos experiencia en software y datos para crear soluciones confiables y de impacto.
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <FounderCard
              name="Jordy Piedra"
              role="Co-Founder & CTO"
              bio="Backend & Data Engineer. Experto en arquitecturas escalables, automatización de procesos y diseño de sistemas resilientes impulsados por IA."
              hrefLinkedin="https://www.linkedin.com/in/jordy-piedra"
            />
            <FounderCard
              name="Merly Alcívar"
              role="Co-Founder & COO"
              bio="Operaciones & finanzas con background en análisis de datos. Transforma insights en operaciones efectivas y sostenibles."
              hrefLinkedin="https://www.linkedin.com/in/merly-ibeth"
            />
          </div>
        </div>
      </section>

      {/* Contacto */}
        <ContactoSection />


      {/* Footer */}
      <footer className="border-t border-white/10" style={{ backgroundColor: 'var(--petroleum)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Wrapec</span>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a className="hover:text-white" href="#founders">Nuestro Equipo</a>
            <a className="hover:text-white" href="#productos">Productos</a>
            <a className="hover:text-white" href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Componentes auxiliares */
function Metric({ k, v }:{ k: string; v: string }) {
  return (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
      <div className="text-white/70 text-xs">{k}</div>
      <div className="text-cyan-300 font-bold text-xl mt-1">{v}</div>
    </div>
  );
}
function Check() {
  return (
    <svg className="text-cyan-300" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.17l-3.88-3.88L3.7 13.71 9 19l12-12-1.41-1.41z"/>
    </svg>
  );
}
function FounderCard({ name, role, bio, hrefLinkedin }:{ name: string; role: string; bio: string; hrefLinkedin: string }) {
  return (
    <article className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-white/5 flex items-start gap-4">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shrink-0 grid place-items-center text-white font-bold">
        {name.split(' ').map(w => w[0]).join('').slice(0,2)}
      </div>
      <div>
        <div className="text-white font-semibold text-base sm:text-lg">{name}</div>
        <div className="text-cyan-300 text-sm">{role}</div>
        <p className="text-white/75 text-sm mt-2">{bio}</p>
        <div className="mt-3">
          <a className="text-white/85 hover:text-white text-sm underline underline-offset-4" href={hrefLinkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </article>
  );
}
function ServiceCard({ title, desc }:{ title: string; desc: string }) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
      <h3 className="text-base sm:text-lg font-semibold text-cyan-300">{title}</h3>
      <p className="text-white/75 text-sm mt-2">{desc}</p>
    </div>
  );
}

