import { useState, useEffect } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Image as ImageIcon, 
  Video, 
  Lock, 
  MoreVertical, 
  Bookmark, 
  ChevronDown, 
  ChevronRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_CONFIG, POSTS_DATA } from './config/profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<'posts' | 'media'>('posts');
  const [promotionsOpen, setPromotionsOpen] = useState(true);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + PROFILE_CONFIG.promoBanner.daysAhead);
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    setFormattedDate(`${dd}/${mm}/${yyyy}`);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Top Advisory Banner */}
      <div className="bg-[#ff641c] text-white py-2.5 px-4 text-center font-bold text-xs sm:text-sm uppercase tracking-wider fixed top-0 left-0 w-full z-50 shadow-md">
        {PROFILE_CONFIG.promoBanner.text} {formattedDate}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm mt-10 sm:mt-10">
        <div className="max-w-3xl mx-auto h-16 flex items-center justify-center px-4">
          <img 
            src={PROFILE_CONFIG.images.logo} 
            alt="Logo" 
            className="h-7 w-auto" 
          />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 pb-24">
        {/* Profile Hero */}
        <section className="relative mb-16">
          <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden shadow-lg group">
            <img 
              src={PROFILE_CONFIG.images.banner} 
              alt="Banner" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: '20% 60%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-6 left-6 right-6">
              <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                {PROFILE_CONFIG.name}
              </h2>
              <div className="flex items-center gap-4 text-sm text-white/90">
                <div className="flex items-center gap-1.5 backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full">
                  <ImageIcon size={16} />
                  <span>{PROFILE_CONFIG.stats.photos}</span>
                </div>
                <div className="flex items-center gap-1.5 backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full">
                  <Video size={16} />
                  <span>{PROFILE_CONFIG.stats.videos}</span>
                </div>
                <div className="flex items-center gap-1.5 backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full">
                  <Heart size={16} />
                  <span>{PROFILE_CONFIG.stats.likes}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 left-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
              <img 
                src={PROFILE_CONFIG.images.profile} 
                alt="Profile" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top', scale: '1.3' }}
              />
            </div>
          </div>
        </section>

        {/* Profile Bio */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 pt-12 mb-6 transition-all hover:shadow-md">
          <div className="flex items-center gap-1.5 mb-1">
            <h1 className="text-xl font-bold text-gray-900">{PROFILE_CONFIG.name}</h1>
            <ShieldCheck className="text-orange-500" size={20} fill="#fd7350" stroke="#fff" />
          </div>
          <p className="text-sm text-gray-500 mb-4">{PROFILE_CONFIG.username}</p>
          <div className="text-sm text-gray-600 leading-relaxed space-y-4 whitespace-pre-wrap">
            {PROFILE_CONFIG.bio}
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">Assinaturas</h3>
          </div>
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-[10px] font-bold uppercase rounded-full mb-3 tracking-widest">
              MAIS POPULAR 🔥🔥
            </div>
            
            <motion.a 
              href={PROFILE_CONFIG.checkoutLinks.monthly}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between w-full h-14 px-6 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold shadow-sm transition-all hover:shadow-orange-200/50 hover:shadow-lg relative overflow-hidden mb-4"
            >
              <div className="flex flex-col items-start relative z-10">
                <span className="text-xs opacity-90 uppercase tracking-tighter">30 DIAS</span>
                <span className="text-lg">R$ {PROFILE_CONFIG.pricing.monthly}</span>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-white/20 p-2 rounded-full relative z-10"
              >
                <ChevronRight size={24} />
              </motion.div>
              {/* Pulse effect overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <div className="flex items-center gap-1 text-[10px] text-orange-600 font-bold uppercase tracking-wider mb-6">
               <Check size={12} />
               <span>CHAMADA DE VIDEO COMIGO HOJE!</span>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <button 
                onClick={() => setPromotionsOpen(!promotionsOpen)}
                className="w-full flex items-center justify-between text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-4"
              >
                <span>Promoções</span>
                <motion.div animate={{ rotate: promotionsOpen ? 0 : -90 }}>
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence>
                {promotionsOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-3 overflow-hidden"
                  >
                    <a href={PROFILE_CONFIG.checkoutLinks.quarterly} className="block group">
                      <div className="flex items-center justify-between w-full h-14 px-6 rounded-lg border border-orange-100 bg-white text-gray-800 font-medium transition-all group-hover:bg-orange-50 group-hover:border-orange-200">
                        <div className="flex items-center gap-3">
                          <span>3 Meses</span>
                          <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold uppercase">Economia</span>
                        </div>
                        <span className="font-bold text-orange-600">R$ {PROFILE_CONFIG.pricing.quarterly}</span>
                      </div>
                    </a>

                    <a href={PROFILE_CONFIG.checkoutLinks.yearly} className="block group">
                      <div className="flex items-center justify-between w-full h-14 px-6 rounded-lg border border-orange-100 bg-white text-gray-800 font-medium transition-all group-hover:bg-orange-50 group-hover:border-orange-200">
                        <div className="flex items-center gap-3">
                          <span>1 ANO</span>
                          <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold uppercase">Melhor Oferta</span>
                        </div>
                        <span className="font-bold text-orange-600">R$ {PROFILE_CONFIG.pricing.yearly}</span>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-8">
          <div className="flex rounded-lg overflow-hidden bg-gray-100 p-1 mb-6">
            <button 
              onClick={() => setActiveTab('posts')}
              className={`flex-1 py-3 text-sm font-medium transition-all rounded-md ${activeTab === 'posts' ? 'bg-white text-orange-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {POSTS_DATA.length} postagens
            </button>
            <button 
              onClick={() => setActiveTab('media')}
              className={`flex-1 py-3 text-sm font-medium transition-all rounded-md ${activeTab === 'media' ? 'bg-white text-orange-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {PROFILE_CONFIG.stats.videos} mídias
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'posts' ? (
              <motion.div 
                key="posts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {POSTS_DATA.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="media"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex justify-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">TODOS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">FOTOS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">VÍDEOS</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square bg-orange-50 rounded-md border border-orange-100 flex items-center justify-center relative overflow-hidden group">
                      <img src={PROFILE_CONFIG.images.logo} className="w-12 opacity-5 scale-150 absolute" alt="" />
                      <Lock className="text-orange-200 group-hover:scale-110 transition-transform" size={24} />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global CTA Button */}
        <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-50">
          <div className="max-w-3xl mx-auto">
            <motion.a 
              href={PROFILE_CONFIG.checkoutLinks.mainButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between w-full h-14 px-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-xl shadow-orange-500/20"
            >
              <span className="uppercase tracking-tight text-sm sm:text-base">VEJA TUDO POR APENAS <strong>R$ {PROFILE_CONFIG.pricing.monthly}</strong></span>
              <ChevronRight size={24} />
            </motion.a>
          </div>
        </div>
      </main>
    </div>
  );
}

function PostCard({ post }: { post: any }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all hover:border-orange-100">
      <div className="p-3 flex items-center justify-between border-b border-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 bg-gray-50">
            <img 
              src={PROFILE_CONFIG.images.profile} 
              alt="" 
              className="w-full h-full object-cover" 
              style={{ objectPosition: '0% 9%', scale: '1.5' }} 
            />
          </div>
          <div className="leading-tight">
            <p className="text-xs font-bold text-gray-900 truncate max-w-[120px]">{PROFILE_CONFIG.name}</p>
            <p className="text-[10px] text-gray-400">{PROFILE_CONFIG.username}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="relative aspect-square overflow-hidden bg-orange-50 group">
        {post.type === 'video' ? (
          <video 
            src={post.videoSource} 
            className="w-full h-full object-cover grayscale blur-[2px] opacity-40 scale-110" 
            autoPlay 
            muted 
            loop 
            playsInline
          />
        ) : (
          <img 
            src={post.thumbnail} 
            className="w-full h-full object-cover grayscale blur-[2px] opacity-40 scale-110" 
            style={post.id === 2 ? { scale: '1.5' } : {}}
            alt="" 
          />
        )}
        
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white z-10 backdrop-blur-[1px] transition-all group-hover:backdrop-blur-0 group-hover:bg-black/10">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
            <Lock size={24} className="text-white drop-shadow-md" />
          </div>
          
          <div className="flex items-center gap-4 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium border border-white/10">
            <div className="flex items-center gap-1.5">
              <Heart size={14} className="fill-white" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageSquare size={14} className="fill-white" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 flex items-center justify-between text-gray-400">
        <div className="flex items-center gap-3">
          <Heart size={20} className="hover:text-red-500 cursor-pointer transition-colors" />
          <MessageSquare size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
        </div>
        <Bookmark size={20} className="hover:text-orange-500 cursor-pointer transition-colors ml-auto" />
      </div>
    </div>
  );
}
