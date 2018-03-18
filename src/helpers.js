export const getApiUri = () => {
  const domain = process.env.NODE_ENV === 'development' ? 'localhost:3000' : '172.21.147.177'
  return 'http://' + domain + '/api/pkgs'
}
