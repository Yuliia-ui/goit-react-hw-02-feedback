import React from 'react';
import { theme } from '../Section/Section.module.css';

const Section = ({ title, children }) => (
  <>
    <h2 className={theme}>{title}</h2>
    {children}
  </>
);

export default Section;
