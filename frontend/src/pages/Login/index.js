import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // A simple Get to wake up the machine at heroku
    async function getHeroku(){
      try {
        console.log('Waiting for heroku... be patient')
        await api.get('/');
      } catch(err){
        console.log('Wake up heroku, time to work')
      }
    }

    getHeroku()
  }, [])


  async function handleSubmit(event){
    event.preventDefault();
    
    const response = await api.post('/sessions', {
      email: email,
    });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');

  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Seu melhor email" 
          value={email}
          onChange={event => setEmail(event.target.value)}/>
              
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  );
}