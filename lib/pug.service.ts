import { Injectable, Logger } from '@nestjs/common';
import * as pug from 'pug';
import { Json } from './interfaces/json.interface';

@Injectable()
export class PugService {
  public inlineRender(template: string, object: Json): string {
    return pug.render(template, object);
  }

  public renderFile(path: string, object: Json): string {
    return pug.renderFile(path, object);
  }
}
