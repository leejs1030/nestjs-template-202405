import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
  async runWithDelay<T, U>(
    mapper: (value: T, index: number, array: T[]) => U,
    list: T[],
    options: { delay: number; batchSize: number } = { delay: 0, batchSize: 1 },
  ): Promise<Awaited<U>[]> {
    const result: Awaited<U>[] = [];
    for (let i = 0; i < list.length; i += options.batchSize) {
      const batch = list.slice(i, i + options.batchSize);
      const promises = batch.map((item, index, array) =>
        mapper(item, index, array),
      );
      const batchResult = await Promise.all(promises);
      result.push(...batchResult);
      await this.sleep(options.delay);
    }
    return result;
  }

  async sleep(delay: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
}
