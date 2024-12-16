import {Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurAimPage.scss';

import imgSrc1 from '/img/aim-1.png';
import imgSrc2 from '/img/aim-2.png';
import imgSrc3 from '/img/aim-3.png';



const aimCardsData = [
    {
        imgSrc : imgSrc1,
        title : "Join Survey",
        content : "Participate in the sleep survey to share your insights and help raise awareness."
    },
    {
        imgSrc : imgSrc2,
        title : "Awareness Videos by Sleep Experts Across the World",
        content : "Watch insightful videos from leading sleep experts and learn more about the importance of sleep."
    },
    {
        imgSrc : imgSrc3,
        title : "Stats",        
        content : "Visualize sleep patterns and data with intuitive graphs and insights."
    }
]

const OurAimPage = () => {
    return (
        <>
            <section className="aim" id="aim">
                <Container>
                    <Row>
                        <Col xl={12} className='section-title aim-title'>
                            <span>Our Aim</span>
                            <h2>Discover Your Sleep Health Journey</h2>
                        </Col>
                    </Row>
                    <Row className='aim-content'>
                        <Col xl={6} classname='text'>
                            <p>
                            The project aims to understand the impact of sleep in the context of comorbidities. The disrupted sleep-wake cycle has significant detrimental effects on health and leads to diverse disorders. According to clinicians, there is a lack of awareness regarding the importance of sleep among people.
                            </p>
                            <p>
                            Sleep plays a crucial role in overall well-being, yet its significance is often overlooked. The widespread issue of poor sleep hygiene has far-reaching consequences, contributing to various mental and physical health conditions. Experts emphasize the need for greater awareness on how sleep impacts cognitive function and emotional stability.
                            </p>
                            <p>In today’s fast-paced era, sleep is often sacrificed in favor of other activities. According to the Centers for Disease Control and Prevention, irregular sleep patterns and chronic sleep deprivation have been linked to several comorbidities such as diabetes, cardiovascular diseases, obesity, hypertension and depression (Read Article). To address this lack of awareness of the importance of sleep, we conducted interviews with sleep experts from around the world and developed a comprehensive dashboard to address sleep-related issues and associated comorbidities
                            </p>
                        </Col>
                        <Col xl={6} classname='image'>
                            <ul className="timeline">
                                <li className="timeline-event">
                                    <label className="timeline-event-icon"></label>
                                    <div className="timeline-event-copy">
                                    <p className="timeline-event-thumbnail">Create Survey Form</p>
                                    <p>Create questionnaire using survey tool like Google Forms or SurveyMonkey</p>
                                    </div>
                                </li>
                                <li className="timeline-event">
                                    <label className="timeline-event-icon"></label>
                                    <div className="timeline-event-copy">
                                    <p className="timeline-event-thumbnail">Collect Community Responses</p>
                                    <p>Collect responses from target communities from different areas and occupations in Chandigarh</p>
                                    </div>
                                </li>
                                <li className="timeline-event">
                                    <label className="timeline-event-icon"></label>
                                    <div className="timeline-event-copy">
                                    <p className="timeline-event-thumbnail">Import Data Insights</p>
                                    <p>Import the responses into a data visualization tool</p>
                                    </div>
                                </li>
                                <li className="timeline-event">
                                    <label className="timeline-event-icon"></label>
                                    <div className="timeline-event-copy">
                                    <p className="timeline-event-thumbnail">Develop Data Dashboard</p>
                                    <p>Development of Dashboard (Creating Awareness and Monitoring the data)</p>
                                    </div>
                                </li>
                                <li className="timeline-event">
                                    <label className="timeline-event-icon"></label>
                                    <div className="timeline-event-copy">
                                    <p className="timeline-event-thumbnail">Outreach & Awareness
</p>
                                    <p>Outreach & awareness</p>
                                    </div>
                                </li>
                            </ul>  
                        </Col>
                    </Row>
                    <Row className='aim-cards'>
                        {
                            aimCardsData.map((item, index) => {
                                return (
                                    <Col md={3} key={index}>
                                        <Card className="h-100 text-center shadow-sm">
                                            <Card.Img
                                            variant="top"
                                            src={item.imgSrc} 
                                            alt="Join Survey"
                                            />
                                            <Card.Body>
                                                <Card.Title className="fw-bold">{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.content}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default OurAimPage;