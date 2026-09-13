import { useTechnologies } from "../hooks/useTechnologies";
import type { useStack } from "../hooks/useStack";
import Loading from "./Loading";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

type StackApi = ReturnType<typeof useStack>;

interface TechnologySectionProps {
  stackApi: StackApi;
}

export default function TechnologySection({ stackApi }: TechnologySectionProps) {
  const { technologies, isLoading, error } = useTechnologies();
  const { stack, isInStack, addToStack, removeFromStack, removeAll } = stackApi;

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-2 text-ink-soft">Pick one technology per category to build your ideal stack.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3">
          {isLoading && <Loading />}

          {!isLoading && error && (
            <div
              role="alert"
              className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center text-sm font-medium text-rose-600"
            >
              Couldn't load technologies right now. {error}
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isInStack(technology.id)}
                  onAdd={addToStack}
                />
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <StackSidebar stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
        </div>
      </div>
    </section>
  );
}
