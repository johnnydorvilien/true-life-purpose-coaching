// eslint-disable
// this is an auto generated file. This will be overwritten

export const getContact = `query GetContact($id: ID!) {
  getContact(id: $id) {
    id
    userName
    emailAddress
    phoneNumber
    website
    message
  }
}
`;
export const listContacts = `query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userName
      emailAddress
      phoneNumber
      website
      message
    }
    nextToken
  }
}
`;
