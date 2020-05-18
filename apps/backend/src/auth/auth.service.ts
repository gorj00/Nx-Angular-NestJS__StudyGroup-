import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService extends PassportStrategy(BearerStrategy, 'oauth-bearer')
{
  constructor()
  {
    super({
      identityMetadata: process.env.OAUTH_ID_METADATA_TENANT,
      clientID: process.env.OAUTH_APP_ID,
    })
  }

  async validate(response: any)
  {
    const { unique_name }: {unique_name: string} = response;
    if (unique_name) return unique_name;
    else return null;
  }
}

