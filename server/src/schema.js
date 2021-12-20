const { gql } = require('apollo-server');

const typeDefs = gql`
  "Contains entry points to the schema"
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    "Query for a specific track with non-null track ID as an argument"
    track(id: ID!): Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's complete description, optionally in Markdown format"
    description: String
    "The number of times the track has been viewed"
    numberOfViews: Int
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "List of Modules. The Modules inside the list are non-nullable. The list is non-nullable"
    modules: [Module!]!
  }

  "A module is a single unit of teaching. Multiple modules compose a track"
  type Module{
    id: ID!
    title: String!
    "The module's length, in minutes"
    length: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`;

module.exports = typeDefs;
