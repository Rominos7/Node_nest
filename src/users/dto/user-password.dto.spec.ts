import { ArgumentMetadata, BadRequestException, ValidationPipe } from '@nestjs/common';

import { UserPasswordDto } from './user-password.dto';

describe.only('UserPasswordDto', () => {
  let pipe: ValidationPipe;
  let params: UserPasswordDto;

  const metadata: ArgumentMetadata = {
    type: 'param',
    metatype: UserPasswordDto,
  };

  beforeEach(async () => {
    pipe = new ValidationPipe();
    
    params = new UserPasswordDto();
    params.password = 'JonJosh' as any;   
  });

  it('does not return any error for valid input', async () => {
    expect(await pipe.transform(params, metadata)).toEqual(params);
  });

  it('throws error if user name is empty', async () => {
    params.password = '' as any;

    await expect(pipe.transform(params, metadata)).rejects.toThrow(BadRequestException);
  });

  it('throws error if user name is not string', async () => {
    params.password = undefined as any;

    await expect(pipe.transform(params, metadata)).rejects.toThrow(BadRequestException);
  });
});