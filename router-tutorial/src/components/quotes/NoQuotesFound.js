import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes founds</p>
      <a className={classes.btn}>Add a Quote</a>
    </div>
  );
};
