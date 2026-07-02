import ScrollReveal from '../../components/ScrollReveal'

const metrics = [
  { label: 'TRANSACTIONS / 24H', value: '187', detail: '▲ 9.2% vs yesterday', detailColor: 'var(--teal)' },
  { label: 'ACTIVE TERMINALS', value: '8', detail: '/9', detailSub: '1 in configuration' },
  { label: 'BRANCHES ONLINE', value: '3', detail: '/3', detailSub: '' },
  { label: 'IRD SUBMISSIONS', value: '100%', detail: 'All branches compliant', detailColor: 'var(--teal)' },
]

const hourlyData = [12, 18, 25, 20, 30, 28, 22, 15, 10, 8, 5, 2]
const timeLabels = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']

const events = [
  'CHK · DHARAN-01 · Rs. 2,480',
  'SYNC · ITAHARI-01 · OK',
  'VAT · DHARAN-02 · LOG #0041',
  'CHK · DHARAN-01 · Rs. 1,150',
  'CHK · ITAHARI-01 · Rs. 880',
  'SYNC · DHARAN-03 · OK',
  'VAT · ITAHARI-01 · LOG #0042',
  'CHK · DHARAN-02 · Rs. 3,120',
]

export default function LiveDashboardSection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width">
        <ScrollReveal>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-light)' }}
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--teal)' }} />
                <span className="label-text" style={{ color: 'var(--bg-primary)' }}>LIVE BETA SNAPSHOT</span>
                <span className="label-text" style={{ color: 'var(--text-tertiary)' }}>• Jun 2026</span>
              </div>
              <span className="label-text" style={{ color: 'var(--text-tertiary)' }}>SCOPE: KOSHI PROVINCE BETA</span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: '1px solid var(--border-light)' }}>
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="px-6 py-5"
                  style={{
                    borderRight: i < 3 ? '1px solid var(--border-light)' : 'none',
                    borderBottom: '1px solid var(--border-light)',
                  }}
                >
                  <p className="label-text mb-2" style={{ color: 'var(--text-tertiary)' }}>{m.label}</p>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--bg-primary)', letterSpacing: '-0.02em' }}>
                    {m.value}
                    {m.detail && !m.detailColor && (
                      <span className="text-base font-normal" style={{ color: 'var(--text-tertiary)' }}>{m.detail}</span>
                    )}
                  </p>
                  {m.detailColor && (
                    <p className="text-[13px] mt-1" style={{ color: m.detailColor }}>{m.detail}</p>
                  )}
                  {m.detailSub && (
                    <p className="text-[13px] mt-1" style={{ color: 'var(--text-tertiary)' }}>{m.detailSub}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderTop: '1px solid var(--border-light)' }}>
              {/* Bar Chart */}
              <div className="p-6">
                <p className="label-text mb-4" style={{ color: 'var(--text-tertiary)' }}>HOURLY THROUGHPUT</p>
                <div className="flex items-end justify-between gap-1 h-32">
                  {hourlyData.map((val, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <div
                        className="w-full rounded-t"
                        style={{
                          height: `${(val / 30) * 100}%`,
                          backgroundColor: `rgba(132,204,22, ${0.4 + (val / 30) * 0.6})`,
                          minHeight: '4px',
                        }}
                      />
                      <span className="text-[10px] mt-1 font-mono" style={{ color: 'var(--text-secondary)' }}>
                        {timeLabels[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Stream */}
              <div
                className="p-5 m-4 rounded-xl overflow-hidden"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--teal)' }} />
                  <span className="label-text" style={{ color: 'var(--teal)' }}>EVENT STREAM</span>
                </div>
                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {events.map((e, i) => (
                    <p key={i} className="font-mono text-xs" style={{ color: 'var(--accent-light)' }}>
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
            <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>All sync engines nominal</span>
            <span className="font-mono text-[13px]" style={{ color: 'var(--text-tertiary)' }}>
              REQ/s: 24 · LATENCY: 48ms · ERR: 0.00%
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
