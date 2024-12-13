
interface VerticalRadioProps {
    id: string;
    index: string;
    data: string;
    pageStatus: string;
    addIndex: string;
    dataType: string;
    answerContent: any[];
    handleSetAnswerContent: (newValue: any, currentPageIndex: number, currentIndex: number, dataType: string) => void;
  }
  
const VerticalRadio = ({ id, pageStatus, addIndex, index, data, dataType, answerContent, handleSetAnswerContent }: VerticalRadioProps) => {
  
    const handleVerticalRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      const currentPageIndex = parseInt(pageStatus);
      const currentIndex = parseInt(addIndex);
      handleSetAnswerContent(newValue, currentPageIndex, currentIndex, dataType);
    };

    const currentPageIndex = parseInt(pageStatus);
    const currentIndex = parseInt(addIndex);
  
    return (
      <li>
        <div className="checkbox_radio_container">
          <input
            type="radio"
            id={`v${addIndex}delta${pageStatus}ok${id}verticalradio${index}`}
            name={`v${addIndex}delta${pageStatus}ok${id}verticalradio${index}`} // Change to a unique name for each question
            className="required"
            value={data}
            checked={answerContent[currentPageIndex]?.[currentIndex] === data}
            onChange={handleVerticalRadio}
          />
          <label className="radio" htmlFor={`v${addIndex}delta${pageStatus}ok${id}verticalradio${index}`}></label>
          <label htmlFor={`v${addIndex}delta${pageStatus}ok${id}verticalradio${index}`} className="wrapper">{data}</label>
        </div>
      </li>
    );
  }
  
export default VerticalRadio;