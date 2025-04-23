import CategoryReceipt from "@/components/CategoryReceipt";
import SectionHome from "@/components/SectionHome";
import TrendingReceipt from "@/components/TrendingReceipt";

export default function Home() {
  return (
    <div>
      <SectionHome />
      <CategoryReceipt />
      <TrendingReceipt />
    </div>
  );
}
