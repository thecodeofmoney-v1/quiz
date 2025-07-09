import React from 'react';

export default function LandingReto7D() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Reto de 7 días:
          <br className="sm:hidden" /> ¿Cómo ganar dinero extra y pagar todas mis deudas?
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Haz este breve test gratuito y recibe un plan de 7 días para transformar tus hábitos financieros.
        </p>

        <div className="mt-6 bg-white shadow-md rounded-2xl p-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">¿Cómo funciona?</h2>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-1">
            <li>✔ Responde 7 preguntas rápidas.</li>
            <li>✔ Descubre tu nivel financiero actual.</li>
            <li>✔ Recibe gratis tu reto diario por correo o WhatsApp.</li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">📋 Inicia el Quiz:</h3>

          {/* 👇 Aquí debes pegar el iframe de tu Google Form */}
          <div className="w-full h-[700px] rounded-xl overflow-hidden border border-gray-300">
            <iframe
              title="Quiz Financiero"
              src="https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform?embedded=true" // Reemplaza con tu URL real
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Cargando…
            </iframe>
          </div>
        </div>

        <footer className="mt-16 text-gray-500 text-sm">
          © {new Date().getFullYear()} Reto 7D. Hecho con propósito ❤️
        </footer>
      </div>
    </div>
  );
}
