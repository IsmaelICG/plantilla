
interface CardLayoutProps {
    children?: JSX.Element | JSX.Element[]
}

export const CardLayout: React.FC<CardLayoutProps> = ({children}) => {

    return (
        <div className='w-5/6 sm:w-3/6 min-h-2/5 flex flex-col justify-center items-center bg-zinc-50 p-4 rounded-3xl shadow-xl'>
            <div className='flex w-full h-full justify-between flex-col gap-8'>
                {children}
            </div>
        </div>
    )
}

