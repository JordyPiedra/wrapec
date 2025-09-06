import { useState } from "react";

export default function ContactoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  return (
    /* Contacto */
    <section id="contacto" className="border-t border-white/10" style={{ backgroundColor: 'var(--petroleum-900)' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Conversemos</h2>
        <p className="mt-3 text-white/75 text-sm sm:text-base">
          ¿Tu empresa necesita automatizar procesos o integrar IA? En WrapperCube convertimos tu reto en un MVP en pocas semanas.
        </p>

        {!submitted ? (
          <>
            <form
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left"
              action="https://formsubmit.co/elbanquitofamiliar@gmail.com"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => setSending(true)}
            >
              <input
                name="name"
                className="border border-white/15 bg-white/5 text-white placeholder-white/50 rounded-xl px-4 py-3"
                placeholder="Tu nombre"
                required
              />
              <input
                type="email"
                name="email"
                className="border border-white/15 bg-white/5 text-white placeholder-white/50 rounded-xl px-4 py-3"
                placeholder="Email"
                required
              />
              <input
                name="company"
                className="border border-white/15 bg-white/5 text-white placeholder-white/50 rounded-xl px-4 py-3"
                placeholder="Empresa (opcional)"
              />
              <textarea
                name="message"
                className="border border-white/15 bg-white/5 text-white placeholder-white/50 rounded-xl px-4 py-3 md:col-span-3"
                rows={4}
                placeholder="¿Qué quieres construir?"
                required
              />

              {/* --- FormSubmit options --- */}
              <input type="hidden" name="_subject" value="Nuevo contacto web — WrapperCube" />
              <input type="hidden" name="_captcha" value="false" />
              {/* autorespuesta al usuario (opcional) */}
              <input type="hidden" name="_autoresponse" value="¡Gracias por escribirnos! Te responderemos pronto." />
              {/* redirección opcional (ocurre dentro del iframe, tu SPA no recarga) */}
              {/* <input type="hidden" name="_next" value="https://tu-dominio.com/gracias" /> */}

              {/* --- Anti-spam correcto para FormSubmit --- */}
              <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              {/* extras útiles */}
              <input type="hidden" name="ua" value={navigator.userAgent} />
              <input type="hidden" name="referrer" value={document.referrer} />
              <input type="hidden" name="path" value={location.pathname} />

              <button
                className="w-full md:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg md:col-span-1 disabled:opacity-60"
                disabled={sending}
              >
                {sending ? "Enviando…" : "Enviar"}
              </button>
            </form>

            {/* iframe oculto: cuando carga => consideramos “enviado” */}
            <iframe
              name="hidden_iframe"
              style={{ display: "none" }}
              title="hidden_transport"
              onLoad={() => {
                // evita marcar enviado en el primer render (solo después de submit)
                if (sending) {
                  setSubmitted(true);
                  setSending(false);
                }
              }}
            />
          </>
        ) : (
          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">¡Gracias! 🙌</h3>
            <p>Recibimos tu mensaje y te contactaremos pronto.</p>
          </div>
        )}

        <div className="mt-6 text-white/70 text-sm">
          También en LinkedIn:{" "}
          <a className="text-cyan-300 hover:underline" href="https://www.linkedin.com/company/wrappercube">WrapperCube</a>
        </div>
      </div>
    </section>
  );
}
