import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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
  const reset = () => setGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood ? (
          'No goods selected'
        ) : (
          <>
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={reset}
            />
          </>
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => {
            const queriedGood = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': queriedGood,
                })}
              >
                <td>
                  <button
                    data-cy={cn({
                      RemoveButton: queriedGood,
                      AddButton: !queriedGood,
                    })}
                    type="button"
                    className={cn({
                      button: true,
                      'is-info': queriedGood,
                    })}
                    onClick={() => (queriedGood ? reset() : setGood(good))}
                  >
                    {queriedGood ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
