import { loadTXTContent } from "./common.js";

const agreementPath = "/docs/userAgreement.txt";

// Get the span element
const agreementElement = document.getElementById("lbl_userAgreementContent");

loadTXTContent(agreementPath, agreementElement);
