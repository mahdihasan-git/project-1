import { X } from "lucide-react";
import type { Technology } from "../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

export default function StackItem({ technology, onRemove }: StackItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-hairline p-3">
      <img src={technology.icon} alt="" aria-hidden="true" className="h-8 w-8 shrink-0 object-contain" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{technology.name}</p>
        <p className="text-xs text-ink-soft">{technology.category}</p>
      </div>
      <button
        type="button"
        onClick={() => onRemove(technology.id)}
        aria-label={`Remove ${technology.name} from your stack`}
        className="shrink-0 rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-ink"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </li>
  );
}
