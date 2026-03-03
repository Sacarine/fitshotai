export default function Pricing() {
    return (
      <div className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Tarifs Simples & Transparents
        </h1>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Gratuit */}
          <div className="relative group">
            <div className="border-4 border-green-400 bg-green-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full border-2 border-green-400">
                <span className="text-sm font-bold text-green-600">POPULAIRE</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Starter</h2>
              <p className="text-5xl font-bold text-green-600 mb-6">0€</p>
              <ul className="space-y-3 mb-8 text-lg">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  1 set 2 photos gratuit
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Inscription instantanée
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-green-700 transition">
                Commencer Gratuit
              </button>
            </div>
          </div>
  
          {/* Pack Crédits */}
          <div className="group">
            <div className="border-4 border-blue-400 bg-gradient-to-br from-blue-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Pack 5</h2>
              <p className="text-5xl font-bold text-blue-600 mb-6">2.99€</p>
              <ul className="space-y-3 mb-8 text-lg">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  5 sets multi-vues
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Paiement unique
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 transition">
                Acheter 5 Crédits
              </button>
            </div>
          </div>
  
          {/* Abonnement */}
          <div className="group">
            <div className="border-4 border-purple-400 bg-gradient-to-br from-purple-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Unlimited</h2>
              <p className="text-5xl font-bold text-purple-600 mb-2">9.99€</p>
              <p className="text-2xl text-purple-500 font-semibold">/mois</p>
              <ul className="space-y-3 mb-8 text-lg">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  ~30 sets/mois
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Tout illimité
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-purple-700 transition">
                14 jours gratuit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  