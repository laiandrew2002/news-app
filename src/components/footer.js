import React from 'react';


const Footer = (props) =>{
  return (
    <footer className="pv4 ph3 ph5-m ph6-l black">
    <hr/>
      <small className="f6 db tc">© 2018 <b className="ttu">DrewELOPER INC</b>., All Rights Reserved</small>
      <div className="tc mt3">
        <a href="/" title="Help" className="f6 dib ph2 link black dim">Language</a>
        <a href="/"    title="Terms" className="f6 dib ph2 link black dim">Terms of Use</a>
        <a href="/"  title="Privacy" className="f6 dib ph2 link black dim">Privacy</a>
      </div>
    </footer>
  )
}
export default Footer;