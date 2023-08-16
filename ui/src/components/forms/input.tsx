import { HTMLInputTypeAttribute } from "react";

interface Props {
    label: string;
    id: string;
    type?: HTMLInputTypeAttribute;
    onChange: (v: string) => void;
    value: string;
}

const InputField: React.FC<Props> = ({ label, id, type, onChange, value }) => (
    <div className="flex flex-col gap-1">
        <label htmlFor={id} className="font-extralight">
            {label}:
        </label>
        <input
            className="px-2 py-1 bg-black bg-opacity-0 border-b border-solid border-white outline-none"
            type={type}
            id={id}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        />
    </div>
);

export default InputField;
