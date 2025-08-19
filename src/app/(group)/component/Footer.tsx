export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        {/* Logo & Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">🛍️ Ecom App</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </div>

        {/* Credits */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          Made with ❤️ by <span className="text-white font-medium">Mukul</span>
        </div>

      </div>
    </footer>
  );
}
