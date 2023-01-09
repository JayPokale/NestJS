import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { routes: {
      post: "/user",
      get: "/user",
      get_id: "/user/:id",
      update: "/user/id",
      delete: "/user/id"
    } };
  }
}
