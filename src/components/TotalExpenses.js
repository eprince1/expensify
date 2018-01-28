import React from 'react';
import { connect } from 'react-redux';
import getExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';

const TotalExpenses = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <p>{expenseCount} {expenseWord}  Totaling: {formattedExpensesTotal} </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpenseTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(TotalExpenses);