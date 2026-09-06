export default function Footer() {
  return (
    <footer className="bg-accent text-white border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1">
          <div className="text-2xl font-black text-white tracking-tighter flex items-center mb-6">
            <i className="fa-solid fa-cube text-3xl mr-2 text-secondary" />
            BHANSALI<span className="text-secondary">STAINLESS</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Leading exporter of industrial stainless steel components to Saudi Arabia, UAE, Qatar, and Oman. ISO 9001:2015 Certified.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Products</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Stainless Steel Flanges</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Buttweld Fittings</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Forged Fittings</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SS Pipes & Tubes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Technical Data Sheets</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Project Gallery</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Logistics & Export</a></li>
            <li><a href="#enquiry" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Headquarters</h4>
          <p className="text-sm text-gray-400 mb-4">
            Industrial Area 4, Jebel Ali Free Zone<br />Dubai, United Arab Emirates
          </p>
          <p className="text-sm text-gray-400">
            <i className="fa-solid fa-phone mr-2 text-secondary" /> +971 4 881 2345
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
        <div>&copy; 2026 BHANSALI STAINLESS. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          <a href="#" className="hover:text-white transition-colors">Standard Terms of Sale</a>
        </div>
      </div>
    </footer>
  );
}
