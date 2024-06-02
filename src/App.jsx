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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const reset = () => setSelectedGood('');

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
            const isSelectedGood = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isSelectedGood,
                })}
              >
                <td>
                  <button
                    data-cy={cn({
                      RemoveButton: isSelectedGood,
                      AddButton: !isSelectedGood,
                    })}
                    type="button"
                    className={cn({
                      button: true,
                      'is-info': isSelectedGood,
                    })}
                    onClick={() =>
                      isSelectedGood ? reset() : setSelectedGood(good)
                    }
                  >
                    {isSelectedGood ? '-' : '+'}
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
