export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
          Photos Multi-Vues IA
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
          Uploadez 2+ photos vêtements → Générez sets pros mannequin/à plat. Prêtes Vinted !
        </p>
        <button className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all">
          Commencer Gratuit (1 essai)
        </button>
      </section>

      {/* 3 Étapes */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">En 3 clics</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">📸</div>
            <h3 className="text-2xl font-bold mb-4">Upload Photos</h3>
            <p>Avant, arrière + vues (t-shirt, robe, etc.)</p>
          </div>
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Générer IA</h3>
            <p>Choix vues + style en 30s</p>
          </div>
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">⬇️</div>
            <h3 className="text-2xl font-bold mb-4">Télécharger</h3>
            <p>Set pro prêt Vinted</p>
          </div>
        </div>
      </section>
    </div>
  );
}
