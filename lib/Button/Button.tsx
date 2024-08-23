import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps): ReactNode => {
  return (
    <button className="px-4 py-2 text-white bg-red-400 rounded-lg">
      {children}
    </button>
  );
};
