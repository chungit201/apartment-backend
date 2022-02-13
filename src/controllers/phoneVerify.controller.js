
const accountSid = "AC03c0744a16131b97ac95d052fd55fb1d";
const authToken = "eeec8a870dba17e4ef86740a3093cec2";
const client = require("twilio")(accountSid, authToken);


const verifySms = (req, res) => {
  console.log(req.body);
  const result = client.verify.services("VA811fc4fc4c2ed438f5e5012c89d84c99")
    .verifications
    .create({ to:req.body.phone , channel: "sms" })
    .then(verification => res.json(verification))
    .catch(err => console.log(err));

};

const checkCode = (req,res) =>{
  client.verify.services('VA811fc4fc4c2ed438f5e5012c89d84c99')
    .verificationChecks
    .create(req.body)
    .then(verification_check => res.json(verification_check))
    .catch(err=>console.log(err))
}

module.exports = {
  verifySms,
  checkCode,
};
