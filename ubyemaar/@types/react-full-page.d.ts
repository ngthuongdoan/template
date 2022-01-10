declare module "react-full-page" {
  type ControlComponentsProps = {
    getCurrentSlideIndex: () => number;
    onNext: () => void;
    onPrev: () => void;
    scrollToSlide: (n: number) => void;
    slidesCount: number;
  };

  type FullPageProps = {
    initialSlide?: number;
    duration?: number;
    controls?: boolean | React.FC<ControlComponentsProps>;
    controlProps?: unknown;
    beforeChange?: () => void;
    afterChange?: () => void;
    scrollMode?: "full-page" | "normal";
  };
  export const FullPage: React.FC<FullPageProps>;

  export const Slide: React.FC;
}
