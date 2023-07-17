import { FC } from "react"

interface InputProps {
    labelText?: string,
    value?: string,
    type?: "text" | "password" | "email",
    error?: boolean,
    textStyle?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const Input: FC<InputProps> = ({labelText, value, type = "text", error = false, onChange, textStyle = ''}) => {
  return (
    <>
        <label className={`font-semibold ${textStyle}`}>{labelText}</label>
        <input onChange={onChange} type={type} value={value} className={error ? "rounded p-2 mb-1 border-red-500 border-solid border-2" : "rounded p-2 mb-1"} />
    </>
  )
}
