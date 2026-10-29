type Props = {
  isFree: boolean;
};

export default function CostBadge({ isFree }: Props) {
  return (
    <span
      className={`inline-flex w-fit shrink-0 items-center rounded-full px-3 py-1 text-[11px] font-semibold ${
        isFree ? "bg-green-50 text-green-900" : "bg-yellow-50 text-yellow-900"
      }`}
    >
      {isFree ? "Бесплатно" : "Платно"}
    </span>
  );
}
