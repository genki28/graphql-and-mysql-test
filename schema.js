const { buildSchema } = require('graphql');

// type メソッド名（検索キー）: [返答キー]

const schema = buildSchema(`
    type Member {
        name: String
        gender: String
    }

    type Query {
        members (
            first: Int,
            name: String,
            gender: String
        ): [Member],
    }

    type Mutation {
        addMember(name: String!, gender: String!): Member
    }
`)

module.exports = schema;