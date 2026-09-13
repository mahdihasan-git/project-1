import type { Technology } from "../types/technology";
import StackItem from "./StackItem";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  const count = stack.length;

  return (
    <aside
      aria-label="Your Stack"
      className="h-fit rounded-2xl border border-hairline bg-white p-5 lg:sticky lg:top-24"
    >
      <h3 className="text-lg font-bold text-ink">Your Stack</h3>
      <p className="mt-1 text-sm text-ink-soft">
        {count === 0 ? "No technologies selected yet." : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="mt-4 flex h-28 items-center justify-center rounded-xl border border-dashed border-hairline">
          <p className="text-sm text-ink-soft">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-2">
            {stack.map((technology) => (
              <StackItem key={technology.id} technology={technology} onRemove={onRemove} />
            ))}
          </ul>
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-rose-200 py-2.5 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
