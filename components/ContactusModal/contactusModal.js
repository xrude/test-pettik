import { Modal } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import styles from "./contactus.module.scss";
import PhoneInTalkIcon from "../../public/Call.png";
import MailOutlineIcon from "../../public/Mail.png";
import HelpOutlineOutlinedIcon from '../../public/Chat With us.png';
import QuestionAnswerOutlinedIcon from '../../public/FAQ.png';

export const ContactusPopUpModal = ({ contactusModal, setContactusModal }) => {
  return (
    <>
      <Modal
        open={contactusModal}
        disableAutoFocus={true}
        BackdropProps={{ style: { background: "grey", opacity: 0.55 } }}
        onClose={() => {
          setContactusModal(false);
        }}
      >
        <div className={styles.contactusContainer}>
          <div className={styles.contactusPhoneNumberContainer}>
            <div className={styles.contactusPhoneNumber}>
              <div className={styles.contactusPhoneNumberIcon}>
                {/* <PhoneInTalkIcon sx={{ fontSize: 57 }} /> */}
                <Image src={PhoneInTalkIcon} width="90" height="90"/>
              </div>
              <div className={styles.contactusPhoneNumberDetails}>
                <div className={styles.contactusPhoneNumberDetailsDays}>
                  7 Days, 9 A.M to 9 P.M
                </div>
                <div className={styles.contactusPhoneNumberDetailsNumber}>
                  997-116-1976
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactusEmailContainer}>
          <div className={styles.contactusEmail}>
              <div className={styles.contactusEmailIcon}>
                {/* <MailOutlineIcon sx={{ fontSize: 57 }} /> */}
                <Image src={MailOutlineIcon}  width="40" height="35" />
              </div>
              <div className={styles.contactusEmailDetails}>
              hello@pettik.com
              </div>
            </div>
          </div>
          <div className={styles.contactusChatWithUs}>
          <div className={styles.contactusChatWithUsIcon}><Image src={HelpOutlineOutlinedIcon} width="15" height="15"/></div>
          <div className={styles.contactusChatWithUsContent}>Chat with Us.</div>
          <div className={styles.contactusChatWithUsQuestionMark}><Image src={QuestionAnswerOutlinedIcon} width="15" height="15"/></div>
          <div className={styles.contactusChatWithUsFaq}>FAQ.</div>
          </div>
        </div>
      </Modal>
    </>
  );
};
