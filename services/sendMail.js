export const sendMail = async event => {
  event.preventDefault();

  const res = await fetch('/api/email', {
    body: JSON.stringify({
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      msg: event.target.msg.value,
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const result = await res.json()
  return result;
}
