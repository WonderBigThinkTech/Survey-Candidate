import './Survey.scss';
import img1 from './html/img/main_icon_1.svg';
import jsonData from './survey.json';
import { BiCheckDouble } from "react-icons/bi";
import './html/css/bootstrap.min.css';
import './html/css/style.scss';
import './html/css/vendors.css';
import './html/css/custom.css';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
import { useState, useEffect } from 'react';
import SurveyGroup from './tabs/SurveyGroup';
// import emailjs from 'emailjs-com';

interface ContentItem {
  id: number;
  heading: string;
  dataType: 'verticalRadio' | 'verticalCheckBox' | 'inputSmallNumber' | 'inputSmallText' | 'inputTextArea';
  dataTitle: string;
  dataSubTitle?: string; // Assuming this can also be optional
  required: boolean;
  dataContent: string[];
  requiredTrueValue?: string;
  lowerLimit?: string;
  upperLimit?: string;
  additionalData?: any;
  mark: number[];
}

interface Survey {
  id: number;
  title: string;
  availableLength: number;
  content: ContentItem[];
}

type Surveys = Survey[];

interface SurveyPagesProps {}

export default function SurveyPages({}: SurveyPagesProps) {
  const [pageStatus, setPageStatus] = useState<number>(0);
  const [surveyData, setSurveyData] = useState<Surveys>([]);
  const [answerNumber, setAnswerNumber] = useState<number[]>(Array(surveyData.length).fill(0));
  const [answerContent, setAnswerContent] = useState<any[]>([]);
  const [totalErrors, setTotalErrors] = useState<string[]>([]);
  const [modalShowStatus, setModalShowStatus] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<boolean>(false);
  const [roommateStatus, setRoommateStatus] = useState<boolean>(true);

  const markingSymbol = [
    [],
    [
      {
        milestone : 8,
        message : "It is unlikely that you are abnormally sleepy."
      },
      {
        milestone : 10,
        message : "You have an average amount of daytime sleepiness"
      },
      {
        milestone : 16,
        message : "You may be excessively sleepy depending on the situation. You may want to consider seeking medical attention"
      },
      {
        milestone : 25,
        message : "You are excessively sleepy and should consider seeking medical attention"
      },
    ],
    [
      {
        milestone : 6,
        message : "It is unlikely that you are abnormally sleepy."
      },
      {
        milestone : 12,
        message : "You have an average amount of daytime sleepiness"
      },
      {
        milestone : 16,
        message : "You may be excessively sleepy depending on the situation. You may want to consider seeking medical attention"
      },
      {
        milestone : 22,
        message : "You are excessively sleepy and should consider seeking medical attention"
      },
    ],
    [

    ],
    [
      {
        milestone : 2,
        message : "It is unlikely that you are abnormally sleepy."
      },
      {
        milestone : 5,
        message : "You have an average amount of daytime sleepiness"
      },
      {
        milestone : 8,
        message : "You may be excessively sleepy depending on the situation. You may want to consider seeking medical attention"
      },
      {
        milestone : 11,
        message : "You are excessively sleepy and should consider seeking medical attention"
      },
    ],
    [
      {
        milestone : 14,
        message : "low stress"
      },
      {
        milestone : 27,
        message : "moderate stress"
      },
      {
        milestone : 41,
        message : "high perceived stress"
      }
    ],
    [
      {
        milestone : 31,
        message : "definitely evening type"
      },
      {
        milestone : 42,
        message : "moderately evening type"
      },
      {
        milestone : 59,
        message : "neither type"
      },
      {
        milestone : 70,
        message : "moderately morning type"
      },
      {
        milestone : 87,
        message : "definitely morning type"
      }
    ],
    [
      {
        milestone : 3,
        message : "High risk for moderate to severe OSA"
      },
      {
        milestone : 5,
        message : "Intermediate risk for moderate to severe OSA"
      },
      {
        milestone : 9,
        message : "High risk for moderate to severe OSA"
      }
    ]
  ]
  
  // const [formData, setFormData] = useState({
  //   user_email: '',
  //   subject: '',
  //   message: '',
  // });

  // const sendMail = () => {
  //   // Replace with your service ID, template ID, and user ID
  //   emailjs.send('service_k27mpp4', 'template_4h6vb75', formData, '5P0gYHogmOV4OkP8P')
  //     .then((result) => {
  //         console.log('Email successfully sent!', result.text);
  //         setFormData({ user_email: '', subject: '', message: '' }); // Reset form
  //     }, (error) => {
  //         console.log('Failed to send email. Error:', error.text);
  //     });
  // };


  useEffect(() => {
    setSurveyData(jsonData as Surveys);
  }, []);

  useEffect(() => {
    document.getElementsByClassName('container_centering')[0].scrollTo(0, 0);
  }, [pageStatus]);

  useEffect(() => {
    setAnswerContent(Array.from({ length: surveyData.length }, () => []));
  }, [surveyData.length]);

  const prevBtnFunction = () => {
    setPageStatus(prev => Math.max(0, prev - 1)); // Prevent negative page status
  };

  const handleSetAnswerContent = (newValue: any, currentPageIndex: number, currentIndex: number, dataType: string) => {

    const pageItem = [...answerContent];

    const previousValue = pageItem[currentPageIndex]?.[currentIndex];

    if ( dataType === "verticalRadio" || dataType === "inputSmallText" || dataType === "inputSmallNumber" || dataType === "inputTextArea"){

      if(previousValue !== newValue) {
        if(previousValue === undefined){
          setAnswerNumber(prev => {
            const updatedAnswerNumber = [...prev];
            updatedAnswerNumber[currentPageIndex] = (updatedAnswerNumber[currentPageIndex] || 0) + 1;
            return updatedAnswerNumber;
          })
        }

        if (pageItem[currentPageIndex]) {
          pageItem[currentPageIndex] = [...pageItem[currentPageIndex]];
          pageItem[currentPageIndex][currentIndex] = newValue;
          setAnswerContent(pageItem);
        }
      }

    }
    else if (dataType === "verticalCheckBox"){

      const hasIncreasedCount = previousValue !== undefined && previousValue !== '';

      const itemIndex = parseInt(newValue);

      const existingValue = pageItem[currentPageIndex]?.[currentIndex] || '';

      const currentValues = existingValue.split(',').map((val:string) => val.trim()).filter((val:string) => val);

      if(!currentValues.includes(itemIndex.toString())){

        if (!hasIncreasedCount) {
          setAnswerNumber(prev => {
              const updatedAnswerNumber = [...prev];
              updatedAnswerNumber[currentPageIndex] = (updatedAnswerNumber[currentPageIndex] || 0) + 1;
              return updatedAnswerNumber;
          });
        }
        currentValues.push(itemIndex.toString());

      }
      else {
        const indexToRemove = currentValues.indexOf(itemIndex.toString());
        if(indexToRemove !== -1){
          currentValues.splice(indexToRemove, 1);
        }
      }

      const updatedValue = currentValues.join(',');

      if(pageItem[currentPageIndex]) {
        pageItem[currentPageIndex] = [...pageItem[currentPageIndex]];
        pageItem[currentPageIndex][currentIndex] = updatedValue;
        setAnswerContent(pageItem);
      }
      
      if(currentValues.length === 0){
        setAnswerNumber(prev => {
          const updatedAnswerNumber = [...prev];
          updatedAnswerNumber[currentPageIndex] = Math.max((updatedAnswerNumber[currentPageIndex] || 1) - 1, 0);
          return updatedAnswerNumber;
      });
      }
    }
  };

  const nextBtnFunction = () => {
    const basicData = surveyData[pageStatus];
    const inputData = answerContent[pageStatus];
    // let emailText:string = "";

    console.log("========== | start | ==========");


    console.log("basic data", basicData);
    console.log("answer data", inputData);

    console.log("========== | end | ==========");

    const middelData = surveyData[pageStatus].content;
  
    // Create an array with default "wbtOk" values
    const tempErrors = new Array(middelData.length).fill("wbtOk"); 
    let hasError = false; // To track if there are errors
  
    basicData.content.forEach((item, index) => {
      const value = inputData[index];
  
      if (item.required) {
        // Check for required fields based on type
        if (item.dataType === "inputSmallText") {
          if (!value || value === "") {
            tempErrors[index] = `${item.dataTitle} is required.`;
            hasError = true;
          }
          else if(item.dataTitle === "Please let me know your address"){
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
            // emailText = value;
            if (!emailRegex.test(value)) {
              tempErrors[index] = `Please provide a valid email address.`;
              hasError = true;
            }
          }
        } 
        if (item.dataType === "verticalRadio") {
          if (!value || value === "") {
            tempErrors[index] = `${item.dataTitle} is required.`;
            hasError = true;
          }
          else if (item.dataTitle === "Do you consent to provide information?") {
            if (value === "No" || value === "") {
              tempErrors[index] = `You must consent to provide information to proceed.`;
              hasError = true;
            }
          }
          else if (item.dataTitle === "Do you have a bed partner or roommate?"){
            if(value === "Not during the past month"){
              setRoommateStatus(false)
            }
          }
        } 
        else if (item.dataType === "verticalCheckBox") {
          if (!value || value === "") {
            tempErrors[index] = `${item.dataTitle} is required.`;
            hasError = true;
          } else {
            const selectedValues = value.split(',').map((val:string) => val.trim()).filter(Boolean);
            if (selectedValues.length === 0) {
              tempErrors[index] = `${item.dataTitle} is required.`;
              hasError = true;
            }
          }
        } 
        else if (item.dataType === "inputSmallNumber") {
          const numberValue = Number(value);
          if (!value || value === "") {
            tempErrors[index] = `${item.dataTitle} is required.`;
            hasError = true;
          } else if (isNaN(numberValue) || numberValue < item?.additionalData?.minValue || numberValue > item?.additionalData?.maxVal) {
            tempErrors[index] = `You must be between ${item?.additionalData?.minValue} and ${item?.additionalData?.maxVal}.`;
            hasError = true;
          }
        }
      }
    });
  
    // If there are no errors, the totalErrors should remain "wbtOk"
    if (hasError) {
      console.log("Validation Errors: ", tempErrors);
    } else {
      console.log("No validation errors.");
    }
  
    // Set the totalErrors state
    setTotalErrors(tempErrors);
  
    // If no errors were found, proceed to the next page
    if (!hasError) {
      if(pageStatus === 0){
        setPageStatus(pageStatus + 1);
      }
      else {

        scoringFunction(basicData, inputData);

        setModalShowStatus(true);
      }
    }
  };

  const [scoreNumber, setScoreNumber] = useState<number>(0);
  const [scoreMessage, setScoreMessage] = useState<string>("");
  

  const scoringFunction = (basicData:Survey , inputData:any) => {
    
    console.log("------------- | start | ---------------");

    console.log("basic data", basicData);
    console.log("answer data", inputData);
    
    console.log("------------- | end | ---------------");

    let score:number = 0;

    if(pageStatus === 2){

      let tempArray:number[] = [];

      basicData.content.forEach((item:any, index:number) => {
        tempArray.push(item.mark[item.dataContent.indexOf(inputData[index])]);
      })

      score += tempArray[17];
      score += Math.ceil((tempArray[1] + tempArray[4]) / 2);

      score += (8 - tempArray[3]);

      let temp3:number = tempArray[3] * 100 / (tempArray[2] - tempArray[0]);

      if(temp3 > 75 && temp3 < 85) {
        score += 1;
      }
      else if (temp3 > 65 && temp3 < 75) {
        score += 2;
      }
      else if (temp3 < 65) {
        score += 3;
      }

      let temp4:number = 0;
      for(let i = 0; i < 9; i ++) {
        temp4 += tempArray[5 + i];
      }
      score += Math.ceil(temp4 / 9);

      score += tempArray[14];

      score += Math.ceil((tempArray[15] + tempArray[16]) / 2);

    }
    else {
      basicData.content.forEach((itemDummy:ContentItem, itemDummyIndex:number) => {
  
        const userAnswer = inputData[itemDummyIndex];
  
        if(itemDummy.mark && itemDummy.mark.length > 0) {
          itemDummy.dataContent.forEach((answer: string, answerIndex:number) => {
            if(answer === userAnswer){
              score += itemDummy.mark[answerIndex];
            }
          });
        }
      });
  
      if(markingSymbol[pageStatus] && markingSymbol[pageStatus].length > 0) {
        markingSymbol[pageStatus].forEach((data:any) => {
            if(score <= data.milestone){
              setScoreMessage(data.message);
            }
            else {
              return;
            }
          })
      }
    }


    console.log("score : ", score);

    setScoreNumber(score);

    return;

  }


  const submitFunction = () => {
    setSubmitStatus(true);
    nextBtnFunction();
  };

  interface DisplayContentProps {
    basicData: string[];
    answerData: string;
  }

  const DisplayContent = ({basicData, answerData}:DisplayContentProps) => {
    console.log(answerData);
    if(answerData){
      const answerSplitData = answerData.split(",");
  
      console.log("answerSplitData : ", answerSplitData);
      console.log("basicData : ", basicData);
  
      return (
        basicData.map((item, index) => {
          if(answerSplitData.includes(index.toString())){
            return (
              <p key={index} className='content'>{item}</p>
            )
          }
        })
      );
    }
    else {
      return (
        <p className='content'>There is No Data</p>
      )
    }
    
  };

  const handleUltimateData = () => {
    setModalShowStatus(false);    
    alert('Congulations! Successfully Submited!')
    window.location.href = "/";
  }

  return (
    <div className='mySurvey'>
      <div className='style_2'>
        <div className="container_centering">
          <div className="container" style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <div className="row justify-content-end" style={{ width: '100vw' }}>
              <div className="col-xl-6 col-lg-6 d-flex align-items-center flex-wrap surveyAdd">
                {
                  pageStatus !== 0 &&
                  <div className="pageDots">
                    <div className='pageBar'></div>
                    {surveyData.map((_, index) => (
                      <span key={index} className={'pageDot ' + (pageStatus > index ? 'pageDotactive' : '')}>
                        <BiCheckDouble />
                      </span>
                    ))}
                  </div>
                }
                <div className="main_title_1">
                  <h3><img src={img1} width="80" height="80" alt="" /> Survey</h3>
                  <p>Our recent survey reveals diverse sleep patterns and factors affecting quality rest.</p>
                  <p><em>- The Satisfyc Team</em></p>
                  <div style={{ color: 'white' }}>The survey highlighted that over 60% of participants struggle with falling asleep regularly. Many respondents cited stress and screen time as primary contributors to their sleep difficulties. Understanding these issues can help develop better strategies for improving sleep quality in our community.</div>
                </div>
                {pageStatus !== 0 && (
                  <div className="progressBarContainer">
                    <div className="progressBar" style={{ width: ((answerNumber[pageStatus] === undefined ? 0 : answerNumber[pageStatus]) * 100 / surveyData[pageStatus].availableLength) + '%' }}>
                      <div className="numberPanel">
                        {`${answerNumber[pageStatus] === undefined ? 0 : answerNumber[pageStatus]} of `}{surveyData[pageStatus].availableLength}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-xl-5 col-lg-5">
                <div id="wizard_container">
                  <form id="wrapped" method="POST" autoComplete="off">
                    <input id="website" name="website" type="text" value="" style={{ display: 'none' }} />
                    <div id="middle-wizard">
                      {surveyData.map((item, index) => {
                        if (pageStatus + 1 === item.id) {
                          return (
                            <SurveyGroup
                              key={index}
                              id={item.id}
                              pageStatus={pageStatus}
                              surveyData={item.content}
                              totalErrors={totalErrors}
                              answerContent={answerContent}
                              handleSetAnswerContent={handleSetAnswerContent}
                            />
                          );
                        }
                        return null; // Return null to avoid rendering nothing
                      })}
                    </div>
                    <div id="bottom-wizard">
                      {pageStatus !== 0 && <button type="button" name="backward" onClick={prevBtnFunction} className="backward">Prev</button>}
                      {pageStatus !== surveyData.length - 1 && <button type="button" name="forward" onClick={nextBtnFunction} className="forward">Next</button>}
                      {pageStatus === surveyData.length - 1 && <button type="button" name="process" onClick={submitFunction} className="submit">Submit</button>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        modalShowStatus &&
          <div className='StepModalContainer'>
            <div className='StepModalRelative1'>
              <div className='StepModal'>
                <span className='close-btn' onClick={() => {setModalShowStatus(false)}}>&times;</span>
                <h1>Review of your -- Epworth Sleepiness Scale --</h1>
                <div className='mainPanel'>

                  {
                    surveyData[pageStatus].content.map((item, index) => {

                      if(item.dataType === "verticalCheckBox"){
                        return (
                          <div className='item' key={index}>
                            <h2 className='title'>{item.dataTitle}</h2>
                            <DisplayContent basicData={item.dataContent} answerData={answerContent[pageStatus][index]} />
                          </div>
                        );
                      }
                      else {
                        return (
                          <div className='item' key={index}>
                            <h2 className='title'>{item.dataTitle}</h2>
                            <p className='content'>{answerContent[pageStatus][index]}</p>
                          </div>
                        );
                      }
                    })
                  }
                </div>
                <div className="StepFlexRow">

                  

                  {
                    scoreNumber != 0 &&

                      <div className='result'>
                        Score : {scoreNumber} <br />
                        {scoreMessage}
                      </div>
                  }

                  {
                    submitStatus ?
                    (
                      <div className="button-24 button-24-green" onClick={handleUltimateData}>
                        Submit
                      </div>
                    )
                    :
                    (
                      <div className="button-24 button-24-green" onClick={() => {
                        setModalShowStatus(false);
                        if(roommateStatus){
                          setPageStatus(pageStatus + 1); // Prevent exceeding total pages
                        }
                        else {
                          setPageStatus(pageStatus + 2); // Prevent exceeding total pages
                          setRoommateStatus(true);
                        }
                      }}>
                        Go to Next Step
                      </div>
                    )
                  }
                  
                </div>


              </div>

            </div>
          </div> 
      }
    </div>
  );
}