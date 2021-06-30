import { ArgumentMetadata, BadRequestException, ValidationPipe } from '@nestjs/common';

import { TasksIdDto } from './tasks-id.dto';

describe.only('TasksIdDto', () => {
  let pipe: ValidationPipe;
  let params: TasksIdDto;

  const metadata: ArgumentMetadata = {
    type: 'param',
    metatype: TasksIdDto,
  };

  beforeEach(async () => {
    pipe = new ValidationPipe();
    
    params = new TasksIdDto();
    params.id = '1' as any;   
  });

  it('does not return any error for valid input', async () => {
    expect(await pipe.transform(params, metadata)).toEqual(params);
  });

  it('throws error if id is invalid', async () => {
    params.id = '' as any;

    await expect(pipe.transform(params, metadata)).rejects.toThrow(BadRequestException);
  });
});
