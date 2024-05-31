import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={
                    selectedGood === good ? 'button is-info' : 'button'
                  }
                  onClick={() =>
                    selectedGood === good ? setGood('') : setGood(good)
                  }
                >
                  {selectedGood === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

<>
  <tr data-cy="Good">
    <td>
      <button data-cy="AddButton" type="button" className="button">
        +
      </button>
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      Dumplings
    </td>
  </tr>

  <tr data-cy="Good" className="has-background-success-light">
    <td>
      <button data-cy="RemoveButton" type="button" className="button is-info">
        -
      </button>
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      Jam
    </td>
  </tr>

  <tr data-cy="Good">
    <td>
      <button data-cy="AddButton" type="button" className="button">
        +
      </button>
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      Garlic
    </td>
  </tr>
</>;
