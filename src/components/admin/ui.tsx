import type { ReactNode } from 'react';

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
      <div>
        <h1 className="text-[28px] font-normal tracking-[-0.02em] text-[#1d1d1f]">{title}</h1>
        {subtitle && <p className="text-[#86868b] text-[14px] mt-1">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        'bg-white border border-[#d2d2d7]/50 rounded-[16px] ' + className
      }
    >
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  icon,
  tone = 'default',
}: {
  label: string;
  value: ReactNode;
  hint?: string;
  icon?: ReactNode;
  tone?: 'default' | 'success' | 'warning' | 'danger';
}) {
  const toneBg =
    tone === 'success'
      ? 'bg-[#34c759]/10 text-[#34c759]'
      : tone === 'warning'
      ? 'bg-[#ff9500]/10 text-[#ff9500]'
      : tone === 'danger'
      ? 'bg-[#ff3b30]/10 text-[#ff3b30]'
      : 'bg-[#0071e3]/10 text-[#0071e3]';

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[12px] font-medium text-[#86868b] uppercase tracking-wider">
            {label}
          </div>
          <div className="mt-1.5 text-[28px] font-normal tracking-[-0.02em] text-[#1d1d1f]">
            {value}
          </div>
          {hint && <div className="mt-1 text-[12px] text-[#86868b]">{hint}</div>}
        </div>
        {icon && (
          <div
            className={
              'w-10 h-10 rounded-[10px] flex items-center justify-center ' + toneBg
            }
          >
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

export function Badge({
  children,
  tone = 'default',
}: {
  children: ReactNode;
  tone?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}) {
  const map: Record<string, string> = {
    default: 'bg-[#f5f5f7] text-[#424245] border-[#d2d2d7]/60',
    success: 'bg-[#34c759]/10 text-[#1d8a4a] border-[#34c759]/30',
    warning: 'bg-[#ff9500]/10 text-[#a55b00] border-[#ff9500]/30',
    danger: 'bg-[#ff3b30]/10 text-[#b3221a] border-[#ff3b30]/30',
    info: 'bg-[#0071e3]/10 text-[#0071e3] border-[#0071e3]/30',
  };
  return (
    <span
      className={
        'inline-flex items-center px-2 py-0.5 rounded-full border text-[11px] font-medium ' +
        map[tone]
      }
    >
      {children}
    </span>
  );
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="text-center py-16 px-6">
      {icon && (
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#86868b]">
          {icon}
        </div>
      )}
      <div className="text-[15px] font-medium text-[#1d1d1f]">{title}</div>
      {description && (
        <div className="text-[13px] text-[#86868b] mt-1 max-w-sm mx-auto leading-snug">
          {description}
        </div>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function formatDate(value: unknown): string {
  if (!value) return '—';
  let d: Date | null = null;
  if (typeof value === 'object' && value !== null && 'toDate' in value) {
    try {
      d = (value as { toDate: () => Date }).toDate();
    } catch {
      d = null;
    }
  } else if (value instanceof Date) {
    d = value;
  } else if (typeof value === 'string' || typeof value === 'number') {
    const parsed = new Date(value);
    if (!isNaN(parsed.getTime())) d = parsed;
  }
  if (!d) return '—';
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
