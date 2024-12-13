interface VerticalCheckBoxProps{
    index : string,
    data : string,
    pageStatus : string,
    addIndex : string;
    dataType: string;
    handleSetAnswerContent: (newValue: any, currentPageIndex: number, currentIndex: number, dataType: string) => void;
}

const VerticalCheckBox = ({pageStatus,addIndex, index, data, dataType, handleSetAnswerContent}:VerticalCheckBoxProps) => {
    

    const currentPageIndex = parseInt(pageStatus);
    const currentIndex = parseInt(addIndex);

    const handleVerticalCheckBox = () => {
        handleSetAnswerContent(index, currentPageIndex, currentIndex, dataType);
    }
    
    return (
        <li>
            <div className="checkbox_radio_container">
                <input type="checkbox" 
                    id={`${pageStatus}--${addIndex}--${index}`} 
                    name="question_3[]" 
                    className="required" 
                    onChange={handleVerticalCheckBox}
                    value={data}
                    // checked={answerData.includes(index.toString())}
                />
                <label className="checkbox" htmlFor={`${pageStatus}--${addIndex}--${index}`}></label>
                <label htmlFor={`${pageStatus}--${addIndex}--${index}`} className="wrapper">{data}</label>
            </div>
        </li>
    )
}

export default VerticalCheckBox;