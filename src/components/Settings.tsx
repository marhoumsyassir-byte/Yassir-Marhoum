import { useState } from 'react';
import { Link, Users, Bell, Save, Plus, Trash2 } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Paramètres de l'Agence</h2>
        <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          <Save size={16} />
          Enregistrer
        </button>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64">
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => setActiveTab('general')}
              className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === 'general'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Link size={18} className={activeTab === 'general' ? 'text-indigo-700' : 'text-slate-400'} />
              Général & Liens
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === 'team'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Users size={18} className={activeTab === 'team' ? 'text-indigo-700' : 'text-slate-400'} />
              Équipe
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === 'notifications'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Bell size={18} className={activeTab === 'notifications' ? 'text-indigo-700' : 'text-slate-400'} />
              Notifications
            </button>
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-slate-900">Lien de réservation (Calendly/Cal.com)</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Ce lien sera envoyé automatiquement par l'IA aux prospects qualifiés.
                </p>
                <div className="mt-4">
                  <label htmlFor="booking-link" className="block text-sm font-medium text-slate-700">
                    URL de consultation
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500 sm:text-sm">
                      https://
                    </span>
                    <input
                      type="text"
                      name="booking-link"
                      id="booking-link"
                      className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                      defaultValue="calendly.com/agence-atlas/consultation-30min"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-medium text-slate-900">Message d'accueil WhatsApp</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Le premier message envoyé par le bot lorsqu'un prospect vous contacte.
                </p>
                <div className="mt-4">
                  <textarea
                    rows={4}
                    className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue="Bonjour ! Bienvenue chez Agence Atlas. 🎓 Je suis votre assistant virtuel. Pour mieux vous orienter, dans quel pays souhaitez-vous étudier ?"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Membres de l'équipe</h3>
                  <p className="mt-1 text-sm text-slate-500">Gérez qui peut accéder au tableau de bord et répondre aux prospects.</p>
                </div>
                <button className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <Plus size={16} />
                  Ajouter
                </button>
              </div>

              <div className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                      AM
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Amine M. (Vous)</p>
                      <p className="text-sm text-slate-500">amine@agence-atlas.ma</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                    Admin
                  </span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                      SM
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Sara M.</p>
                      <p className="text-sm text-slate-500">sara@agence-atlas.ma</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      Conseiller
                    </span>
                    <button className="text-slate-400 hover:text-rose-600">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">
                      KT
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Karim T.</p>
                      <p className="text-sm text-slate-500">karim@agence-atlas.ma</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      Conseiller
                    </span>
                    <button className="text-slate-400 hover:text-rose-600">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-slate-900">Préférences de notification</h3>
                <p className="mt-1 text-sm text-slate-500">Choisissez quand et comment vous souhaitez être alerté.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-slate-900">Nouveau prospect qualifié</p>
                    <p className="text-sm text-slate-500">Lorsqu'un prospect termine le flux de qualification IA.</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-slate-900">Consultation réservée</p>
                    <p className="text-sm text-slate-500">Lorsqu'un prospect réserve un créneau via votre lien.</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-slate-900">Intervention humaine requise</p>
                    <p className="text-sm text-slate-500">Lorsque l'IA ne peut pas répondre à une question complexe.</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-slate-900">Rapport hebdomadaire</p>
                    <p className="text-sm text-slate-500">Recevoir un résumé des performances chaque lundi.</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300"></div>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
