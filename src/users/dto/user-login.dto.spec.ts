import { ArgumentMetadata, BadRequestException, ValidationPipe } from '@nestjs/common';

import { UserLoginDto } from './user-login.dto';

describe.only('UserLoginDto', () => {
  let pipe: ValidationPipe;
  let params: UserLoginDto;

  const metadata: ArgumentMetadata = {
    type: 'param',
    metatype: UserLoginDto,
  };

  beforeEach(async () => {
    pipe = new ValidationPipe();
    
    params = new UserLoginDto();
    params.name = 'JonJosh' as any;   
  });

  it('does not return any error for valid input', async () => {
    expect(await pipe.transform(params, metadata)).toEqual(params);
  });

  it('throws error if user name is empty', async () => {
    params.name = '' as any;

    await expect(pipe.transform(params, metadata)).rejects.toThrow(BadRequestException);
  });

  it('throws error if user name is not string', async () => {
    params.name = undefined as any;

    await expect(pipe.transform(params, metadata)).rejects.toThrow(BadRequestException);
  });
});