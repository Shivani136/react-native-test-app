import React ,{useState} from 'react';
import { View, Switch } from 'react-native';
import Screens from './app/component/Screens';

function App() {
  const [isNew, setIsNew] = useState('')
  return (

<Screens>
<Switch value={isNew}
 onValueChange ={(newValue) =>setIsNew(newValue)}
 />
</Screens>
 );
}

export default App;







