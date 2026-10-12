// Cards for the case-study sections on the agency, industry and service pages.
// Reads the same data as /case-study/ (src/app/case-study/[story]/components/caseData.tsx),
// in the shape HowHotelScaling and CasStudyCard expect.
import { casStudiesData } from "@/app/case-study/[story]/components/caseData";

export function caseStudyCards(slugs: string[]) {
  return slugs
    .map((slug) => casStudiesData.find((c) => c.slug === slug))
    .filter((c): c is (typeof casStudiesData)[number] => Boolean(c))
    .map((c) => ({
      src: c.img,
      title: c.title,
      description: c.description,
      slug: c.slug,
      imgBg: c.imgBg,
    }));
}
