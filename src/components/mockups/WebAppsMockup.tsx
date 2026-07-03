'use client'

export default function WebAppsMockup() {
  return (
    <div className="w-full max-w-[560px] mx-auto mt-10">
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-dark)' }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-3 px-4 py-2.5"
          style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-dark)' }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--terminal-red)' }} />
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--terminal-yellow)' }} />
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--terminal-green)' }} />
          </div>
          <div
            className="flex-1 flex items-center rounded-md px-3 py-1"
            style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-dark)' }}
          >
            <span className="text-[10px] font-mono" style={{ color: 'var(--text-tertiary)' }}>
              yourbusiness.com.np/dashboard
            </span>
          </div>
        </div>

        {/* Page content */}
        <div className="flex" style={{ minHeight: '280px' }}>
          {/* Sidebar */}
          <div
            className="w-36 p-3 flex-shrink-0"
            style={{ backgroundColor: 'var(--bg-primary)', borderRight: '1px solid var(--border-dark)' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--accent-dark)' }}>
                <span className="text-[8px] font-bold text-white">YB</span>
              </div>
              <span className="text-[10px] font-semibold" style={{ color: 'var(--border-light)' }}>Your Business</span>
            </div>
            {['Dashboard', 'Orders', 'Products', 'Customers', 'Settings'].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2 px-2 py-1.5 rounded mb-0.5"
                style={{
                  backgroundColor: i === 0 ? 'rgba(132,204,22,0.1)' : 'transparent',
                }}
              >
                <div className="w-3 h-3 rounded" style={{ backgroundColor: i === 0 ? 'var(--accent-light)' : 'var(--border-dark)' }} />
                <span
                  className="text-[10px]"
                  style={{ color: i === 0 ? 'var(--accent-light)' : 'var(--text-tertiary)' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[11px] font-semibold" style={{ color: 'var(--border-light)' }}>Dashboard</p>
                <p className="text-[9px]" style={{ color: 'var(--text-tertiary)' }}>Welcome back, Rajesh</p>
              </div>
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--accent-dark)' }}
              >
                <span className="text-[8px] font-bold text-white">RK</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: 'Revenue', value: 'NPR 4.2L', change: '+12%' },
                { label: 'Orders', value: '284', change: '+8%' },
                { label: 'Customers', value: '1,847', change: '+3%' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg p-2.5"
                  style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-dark)' }}
                >
                  <p className="text-[9px]" style={{ color: 'var(--text-tertiary)' }}>{s.label}</p>
                  <p className="text-[14px] font-bold" style={{ color: 'var(--border-light)' }}>{s.value}</p>
                  <p className="text-[9px]" style={{ color: 'var(--teal)' }}>{s.change}</p>
                </div>
              ))}
            </div>

            {/* Chart placeholder */}
            <div
              className="rounded-lg p-3"
              style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-dark)' }}
            >
              <p className="text-[9px] font-medium mb-2" style={{ color: 'var(--text-tertiary)' }}>WEEKLY ORDERS</p>
              <div className="flex items-end gap-1 h-16">
                {[40, 55, 35, 70, 60, 80, 45].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      backgroundColor: `rgba(132,204,22, ${0.3 + (h / 100) * 0.7})`,
                      minHeight: '4px',
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className="text-[8px] flex-1 text-center" style={{ color: 'var(--text-tertiary)' }}>{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
