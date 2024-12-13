import InputTextArea from "./InputTextArea";
import List from "./List";
import VerticalRadio from "./VerticalRadio";
import VerticalCheckBox from "./VerticalCheckBox";
import InputSmallNumber from "./InputSmallNumber";

interface ItemDummyProps {
  id: number;
  dataType: string;
  dataTitle: string;
  dataSubTitle?: string;
  pageStatus: number;
  data: any[];
  addIndex: number;
  showError: string;
  additionalData?: any;
  answerContent: any[];
  handleSetAnswerContent: (newValue: any, currentPageIndex: number, currentIndex: number, dataType: string) => void;
}

const ItemDummy = ({
  id,
  addIndex,
  dataType,
  dataTitle,
  pageStatus,
  dataSubTitle,
  data,
  showError,
  additionalData,
  answerContent,
  handleSetAnswerContent,
}: ItemDummyProps) => {
  return (
    <div className={"itemDummyPanel " + (showError != "wbtOk" && "itemDummyPanelError")}>
      <h3 className="main_question mb-4">{dataTitle}</h3>
      {dataSubTitle && <p>{dataSubTitle}</p>}
      <ul>
        {data.map((item, index) => {
          
          if (dataType === "verticalRadio") {
            return (
              <VerticalRadio
                key={index}
                id={id.toString()}
                addIndex={addIndex.toString()}
                index={index.toString() + "zz"}
                pageStatus={pageStatus.toString()}
                data={item}
                dataType={dataType}
                answerContent={answerContent}
                handleSetAnswerContent={handleSetAnswerContent}
              />
            );
          }
           else if (dataType === "inputSmallText" || dataType === "inputSmallNumber"){
            return (
              <InputSmallNumber 
                key={index}
                data={item}
                dataType={dataType}
                pageStatus={pageStatus.toString()}
                addIndex={addIndex.toString()}
                additionalData={additionalData}
                answerContent={answerContent}
                handleSetAnswerContent={handleSetAnswerContent}
              />
            )
          }
          else if (dataType === "inputTextArea") {
            return (
              <InputTextArea
                key={index}
                data={item}
                dataType={dataType}
                pageStatus={pageStatus.toString()}
                addIndex={addIndex.toString()}
                answerContent={answerContent}
                handleSetAnswerContent={handleSetAnswerContent}
              />
            );
          } else if (dataType === "list") {
            return (
              <List key={index} index={index} data={item} />
            );
          } else if (dataType === "verticalCheckBox") {
            return (
              <VerticalCheckBox
                key={index}
                data={item}
                dataType={dataType}
                index={index.toString() + "zzz"}
                pageStatus={pageStatus.toString()}
                addIndex={addIndex.toString()}
                handleSetAnswerContent={handleSetAnswerContent}
              />
            );
          }

          


          // return null; // Return null for unhandled dataType
        })}
      </ul>
      {
        showError != "wbtOk" &&
          <span className='dummyErrorMessage'>{showError}</span>
      }
    </div>
  );
};

export default ItemDummy;