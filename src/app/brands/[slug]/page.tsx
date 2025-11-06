import {brands} from "data/data.js";
import BrandClient from "../../../components/BrandClient/BrandClient";

// Force static rendering for this route and pre-generate params
export const dynamic = "force-static";

export async function generateStaticParams() {
  return brands.map((b: any) => ({slug: b.tag}));
}

type Props = {params: {slug: string}};

export default async function BrandPage({params}: Props) {
  const brand = brands.find((b: any) => b.tag === params.slug) || null;

  if (!brand) {
    return (
      <div className="flex flex-col justify-center mt-3 lg:mt-7">
        <div className="self-center text-center p-6">Marca no encontrada</div>
      </div>
    );
  }

  // Render a server component that delegates interactive parts to a small client component
  return <BrandClient brand={brand} />;
}
