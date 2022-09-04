
import React, { useEffect, useState } from 'react';
import { WebMidi } from 'webmidi';

import { Container, Title } from './Main.Styled';
import Pedal from '../Pedal/Pedal';

const Main = () => {

  const [midiOutputs, setMidiOutputs] = useState();
  const [selectedMidiOutput, setSelectedMidiOutput] = useState();

  const handleMidiSelectChange = ( event ) => {
    
    setSelectedMidiOutput( WebMidi.getOutputById( event.target.value ) );

  };

  const handlePedalValueChange = ( value ) => {

    if( selectedMidiOutput !== null ) {

      console.log( 'midi not null', selectedMidiOutput );

      selectedMidiOutput.sendControlChange( 41, value + 1 );

    }

  };

  useEffect( () => {

    WebMidi
      .enable()
      .then( () => setMidiOutputs( WebMidi.outputs ) )
      .catch( err => alert( err ) );

  }, [] );
  
  return (

    <Container>

      <Title>Expression Flipper</Title>

      <select defaultValue={-1} onChange={handleMidiSelectChange}>

        <option value={-1} disabled={true}>Select a MIDI Output</option>

        {midiOutputs?.map( ( item, key ) => (

          <option value={item.id} key={key}>{item.name}</option>

        ))}

      </select>

      <Pedal onChange={handlePedalValueChange} />

    </Container>

  );

};

export default Main;
