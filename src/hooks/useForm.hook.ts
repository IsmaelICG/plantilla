import {useState} from 'react';

export const useForm = <T>(initialData: T) => {

    const[formData, setFormData] = useState<T>(initialData);

    const onChange = (e: React.ChangeEvent<HTMLImputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const resetForm = () => {
        setFormData(initialData);
    }

    return {
        formData,
        onChange,
        resetForm
    }
}

