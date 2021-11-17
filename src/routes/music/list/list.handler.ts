import {
  request,
  summary,
  body,
  tags,
  path,
  Context,
  responses,
} from "koa-swagger-decorator";
import { constants } from "http2";
import Music from "../../../model/schema/music.schema";
import {
  AddMusicItemBodySchema,
  MusicItemPathSchema,
  GetMusicItemResponseSchema,
  GetMusicListResponseSchema,
  updateMusicItemBodySchema,
} from "./list.interface";

const Tag = tags(["List"]);

export default class MusicRouter {
  @Tag
  @request(constants.HTTP2_METHOD_GET, "/list/{id}")
  @summary("Get music item by id")
  @path(MusicItemPathSchema)
  @responses(GetMusicItemResponseSchema)
  static async getMusicItem(ctx: Context) {
    const { id } = ctx.validatedParams;
    try {
      const music = await Music.get({ id });
      if (!music) {
        throw new Error("Not founded music by id");
      }
      ctx.body = music;
    } catch (error) {
      ctx.throw(error);
    }
  }

  @Tag
  @request(constants.HTTP2_METHOD_GET, "/list")
  @summary("Get music list")
  @responses(GetMusicListResponseSchema)
  static async getMusicList(ctx: Context) {
    try {
      const musicList = await Music.scan().exec();
      ctx.body = musicList;
    } catch (error) {
      ctx.throw(error);
    }
  }

  @Tag
  @request(constants.HTTP2_METHOD_POST, "/list")
  @summary("Create Music item")
  @body(AddMusicItemBodySchema)
  static async addMusicItem(ctx: Context) {
    const body = ctx.validatedBody;
    try {
      const result = await Music.create(body);
      if (!result) throw new Error("Music item didn't create");
    } catch (error) {
      ctx.throw(error);
    }
  }

  @Tag
  @request(constants.HTTP2_METHOD_DELETE, "/list/{id}")
  @summary("Delete music item")
  @path(MusicItemPathSchema)
  static async deleteMusicItem(ctx: Context) {
    const { id } = ctx.validatedParams;
    try {
      const checkExisted = await Music.get({ id });
      if (!checkExisted) throw new Error("Not Founded Music by id");
      Music.delete({ id });
    } catch (error) {
      ctx.throw(error);
    }
  }

  @Tag
  @request(constants.HTTP2_METHOD_PUT, "/list/{id}")
  @summary("Update music item")
  @path(MusicItemPathSchema)
  @body(updateMusicItemBodySchema)
  static async updateMusicItem(ctx: Context) {
    const { id } = ctx.validatedParams;
    const body = ctx.validatedBody;
    try {
      const checkExisted = await Music.get({ id });
      if (!checkExisted) throw new Error("Not Founded Music by id");
      Music.update({ id }, body);
    } catch (error) {
      ctx.throw(error);
    }
  }
}
