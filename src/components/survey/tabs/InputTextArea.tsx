
interface InputTextAreaProps{
    data : string;
    dataType : string;
    pageStatus: string;
    addIndex: string;
    answerContent: any[];
    handleSetAnswerContent: (newValue: any, currentPageIndex: number, currentIndex: number, dataType: string) => void;
}

const InputTextArea = ({data, pageStatus, addIndex, dataType, answerContent, handleSetAnswerContent}:InputTextAreaProps) => {
    
    const currentPageIndex = parseInt(pageStatus);
    const currentIndex = parseInt(addIndex);


    const handleInputTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        handleSetAnswerContent(newValue, currentPageIndex, currentIndex, dataType);
    }

    
    return (
        <li>
            <div className="form-group">
                <textarea 
                    name="additional_message_2"  
                    className="form-control" 
                    placeholder={data} 
                    onChange={handleInputTextArea} 
                    style={{height : '120px'}}>{answerContent[currentPageIndex]?.[currentIndex]}</textarea>
            </div>
        </li>
    )
}

export default InputTextArea;