/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, LogIn, ShoppingCart, PlayCircle, Award, Clock, User, Settings, History, LogOut, Camera, Shield, Mail, Lock, ArrowRight, MapPin, Phone, HelpCircle, ChevronDown, ChevronUp, Users, Target, Globe, ShieldCheck, FileText } from 'lucide-react';

const COURSES = [
  {
    id: 1,
    title: "Вэб хөгжүүлэлтийн цогц багц (Front-end & Back-end)",
    description: "HTML, CSS, React, Node.js зэрэг орчин үеийн технологиудыг эхнээс нь сурна.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    badge: "ШИНЭ",
    badgeColor: "text-indigo-600 bg-white/90",
    oldPrice: "250,000₮",
    price: "150,000₮"
  },
  {
    id: 2,
    title: "График дизайны мастер класс",
    description: "Photoshop, Illustrator, Figma програмууд дээр мэргэжлийн түвшинд ажиллах.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    price: "120,000₮"
  },
  {
    id: 3,
    title: "Англи хэлний эрчимжүүлсэн багц",
    description: "Дүрэм, яриа, сонсгол хосолсон анхан болон дунд шатны цогц хичээл.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    badge: "ЭРЭЛТТЭЙ",
    badgeColor: "text-rose-600 bg-rose-100",
    oldPrice: "150,000₮",
    price: "90,000₮"
  },
  {
    id: 4,
    title: "Python програмчлалын үндэс",
    description: "Өгөгдлийн шинжилгээ болон хиймэл оюун ухааны суурь болох Python хэлийг сурах.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&w=800&q=80",
    price: "100,000₮"
  },
  {
    id: 5,
    title: "Дижитал маркетинг",
    description: "Сошиал медиа маркетинг, SEO, контент бүтээх арга барилд суралцах.",
    image: "https://images.unsplash.com/photo-1432888117426-1466c8a2fbb1?auto=format&fit=crop&w=800&q=80",
    badge: "ШИНЭ",
    badgeColor: "text-indigo-600 bg-white/90",
    price: "130,000₮"
  },
  {
    id: 6,
    title: "Мобайл апп хөгжүүлэлт (Flutter)",
    description: "iOS болон Android үйлдлийн системд зориулсан аппликейшн хөгжүүлэх.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    oldPrice: "200,000₮",
    price: "160,000₮"
  }
];

function CourseCard({ course }: { course: any }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full">
      <div className="aspect-video bg-slate-200 relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {course.badge && (
          <div className={`absolute top-4 left-4 backdrop-blur px-3 py-1 rounded-full text-xs font-bold ${course.badgeColor}`}>
            {course.badge}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-slate-500 mb-6 flex-grow">{course.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div>
            {course.oldPrice && <span className="block text-xs text-slate-500 line-through mb-1">{course.oldPrice}</span>}
            <span className="text-2xl font-bold text-slate-900">{course.price}</span>
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors">
            <ShoppingCart className="w-4 h-4" />
            Авах
          </button>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">ЭрдэмПлатформ</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/courses" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Сургалтууд</Link>
            <Link to="/my-courses" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Миний сургалтууд</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/profile" className="flex items-center gap-3 hover:bg-slate-100 p-2 rounded-xl transition-colors">
              <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                Б
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-slate-900 leading-none">Бат-Эрдэнэ</p>
                <p className="text-xs text-slate-500 mt-1">Оюутан</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-500 p-1.5 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ЭрдэмПлатформ</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Бид чанартай боловсролыг хүн бүрт хүртээмжтэй болгох зорилготой онлайн сургалтын платформ юм.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Холбоосууд</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-white transition-colors">Сургалтууд</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Бидний тухай</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Холбоо барих</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Тусламж</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-white transition-colors">Түгээмэл асуултууд</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Үйлчилгээний нөхцөл</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Нууцлалын бодлого</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 ЭрдэмПлатформ. Бүх эрх хуулиар хамгаалагдсан.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      {/* Hero & Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Мэдлэгээ тэлж, <span className="text-indigo-600">ирээдүйгээ бүтээ</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Манай платформ нь танд хамгийн эрэлттэй ур чадваруудыг цаг хугацаа, орон зайнаас үл хамааран эзэмших боломжийг олгоно.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Хэзээ ч, хаанаас ч</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Өөрийн цагийн хуваарьт тааруулан хүссэн үедээ, хүссэн газраасаа суралцах бүрэн боломжтой.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Чанартай агуулга</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Салбартаа тэргүүлэгч, туршлагатай мэргэжилтнүүдийн бэлтгэсэн цогц хөтөлбөрүүд.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Насан туршийн эрх</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Нэг удаа худалдан аваад тухайн хичээлээ насан туршдаа үзэх эрхтэй болно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Packages Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Багц хичээлүүд</h2>
              <p className="text-slate-600">Хамгийн их эрэлттэй байгаа цогц сургалтууд</p>
            </div>
            <Link to="/courses" className="hidden sm:block text-indigo-600 font-medium hover:text-indigo-700">Бүх багцыг үзэх &rarr;</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/courses" className="inline-block text-indigo-600 font-medium hover:text-indigo-700">Бүх багцыг үзэх &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Courses() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Бүх сургалтууд</h1>
          <p className="text-slate-600">Таны мэдлэгт хөрөнгө оруулах шилдэг сургалтуудтай танилцана уу.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Profile() {
  const [activeTab, setActiveTab] = useState('info');
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="w-full md:w-72 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sticky top-24">
              <div className="flex items-center gap-4 mb-6 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold">
                  Б
                </div>
                <div>
                  <p className="font-bold text-slate-900">Бат-Эрдэнэ</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Оюутан</p>
                </div>
              </div>
              
              <nav className="space-y-1.5">
                <button 
                  onClick={() => setActiveTab('info')} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === 'info' ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <User className={`w-5 h-5 ${activeTab === 'info' ? 'text-indigo-600' : 'text-slate-400'}`} /> 
                  Хэрэглэгчийн мэдээлэл
                </button>
                <button 
                  onClick={() => setActiveTab('history')} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === 'history' ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <History className={`w-5 h-5 ${activeTab === 'history' ? 'text-indigo-600' : 'text-slate-400'}`} /> 
                  Худалдан авалтын түүх
                </button>
                <button 
                  onClick={() => setActiveTab('settings')} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === 'settings' ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <Settings className={`w-5 h-5 ${activeTab === 'settings' ? 'text-indigo-600' : 'text-slate-400'}`} /> 
                  Тохиргоо
                </button>
              </nav>
              
              <div className="mt-8 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <LogOut className="w-5 h-5 text-rose-500" /> 
                  Системээс гарах
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow">
            
            {/* Tab: User Info */}
            {activeTab === 'info' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Хэрэглэгчийн мэдээлэл</h2>
                  <p className="text-slate-500 mt-1">Өөрийн хувийн мэдээллээ шинэчлэх болон засах боломжтой.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 pb-8 border-b border-slate-100">
                  <div className="relative group cursor-pointer">
                    <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-3xl font-bold transition-transform group-hover:scale-105">
                      Б
                    </div>
                    <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-slate-100 text-slate-600 group-hover:text-indigo-600 transition-colors">
                      <Camera className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Профайл зураг</h3>
                    <p className="text-sm text-slate-500 mt-1 mb-3 max-w-sm">PNG, JPG форматтай, 2MB-аас ихгүй хэмжээтэй зураг оруулна уу.</p>
                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg transition-colors">
                      Зураг солих
                    </button>
                  </div>
                </div>
                
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Овог</label>
                    <input 
                      type="text" 
                      defaultValue="Бат" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Нэр</label>
                    <input 
                      type="text" 
                      defaultValue="Эрдэнэ" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">И-мэйл хаяг</label>
                    <input 
                      type="email" 
                      defaultValue="bat-erdene@example.com" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Утасны дугаар</label>
                    <input 
                      type="tel" 
                      defaultValue="+976 99112233" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" 
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Миний тухай</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900 resize-none" 
                      placeholder="Өөрийнхөө тухай товч танилцуулга бичнэ үү..."
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2 flex justify-end mt-2">
                    <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium shadow-sm shadow-indigo-200 transition-all hover:shadow-md hover:-translate-y-0.5">
                      Мэдээлэл хадгалах
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Tab: Purchase History */}
            {activeTab === 'history' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Худалдан авалтын түүх</h2>
                  <p className="text-slate-500 mt-1">Таны өмнө нь худалдан авсан бүх сургалтуудын жагсаалт.</p>
                </div>
                
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50">
                      <tr className="text-sm text-slate-600 border-b border-slate-200">
                        <th className="py-4 px-6 font-semibold">Огноо</th>
                        <th className="py-4 px-6 font-semibold">Сургалт</th>
                        <th className="py-4 px-6 font-semibold">Төлөв</th>
                        <th className="py-4 px-6 font-semibold text-right">Үнэ</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 text-slate-500">2026.03.10</td>
                        <td className="py-4 px-6 font-medium text-slate-900">Вэб хөгжүүлэлтийн цогц багц</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
                            Амжилттай
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right font-bold text-slate-900">150,000₮</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 text-slate-500">2026.02.05</td>
                        <td className="py-4 px-6 font-medium text-slate-900">Англи хэлний эрчимжүүлсэн багц</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
                            Амжилттай
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right font-bold text-slate-900">90,000₮</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab: Settings */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Тохиргоо</h2>
                  <p className="text-slate-500 mt-1">Бүртгэлийн аюулгүй байдал болон бусад тохиргоо.</p>
                </div>
                
                <div className="max-w-xl">
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                        <Shield className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">Нууц үг солих</h3>
                    </div>
                    
                    <form className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Одоогийн нууц үг</label>
                        <input 
                          type="password" 
                          placeholder="••••••••" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Шинэ нууц үг</label>
                        <input 
                          type="password" 
                          placeholder="••••••••" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" 
                        />
                        <p className="text-xs text-slate-500 mt-2">Нууц үг хамгийн багадаа 8 тэмдэгтээс бүрдсэн байх шаардлагатай.</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Шинэ нууц үг давтах</label>
                        <input 
                          type="password" 
                          placeholder="••••••••" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" 
                        />
                      </div>
                      <div className="pt-2">
                        <button type="button" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                          Нууц үг шинэчлэх
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Бидний тухай</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Боловсролыг хүн бүрт хүртээмжтэй, чанартай, уян хатан болгох нь бидний эрхэм зорилго юм. Бид орчин үеийн технологид суурилсан шилдэг сургалтын платформыг хөгжүүлж байна.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-3xl text-center border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Алсын хараа</h3>
            <p className="text-slate-600">Монголын хамгийн шилдэг, цогц онлайн сургалтын платформ болох.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl text-center border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Бидний үнэт зүйл</h3>
            <p className="text-slate-600">Чанартай боловсрол, тасралтгүй хөгжил, суралцагчийн амжилт.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl text-center border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Хүртээмжтэй байдал</h3>
            <p className="text-slate-600">Хаанаас ч, хэзээ ч суралцах боломжийг технологийн тусламжтайгаар олгох.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Холбоо барих</h1>
          <p className="text-lg text-slate-600">Бидэнтэй холбогдохыг хүсвэл доорх мэдээллийн дагуу холбогдоно уу эсвэл зурвас үлдээгээрэй.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12 bg-indigo-600 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">Мэдээлэл</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-indigo-500/50 p-3 rounded-xl shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Хаяг</h4>
                  <p className="text-indigo-100 leading-relaxed">Улаанбаатар хот, Сүхбаатар дүүрэг,<br/>8-р хороо, Эрдэм Тауэр 12 давхар</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-indigo-500/50 p-3 rounded-xl shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Утас</h4>
                  <p className="text-indigo-100">+976 7711-2233</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-indigo-500/50 p-3 rounded-xl shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">И-мэйл</h4>
                  <p className="text-indigo-100">info@erdemplatform.mn</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Зурвас илгээх</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Таны нэр</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" placeholder="Нэрээ оруулна уу" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">И-мэйл хаяг</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" placeholder="И-мэйл хаягаа оруулна уу" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Зурвас</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900 resize-none" placeholder="Бидэнд илгээх зурвасаа энд бичнэ үү..."></textarea>
              </div>
              <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-sm shadow-indigo-200 hover:shadow-md hover:-translate-y-0.5">Зурвас илгээх</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    { q: "Сургалтыг хэрхэн худалдаж авах вэ?", a: "Та өөрийн хүссэн сургалтаа сонгон 'Авах' товчийг дарж, төлбөрийн хэрэгслээ сонгон төлбөрөө төлснөөр сургалт таны 'Миний сургалтууд' хэсэгт нэмэгдэх болно." },
    { q: "Худалдаж авсан сургалтаа хэр удаан үзэх боломжтой вэ?", a: "Манай платформ дээрх бүх сургалтууд насан туршийн эрхтэйгээр олгогддог тул та хүссэн үедээ, хэдэн ч удаа давтан үзэх боломжтой." },
    { q: "Сургалтын төлбөрийг буцаах боломжтой юу?", a: "Хэрэв та сургалтыг худалдан авснаас хойш 7 хоногийн дотор, сургалтын 20%-иас бага хэсгийг үзсэн тохиолдолд төлбөрөө 100% буцаан авах боломжтой." },
    { q: "Гар утаснаас үзэх боломжтой юу?", a: "Тийм ээ, манай вэбсайт гар утас, таблет, компьютер зэрэг бүх төрлийн төхөөрөмж дээр ажиллахаар бүрэн тохируулагдсан бөгөөд хаанаас ч үзэх боломжтой." }
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Түгээмэл асуултууд</h1>
          <p className="text-lg text-slate-600">Бидэнд хамгийн их ирдэг асуултууд болон тэдгээрийн хариултууд.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border ${openIndex === index ? 'border-indigo-200 shadow-md shadow-indigo-100/50' : 'border-slate-200 shadow-sm'} rounded-2xl overflow-hidden transition-all duration-300 bg-white`}>
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className={`font-semibold pr-4 ${openIndex === index ? 'text-indigo-700' : 'text-slate-900'}`}>{faq.q}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-indigo-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Terms() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-5 mb-10 pb-8 border-b border-slate-100">
          <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
            <FileText className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Үйлчилгээний нөхцөл</h1>
            <p className="text-slate-500 mt-1">Сүүлд шинэчлэгдсэн: 2026 оны 3-р сарын 30</p>
          </div>
        </div>
        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
          <h3 className="text-xl font-bold mt-8 mb-4">1. Нийтлэг үндэслэл</h3>
          <p className="mb-6">Энэхүү үйлчилгээний нөхцөл нь "ЭрдэмПлатформ" цахим хуудас болон түүнтэй холбоотой үйлчилгээг ашиглахтай холбоотой харилцааг зохицуулна. Хэрэглэгч та манай платформыг ашигласнаар эдгээр нөхцөлийг хүлээн зөвшөөрсөнд тооцно.</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">2. Хэрэглэгчийн эрх, үүрэг</h3>
          <p className="mb-6">Хэрэглэгч нь өөрийн бүртгэлийн мэдээллийн үнэн зөв байдлыг хариуцах бөгөөд нэвтрэх нууц үгээ бусдад дамжуулахгүй байх үүрэгтэй. Платформ дээрх контентыг хуулбарлах, олшруулах, худалдаалахыг хатуу хориглоно.</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">3. Төлбөр болон буцаан олголт</h3>
          <p className="mb-6">Сургалтын төлбөрийг цахимаар төлөх боломжтой бөгөөд төлбөр амжилттай хийгдсэнээр сургалт үзэх эрх нээгдэнэ. Буцаан олголтын хувьд 7 хоногийн дотор, 20%-иас бага үзсэн тохиолдолд хүсэлт гаргах боломжтой.</p>
        </div>
      </div>
    </div>
  );
}

function Privacy() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-5 mb-10 pb-8 border-b border-slate-100">
          <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Нууцлалын бодлого</h1>
            <p className="text-slate-500 mt-1">Сүүлд шинэчлэгдсэн: 2026 оны 3-р сарын 30</p>
          </div>
        </div>
        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
          <h3 className="text-xl font-bold mt-8 mb-4">1. Мэдээлэл цуглуулах</h3>
          <p className="mb-6">Бид таныг бүртгүүлэх, үйлчилгээ ашиглах үед таны нэр, и-мэйл хаяг, утасны дугаар зэрэг хувийн мэдээллийг цуглуулдаг. Мөн системийн хэвийн ажиллагааг хангах зорилгоор IP хаяг, төхөөрөмжийн мэдээллийг бүртгэж авч болно.</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">2. Мэдээллийн ашиглалт</h3>
          <p className="mb-6">Цуглуулсан мэдээллийг үйлчилгээний чанарыг сайжруулах, хэрэглэгчид тусламж үзүүлэх, шинэ сургалт болон урамшууллын мэдээлэл хүргэх зорилгоор ашиглана. Бид таны мэдээллийг гуравдагч этгээдэд худалдахгүй, түгээхгүй.</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">3. Мэдээллийн аюулгүй байдал</h3>
          <p className="mb-6">Бид хэрэглэгчийн мэдээллийг хамгаалахын тулд орчин үеийн шифрлэлтийн технологи болон аюулгүй байдлын стандартуудыг нэвтрүүлэн ажилладаг.</p>
        </div>
      </div>
    </div>
  );
}

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Image/Branding */}
        <div className="w-full md:w-1/2 bg-indigo-600 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2 mb-12 inline-flex">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ЭрдэмПлатформ</span>
            </Link>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isLogin ? 'Тавтай морил!' : 'Шинэ аялалаа эхлүүлээрэй'}
            </h2>
            <p className="text-indigo-100 text-lg">
              {isLogin 
                ? 'Өөрийн бүртгэлээр нэвтэрч, сургалтуудаа үргэлжлүүлээрэй.' 
                : 'Мянга мянган суралцагчидтай нэгдэж, мэдлэгээ тэлээрэй.'}
            </p>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-80 h-80 bg-indigo-700 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {isLogin ? 'Бүртгэлгүй юу? Бүртгүүлэх' : 'Бүртгэлтэй юу? Нэвтрэх'}
            </button>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            {isLogin ? 'Нэвтрэх' : 'Бүртгүүлэх'}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Овог нэр</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Бат-Эрдэнэ"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" 
                    required
                  />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">И-мэйл хаяг</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" 
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-slate-700">Нууц үг</label>
                {isLogin && (
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                    Нууц үгээ мартсан?
                  </a>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all text-slate-900" 
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-medium shadow-sm shadow-indigo-200 transition-all hover:shadow-md hover:-translate-y-0.5 mt-6"
            >
              {isLogin ? 'Нэвтрэх' : 'Бүртгүүлэх'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-500">Эсвэл дараах хаягаар нэвтрэх</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button type="button" className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button type="button" className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" color="#1877F2" />
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
