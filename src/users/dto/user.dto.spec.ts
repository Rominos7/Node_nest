import { ArgumentMetadata, BadRequestException, ValidationPipe } from '@nestjs/common';

import { UserDto } from './user.dto';

describe.only('UserDto', () => {
  let pipe: ValidationPipe;
  let credentials: UserDto;

  const metadata: ArgumentMetadata = {
    type: 'body',
    metatype: UserDto,
  };

  beforeEach(async () => {
    pipe = new ValidationPipe();
    
    credentials = new UserDto();
    credentials.login = 'JonJosh' as any;
    credentials.password = 'Password' as any;   
  });

  it('does not return any error for valid input', async () => {
    expect(await pipe.transform(credentials, metadata)).toEqual(credentials);
  });

  it('throws error if user login is null', async () => {
    credentials.login = null as any;

    await expect(pipe.transform(credentials, metadata)).rejects.toThrow(BadRequestException);
  });

  it('throws error if user login is not string', async () => {
    credentials.login = 111 as any;

    await expect(pipe.transform(credentials, metadata)).rejects.toThrow(BadRequestException);
  });
});
