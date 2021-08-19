'use strict';
import convertTime from './convertTime';
import "babel-polyfill";

const time = ["PT5M24S","PT3H20S"]
const expectedTime = [5,180]


test('espera receber uma hora convertida ', async () => {
    const convert = await convertTime(time); 
    expect(convert).toEqual(expectedTime)
})

