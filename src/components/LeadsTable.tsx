import { useState } from 'react';
import { Search, Filter, MoreVertical, CheckCircle2, Clock, XCircle, User } from 'lucide-react';

const initialLeads = [
  { id: 1, name: 'Youssef B.', country: 'France', program: 'Licence', budget: '10k€ - 15k€', status: 'Qualifié', lastMessage: 'Il y a 2h', assignee: 'Sara M.' },
  { id: 2, name: 'Amina K.', country: 'Canada', program: 'Master', budget: '15k€ - 20k€', status: 'Consultation', lastMessage: 'Hier', assignee: 'Karim T.' },
  { id: 3, name: 'Mehdi R.', country: 'Espagne', program: 'Langues', budget: '5k€ - 10k€', status: 'Nouveau', lastMessage: 'Il y a 5 min', assignee: 'IA Bot' },
  { id: 4, name: 'Fatima Z.', country: 'UK', program: 'Master', budget: '+20k€', status: 'Client', lastMessage: 'Il y a 1 jour', assignee: 'Sara M.' },
  { id: 5, name: 'Omar H.', country: 'France', program: 'Licence', budget: '10k€ - 15k€', status: 'Perdu', lastMessage: 'Il y a 3 jours', assignee: 'Karim T.' },
  { id: 6, name: 'Salma E.', country: 'Canada', program: 'Doctorat', budget: '+20k€', status: 'Qualifié', lastMessage: 'Il y a 1h', assignee: 'Sara M.' },
  { id: 7, name: 'Ilyas M.', country: 'Allemagne', program: 'Master', budget: '10k€ - 15k€', status: 'Nouveau', lastMessage: 'Il y a 15 min', assignee: 'IA Bot' },
];

export default function LeadsTable() {
  const [leads, setLeads] = useState(initialLeads);
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Nouveau':
        return <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"><Clock size={12} /> Nouveau</span>;
      case 'Qualifié':
        return <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700"><CheckCircle2 size={12} /> Qualifié</span>;
      case 'Consultation':
        return <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700"><Clock size={12} /> Consultation</span>;
      case 'Client':
        return <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700"><CheckCircle2 size={12} /> Client</span>;
      case 'Perdu':
        return <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700"><XCircle size={12} /> Perdu</span>;
      default:
        return <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700">{status}</span>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher un prospect..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-full rounded-md border border-slate-200 bg-white pl-9 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:w-64"
            />
          </div>
          <button className="flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Filter size={16} />
            <span className="hidden sm:inline">Filtres</span>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <select className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
            <option value="">Tous les statuts</option>
            <option value="Nouveau">Nouveau</option>
            <option value="Qualifié">Qualifié</option>
            <option value="Consultation">Consultation</option>
            <option value="Client">Client</option>
          </select>
          <select className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
            <option value="">Tous les pays</option>
            <option value="France">France</option>
            <option value="Canada">Canada</option>
            <option value="Espagne">Espagne</option>
            <option value="UK">UK</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-3 font-medium">Nom</th>
                <th className="px-6 py-3 font-medium">Destination</th>
                <th className="px-6 py-3 font-medium">Programme</th>
                <th className="px-6 py-3 font-medium">Budget</th>
                <th className="px-6 py-3 font-medium">Statut</th>
                <th className="px-6 py-3 font-medium">Dernier Message</th>
                <th className="px-6 py-3 font-medium">Assigné à</th>
                <th className="px-6 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{lead.name}</td>
                  <td className="px-6 py-4 text-slate-600">{lead.country}</td>
                  <td className="px-6 py-4 text-slate-600">{lead.program}</td>
                  <td className="px-6 py-4 text-slate-600">{lead.budget}</td>
                  <td className="px-6 py-4">{getStatusBadge(lead.status)}</td>
                  <td className="px-6 py-4 text-slate-600">{lead.lastMessage}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {lead.assignee === 'IA Bot' ? (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                          <span className="text-[10px] font-bold">IA</span>
                        </div>
                      ) : (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                          <User size={12} />
                        </div>
                      )}
                      <span className="text-slate-600">{lead.assignee}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-3">
          <p className="text-sm text-slate-500">Affichage de 1 à 7 sur 145 prospects</p>
          <div className="flex gap-2">
            <button className="rounded-md border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>Précédent</button>
            <button className="rounded-md border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
}
