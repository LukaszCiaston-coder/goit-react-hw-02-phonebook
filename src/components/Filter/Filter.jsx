import styles from '../Filter/Filter.module.css';

const Filter=({value, onChange})=> {
    const handleChange=(event)=> {
        onChange(event.target.value);
    };

    return (
        <div className={styles.filter}>
            <label className={styles.label}>
            Filter by Name:
            <input
             type="text"
             value={value}
             onChange={handleChange}
             className={styles.input}
         />
     </label>
 </div>);
};

export default Filter;