import styles from './App.module.scss';
import Ticket from "./components/Ticket";
import team from "./data/team";

const App = () => {
  const getTicketJsx = (teamMember) => (
    <Ticket teamMember = {teamMember} key={`ticket-${teamMember.id}`}/>
  );
  return (
    <section className={styles.outerContainer}>
      <h1 className={styles.header}>Ticket Tracker</h1>
        <div className={styles.ticketContainer}>
          {team.map(getTicketJsx)}
        </div>
    </section>
  );
}

export default App;
