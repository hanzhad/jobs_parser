import { useNavigate } from 'react-router-dom';
import { FormEvent, FormEventHandler } from 'react';
import mainProcessEventsApi from 'app/eventsApi';
import { Button, Input } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  const handleFormSubmit: FormEventHandler = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const url = (form.elements.namedItem('url') as { value: string }).value;
    console.log('url', url);
    const result = await mainProcessEventsApi.PuppeteerListener.init(url);
    console.log('result', result);

    form.reset();
  };

  const handleClose = async () => {
    const result = await mainProcessEventsApi.PuppeteerListener.close();
    console.log('result', result);
  };

  return (
    <>
      Home
      <Button variant='contained' onClick={() => navigate('/about')}>to about</Button>
      <form onSubmit={handleFormSubmit}>
        <Input
          name='url'
          defaultValue="https://"
        />
        <Button variant='outlined' type='submit'>Read</Button>
        <Button
          onClick={handleClose}
          variant='contained'
          type='button'
        >Stop</Button>
      </form>
    </>
  );
};

export default Home;
