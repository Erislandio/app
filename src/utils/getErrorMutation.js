export function getErrorMutation(error) {
  const err = JSON.stringify(error);
  const { message } = JSON.parse(err);
  return message.split(":")[1];
}
