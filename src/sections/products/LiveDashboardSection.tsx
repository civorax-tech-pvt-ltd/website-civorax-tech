import ScrollReveal from '../../components/ScrollReveal'

const metrics = [
  { label: 'TRANSACTIONS / 24H', value: '1,284', detail: '▲ 12.4% vs yesterday', detailColor: '#4ecdc4' },
  { label: 'ACTIVE TERMINALS', value: '36', detail: '/38', detailSub: '2 in maintenance' },
  { label: 'BRANCHES ONLINE', value: '11', detail: '/12', detailSub: '1 syncing (Gandaki)' },
  { label: 'IRD SUBMISSIONS', value: '100%', detail: '✓ All branches compliant', detailColor: '#4ecdc4' },
]

const hourlyData = [45, 62, 78, 55, 90, 120, 95, 85, 110, 130, 105, 88]
const timeLabels = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']

const events = [
  'CHK · DHARAN-01 · Rs. 2,480',
  'SYNC · BAGMATI-04 · OK',
  'VAT · KATH-02 · LOG #1482',
  'CHK · DHARAN-03 · Rs. 1,950',
  'RETRY · GANDAKI · 3s',
  'CHK · BIRAT-01 · Rs. 880',
  'SYNC · KOSHI-02 · OK',
  'CHK · DHARAN-01 · Rs. 3,120',
  'VAT · BAGMATI-02 · LOG #1483',
  'SYNC · KATH-03 · OK',
]

export default function LiveDashboardSection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width">
        <ScrollReveal>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#f5f5f5', border: '1px solid #e5e5e5' }}
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4ecdc4' }} />
                <span className="label-text" style={{ color: '#1a1a1a' }}>LIVE PRODUCTION SNAPSHOT</span>
                <span className="label-text" style={{ color: '#6b7280' }}>• Jun 23, 2026</span>
              </div>
              <span className="label-text" style={{ color: '#6b7280' }}>SCOPE: ALL BRANCHES</span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: '1px solid #e5e5e5' }}>
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="px-6 py-5"
                  style={{
                    borderRight: i < 3 ? '1px solid #e5e5e5' : 'none',
                    borderBottom: '1px solid #e5e5e5',
                  }}
                >
                  <p className="label-text mb-2" style={{ color: '#6b7280' }}>{m.label}</p>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#1a1a1a', letterSpacing: '-0.02em' }}>
                    {m.value}
                    {m.detail && !m.detailColor && (
                      <span className="text-base font-normal" style={{ color: '#6b7280' }}>{m.detail}</span>
                    )}
                  </p>
                  {m.detailColor && (
                    <p className="text-[13px] mt-1" style={{ color: m.detailColor }}>{m.detail}</p>
                  )}
                  {m.detailSub && (
                    <p className="text-[13px] mt-1" style={{ color: '#6b7280' }}>{m.detailSub}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderTop: '1px solid #e5e5e5' }}>
              {/* Bar Chart */}
              <div className="p-6">
                <p className="label-text mb-4" style={{ color: '#6b7280' }}>HOURLY THROUGHPUT</p>
                <div className="flex items-end justify-between gap-1 h-32">
                  {hourlyData.map((val, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <div
                        className="w-full rounded-t"
                        style={{
                          height: `${(val / 130) * 100}%`,
                          backgroundColor: `rgba(200,240,125, ${0.4 + (val / 130) * 0.6})`,
                          minHeight: '4px',
                        }}
                      />
                      <span className="text-[10px] mt-1 font-mono" style={{ color: '#9ca3af' }}>
                        {timeLabels[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Stream */}
              <div
                className="p-5 m-4 rounded-xl overflow-hidden"
                style={{ backgroundColor: '#1a1a1a' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#4ecdc4' }} />
                  <span className="label-text" style={{ color: '#4ecdc4' }}>EVENT STREAM</span>
                </div>
                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {events.map((e, i) => (
                    <p key={i} className="font-mono text-xs" style={{ color: '#c8f07d' }}>
                      {e}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Status Bar */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-4 px-2">
            <span className="text-sm" style={{ color: '#6b7280' }}>All sync engines nominal</span>
            <span className="font-mono text-[13px]" style={{ color: '#6b7280' }}>
              REQ/s: 284 • LATENCY: 42ms • ERR: 0.01%
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
