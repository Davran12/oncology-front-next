type Props = { price: string; isFree: boolean };

export default function CostBadge({ price, isFree }: Props) {
  return (
    <span
      className={`inline-flex w-fit items-center whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold ${
        isFree ? "bg-green-50 text-green-900" : "bg-green-50 text-green-900"
      }`}
    >
      {price}
    </span>
  );
}
