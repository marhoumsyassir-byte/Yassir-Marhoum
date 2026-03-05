import { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Settings as SettingsIcon, 
  Bell, 
  MessageCircle, 
  Bot, 
  Search,
  Menu,
  X
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import LeadsTable from './components/LeadsTable';
import Settings from './components/Settings';
import Notifications from './components/Notifications';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'leads', label: 'Prospects (Leads)', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: 3 },
    { id: 'settings', label: 'Paramètres', icon: SettingsIcon },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white md:flex">
        <div className="flex h-16 items-center border-b border-slate-200 px-6">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <MessageCircle size={18} />
            </div>
            <span>StudyBot Pro</span>
          </div>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className={isActive ? 'text-indigo-700' : 'text-slate-400'} />
                  {item.label}
                </div>
                {item.badge && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-xs font-medium text-rose-600">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
        <div className="border-t border-slate-200 p-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium text-slate-900">Agence Atlas</span>
              <span className="text-xs text-slate-500">Admin</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-slate-500 hover:text-slate-900"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <MessageCircle size={18} />
              </div>
              <span>StudyBot Pro</span>
            </div>
          </div>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <h1 className="text-lg font-semibold text-slate-900 capitalize">
              {navItems.find(i => i.id === activeTab)?.label}
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="h-9 w-64 rounded-md border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <button className="relative text-slate-500 hover:text-slate-900">
                <Bell size={20} />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-medium text-white">
                  3
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'leads' && <LeadsTable />}
          {activeTab === 'notifications' && <Notifications />}
          {activeTab === 'settings' && <Settings />}
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-slate-900/80" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative flex w-full max-w-xs flex-col bg-white">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  <MessageCircle size={18} />
                </div>
                <span>StudyBot Pro</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-500">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 space-y-1 p-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className={isActive ? 'text-indigo-700' : 'text-slate-400'} />
                      {item.label}
                    </div>
                    {item.badge && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-xs font-medium text-rose-600">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
