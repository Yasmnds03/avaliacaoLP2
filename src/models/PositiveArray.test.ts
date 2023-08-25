import { PositiveArray } from './PositiveArray';

describe('PositiveArray', () => {
  let positiveArray: PositiveArray;

  beforeEach(() => {
    positiveArray = new PositiveArray();
  });


  test('deve adicionar um elemento positivo ao array', () => {

    positiveArray.add(5);


    expect(positiveArray.values).toEqual([5]);
  });

  test('não deve adicionar um elemento negativo ao array', () => {

    positiveArray.add(-3);


    expect(positiveArray.values).toEqual([]);
  });


  test('deve remover um elemento pelo índice', () => {
    positiveArray.add(10);
    positiveArray.add(20);


    const removido = positiveArray.remove(0);


    expect(removido).toEqual(10);
    expect(positiveArray.values).toEqual([20]);
  });

  test('deve retornar indefinido ao tentar remover de um índice inválido', () => {
    positiveArray.add(15);


    const removido = positiveArray.remove(1);


    expect(removido).toBeUndefined();
    expect(positiveArray.values).toEqual([15]);
  });
});