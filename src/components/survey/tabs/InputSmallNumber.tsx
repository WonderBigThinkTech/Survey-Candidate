
interface InputSmallNumberProps{
    data : string,
    dataType : string,
    pageStatus: string;
    addIndex: string;
    additionalData?: any;
    answerContent: any[];
    handleSetAnswerContent: (newValue: any, currentPageIndex: number, currentIndex: number, dataType: string) => void;
}

const InputSmallNumber = ({data, pageStatus, addIndex, additionalData, dataType, answerContent, handleSetAnswerContent}:InputSmallNumberProps) => {
    
    
    const currentPageIndex = parseInt(pageStatus);
    const currentIndex = parseInt(addIndex);

    const handleInputSmallNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        handleSetAnswerContent(newValue, currentPageIndex, currentIndex, dataType);
    }

    const handleInputSmallText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        handleSetAnswerContent(newValue, currentPageIndex, currentIndex, dataType);
    }


    
    return (
        <li>
            <div className="form-group">
                
                {
                    dataType === 'inputSmallNumber' ?

                    <input 
                        className="form-control"
                        type='number'
                        placeholder={data}
                        min={additionalData.minValue}
                        max={additionalData.maxVal}
                        value={answerContent[currentPageIndex]?.[currentIndex]}
                        onChange={handleInputSmallNumber}
                    />

                    :

                    <input 
                        className="form-control"
                        type='text'
                        placeholder={data}
                        value={answerContent[currentPageIndex]?.[currentIndex]}
                        onChange={handleInputSmallText}
                    />

                }

            </div>
        </li>
    )
}

export default InputSmallNumber;