import { AlertTriangle, Clock, Calendar, MessageSquare, Check, X } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'alert',
    title: 'Volume de messages élevé',
    message: 'Plus de 50 messages reçus dans la dernière heure. L\'IA gère actuellement 85% des requêtes.',
    time: 'Il y a 10 min',
    icon: <AlertTriangle size={20} className="text-rose-500" />,
    bg: 'bg-rose-50',
    border: 'border-rose-200'
  },
  {
    id: 2,
    type: 'warning',
    title: 'Prospects en attente de réponse',
    message: '3 prospects qualifiés attendent une réponse humaine depuis plus de 2 heures.',
    time: 'Il y a 35 min',
    icon: <Clock size={20} className="text-amber-500" />,
    bg: 'bg-amber-50',
    border: 'border-amber-200'
  },
  {
    id: 3,
    type: 'action',
    title: 'Nouvelle demande de consultation',
    message: 'Amina K. (Canada, Master) a demandé une consultation pour demain à 14h00.',
    time: 'Il y a 1h',
    icon: <Calendar size={20} className="text-indigo-500" />,
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    actions: true
  },
  {
    id: 4,
    type: 'info',
    title: 'Rapport hebdomadaire disponible',
    message: 'Votre rapport de performance WhatsApp pour la semaine dernière est prêt.',
    time: 'Hier',
    icon: <MessageSquare size={20} className="text-blue-500" />,
    bg: 'bg-blue-50',
    border: 'border-blue-200'
  }
];

export default function Notifications() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Notifications</h2>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
          Tout marquer comme lu
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`relative flex gap-4 rounded-xl border p-4 shadow-sm transition-all hover:shadow-md ${notification.bg} ${notification.border}`}
          >
            <div className="mt-1 flex-shrink-0">
              {notification.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{notification.title}</h3>
                <span className="text-xs font-medium text-slate-500">{notification.time}</span>
              </div>
              <p className="mt-1 text-sm text-slate-700">{notification.message}</p>
              
              {notification.actions && (
                <div className="mt-3 flex gap-2">
                  <button className="flex items-center gap-1 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700">
                    <Check size={14} /> Accepter
                  </button>
                  <button className="flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
                    <X size={14} /> Refuser
                  </button>
                </div>
              )}
            </div>
            <button className="absolute right-4 top-4 text-slate-400 hover:text-slate-600">
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
