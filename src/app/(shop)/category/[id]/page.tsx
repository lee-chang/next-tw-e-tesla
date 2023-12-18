import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  if (id === "women") notFound();
  return <div>CategoryPage</div>;
}
