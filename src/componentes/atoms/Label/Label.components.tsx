
interface LabelProps {
    text?: string,
    type?: string | number,
    id?: string,
    name?: string,
    value?: string,
    onChange?:(e: React.InputHTMLAttributes<HTMLInputElement>) => void,
}

export const Label: React.FC<LabelProps> = ({text, id, name, type="text", value, onChange}) => {


    return (
        <>
        <label>{text}</label>
        <input onChange={onChange} value={value} className='text-cyan-500 shadow-xl overline' type={type} id={id} name={name}></input>
        </>
    )
}

export default Label

