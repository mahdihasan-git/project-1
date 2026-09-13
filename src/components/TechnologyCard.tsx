import { Check, Star } from "lucide-react";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } = technology;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-hairline bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <img src={icon} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
        <span className="whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          {badge}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-ink">{name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-ink-soft">
          {category}
        </span>
        <span className="text-ink-soft">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-ink">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
          {rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        aria-pressed={isAdded}
        className={`mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
            : "bg-ink text-white hover:bg-ink/90"
        }`}
      >
        {isAdded ? (
          <>
            <Check className="h-4 w-4" aria-hidden="true" />
            Added to Stack
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </article>
  );
}