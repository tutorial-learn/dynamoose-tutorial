import dynamoose from "dynamoose";
import shortid from "shortid";

const musicSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      required: true,
      default: shortid.generate,
    },
    title: String,
    description: String,
    genres: {
      type: Array,
      schema: [String],
    },
  },
  {
    saveUnknown: true,
    timestamps: true,
  }
);

const Music = dynamoose.model("Music", musicSchema);

export default Music;
