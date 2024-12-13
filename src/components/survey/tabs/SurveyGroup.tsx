import ItemDummy from "./ItemDummy";
import { useRef, useEffect } from "react";


interface SurveyGroupProps {
  id: number;
  surveyData: any[];
  pageStatus: number;
  totalErrors: any[];
  answerContent: any[];
  handleSetAnswerContent: (newValue: any, currentPageIndex: number, currentIndex: number, dataType: string) => void;
}

const SurveyGroup = ({
  id,
  surveyData,
  pageStatus,
totalErrors,
  answerContent,
  handleSetAnswerContent,
}: SurveyGroupProps) => {

  
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  
  // Scroll to the first error if there are any errors in the current page
  useEffect(() => {
    
    const firstErrorIndex = totalErrors.findIndex(error => error !== "wbtOk");
    if (firstErrorIndex !== -1 && itemRefs.current[firstErrorIndex]) {
      itemRefs.current[firstErrorIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [totalErrors, pageStatus]); // Trigger when totalErrors or pageStatus changes



  return (
    <>
      {surveyData.map((item, index) => (
        <div className="step" key={index} ref={el => itemRefs.current[index] = el} >
          {index === 0 && <h2 className="itemColor">{item.heading}</h2>}
          <ItemDummy
            id={id} 
            addIndex={index}
            dataType={item.dataType}
            dataTitle={item.dataTitle}
            dataSubTitle={item.dataSubTitle}
            pageStatus={pageStatus}
            data={item.dataContent}
            additionalData={item.additionalData}
            showError={totalErrors[index] || ""}
            answerContent={answerContent}
            handleSetAnswerContent={handleSetAnswerContent}
          />
        </div>
      ))}
    </>
  );
};

export default SurveyGroup;