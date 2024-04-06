"use client";
import React, { useState } from "react";
import Styles from "./style.module.css";
import Link from "next/link";
import images from "../../../public/Images/image";
import Image from "next/image";

const FooterSection = ({ background }) => {

  return (
    <footer className={Styles.sec_cont} style={{ backgrobtn_contshedulundColor: background }}>
      <div className={`${Styles.wraper}`}>
        <div className={Styles.main_cont}>
          <div className={`${Styles.sec} ${Styles.bottom_sec}`}>
            <div className={Styles.lft}>
              <Image className={Styles.footlogo} src={images.SLogorbg} alt="Logo" />
              <p>
                EveOn Money is revolutionizing the loan landscape in India by connecting small loan brokers with trusted banks, leveraging AI-powered technology, and offering expert in-house loan assistance. We empower brokers, banks, and borrowers with a frictionless and efficient experience throughout the loan journey.
              </p>
            </div>
            <div className={Styles.rgt}>
              <div className={Styles.link_cont}>
                <p className={Styles.header}>Loans </p>
                <div className={Styles.links}>
                  <Link href={""}>
                  Personal Loan (PL)
                  </Link>
                  <Link href={""}>
                  Business Loan (BL)
                  </Link>
                  <Link href={""}>
                  Home Loan (HL)
                  </Link>
                  <Link href={""}>
                  Loan Against Property (LAP)
                  </Link>
                 
                </div>
              </div>
              <div className={Styles.link_cont}>
                <p className={Styles.header}>Company</p>
                <div className={Styles.links}>
                  <Link href={"/aboutus"}>Who we are</Link>
                  <Link href={"/"}>Contact us</Link>
                  <Link href={"/"}>Become a partner </Link>
                  <Link href={"/"}>Privacy & Policy</Link>
                </div>
              </div>
              <div className={Styles.link_cont}>
                <p className={Styles.header}>Headquarter</p>
                <div className={Styles.links}>
                  <Link href={"#"}>
                    Kolkata - West Bengal,<br /> India
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${Styles.sec}`}>
            <p>©2024 Copyright. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
