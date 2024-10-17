import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Nandini", lastName:"Verma", email:"nandiniverma202021@gmail.com"};

  return (
    <section className="home">
      <div className="home-content">
          <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || "Guest"}
              subtext="Access and manage your account and transcation efficiently"
            />
            <TotalBalanceBox 
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          </header>

          RECENT TRANSITIONS
      </div>

      {/* RIGHT SIDEBAR -> SINCE ONLY HOME PAGE IS HAVING RIGHT SIDEBAR */}
      <RightSideBar 
        user={ loggedIn }
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 950.50 }]}
      /> 
    </section>
  )
}

export default Home