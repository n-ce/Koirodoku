import { render } from 'solid-js/web';
import './index.css';
import 'open-props';
import 'open-props/normalize.min.css';
import 'open-props/colors.min.css';
import 'open-props/borders.min.css';
import 'open-props/sizes.min.css';
import 'open-props/shadows.min.css';
import 'open-props/animations.min.css';


import { createSignal, Index } from 'solid-js';

type Palette = 'pink' | 'yellow' | 'teal' | 'blue' | 'empty';

const colors: Palette[] = ['pink', 'yellow', 'teal', 'blue'];



const root = document.body.firstElementChild as HTMLDivElement;

function App() {
  const [showDialog, setShowDialog] = createSignal(false);
  const [location, setLocation] = createSignal([0, 0]);



  return (
    <>
      <div class='board'>


        <Index each={Array(4).fill(null)}>
          {(_, row) => (
            <Index each={Array(4).fill(null)}>
              {(_, column) => (
                <Cell
                  color={'empty'}
                  clickAction={function() {
                    setShowDialog(!showDialog());
                    setLocation([row, column]);
                  }}
                />
              )}
            </Index>
          )}
        </Index>

      </div>

      <dialog open={showDialog()}>
        <Index each={Array(4).fill(null)}>
          {(_, index) =>
            <Cell
              color={colors[index]}
              clickAction={
                function() {
                  setShowDialog(!showDialog());
                  const el = getCellFromLocation(location());
                  el.className = colors[index] + ' editable';


                }}
            />
          }
        </Index>

      </dialog>

    </>
  );
}


const Cell = (props: {
  clickAction: () => void,
  color: Palette
}) => (
  <button
    class={props.color}
    onClick={() => props.clickAction()}
  ></button>
);

render(App, root);

const boxes = [
  [0, 1, 4, 5],
  [2, 3, 6, 7],
  [8, 9, 12, 13],
  [10, 11, 14, 15]
];

const getRandomNo = () => Math.floor(Math.random() * 5);

const getCellFromLocation = (location: number[]): HTMLButtonElement => {
  const [row, column] = location;
  const id = column + (row * 4);
  return document.getElementsByTagName('button')[id] as HTMLButtonElement;

}
