import React from "react";
import PropTypes from "prop-types";
import CSSTransition from "react-transition-group/CSSTransition";
import s from "./Container.module.css";

const Container = ({ title, children }) => {
  return (
    <section className={s.section}>
      <CSSTransition in={true} appear timeout={500} classNames={s}>
        {title && <h2 className={s.heading}>{title}</h2>}
      </CSSTransition>
      {children}
    </section>
  );
};
Container.defaultProps = {
  title: " ",
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
