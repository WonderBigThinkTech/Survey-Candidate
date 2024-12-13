
import { useState, useEffect } from 'react';
import logo from '/logo.svg';
import './Preloader.scss';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the preloader after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <img src={logo} className='spinning' alt='logo' />
    </div>
  );
}
