import { forwardRef } from "react";

export const CustomInput = (props,ref) => {
  return <input ref={ref} className="text-input" {...props} />;
};

export const Input = forwardRef(CustomInput);
