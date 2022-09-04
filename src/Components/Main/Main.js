
import React, { useEffect, useState } from 'react';
import { WebMidi } from 'webmidi';

import { Container, Title, Form, Label, Select, Input } from './Main.Styled';
import Pedal from '../Pedal/Pedal';

const Main = () => {

  const [midiOutputs, setMidiOutputs] = useState();
  const [selectedMidiOutput, setSelectedMidiOutput] = useState();

  const [midiCcMessageA, setMidiCcMessageA] = useState( 0 );
  const [midiCcValueA, setMidiCcValueA] = useState( 0 );
  const [midiCcMessageB, setMidiCcMessageB] = useState( 0 );
  const [midiCcValueB, setMidiCcValueB] = useState( 0 );

  const handleMidiSelectChange = ( event ) => {
    
    setSelectedMidiOutput( WebMidi.getOutputById( event.target.value ) );

  };

  const handlePedalValueChange = ( value ) => {

    if( selectedMidiOutput !== null ) {

      if( value === 0 ) {

        selectedMidiOutput.sendControlChange( midiCcMessageA, midiCcValueA );

      } else {

        selectedMidiOutput.sendControlChange( midiCcMessageB, midiCcValueB );

      }

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

      <Pedal onChange={handlePedalValueChange} />

      <Form>

        <Label htmlFor="midi-output-select">MIDI Output Device:</Label>

        <Select id="midi-output-select" defaultValue={-1} onChange={handleMidiSelectChange}>

          <option value={-1} disabled={true}>Select a MIDI Output Device</option>

          {midiOutputs?.map( ( item, key ) => (

            <option value={item.id} key={key}>{item.name}</option>

          ))}

        </Select>

        <Label>MIDI CC Message A:</Label>

        <Input value={midiCcMessageA} onChange={event => setMidiCcMessageA( event.target.value )} />

        <Label>MIDI CC Value A:</Label>

        <Input value={midiCcValueA} onChange={event => setMidiCcValueA( event.target.value )} />

        <Label>MIDI CC Message B:</Label>

        <Input value={midiCcMessageB} onChange={event => setMidiCcMessageB( event.target.value )} />

        <Label>MIDI CC Value B:</Label>

        <Input value={midiCcValueB} onChange={event => setMidiCcValueB( event.target.value )} />

      </Form>

    </Container>

  );

};

export default Main;
