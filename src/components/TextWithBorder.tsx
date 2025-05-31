const TextWithBorder = ({ text }: { text: string }) => {
    return (
        <div className=' mb-6'>
            <span className='w-20 h-[1px] bg-gray-800 block mb-1'></span>
            <h1 className='text-3xl font-medium'>{text}</h1>
        </div>
    );
}

export default TextWithBorder