import React from 'react';
import * as formatter from '../helpers/formatNumber';
import css from './installment.module.css';

export default function Installment({ children: installment }) {
  const { id, value, difference, percentage, profit } = installment;

  const classGoodValue = 'green-text darken-4';
  const classGoodPercent = 'blue-text darken-4';
  const classBadValue = 'red-text darken-4';
  const classBadPercent = 'deep-orange-text accent-4';

  const classValue = profit ? classGoodValue : classBadValue;
  const classPercent = profit ? classGoodPercent : classBadPercent;

  return (
    <div className="col s6 m3 l2">
      <div className={css.flexRow}>
        <span style={{ marginRight: '10px' }}>
          <strong>{id}</strong>
        </span>

        <div className={css.flexColumn}>
          <span className={classValue}>
            <strong>{formatter.formatMoney(value)}</strong>
          </span>

          <span className={classValue}>
            <strong>{formatter.formatMoneyPositiveNegative(difference)}</strong>
          </span>

          <span className={classPercent}>
            <strong>{formatter.formatPercent(percentage)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
