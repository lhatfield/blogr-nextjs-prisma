import dynamoose from "dynamoose";

const PostSchema = new dynamoose.Schema({
  id: {
    type: String,
    validate: async (val) => {
      if (val === undefined) {
        throw new Error("ID is undefined");
      }
      return true;
    },
    required: true,
  },
  title: String,
  content: String,
  published: Boolean,
  authorId: String,
});

const AccountSchema = new dynamoose.Schema({
  accountid: {
    type: String,
    required: true,
    validate: async (val) => {
      if (val === undefined) {
        throw new Error("ID is undefined");
      }
      return true;
    },
  },
  type: String,
  provider: String,
  providerAccountId: String,
  refresh_token: String,
  access_token: String,
  expires_at: Number,
  token_type: String,
  scope: String,
  id_token: String,
  session_state: String,
  oauth_token_secret: String,
  oauth_token: String,
});

const SessionSchema = new dynamoose.Schema({
  SessionToken: String,
  expires: Date,
  sessionToken: String,
});

const VerificationTokenSchema = new dynamoose.Schema({
  id: String,
  token: String,
  expires: Date,
});

const UserSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      required: true,
      validate: async (val) => {
        if (val === undefined) {
          throw new Error("ID is undefined");
        }
        return true;
      },
    },
    name: String,
    email: String,
    emailVerified: Date,
    image: String,
    createdAt: Date,
    updatedAt: Date,
    posts: {
      type: Set,
      schema: [String],
    },
    accounts: {
      type: Set,
      schema: [AccountSchema],
    },
    sessions: {
      type: Set,
      schema: [SessionSchema],
    },
  },
  {
    saveUnknown: false,
  }
);

export {
  PostSchema,
  UserSchema,
  VerificationTokenSchema,
  AccountSchema,
  SessionSchema,
};
