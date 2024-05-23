import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      About
      <button onClick={() => navigate('/')}>to home</button>
    </div>
  );
};


export default About;
