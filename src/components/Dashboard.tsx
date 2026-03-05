import { 
  MessageCircle, 
  UserPlus, 
  CheckCircle2, 
  CalendarCheck, 
  GraduationCap, 
  TrendingUp,
  Clock,
  Bot
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const activityData = [
  { name: 'Lun', messages: 120, aiHandled: 90 },
  { name: 'Mar', messages: 150, aiHandled: 110 },
  { name: 'Mer', messages: 180, aiHandled: 140 },
  { name: 'Jeu', messages: 140, aiHandled: 100 },
  { name: 'Ven', messages: 210, aiHandled: 170 },
  { name: 'Sam', messages: 80, aiHandled: 75 },
  { name: 'Dim', messages: 60, aiHandled: 55 },
];

const peakHoursData = [
  { hour: '08:00', count: 20 },
  { hour: '10:00', count: 45 },
  { hour: '12:00', count: 80 },
  { hour: '14:00', count: 65 },
  { hour: '16:00', count: 90 },
  { hour: '18:00', count: 110 },
  { hour: '20:00', count: 50 },
  { hour: '22:00', count: 15 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* 1. Overview (Top metrics) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <MetricCard 
          title="Conversations" 
          value="940" 
          trend="+12%" 
          icon={<MessageCircle size={20} className="text-blue-500" />} 
        />
        <MetricCard 
          title="Nouveaux Leads" 
          value="145" 
          trend="+5%" 
          icon={<UserPlus size={20} className="text-indigo-500" />} 
        />
        <MetricCard 
          title="Qualifiés" 
          value="82" 
          trend="+18%" 
          icon={<CheckCircle2 size={20} className="text-emerald-500" />} 
        />
        <MetricCard 
          title="Consultations" 
          value="34" 
          trend="-2%" 
          icon={<CalendarCheck size={20} className="text-amber-500" />} 
          trendDown
        />
        <MetricCard 
          title="Clients Convertis" 
          value="12" 
          trend="+20%" 
          icon={<GraduationCap size={20} className="text-purple-500" />} 
        />
        <MetricCard 
          title="Taux de Conv." 
          value="8.2%" 
          trend="+1.1%" 
          icon={<TrendingUp size={20} className="text-rose-500" />} 
        />
      </div>

      {/* 2. Lead Pipeline */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-slate-900">Pipeline de Conversion</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <PipelineStage 
            title="Nouveau Message" 
            count={145} 
            percentage="100%" 
            color="bg-blue-500" 
          />
          <PipelineArrow percentage="56%" />
          <PipelineStage 
            title="Lead Qualifié" 
            count={82} 
            percentage="56%" 
            color="bg-emerald-500" 
          />
          <PipelineArrow percentage="41%" />
          <PipelineStage 
            title="Consultation" 
            count={34} 
            percentage="23%" 
            color="bg-amber-500" 
          />
          <PipelineArrow percentage="35%" />
          <PipelineStage 
            title="Client" 
            count={12} 
            percentage="8.2%" 
            color="bg-purple-500" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* 3. WhatsApp Activity */}
        <div className="col-span-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Activité WhatsApp</h2>
            <select className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600 outline-none">
              <option>Cette semaine</option>
              <option>Ce mois</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '14px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                <Area type="monotone" dataKey="messages" name="Total Messages" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorMessages)" />
                <Area type="monotone" dataKey="aiHandled" name="Gérés par IA" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorAi)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 5. AI Performance */}
        <div className="col-span-1 flex flex-col gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Performance IA</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                    <Bot size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Questions répondues</p>
                    <p className="text-xs text-slate-500">Automatiquement</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-slate-900">845</span>
              </div>
              
              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Temps gagné</p>
                    <p className="text-xs text-slate-500">Estimé cette semaine</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-slate-900">42h</span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                    <UserPlus size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Leads qualifiés</p>
                    <p className="text-xs text-slate-500">Par le chatbot</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-slate-900">68</span>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold text-slate-900">Heures de pointe</h2>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={peakHoursData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} dy={5} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} />
                  <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', fontSize: '12px' }} />
                  <Bar dataKey="count" fill="#818cf8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, icon, trendDown = false }: { title: string, value: string, trend: string, icon: React.ReactNode, trendDown?: boolean }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <div className="rounded-md bg-slate-50 p-1.5">{icon}</div>
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        <span className={`text-xs font-medium ${trendDown ? 'text-rose-600' : 'text-emerald-600'}`}>
          {trend}
        </span>
      </div>
    </div>
  );
}

function PipelineStage({ title, count, percentage, color }: { title: string, count: number, percentage: string, color: string }) {
  return (
    <div className="relative flex flex-1 flex-col items-center p-4 text-center">
      <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md ${color}`}>
        <span className="text-lg font-bold">{count}</span>
      </div>
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-xs font-medium text-slate-500">{percentage} du total</p>
    </div>
  );
}

function PipelineArrow({ percentage }: { percentage: string }) {
  return (
    <div className="hidden flex-col items-center px-2 md:flex">
      <span className="mb-1 text-xs font-medium text-slate-400">{percentage}</span>
      <div className="h-0.5 w-16 bg-slate-200 relative">
        <div className="absolute -right-1 -top-1 h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-slate-200"></div>
      </div>
    </div>
  );
}
