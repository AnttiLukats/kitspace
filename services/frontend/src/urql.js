const {Provider, Client} = require('@kitspace/urql')
const Q = `
query {
  projects {
    id
    name
  }
}
`;

const client = new Client({
  url: 'http://localhost:3000/!gitlabql',
})

module.exports = {client, Q}