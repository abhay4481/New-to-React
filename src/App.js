import React, { useState } from 'react';


//Starting Course Project

// import NewExpense from './components/NewExpense/NewExpense';
// import Expenses from './components/Expenses/Expenses';

// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

// const App = () => {
//   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

//   const addExpenseHandler = (expense) => {
//     setExpenses((prevExpenses) => {
//       return [expense, ...prevExpenses];
//     });
//   };

//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, "Let's get started!"),
//     React.createElement(Expenses, { items: expenses })
//   );

  // return (
  //   <div>
  //     <NewExpense onAddExpense={addExpenseHandler} />
  //     <Expenses items={expenses} />
  //   </div>
  // );

  // } 

// 

  // Project -1

// import Header from './Project-1/components/Header/Header'
// import UserInput from './Project-1/components/UserInput/UserInput'
// import ResultsTable from './Project-1/components/ResultsTable/ResultsTable';

// const App =() =>{

//   const [userInput,setUserInput] = useState(null);

//   const calculateHandler = (userInput) => {
//     setUserInput(userInput);    
//   };

//   const yearlyData = []; 

//   if(userInput){
//     let currentSavings = +userInput['current-savings']; 
//     const yearlyContribution = +userInput['yearly-contribution']; 
//     const expectedReturn = +userInput['expected-return'] / 100;
//     const duration = +userInput['duration'];

//     for (let i = 0; i < duration; i++) {
//       const yearlyInterest = currentSavings * expectedReturn;
//       currentSavings += yearlyInterest + yearlyContribution;
//       yearlyData.push({
        
//         year: i + 1,
//         yearlyInterest: yearlyInterest,
//         savingsEndOfYear: currentSavings,
//         yearlyContribution: yearlyContribution,
//       });
//     }
//   }


    

//   return (
//     <div>
//       <Header/>

//       <UserInput onCalculate={calculateHandler}/>

//       {!userInput && <p>No investment calculated yet.....</p>}
//       {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput['current-savings']}/>}

      
//     </div>
//   );
// };



// Project-2


import AddUser from './Project-2/components/Users/AddUser';
import UsersList from './Project-2/components/Users/UsersList';


const App =() =>{

  const [usersList,setUsersList] = useState([]);

  const addUserHandler =(uName,uAge)=>{
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name:uName , age:uAge , id: Math.random().toString()}];
    });
  }

  return(
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  )
}




export default App;
