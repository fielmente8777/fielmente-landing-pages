import Image, { type ImageProps } from "next/image";
import { IMAGE_SIZES } from "@/content/images";

type Props = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  src: string;
  alt: string;
  /** Rendered size hint; defaults to the file's intrinsic size. */
  width?: number;
  height?: number;
};

/** next/image for files in /public/images, with intrinsic sizes looked up automatically. */
export function SiteImage({ src, alt, width, height, fill, ...props }: Props) {
  if (fill) return <Image src={src} alt={alt} fill {...props} />;
  const size = IMAGE_SIZES[src];
  if (!size) throw new Error(`Unknown image ${src}: add it to content/images.ts`);
  return <Image src={src} alt={alt} width={width ?? size.width} height={height ?? size.height} {...props} />;
}

/** Width for a logo shown at a fixed CSS height, rounded for the srcset. */
export function widthAtHeight(src: string, height: number) {
  const size = IMAGE_SIZES[src];
  return Math.round((size.width / size.height) * height);
}

/** Keeps a fixed-height logo at its source file's exact aspect ratio. */
export function ratioStyle(src: string) {
  const size = IMAGE_SIZES[src];
  return { aspectRatio: `${size.width} / ${size.height}` };
}

/** Size of an image scaled down (never up) to fit a box, like max-width/max-height: 100%. */
export function fitInBox(src: string, boxWidth: number, boxHeight: number) {
  const size = IMAGE_SIZES[src];
  const scale = Math.min(1, boxWidth / size.width, boxHeight / size.height);
  return { width: size.width * scale, height: size.height * scale };
}
