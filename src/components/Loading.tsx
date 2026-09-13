export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-hairline py-24 text-center"
    >
      <span
        className="h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"
        aria-hidden="true"
      />
      <p className="text-sm font-medium text-ink-soft">Loading technologies…</p>
    </div>
  );
}