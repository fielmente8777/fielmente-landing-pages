// Case-study data read by utils/caseStudyCards.ts.

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  img: string;
  imgBg?: string;
};

export const casStudiesData: CaseStudy[] = [];
