import { constants } from "http2";
import { SuccessResponseSchema } from "../../../utils/response";

export const AddMusicItemBodySchema = {
  title: {
    type: "string",
    required: true,
    description: "Music title",
  },
  description: {
    type: "string",
    required: true,
    description: "Music info or description",
  },
  genres: {
    type: "array",
    required: true,
    description: "Music genres",
    items: {
      type: "string",
      example: "pop",
    },
  },
};

export const updateMusicItemBodySchema = {
  title: {
    type: "string",
    required: false,
    description: "Music title",
  },
  description: {
    type: "string",
    required: false,
    description: "Music info or description",
  },
  genres: {
    type: "array",
    required: false,
    description: "Music genres",
    items: {
      type: "string",
      example: "pop",
    },
  },
};

export const MusicItemPathSchema = {
  id: {
    type: "string",
    require: true,
    description: "Music id",
  },
};

export const GetMusicItemResponseSchema = {
  [constants.HTTP_STATUS_OK]: SuccessResponseSchema({
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "music id",
      },
      title: {
        type: "string",
        description: "music title",
      },
      description: {
        type: "string",
        description: "music info or description",
      },
      genres: {
        type: "array",
        items: {
          type: "string",
          description: "music genre",
        },
      },
      createdAt: {
        type: "number",
        description: "music created time",
      },
      updatedAt: {
        type: "number",
        description: "music updated time",
      },
    },
  }),
};

export const GetMusicListResponseSchema = {
  [constants.HTTP_STATUS_OK]: SuccessResponseSchema({
    type: "array",
    items: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "music id",
        },
        title: {
          type: "string",
          description: "music title",
        },
        description: {
          type: "string",
          description: "music info or description",
        },
        genres: {
          type: "array",
          items: {
            type: "string",
            description: "music genre",
          },
        },
        createdAt: {
          type: "number",
          description: "music created time",
        },
        updatedAt: {
          type: "number",
          description: "music updated time",
        },
      },
    },
  }),
};
