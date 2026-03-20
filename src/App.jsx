import './App.css';


function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="text-2xl font-extrabold text-blue-600 tracking-tighter">
          GBPUAT Chess
        </div>
        <div className="space-x-6 hidden md:flex items-center">
          <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About</a>
          <a href="#events" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Tournaments</a>
          <a href="#join" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-md">
            Join the Club
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center mt-8">
        <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wider uppercase mb-8 shadow-sm">
          Checkmate the Competition
        </span>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
          Master Your Strategy at <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Pantnagar Chess Club
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
          Whether you are a grandmaster in the making or just learning how the knight moves, join our community of students who love the beautiful game.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
            Upcoming Tournament
          </button>
          <button className="px-8 py-3.5 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
            Study Openings
          </button>
        </div>
      </main>

      {/* Features Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        
        {/* Card 1 */}
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-default">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-inner">♟️</div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Weekly Meets</h3>
          <p className="text-sm text-slate-600 leading-relaxed">Practice your tactics and play over-the-board games every weekend with fellow enthusiasts.</p>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-default">
          <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-inner">🏆</div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Tournaments</h3>
          <p className="text-sm text-slate-600 leading-relaxed">Compete in our semester-wide rapid and blitz championships to claim the top spot on the leaderboard.</p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-default">
          <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-inner">🧠</div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Study Sessions</h3>
          <p className="text-sm text-slate-600 leading-relaxed">Analyze historical grandmaster games and improve your opening repertoire together.</p>
        </div>

      </section>
    </div>
  );
}

export default App;