'use client'

export default function POSMockup() {
  const items = [
    { name: 'Samsung 55" Smart TV', qty: 1, price: '85,000' },
    { name: 'LG Washing Machine 8kg', qty: 1, price: '62,500' },
    { name: 'Panasonic AC 1.5 Ton', qty: 2, price: '1,25,000' },
  ]

  return (
    <div className="w-full max-w-[520px] mx-auto mt-10">
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
          <span className="label-text" style={{ color: 'var(--text-tertiary)' }}>CivoraX POS — Terminal 01</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-live" style={{ backgroundColor: 'var(--teal)' }} />
            <span className="text-[9px] font-mono" style={{ color: 'var(--teal)' }}>LIVE</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Status badges */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="label-text px-2 py-0.5 rounded"
              style={{ backgroundColor: 'rgba(78,205,196,0.15)', color: 'var(--teal)' }}
            >
              OFFLINE MODE
            </span>
            <span
              className="label-text px-2 py-0.5 rounded"
              style={{ backgroundColor: 'rgba(132,204,22,0.15)', color: 'var(--accent-light)' }}
            >
              IRD COMPLIANT
            </span>
          </div>

          {/* Items table */}
          <div
            className="rounded-lg overflow-hidden mb-4"
            style={{ border: '1px solid var(--border-dark)' }}
          >
            <div
              className="grid grid-cols-[1fr_40px_90px] px-3 py-2"
              style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-dark)' }}
            >
              <span className="label-text" style={{ color: 'var(--text-tertiary)' }}>ITEM</span>
              <span className="label-text text-center" style={{ color: 'var(--text-tertiary)' }}>QTY</span>
              <span className="label-text text-right" style={{ color: 'var(--text-tertiary)' }}>PRICE (NPR)</span>
            </div>
            {items.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_40px_90px] px-3 py-2.5"
                style={{ borderBottom: i < items.length - 1 ? '1px solid var(--border-dark)' : 'none' }}
              >
                <span className="text-[13px] font-medium" style={{ color: 'var(--border-light)' }}>{item.name}</span>
                <span className="text-[13px] text-center" style={{ color: 'var(--text-secondary)' }}>{item.qty}</span>
                <span className="text-[13px] text-right font-medium" style={{ color: 'var(--border-light)' }}>{item.price}</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="space-y-1.5 mb-4">
            <div className="flex justify-between text-[12px]">
              <span style={{ color: 'var(--text-tertiary)' }}>Subtotal</span>
              <span style={{ color: 'var(--text-secondary)' }}>NPR 2,72,500</span>
            </div>
            <div className="flex justify-between text-[12px]">
              <span style={{ color: 'var(--text-tertiary)' }}>VAT (13%)</span>
              <span style={{ color: 'var(--text-secondary)' }}>NPR 35,425</span>
            </div>
            <div
              className="flex justify-between text-[14px] font-bold pt-1.5"
              style={{ borderTop: '1px solid var(--border-dark)' }}
            >
              <span style={{ color: 'var(--border-light)' }}>Total</span>
              <span style={{ color: 'var(--accent-light)' }}>NPR 3,07,925</span>
            </div>
          </div>

          {/* Payment buttons */}
          <div className="grid grid-cols-3 gap-2">
            {['CASH', 'CARD', 'QR'].map((method) => (
              <button
                key={method}
                className="py-2 rounded-lg text-[11px] font-bold tracking-wider transition-all duration-200"
                style={{
                  backgroundColor: method === 'CASH' ? 'var(--accent-dark)' : 'var(--bg-primary)',
                  color: method === 'CASH' ? 'white' : 'var(--text-secondary)',
                  border: `1px solid ${method === 'CASH' ? 'var(--accent-dark)' : 'var(--border-dark)'}`,
                }}
              >
                {method}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
