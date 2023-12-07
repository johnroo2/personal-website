import mailjet from 'node-mailjet';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  const mailjetClient = mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE,
  );

  const request = mailjetClient.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: { Email: email, Name: name },
        To: [{ Email: 'j369liu@uwaterloo.ca', Name: 'John Liu' }],
        Subject: "For my personal website",
        TextPart: message,
        HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
      },
    ],
  });

  try{
    const response = await request;
    console.log(response.body);
    res.json({ success: true });
  }
  catch(err){
    console.log(err);
    res.json({ success: false, error: err});
  }
}
