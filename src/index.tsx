import { render } from 'solid-js/web';
import './index.css';
import 'open-props';
import 'open-props/normalize.min.css';
import 'open-props/colors.min.css';
import 'open-props/borders.min.css';
import 'open-props/sizes.min.css';
import 'open-props/shadows.min.css';
import 'open-props/animations.min.css';
import { createSignal } from 'solid-js';
import Board from './Board';
import Chooser from './Chooser';




const root = document.body.firstElementChild as HTMLDivElement;

function App() {
  const chooserState = createSignal(false);
  const [location, setLocation] = createSignal([0, 0]);


  const colors: string[] = ['pink', 'yellow', 'teal', 'blue'];

  return (
    <>
      <Board
        colors={colors}
        chooserState={chooserState}

        setLocation={setLocation}
      />
      <Chooser
        colors={colors}
        chooserState={chooserState}
        location={location}
      />
    </>
  );
}


render(App, root);
