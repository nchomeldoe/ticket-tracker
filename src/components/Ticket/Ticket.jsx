import React from 'react';
import styles from "./Ticket.module.scss";
import Counter from "../Counter";


const Ticket = (props) => {
    const {name, role} = props.teamMember;
    return (
        <div className={styles.ticket}>
          <p>
              <span className={styles.bold}>Name </span>
              <span>{name}</span>
          </p>
          <p>
              <span className={styles.bold}>Role </span>
              <span>{role}</span>
          </p>
          <Counter />
        </div>
    )
}

export default Ticket
