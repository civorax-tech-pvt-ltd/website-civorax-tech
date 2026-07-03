'use client'

const branches = [
  { name: 'DHARAN-01', status: 'online', transactions: 89, stock: '94%' },
  { name: 'ITAHARI-01', status: 'online', transactions: 62, stock: '87%' },
  { name: 'DHARAN-02', status: 'online', transactions: 36, stock: '91%' },
]

const inventory = [
  { item: 'Samsung TV 55"', stock: 12, reorder: 5, status: 'ok' },
  { item: 'LG Washing Machine', stock: 3, reorder: 5, status: 'low' },
  { item: 'Panasonic AC 1.5T', stock: 8, reorder: 3, status: 'ok' },
  { item: 'Sony Soundbar', stock: 1, reorder: 4, status: 'critical' },
]

export default function ERPMockup() {
  return (
    <div className="w-full max-w-[580px] mx-auto mt-10">
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-dark)' }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-dark)' }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--terminal-red)' }} />
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--terminal-yellow)' }} />
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--terminal-green)' }} />
          </div>
          <span className="label-text" style={{ color: 'var(--text-tertiary)' }}>CivoraX Core ERP — Dashboard</span>
          <span className="text-[9px] font-mono" style={{ color: 'var(--teal)' }}>3/3 ONLINE</span>
        </div>

        <div className="p-4">
          {/* Branch cards */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {branches.map((b) => (
              <div
                key={b.name}
                className="rounded-lg p-3"
                style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-dark)' }}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--teal)' }} />
                  <span className="label-text text-[9px]" style={{ color: 'var(--teal)' }}>{b.name}</span>
                </div>
                <p className="text-xl font-bold" style={{ color: 'var(--border-light)', letterSpacing: '-0.02em' }}>
                  {b.transactions}
                </p>
                <p className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>transactions today</p>
                <div className="mt-2">
                  <div className="flex justify-between text-[9px] mb-0.5">
                    <span style={{ color: 'var(--text-tertiary)' }}>Stock</span>
                    <span style={{ color: 'var(--accent-light)' }}>{b.stock}</span>
                  </div>
                  <div className="w-full h-1 rounded-full" style={{ backgroundColor: 'var(--border-dark)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: b.stock,
                        backgroundColor: 'var(--accent-light)',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sync status */}
          <div
            className="flex items-center justify-between rounded-lg px-3 py-2 mb-4"
            style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-dark)' }}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-live" style={{ backgroundColor: 'var(--teal)' }} />
              <span className="label-text text-[10px]" style={{ color: 'var(--teal)' }}>SYNC ENGINE</span>
            </div>
            <span className="text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>
              LATENCY: 32ms · QUEUE: 0 · ERR: 0.00%
            </span>
          </div>

          {/* Inventory table */}
          <div
            className="rounded-lg overflow-hidden"
            style={{ border: '1px solid var(--border-dark)' }}
          >
            <div
              className="grid grid-cols-[1fr_60px_60px_60px] px-3 py-2"
              style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-dark)' }}
            >
              <span className="label-text text-[9px]" style={{ color: 'var(--text-tertiary)' }}>ITEM</span>
              <span className="label-text text-[9px] text-center" style={{ color: 'var(--text-tertiary)' }}>STOCK</span>
              <span className="label-text text-[9px] text-center" style={{ color: 'var(--text-tertiary)' }}>REORDER</span>
              <span className="label-text text-[9px] text-center" style={{ color: 'var(--text-tertiary)' }}>STATUS</span>
            </div>
            {inventory.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_60px_60px_60px] px-3 py-2"
                style={{ borderBottom: i < inventory.length - 1 ? '1px solid var(--border-dark)' : 'none' }}
              >
                <span className="text-[12px] font-medium" style={{ color: 'var(--border-light)' }}>{item.item}</span>
                <span className="text-[12px] text-center" style={{ color: 'var(--text-secondary)' }}>{item.stock}</span>
                <span className="text-[12px] text-center" style={{ color: 'var(--text-tertiary)' }}>{item.reorder}</span>
                <span
                  className="text-[10px] text-center font-bold uppercase"
                  style={{
                    color: item.status === 'ok' ? 'var(--teal)' : item.status === 'low' ? 'var(--yellow)' : '#ef4444',
                  }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
