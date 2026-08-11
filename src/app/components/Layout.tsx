import { Outlet } from 'react-router';
import { X, Globe, Download, Smartphone, ExternalLink, Apple, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './Header';
import Footer from './Footer';
import { useApp } from '../context/AppContext';

// Placeholder links - update these when ready
const APP_STORE_LINK = '#app-store';
const PLAY_STORE_LINK = '#play-store';
const DIRECT_DOWNLOAD_LINK = '#direct-download';
const WEBAPP_LINK = 'https://app.border.com.ng';

function GetStartedModal() {
  const { closeModal, openDownloadApp } = useApp();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={closeModal}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 bg-gradient-to-br from-[#1A4ED8] to-[#00C38B] rounded-xl flex items-center justify-center mb-6">
            <span className="text-white font-bold text-xl">B</span>
          </div>

          <h2 className="text-2xl font-bold mb-2">Get started with Border</h2>
          <p className="text-gray-400 mb-8">Choose how you want to access Border — on the web or on your device.</p>

          <div className="space-y-4">
            <a
              href={WEBAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full p-5 bg-[#1A4ED8] hover:bg-[#1541b8] rounded-xl transition-all group"
              onClick={closeModal}
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Use Border Online</div>
                <div className="text-sm text-blue-200">Access instantly in your browser — no install needed</div>
              </div>
              <ExternalLink className="w-4 h-4 text-white/60 ml-auto group-hover:text-white transition-colors" />
            </a>

            <button
              className="flex items-center gap-4 w-full p-5 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-xl transition-all group"
              onClick={() => { closeModal(); setTimeout(openDownloadApp, 50); }}
            >
              <div className="w-10 h-10 bg-[#00C38B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="w-5 h-5 text-[#00C38B]" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Download the App</div>
                <div className="text-sm text-gray-400">iOS, Android, or direct APK download</div>
              </div>
              <Smartphone className="w-4 h-4 text-gray-500 ml-auto group-hover:text-white transition-colors" />
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            By continuing, you agree to Border's <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function DownloadAppModal() {
  const { closeModal } = useApp();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={closeModal}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 bg-gradient-to-br from-[#1A4ED8] to-[#00C38B] rounded-xl flex items-center justify-center mb-6">
            <Download className="w-6 h-6 text-white" />
          </div>

          <h2 className="text-2xl font-bold mb-2">Download Border</h2>
          <p className="text-gray-400 mb-8">Get the Border app on your device.</p>

          <div className="space-y-4">
            <a
              href={APP_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full p-5 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-xl transition-all group"
            >
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on the</div>
                <div className="font-semibold text-white">App Store</div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-white transition-colors" />
            </a>

            <a
              href={PLAY_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full p-5 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-xl transition-all group"
            >
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400">Get it on</div>
                <div className="font-semibold text-white">Google Play</div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-white transition-colors" />
            </a>

            <a
              href={DIRECT_DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full p-5 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-xl transition-all group"
            >
              <div className="w-10 h-10 bg-[#00C38B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="w-5 h-5 text-[#00C38B]" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400">Direct download</div>
                <div className="font-semibold text-white">Download APK</div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-white transition-colors" />
            </a>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            Links coming soon — contact <a href="mailto:admin@border.com.ng" className="text-blue-400 hover:underline">admin@border.com.ng</a> for early access
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Layout() {
  const { activeModal } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <AnimatePresence>
        {activeModal === 'get-started' && <GetStartedModal key="get-started" />}
        {activeModal === 'download-app' && <DownloadAppModal key="download-app" />}
      </AnimatePresence>
    </div>
  );
}
