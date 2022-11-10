export const posted = (created: string) => {
  const createdAt = new Date(created)
  const nowDate = new Date();
  const first = createdAt.getTime()
  const second = nowDate.getTime()
  return Math.round((second - first) / 86400000);
}