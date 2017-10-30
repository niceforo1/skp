//const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default recipients => {
  const invalidRecipients = recipients
    .split(',')
    .map(recipient => recipient.trim())
    .filter(recipient => re.test(recipient) === false);
  if (invalidRecipients.length) {
    return `These emails are invalid: ${invalidRecipients}`;
  }
  return;
};
