import clsx from "clsx";

export function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    `transition-colors py-2 leading-tight`,
    className,
    {
      md: `rounded text-sm`,
      lg: `px-5 rounded-lg text-2xl`,
    }[size],
    {
      primary: `bg-teal-600 hover:bg-teal-500 text-white `,
      outline: `bg-white hover:bg-teal-50 text-teal-600`,
    }[variant]
  );
  return <button className={buttonClassName}>{children}</button>;
}
