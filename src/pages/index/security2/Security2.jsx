import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./security2.css";

function Security2() {
  const [af2, set2FA] = useState(false);

  const af2Open = () => {
    set2FA(true);
  };

  const af2Close = () => {
    set2FA(false);
  };

  const [blockchain, setBlockchain] = useState(false);

  const blockchainOpen = () => {
    setBlockchain(true);
  };

  const blockchainClose = () => {
    setBlockchain(false);
  };

  const [encryption, setEncryption] = useState(false);

  const encryptionOpen = () => {
    setEncryption(true);
  };

  const encryptionClose = () => {
    setEncryption(false);
  };

  return (
    <>
      <div id="container-security2">
        <div id="card-security2">
          <span></span>
          <div id="information-security2">
            <h2>2 Factor Authentication</h2>
            <p>
              Orbit's security is robust and fortified by the implementation of
              Two-Factor Authentication (2FA), which ensures an additional layer
              of protection by requiring users to verify their identity through
              a second authentication factor. This added security measure is
              applied not only during login but also for crucial actions such as
              changing settings, ensuring a secure and trusted user experience.
            </p>
            <button onClick={af2Open}>Read more</button>
          </div>
        </div>
        <div id="card-security2">
          <span></span>
          <div id="information-security2">
            <h2>Blockchain</h2>
            <p>
              Orbit leverages blockchain technology to decentralize data and
              ensure the security of user accounts and their associated data. By
              utilizing blockchain, we provide a transparent and
              tamper-resistant platform that gives users ownership and control
              over their posted content, establishing a secure and trusted
              environment for our users.
            </p>
            <button onClick={blockchainOpen}>Read more</button>
          </div>
        </div>
        <div id="card-security2">
          <span></span>
          <div id="information-security2">
            <h2>Encryption</h2>
            <p>
              Orbit employs advanced encryption technologies, including
              industry-standard algorithms like SHA256 and more, to ensure the
              utmost protection and confidentiality of user data. By encrypting
              user information, we ensure that sensitive data remains secure and
              cannot be deciphered or accessed by unauthorized individuals,
              providing our users with a high level of data privacy and peace of
              mind.
            </p>
            <button onClick={encryptionOpen}>Read more</button>
          </div>
        </div>
        <img id="nebula10-index" src="./global/nebula/12.png" alt="" />
        <img id="nebula11-index" src="./global/nebula/13.png" alt="" />
        <img id="nebula12-index" src="./global/nebula/5.png" alt="" />
      </div>
      <Modal open={af2} onClose={af2Close}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            height: "auto",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
            backdropFilter: "blur(10px)",
            "-webkit-backdrop-filter": "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          <h1 id="main-modal-features2">2 Factor Authentication</h1>
          <h4 id="sub-modal-features2">
            we prioritize the security of our users' accounts and sensitive
            information. To achieve this, we have implemented Two-Factor
            Authentication (2FA), an advanced security feature that enhances the
            login process and safeguards against unauthorized access. With 2FA
            enabled, users are required to provide two authentication factors to
            verify their identity: something they know (e.g., a password) and
            something they have (e.g., a unique verification code generated on
            their mobile device). <br /> <br /> During the login process, after
            entering their username and password, users will be prompted to
            provide the second authentication factor, typically through a
            time-based one-time password (TOTP) generated by an authenticator
            app or received via SMS. This additional verification step adds an
            extra layer of security, making it significantly more challenging
            for unauthorized individuals to gain access to user accounts. <br />{" "}
            <br />
            Furthermore, the implementation of 2FA extends beyond just the login
            process. We have integrated this security measure for crucial
            actions such as changing account settings, updating personal
            information, or modifying sensitive preferences. By requiring the
            second authentication factor for these actions, we ensure that only
            authorized users can make changes to their account, reducing the
            risk of unauthorized modifications or malicious activities.
          </h4>
        </Box>
      </Modal>

      <Modal open={blockchain} onClose={blockchainClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            height: "auto",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
            backdropFilter: "blur(10px)",
            "-webkit-backdrop-filter": "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          <h1 id="main-modal-features2">Blockchain</h1>
          <h4 id="sub-modal-features2">
            At Orbit, we harness the power of blockchain technology to
            revolutionize the way user data is managed and secured. By
            leveraging blockchain's decentralized nature, we create a
            transparent and trustless system that ensures the security and
            integrity of user accounts and their associated data. <br /> <br />{" "}
            Blockchain technology operates on a distributed network of nodes,
            where data is stored across multiple interconnected computers, known
            as blocks. Each block contains a timestamp and a cryptographic hash
            of the previous block, creating a chain of data that is nearly
            impossible to modify without consensus from the network. This
            immutability and transparency provide a robust layer of security,
            protecting user accounts from unauthorized access or data tampering.{" "}
            <br /> <br /> In addition to security, blockchain technology enables
            users on Orbit to have ownership and control over their posted
            content. Through the use of cryptographic keys, users can establish
            a unique digital identity and prove their authorship of the content
            they post. This ensures that users have full control over their
            intellectual property and prevents unauthorized use or plagiarism of
            their work.
          </h4>
        </Box>
      </Modal>

      <Modal open={encryption} onClose={encryptionClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            height: "auto",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
            backdropFilter: "blur(10px)",
            "-webkit-backdrop-filter": "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          <h1 id="main-modal-features2">Home Page</h1>
          <h4 id="sub-modal-features2">
            The home page serves as a personal planet for users, offering a
            platform to express their thoughts through various media and fully
            customize their digital space to reflect their unique identity. Each
            post shared on the home page has the opportunity to be showcased in
            the reels, creating a captivating journey through a diverse range of
            content from other users' home planets. <br />
            <br /> This fusion of customization and the reels functionality
            enables users to explore, connect, and engage with a community that
            shares their interests while experiencing the richness and diversity
            of creative expressions from different perspectives. It's a virtual
            universe where users can truly express themselves and forge
            meaningful connections in an ever-expanding cosmos of shared
            experiences.
          </h4>
        </Box>
      </Modal>
    </>
  );
}

export default Security2;
