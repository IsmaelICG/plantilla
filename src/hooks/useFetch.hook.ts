import { useEffect, useState } from "react"

export interface UseEffectProps {
    url: string
}

export const useFetch = <T>({url}: UseEffectProps) => {

const [data, setData] = useState<T | null>(null);
const [hasError, sethasError] = useState(false);
const [isFetching, setIsFetching] = useState(false);

const fetchData = async (e?: React.FormEvent<HTMLFormElement>) => {
    try {
        const response = await fetch (url);
        const dataBuffer = await response.json();
        setData(dataBuffer);
        setIsFetching(false);
    } catch (e) {
        sethasError(true);
        setIsFetching(false);
    }
}

useEffect(() => {
    (async () => {
        await fetchData();
    })();
}, [])

    return {
        data,
        fetchData,
        hasError,
        isFetching
    }
}