import { urlFor } from "@/sanity/lib/image";

const ALLERGEN_EMOJI = {
  glutine: "🌾",
  lattosio: "🥛",
  "frutta a guscio": "🥜",
  uova: "🥚",
  pesce: "🐟",
  molluschi: "🦑",
  soia: "🫘",
  sedano: "🌿",
  senape: "🌱",
  sesamo: "🌰",
};

function DishCard({ dish, allergensLabel }) {
  const imageUrl = dish.photo ? urlFor(dish.photo).width(400).height(280).fit("crop").url() : null;

  return (
    <div className="manga-panel bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant hover:-translate-y-1 transition-transform duration-300 flex flex-col">
      {imageUrl ? (
        <div className="h-44 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="h-44 bg-surface-container flex items-center justify-center">
          <span
            className="material-symbols-outlined text-outline text-5xl"
            style={{ fontVariationSettings: "'FILL' 0" }}
            aria-hidden="true"
          >
            restaurant_menu
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-headline-md text-[18px] font-bold text-on-surface leading-tight">
            {dish.name}
          </h3>
          <span className="font-headline-md text-primary font-bold text-lg shrink-0">
            €{Number(dish.price).toFixed(2)}
          </span>
        </div>

        {dish.description && (
          <p className="font-body-sm text-[14px] text-on-surface-variant leading-[1.5] flex-1">
            {dish.description}
          </p>
        )}

        {dish.allergens?.length > 0 && (
          <div className="mt-auto pt-2 border-t border-outline-variant/40">
            <p className="text-[10px] tracking-[0.08em] font-bold uppercase text-on-surface-variant/60 mb-1.5">
              {allergensLabel}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {dish.allergens.map((a) => (
                <span
                  key={a}
                  title={a}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-full text-[11px] font-medium capitalize"
                >
                  {ALLERGEN_EMOJI[a] ?? "⚠️"} {a}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MenuCategory({ category, items, allergensLabel }) {
  const available = items.filter((d) => d.available !== false);
  if (available.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-display-lg-mobile text-[32px] font-extrabold text-on-surface leading-none">
          {category}
        </h2>
        <div className="flex-1 h-px bg-outline-variant" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {available.map((dish, i) => (
          <DishCard key={dish._key ?? i} dish={dish} allergensLabel={allergensLabel} />
        ))}
      </div>
    </section>
  );
}
