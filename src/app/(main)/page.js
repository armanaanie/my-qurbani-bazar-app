import Banner from "@/components/banner";
import FeaturedSection from "@/components/FeaturedSection";
import QurbaniTips from "@/components/QurbaniTips";
import Testimonials from "@/components/testimonial";
import TopBreedSection from "@/components/TopBreedSection";


export default function Home() {
  return (
    
        <div>
          <Banner/>
          <FeaturedSection/>
          <QurbaniTips/>
          <Testimonials/>
          <TopBreedSection/>
        </div>
  );
}
