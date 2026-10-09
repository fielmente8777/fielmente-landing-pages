import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "whatsapp" | "outline" | "light";
type Size = "md" | "sm" | "bar";

const base =
  "group/btn relative inline-flex cursor-pointer items-center justify-center gap-2.5 overflow-hidden border-0 font-body font-bold whitespace-nowrap no-underline [-webkit-tap-highlight-color:transparent] [transition:transform_.25s_var(--ease-soft),box-shadow_.25s] hover:[transform:translateY(-2px)] active:[transform:scale(.97)]";

const sizes: Record<Size, string> = {
  md: "min-h-[52px] rounded-full px-6 text-[16px]/[1.1]",
  sm: "min-h-11 rounded-full px-[18px] text-[14px]/[1.1]",
  bar: "min-h-[52px] flex-1 rounded-[14px] px-4 text-[16px]/[1.1]",
};

const variants: Record<Variant, string> = {
  // Orange button with a light sweep every few seconds.
  primary:
    "bg-brand text-ink hover:shadow-[0_12px_28px_rgba(242,102,51,.4)] after:pointer-events-none after:absolute after:inset-y-0 after:left-[-60%] after:w-[40%] after:bg-[linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent)] after:[transform:skewX(-20deg)] after:animate-shine",
  whatsapp: "bg-wa text-white hover:shadow-[0_12px_28px_rgba(14,124,102,.35)]",
  outline: "bg-transparent text-inherit shadow-[inset_0_0_0_2px_currentColor]",
  light: "bg-white text-ink shadow-[inset_0_0_0_1.5px_var(--color-line)]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${sizes[size]} ${variants[variant]} ${extra}`;
}

function Content({ children, icon, iconAfter }: { children: ReactNode; icon?: IconName; iconAfter?: IconName }) {
  return (
    <>
      {icon && <Icon name={icon} />}
      {children}
      {iconAfter && (
        <Icon
          name={iconAfter}
          className="h-5 w-5 [transition:transform_.25s_var(--ease-soft)] group-hover/btn:[transform:translateX(3px)]"
        />
      )}
    </>
  );
}

type Common = { variant?: Variant; size?: Size; icon?: IconName; iconAfter?: IconName };

export function ButtonLink({
  variant,
  size,
  icon,
  iconAfter,
  className,
  children,
  ...props
}: Common & ComponentProps<"a">) {
  return (
    <a className={buttonClass(variant, size, className)} {...props}>
      <Content icon={icon} iconAfter={iconAfter}>
        {children}
      </Content>
    </a>
  );
}

export function Button({
  variant,
  size,
  icon,
  iconAfter,
  className,
  children,
  ...props
}: Common & ComponentProps<"button">) {
  return (
    <button className={buttonClass(variant, size, className)} {...props}>
      <Content icon={icon} iconAfter={iconAfter}>
        {children}
      </Content>
    </button>
  );
}
