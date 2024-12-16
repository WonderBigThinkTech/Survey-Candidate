import "./OurApproachPage.scss";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgSrc1 from '/approach/1.png';
import imgSrc2 from '/approach/2.png';

const OurApproachPage = () => {

  const imagesData = [
    { src: imgSrc1, alt: 'First Image' },
    { src: imgSrc2, alt: 'Second Image' },
  ];

  return (
    <>
      <section className="approach" id="approach">
        <Container>
          <Row>
            <Col xl={12} className='section-title approach-title'>
              <span>Our Aim</span>
              <h2>
                <span>To conduct this research</span>
                {/* <span>, a questionnaire has been </span>
                <span>developed based on scientific sleep indices (</span>
                <a href="https://epworthsleepinessscale.com/about-the-ess/" target="_blank" draggable="false" rel="noopener nofollow">1</a>
                <span>,</span>
                <a href="https://www.sciencedirect.com/science/article/abs/pii/0165178189900474?via%3Dihub" target="_blank" draggable="false" rel="noopener nofollow">2</a>
                <span>,</span>
                <a href="https://www.med.upenn.edu/cbti/assets/user-content/documents/Karolinska%20Sleepiness%20Scale%20(KSS)%20Chapter.pdf" target="_blank" draggable="false" rel="noopener nofollow">3</a>
                <span>,</span>
                <a href="https://www.sciencedirect.com/science/article/pii/S0012369215000185" target="_blank" draggable="false" rel="noopener nofollow">4</a>
                <span>,</span>
                <a href="https://www.sciencedirect.com/science/article/abs/pii/019188699190110W" target="_blank" draggable="false" rel="noopener nofollow">5</a>
                <span>,</span>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10498818/" target="_blank" draggable="false" rel="noopener nofollow">6</a>
                <span>).</span>
                <span> These indices account for daytime sleepiness, sleep duration, and quality, stress level, sleep-wake patterns, chronotype, and comorbidity scale. This enables us</span>
                  <span>to estimate and identify the prevalence of sleep deprivation and comorbid conditions associated with sleep.</span> */}
              </h2>
            </Col>
          </Row>
          <Row className='approach-content'>
            {
              imagesData.map((item, index) => {
                return (
                  <Col md={5 + index * 2} key={index}>
                    <div className="image-container">
                      <img src={item.src} alt={item.alt} />
                    </div>
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

export default OurApproachPage;